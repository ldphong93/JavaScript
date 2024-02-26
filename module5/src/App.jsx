import React, { useEffect } from 'react';
import CourseInfo from '@components/CourseInfo/CourseInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from '@components/Courses/Courses';
import Header from '@components/Header/Header';
import Registration from '@components/Registration/Registration';
import CourseForm from '@components/CourseForm/CourseForm';
import Login from '@components/Login/Login';
import { useDispatch } from 'react-redux';
import { fetchDataFromServer } from 'src/services';
import { PrivateRoute } from '@components/PrivateRoute/PrivateRoute';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDataFromServer());
	}, [dispatch]);

	// useEffect(() => {
	// 	dispatch(async (dispatch) => {
	// 		const courses = await fetchData(getAllCoursesURL);
	// 		const authors = await fetchData(getAllAuthorsURL);
	// 		dispatch(saveCourseAction(courses));
	// 		dispatch(saveAuthorAction(authors));
	// 	});
	// }, [dispatch]);

	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Courses />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/courses/:id' element={<CourseInfo />} />
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<CourseForm formType='CREATE' />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/update/:courseId'
					element={
						<PrivateRoute>
							<CourseForm formType='UPDATE' />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
