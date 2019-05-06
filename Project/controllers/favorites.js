const express = require('express');
const router = express.Router();
const database = require('../models/cloudsql');

router.post('/', function(req, res) {
    let favorite = {
        userId: req.body.userId,
        listingId: req.body.listingId
    };
    let sql = `INSERT INTO Favorites SET ?`;
    database.query(sql, favorite).then(result => {
            console.log(result);
            res.send(result);
        }).catch(err => {
        res.status(err.status || 500).send(err.message);
    })
});

router.get('/', function (req, res) {
    let userId = Number(req.header('userId'));

    let sql = `SELECT * FROM Listing WHERE listingId IN (SELECT listingId FROM Favorites WHERE userId = ` + database.escape(userId) + `)`;
    database.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(err.status || 500).send(err.message);
        } else if (!result.length) {
            res.status(500).send('No favorite listings for user');
        } else {
            console.log(result);

            let promises = [];
            for (let i = 0; i < result.length; i++) {
                let listing = result[i];
                listing.isFavorite = true;
                let sql2 = `SELECT imageUrl FROM ListingImage WHERE listingId = ` + database.escape(listing.listingId);
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

            Promise.all(promises).then(s => {
                console.log(result);
                res.send(result);
            }).catch(err => {
                console.log(err);
            });
        }
    })
});

// Determine if listingId is favorite for given userId
router.get('/:id', function (req, res) {
    let userId = Number(req.header('userId'));
    let listingId = Number(req.params.id);

    let sql = `SELECT * FROM Favorites WHERE userId = ` + database.escape(userId) + ` AND listingId = ` + database.escape(listingId);
    database.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(err.status || 500).send(err.message);
        } else if (!result.length) {
            res.status(500).send('This listing is not a favorite for the user');
        } else {
            res.status(200).send({listingId: listingId});
        }
    })
});

router.delete('/', function(req, res) {
    let userId = Number(req.header('userId'));
    let listingId = Number(req.header('listingId'));

    let sql = `DELETE FROM Favorites WHERE userId = ` + database.escape(userId) + ` AND listingId = ` + database.escape(listingId);
    database.query(sql, function (err, result) {
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
