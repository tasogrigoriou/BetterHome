const mysql = require('mysql');
const config = require('../config.json');

// Database Connection for Production

const options = {
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: 'betterhome'
};

if (config.INSTANCE_CONNECTION_NAME) {
    options.socketPath = `/cloudsql/${config.INSTANCE_CONNECTION_NAME}`;
}

const connection = mysql.createConnection(options);

// Database Connection for Development

// let connection = mysql.createConnection({
//     host: config.DB_HOST,
//     user: config.DB_USER,
//     database: config.DB_DATABASE,
//     password: config.DB_PASS
// });

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
});

module.exports = connection;