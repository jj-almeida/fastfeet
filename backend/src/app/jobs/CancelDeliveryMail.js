import Mail from '../../lib/Mail';

class RegisterDeliveryMail {
  get key() {
    return 'CancelDeliveryMail';
  }

  async handle({ data }) {
    const { delivery } = data;

    await Mail.sendMail({
      to: `${delivery.deliveryman.name} <${delivery.deliveryman.email}>`,
      subject: 'Cancelamento de entrega',
      template: 'cancelDelivery',
      context: {
        deliveryMan: delivery.deliveryman.name,
        product: delivery.product,
      },
    });
  }
}

export default new RegisterDeliveryMail();
