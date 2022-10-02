import Reserve from '../models/Reserves';
import Corridas from '../models/Corridas';

class ReserveController {
  async store(req, res) {
    try {
      const reserve = await Reserve.create(req.user_id);
      const { status, date, finalizada } = reserve;
      return res.json({ status, date, finalizada });
    } catch (e) {
      return res.json({ errors: e });
    }
  }

  async index(req, res) {
    try {
      const reserves = await Reserve.findAll({
        attributes: ['id', 'status'],
        order: [['id', 'DESC'], [Corridas, 'id', 'DESC']],
        include: {
          model: Corridas,
          attributes: ['carro', 'placa', 'motorista'],
        },
      });

      return res.json(reserves);
    } catch (e) {
      return res.json({ errors: e });
    }
  }
}
export default new ReserveController();
