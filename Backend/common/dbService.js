let neo4j = require('neo4j-driver');
const dotenv = require('dotenv');
dotenv.config();

console.log(`Your db server is ${process.env.DB_ENV}`);
let DB_LINK = "";
let DB_USER = "";
let DB_PASSWORD = "";
// let URL_PREFIX = "";



switch (process.env.DB_ENV) {
  case "PROD":
    DB_LINK = process.env.DB_LINK_PROD;
    DB_USER = process.env.DB_USER_PROD;
    DB_PASSWORD = process.env.DB_PASSWORD_PROD;

   
    break;
  case "STAGE":
    DB_LINK = process.env.DB_LINK_STAGE;
    DB_USER = process.env.DB_USER_STAGE;
    DB_PASSWORD = process.env.DB_PASSWORD_STAGE;
   
    break;

  case "LOCAL":
  
    DB_LINK = process.env.DB_LINK_LOCAL;
    DB_USER = process.env.DB_USER_LOCAL;
    DB_PASSWORD = process.env.DB_PASSWORD_LOCAL;
   
    break;

  default:
    DB_LINK = "neo4j+s://b4686da1.databases.neo4j.io"; 
    DB_USER = "neo4j";
    DB_PASSWORD = "vTlleXoEjt0XX8J4rvbRXelsVjBRMe3k6169Mg-Ogis";
}

const driver = neo4j.driver(DB_LINK, neo4j.auth.basic(DB_USER, DB_PASSWORD), {
  disableLosslessIntegers: true
});

let service = {};

service.getDriver = getDriver;



module.exports = service;

function getDriver() {
  return driver;
}
