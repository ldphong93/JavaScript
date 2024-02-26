// import { Card, Form, Input, Button } from 'antd';
// import { useState, useEffect } from 'react';
// import AuthorItem from './AuthorItem/AuthorItem';
// import CustomButton from '@common/Button/Button';
// import { useNavigate, useParams } from 'react-router-dom';
// import { createCourseThunk, updateCourseThunk } from '@store/courses/thunk';
// import { useDispatch, useSelector } from 'react-redux';
// import { addAuthorThunk } from '@store/authors/thunk';
// import { getAuthors, getCourses, getUser } from '@store/selector';
// import { convertDuration } from '@common/constants/Constants';

// enum FORM_TYPE {
// 	UPDATE = 'update',
// 	CREATE = 'create',
// }
// type CourseFormProps = {
// 	formType: FORM_TYPE;
// };
// const CourseForm: React.FC<CourseFormProps> = (props) => {
// 	const navigate = useNavigate();
// 	const dispatch = useDispatch();
// 	const user = useSelector(getUser);
// 	const allAuthors = useSelector(getAuthors);
// 	const [form] = Form.useForm();
// 	const forbiddenSymbols = /[@#$%^&]/;

// 	let { courseId } = useParams();
// 	let outdatedCourseAuthors = [];
// 	let outdatedDurationDisplayed = '00:00';

// 	const courseToUpdate = useSelector(getCourses).filter(
// 		(course) => course.id === courseId
// 	)[0];

// 	if (courseToUpdate) {
// 		outdatedCourseAuthors = courseToUpdate.authors.map(
// 			(authorId) => allAuthors.filter((author) => author.id === authorId)[0]
// 		);
// 		outdatedDurationDisplayed = convertDuration(courseToUpdate.duration);
// 	}
// 	const [courseAuthor, setCourseAuthor] = useState(outdatedCourseAuthors);

// 	const [title, setTitle] = useState('');
// 	const [duration, setDuration] = useState('');
// 	const [durationDisplayed, setDurationDisplayed] = useState(
// 		outdatedDurationDisplayed
// 	);
// 	const [newAuthorName, setNewAuthorName] = useState('');

// 	useEffect(() => {
// 		if (courseToUpdate && props.formType === 'UPDATE') {
// 			form.setFieldsValue({
// 				title: courseToUpdate.title,
// 				duration: courseToUpdate.duration,
// 				description: courseToUpdate.description,
// 			});
// 		}
// 	}, [courseToUpdate, props.formType, form]);

// 	const onFinish = (values) => {
// 		if (props.formType === 'CREATE') {
// 			console.log('Course successfully added', values);

// 			const newCourse = {
// 				title: values.title,
// 				description: values.description,
// 				duration: parseInt(values.duration, 10),
// 				authors: courseAuthor.map((auth) => auth.id),
// 			};
// 			dispatch(createCourseThunk({ body: newCourse, token: user.token }));
// 			navigate('/');
// 		} else if (props.formType === 'UPDATE') {
// 			console.log('Course successfully updated', values);

// 			const updatedCourse = {
// 				title: values.title,
// 				description: values.description,
// 				duration: parseInt(values.duration, 10),
// 				authors: courseAuthor.map((auth) => auth.id),
// 				// id: courseToUpdate.id,
// 				creationDate: courseToUpdate.creationDate,
// 			};
// 			//TODO
// 			dispatch(
// 				updateCourseThunk({
// 					id: courseId,
// 					body: updatedCourse,
// 					token: user.token,
// 				})
// 			);
// 			navigate('/');
// 		}
// 	};
// 	const onFinishFailed = (errorInfo) => {};

// 	const onClickAdd = (id) => {
// 		let foundAuthor = allAuthors.find((author) => author.id === id);
// 		if (foundAuthor) {
// 			//check if courseAuthor does not contains target author --> add to courseAuthor
// 			if (courseAuthor.filter((author) => author.id === id).length === 0) {
// 				setCourseAuthor([...courseAuthor, foundAuthor]);
// 			}
// 		}
// 	};

// 	const onClickRemove = (id) => {
// 		let foundAuthor = courseAuthor.find((author) => author.id === id);
// 		if (foundAuthor) {
// 			if (courseAuthor.filter((author) => author.id === id).length !== 0) {
// 				setCourseAuthor(courseAuthor.filter((author) => author.id !== id));
// 			}
// 		}
// 	};

// 	const onClickCreateAuthor = () => {
// 		if (newAuthorName !== '') {
// 			//reset UI
// 			setNewAuthorName('');
// 			dispatch(addAuthorThunk({ name: newAuthorName, token: user.token }));
// 		}
// 	};

// 	const onClickBack = () => {
// 		navigate('/');
// 	};

// 	const handleTitleChange = (event) => {
// 		const value = event.target.value;
// 		if (!forbiddenSymbols.test(value)) {
// 			setTitle(value);
// 		}
// 	};

// 	const handleDurationChange = (event) => {
// 		const value = event.target.value;
// 		setDuration(value);

// 		let hours = Math.floor(value / 60);
// 		if (hours < 10) {
// 			hours = '0' + hours;
// 		}

// 		let minutes = value % 60;
// 		if (minutes < 10) {
// 			minutes = '0' + minutes;
// 		}
// 		setDurationDisplayed('' + hours + ':' + minutes);
// 	};

// 	const handleNewAuthorInputChange = (event) => {
// 		const value = event.target.value;
// 		setNewAuthorName(value);
// 	};

// 	return (
// 		<div className='d-flex justify-content-center'>
// 			<Form
// 				form={form}
// 				name='basic'
// 				// labelCol={{
// 				// 	span: 12,
// 				// }}
// 				// wrapperCol={{
// 				// 	span: 12,
// 				// }}
// 				style={{ width: '60%' }} //
// 				initialValues={{ remember: true }}
// 				onFinish={onFinish}
// 				onFinishFailed={onFinishFailed}
// 				autoComplete='off'
// 			>
// 				<Card bordered={true} style={{ border: '2px groove', width: '100%' }}>
// 					<h4>Main Info</h4>

// 					<Form.Item
// 						label='Title'
// 						labelCol={{ span: 24 }}
// 						wrapperCol={{ span: 24 }}
// 						fontSize='50px'
// 						name='title'
// 						placeholder='Input text'
// 						rules={[
// 							{
// 								required: true,
// 								message: 'Title is required.',
// 							},
// 						]}
// 					>
// 						<Input value={title} onChange={handleTitleChange} />
// 					</Form.Item>

// 					<Form.Item
// 						label='Description'
// 						labelCol={{ span: 24 }}
// 						wrapperCol={{ span: 24 }}
// 						name='description'
// 						rules={[
// 							{
// 								required: true,
// 								message: 'Description is required.',
// 							},
// 						]}
// 					>
// 						<Input.TextArea />
// 					</Form.Item>

// 					<h4>Duration</h4>

// 					<div
// 						style={{
// 							display: 'flex',
// 							flexDirection: 'row',
// 							alignItems: 'center',
// 							gap: '1px',
// 						}}
// 					>
// 						<Form.Item
// 							label='Duration'
// 							labelCol={{ span: 24 }}
// 							wrapperCol={{ span: 24 }}
// 							fontSize='50px'
// 							name='duration'
// 							placeholder='Input text'
// 							rules={[
// 								{
// 									required: true,
// 									message: 'Duration is required.',
// 								},
// 							]}
// 						>
// 							<Input value={duration} onChange={handleDurationChange} />
// 						</Form.Item>
// 						<p style={{ marginLeft: '10px', marginTop: '30px' }}>
// 							{durationDisplayed} hh:mm
// 						</p>
// 					</div>

// 					<div
// 						className='d-flex justify-content-between'
// 						style={{ display: 'flex', justifyContent: 'space-between' }}
// 					>
// 						<div
// 							style={{ flex: '1', marginRight: '5%', boxSizing: 'border-box' }}
// 						>
// 							<h4>Authors List</h4>
// 							{allAuthors.map((author) => (
// 								<AuthorItem
// 									key={author.id}
// 									authorName={author.name}
// 									onClickAdd={() => onClickAdd(author.id)}
// 									onClickRemove={() => onClickRemove(author.id)}
// 								/>
// 							))}
// 						</div>
// 						<div style={{ flex: '1', boxSizing: 'border-box' }}>
// 							<h4>Course Authors</h4>
// 							{courseAuthor.map((author) => (
// 								<AuthorItem
// 									key={author.id}
// 									authorName={author.name}
// 									onClickAdd={() => onClickAdd(author.id)}
// 									onClickRemove={() => onClickRemove(author.id)}
// 								/>
// 							))}
// 						</div>
// 					</div>

// 					<div>
// 						<h5>Create New Author</h5>
// 						<div>
// 							<Input
// 								onChange={handleNewAuthorInputChange}
// 								style={{ marginRight: '15%', width: '20%' }}
// 							/>
// 							<CustomButton
// 								buttonName='CREATE AUTHOR'
// 								className='default-button'
// 								onClick={() => onClickCreateAuthor()}
// 							/>
// 						</div>
// 					</div>
// 				</Card>
// 				<div className='d-flex justify-content-center'>
// 					<CustomButton
// 						buttonName='BACK'
// 						className='default-button'
// 						onClick={onClickBack}
// 					/>
// 					{(() => {
// 						if (props.formType === 'CREATE') {
// 							return (
// 								<Button type='primary' htmlType='submit'>
// 									CREATE COURSE
// 								</Button>
// 							);
// 						} else if (props.formType === 'UPDATE') {
// 							return (
// 								<Button type='primary' htmlType='submit'>
// 									UPDATE COURSE
// 								</Button>
// 							);
// 						}
// 						//immediately-invoked () right after anonymous function (() => {})
// 					})()}
// 				</div>
// 			</Form>
// 		</div>
// 	);
// };

// export default CourseForm;
