
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
 * Split string with separator and
 * remove spaces.
 *
 * Examples:
 *
 *   mould.split('city, area, country', ',');
 *   // => ['city', 'area', 'country']
 *   
 * @param  {String} str
 * @return {Array}
 * @api public
 */

mould.split = function(str, separator) {
	var re = new RegExp('\\s*' + separator + '\\s*');
	return str.split(re);
};