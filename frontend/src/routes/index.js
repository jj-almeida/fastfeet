import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliveries from '~pages/Delivery';
import AddDelivery from '~pages/Delivery/Add';
import EditDelivery from '~pages/Delivery/Edit';
import Deliverymans from '~pages/Deliveryman';
import AddDeliveryman from '~pages/Deliveryman/Add';
import EditDeliveryman from '~pages/Deliveryman/Edit';
import Recipients from '~pages/Recipient';
import AddRecipient from '~pages/Recipient/Add';
import EditRecipient from '~pages/Recipient/Edit';
import Problems from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliveries/new" component={AddDelivery} isPrivate />
      <Route path="/deliveries/edit/:id" component={EditDelivery} isPrivate />

      <Route path="/deliverymans" exact component={Deliverymans} isPrivate />
      <Route path="/deliverymans/new" component={AddDeliveryman} isPrivate />
      <Route
        path="/deliverymans/edit/:id"
        component={EditDeliveryman}
        isPrivate
      />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/recipients/new" component={AddRecipient} isPrivate />
      <Route path="/recipients/edit/:id" component={EditRecipient} isPrivate />

      <Route path="/problems" exact component={Problems} isPrivate />
    </Switch>
  );
}
