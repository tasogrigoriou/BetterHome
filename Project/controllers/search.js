const express = require('express');
const router = express.Router();
const database = require('../models/cloudsql');

router.post('/', function (req, res) {

    let city = req.body.city;
    let listingType = req.body.listingType;
    let numBedrooms = Number(req.body.numBedrooms);
    let numBathrooms = Number(req.body.numBathrooms);
    let forSale = Number(req.body.forSale);

    let listingTypeQuery = ``;
    let numBedroomsQuery = ``;
    let numBathroomsQuery = ``;
    let forSaleQuery = ``;

    if (listingType && listingType !== 'Any') {
        listingTypeQuery = `AND listingType = '${listingType}'`;
    }
    if (numBedrooms && numBedrooms !== 0) {
        numBedroomsQuery = `AND numBedrooms = ${numBedrooms}`;
    }
    if (numBathrooms && numBathrooms !== 0) {
        numBathroomsQuery = `AND numBathrooms = ${numBathrooms}`;
    }
    if (!isNaN(forSale)) {
        forSaleQuery = `AND forSale = ${forSale}`;
    }

    let sql = `SELECT * FROM Listing WHERE city LIKE '%${city}%' ${listingTypeQuery} ${numBedroomsQuery} ${numBathroomsQuery} ${forSaleQuery}`;
    console.log(sql);

    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        }
        else if (!result.length) {
            res.status(500).send('No listing match given search query');
        }
        else {
            // result is an array of Listing objects
            console.log(result);

            let promises = [];

            // iterate over all search listing results,
            // query to get the imageUrls associated with that listing,
            // assign the urls for that listing
            for (let i = 0; i < result.length; i++) {
                let listing = result[i];
                let sql2 = `SELECT imageUrl FROM ListingImage WHERE listingId = ${listing.listingId}`;
                let promise = sqlPromiseWrapper(sql2).then(images => {
                    console.log(images);
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
                // Result will now be the search listing results with imageUrls
                console.log(result);
                res.send(result);
            }).catch(err => {
                console.log(err);
            });
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
