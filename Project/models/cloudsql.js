const mysql = require('promise-mysql');
const config = require('../config.json');

let options;

switch (config.NODE_ENV) {

    // Database Connection for Production
    case 'prod':
        options = {
            user: config.MYSQL_USER,
            password: config.MYSQL_PASSWORD,
            database: config.DB_DATABASE
        };
        options.socketPath = `/cloudsql/${config.INSTANCE_CONNECTION_NAME}`;
        break;

    // Database Connection for Local Environment
    case 'local':
        options = {
            host: config.HOST,
            user: config.DB_USER,
            database: config.DB_DATABASE,
            password: config.DB_PASS
        };
        break;
}

let connection;

mysql.createConnection(options)
     .then(conn => {
        connection = conn;
        console.log('Connected as thread id: ' + connection.threadId);
        connection.end();
        module.exports = connection;
     }).catch(err => {
     if (connection && connection.end) connection.end();
     console.log(err);
});

// connection.connect(err => {
//     if (err) {
//         console.error('Error connecting: ' + err.stack);
//         return;
//     }
//     console.log('Connected as thread id: ' + connection.threadId);
// });

// module.exports = connection;
