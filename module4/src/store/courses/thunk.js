import {
	addCourseAction,
	updateCourseAction,
	deleteCourseAction,
} from './actions';
import {
	createCourseAPI,
	updateCourseAPI,
	deleteCourseAPI,
} from 'src/services';

export const createCourseThunk = (props) => {
	return async (dispatch) => {
		const response = await createCourseAPI(props);
		dispatch(addCourseAction(response));
		console.log('Course creation is successful');
	};
};

export const deleteCourseThunk = (props) => {
	return async (dispatch) => {
		const deleteStatus = await deleteCourseAPI(props);
		deleteStatus === true
			? dispatch(deleteCourseAction({ id: props.id }))
			: console.log('Course deletion is not success');
	};
};

export const updateCourseThunk = (props) => {
	return async (dispatch) => {
		const response = await updateCourseAPI(props);
		response.successful === true
			? dispatch(updateCourseAction(props))
			: console.log('Course update is not successful');
	};
};
