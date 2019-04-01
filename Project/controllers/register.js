var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');

//Something I found while researching for registering users (NOT FINAL)
module.exports.register = function(req, res) {
    var user = {
        "idUsers": req.body.idUsers,
        "username": req.body.username,
        "password": req.body.password,
        "Fname": req.body.Fname,
        "Lname": req.body.Lname,
        "email": req.body.email,
        "PhoneNum": req.body.PhoneNum
    }

    const result = database.query('INSERT INTO Users SET ?', user, function(err, result){
        if(err) throw err;
        console.log('Registered!');
        res.send(result[0]);
    })
}