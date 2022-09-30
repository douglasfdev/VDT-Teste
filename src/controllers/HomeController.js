import Aluno from '../models/Corridas';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Douglas',
      sobrenome: 'Fernades',
      email: 'douglas.fernandes91@live.com',
      idade: 30,
      peso: 70,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
