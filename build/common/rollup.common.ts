/**
 * Rollup Common Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { map, reduce, keys, extend } from 'lodash';
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
const taskExecutor = (project: Project, input: string, memo: object, task: string) => {
	const { options } = project.configuration;
	extend(memo, { [task]: tasks[task](project, input) }, { ...options });
	return memo;
};

/**
 * Configuration Reducer for Creation
 */
const create = (project: Project, memo: object[], input: string) => {
	memo.push(extend({ input }, reduce(keys(tasks), taskExecutor.bind(null, project, input), {})));
	return memo;
};

/**
 * Default Configuration Generation
 * @param {Project} project The project configuration
 * @returns {Configuration[]}
 */
export default async (project: Project) => {
	const inputs = RollupInput(project);
	return await reduce(inputs, create.bind(null, project), []);
};
