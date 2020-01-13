const sequelize = require('../config/database');
const Province = require('../models/ProvinceModel');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.index = async (req, res) => {
  try {
    if (req.query.name) {
      const province = await Province.findAll({ 
        where: {
          name: {
            [Op.like]: `${req.query.name}%`
          }
        },
        order: ['name']
      });
      return res.json(province);
    }

    const provinces = await Province.findAll({
      order: ['name']
    });
    res.json(provinces);
  } catch (err) {
    console.log(err)
  }
}

exports.store = async (req, res) => {
  try {
    const province = await Province.create(req.body);
    res.json(province);
  } catch (err) {
    res.status(400).send(err.errors[0].message);
  }
}

exports.show = async (req, res) => {
  try {
    const province = await Province.findAll({
      where: {
        id:req.params.id
      }
    });
    res.json(province);
  } catch (err) {
    console.log(err)
  }
}

exports.destroy = async (req, res) => {
  try {
    const province = await Province.destroy({
      where: {
        id:req.params.id
      }
    });

    res.json(province);
  } catch (err) {
    console.log(err)
  }
}

exports.update = async (req, res) => {
  try {
    const province = await Province.update(req.body, {
        where: {
          id: req.params.id
        }
      });
    res.json(province);
  } catch(err) {
    console.log(err);
  }
}

