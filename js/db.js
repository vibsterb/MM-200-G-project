const { Client } = require('pg'); //krever npm install pg først
const connectionString = process.env.DATABASE_URL;
const db = {};

function runQuery(query) {
    let respons = null;
    const client = new Client({
        connectionString: connectionString,
        ssl: true
    });

    try {
        client.connect()
        if (client) {
          console.log('db-client connected');
            client.query(query, (err, res) => {
                console.log('Error from client.query: '+ err);
                console.log('result from client.query: ' + res);
                respons = res;
                client.end()
            })

        }
    } catch (e) { /*error*/ }

    return respons;
}

//ulike operasjoner for databasen
db.insert = function (query) {
    return runQuery(query);
}

db.select = function (query) {
    return runQuery(query);
}

db.delete = function (query) {
    //db.update(query);
    return runQuery(query);
}

db.update = function (query) {
    return runQuery(query);
}

module.exports = db;
