import * as Yup from 'yup';
import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliveryEndController {
  async update(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required(),
      signature_id: Yup.number().required(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const deliveryman_id = req.params.id;
    const { delivery_id, signature_id } = req.body;

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(404).json({ error: 'Deliveryman does not exist.' });
    }

    const delivery = await Delivery.findOne({
      where: {
        id: delivery_id,
        deliveryman_id,
        start_date: { [Op.ne]: null },
        end_date: null,
      },
    });

    if (!delivery) {
      return res
        .status(400)
        .json({ error: 'Delivery does not exist or already finished.' });
    }

    // const { originalname: name, filename: path } = req.file;

    // const file = await File.create({ name, path });

    const { id, product, end_date } = await delivery.update({
      end_date: new Date(),
      signature_id,
    });

    return res.json({ id, deliveryman_id, product, end_date });
  }
}

export default new DeliveryEndController();
