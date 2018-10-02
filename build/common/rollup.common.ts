/**
 * Rollup Common Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'lodash';
import { Project, Configuration } from './rollup.argv';
import RollupInput from './tasks/rollup.input';
import RollupOutput from './tasks/rollup.output';
import RollupPlugins from './tasks/rollup.plugins';

/**
 * Tasks
 */
const tasks = {
	output: RollupOutput,
	plugins: RollupPlugins
};

/**
 * Task Executor
 */
const taskExecutor = (inputs: string|string[], project: Project, memo: Configuration[], task: string) => {
	const processed = _.reduce(inputs, tasks[task].bind(null, project), {})
	return memo;
};

/**
 * Default Configuration Generation
 * @param {Project} project The project configuration
 * @returns {Configuration[]}
 */
export default async (project: Project) => {
	console.log(_.map(project.configuration.input, RollupInput));
	process.exit(0);
	return await _.reduce(_.keys(tasks), taskExecutor.bind(null, project), []);
};
