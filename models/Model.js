const Province = require('./Province');
const School = require('./School');
const Pupil = require('./Pupil');

Province.hasMany(School);
School.belongsTo(Province);

School.hasMany(Pupil);
Pupil.belongsTo(School);

module.exports = { Province, School, Pupil }