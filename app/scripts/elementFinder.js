define(['class', 'jquery'], function(Class, $){
	'use strict';

	var ElementFinder = Class.extend({
		initialize: function(element){
			this.element = element;
		},
		
		initializeElement: function() {
			if(!this.element){
				// set the default when we need it because initialize can happen when DOM is not ready
				this.element = $('body');
			}
			
			return this.element;
		},
		
		find: function(el){
			return el instanceof $ ? el : this.initializeElement().find(el);
		}
	});

	return ElementFinder;
});
