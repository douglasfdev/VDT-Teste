module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'corridas',
    [
      {
        carro: 'Fiesta',
        placa: 'AAA0000',
        motorista: 'Fulano',
        finalizada: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        carro: 'Cruze',
        placa: 'JJJ1111',
        motorista: 'Ciclano',
        finalizada: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        carro: 'Veloster',
        placa: 'ZZZ9999',
        motorista: 'Beltrano',
        finalizada: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
