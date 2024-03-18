import { coursesReducer, coursesInitialState } from './reducer';
import * as types from './types';

describe('coursesReducer', () => {
	it('should return the initial state', () => {
		expect(coursesReducer(undefined, {})).toEqual(coursesInitialState);
	});

	it('should handle SAVE_COURSES', () => {
		const courses = [
			{ id: 1, name: 'Course 1' },
			{ id: 2, name: 'Course 2' },
		];
		expect(
			coursesReducer([], { type: types.SAVE_COURSES, payload: courses })
		).toEqual(courses);
	});

	it('should handle ADD_COURSE', () => {
		const course = { id: 1, name: 'Course 1' };
		expect(
			coursesReducer([], { type: types.ADD_COURSE, payload: course })
		).toEqual([course]);
	});

	it('should handle UPDATE_COURSE', () => {
		const initialState = [{ id: 1, name: 'Old Course' }];
		const updatedCourse = { id: 1, name: 'Updated Course' };
		expect(
			coursesReducer(initialState, {
				type: types.UPDATE_COURSE,
				payload: { id: 1, body: updatedCourse },
			})
		).toEqual([updatedCourse]);
	});

	it('should handle DELETE_COURSE', () => {
		const initialState = [
			{ id: 1, name: 'Course 1' },
			{ id: 2, name: 'Course 2' },
		];
		const expectedState = [{ id: 2, name: 'Course 2' }];
		expect(
			coursesReducer(initialState, {
				type: types.DELETE_COURSE,
				payload: { id: 1 },
			})
		).toEqual(expectedState);
	});
});
