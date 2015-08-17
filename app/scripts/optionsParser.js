define(['class', 'jquery', 'underscore'], function(Class, $, _){
	'use strict';

	var OptionsParser = Class.extend({
		parse: function(options){
			options = options || {};
			
			this.initializeSteps(options);
			
			return options;
		},
		
		initializeSteps: function(options){
			if(!options.steps) {
				options.steps = [];
			}	
			
			if(!_.isArray(options.steps)){
				options.steps = [options.steps]
			}
			
			if(options.steps.length <= 0) {
				new Error('not valide options for tour');
			}
		}
	})

	return OptionsParser;
});