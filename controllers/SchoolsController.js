const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Province, School } = require('../models/Model');

exports.index = async (req, res) => {
	try {
		const page = req.query.page || 0;

		if (req.query.name) {
			const school = await School.findAndCountAll({
				include: [Province],
				where: {
					name: {
						[Op.like]: `${req.query.name}%`
					}
				},
				limit: 10,
				offset: (Number(page) === 0) ? 0 : ((page - 1) * 10),
				order: ['name']
			});
			return res.json(school);
		}

		const schools = await School.findAndCountAll({
			include: [Province],
			limit: 10,
			offset: (Number(page) === 0) ? 0 : ((page - 1) * 10),
			order: ['name']
		});
		res.json(schools);
	} catch (err) {
		console.log(err)
	}
}

exports.store = async (req, res) => {
	try {
		const school = await School.create(req.body);
		res.json(school);
	} catch (err) {
		res.status(400).send(err.errors[0].message);
	}
}

exports.show = async (req, res) => {
	try {
		const school = await School.findAll({
			include: [Province],
			where: {
				id: req.params.id
			}
		});
		res.json(school);
	} catch (err) {
		console.log(err)
	}
}

exports.destroy = async (req, res) => {
	try {
		const school = await School.destroy({
			where: {
				id: req.params.id
			}
		});
		res.json(school);
	} catch (err) {
		console.log(err)
	}
}

exports.update = async (req, res) => {
	try {
		const school = await School.update(req.body, {
			where: {
				id: req.params.id
			}
		});
		res.json(school);
	} catch (err) {
		console.log(err);
	}
}

