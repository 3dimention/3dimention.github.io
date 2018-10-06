/**
 * Rollup Test Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { Project } from '../common/rollup.argv';
import RollupBundle from '../common/actions/rollup.bundle';

export default async(config: any, project: Project) => {
	await RollupBundle(config, project);
	console.log('Test TODO', config.input);
	return {};
};
