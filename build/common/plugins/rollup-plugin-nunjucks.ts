/**
 * Rollup Templates plugin
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
var path = require('path');
var fs = require('fs');
var nunjucks = require('nunjucks');

var shouldProcess = function(filename, options) {
	return options.generateOn.reduce(function(memo, pattern) {
		memo = (filename.indexOf(pattern) !== -1);
		return memo;
	}, false);
};

var getOutputFile = function(file) {
	return file.replace('.js', '.html');
};

var getInputFile = function(options) {
	var cwd = process.cwd();
	return path.join(cwd, options.templates, '_master.nunjucks');
};

var getModulePath = function(file, options) {
	var cwd = process.cwd();
	var outDir = options.outputDir;
	return file.replace(path.join(cwd, outDir) + path.sep, '').replace(/\\/g, '/');
};

var getData = function(file, nunjucksOpts, env) {
	var pkg = require(path.join(process.cwd(), './package.json'));
	var module = getModulePath(file, nunjucksOpts);
	return Object.assign( nunjucksOpts.data || {
		title: pkg.name,
		description: pkg.description,
		version: pkg.version
	}, { env: env, module: module });
}

var writeOutput = function(outFile, template) {
	fs.writeFileSync(outFile, template);
};

module.exports = function(nunjucksOpts) {
	var env = nunjucks.configure(nunjucksOpts.templates, nunjucksOpts.options);
	return {
		name: 'nunjucks',
		generateBundle: function(outputOptions, bundle, isWrite) {
			if(isWrite) {
				var file = outputOptions.file;
				if(shouldProcess(path.basename(file), nunjucksOpts)) {
					var inFile = getInputFile(nunjucksOpts);
					var outFile = getOutputFile(file);
					env.getTemplate(inFile, true).render(getData(file, nunjucksOpts, env), function(err, result) {
						if(err) {
							throw new Error(err);
							return;
						}
						writeOutput(outFile, result);
					}.bind(this));
				}
			}
		}
	};
};
