var mysql = require("mysql2/promise");

module.exports = function(){
  var config = {
    host : "localhost",
    port : 3306,
    user : "root",
    password : "1234",
    database : "testdb"
  };

  var pool = mysql.createPool(config);

  return pool;

}();
