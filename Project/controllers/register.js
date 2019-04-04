var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');

//Password encryption tool; npm install cryptr
var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');

module.exports.register=function(req,res){
    var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "username":req.body.username,
        "password":encryptedString,
        "Fname":req.body.Fname,
        "Lname":req.body.Lname,
        "email":req.body.email,
        "PhoneNum":req.body.PhoneNum
    }
    database.query('INSERT INTO users SET ?',users, function (error, results) {
        if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            res.json({
                status:true,
                data:results,
                message:'user registered sucessfully'
            })
        }
    });


});

