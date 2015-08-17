define(['jquery', 'backbone', 'bootstrap/popover', 'hbs!../templates/callout'], function($, backbone, popover, calloutTemplate){
	'use strict';

	var Callout = backbone.View.extend({
		template: calloutTemplate,
		
		initialize: function(options){
		},
		
		render: function(){
			if(!this.rendered)
			{
				// var content = this.content ? this.content : this.renderTemplate();
				// 
				// this.$el.popover({
				// 	content : content, 
				// 	placement: this.placement,
				// 	html: true,
				// 	container: this.$el
				// });

				this.$el.html(this.renderTemplate());				
				this.rendered = true;
			}
			
			return this;
		},
		
		show: function(el, placement){
			this.render();
			var popover=this.$el.find('.popover');
			popover.removeClass(this.currentPlacement);
			popover.addClass('fade in ' + placement);
			popover.css('display', 'block');
			this.currentPlacement = placement;
		},
		
		hide: function(){
			var popover=this.$el.find('.popover');
			popover.removeClass('fade in ' + this.currentPlacement);
			popover.css('display', '');
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