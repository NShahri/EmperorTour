define(['jquery', 'class'], function($, Class){
	'use strict';

	var TourContainer = Class.extend({
		initialize : function(element){
			this.element = element;
		},
		
		initializeElement: function() {
			if(!this.element){
				// set the default when we need it because initialize can happen when DOM is not ready
				this.element = $('body');
			}
			
			return this.element;
		},
		
		append : function(el){
			return this.initializeElement().append(el);
		}
	});
	
	return TourContainer;
});