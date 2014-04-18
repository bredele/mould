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

	var node;
	beforeEach(function() {
		node = {};
	});
	
	describe("arguments", function() {

		it("transforms content into arguments", function() {
			var fn = mould(function(el, city, country) {
				assert.deepEqual(el, node);
				assert.equal(city, 'calgary');
				assert.equal(country, 'canada');
			});
			fn(node, 'calgary,   canada');
		});
		
	});

	describe('function', function() {

		it('call function an pass arguments', function() {
			var fn = mould({
				location : function(el, city, country) {
					assert.deepEqual(el, node);
					assert.equal(city, 'calgary');
					assert.equal(country, 'canada');
				}
			});
			fn(node, 'location: calgary, canada');
		});

	});

});