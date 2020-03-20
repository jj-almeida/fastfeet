import * as Yup from 'yup';
import { Op } from 'sequelize';
import {
  setHours,
  setMinutes,
  setSeconds,
  startOfDay,
  endOfDay,
  isBefore,
  isAfter,
} from 'date-fns';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class DeliveryStartController {
  async update(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const deliveryman_id = req.params.id;
    const { delivery_id } = req.body;

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman does not exist.' });
    }

    const delivery = await Delivery.findOne({
      where: {
        id: delivery_id,
        deliveryman_id,
        start_date: null,
        end_date: null,
        canceled_at: null,
      },
    });

    if (!delivery) {
      return res
        .status(401)
        .json({ error: 'Delivery does not exist or already started' });
    }

    const startDate = new Date();

    // Check the maximum deliveries
    const countDeliveries = await Delivery.findAll({
      where: {
        deliveryman_id,
        start_date: {
          [Op.between]: [startOfDay(startDate), endOfDay(startDate)],
        },
      },
    });

    if (countDeliveries.length >= 5) {
      return res
        .status(401)
        .json({ error: 'You can not take more than 5 deliveries per day' });
    }

    // Check hour between 8h and 18h
    const startHour = setSeconds(setMinutes(setHours(startDate, 8), 0), 0);
    const endHour = setSeconds(setMinutes(setHours(startDate, 18), 0), 0);

    if (!(isBefore(startDate, endHour) && isAfter(startDate, startHour))) {
      return res.status(401).json({ error: 'Invalid hour' });
    }

    const { id, product, start_date } = await delivery.update({
      start_date: startDate,
    });

    return res.json({ id, deliveryman_id, product, start_date });
  }
}

export default new DeliveryStartController();
