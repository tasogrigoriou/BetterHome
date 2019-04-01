var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');

module.exports.authenticate = function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    //Tried the login in a different format for variety :D
    const result = database.query('SELECT * FROM users WHERE email = ?', [email], function(err, result){
            if(err){
                res.json({
                    status: false,
                    message: "Error"
                })
            } else{
                if(result.length > 0){
                    if(password = result[0].password){
                        res.json({
                            status: true,
                            message: "Logged in"
                        })
                    }else{
                        res.json({
                            status: false,
                            message: "Password is incorrect"
                        });
                    }
                }else{
                    res.json({
                        status: false,
                        message: "Email does not exist"
                    });
                }
            }

    });
}