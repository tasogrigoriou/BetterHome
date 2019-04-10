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

module.exports = router;
