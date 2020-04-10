import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

import formatDate from '~/utils/formatDate';

export function* signIn({ payload }) {
  try {
    // const { email, password } = payload;
    const { id } = payload;

    // const response = yield call(api.post, 'sessions', {
    //   email,
    //   password,
    // });
    const response = yield call(api.get, `/deliveryman/${id}`);

    // const { token, user } = response.data;
    const data = {
      ...response.data,
      registeredDate: formatDate(response.data.created_at),
    };

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    // yield put(signInSuccess(token, user));
    yield put(signInSuccess(data.id, data));

    // history.push('/deliverylist');
  } catch (err) {
    yield put(signFailure());
    Alert.alert('Falha na autenticação', 'Falha na autenticação');
    // toast.error('Falha na autenticação');
  }
}

// export function setToken({ payload }) {
//   if (!payload) return;

//   const { token } = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`;
//   }
// }

// export function signOut() {
// history.push('/');
// }

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  // takeLatest('@auth/SIGN_OUT', signOut),
]);
