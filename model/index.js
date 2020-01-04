const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'ArticleManagement';

// Connection to Database
function connect(callback) {
    MongoClient.connect(url, function(error, client) {
        if(error) {
            console.error('Failed to connect to Database', error);
        } else {
            const db = client.db(dbName);
            callback && callback(db);
            client.close();
        }
    });
}

module.exports = {
    connect
};

