const express = require('express');
const router = express.Router();
const database = require('../models/cloudsql');

//Get all listings
router.get('/listings', function (req, res) {
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
router.get('/images', function (req, res) {
    let sql = `SELECT imageUrl FROM ListingImage`;
    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            let imageUrls = [];
            for (let i = 0; i < result.length; i++) {
                imageUrls.push(result[i].imageUrl);
            }
            res.send(imageUrls);
        }
    })
});

//Delete a user
router.delete('/:id', function (req, res) {
    let sql = `DELETE FROM Users WHERE userId = ` + database.escape(req.params.id);
    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
});

module.exports = router;
