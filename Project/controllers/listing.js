const express = require('express');
const router = express.Router();
const database = require('../models/cloudsql');

// Create new listing
router.post('/', function (req, res) {
    let listing = {
        listingId: null,
        title: req.body.title,
        listingType: req.body.listingType,
        price: req.body.price,
        lotSize: req.body.lotSize,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        forSale: req.body.forSale,
        description: req.body.description,
        numBedrooms: req.body.numBedrooms,
        numBathrooms: req.body.numBathrooms,
        laundry: req.body.laundry,
        hospitalAccess: req.body.hospitalAccess,
        BARTAccess: req.body.BARTAccess,
        wheelchairAccess: req.body.wheelchairAccess
    };
    let values = [
        req.body.title,
        req.body.listingType,
        req.body.price,
        req.body.lotSize,
        req.body.street,
        req.body.city,
        req.body.state,
        req.body.zipCode,
        req.body.forSale,
        req.body.description,
        req.body.numBedrooms,
        req.body.numBathrooms,
        req.body.laundry,
        req.body.hospitalAccess
    ]
    console.log(listing);
    let sql = `INSERT INTO Listing(title, listingType, price, lotSize, street, city, state, zipCode, forSale, description, numBedrooms, numBathrooms, laundry, hospitalAccess, BARTAccess, wheelchairAccess) 
    VALUES (` +
        `
        
        )`;
    database.query(sql, listing, function (err, results) {
        if (err) {
            console.log(err);
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(results);
            let listingId = results.insertId;
            let userId = database.escape(req.body.user.userId);

            // Insert new Creates row containing userId and listingId

            let sql = `INSERT INTO Creates (userId, listingId) VALUES (` +
                `
                        ${req.body.user.userId},
                        ${listingId}
                        )`;
            database.query(sql, function (err, createsResponse) {

                if (err) {
                    res.status(err.status || 500).send(err.message);
                } else {
                    console.log(createsResponse);
                    res.send({ listingId: listingId });
                }
            })
        }
    })
});

// Get one listing
router.get('/:id', function (req, res) {
    //Get creates item in order to get the listing owners id
    let sql = `SELECT * FROM Listing WHERE listingId = ` + database.escape(req.params.id);
    database.query(sql, function (err, result) {

        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            let listing = result[0];

            let sql2 = `SELECT * FROM Users WHERE userId IN (SELECT userId FROM Creates WHERE listingId = ` + database.escape(req.params.id) + `)`;
            database.query(sql2, function (err, createsResult) {
                if (err) {
                    res.status(err.status || 500).send(err.message);
                } else {
                    listing.user = createsResult[0];

                    let sql3 = `SELECT imageUrl FROM ListingImage WHERE listingId = ` + database.escape(listing.listingId);
                    sqlPromiseWrapper(sql3).then(images => {
                        let listingImages = [];
                        for (let i = 0; i < images.length; i++) {
                            listingImages.push(images[i].imageUrl);
                        }
                        listing.imageUrls = listingImages;
                        res.send(listing);
                    }).catch(error => {
                        console.log(error);
                        res.send(listing);
                    });
                }
            }).catch(error => {
                console.log(error);
                res.send(listing);
            });
        }
    })
});

router.put('/:id', function (req, res) {
    let listing = {
        title: req.body.title,
        listingType: req.body.listingType,
        price: req.body.price,
        lotSize: req.body.lotSize,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        forSale: req.body.forSale,
        description: req.body.description,
        numBedrooms: req.body.numBedrooms,
        numBathrooms: req.body.numBathrooms,
        laundry: req.body.laundry,
        hospitalAccess: req.body.hospitalAccess,
        BARTAccess: req.body.BARTAccess,
        wheelchairAccess: req.body.wheelchairAccess
    };
    let id = {listingId: req.params.id};

    let sql = `UPDATE Listing SET ? WHERE ?`;
    database.query(sql, [listing, id]).then(listingResponse => {
        console.log(listingResponse);
        res.send(listingResponse);
    }).catch(err => {
        res.status(err.status || 500).send(err.message);
    })
});

// Get users posted listings
router.get('/user/listings', function (req, res) {
    let userId = Number(req.header('userId'));
    let sql = 'SELECT * FROM Listing WHERE listingId IN (SELECT listingId FROM Creates WHERE userId = ' + database.escape(userId) + ')';

    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);

            let promises = [];
            for (let i = 0; i < result.length; i++) {
                let listing = result[i];
                let sql2 = `SELECT imageUrl FROM ListingImage WHERE listingId = ` + database.escape(listing.listingId);
                let promise = sqlPromiseWrapper(sql2).then(images => {
                    let listingImages = [];
                    for (let i = 0; i < images.length; i++) {
                        listingImages.push(images[i].imageUrl);
                    }
                    listing.imageUrls = listingImages;
                }).catch(error => {
                    console.log(error);
                });
                promises.push(promise);
            }

            Promise.all(promises).then(s => {
                console.log(result);
                res.send(result);
            }).catch(err => {
                console.log(err);
            });
        }
    })
});

// Delete Listing
router.delete('/:id',function (req, res) {

    // First delete all images associated with that listing
    let sql = `DELETE FROM ListingImage WHERE listingId = ` + database.escape(req.params.id);
    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);

            // Then delete the listing itself
            let sql2 = `DELETE FROM Listing WHERE listingId = ` + database.escape(req.params.id);
            database.query(sql2, function (err, result) {
                if (err) {
                    res.status(err.status || 500).send(err.message);
                } else {
                    console.log(result);
                    res.send(result);
                }
            })
        }
    });
});

// Delete imageURL for a given Listing
router.put('/delete-image',function (req, res) {
    console.log(req.body.imageUrl);
    let sql = `DELETE FROM ListingImage WHERE imageUrl = ` + database.escape(req.body.imageUrl);
    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

// sqlPromiseWrapper wraps a sql query call into a Promise
// and handles the callbacks with resolve and reject
function sqlPromiseWrapper(sql) {
    return new Promise((resolve, reject) => {
        database.query(sql, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = router;

