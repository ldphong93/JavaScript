import React, { useEffect } from 'react';
import EmptyCourseList from '@components/EmptyCourseList/EmptyCourseList';
import CourseInfo from '@components/CourseInfo/CourseInfo';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from 'react-router-dom';
import Courses from '@components/Courses/Courses';
import Header from '@components/Header/Header';
import Registration from '@components/Registration/Registration';
import CreateCourse from '@components/CreateCourse/CreateCourse';
import Login from '@components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromServer } from './services';
import { getCourses } from '@store/selector';

const PrivateRoute = ({ children }) => {
	const navigate = useNavigate();
	let isAuthenticated = false;

	if (localStorage.getItem('userToken')) {
		isAuthenticated = true;
	}

	return isAuthenticated ? children : navigate('/login');
};

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDataFromServer());
	}, [dispatch]);

	const initialCourses = useSelector(getCourses);

	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<PrivateRoute>
							{initialCourses.length === 0 ? (
								<EmptyCourseList />
							) : (
								<div>
									<Courses />
								</div>
							)}
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/:id'
					element={
						<PrivateRoute>
							<CourseInfo />
						</PrivateRoute>
					}
				/>
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<CreateCourse />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
