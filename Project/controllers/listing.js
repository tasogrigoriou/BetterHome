const express = require('express');
const router = express.Router();
const database = require('../models/cloudsql');

// Create new listing
router.post('/', function (req, res) {
    let sql = `INSERT INTO Listing(title, listingType, price, lotSize, street, city, state, zipCode, forSale, description, numBedrooms, numBathrooms, laundry, hospitalAccess, BARTAccess, wheelchairAccess) 
    VALUES (` +
        `
        "${req.body.title}",    
        "${req.body.listingType}",
        ${req.body.price},
        "${req.body.lotSize}",
        "${req.body.street}",
        "${req.body.city}",
        "${req.body.state}",
        ${req.body.zipCode},
        ${req.body.forSale},
        "${req.body.description}",
        ${req.body.numBedrooms},
        ${req.body.numBathrooms},
        ${req.body.laundry},
        ${req.body.hospitalAccess},
        ${req.body.BARTAccess},
        ${req.body.wheelchairAccess}
        )`;
    database.query(sql, function (err, insertedListingResponse) {
        if (err) {
            console.log(err);
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(insertedListingResponse);
            let listingId = insertedListingResponse.insertId;

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
//read one
// router.get('/:id', async function (req, res) {
//     //Get creates item in order to get the listing owners id
//     let sql = `SELECT * FROM Creates WHERE listingId = '${param.id}'`;
//     database.query(sql, function (err, createsResponse) {
//         if (err) {
//             res.status(err.status || 500).send(err.message);
//         } else {
//             //Creates response from database
//             let creates = createsResponse[0];
//             console.log(createsResponse);
//             //Get User from Users table
//             let sql =  `SELECT * FROM Users WHERE userId = '${creates.userId}'`;
//             database.query(sql, function (err, userResponse) {
//                 if (err) {
//                     res.status(err.status || 500).send(err.message);
//                 } else {
//                     //User Response from database
//                     let user = userResponse[0];
//                     console.log(userResponse);
//                     //Get Listing from Listing table
//                     let sql = `SELECT * FROM Listing WHERE listingId = '${creates.listingId}'`;
//                     database.query(sql, function (err, listingResponse) {
//                         if (err) {
//                             res.status(err.status || 500).send(err.message);
//                         } else {
//                             //Listing Response from database
//                             let listing = listingResponse[0];
//                             console.log(listingResponse);
//                             let sql = `SELECT imageUrl FROM ListingImage WHERE listingId = '${creates.listingId}'`;
//                             database.query(sql, function (err, listingImageResponse) {
//                                 if (err) {
//                                     res.status(err.status || 500).send(err.message);
//                                 } else {
//                                     //imageUrl response from ListingImage in database
//                                     console.log(listingImageResponse);
//                                     //Save imageUrls to an array called listing Images
//                                     let listingImages = [];
//                                     for (let i = 0; i < listingImageResponse.length; i++) {
//                                         listingImages.push(listingImageResponse[i]);
//                                     }
//                                     //Create a response object containing all relevant information
//                                     let result = [user, listing, listingImages];
//                                     res.send(result);
//                                 }
//                             })
//                         }
//                     })
//                 }
//             })
//         }
//     })
// });

// Get users posted listings
router.get('/user/listings', function (req, res) {
    let userId = Number(req.header('userId'));
    let sql = `SELECT * FROM Listing WHERE listingId IN (SELECT listingId FROM Creates WHERE userId = ${userId})`;
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
                let sql2 = `SELECT imageUrl FROM ListingImage WHERE listingId = ${listing.listingId}`;
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

/*
router.put('/:id', function (req, res) {
    var sql = `UPDATE Listing SET title = '${req.body.title}', listingType = '${req.body.listingType}', price = '${req.body.price}', city = '${req.body.city}', state = '${req.body.state}', zipCode= '${req.body.zipCode}', street = '${req.body.street}', forSale = '${req.body.forSale}', numBedrooms = '${req.body.numBedrooms}', numBathrooms = '${req.body.numBathrooms}' WHERE Lid = '${req.body.Lid}'`;
    console.log(sql);
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

// Delete Listing
router.delete('/:id',function (req, res) {

    // First delete all images associated with that listing
    let sql = `DELETE FROM ListingImage WHERE listingId = ${req.params.id}`;
    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);

            // Then delete the listing itself
            let sql2 = `DELETE FROM Listing WHERE listingId = ${req.params.id}`;
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
    let sql = `DELETE FROM ListingImage WHERE imageUrl = '${req.body.imageUrl}'`;
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
