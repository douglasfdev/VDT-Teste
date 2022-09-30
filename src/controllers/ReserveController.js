import { sign } from 'jsonwebtoken';
import Reserves from '../models/Reserves';
import User from '../models/User';
import Corridas from '../models/Corridas';

class CorridasController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ['Credenciais Inválidas!'],
        });
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({
          errors: ['Usuário não existe!'],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha Inválida!'],
        });
      }

      const { id } = user;
      const token = sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token });
    } catch (e) {
      return res.json({
        msg: 'Erro no sistema',
      });
    }
  }
}

export default new CorridasController();
