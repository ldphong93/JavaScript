import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
	useNavigate: jest.fn(),
}));

jest.mock('./Logo/Logo.jsx', () => () => <div data-testid='logo' />);

describe('Header', () => {
	beforeAll(() => {
		Storage.prototype.removeItem = jest.fn();
	});

	afterAll(() => {
		Storage.prototype.removeItem.mockRestore();
	});

	it('shoult render without throwing error', () => {
		useSelector.mockImplementation(() => ({ name: 'testUser' }));
		render(<Header />);
	});

	it('should render the user name', () => {
		useSelector.mockImplementation(() => ({ name: 'testUser' }));
		render(<Header />);
		const userNameToDisplay = screen.getByText(/testUser/i);
		expect(userNameToDisplay).toBeInTheDocument();
	});

	it('should handle log out click', () => {
		const navigate = jest.fn();
		useNavigate.mockReturnValue(navigate);

		const dispatch = jest.fn();
		useDispatch.mockReturnValue(dispatch);

		useSelector.mockImplementation(() => ({ name: 'testUser', token: '123' }));

		render(<Header />);

		const logOutButton = screen.getByText(/LOG OUT/i);
		fireEvent.click(logOutButton);

		expect(localStorage.removeItem).toHaveBeenCalledWith('userToken');
		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(navigate).toHaveBeenCalledTimes(1);
	});

	it('should renders the logo', () => {
		useSelector.mockImplementation(() => ({ name: 'testUser' }));
		render(<Header />);

		const logo = screen.getByTestId('logo');
		expect(logo).toBeInTheDocument();
	});
});
