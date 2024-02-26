import SearchBar from '@components/Courses/SearchBar/SearchBar';
import Button from '@common/Button/Button';
import CourseCard from '@components/Courses/CourseCard/CourseCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCourses } from '@store/selector';
import EmptyCourseList from '@components/EmptyCourseList/EmptyCourseList';

const Courses = () => {
	const navigate = useNavigate();
	const courses = useSelector(getCourses);
	const [searchTerm, setSearchTerm] = useState('');

	const handleAddNewCourseButton = () => {
		navigate('/courses/add');
	};

	const handleSearch = (term) => {
		setSearchTerm(term);
	};

	const renderedCourses = courses.filter((course) =>
		course.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	let areCoursesAvailable = renderedCourses.length > 0;

	return areCoursesAvailable ? (
		<div>
			<div
				className='d-flex justify-content-between'
				style={{ width: '60rem', margin: '0 auto' }}
			>
				<SearchBar onSearch={handleSearch} />
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
	) : (
		<EmptyCourseList />
	);
};

export default Courses;
