export const adminUser = { email: 'admin@email.com', password: 'admin123' };
export const convertDuration = (mins) => {
	let minutes = mins;
	let hours = Math.floor(minutes / 60);
	if (hours < 10) hours = '0' + hours;
	minutes = minutes % 60;
	if (minutes < 10) minutes = '0' + minutes;
	return '' + hours + ':' + minutes;
};
