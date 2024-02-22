import * as types from './types.js';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};
export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case types.USER_LOGIN:
			return {
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
				role: '',
			};
		case types.USER_LOGOUT:
			return userInitialState;
		case types.USER_UPDATE:
			return {
				...state,
				role: action.payload.role,
			};
		default:
			return state;
	}
};
