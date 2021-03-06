module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });

  User.associate = (models) => {
    User.hasMany(models.Product, { foreignKeu: 'userId' });
  }

  return User;
};