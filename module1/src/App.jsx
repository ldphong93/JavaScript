import React from 'react';
import CourseCard from './components/Courses/CourseCard/CourseCard.jsx';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList.jsx';
import { mockedCoursesListWithAuthorsName } from './common/Input/Input.jsx';
import CourseInfo from './components/CourseInfo/CourseInfo.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './components/Courses/Courses.jsx';
import Header from '../src/components/Header/Header.jsx';

function App() {
	const listItem = mockedCoursesListWithAuthorsName.map((course) => (
		<CourseCard
			key={course.id}
			id={course.id}
			value={course}
			title={course.title}
			authors={course.authors}
			duration={course.duration}
			creationDate={course.creationDate}
			description={course.description}
		/>
	));

	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						listItem.length === 0 ? (
							<EmptyCourseList />
						) : (
							<div>
								<Courses />
							</div>
						)
					}
				/>
				<Route path='/course-info/:id' element={<CourseInfo />} />
			</Routes>
		</Router>
	);
}

export default App;
