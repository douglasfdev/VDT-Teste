import Sequelize, { Model } from 'sequelize';

export default class Reserves extends Model {
  static init(sequelize) {
    super.init({
      date: {
        type: Sequelize.DATE,
        defaultValue: '',
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    }, {
      sequelize,
      tableName: 'reserves',
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Corridas, { foreignKey: 'user_id' });
  }
}
