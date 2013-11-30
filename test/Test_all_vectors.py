'''
Created on Nov 30, 2013

@author: sapradhan
'''
import unittest
from ttf2utf import rules_loader, converter
import glob
import os


class Test_all_vectors(unittest.TestCase):

    def __init__(self, methodName='runTest'):
        unittest.TestCase.__init__(self, methodName=methodName)
        YAML_PATH = 'rules/'
        self.all_rules = rules_loader.load_rules(YAML_PATH)
        

    def load_vectors(self, vector_file):
        vectors = []
        with open(vector_file, encoding='utf-8') as in_file:
            for line in in_file:
                vector = line.split('\t')
                vectors.append((vector[0], vector[1].rstrip('\r\n')))
 
    def setUp(self):
        pass
        
    def tearDown(self):
        pass

    def test(self):
        for vfilename in glob.glob('test/vectors/*.vector'):
            print ('-------------------\n%s'%(vfilename))
            rule = self.all_rules[os.path.splitext(os.path.basename(vfilename))[0]]
            with open(vfilename, encoding='utf-8') as v_file:
                for line in v_file:
                    vec = line.split('\t')
                    vec[1] = vec[1].rstrip('\r\n')
                    converted = converter.word_convert(vec[0], rule)
                    print (converted)
                    self.assertEqual(converted, vec[1],
                             'got {0} expected {1} for {2} in {3}'.format(converted, vec[1], vec[0], vfilename))



if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.testName']
    unittest.main()