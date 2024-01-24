import React, { useState } from 'react';
import Button from '../../../common/Button/Button.jsx';
import { mockedCoursesListWithAuthorsName } from '../../../common/Input/Input.jsx';

const SearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (term) => {
		const filteredCourses = mockedCoursesListWithAuthorsName.filter(
			(course) =>
				course.id.toLowerCase().includes(term.toLowerCase()) ||
				course.title.toLowerCase().includes(term.toLowerCase())
		);
		onSearch(filteredCourses);
	};

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div>
			<div
				className='d-flex justify-content-center'
				style={{ marginTop: '20px' }}
			>
				<label htmlFor='search-term'>
					Input
					<input
						type='text'
						id='search-term'
						placeholder='Input text'
						value={searchTerm}
						onChange={handleChange}
						style={{ marginLeft: '5px' }}
					/>
				</label>
				<Button onClick={() => handleSearch(searchTerm)} buttonName='SEARCH' />
			</div>
		</div>
	);
};

export default SearchBar;
