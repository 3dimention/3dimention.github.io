/**
 * Rollup Input
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { normalize } from 'path';
import fg from 'fast-glob';
import { map } from 'lodash';
import { Project } from '../rollup.argv';

const normalizeInput = (input: string) => {
	return normalize(input);
};

export default (project: Project) => {
	const { configuration } = project;
	return map(fg.sync(configuration.input, {
		cwd: configuration.basePath,
		onlyFiles: true,
		absolute: true
	}), normalize);
};
