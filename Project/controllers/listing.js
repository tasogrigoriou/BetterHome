const express = require('express');
const router = express.Router();
const database = require('../models/cloudsql');

// Create new listing
router.post('/', function (req, res) {
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
    let sql = `INSERT INTO Listing SET ?`;
    database.query(sql, listing, function (err, insertedListingResponse) {
        if (err) {
            console.log(err);
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(insertedListingResponse);
            let listingId = insertedListingResponse.insertId;

            // Insert new Creates row containing userId and listingId
            let creates = {userId: req.body.userId, listingId: listingId};
            let sql = `INSERT INTO Creates SET ?`;
            database.query(sql, creates, function (err, createsResponse) {
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

//Read all
/*
router.get('/', async function (req, res) {
    let sql = `SELECT * FROM Listing`;
    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
});
 */

// Get one listing
router.get('/:id', function (req, res) {
    //Get creates item in order to get the listing owners id
    let listingId = {listingId: Number(req.params.id)};
    let sql = 'SELECT * FROM Listing WHERE ?';
    database.query(sql, listingId, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            let listing = result[0];
            let sql2 = `SELECT imageUrl FROM ListingImage WHERE listingId = ${listing.listingId}`;
            sqlPromiseWrapper(sql2).then(images => {
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
    })
});
// update listing
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

    let listingId = {listingId: req.params.id};
    var sql = `UPDATE Listing SET ? WHERE ?`;
    database.query(sql, [listing, listingId], function (err, listingResponse) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(listingResponse);
            res.send(listingResponse);
        }
    })
});

//Delete
router.delete('/id:', function (req, res) {
    let deletedListing = {listingId: req.params.id};
    let sql = `DELETE FROM Creates WHERE ?`;
    database.query(sql, deletedListing, function (err, deleteResponse) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(deleteResponse);
            res.send(deleteResponse);
        }
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

            // iterate over all the user's posted listings,
            // query to get the imageUrls associated with that listing,
            // assign the urls for that listing
            for (let i = 0; i < result.length; i++) {
                let listing = result[i];
                let listingId = {listingId: result[i].listingId};
                let sql2 = `SELECT imageUrl FROM ListingImage WHERE ?`;
                let promise = sqlPromiseWrapper(sql2, listingId).then(images => {
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

            // Waits for all promises to be returned (all image uploading calls finish)
            Promise.all(promises).then(s => {
                // Result will now be the user's posted listings with imageUrls
                console.log(result);
                res.send(result);
            }).catch(err => {
                console.log(err);
            });
        }
    })
});

// Delete imageURL for a given Listing
router.put('/delete-image',function (req, res) {
    console.log(req.body.imageUrl);
    let imageUrl = {imageUrl: req.body.imagUrl};
    let sql = `DELETE FROM ListingImage WHERE ?`;
    database.query(sql, imageUrl, function (err, result) {
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
function sqlPromiseWrapper(sql, obj) {
    return new Promise((resolve, reject) => {
        database.query(sql, obj, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
module.exports = router;