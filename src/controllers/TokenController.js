import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    console.log(email, password);

    res.json('OK');
  }
}

export default new TokenController();
