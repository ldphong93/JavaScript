import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { appStore } from '@store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={appStore}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
