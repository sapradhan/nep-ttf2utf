/*rule structure {	'pre-rules':[[/regex/ , 'replacement'] ...], 
					'char-map':{'x': 'yy', ...}, 
					'post-rules':[] }
*/

var rules = {} // {'font' : rule, ... } 

_build_regex = function(rule_array) {
	var ret = []
	if (rule_array)
		jQuery.each(rule_array, 
			function(r){
				rule = []
				jQuery.each(r, function(s, rep) { 
					rule.push(new RegExp(s))
					rule.push(rep)
				})
				ret.push(rules)
			})
	return ret
}

_load_rules = function(name, file) {
	$.ajax ({url: file, success: function (data, textStatus, jqXHR) {
		var yRule = jsyaml.load(data)
		var rules = {'pre-rules':[], 'post-rules':[], 'char-map':{}}
		rules['char-map'] = yRule['char-map']
		rules['pre-rules'] = _build_regex(yRule['pre-rules'])
		rules['post-rules'] = _build_regex(yRule['post-rules'])
	}})
	.fail(function () { alert('rule '+ name+' at '+file+' not found ') }) 
}

word_convert = function(word) { 
	
}