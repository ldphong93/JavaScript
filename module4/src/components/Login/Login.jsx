import React from 'react';
import { Button, Card, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '@store/user/actions';

const loginURL = 'http://localhost:4000/login';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onFinish = async (values) => {
		console.log('Successfully login');
		try {
			const response = await fetch(loginURL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});

			if (!response.ok) {
				const message = 'A error has occured';
				throw new Error(message);
			}

			const resultJson = await response.json();
			const token = resultJson.result;
			localStorage.setItem('userToken', token);
			console.log(resultJson);

			dispatch(
				loginAction({
					name: resultJson.user.name,
					email: resultJson.user.email,
					token: token,
				})
			);

			console.log('User token: ', token);

			navigate('/');
		} catch (error) {
			console.log('There was an error: ', error);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Fail to login', errorInfo);
	};
	return (
		<div className='d-flex justify-content-center flex-column align-items-center'>
			<h1
				style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}
			>
				Login
			</h1>
			<Card bordered={true} style={{ border: '1px groove' }}>
				<Form
					name='basic'
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 16,
					}}
					style={{
						maxWidth: 600,
					}}
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Form.Item
						label='Email'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						fontSize='50px'
						name='email'
						placeholder='Input text'
						rules={[
							{
								required: true,
								message: 'Please input your email!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Password'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						name='password'
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 0,
							span: 24,
						}}
					>
						<Button type='primary' htmlType='submit' block>
							Login
						</Button>
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 4,
							span: 16,
						}}
					>
						<p>If you don't have an account?</p>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '10px',
							}}
						>
							<Link to='/registration' style={{ fontWeight: 'bold' }}>
								Register
							</Link>
						</div>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default Login;
