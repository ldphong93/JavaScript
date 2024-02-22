import { saveCourseAction } from '@store/courses/actions';
import { saveAuthorAction } from '@store/authors/actions';

const getAllCoursesURL = 'http://localhost:4000/courses/all';
const getAllAuthorsURL = 'http://localhost:4000/authors/all';
const createCourseURL = 'http://localhost:4000/courses/add';
const updateCourseURL = 'http://localhost:4000/courses/{id}';
const deleteCourseURL = 'http://localhost:4000/courses/{id}';
const createAuthorURL = 'http://localhost:4000/authors/add';
const logOutURL = 'http://localhost:4000/logout';

export const fetchData = async (url) => {
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

export const fetchDataAuthenticated = async (url, token) => {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
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

export const createCourseAPI = async (props) => {
	try {
		const response = await fetch(createCourseURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: props.token,
			},
			body: JSON.stringify(props.body),
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

export const updateCourseAPI = async (props) => {
	try {
		const response = await fetch(updateCourseURL.replace('{id}', props.id), {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: props.token,
			},
			body: JSON.stringify(props.body),
		});

		if (!response.ok) {
			const message = 'A error has occured';
			throw new Error(message);
		}

		const resultJson = await response.json();
		return resultJson;
	} catch (error) {
		console.log('There was an error: ', error);
		return [];
	}
};

export const deleteCourseAPI = async (props) => {
	try {
		const response = await fetch(deleteCourseURL.replace('{id}', props.id), {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: props.token,
			},
		});

		if (!response.ok) {
			const message = 'A error has occured';
			throw new Error(message);
		}

		const resultJson = await response.json();
		return resultJson.successful;
	} catch (error) {
		console.log('There was an error: ', error);
		return false;
	}
};

export const createAuthorAPI = async ({ name, token }) => {
	try {
		const response = await fetch(createAuthorURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify({ name: name }),
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

export const logOutAPI = async (token) => {
	try {
		const response = await fetch(logOutURL, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
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
