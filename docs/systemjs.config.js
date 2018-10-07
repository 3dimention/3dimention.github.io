System.register([], function (exports, module) {
	'use strict';
	return {
		execute: function () {

			

			function __$styleInject(css) {
			    if (!css) return;

			    if (typeof window == 'undefined') return;
			    var style = document.createElement('style');
			    style.setAttribute('media', 'screen');

			    style.innerHTML = css;
			    document.head.appendChild(style);
			    return css;
			}

			/**
			 * SystemJs Configuration
			 * @author Patricio Ferreira <3dimentionar@gmail.com>
			 */
			SystemJS.config({
				baseURL: '/',
				bundles: {},
				paths: {},
				transpiler: false
			});

		}
	};
});
