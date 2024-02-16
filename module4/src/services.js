import { saveCourseAction } from '@store/courses/actions';
import { saveAuthorAction } from '@store/authors/actions';

const getAllCoursesURL = 'http://localhost:4000/courses/all';
const getAllAuthorsURL = 'http://localhost:4000/authors/all';

const fetchData = async (url) => {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			const message = 'A error has occured';
			throw new Error(message);
		}

		const resultJson = await response.json();
		return resultJson.result;
	} catch (error) {
		console.log('There was an error: ', error);
		return [];
	}
};

export const fetchDataFromServer = () => {
	return async (dispatch) => {
		const courses = await fetchData(getAllCoursesURL);
		const authors = await fetchData(getAllAuthorsURL);
		dispatch(saveCourseAction(courses));
		dispatch(saveAuthorAction(authors));
	};
};
