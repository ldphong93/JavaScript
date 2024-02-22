import * as types from './types.js';

export const authorInitialState = [];

export const authorReducer = (state = authorInitialState, action) => {
	switch (action.type) {
		case types.SAVE_AUTHOR:
			return action.payload;
		case types.ADD_AUTHOR:
			return [...state, action.payload];
		case types.DELETE_AUTHOR:
			// do something
			return state;
		default:
			return state;
	}
};
