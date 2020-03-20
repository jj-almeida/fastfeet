import Mail from '../../lib/Mail';

class RegisterDeliveryMail {
  get key() {
    return 'RegisterDeliveryMail';
  }

  async handle({ data }) {
    const { recipient, deliveryman, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Novo agendamento',
      template: 'registerDelivery',
      context: {
        deliveryMan: deliveryman.name,
        product,
        name: recipient.name,
        street: recipient.street,
        number: recipient.number,
        complement: recipient.complement,
        state: recipient.state,
        city: recipient.city,
        postal_code: recipient.postal_code,
      },
    });
  }
}

export default new RegisterDeliveryMail();
