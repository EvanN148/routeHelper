const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const myConfig = require('./config.js');
const schemaPath = path.join(__dirname, '/schema.sql');
const connection = mysql.createConnection(myConfig);
const schemaStmts = fs.readFileSync(schemaPath).toString().split(';'); //statements in schema.sql must end with ';'

const initializeDb = () => {
  schemaStmts.forEach(statement => {
    while (statement.indexOf('\'\n\'')) {
       statement = statement.substr(statement.indexOf('\'\n\'') + 2)
    }
    if (statement.length > 0) {
      connection.query(statement + ';')
    }
  });
};

module.exports = {
  initializeDb
};





