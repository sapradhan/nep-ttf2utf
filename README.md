nep-ttf2utf
===========

converts text typed in using ttf fonts to unicode. port of 2utf8 in python and JS. 

supports multiple ttf fonts. Currenltly supported fonts are Preeti and PCS Nepali, adding support for new fonts is easy as well.


**Requires Python 3** 
I could not get unicode regex to work with Python 2.7, looking for workarounds

and **PyYAML**. It is a small download from [PyYAML page](http://pyyaml.org/wiki/PyYAML) 

Summary of instructions to install PyYAML
- Download distribution above link. I used version 3.10
- Extract and cd to the directory. 
- run `python setup.py install`
- to verify try running `import yaml` in python REPL.

to run 
======
- cd to `nep-ttf2utf`
- run `python ttf2utf/main.py input.txt output.txt`
- to select between PCS Nepali and Preeti use `-f` switch. Default is Preeti. `python ttf2utf/main.py -f pcs_nepali input.txt output.txt`
- run `python ttf2utf/main.py -h` for help


Writing Rules
=============

All the conversion rules are located in rules folder in YAML files, one for each supported font. YAML was chosen over JSON or XML because of its readability and also because it allowed comments in it
There are three sections in a YAML rule:
- pre-rules: These regexes are run **before** character mapping (currently empty for all implemented rules)
- char-map: This maps a single character in input to one or more Unicode character 
- post-rules: A series of regex replaces that is carried out **after** character mapping (contains bulk of the conversion rules)

JS implementation
=================

Ported to JS for ease of distribution, only a browser is needed which is ubiquitous. It uses same YAML rules as the Python version. If YAML is updated one needs to run `ports\to_js.py` to update `\js\all_rules.js` which basically converts the YAML to JSON.

sed scripts
===========

YAML rules can also be used to generate `sed` scripts. Simply run `ports/to_sed.py` to generate the sed scriptes to `sed` directory  