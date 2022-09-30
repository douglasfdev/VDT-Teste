import Reserve from '../models/Reserves';

class ReserveController {
  async store(req, res) {
    try {
      const reserve = await Reserve.create(req.body);
      const { status, date, finalizada } = reserve;
      return res.json({ status, date, finalizada });
    } catch (e) {
      return res.json({
        errors: e,
      });
    }
  }
}
export default new ReserveController();
