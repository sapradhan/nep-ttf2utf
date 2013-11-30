'''
Created on Nov 29, 2013

@author: sapradhan
'''
import os
import yaml
import re


def load_rules(yaml_path):
    all_rules = {}
    
    for name in os.listdir(yaml_path):
        with open(yaml_path + name, encoding='utf-8') as infile:
            rule = yaml.load(infile)
            rule['post-rules'] = [(re.compile(r[0]), r[1]) for r in rule['post-rules']]
            rule['pre-rules'] = [(re.compile(r[0]), r[1]) for r in rule['pre-rules']]
            all_rules[rule['name'].lower().replace(' ','_')] = rule
    
    return all_rules