/**
 * Rollup Templates plugin
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import { resolve } from 'path';
import * as fs from 'fs-extra';
import { extend, reduce, replace } from 'lodash';
import nunjucks from 'nunjucks';
import { Project } from '../rollup.argv';

export interface NunjucksOptions {
	[name: string]: any;
	path: string,
	data: any
};

export default (options: NunjucksOptions) => {
	return {
		name: 'templates',
		generateBundle(outputOptions, bundle, isWrite) {
			if(isWrite) {
				console.log('Nunjucks: ', bundle);
			}
		},
		buildEnd(error) {
			if(!error) {
				console.log(options);
			} else {
				console.log(error);
			}
		}
	};
}
