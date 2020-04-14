import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

class DeliveryOpenControler {
  async index(req, res) {
    const { page = 1 } = req.query;
    const deliveryman_id = req.params.id;

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(404).json({ error: 'Deliveryman does not exist.' });
    }

    const deliveries = await Delivery.findAll({
      attributes: ['id', 'recipient_id', 'product', 'created_at', 'start_date'],
      limit: 20,
      offset: (page - 1) * 20,
      where: { deliveryman_id, end_date: null, canceled_at: null },
      order: ['id'],
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
      ],
    });

    return res.status(200).json(deliveries);
  }
}

export default new DeliveryOpenControler();
