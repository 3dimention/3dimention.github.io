/**
 * Rollup Clean
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { resolve } from 'path';
import * as fs from 'fs-extra';
import { each } from 'lodash';
import { Project } from '../rollup.argv';

const clean = (out: any) => {
	if(fs.pathExistsSync(out.file))
		fs.removeSync(out.file);
};

export default (configuration: any, project: Project) => {
	const { params } = project.environment;
	if (params.clean) each(configuration.output, clean);
	return true;
};
