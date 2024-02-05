import * as types from './types.js';

export const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case types.SAVE_COURSES:
			return action.payload;
		case types.ADD_COURSE:
			return [...state, action.payload];
		case types.DELETE_COURSE:
			// do something
			return state;
		default:
			return state;
	}
};
