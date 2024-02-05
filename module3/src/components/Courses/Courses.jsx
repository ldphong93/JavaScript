import SearchBar from './SearchBar/SearchBar.jsx';
import Button from '../../common/Button/Button.jsx';
import CourseCard from './CourseCard/CourseCard.jsx';
import { useContext, useState } from 'react';
import { UserContext } from '../../common/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
	const { allCourses } = useContext(UserContext);
	const [renderedCourses, setRenderedCourses] = useState(allCourses);
	const searchCourse = (courses) => {
		setRenderedCourses(courses);
	};

	const navigate = useNavigate();
	const handleAddNewCourseButton = () => {
		navigate('/courses/add');
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
					<Button
						buttonName='ADD NEW COURSE'
						className='default-button'
						onClick={handleAddNewCourseButton}
					/>
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
