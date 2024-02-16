import React from 'react';
import { Button, Card, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const backendUrl = 'http://localhost:4000/register';

const Registration = () => {
	const navigate = useNavigate();
	const onFinish = async (values) => {
		console.log('Successfully registered', values);
		try {
			const response = await fetch(backendUrl, {
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

			const result = await response.json();
			console.log(result);
		} catch (error) {
			console.log('There was an error', error);
		}

		navigate('/login');
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className='d-flex justify-content-center flex-column align-items-center'>
			<h1
				style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}
			>
				Registration
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
						label='Name'
						labelCol={{ span: 24, marginBottom: 22 }}
						wrapperCol={{ span: 24 }}
						name='name'
						placeholder='Input text'
						rules={[
							{
								required: true,
								message: 'Please input your name!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Email'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						name='email'
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
							Register
						</Button>
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 4,
							span: 16,
						}}
					>
						<span>Already has account? </span>
						<Link to='/login' style={{ fontWeight: 'bold' }}>
							Login
						</Link>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};
export default Registration;
