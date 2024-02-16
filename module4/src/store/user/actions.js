import * as types from './types.js';

export const loginAction = (payload) => ({
	type: types.USER_LOGIN,
	payload,
});
export const logoutAction = () => ({
	type: types.USER_LOGOUT,
});
