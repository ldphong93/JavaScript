import Button from '@common/Button/Button';
import './EmptyCourseList.css';
import { useNavigate } from 'react-router-dom';

const EmptyCourseList = () => {
	const navigator = useNavigate();
	const handleOnClick = () => {
		navigator('/courses/add');
	};

	return (
		<div className='container'>
			<h1 className='heading1'>Your List Is Empty</h1>
			<p>Please use "Add New Course" button to add your first course</p>
			<Button
				onClick={handleOnClick}
				buttonName='ADD NEW COURSE'
				className='button'
			/>
		</div>
	);
};

export default EmptyCourseList;
