requirejs.config({
	baseUrl: 'scripts',
    paths: {
        backbone: '../bower_components/backbone/backbone',
		jquery: '../../bower_components/jquery/dist/jquery',		
		jQuery: '../../bower_components/jquery/dist/jquery',
		underscore: '../bower_components/underscore/underscore',
		bootstrap: '../bower_components/bootstrap/js',
		'class': '../bower_components/backbone.class/backbone.class',
		'es6-promise' : '../bower_components/es6-promise/promise',
		
		hbs: '../bower_components/require-handlebars-plugin/hbs'
	},
	
	shim:{
		'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
		'class' : {
            deps: ['backbone'],
            exports: 'Backbone.Class'
		}
	}
});