const sequelize = require('../config/database');
const { Sequelize, Model, DataTypes } = require('sequelize');
const ucwords = require('../helpers/ucwords');

class School extends Model { }
School.init({
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: {
				msg: 'Name is required'
			}
		},
		get() {
			return ucwords(this.getDataValue('name'));
		},
		set(val) {
			this.setDataValue('name', val.toLowerCase());
		}
	}
}, {
	sequelize,
	modelName: 'school',
	timestamps: true,
	paranoid: true,
});

module.exports = School;