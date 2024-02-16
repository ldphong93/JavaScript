import * as types from './types.js';

export const addAuthorAction = (payload) => ({
	type: types.ADD_AUTHOR,
	payload,
});
export const deleteAuthorAction = (payload) => ({
	type: types.DELETE_AUTHOR,
	payload,
});
export const saveAuthorAction = (payload) => ({
	type: types.SAVE_AUTHOR,
	payload,
});
