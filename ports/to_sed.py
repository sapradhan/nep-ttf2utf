'''
Created on Nov 29, 2013

@author: sapradhan
'''
import os
import yaml

YAML_PATH = '../rules/'
SED_PATH = '../sed/'

def port_sed():
    all_rules = {}
    for name in os.listdir(YAML_PATH):
        with open(YAML_PATH + name, encoding='utf-8') as infile, open(SED_PATH + name, mode='w', encoding='utf-8') as sed_file:
            rule = yaml.load(infile)
            for 
            sed_file.writeln()
            rule['post-rules'] = [(r[0], r[1].replace('\\', '$')) for r in rule['post-rules']]
            rule['pre-rules'] = [(r[0], r[1].replace('\\', '$')) for r in ([] if rule['pre-rules'] is None else rule['pre-rules'])]
            all_rules[rule['name'].lower()] = rule
        
        
port_sed()
