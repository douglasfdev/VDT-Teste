import Sequelize, { Model } from 'sequelize';

export default class Corridas extends Model {
  static init(sequelize) {
    super.init({
      carro: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 15],
            msg: 'O carro deve ter entre 3 e 15 caracteres',
          },
        },
      },
      placa: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          not: {
            args: [[/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/]],
            msg: 'Placa inválida',
          },
        },
      },
      motorista: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome do motorista deve ter entre 3 e 255 caracteres',
          },
        },
      },
      finalizada: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    }, {
      sequelize,
      tableName: 'corridas',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Reserves, { foreignKey: 'user_id' });
  }
}
