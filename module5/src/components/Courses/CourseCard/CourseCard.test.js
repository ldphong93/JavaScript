import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import CourseCard from './CourseCard';

jest.mock('react-router-dom', () => ({
	useNavigate: () => jest.fn(),
}));

jest.mock('react-redux', () => ({
	useDispatch: () => jest.fn(),
	useSelector: jest.fn(),
}));

const mockProps = {
	id: '1',
	title: 'Test Course',
	description: 'Course Description',
	authors: ['1', '2'],
	duration: 80,
	creationDate: '1/12/2022',
};

describe('CourseCard', () => {
	beforeEach(() => {
		useSelector.mockImplementation((selector) =>
			selector({
				user: { token: '123' },
				authors: [
					{ id: '1', name: 'John Doe' },
					{ id: '2', name: 'John Cena' },
				],
			})
		);
	});

	it('display the title', () => {
		render(<CourseCard {...mockProps} />);
		expect(screen.getByText('Test Course')).toBeInTheDocument();
	});

	it('display description', () => {
		render(<CourseCard {...mockProps} />);
		expect(screen.getByText('Course Description')).toBeInTheDocument();
	});

	it('display duration in format of "hh:mm hour(s)"', () => {
		render(<CourseCard {...mockProps} />);
		expect(screen.getByText('01:20 hour')).toBeInTheDocument();
	});

	it('display authors list', () => {
		render(<CourseCard {...mockProps} />);
		expect(screen.getByText('John Doe, John Cena')).toBeInTheDocument();
	});

	it('display created date in correct format', () => {
		render(<CourseCard {...mockProps} />);
		expect(screen.getByText('01.12.2022')).toBeInTheDocument();
	});
});
