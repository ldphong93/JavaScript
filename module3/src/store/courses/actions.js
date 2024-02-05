import * as types from './types.js';

const addCourseAction = (payload) => ({ type: types.ADD_COURSE, payload });
const deleteCourseAction = (payload) => ({
	type: types.DELETE_COURSE,
	payload,
});
const saveCourseAction = (payload) => ({ type: types.SAVE_COURSES, payload });
