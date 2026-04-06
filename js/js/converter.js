/**
 http://nepalitankan.blogspot.com/2013/12/preeti-ttf-to-unicode.html
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

const DEVA_TO_WESTERN = [
	["०", "0"],
	["१", "1"],
	["२", "2"],
	["३", "3"],
	["४", "4"],
	["५", "5"],
	["६", "6"],
	["७", "7"],
	["८", "8"],
	["९", "9"],
]

const DEVA_TO_NEWA = {
	"अ": "𑐀",
	"आ": "𑐁",
	"इ": "𑐂",
	"ई": "𑐃",
	"उ": "𑐄",
	"ऊ": "𑐅",
	"ऋ": "𑐆",
	"ॠ": "𑐇",
	"ऌ": "𑐈",
	"ॡ": "𑐉",
	"ए": "𑐊",
	"ऐ": "𑐋",
	"ओ": "𑐌",
	"औ": "𑐍",
	"क": "𑐎",
	"ख": "𑐏",
	"ग": "𑐐",
	"घ": "𑐑",
	"ङ": "𑐒",
	"च": "𑐔",
	"छ": "𑐕",
	"ज": "𑐖",
	"झ": "𑐗",
	"ञ": "𑐘",
	"ट": "𑐚",
	"ठ": "𑐛",
	"ड": "𑐜",
	"ढ": "𑐝",
	"ण": "𑐞",
	"त": "𑐟",
	"थ": "𑐠",
	"द": "𑐡",
	"ध": "𑐢",
	"न": "𑐣",
	"प": "𑐥",
	"फ": "𑐦",
	"ब": "𑐧",
	"भ": "𑐨",
	"म": "𑐩",
	"य": "𑐫",
	"र": "𑐬",
	"ऱ": "𑐬",
	"ल": "𑐮",
	"व": "𑐰",
	"श": "𑐱",
	"ष": "𑐲",
	"स": "𑐳",
	"ह": "𑐴",
	"०": "𑑐",
	"१": "𑑑",
	"२": "𑑒",
	"३": "𑑓",
	"४": "𑑔",
	"५": "𑑕",
	"६": "𑑖",
	"७": "𑑗",
	"८": "𑑘",
	"९": "𑑙",
	"॰": "𑑏",
	"ॐ": "𑑉",
	"।": "𑑋",
	"॥": "𑑌",
	",": "𑑍",
	"ा": "𑐵",
	"ि": "𑐶",
	"ी": "𑐷",
	"ु": "𑐸",
	"ू": "𑐹",
	"ृ": "𑐺",
	"ॄ": "𑐻",
	"ॢ": "𑐼",
	"ॣ": "𑐽",
	"े": "𑐾",
	"ै": "𑐿",
	"ो": "𑑀",
	"ौ": "𑑁",
	"्": "𑑂",
	"ँ": "𑑃",
	"ं": "𑑄",
	"ः": "𑑅",
	"़": "𑑆",
	"ऽ": "𑑇",
	"꣼": "𑑊",
	"꣹": "𑑎",
	"꣺": "𑑝"
}

_build_regex = function (rule_array) {
	if (rule_array instanceof Array)
		rule_array.forEach((r) => {
			r[0] = new RegExp(r[0], 'g')
			// r[1] = r[1].replace(/\\\\/g, '$')
		})
}
_fix_rules = function (all_rules) {
	for (const [k, v] of Object.entries(all_rules)) {
		_build_regex(v['post-rules'])
		_build_regex(v['pre-rules'])
	}
}
word_convert = function (word, rule, script, numeral) {
	if (word.length == 0 || /\s/.test(word[0]))
		return word

	const pre_rules = rule['pre-rules']
	const char_map = rule['char-map']
	const post_rules = rule['post-rules']

	pre_rules.forEach((rule) => {
		word = word.replace(rule[0], rule[1])
	})

	if (char_map) {
		word = [...word].map(x => (x in char_map) ? char_map[x] : x).join('')
	}

	post_rules.forEach(rule =>
		word = word.replace(rule[0], rule[1])
	)

	if (numeral === 'western') {
		DEVA_TO_WESTERN.forEach(rule =>
			word = word.replaceAll(rule[0], rule[1])
		)
	}

	if (script === 'prachalit') {
		word = [...word].map(x => (x in DEVA_TO_NEWA) ? DEVA_TO_NEWA[x] : x).join('')
	}

	return word
}
convert = function (text, rule, script, numeral) {
	return text.split(/([\r\n]+)/g).map(line => {
		if (line.length == 0 || line[0] == '\n' || line[0] == '\r') {
			return line
		}
		return line.split(/(\s+)/g).map(word => word_convert(word, rule, script, numeral)).join('')
	}).join('')
}
