module.exports = function(sequelize, DataTypes) {
  const SkeletonLord = sequelize.define('SkeletonLord', {
    name: {
      type: DataTypes.STRING,
      defaultValue: 'Skeleton Lord',
    },
    health_points: {
      type: DataTypes.INTEGER,
      defaultValue: 75,
    },
    attack_points: {
      type: DataTypes.INTEGER,
      defaultValue: 20,
    },
    weapon_power: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
  });

  return SkeletonLord;
};
