/**
 * Rollup Templates plugin
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { resolve } from 'path';
import * as fs from 'fs-extra';
import { extend, reduce, replace } from 'lodash';
import * as nunjucks from 'nunjucks';
import { Project } from '../rollup.argv';

export interface NunjucksOptions {
	[name: string]: any;
	path: string,
	data: any
};

export default (options: NunjucksOptions) => {
	return {
		name: 'nunjucks',
		generateBundle(outputOptions, bundle, isWrite) {
			if(isWrite) {
				console.log(options);
				console.log('Nunjucks generate: ', outputOptions);
			}
		}
	};
}
