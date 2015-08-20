/* global: mocha */

require(['test/suite'], function (tests) {
	'use strict';

	mocha.setup('bdd');

	require(tests.map(function (test) { return 'test/' + test; }), function () {
		mocha.run();
	});
});