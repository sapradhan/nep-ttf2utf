'''
Created on Nov 29, 2013

@author: sapradhan
'''

import json
import yaml
import os

    
YAML_PATH = '../rules/'
JSON_PATH = '../js/js/all_rules.js'
def port_JS():
    all_rules = {}
    with open(JSON_PATH, mode='w', encoding='utf-8') as json_file:
        json_file.write('var all_rules = ')
        for name in os.listdir(YAML_PATH):
            with open(YAML_PATH + name, encoding='utf-8') as infile:
                rule = yaml.load(infile)
                rule['post-rules'] = [(r[0], r[1].replace('\\', '$')) for r in rule['post-rules']]
                rule['pre-rules'] = [(r[0], r[1].replace('\\', '$')) for r in rule['pre-rules']]
                all_rules[rule['name'].lower()] = rule
        
        json.dump(all_rules, json_file, ensure_ascii=False, indent=2)
    
        
port_JS()
