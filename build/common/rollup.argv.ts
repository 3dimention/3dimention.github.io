/**
 * Rollup Arguments Parsing Script
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
const path = require('path');
const argv = require('argv').clear();
const _ = require('lodash');
import { InputOptions, OutputOptions, Plugin } from 'rollup';

const cwd = process.cwd();
const pkg = require(path.resolve(cwd, 'package.json'));

const args = argv.option([
	{
		description: 'Clean Output',
		example: 'npm run prod --args c',
		name: 'clean',
		short: 'c',
		type: 'boolean'
	}
]).run();

export interface Environment {
	profile: string;
	params?: any;
};

export interface Configuration {
	cwd: string;
	basePath: string;
	input: string|string[];
	output: OutputOptions;
	plugins: string[]
};

export interface Project {
	[name: string]: any;
	configuration: Configuration;
	environment: Environment;
};

export default {
	configuration: _.assignIn(pkg.configuration, { cwd }),
	environment: { params: args.options, profile: (process.env.profile || 'dev') },
	..._.omit(pkg, 'project')
} as Project;
