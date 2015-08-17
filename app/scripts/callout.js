define(['jquery', 'backbone', 'enum', 'calloutPosition', 'placement', 'hbs!../templates/callout'], function($, backbone, Enum, CalloutPosition, Placement, calloutTemplate){
	'use strict';

	var Callout = backbone.View.extend({
		template: calloutTemplate,
		
		className: 'popover',
		
		tagName: 'div',
		
		initialize: function(options){
		},
		
		render: function(){
			if(!this.rendered)
			{
				this.$el.html(this.renderTemplate());				
				this.rendered = true;
			}
			
			return this;
		},
		
		show: function(el, placement){
			placement = Enum.validate(placement, Placement);
			
			this.render();
			this.$el.removeClass('right left top bottom');
			this.$el.addClass('fade in ' + placement);
			
			this.$el.css('display', 'block');
			this.$el.css(new CalloutPosition().getPosition(el, this.$el, placement)); // call after make it visisble			
		},
		
		hide: function(){
			this.$el.removeClass('fade in top bottom left right');
			this.$el.css('display', '');
		},
		
		renderTemplate: function(){
			if(this.template) {
				return this.template(this.model);
			}
			
			return '';
		}
		
	});
	
	return Callout;
});