/**
 Copyright 2013 sapradhan 
 https://github.com/sapradhan/nep-ttf2utf

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/*rule structure {	'pre-rules':[[/regex/ , 'replacement'] ...],
 'char-map':{'x': 'yy', ...},
 'post-rules':[[/regex/ , 'replacement'] ...] }
 */

var rules = {}// {'font' : rule, ... }

_build_regex = function(rule_array) {
	if (jQuery.isArray(rule_array))
		jQuery.each(rule_array, function(i, r) {
			r[0] = new RegExp(r[0], 'g')
			// r[1] = r[1].replace(/\\\\/g, '$')
		})
}
_fix_rules = function(all_rules) {

	jQuery.each(all_rules, function(k, v) {
		_build_regex(v['post-rules'])
		_build_regex(v['pre-rules'])
	})
}
populate_options = function(eSelect) {
	jQuery.each(all_rules, function(k, v) {
		jQuery(eSelect).append(jQuery('<option>', {
			value : k,
			text : v['name']
		}))
	})
}
word_convert = function(word, rule) {
	if (word.length == 0)
		return word
	else if (/\s/.test(word[0]))
		return word

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
convert = function(text, rule) {
	return jQuery.map(text.split(/\n/), function(line) {
		return jQuery.map(line.split(/(\s+|\S+)/), function(word) {
			return word_convert(word, rule)
		}).join('')
	}).join('\n')
}
