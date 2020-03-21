import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import DeliveryList from '../pages/DeliveryList';
import DeliveryForm from '../pages/DeliveryForm';
import DeliveryEdit from '../pages/DeliveryEdit';
import DeliverymanList from '../pages/DeliverymanList';
import DeliverymanForm from '../pages/DeliverymanForm';
import DeliverymanEdit from '../pages/DeliverymanEdit';
import RecipientList from '../pages/RecipientList';
import RecipientForm from '../pages/RecipientForm';
import RecipientEdit from '../pages/RecipientEdit';
import ProblemDelivery from '../pages/ProblemDelivery';
/**
 * TODO: Checar exact. Checar caminhos. Checar como passa parametro
 */

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliverylist" exact component={DeliveryList} />
      <Route path="/deliveryform" component={DeliveryForm} />
      <Route path="/deliveryedit" component={DeliveryEdit} />
      <Route path="/deliverymanlist" component={DeliverymanList} />
      <Route path="/deliverymanform" component={DeliverymanForm} />
      <Route path="/deliverymanedit" component={DeliverymanEdit} />
      <Route path="/recipientlist" component={RecipientList} />
      <Route path="/recipientform" component={RecipientForm} />
      <Route path="/recipientedit" component={RecipientEdit} />
      <Route path="/problemdelivery" component={ProblemDelivery} />
    </Switch>
  );
}
