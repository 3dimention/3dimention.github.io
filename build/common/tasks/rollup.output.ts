/**
 * Rollout Configuration Output
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import * as path from 'path';
import * as _ from 'lodash';

const rollupInput = (config) => {
	config.input = path.resolve(config.input);
};

const rollupOutputDir = (config, client, file) => {
	const abDir = path.resolve(config.output.dir);
	const rePath = _.replace(config.input, `${path.resolve(client.basePath) + path.sep}`, '');
	config.output.dir = _.replace(`${abDir + path.sep + rePath}`, file.base, '');
};

const rollupOutputFile = (config, client, file) => {
	config.output.file = `${file.name}.js`;
};

export default (config, project) => {
	const file = path.parse(config.input);
	rollupInput(config);
	rollupOutputDir(config, project.configuration.client, file);
	rollupOutputFile(config, project.configuration.client, file);
	return config;
};
