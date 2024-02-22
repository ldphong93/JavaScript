import Button from '@common/Button/Button';
import './EmptyCourseList.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '@store/selector';

const EmptyCourseList = () => {
	const navigator = useNavigate();
	const handleOnClick = () => {
		navigator('/courses/add');
	};
	const user = useSelector(getUser);

	return (
		<div className='container'>
			<h1 className='heading1'>Your List Is Empty</h1>
			{user.role === 'admin' ? (
				<>
					<p>Please use "Add New Course" button to add your first course</p>
					<Button
						onClick={handleOnClick}
						buttonName='ADD NEW COURSE'
						className='button'
					/>
				</>
			) : (
				<p>
					You don't have permissions to create a course. Please log in as ADMIN
				</p>
			)}
		</div>
	);
};

export default EmptyCourseList;
