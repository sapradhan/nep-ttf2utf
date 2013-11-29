'''
Created on Nov 29, 2013

@author: sapradhan
'''
import os
import yaml

YAML_PATH = 'rules/'

def load_rules():
    all_rules = {}
    
    for name in os.listdir(YAML_PATH):
        with open(YAML_PATH + name, encoding='utf-8') as infile:
            rule = yaml.load(infile)
            all_rules[rule['name'].lower()] = rule
    
    return all_rules