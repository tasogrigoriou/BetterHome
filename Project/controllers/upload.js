let express = require('express');
let router = express.Router();
let upload = require('../models/multer');
let database = require('../models/cloudsql');

router.post('/', upload.single('file'), function(req, res) {
    let file = req.file;
    let listingId = Number(req.header('listingId'));

    console.log(file);
    console.log(listingId);

    let sql1 = `INSERT INTO Image(image_url) VALUES ('${file.filename}')`;
    database.query(sql1, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });

    let sql2 = `INSERT INTO ListingImage(Lid, image_url) VALUES ('${listingId}', '${file.filename}')`;
    database.query(sql2, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.send('File uploaded successfully! -> name = ' + file.filename);
        }
    });
});

module.exports = router;
