'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', 
  {
    email: DataTypes.STRING
  },
  {
    password: DataTypes.bcrypt
  }, 
  {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};