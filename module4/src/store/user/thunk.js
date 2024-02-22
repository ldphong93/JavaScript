import { fetchDataAuthenticated, logOutAPI } from '../../services';
import { updateUserAction, logoutAction } from './actions';

const getCurrentUserURL = 'http://localhost:4000/users/me';

export const fetchUserRoleThunk = (token) => {
	return async (dispatch) => {
		const currentUser = await fetchDataAuthenticated(getCurrentUserURL, token);
		dispatch(updateUserAction(currentUser));
	};
};

export const logOutThunk = (token) => {
	return async (dispatch) => {
		await logOutAPI(token);
		dispatch(logoutAction());
	};
};
