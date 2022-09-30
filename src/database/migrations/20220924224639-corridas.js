module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'corridas',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        carro: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        placa: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        motorista: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        finalizada: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('corridas');
  },
};
