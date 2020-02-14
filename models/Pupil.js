const sequelize = require('../config/database');
const { Sequelize, Model, DataTypes } = require('sequelize');
const FormatDate = require('../helpers/formatDate');

class Pupil extends Model { }
Pupil.init({
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'First Name is required'
      }
    },
		get() {
			return ucwords(this.getDataValue('firstname'));
		},
		set(val) {
			this.setDataValue('firstname', val.toLowerCase());
		}
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Last Name is required'
      }
    },
		get() {
			return ucwords(this.getDataValue('lastname'));
		},
		set(val) {
			this.setDataValue('lastname', val.toLowerCase());
		}
  },
  birthdate: {
    type: Sequelize.DATEONLY                    ,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Birth Date is required'
      }
    },
    get() {
			return formatDate(this.getDataValue('birthdate'));
    },
		set(val) {
			this.setDataValue('birthdate', val.toString('yyyy-mm-dd'));
		}
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Birth Date is required'
      }
    },
		get() {
			return ucwords(this.getDataValue('address'));
		},
		set(val) {
			this.setDataValue('address', val.toLowerCase());
		}
  },
  // name: {   
  //   type: Sequelize.STRING, 
  //   get() {
  //     return this.firstname + ' ' + this.lastname;
  //   }
  // }
}, {
  sequelize,
  modelName: 'pupil',
  timestamps: true,
  paranoid: true,
});

module.exports = Pupil;