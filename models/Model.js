const Province = require('./Province');
const School = require('./School');

Province.hasMany(School);
School.belongsTo(Province);

module.exports = { Province, School }