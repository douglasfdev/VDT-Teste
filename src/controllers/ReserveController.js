import Reserve from '../models/Reserves';

class ReserveController {
  async store(req, res) {
    try {
      const reserve = await Reserve.create(req.user_id);
      const { status, date, finalizada } = reserve;
      return res.json({ status, date, finalizada });
    } catch (e) {
      return res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const reserves = await Reserve.findAll({
        attributes: ['status'],
        order: [['status', 'DESC']],
      });

      return res.json(reserves);
    } catch (e) {
      return res.json({ errors: e.errors.map((err) => err.message) });
    }
  }
}
export default new ReserveController();
