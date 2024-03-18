import * as types from './types.js';

export const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case types.SAVE_COURSES:
			return action.payload;
		case types.ADD_COURSE:
			return [...state, action.payload];
		case types.UPDATE_COURSE:
			const aa = [
				...state.filter((course) => course.id !== action.payload.id),
				{ ...action.payload.body, id: action.payload.id },
			];
			// [].splice
			return aa;
		// return [
		// 	...state.filter((course) => course.id !== action.payload.id),
		// 	{ ...action.payload.body, id: action.payload.id },
		// ];
		case types.DELETE_COURSE:
			return state.filter((course) => course.id !== action.payload.id);
		default:
			return state;
	}
};
