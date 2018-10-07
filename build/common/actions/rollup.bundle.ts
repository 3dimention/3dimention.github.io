/**
 * Rollup Bundling
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { basename } from 'path';
import { reduce, extend, replace } from 'lodash';
import * as rollup from 'rollup';
import { Project } from '../rollup.argv';
import RollupClean from './rollup.clean';

const skibLibraries = (input: string, skip: boolean) => {
	return basename(input).indexOf('libraries-bundle') !== -1 && skip;
};

const generate = async(configuration: any, memo: boolean, output) => {
	try {
		const build = extend({}, configuration, { output });
		const bundle = await rollup.rollup(build);
		await bundle.write(output);
	} catch(error) {
		memo = false;
	}
	return memo;
};

export default async(configuration: any, project: Project) => {
	const { params } = project.environment;
	if(!skibLibraries(configuration.input, params.skipLibs)) {
		RollupClean(configuration, project);
		return reduce(configuration.output, generate.bind(null, configuration), true);
	}
	return true;
};
