/**
 * Rollup Development Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { extend } from 'lodash';
import { Project } from '../common/rollup.argv';
import { ProcessPlugin } from '../common/tasks/rollup.plugins';
import { NunjucksOptions } from '../common/plugins/rollup-plugin-nunjucks';
import RollupBundle from '../common/actions/rollup.bundle';

export const nunjucksOptions = (options: any, process: ProcessPlugin) => {
	return options;
};

export default async(config: any, project: Project) => {
	await RollupBundle(config, project);
	console.log('Dev TODO', config.input);
	return {};
};
