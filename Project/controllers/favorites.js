var express = require('express');
var router = express.Router();
var upload = require('../models/multer');
var database = require('../models/cloudsql');

router.post('/', function(req, res) {
    let userId = req.body.userId;
    let listingId = req.body.listingId;

    console.log(userId);
    console.log(listingId);

    let sq1 = `INSERT INTO Favorites(userId, listingId) VALUES ('${userId}', '${listingId}')`;
    database.query(sq1, function(err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

router.get('/', function (req, res) {
    let userId = req.body.userId;

    console.log(userId);

    let sql = `SELECT * FROM Listing WHERE listingId IN (SELECT listingId FROM Favorites WHERE userId = '${userId}')`;

    database.query(sql, function (err, result) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        } else {
            console.log(result);
            res.send(result);
        }
    })
});

router.delete('/:id', function(req, res) {
    let userId = req.body.userId;
    let listingId = req.body.listingId;
    console.log(userId);
    console.log(listingId);

    let sql = `DELETE FROM Favorites WHERE userId = ('${userId}') AND listingId = ('${listingId}')`;

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