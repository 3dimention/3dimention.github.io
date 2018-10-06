/**
 * Rollup Clean
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { resolve } from 'path';
import { Project, Configuration } from '../rollup.argv';

export default async(configuration: any, project: Project) => {
	const { params } = project.environment;
	console.log(params);
	return true;
};
