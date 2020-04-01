import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import {
  DeliveryList,
  DeliveryFormAdd,
  DeliveryFormEdit,
} from '~/pages/Delivery';
import { DeliverymanList, DeliverymanForm } from '~/pages/Deliveryman';
import { RecipientList, RecipientForm } from '~/pages/Recipient';
import { ProblemList } from '~/pages/Problem';
/**
 * TODO: Checar como passa parametro
 */

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" exact component={DeliveryList} isPrivate />
      <Route path="/deliveries/new" component={DeliveryFormAdd} isPrivate />
      <Route
        path="/deliveries/edit/:id"
        component={DeliveryFormEdit}
        isPrivate
      />
      <Route path="/deliverymans" exact component={DeliverymanList} isPrivate />
      <Route path="/deliverymans/new" component={DeliverymanForm} isPrivate />
      <Route
        path="/deliverymans/edit/:id"
        component={DeliverymanForm}
        isPrivate
      />
      <Route path="/recipients" exact component={RecipientList} isPrivate />
      <Route path="/recipients/new" component={RecipientForm} isPrivate />
      <Route path="/recipients/edit/:id" component={RecipientForm} isPrivate />
      <Route path="/problems" exact component={ProblemList} isPrivate />
    </Switch>
  );
}
