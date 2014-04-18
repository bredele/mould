var mould = require('..');
var assert = require('assert');

describe("split", function() {

	it("should parse arguments", function() {
		var result = mould.split('city, area, country', ',');
		assert.deepEqual(result, [
			'city',
			'area',
			'country'
		]);
	});

	it("should parse blocks", function() {
		var result = mould.split('city, area    ; country', ';');
		assert.deepEqual(result, [
			'city, area',
			'country'
		]);
	});

});


describe('parse', function() {

	describe("arguments", function(done) {

		it("transforms content into arguments", function() {
			var fn = mould(function(node, city, country) {
				if(city === 'calgary' && country === 'canada' ) done();
			});
			fn({}, 'calgary,   canada');
		});
		
	});

});