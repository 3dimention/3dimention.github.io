/**
 * Rollup Input
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import _ from 'lodash';
import fg from 'fast-glob';
import { Configuration } from '../rollup.argv';

export default (configuration: Configuration) => {
	return fg.sync(configuration.input, { cwd: configuration.basePath });
};
