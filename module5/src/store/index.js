import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer.js';

const appInitialState = {
	user: {
		isAuth: false, // default value - false. After success login - true
		name: '', // default value - empty string. After success login - name of user
		email: '', // default value - empty string. After success login - email of user
		token: '', // default value - empty string or token value from localStorage. After success login - value from API /login response. See Swagger.
		role: '',
	},
	courses: [], // list of courses. Default value - empty array. After success getting courses - value from API /courses/all response. See Swagger.
	authors: [], //  list of authors. Default value - empty array. After success getting authors - value from API /authors/all response. See Swagger.
};
export const appStore = configureStore({
	reducer: rootReducer,
	preloadedState: appInitialState,
});
