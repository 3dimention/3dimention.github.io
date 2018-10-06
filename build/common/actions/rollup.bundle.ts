/**
 * Rollup Bundling
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import * as rollup from 'rollup';
import { Project } from '../rollup.argv';
import RollupClean from './rollup.clean';

export default async(configuration: any, project: Project) => {
	await RollupClean(configuration, project);
	console.log('Rollup Bundle on: ', configuration);
	return {};
};
