import Button from '@common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourseThunk } from '@store/courses/thunk';
import { getAuthors, getUser } from '@store/selector';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback } from 'react';

const CourseCard = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(getUser);
	const authorDetail = useSelector(getAuthors);

	const handleClickShow = useCallback(() => {
		navigate(`/courses/${props.id}`);
	}, [props.id, navigate]);

	const handleClickDelete = () => {
		dispatch(deleteCourseThunk({ id: props.id, token: user.token }));

		navigate('/');
	};
	const handleClickUpdate = () => {
		navigate(`/courses/update/${props.id}`);
	};

	//duration format
	const hours = Math.floor(props.duration / 60);
	const minutes = props.duration % 60;
	let convertedDuration = '';
	convertedDuration += hours < 10 ? '0' + hours + ':' : hours + ':';
	convertedDuration += minutes < 10 ? '0' + minutes : minutes;
	convertedDuration += hours === 1 ? ' hour' : ' hours';

	//date format
	let parts = props.creationDate.split('/');
	// Padding the day and month with '0' if they are single digit
	let formattedDay = parts[0].padStart(2, '0');
	let formattedMonth = parts[1].padStart(2, '0');
	let formattedCreationDate = `${formattedDay}.${formattedMonth}.${parts[2]}`;

	return (
		<div
			className='d-flex justify-content-center'
			style={{ marginTop: '20px' }}
		>
			<div className='card border border-dark p-3' style={{ width: '60rem' }}>
				<h2>{props.title}</h2>
				<div className='row'>
					<div className='col-7'>
						<p>{props.description}</p>
					</div>
					<div className='col-5'>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div>
								<div>
									<span style={{ fontWeight: 'bold' }}>Authors: </span>
									<span>
										{props.authors
											.map(
												(id) =>
													authorDetail.filter((author) => author.id === id)[0]
														.name
											)
											.join(', ')}
									</span>
								</div>

								<div>
									<span style={{ fontWeight: 'bold' }}>Duration: </span>
									<span>{convertedDuration}</span>
								</div>

								<div>
									<span style={{ fontWeight: 'bold' }}>Created: </span>
									<span>{formattedCreationDate}</span>
								</div>
							</div>
						</div>
						<div
							className='d-flex justify-content-between'
							style={{ height: '30px', marginTop: '10px' }}
						>
							<Button
								onClick={handleClickShow}
								buttonName='SHOW COURSE'
								className='default-button'
							/>
							<Button
								onClick={handleClickDelete}
								buttonName='DELETE'
								className='default-button'
							/>
							<Button
								onClick={handleClickUpdate}
								buttonName='UPDATE'
								className='default-button'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
