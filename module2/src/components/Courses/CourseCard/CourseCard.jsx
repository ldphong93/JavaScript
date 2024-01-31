import Button from '../../../common/Button/Button.jsx';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const CourseCard = (props) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/courses/${props.id}`);
	};

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
									<span>{props.authors}</span>
								</div>

								<div>
									<span style={{ fontWeight: 'bold' }}>Duration: </span>
									<span>{props.duration}</span>
								</div>

								<div>
									<span style={{ fontWeight: 'bold' }}>Created: </span>
									<span>{props.creationDate}</span>
								</div>
							</div>
						</div>
						<div
							className='d-flex justify-content-center'
							style={{ height: '30px', marginTop: '10px' }}
						>
							<Button
								onClick={handleClick}
								buttonName='SHOW COURSE'
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
