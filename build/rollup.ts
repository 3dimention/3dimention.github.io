/**
 * Common Rollup Configuration across environments
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import project from './common/rollup.argv';
import common from './common/rollup.common';

export default (async() => {
	const configurations = await common(project);
	console.log(configurations);
})();
