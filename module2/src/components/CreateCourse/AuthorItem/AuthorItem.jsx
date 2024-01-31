import Button from '../../../common/Button/Button.jsx';

const AuthorItem = (props) => {
	return (
		<div className='d-flex justify-content-between'>
			<p className='button-spacing'>{props.authorName}</p>

			<div className='d-flex justify-content-between'>
				<Button
					onClick={props.onClickAdd}
					buttonName='ADD'
					className='create-course-button button-spacing'
				/>

				<Button
					onClick={props.onClickRemove}
					buttonName='DEL'
					className='create-course-button'
				/>
			</div>
		</div>
	);
};

export default AuthorItem;
