import { combineReducers } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer.js';
import { authorReducer } from './authors/reducer.js';
import { userReducer } from './user/reducer.js';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorReducer,
	user: userReducer,
});

export default rootReducer;
