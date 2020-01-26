import * as Yup from 'yup';
import Meats from '../models/Meats';

class MeatController {
  async store(req, res) {
    const schema = Yup.object({
      meat: Yup.string().required(),
      drink: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id, drink, meat } = await Meats.create(req.body);

    return res.json({
      id,
      drink,
      meat,
    });
  }

  async index(req, res) {
    const allMeats = await Meats.findAll();
    return res.json(allMeats);
  }
}

export default new MeatController();
