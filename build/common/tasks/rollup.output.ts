/**
 * Rollout Configuration Output
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { resolve, join, normalize, sep } from 'path';
import { extend, map, replace, isArray, omit, trimStart } from 'lodash';
import { Project, Configuration } from '../rollup.argv';

const extensions = [
	'.es',
	'.es6',
	'.ts',
	'.tsx'
];

const resolveDir = (out: any, input: string, configuration: Configuration) => {
	const { cwd, basePath } = configuration;
	const file = replace(input, `${join(cwd, basePath)}${sep}`, '');
	return replace(resolve(cwd, out.dir, file), new RegExp(`(${extensions.join('|')})$`, 'gm'), '.js');
};

export default (project: Project, input: string) => {
	let { output } = project.configuration;
	if(!isArray(output)) output = [output];
	return map(output, (out) => extend({ ...omit(out, 'dir') },
		{ file: resolveDir(out, input, project.configuration) }));
};
