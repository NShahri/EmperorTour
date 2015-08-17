define(['class', 'tourCallout', 'tourContainer'], function(Class, TourCallout, TourContainer){
	'use strict';

	var TourCalloutBuilder = Class.extend({
		initialize: function(tourContainer){
			this.tourContainer = tourContainer || new TourContainer();
		}, 
		
		build: function(step){
			var tourCallout = new TourCallout({model: step.options});
			
			this.tourContainer.append(tourCallout.$el);
							
			return tourCallout;
		}
	});
	
	return TourCalloutBuilder;
});