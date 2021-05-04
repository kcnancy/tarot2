module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    // The password cannot be null
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
