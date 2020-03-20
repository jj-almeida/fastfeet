import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, name, email } = await Deliveryman.create(req.body);

    return res.status(201).json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id } = req.params;
    const { email } = req.body;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman does not exist' });
    }

    if (email && email !== deliveryman.email) {
      const emailExists = await Deliveryman.findOne({ where: { email } });

      if (emailExists) {
        return res.status(400).json({ erros: 'Deliveryman already exists' });
      }
    }

    const { name } = await deliveryman.update(req.body);

    return res.status(200).json({
      name,
      email,
    });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const deliverymans = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email', 'avatar_id'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.status(200).json(deliverymans);
  }

  async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman does not exist' });
    }

    await deliveryman.destroy();

    return res.json();
  }
}

export default new DeliverymanController();
