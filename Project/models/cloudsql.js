const mysql = require('mysql2');
const config = require('../config.json');

let options;

switch (config.NODE_ENV) {

    // Database Connection for Production
    case 'prod':
        options = {
            user: config.MYSQL_USER,
            password: config.MYSQL_PASSWORD,
            database: config.DB_DATABASE,

            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        };
        options.socketPath = `/cloudsql/${config.INSTANCE_CONNECTION_NAME}`;
        break;

    // Database Connection for Local Environment
    case 'local':
        options = {
            host: config.HOST,
            user: config.DB_USER,
            database: config.DB_DATABASE,
            password: config.DB_PASS,

            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        };
        break;
}

const pool = mysql.createPool(options);

module.exports = pool.promise();
