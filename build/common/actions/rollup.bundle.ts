/**
 * Rollup Bundling
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import * as rollup from 'rollup';
import clean from './rollup.clean';

export default (async(configs, project) => {
	const env: string = project.environment.profile;
	const rollupEnv = require(`../${env}/rollup.${env}`);
	await clean(project);
	configs.forEach(async(config) => {
		const rollupConfig = await rollupEnv(config, project);
		const bundle = await rollup.rollup(rollupConfig);
		console.log(bundle);
		console.log('--------------');
	});
});
