
/**
 * Expose 'mould'
 */

module.exports = mould;


/**
 * mould constructor.
 * @api public
 */

function mould(fn) {
	if(typeof fn === 'object') {
		return function(node, content) {
			// NOTE: one function only right now
			var macro = mould.split(content, ':');
			fn[macro[0]].apply(null, concat(node, macro[1]));
		};
	} else {
		return function(node, content) {
			fn.apply(null, concat(node, content));

		};
	}
}

/**
 * Concat arguments.
 * 
 * @param  {Object} node 
 * @param  {String} content 
 * @return {Array}
 * @api private
 */

function concat(node, content) {
	return [node].concat(mould.split(content, ','));
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