import { Op } from 'sequelize';

import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

import Queue from '../../lib/Queue';
import CancelDeliveryMail from '../jobs/CancelDeliveryMail';

class DeliveryCancelController {
  async delete(req, res) {
    const deliveryProblem = await DeliveryProblem.findByPk(req.params.id);

    if (!deliveryProblem) {
      return res.status(400).json({ error: 'Invalid delivery problem.' });
    }

    const delivery = await Delivery.findOne({
      where: { id: deliveryProblem.delivery_id, end_date: { [Op.is]: null } },
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    delivery.canceled_at = new Date();

    await delivery.save();

    await Queue.add(CancelDeliveryMail.key, {
      delivery,
    });

    return res.status(200).json(delivery);
  }
}

export default new DeliveryCancelController();
