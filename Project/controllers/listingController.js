var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');

//Create
router.post('/', function (req, res) {
    let date = new Date();
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

    database.query(sql, function (err, listingResult) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            let sql = `SELECT LAST_INSERT_ID(); from listing`;
            database.query(sql, function (err, dbResponse) {
                let listing = dbResponse[0];
                if (err) {
                    res.status(err.status || 500).send(err.message);
                } else {
                    let sql = `INSERT INTO Creates (userId, listingId, dateAdded) VALUES (` +
                        `
                        '${req.body.userId}',
                        '${listing.listingId}',
                        '${date.getTime()}',
                        )`;
                    database.query(sql, function (err, createsResult) {
                        if (err) {
                            res.status(err.status || 500).send(err.message);
                        } else {
                            res.send(listingResult);
                        }
                    })
                }
            })
        }
    })
});

//Read all
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
//read one
router.get('/:id', async function (req, res) {
    let sql = `SELECT '${req.body.listingId}' FROM Creates`;
    database.query(sql, function (err, dbResponse) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            let creates = dbResponse[0];
            let sql =  `SELECT '${creates.listingId}' FROM Listing UNION SELECT '${creates.userId}' FROM Users`;
            database.query(sql, function (err, result) {
                if (err) {
                    res.status(err.status || 500).send(err.message);
                } else {
                    console.log(result);
                    res.send(result);
                }
            })
        }
    })
});

//Update
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
//Delete
router.delete('/id:', async function (req, res) {
    let sql = `DELETE FROM Creates WHERE listingId = '${req.body.listingId} `;
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