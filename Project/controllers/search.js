var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');

function search( req, res, next) {
    var searchTerm = req.query.search;

    let query = 'SELECT * FROM Users';
    if(searchTerm != ''){
        query = 'SELECT * FROM Users WHERE username LIKE \'%' + searchTerm + '%\'';
    }
    database.query(query, (err, result) => {
        if(err){
            req.searchResult = "";
            req.searchTerm = "";
            next();
        }
        req.searchResult = result;
        res.searchTerm = searchTerm;

        next();
    });
}