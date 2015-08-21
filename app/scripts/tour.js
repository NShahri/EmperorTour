define(['class', 'underscore', 'tourCallout', 'optionsParser', 'jquery', 'promise', 'elementFinder', 'TourCalloutBuilder'], function(Class, _, TourCallout, OptionsParser, $, Promise, ElementFinder, TourCalloutBuilder){
	'use strict';

	var Tour = Class.extend({
		initialize: function(options, tourCalloutBuilder, elementFinder) {
			this.options = new OptionsParser().parse(options);
			this.tourCalloutBuilder = tourCalloutBuilder || new TourCalloutBuilder();
			this.elementFinder = elementFinder || new ElementFinder();
			
			this.currentStepIndex = 0;
		},
		
		show: function(){
			var currentStep = this.getCurrentStep();
			var self = this;
			if(currentStep)	{
				this.runStepPreActions(currentStep).then(function(){
					self.onStepPreActionsDone(currentStep);
				});
			}
		},
		
		showNextStep: function(){
			if(this.currentStepIndex < this.options.steps.length - 1)
			{
				this.currentStepIndex ++;
				this.show();
			}
		},
		
		showPrevStep: function(){
			if(this.currentStepIndex > 0)
			{
				this.currentStepIndex --;
				this.show();
			}
		},
		
		getTourCallout: function(step){
			if(this.lastTourCallout){
				this.lastTourCallout.hide();
			}
			
			var tourCallout = this.tourCalloutBuilder.build(step);
			
			tourCallout.on('next', this.onNextTour, this);
			tourCallout.on('prev', this.onPrevTour, this);
			
			this.lastTourCallout = tourCallout;
			
			return tourCallout;
		},
		
		onNextTour: function(){
			var currentStep = this.getCurrentStep();
			if(currentStep)	{
				this.runStepPostActions(currentStep);
			}

			this.showNextStep();
		},
		
		onPrevTour: function(){
			var currentStep = this.getCurrentStep();
			if(currentStep)	{
				this.runStepPostActions(currentStep);
			}
						
			this.showPrevStep();
		},
		
		onStepPreActionsDone: function(step){
			var stepElement = this.getStepElement(step);
			var stepOptions = this.getStepOptions(step);
			var stepPlacement = this.getStepPlacement(step);
				
			var tourCallout = this.getTourCallout(step);
			tourCallout.show(stepElement, stepPlacement, stepOptions);
		},
		
		runStepPostActions: function(step) {
			if(step.postActions){
				//do action
			}

			return Promise.resolve();
		},
		
		runStepPreActions: function(step) {
			if(step.preActions){
				// do action
			}
			
			return Promise.resolve();
		},
		
		getCurrentStep: function() {
			var stepIndex = this.currentStepIndex || 0;
			return this.options.steps[stepIndex];
		},
		
		getStepElement: function(step){
			return this.elementFinder.find(step.el);
		},
		
		getStepOptions: function(step){
			return step.options || {};
		},
				
		getStepPlacement: function(step){
			return step.placement || 'top';
		}

	});
	
	return Tour;
});