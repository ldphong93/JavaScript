const path = require('path');

module.exports = function override(config, env) {
	// Add the new alias
	config.resolve.alias['@components'] = path.resolve(
		__dirname,
		'src/components'
	);
	config.resolve.alias['@common'] = path.resolve(__dirname, 'src/common');
	config.resolve.alias['@store'] = path.resolve(__dirname, 'src/store');

	return config;
};
