const express = require('express');
const router = express.Router();
const database = require('../models/cloudsql');

router.post('/', function (req, res) {

    let sql = constructSearchQuery(req);

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
                let sql3 = `SELECT imageUrl FROM ListingImage WHERE listingId = ` + database.escape(listing.listingId);
                let promise = sqlPromiseWrapper(sql3).then(images => {
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

function constructSearchQuery(req) {
    let city = req.body.city;
    let listingType = req.body.listingType;
    let numBedrooms = Number(req.body.numBedrooms);
    let numBathrooms = Number(req.body.numBathrooms);
    let forSale = Number(req.body.forSale);
    let lotSize = Number(req.body.lotSize);
    let minPrice = Number(req.body.minPrice);
    let maxPrice = Number(req.body.maxPrice);
    let accessibilities = req.body.accessibilities;

    let listingTypeQuery = ``;
    let numBedroomsQuery = ``;
    let numBathroomsQuery = ``;
    let forSaleQuery = ``;
    let lotSizeQuery = ``;
    let priceQuery = ``;
    let laundryQuery = ``;
    let hospitalQuery = ``;
    let wheelchairQuery = ``;
    let bartQuery = ``;

    if (listingType && listingType !== 'Any') {
        listingTypeQuery = `AND listingType = ` + database.escape(listingType);
    }
    if (numBedrooms && numBedrooms !== 0) {
        numBedroomsQuery = `AND numBedrooms >= ` + database.escape(numBedrooms);
    }
    if (numBathrooms && numBathrooms !== 0) {
        numBathroomsQuery = `AND numBathrooms >= ` + database.escape(numBedrooms);
    }
    if (!isNaN(forSale)) {
        forSaleQuery = `AND forSale = ` + database.escape(forSale);
    }
    if (lotSize && lotSize !== 0) {
        lotSizeQuery = `AND lotSize >= ` + database.escape(lotSize);
    }
    if (minPrice && maxPrice) {
        priceQuery = `AND price BETWEEN ` + database.escape(minPrice) + ` AND ` + database.escape(maxPrice);
    } else if (minPrice) {
        priceQuery = `AND price >= ` + database.escape(minPrice);
    } else if (maxPrice) {
        priceQuery = `AND price <= ` + database.escape(maxPrice);
    }
    if (accessibilities) {
        if (accessibilities.indexOf('Laundry') > -1) {
            laundryQuery = `AND laundry = 1`;
        }
        if (accessibilities.indexOf('Hospital') > -1) {
            hospitalQuery = `AND hospitalAccess = 1`;
        }
        if (accessibilities.indexOf('Wheelchair') > -1) {
            wheelchairQuery = `AND wheelchairAccess = 1`;
        }
        if (accessibilities.indexOf('BART') > -1) {
            bartQuery = `AND BARTAccess = 1`;
        }
    }

    return `SELECT * FROM Listing WHERE city LIKE '%${city}%' 
    ${listingTypeQuery} ${numBedroomsQuery} ${numBathroomsQuery} ${forSaleQuery} ${priceQuery} ${lotSizeQuery}
    ${laundryQuery} ${hospitalQuery} ${wheelchairQuery} ${bartQuery}`;
}

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
