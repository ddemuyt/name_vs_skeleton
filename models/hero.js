module.exports = function(sequelize, DataTypes) {
  const Hero = sequelize.define('Hero', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 64],
    },
    health_points: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    attack_points: {
      type: DataTypes.INTEGER,
      defaultValue: 20,
    },
    weapon_power: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    potion_count: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
    },
  });

  // Making assiosation with User model
  Hero.associate = (models) => {
    Hero.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Hero;
};
