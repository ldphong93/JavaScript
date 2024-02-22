import { addAuthorAction } from './actions';
import { createAuthorAPI } from 'src/services';

export const addAuthorThunk = ({ name, token }) => {
	return async (dispatch) => {
		const result = await createAuthorAPI({
			name: name,
			token: token,
		});
		dispatch(addAuthorAction({ id: result.id, name: name }));
	};
};
