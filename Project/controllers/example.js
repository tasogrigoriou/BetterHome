var express = require('express');
var router = express.Router();
var database = require('../models/cloudsql');

/* GET ALL EXAMPLE DATA */
router.get('/', async function (req, res, next) {
    const result = await database.query('SELECT * from FakeTable');
    console.log(result);
    res.send(result[0]);
});

/* GET SINGLE EXAMPLE DATA BY ID */
router.get('/:id', async function(req, res, next) {
    const result = await database.query('SELECT ' + id + ' from FakeTable');
    console.log(result);
    res.send(result[0]);
});

/* SAVE EXAMPLE DATA */
router.post('/', async function(req, res, next) {
    /*
    let post = {title: req.body.title, id}; //Simple layout for how we are going to implement for our website
    let sql = 'INSERT INTO FakeTable SET ?';
    let query = await database.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result[0]);
    })
    */
});

/* UPDATE EXAMPLE DATA */
router.put('/:id', async function(req, res, next) {

});

/* DELETE EXAMPLE DATA */
router.delete('/:id', async function(req, res, next) {

});

module.exports = router;
