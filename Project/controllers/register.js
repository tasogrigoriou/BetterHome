var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');

//Password encryption tool; npm install bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Auto-Generate salt and has for password
router.post('/', async function(req, res) {
    bcrypt(req.body.password, saltRounds, function(err, hash){
        database.Users.create({
            idUsers: req.body.idUsers,
            username: req.body.username,
            password: hash,
            Fname: req.body.Fname,
            Lname: req.body.Lname,
            email: req.body.email,
            PhoneNum: req.body.PhoneNum
        }).then(function(data){
            if(data){
                res.redirect('/home'); //Redirects to home page
            }
        });

    });

});