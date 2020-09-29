const connection = require("./connection.js");

//TODO check that callbacks work
module.exports = {
    //put the callback function in here
    selectAll: function(table, callback){
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if(err) throw err;
            callback(result)
        });
    },

    //put the callback function in here
    insertOne: function(newDataObject, callback){
        connection.query("INSERT INTO burgers SET ?", newDataObject, (err, result) => {
            if(err) throw err;
            callback(result)
        });
    },

    //for when they eat the burger
    //TODO make sure WHERE can take in an object
    updateOne: function(identificationObject, callback){
        connection.query("UPDATE burgers SET devoured = 1 WHERE ?", identificationObject, (err, result) => {
            if(err) throw err;
            callback(result)
        });
    }
}