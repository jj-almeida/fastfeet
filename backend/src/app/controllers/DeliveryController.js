import * as Yup from 'yup';
import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

import Queue from '../../lib/Queue';
import RegisterDeliveryMail from '../jobs/RegisterDeliveryMail';

class DeliveryController {
  async index(req, res) {
    const { page = 1, q } = req.query;

    const productWhere = q ? { product: { [Op.iLike]: `%${q}%` } } : {};

    const deliveries = await Delivery.findAll({
      attributes: [
        'id',
        'recipient_id',
        'deliveryman_id',
        'signature_id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
      where: productWhere,
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'name',
            'street',
            'number',
            'complement',
            'state',
            'city',
            'postal_code',
          ],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.status(200).json(deliveries);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const recipient = await Recipient.findByPk(req.body.recipient_id);
    const deliveryman = await Deliveryman.findByPk(req.body.deliveryman_id);

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient does not exist.' });
    }

    if (!deliveryman) {
      return res.status(404).json({ error: 'Deliveryman does not exist.' });
    }

    const {
      id,
      recipient_id,
      deliveryman_id,
      product,
      signature_id,
      canceled_at,
      start_date,
      end_date,
    } = await Delivery.create(req.body);

    await Queue.add(RegisterDeliveryMail.key, {
      recipient,
      deliveryman,
      product,
    });

    return res.status(201).json({
      id,
      recipient_id,
      deliveryman_id,
      product,
      signature_id,
      canceled_at,
      start_date,
      end_date,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      repicient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      signature_id: Yup.number(),
      product: Yup.string(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { id } = req.params;

    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(404).json({ error: 'Delivery does not exist.' });
    }

    const {
      repicient_id,
      deliveryman_id,
      signature_id,
      product,
      canceled_at,
      start_date,
      end_date,
    } = await delivery.update(req.body);

    return res.status(200).json({
      repicient_id,
      deliveryman_id,
      signature_id,
      product,
      canceled_at,
      start_date,
      end_date,
    });
  }

  async delete(req, res) {
    const delivery = await Delivery.findByPk(req.params.id);

    if (!delivery) {
      return res.status(404).json({ error: 'Delivery does not exist.' });
    }

    await delivery.destroy();

    return res.status(204).send();
  }
}

export default new DeliveryController();
