import { Card, Form, Input, Button } from 'antd';
import { useContext, useState } from 'react';
import AuthorItem from './AuthorItem/AuthorItem';
import { mockedAuthorsList } from '../../common/Data/MockData.jsx';
import CustomButton from '../../common/Button/Button.jsx';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../common/UserContext.jsx';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
	const { allCourses, setAllCourses } = useContext(UserContext);
	const navigate = useNavigate();

	const onFinish = (values) => {
		console.log('Course successfully added', values);

		const courseId = uuidv4();
		//duration format
		const hours = Math.floor(values.duration / 60);
		const minutes = values.duration % 60;
		let convertedDuration = '';
		convertedDuration += hours < 10 ? '0' + hours + ':' : hours + ':';
		convertedDuration += minutes < 10 ? '0' + minutes : minutes;
		convertedDuration += hours === 1 ? ' hour' : ' hours';
		//date format
		const createdDate = moment().format('DD.MM.YYYY');

		const newCourse = {
			id: courseId,
			description: values.description,
			duration: convertedDuration,
			title: values.title,
			creationDate: createdDate,
			authors: courseAuthor.map((auth) => auth.name).join(', '),
		};
		setAllCourses([...allCourses, newCourse]);
		navigate('/');
	};
	const onFinishFailed = (errorInfo) => {};
	const forbiddenSymbols = /[@#$%^&]/;

	const [authorList, setAuthorList] = useState(mockedAuthorsList);
	const [courseAuthor, setCourseAuthor] = useState([]);

	const onClickAdd = (id) => {
		let foundAuthor = authorList.find((author) => author.id === id);
		if (foundAuthor !== undefined) {
			setAuthorList(authorList.filter((author) => author.id !== id));
			setCourseAuthor([...courseAuthor, foundAuthor]);
		}
	};

	const onClickRemove = (id) => {
		let foundAuthor = courseAuthor.find((author) => author.id === id);
		if (foundAuthor) {
			setAuthorList([...authorList, foundAuthor]);
			setCourseAuthor(courseAuthor.filter((author) => author.id !== id));
		}
	};

	const onClickCreateAuthor = () => {
		const id = uuidv4();
		setAuthorList([...authorList, { id, name: newAuthorName }]);
		setNewAuthorName('');
	};

	const onClickBack = () => {
		navigate('/');
	};
	const [title, setTitle] = useState('');
	const [durationOutput, setDurationOutput] = useState('00:00');
	const [newAuthorName, setNewAuthorName] = useState('');

	const handleTitleChange = (event) => {
		const value = event.target.value;
		if (!forbiddenSymbols.test(value)) {
			setTitle(value);
		}
	};

	const handleDurationChange = (event) => {
		const value = event.target.value;
		let hours = Math.floor(value / 60);
		if (hours < 10) {
			hours = '0' + hours;
		}

		let minutes = value % 60;
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		setDurationOutput('' + hours + ':' + minutes);
	};

	const handleNewAuthorInputChange = (event) => {
		const value = event.target.value;
		setNewAuthorName(value);
	};

	return (
		<div className='d-flex justify-content-center'>
			<Form
				name='basic'
				// labelCol={{
				// 	span: 12,
				// }}
				// wrapperCol={{
				// 	span: 12,
				// }}
				style={{ width: '60%' }} //
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Card bordered={true} style={{ border: '2px groove', width: '100%' }}>
					<h4>Main Info</h4>

					<Form.Item
						label='Title'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						fontSize='50px'
						name='title'
						placeholder='Input text'
						rules={[
							{
								required: true,
								message: 'Title is required.',
							},
						]}
					>
						<Input value={title} onChange={handleTitleChange} />
					</Form.Item>

					<Form.Item
						label='Description'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						name='description'
						rules={[
							{
								required: true,
								message: 'Description is required.',
							},
						]}
					>
						<Input.TextArea />
					</Form.Item>

					<h4>Duration</h4>

					<Form.Item
						label='Duration'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						name='duration'
						rules={[
							{
								required: true,
								message: 'Duration is required',
							},
						]}
					>
						<div>
							<span>
								<Input
									onChange={handleDurationChange}
									style={{ width: '25%', marginRight: '10px' }}
								/>
							</span>
							<span>{durationOutput} (hh:mm)</span>
						</div>
					</Form.Item>

					<div
						className='d-flex justify-content-between'
						style={{ display: 'flex', justifyContent: 'space-between' }}
					>
						<div
							style={{ flex: '1', marginRight: '5%', boxSizing: 'border-box' }}
						>
							<h4>Authors List</h4>
							{authorList.map((author) => (
								<AuthorItem
									key={author.id}
									authorName={author.name}
									onClickAdd={() => onClickAdd(author.id)}
									onClickRemove={() => onClickRemove(author.id)}
								/>
							))}
						</div>
						<div style={{ flex: '1', boxSizing: 'border-box' }}>
							<h4>Course Authors</h4>
							{courseAuthor.map((author) => (
								<AuthorItem
									key={author.id}
									authorName={author.name}
									onClickAdd={() => onClickAdd(author.id)}
									onClickRemove={() => onClickRemove(author.id)}
								/>
							))}
						</div>
					</div>

					<div>
						<h5>Create New Author</h5>
						<div>
							<Input
								onChange={handleNewAuthorInputChange}
								style={{ marginRight: '15%', width: '20%' }}
							/>
							<CustomButton
								buttonName='CREATE AUTHOR'
								className='default-button'
								onClick={() => onClickCreateAuthor()}
							/>
						</div>
					</div>
				</Card>
				<div className='d-flex justify-content-center'>
					<CustomButton
						buttonName='BACK'
						className='default-button'
						onClick={onClickBack}
					/>
					<Button type='primary' htmlType='submit'>
						CREATE COURSE
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default CreateCourse;
