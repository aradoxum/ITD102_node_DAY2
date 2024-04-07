const config = require('../config/db'); //connect db 
const Sequelize = require('sequelize'); //import sequelize

const dataType = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }

);