const express = require('express');
const router = express.Router();
const database = require('../models/cloudsql');

//Get all listings
router.get('/listing', async function (req, res) {
    let sql = `SELECT * FROM Listing`;
    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            // result is an array of Listing objects
            console.log(result);
            res.send(result);
        }
    })
});

//Get all users
router.get('/users', function (req, res) {
    let sql = `SELECT * FROM Users`;
    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
});

//Get all images
router.get('/listing', function (req, res) {
    let sql = `SELECT * FROM ListingImage`;
    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
});

//Delete a user
router.delete('/id:', function (req, res) {
    let sql = `DELETE FROM Users WHERE userId = ${req.body.userId} `;
    const result = database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
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
