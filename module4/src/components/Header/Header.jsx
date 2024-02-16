import Logo from './Logo/Logo.jsx';
import Button from '@common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '@store/user/actions';
import { getUser } from '@store/selector';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(getUser);
	const username = user.name;

	const onClickLogOut = () => {
		localStorage.removeItem('userToken');
		dispatch(logoutAction());
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
