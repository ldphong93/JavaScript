import * as types from './types.js';

export const addCourseAction = (payload) => ({
	type: types.ADD_COURSE,
	payload,
});
export const deleteCourseAction = (payload) => ({
	type: types.DELETE_COURSE,
	payload,
});
export const saveCourseAction = (payload) => ({
	type: types.SAVE_COURSES,
	payload,
});
export const updateCourseAction = (payload) => ({
	type: types.UPDATE_COURSE,
	payload,
});
