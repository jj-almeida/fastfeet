import * as Yup from 'yup';

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
      return res.status(400).json({ error: 'Validation fails' });
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
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient does not exist' });
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
}

export default new RecipientController();
