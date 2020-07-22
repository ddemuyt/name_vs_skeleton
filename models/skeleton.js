module.exports = function(sequelize, DataTypes) {
  const Skeleton = sequelize.define('Skeleton', {
    name: {
      type: DataTypes.STRING,
      defaultValue: 'Skeleton',
    },
    health_points: {
      type: DataTypes.INTEGER,
      defaultValue: 35,
    },
    attack_points: {
      type: DataTypes.INTEGER,
      defaultValue: 15,
    },
    weapon_power: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
    },
  });

  return Skeleton;
};
