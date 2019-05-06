let express = require('express');
let router = express.Router();
let upload = require('../models/multer');
let database = require('../models/cloudsql');

let config = require('../config');

const Storage = require('@google-cloud/storage');

// Instantiate a storage client
const storage = Storage();

// A bucket is a container for objects (files).
const bucket = storage.bucket(config.CLOUD_BUCKET);

router.post('/', upload.single('file'), function(req, res, next) {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }
    let listingId = Number(req.header('listingId'));

    // Create a new blob in the bucket and upload the file data.
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();


    blobStream.on('error', (err) => {
        next(err);
    });

    blobStream.on('finish', () => {
        // The public URL can be used to directly access the file via HTTP.
        const imageUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

        let image = {
            listingId: listingId,
            imageUrl: imageUrl
        };
        let sql = `INSERT INTO ListingImage SET ?`;
        database.query(sql, image).then(result => {
            console.log(result);
            res.status(200).send({imageUrl: imageUrl});
        }).catch(err => {
            res.status(err.status || 500).send(err.message);
        })
    });

    blobStream.end(req.file.buffer);
});

module.exports = router;
