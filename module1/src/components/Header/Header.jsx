import Logo from './Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';
const Header = () => {
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
					<p style={{ marginRight: '15px' }}>Martin Ødegaard</p>
					<Button buttonName='LOG OUT' />
				</div>
			</div>
		</header>
	);
};

export default Header;
