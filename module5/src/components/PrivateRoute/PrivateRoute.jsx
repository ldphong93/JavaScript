import { useSelector } from 'react-redux';
import { getUser } from '@store/selector';
import Courses from '@components/Courses/Courses';

export const PrivateRoute = ({ children }) => {
	const user = useSelector(getUser);
	let isAuthenticated = false;

	if (localStorage.getItem('userToken') && user.role === 'admin') {
		isAuthenticated = true;
	}

	return isAuthenticated ? children : <Courses />;
};
