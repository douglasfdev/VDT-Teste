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
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'users',
            key: 'id',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
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
