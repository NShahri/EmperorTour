/* global describe, it, beforeEach, afterEach */
define(['chai', 'jquery', 'callout'], function (chai, $, Callout) {
	'use strict';

	var expect = chai.expect;

	describe('callout', function () {

		describe('content', function(){
			
			it('Should not render when content is not provided', function () {
				var callout = new Callout();
				callout.render();
				
				expect(callout.$el.find('.popover-content').length).to.be.equal(0);
			});
			
			it('Should render the content', function () {
				var content = 'temp content';
				var callout = new Callout({ content: content });
				callout.render();
				
				expect(callout.$el.find('.popover-content').text()).to.be.equal(content);
			});
	
			it('Should render the encoded content', function () {
				var content = '<div>temp content</div>';
				var callout = new Callout({ content: content });
				callout.render();
				
				expect(callout.$el.find('.popover-content').text()).to.be.equal(content);
			});
			
		});

		describe('placement', function(){
			
			var placementTest = function(placement){
				var callout = new Callout();
				callout.show($('<div/>'), placement);
				expect(callout.$el.hasClass(placement)).to.be.equal(true);
			};
			
			it('Should render right arrow when placement is right', function () {
				placementTest('right');
			});
			
			it('Should render left arrow when placement is left', function () {
				placementTest('left');
			});
			
			it('Should render top arrow when placement is top', function () {
				placementTest('top');
			});
			
			it('Should render bottom arrow when placement is bottom', function () {
				placementTest('bottom');
			});
		});

	});
});