'''
Created on Nov 29, 2013

@author: sapradhan
'''
import os
import yaml

YAML_PATH = 'rules/'
SED_PATH = 'sed/'
DEFAULTS_FILE = 'defaults.yaml'


def port_sed():
    with open(YAML_PATH + DEFAULTS_FILE, encoding='utf-8') as infile:
        default = yaml.safe_load(infile)
        default['post-rules'] = [(r[0], r[1]) for r in default['post-rules']]
        default['pre-rules'] = [(r[0], r[1]) for r in default['pre-rules']]
    
    for name in os.listdir(YAML_PATH):
        if name == DEFAULTS_FILE: 
                continue
        with open(YAML_PATH + name, encoding='utf-8') as infile, open(SED_PATH + name.replace('yaml', 'sed'), mode='w', encoding='utf-8') as sed_file:
            rule = yaml.safe_load(infile)
            print (rule.get('name'), rule.get('v'))
            sed_file.write('# %s, v%s\n' % (rule.get('name'), rule.get('v')))

            sed_file.write('#pre-rules\n')
            for r in default['pre-rules'] :
                sed_file.write('s/%s/%s/g\n' % (r[0], r[1]))
            sed_file.write('\n#char mapping\n')
            for k, v in rule.get('char-map').items():
                sed_file.write('s/%s/%s/g\n' % (k, v))
            sed_file.write('\n#post-rules\n')
            for r in default['post-rules'] :
                sed_file.write('s/%s/%s/g\n' % (r[0], r[1]))
        
        
port_sed()
