/**
 * Common Rollup Configuration across environments
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { each } from 'lodash';
import project, { Configuration } from './common/rollup.argv';
import common from './common/rollup.common';

const env: string = project.environment.profile;
const RollupEnv = require(`./${env}/rollup`).default;

const execute = async(configuration: Configuration) => {
	return await RollupEnv(configuration, project);
};

export default (async() => {
	const configurations = await common(project);
	each(configurations, execute);
})();
