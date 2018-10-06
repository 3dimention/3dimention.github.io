/**
 * Rollup Production Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { Project } from '../common/rollup.argv';
import { ProcessPlugin } from '../common/tasks/rollup.plugins';
import RollupBundle from '../common/actions/rollup.bundle';

const plugins = {};

export const getPluginOptionsForEnv = (plugin: string, options: any, process: ProcessPlugin) => {
	return plugins[plugin] ? plugins[plugin](options, process) : options;
};

export default async(config: any, project: Project) => {
	await RollupBundle(config, project);
	console.log('Prod TODO', config.input);
	return {};
};
