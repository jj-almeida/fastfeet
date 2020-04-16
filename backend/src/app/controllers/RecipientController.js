import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      postal_code: Yup.string().required(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      postalCode,
    } = await Recipient.create(req.body);

    return res
      .status(201)
      .json({ id, name, street, number, complement, state, city, postalCode });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      postalCode: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails.' });
    }

    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient does not exist.' });
    }

    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      postalCode,
    } = await recipient.update(req.body);

    return res.status(200).json({
      name,
      street,
      number,
      complement,
      state,
      city,
      postalCode,
    });
  }

  async index(req, res) {
    const { page = 1, q } = req.query;

    const nameWhere = q ? { name: { [Op.iLike]: `%${q}%` } } : {};

    const recipients = await Recipient.findAll({
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'postal_code',
      ],
      where: nameWhere,
      limit: 5,
      offset: (page - 1) * 5,
      order: [['id', 'ASC']],
    });

    return res.status(200).json(recipients);
  }

  async show(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findOne({
      where: { id },
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'postal_code',
      ],
    });

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient not found.' });
    }

    return res.status(200).json(recipient);
  }

  async delete(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient does not exist.' });
    }

    await recipient.destroy();

    return res.status(204).send();
  }
}

export default new RecipientController();
