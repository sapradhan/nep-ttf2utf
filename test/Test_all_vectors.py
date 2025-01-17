'''
Created on Nov 30, 2013

@author: sapradhan
'''
import unittest
from ttf2utf import rules_loader, converter
import glob
import os
import csv


class Test_all_vectors(unittest.TestCase):

    def __init__(self, methodName='runTest'):
        unittest.TestCase.__init__(self, methodName=methodName)
        YAML_PATH = 'rules/'
        self.all_rules = rules_loader.load_rules(YAML_PATH)
        

    def load_vectors(self, vector_file):
        vectors = []
        with open(vector_file, encoding='utf-8') as in_file:
            tsv_reader = csv.reader(in_file, delimiter='\t')
            for vector in tsv_reader:
                vectors.append((vector[0], vector[1]))
 
    def setUp(self):
        pass
        
    def tearDown(self):
        pass

    def test(self):
        fail = []
        for vfilename in glob.glob('test/vectors/*.tsv'):
            print ('-------------------\n%s'%(vfilename))
            rule = self.all_rules[os.path.splitext(os.path.basename(vfilename))[0].lower()]
            with open(vfilename, encoding='utf-8') as v_file:
                tsv_reader = csv.reader(v_file, delimiter='\t')
                for vec in tsv_reader:
                    converted = converter.word_convert(vec[0], rule)
                    print (converted)
                    try:
                        self.assertEqual(converted, vec[1],
                             'got {0} expected {1} for {2} in {3}'.format(converted, vec[1], vec[0], vfilename))
                    except AssertionError as e:
                        fail.append(e)
        self.assertEqual(len(fail), 0, fail) 



if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.testName']
    unittest.main()