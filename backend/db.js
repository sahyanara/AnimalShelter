// const mongoose = require("mongoose");
// const MONGODB_URI = "mongodb+srv://ssaravanan9:4crlhTQpN0G51dpa@cluster0.c1mtq.mongodb.net/test"

// mongoose.connect("MONGODB_URI",{ useNewUrlParser: true }, (conn, err) => { console.log("You have connected to the database")});

// var client = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error: '));
// db.once('open', function(callback) {
// //The code in this asynchronous callback block is executed after connecting to MongoDB. 
//     console.log('Successfully connected to MongoDB.');
// });

const { MongoClient } = require("mongodb");
const url = "mongodb+srv://ssaravanan9:4crlhTQpN0G51dpa@cluster0.c1mtq.mongodb.net/test";
const client = new MongoClient(url);
const dbName = "Animal_Shelter";


// const fs = require('fs');
// const mongodb = require('mongodb');


// const MongoClient = mongodb.MongoClient;

// const client = new MongoClient('mongodb://localhost:27017');




// const petsJSON = fs.readFileSync('pets.json').toString();

client.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }

    const database = client.db(dbName);

    const petsCollection = database.collection('Pets');

//     var petObject = JSON.parse(petsJSON);

//     //petsCollection.insertMany(petObject);

    petsCollection.find().toArray(function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });
});