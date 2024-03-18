import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Courses from './Courses';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
	useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

const testCourses = [
	{
		id: 1,
		title: 'Test course 1',
		authors: [],
		duration: 0,
		creationDate: '1/8/2024',
		description: 'Test description',
	},
	{
		id: 2,
		title: 'Test course 2',
		authors: [],
		duration: 0,
		creationDate: '1/8/2024',
		description: 'Test description',
	},
	{
		id: 3,
		title: 'Test course 3',
		authors: [],
		duration: 0,
		creationDate: '1/8/2024',
		description: 'Test description',
	},
];

describe('Courses', () => {
	beforeEach(() => {
		useSelector.mockImplementation((selector) =>
			selector({
				courses: testCourses,
			})
		);
	});

	it("should display a 'CourseCard' for each course in the 'courses' array", () => {
		const { getAllByText } = render(<Courses />);
		testCourses.forEach((course) => {
			const courseElement = getAllByText(course.title);
			expect(courseElement).toHaveLength(1);
		});
	});

	it("should display CourseForm after clicking 'Add new course' button ", () => {
		const navigate = jest.fn();
		useNavigate.mockReturnValue(navigate);

		render(<Courses />);
		const addNewCourseButton = screen.getByText('ADD NEW COURSE');
		fireEvent.click(addNewCourseButton);

		expect(navigate).toHaveBeenCalledTimes(1);
	});
});
