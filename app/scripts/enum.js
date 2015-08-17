define(['underscore'], function(_){
	'use strict';

	var Enum = {
		isValide : function(value, enumeration){
			return _.has(enumeration, value);
		},
		
		validate: function(value, enumeration) { 
			return this.isValide(value, enumeration) ? enumeration[value] : enumeration.default;
		} 
	}
	
	return Enum;
});