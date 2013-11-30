'''
Created on Nov 30, 2013

@author: sapradhan
'''

import re

def word_convert(word, rule):
    pre = word
    # pre convert
    for rule in rule['pre-rules']:
        pre = re.sub(rule[0], rule[1], pre)
        
    char_map = rule['char-map']
    retword = ''.join([char_map.get(c, c) for c in pre])    
    
    #post convert rules
    for rule in rule['post-rules']:
        retword = re.sub(rule[0], rule[1], retword)
        
    return retword
    
def convert(rule, in_file, out_file):
    spliter = re.compile(r'(\s+|\S+)')
            
    for x in in_file:
        for y in re.findall(spliter, x):
            out_file.write(word_convert(y, rule))        