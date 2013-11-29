/*rule structure {	'pre-rules':[[/regex/ , 'replacement'] ...],
 'char-map':{'x': 'yy', ...},
 'post-rules':[[/regex/ , 'replacement'] ...] }
 */

var rules = {}// {'font' : rule, ... }

_build_regex = function(rule_array) {
	if (jQuery.isArray(rule_array))
		jQuery.each(rule_array, function(i, r) {
			r[0] = new RegExp(r[0])
			r[1] = r[1].replace(/\\\\/g, '$')
		})
}
_fix_rules = function(all_rules) {

	jQuery.each(all_rules, function(k, v) {
		jQuery.each(all_rules, function(k, v) {
			_build_regex(v['post-rules'])
			_build_regex(v['pre-rules'])
		})
	})
}
word_convert = function(word, rule) {
	var pre_rules = rule['pre-rules']
	var char_map = rule['char-map']
	var post_rules = rule['post-rules']

	if (jQuery.isArray(pre_rules))
		jQuery.each(pre_rules, function(i, rule) {
			word = word.replace(rule[0], rule[1])
		})
	word = jQuery.map(word.split(''), function(x) {
		return ( x in char_map) ? char_map[x] : x
	}).join('')

	if (jQuery.isArray(post_rules))
		jQuery.each(post_rules, function(i, rule) {
			word = word.replace(rule[0], rule[1])
		})

	return word
}