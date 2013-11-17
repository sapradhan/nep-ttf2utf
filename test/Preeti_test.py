'''
Created on Nov 17, 2013

@author: sapradhan
'''
import unittest
from ttf2utf.rules import Preeti_rules
from ttf2utf.word_mapper import WordMapper


class Test(unittest.TestCase):


    def setUp(self):
        self.vectors = []
        self.word_mapper = WordMapper(Preeti_rules)
        with open('test/vectors/preeti.vector', encoding='utf-8') as in_file:
            for line in in_file:
                vector = line.split('\t')
                self.vectors.append((vector[0], vector[1].rstrip('\r\n')))
        


    def tearDown(self):
        pass


    def test(self):
        for vec in self.vectors:
            converted = self.word_mapper.convert(vec[0])
            print (converted)
            self.assertEqual(converted, vec[1],
                             'got {0} expected {1} for {2}'.format(converted, vec[1], vec[0]))


if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.testName']
    unittest.main()