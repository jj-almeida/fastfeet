import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import DeliveryList from '~/pages/DeliveryList';
import DeliveryForm from '~/pages/DeliveryForm';
import DeliveryEdit from '~/pages/DeliveryEdit';
import DeliverymanList from '~/pages/DeliverymanList';
import DeliverymanForm from '~/pages/DeliverymanForm';
import DeliverymanEdit from '~/pages/DeliverymanEdit';
import RecipientList from '~/pages/RecipientList';
import RecipientForm from '~/pages/RecipientForm';
import RecipientEdit from '~/pages/RecipientEdit';
import ProblemDelivery from '~/pages/ProblemDelivery';
/**
 * TODO: Checar caminhos. Checar como passa parametro
 */

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliverylist" component={DeliveryList} isPrivate />
      <Route path="/deliveryform" component={DeliveryForm} isPrivate />
      <Route path="/deliveryedit" component={DeliveryEdit} isPrivate />
      <Route path="/deliverymanlist" component={DeliverymanList} isPrivate />
      <Route path="/deliverymanform" component={DeliverymanForm} isPrivate />
      <Route path="/deliverymanedit" component={DeliverymanEdit} isPrivate />
      <Route path="/recipientlist" component={RecipientList} isPrivate />
      <Route path="/recipientform" component={RecipientForm} isPrivate />
      <Route path="/recipientedit" component={RecipientEdit} isPrivate />
      <Route path="/problemdelivery" component={ProblemDelivery} isPrivate />
    </Switch>
  );
}
