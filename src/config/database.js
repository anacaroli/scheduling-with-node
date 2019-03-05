const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'gonodemodulo2',
  freezeTableName: true,
  port: 5532,
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
