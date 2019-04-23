const multer = require('multer');

var upload = multer({dest: 'images/'});

module.exports = upload;