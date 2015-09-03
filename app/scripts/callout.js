define(['jquery', 'backbone', 'enum', 'placement', 'hbs!../templates/callout'], function($, backbone, Enum, Placement, calloutTemplate){
	'use strict';

	var Callout = backbone.View.extend({
		template: calloutTemplate,

		tagName: 'div',
		
		constructor: function(options){
			options = options || {};
			
			if(!options.model && options.content){
				options.model = {
					content: options.content
				};
			}
			
			this.placement = Enum.validate(options.placement, Placement);
			
			backbone.View.prototype.constructor.call(this, options);
		},
		
		initialize: function(){
			
		},
		
		className: function(){
			return 'popover ' + this.placement;
		},
		
		render: function(){
			if(!this.rendered)
			{
				this.$el.html(this.renderTemplate());
				this.rendered = true;
			}
			
			return this;
		},
		
		show: function(){
			this.render();
			this.$el.addClass('fade in');
			this.$el.css('display', 'block');
		},
		
		hide: function(){
			this.$el.removeClass('fade in');
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
