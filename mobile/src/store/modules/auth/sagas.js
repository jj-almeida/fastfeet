import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

import formatDate from '~/utils/formatDate';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/deliveryman/${id}`);

    const data = {
      ...response.data,
      registeredDate: formatDate(response.data.created_at),
    };

    yield put(signInSuccess(data.id, data));
  } catch (err) {
    yield put(signFailure());
    Alert.alert('Falha na autenticação', 'Falha na autenticação');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
