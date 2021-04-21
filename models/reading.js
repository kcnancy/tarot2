const user = require('../models/user')

module.exports = (sequelize, DataTypes) => {
  const Reading = sequelize.define("Reading", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  // Reading.associate = models => {
  //   // We're saying that a reading should belong to a user
  //   // A reading can't be created without a user due to the foreign key constraint
  //   Reading.belongsTo(models.user, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Reading;
};
