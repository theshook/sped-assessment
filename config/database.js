const Sequelize = require('sequelize');
const dbDebugger = require('debug')('app:db');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    dbDebugger('Connection has been established successfully.');
  })
  .catch(err => {
    dbDebugger('Unable to connect to the database:', err);
  });

module.exports = sequelize;