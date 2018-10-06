/**
 * Rollup Plugins
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import path, { resolve } from 'path';
import { Project } from '../rollup.argv';
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const nunjuckEntries = require('../plugins/rollup.templates');

export default  async (project: Project) => {
	const { plugins } = project.configuration;
	return [
		nodeResolve(plugins.nodeResolve),
		commonjs(plugins.commonjs),
		nunjuckEntries(plugins.nunjuckEntries)
	];
};
