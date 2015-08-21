define(['class', 'underscore', 'enum', 'placement'], function(Class, _, Enum, Placement){
	'use strict';

	var CalloutPosition = Class.extend({
		getPosition: function(el, callout, placement){
			placement = Enum.validate(placement, Placement);
			
			var elPos = el[0].getBoundingClientRect();
			var calloutPos = callout[0].getBoundingClientRect();
			var newPos = {};
			
			if(placement === 'right' || placement === 'left'){
				var top = Math.round(elPos.top + (elPos.height - calloutPos.height) / 2.0 );
				if(placement === 'right'){
					newPos = { left: Math.round(elPos.right), top: top };
				} else {
					newPos = { left: Math.round(elPos.left - calloutPos.width),	top: top };
				}
			}
			else if(placement === 'top' || placement === 'bottom'){
				var left = Math.round(elPos.left + (elPos.width - calloutPos.width) / 2.0 );
				if(placement === 'top'){
					newPos = { left: left, top: Math.round(elPos.top - calloutPos.height) };
				} else {
					newPos = { left: left, top: Math.round(elPos.bottom) };
				}
			}
				
			return newPos;
		}
	});
	
	return CalloutPosition;
});
