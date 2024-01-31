import Button from '../../common/Button/Button.jsx';
import EmptyCourseList from './EmptyCourseList.css';

const emptyCourseList = () => {
	return (
		<div className='container'>
			<h1 className='heading1'>Your List Is Empty</h1>
			<p>Please use "Add New Course" button to add your first course</p>
			<Button buttonName='ADD NEW COURSE' className='button' />
		</div>
	);
};

export default emptyCourseList;
