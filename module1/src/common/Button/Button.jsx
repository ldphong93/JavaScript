import React from 'react';
import './Button.css';

const Button = (props) => {
	return (
		<button onClick={props.onClick} className='default-button'>
			{props.buttonName}
		</button>
	);
};

export default Button;
