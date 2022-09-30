import Corridas from '../models/Corridas';

class CorridasController {
  async store(req, res) {
    try {
      const novaCorrida = await Corridas.create(req.body);
      const {
        id, carro, placa, motorista,
      } = novaCorrida;
      return res.json({
        id, carro, placa, motorista,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const corrida = await Corridas.findAll({ attributes: ['id', 'carro', 'placa', 'motorista'] });
      return res.json(corrida);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getById(req, res) {
    try {
      const corrida = await Corridas.findByPk(req.params.id);
      const { corrida_id, carro, placa } = corrida;
      return res.json({ corrida_id, carro, placa });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async udpate(req, res) {
    try {
      const corrida = await Corridas.findByPk(req.params.id);

      if (!corrida) {
        return res.status(400).json({
          errors: ['Corrida não existe'],
        });
      }

      const novaCorrida = await corrida.update(req.body);
      const { carro, placa, motorista } = novaCorrida;
      return res.json({ carro, placa, motorista });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const corrida = await Corridas.findByPk(req.params.id);
      if (!corrida) {
        return res.status(400).json({
          error: ['Corrida não existe'],
        });
      }

      await corrida.destroy();
      return res.json({ msg: 'Corrida apagada com sucesso!' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CorridasController();
