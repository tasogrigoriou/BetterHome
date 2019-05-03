const express = require('express');
const router = express.Router();
const database = require('../models/cloudsql');

router.post('/', function(req, res) {
    let userId = req.body.userId;
    let listingId = req.body.listingId;

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
    let userId = Number(req.header('userId'));

    let sql = 'SELECT listingId FROM Favorites WHERE userId = ' + database.escape(userId) + ')';
    database.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(err.status || 500).send(err.message);
        } else if (!result.length) {
            res.status(500).send('No favorite listings for user');
        } else {
            console.log(result);
            res.send(result);
        }
    })
});

router.delete('/:id', function(req, res) {
    let userId = req.body.userId;
    let listingId = req.body.listingId;

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
