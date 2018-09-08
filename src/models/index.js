const { mysql } = require( '../config/app.config' ).getDefaultConfiguration();
const { database, username, password, dialect, host } = mysql;
const Sequelize = require('sequelize');

const sequelize = new Sequelize( database, username, password, {
    host: host,
    dialect: dialect,
    operatorsAliases: false,

    pool: {
         max: 5,
         min: 0,
         acquire: 30000,
         idle: 10000
   
        }
});

module.exports = sequelize;