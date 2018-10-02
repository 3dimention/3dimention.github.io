/**
 * Rollup Common Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { map, reduce, keys } from 'lodash';
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
	const processed = reduce(inputs, tasks[task].bind(null, project), {})
	return memo;
};

/**
 * Default Configuration Generation
 * @param {Project} project The project configuration
 * @returns {Configuration[]}
 */
export default async (project: Project) => {
	const entries = RollupInput(project.configuration);
	console.log(entries);
	process.exit(0);
	return await reduce(keys(tasks), taskExecutor.bind(null, project), []);
};
