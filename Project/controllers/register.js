var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');
const bcrypt = require('bcrypt');

router.post('/', function(req, res) {

    // Auto-Generate salt and hash for password
    bcrypt.hash(req.body.password, 10, function(err, hash) {

        var sql = `INSERT INTO Users(username, password, firstName, lastName, emailAddress, phoneNumber) VALUES (` +
            `
            '${req.body.username}',
            '${hash}',
            '${req.body.firstName}',
            '${req.body.lastName}',
            '${req.body.emailAddress}',
            '${req.body.phoneNumber}'
            )`;

        console.log(sql);

        database.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(result);
            }
        })
    });

});

module.exports = router;
