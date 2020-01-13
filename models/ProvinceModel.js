const sequelize = require('../config/database');
const { Sequelize, Model, DataTypes } = require('sequelize');

class Province extends Model {}
Province.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'Name is required'
      }
    }
  }
}, {
  sequelize,
  modelName: 'province',
  timestamps: true,
  paranoid: true
});

module.exports = Province;