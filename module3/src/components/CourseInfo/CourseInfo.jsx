import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../common/Button/Button.jsx';
import { UserContext } from '../../common/UserContext.jsx';
import { useContext } from 'react';

const CourseInfo = () => {
	let { id } = useParams();
	const { allCourses } = useContext(UserContext);
	const courseContent = allCourses.find((course) => course.id === id);

	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/');
	};

	return (
		<div>
			<div
				className='d-flex justify-content-center'
				style={{ marginTop: '20px' }}
			>
				<div className='card border border-dark p-3' style={{ width: '60rem' }}>
					<div className='card-body'>
						<h5 className='card-title'>Description:</h5>
						<div className='row'>
							<div
								className='col-6'
								style={{ borderRight: '2px  solid lightgray' }}
							>
								<div className='card-text'>{courseContent.description}</div>
							</div>
							<div className='col-6'>
								<div>
									<div>
										<span style={{ fontWeight: 'bold' }}>Id: </span>
										<span>{courseContent.id}</span>
									</div>
									<div>
										<span style={{ fontWeight: 'bold' }}>Authors: </span>
										<span>{courseContent.authors}</span>
									</div>
									<div>
										<span style={{ fontWeight: 'bold' }}>Duration: </span>
										<span>{courseContent.duration}</span>
									</div>

									<div>
										<span style={{ fontWeight: 'bold' }}>Created: </span>
										<span>{courseContent.creationDate}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className='d-flex justify-content-center'
				style={{ height: '30px', marginTop: '10px' }}
			>
				<Button
					onClick={handleClick}
					buttonName='BACK'
					className='default-button'
				/>
			</div>
		</div>
	);
};

export default CourseInfo;
