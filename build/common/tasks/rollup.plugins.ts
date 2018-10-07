/**
 * Rollup Plugins
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
import path, { resolve } from 'path';
import { extend, reduce, keys } from 'lodash';
import { Project } from '../rollup.argv';

export interface ProcessPlugin {
	input: string;
	configuration: any;
	project: Project;
};

const supported = {
	commonjs: require('rollup-plugin-commonjs'),
	nodeResolve: require('rollup-plugin-node-resolve'),
	less: require('rollup-plugin-less'),
	postcss: require('rollup-plugin-postcss'),
	nunjucks: require('../plugins/rollup-plugin-nunjucks')
};

const getOptionsForEnv = (plugin: string, options: any, process: ProcessPlugin) => {
	let processOptions;
	try {
		const { profile } = process.project.environment;
		processOptions = require(`../../${profile}/rollup`)[`${plugin}Options`];
	} catch(error) {
		processOptions = null;
	}
	return processOptions ? processOptions(options, process) : options;
};

const execute = (process: ProcessPlugin, memo: any[], plugin: string) => {
	const { plugins } = process.project.configuration;
	let options = plugins[plugin];
	extend(options, getOptionsForEnv(plugin, options, process));
	memo.push(supported[plugin](options));
	return memo;
};

export default (project: Project, input: string, configuration: any) => {
	const { plugins } = project.configuration;
	return reduce(keys(plugins), execute.bind(null, { input, configuration, project }), []);
};
