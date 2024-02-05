import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer.js';

const rootReducer = combineReducers({
	courses: coursesReducer,
	//other reducer later, author/user
});

export const appStore = configureStore({ reducer: rootReducer });
