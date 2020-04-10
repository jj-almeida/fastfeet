export function signInRequest(id) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    // payload: { email, password },
    payload: { id },
  };
}

export function signInSuccess(userId, profile) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    // payload: { token, user },
    payload: { userId, profile },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
