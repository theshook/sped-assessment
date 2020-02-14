const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { School, Pupil } = require('../models/Model');

exports.index = async (req, res) => {
  try {
    const pupils = await Pupil.findAndCountAll({
      include: [School]
    }); 
    return res.render('Pupils/index', {
      pupils: pupils,
      title: 'Pupils'
    });
  } catch (err) {
    res.status(400).send(err.errors[0].message);
  }
};

exports.store = async (req, res) => {
  try {
    await Pupil.create(req.body);    
    res.redirect('/Pupils');
  } catch (err) {
    res.status(400).send(err.errors[0].message);
  }
};

exports.destroy = async (req, res) => {
  try {
    const pupil = await Pupil.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect('/Pupils');
  } catch (err) {
    console.log(err);
  }
};

exports.show = async (req, res) => {
  try {
    const pupil = await Pupil.findByPk(req.params.id, {
      include: [School]
    });
    data = { pupil, title: 'Pupils' };
    res.render('Pupils/edit', data);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
      console.log(req.body);
      await Pupil.update(req.body, {
      where: {
        id: req.params.id
      }});
      res.redirect('/Pupils');
  } catch (err) {
    console.log(err);
  }
};