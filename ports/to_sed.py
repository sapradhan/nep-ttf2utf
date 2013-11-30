'''
Created on Nov 29, 2013

@author: sapradhan
'''
import os
import yaml

YAML_PATH = '../rules/'
SED_PATH = '../sed/'

def port_sed():
    for name in os.listdir(YAML_PATH):
        with open(YAML_PATH + name, encoding='utf-8') as infile, open(SED_PATH + name.replace('yaml', 'sed'), mode='w', encoding='utf-8') as sed_file:
            rule = yaml.load(infile)
            sed_file.write('#pre-rules\n')
            for r in rule['pre-rules'] :
                sed_file.write('s/%s/%s/g\n' % (r[0], r[1]))
            sed_file.write('\n#char mapping\n')
            for k, v in rule['char-map'].items():
                sed_file.write('s/%s/%s/g\n' % (k, v))
            sed_file.write('\n#post-rules\n')
            for r in rule['post-rules'] :
                sed_file.write('s/%s/%s/g\n' % (r[0], r[1]))
        
        
port_sed()
