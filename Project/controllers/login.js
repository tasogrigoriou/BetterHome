const express = require('express');
const router = express.Router();
const database = require('../models/cloudsql');
const bcrypt = require('bcrypt');

router.post('/', function (req, res) {
    let sql = `SELECT * from Users WHERE username = '${req.body.username}'`;
    database.query(sql, function(err, dbResponse) {
        if (err) {
            res.status(err.status || 500).send(err.message);
        }
        else if (!dbResponse.length) {
            res.status(500).send("No entries match query");
        }
        else {
            const user = dbResponse[0];
            bcrypt.compare(req.body.password, user.password, function(err, bcryptRes) {
                if (bcryptRes) {
                    console.log(user);
                    res.send(user);
                }
                else {
                    res.status(500).send("Unable to login");
                }
            });
        }
    });
});

router.put('/', function (req, res) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {

        let passwordQuery = ``;
        if (req.body.password && req.body.password !== '') {
            passwordQuery = `password = '${hash}', `;
        }

        let sql = `UPDATE Users 
        SET 
        username = '${req.body.username}', 
        ${passwordQuery}
        firstName = '${req.body.firstName}', 
        lastName = '${req.body.lastName}', 
        emailAddress = '${req.body.emailAddress}', 
        phoneNumber = '${req.body.phoneNumber}'
        WHERE 
        userId = '${req.body.userId}'`;
        console.log(sql);

        database.query(sql, function(err, result) {
            if (err) {
                res.status(err.status || 500).send(err.message);
            }
            else {
                res.send(result);
            }
        })
    });
});

module.exports = router;
