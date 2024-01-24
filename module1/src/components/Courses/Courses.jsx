import SearchBar from './SearchBar/SearchBar.jsx';
import Button from '../../common/Button/Button.jsx';
import CourseCard from './CourseCard/CourseCard.jsx';
import { useState } from 'react';
import { mockedCoursesListWithAuthorsName } from '../../common/Input/Input.jsx';

const Courses = () => {
	const [renderedCourses, setRenderedCourses] = useState(
		mockedCoursesListWithAuthorsName
	);
	const searchCourse = (courses) => {
		setRenderedCourses(courses);
	};

	return (
		<div>
			<div
				className='d-flex justify-content-between'
				style={{ width: '60rem', margin: '0 auto' }}
			>
				<SearchBar onSearch={searchCourse} />
				<div
					className='d-flex justify-content-center'
					style={{ marginTop: '20px', marginBottom: '20px' }}
				>
					<Button buttonName='ADD NEW COURSE' />
				</div>
			</div>
			{renderedCourses.length === 0 ? (
				<div
					className='d-flex justify-content-center'
					style={{ marginTop: '50px' }}
				>
					<p style={{ fontSize: '50px' }}>No result</p>
				</div>
			) : (
				renderedCourses.map((course) => (
					<CourseCard
						key={course.id}
						id={course.id}
						title={course.title}
						authors={course.authors}
						duration={course.duration}
						creationDate={course.creationDate}
						description={course.description}
					/>
				))
			)}
		</div>
	);
};

export default Courses;
