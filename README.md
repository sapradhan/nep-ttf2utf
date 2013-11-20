nep-ttf2utf
===========

converts text typed in ttf to unicode. port of 2utf8 in python. 

supports multiple ttf fonts. Currenltly supported fonts are Preeti and PCS Nepali, adding support for new fonts is easy as well.


**Requires Python 3** 
I could not get unicode regex to work with Python 2.7, looking for workarounds

to run 
cd to `nep-ttf2utf`
run `python ttf2utf/main.py input.txt output.txt`
to select between PCS Nepali and Preeti use `-f` switch. Default is Preeti
run `python ttf2utf/main.py -h` for help