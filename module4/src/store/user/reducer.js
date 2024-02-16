import * as types from './types.js';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};
export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case types.USER_LOGIN:
			return {
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		case types.USER_LOGOUT:
			return userInitialState;
		default:
			return state;
	}
};
