
/**
 * Expose 'mould'
 */

module.exports = mould;


/**
 * mould constructor.
 * @api public
 */

function mould() {
  //do something
}


/**
 * Parse arguments.
 *
 * Examples:
 *
 *   mould.args('city, area, country');
 *   // => ['city', 'area', 'country']
 *   
 * @param  {String} str
 * @return {Array}
 * @api public
 */

mould.args = function(str) {
	return str.split(/\s*,\s*/);
};