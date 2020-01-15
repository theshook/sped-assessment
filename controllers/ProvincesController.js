const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Province, School } = require('../models/Model');

exports.index = async (req, res) => {
  try {
    const page = req.query.page || 0;

    if (req.query.name) {
      const province = await Province.findAndCountAll({
        include: [School],
        where: {
          name: {
            [Op.like]: `${req.query.name}%`
          }
        },
        limit: 10,
        offset: (Number(page) === 0) ? 0 : ((page - 1) * 10),
        order: ['name']
      });
      return res.json(province);
    }

    const provinces = await Province.findAndCountAll({
      include: [School],
      limit: 10,
      offset: (Number(page) === 0) ? 0 : ((page - 1) * perPage),
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
      include: [School],
      where: {
        id: req.params.id
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
        id: req.params.id
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
  } catch (err) {
    console.log(err);
  }
}

