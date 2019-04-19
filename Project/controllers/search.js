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
            res.status(500).send('No listings match given search query');
        }
        else {
            // result is an array of Listing objects
            console.log(result);
            res.send(result);
        }
    });
});

module.exports = router;
