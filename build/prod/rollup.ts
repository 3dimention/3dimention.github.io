/**
 * Rollup Production Configuration
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { Project } from '../common/rollup.argv';
import RollupBundle from '../common/actions/rollup.bundle';

export default async(config: any, project: Project) => {
	await RollupBundle(config, project);
	console.log('Prod TODO', config.input);
	return {};
};
