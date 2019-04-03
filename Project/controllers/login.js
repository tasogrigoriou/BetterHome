var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');

//Password encryption tool; npm install bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/', async function(req, res) {
    database.Users.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(user) {
        if(!user){
            res.redirect('/');
        }else{
            bcrypt.compare(req.body.password, user.password, function(err, result){
                if(result == true){
                    console.log("Logged in!")
                    res.redirect('/home');
                }else{
                    res.send('Incorrect Password');
                    res.redirect('/');
                }
            });
        }
    });

});