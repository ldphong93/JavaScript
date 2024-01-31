import Logo from './Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';
import { useContext } from 'react';
import { UserContext } from '../../common/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import { mockedCoursesListWithAuthorsName } from '../../common/Data/MockData.jsx';

const Header = () => {
	const { username, setUsername, setAllCourses } = useContext(UserContext);

	const navigate = useNavigate();
	const onClickLogOut = () => {
		localStorage.removeItem('userToken');
		setUsername('');
		setAllCourses(mockedCoursesListWithAuthorsName);
		navigate('/login');
	};

	return (
		<header
			className='d-flex justify-content-between'
			style={{ backgroundColor: 'whitesmoke' }}
		>
			<div style={{ padding: '20px 20px' }}>
				<Logo />
			</div>
			<div style={{ padding: '20px 20px' }}>
				<div className='d-flex justify-content-center'>
					<p style={{ marginRight: '15px' }}>{username}</p>
					<Button
						buttonName='LOG OUT'
						className='default-button'
						onClick={onClickLogOut}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
