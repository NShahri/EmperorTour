define(['callout', 'hbs!../templates/tourCallout'], function(Callout, tourCalloutTemplate){
	'use strict';

	var TourCallout = Callout.extend({
		template: tourCalloutTemplate,
		
		events:{
			'click a.next' : 'onNextClick',
			'click a.prev' : 'onPrevClick',
			'click a.got-it' : 'onGotItClick',
			'click a.close' : 'onCloseClick',
		},
		
		onNextClick: function(){
			this.trigger('next');
		},
		
		onPrevClick: function(){
			this.trigger('prev');
		},
		
		onGotItClick: function(){
			this.trigger('gotIt');
		},
		
		onCloseClick: function(){
			this.trigger('close');
		}
		
	});
	
	return TourCallout;
});