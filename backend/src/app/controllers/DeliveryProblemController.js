import * as Yup from 'yup';
import { Op } from 'sequelize';

import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

class DeliveryProblemController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const deliveries = await DeliveryProblem.findAll({
      attributes: ['id', 'delivery_id', 'description', 'created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Delivery,
          as: 'delivery',
          attributes: ['deliveryman_id', 'recipient_id', 'product'],
        },
      ],
    });

    return res.status(200).json(deliveries);
  }

  async show(req, res) {
    const delivery_id = req.params.id;

    const deliveries = await DeliveryProblem.findAll({
      where: { delivery_id },
      attributes: ['id', 'delivery_id', 'description', 'created_at'],
      include: [
        {
          model: Delivery,
          as: 'delivery',
          attributes: ['deliveryman_id', 'recipient_id', 'product'],
        },
      ],
    });

    return res.status(200).json(deliveries);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const delivery_id = req.params.id;

    const delivery = await Delivery.findOne({
      where: {
        id: delivery_id,
        start_date: {
          [Op.ne]: null,
        },
        end_date: null,
      },
    });

    if (!delivery) {
      return res
        .status(400)
        .json({ error: 'Delivery does not exist or not in progress.' });
    }

    const { description } = req.body;

    const { created_at } = await DeliveryProblem.create({
      delivery_id,
      description,
    });

    return res.status(201).json({ delivery_id, description, created_at });
  }
}

export default new DeliveryProblemController();
