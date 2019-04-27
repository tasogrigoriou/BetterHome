var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');

//Create
router.post('/', function (req, res) {
    //Create new listing in database
    let sql = `INSERT INTO Listing(title, listingType, price, lotSize, city, state, zipCode, street, forSale, paragraph, numBedrooms, numBathrooms, laundry, hospitalAccess, BARTAccess, wheelchairAccess) VALUES (` +
        `
        '${req.body.title}',    
        '${req.body.listingType}',
        '${req.body.price}',
        '${req.body.lotSize}',
        '${req.body.street}',
        '${req.body.city}',
        '${req.body.state}',
        '${req.body.zipCode}',
        '${req.body.forSale}',
        '${req.body.paragraph}',
        '${req.body.numBedrooms}',
        '${req.body.numBathrooms}',
        '${req.body.laundry}',
        '${req.body.hospitalAccess}',
        '${req.body.BARTAccess}',
        '${req.body.wheelchairAccess}'
        )`;

    console.log(sql);

    database.query(sql, function (err, insertedListingResponse) {
        if (err) {
            console.log(insertedListingResponse);
            res.status(err.status || 500).send(err.message);
        } else {
            let insertedListing = insertedListingResponse[0];
            console.log(insertedListingResponse);
            //Get the id of the newly inserted listing
            let sql = `SELECT LAST_INSERT_ID(); from Listing`;
            database.query(sql, function (err, listingIdResponse) {
                if (err) {
                    res.status(err.status || 500).send(err.message);
                } else {
                    //ListingId response from newly created listing
                    let listing = listingIdResponse[0];
                    //Insert new creates containing userId and listingId
                    let sql = `INSERT INTO Creates (userId, listingId, dateAdded) VALUES (` +
                        `
                        '${req.body.userId}',
                        '${listing.listingId}'
                        `;
                    database.query(sql, function (err, createsResponse) {
                        if (err) {
                            res.status(err.status || 500).send(err.message);
                        } else {
                            //creates response from database
                            let creates = createsResponse;
                            console.log(createsResponse);
                            //Create result containing the results of the insertions
                            let result = [insertedListing, creates]
                            res.send(result);
                        }
                    })
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
router.get('/:id', async function (req, res) {
    //Get creates item in order to get the listing owners id
    let sql = `SELECT * FROM Creates WHERE listingId = '${param.id}'`;
    database.query(sql, function (err, createsResponse) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            //Creates response from database
            let creates = createsResponse[0];
            console.log(createsResponse);
            //Get User from Users table
            let sql =  `SELECT * FROM Users WHERE userId = '${creates.userId}'`;
            database.query(sql, function (err, userResponse) {
                if (err) {
                    res.status(err.status || 500).send(err.message);
                } else {
                    //User Response from database
                    let user = userResponse[0];
                    console.log(userResponse);
                    //Get Listing from Listing table
                    let sql = `SELECT * FROM Listing WHERE listingId = '${creates.listingId}'`;
                    database.query(sql, function (err, listingResponse) {
                        if (err) {
                            res.status(err.status || 500).send(err.message);
                        } else {
                            //Listing Response from database
                            let listing = listingResponse[0];
                            console.log(listingResponse);
                            let sql = `SELECT imageUrl FROM ListingImage WHERE listingId = '${creates.listingId}'`;
                            database.query(sql, function (err, listingImageResponse) {
                                if (err) {
                                    res.status(err.status || 500).send(err.message);
                                } else {
                                    //imageUrl response from ListingImage in database
                                    console.log(listingImageResponse);
                                    //Save imageUrls to an array called listing Images
                                    let listingImages = [];
                                    for (let i = 0; i < listingImageResponse.length; i++) {
                                        listingImages.push(listingImageResponse[i]);
                                    }
                                    //Create a response object containing all relevant information
                                    let result = [user, listing, listingImages];
                                    res.send(result);
                                }
                            })
                        }
                    })
                }
            })
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
//Delete
router.delete('/id:', async function (req, res) {
    let sql = `DELETE FROM Creates WHERE listingId = ${req.body.listingId} `;
    const result = await database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
});
module.exports = router;