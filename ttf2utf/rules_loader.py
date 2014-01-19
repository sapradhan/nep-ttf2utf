'''
Created on Nov 29, 2013

@author: sapradhan
'''
import os
import yaml
import re

DEFAULTS_FILE = 'defaults.yaml'
def load_rules(yaml_path):
    default = load_defaults(yaml_path)

    all_rules = {}
    
    for name in os.listdir(yaml_path):
        if name == DEFAULTS_FILE: 
            continue
        with open(yaml_path + name, encoding='utf-8') as infile:
            rule = yaml.load(infile)
            # TODO allow each rule to override and add to default rules
            rule['post-rules'] = default['post-rules']
            rule['pre-rules'] = default['pre-rules']
            all_rules[rule['name'].lower().replace(' ', '_')] = rule
    
    return all_rules


def load_defaults(yaml_path):
    with open(yaml_path + DEFAULTS_FILE, encoding='utf-8') as infile:
        default = yaml.load(infile)
        default['post-rules'] = [(re.compile(r[0]), r[1]) for r in default['post-rules']]
        default['pre-rules'] = [(re.compile(r[0]), r[1]) for r in default['pre-rules']]
    
    return default
    
