var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');
const bcrypt = require('bcrypt');

router.post('/', function(req, res) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        let user = {
            username: req.body.username,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            phoneNumber: req.body.phoneNumber
        };

        let sql2 = `INSERT INTO Users SET ?`;
        database.query(sql2, user).then(result => {
                res.send(result);
            }).catch(err => {
            res.status(err.status || 500).send(err.message);
        })
    });
});

module.exports = router;
