'''
Created on Nov 29, 2013

@author: sapradhan
'''

import json
import yaml
import os

    
YAML_PATH = '../rules/'
JSON_PATH = '../js/js/all_rules.js'
DEFAULTS_FILE = 'defaults.yaml'

def port_JS():
    all_rules = {}
    defaults = load_defaults()
    with open(JSON_PATH, mode='w', encoding='utf-8') as json_file:
        json_file.write('var all_rules = ')
        for name in os.listdir(YAML_PATH):
            if name == DEFAULTS_FILE: 
                continue
            with open(YAML_PATH + name, encoding='utf-8') as infile:
                rule = yaml.load(infile)
                rule['post-rules'] = defaults['post-rules']
                rule['pre-rules'] = defaults['pre-rules']
                all_rules[rule['name'].lower()] = rule
        
        json.dump(all_rules, json_file, ensure_ascii=False)


def load_defaults():
    with open(YAML_PATH + DEFAULTS_FILE, encoding='utf-8') as infile:
        default = yaml.load(infile)
        default['post-rules'] = [(r[0], r[1].replace('\\', '$')) for r in default['post-rules']]
        default['pre-rules'] = [(r[0], r[1].replace('\\', '$')) for r in default['pre-rules']]
    
    return default    
        
port_JS()
