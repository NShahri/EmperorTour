define(['callout', 'hbs!../templates/tourCallout'], function(Callout, tourCalloutTemplate){
	'use strict';

	var TourCallout = Callout.extend({
		template: tourCalloutTemplate,
		
		events: {
			'click .next': 'onNextClick',
			'click .prev': 'onPrevClick',
			'click .got-it': 'onGotItClick',
			'click .close': 'onCloseClick'
		},
		
		onNextClick: function(){
			this.trigger('next');
		},
		
		onPrevClick: function(){
			this.trigger('prev');
		},
		
		onGotItClick: function(){
			this.hide();
			this.trigger('gotIt');
		},
		
		onCloseClick: function(){
			this.hide();
			this.trigger('close');
		}
		
	});
	
	return TourCallout;
});