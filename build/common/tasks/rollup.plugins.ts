/**
 * Rollup Plugins
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import path, { resolve } from 'path';
import { Project } from '../rollup.argv';
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');

export default  async (project: Project) => {
	return [nodeResolve(), commonjs()];
};
