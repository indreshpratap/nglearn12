var Datastore = require("nedb");
var path = require("path");
var db = {
  users: new Datastore({
    filename: path.join(__dirname,"db","users"),
    autoload: true
  }), 
  leaves: new Datastore({
    filename: path.join(__dirname,"db","leaves"),
    autoload: true
  })
   
};

module.exports = db;
