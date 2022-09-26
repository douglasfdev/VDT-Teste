import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        nome: 'Douglas',
        email: 'douglas.fernandes91@live.com',
        password: '123456',
      });
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
