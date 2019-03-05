module.exports = (sequelize, DataTypes) => {
  const Appointament = sequelize.define('Appointment', {
    date: DataTypes.DATE
  })

  Appointament.associate = models => {
    Appointament.belongsTo(models.User, { foreingKey: 'user_id' })
    Appointament.belongsTo(models.User, { foreingKey: 'provider_id' })
  }

  return Appointament
}
