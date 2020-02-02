const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Province, School } = require('../models/Model');

exports.index = async (req, res) => {
  try {
    const provinces = await Province.findAndCountAll({
      include: [School]
    });

    return res.render('Provinces/index', {
      provinces: provinces,
      title: 'Province'
    });
  } catch (err) {
    console.log(err);
  }
};

exports.store = async (req, res) => {
  try {
    const province = await Province.create(req.body);
    res.json(province);
  } catch (err) {
    res.status(400).send(err.errors[0].message);
  }
};

exports.show = async (req, res) => {
  try {
    const province = await Province.findByPk(req.params.id, {
      include: [School]
    });
    data = { province, title: 'Province' };
    res.render('Provinces/edit', data);
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    const province = await Province.destroy({
      where: {
        id: req.params.id
      }
    });

    res.redirect('/provinces');
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const province = await Province.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.redirect('/provinces');
  } catch (err) {
    console.log(err);
  }
};
