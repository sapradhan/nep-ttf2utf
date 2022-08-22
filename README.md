nep-ttf2utf
===========

converts text typed in using ttf fonts to unicode. port of [2utf8](https://github.com/foss-np/2utf8) in **python** and **JS**. All implementations use same conversion rules. 

### [Online version](https://sapradhan.github.io/nep-ttf2utf/)

### Supports multiple ttf fonts. 
Currently supported fonts are 

- Kantipur
- Preeti 
- PCS Nepali
- FONTASY_HIMALI_TT
- Sagarmatha

adding support for new fonts is fairly easy as well.

## JS impl

Ported to JS for ease of distribution. 

**Just open `js/converter.html` in any recent browser. Try it out [here](https://sapradhan.github.io/nep-ttf2utf/)**


It uses same YAML rules as the Python version. If YAML is updated one needs to run `ports/to_js.py` to update `js/all_rules.js` which basically converts the YAML to JSON.

## Python impl
**Requires**
**Python 3**. 
I could not get unicode regex to work with Python 2.7.

and **PyYAML**. `pip install PyYAML` or Download from [PyYAML page](http://pyyaml.org/wiki/PyYAML) 

### to run 

- cd to `nep-ttf2utf`
- run `python ttf2utf/main.py input.txt output.txt`
- to select between PCS Nepali and Preeti use `-f` switch. Default is Preeti. `python ttf2utf/main.py -f pcs_nepali input.txt output.txt`
- run `python ttf2utf/main.py -h` for help

### to run tests
- run `python -m test.Test_all_vectors`


## sed scripts

YAML rules can also be used to generate sed scripts. Run `ports/to_sed.py` to generate the sed scriptes to `sed/` directory. Done just because `2utf8` was implemented using bash and sed.

## Writing Rules

All the conversion rules are located in rules folder in YAML files, one for each supported font. 

*YAML was chosen over JSON or XML because of its readability and support for comments*

There are three sections in a YAML rule:

- **char-map**: This maps a single character in input to one or more Unicode character. *In font specific YAML*
- **pre-rules**: These regexes are run **before** character mapping (currently empty for all implemented rules) *In default.yaml*
- **post-rules**: A series of regex replaces that is carried out **after** character mapping (contains bulk of the conversion rules) *In default.yaml*

Few hints for adding support for a new font

- `map/` contains `template.odt` which should be helpful to generate character mappings. Just change the font to figure out char mappings.
- `test/vector` contains test vectors. make sure to add/update when making changes. First update `vector.ods` and export required sheets tab separated CSV to generate `.vector` files. This ensures everything is properly documented.
