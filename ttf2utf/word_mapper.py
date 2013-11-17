# coding: utf-8

'''
Created on Nov 14, 2013

@author: mzzzzb
'''
import re
class WordMapper(object):
    '''
    classdocs
    '''


    def __init__(self, charmap, pre_rules, post_rules):
        '''
        Constructor
        '''
        self.char_mapper = charmap
        self.pre_rules= pre_rules
        self.post_rules = post_rules
        
    def convert(self, word):
        pre = word
        # pre convert
        for rule in self.pre_rules:
            pre = re.sub(rule[0], rule[1], pre)
            
        temp_list = [] 
        for c in pre:
            temp_list.append(self.char_mapper.get(c, c))
            
        retword = ''.join(temp_list)
        
        #post convert rules
        for rule in self.post_rules:
            retword = re.sub(rule[0], rule[1], retword)
            
        return retword
        
        
        
        