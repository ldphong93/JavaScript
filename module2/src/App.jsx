import React, { useState } from 'react';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList.jsx';
import { mockedCoursesListWithAuthorsName } from './common/Data/MockData.jsx';
import CourseInfo from './components/CourseInfo/CourseInfo.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './components/Courses/Courses.jsx';
import Header from '../src/components/Header/Header.jsx';
import Registration from './components/Registration/Registration.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';
import Login from './components/Login/Login.jsx';
import { UserContext } from './common/UserContext.jsx';

function App() {
	const [username, setUsername] = useState(null);
	const [allCourses, setAllCourses] = useState(
		mockedCoursesListWithAuthorsName
	);

	return (
		<UserContext.Provider
			value={{ username, setUsername, allCourses, setAllCourses }}
		>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/'
						element={
							allCourses.length === 0 ? (
								<EmptyCourseList />
							) : (
								<div>
									<Courses />
								</div>
							)
						}
					/>
					<Route path='/courses/:id' element={<CourseInfo />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/courses/add' element={<CreateCourse />} />
				</Routes>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
