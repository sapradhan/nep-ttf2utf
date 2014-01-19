'''
Created on Jan 19, 2014

@author: sapradhan
'''
from ttf2utf import main
import os
import subprocess
import unittest
import difflib

class Test(unittest.TestCase):

    def setUp(self):
        pass


    def tearDown(self):
        pass


    def testBlock(self):
        input_file = 'test/preeti_block_input.txt' 
        expected_file = 'test/preeti_block_exp.txt' 
        output_file = 'test/preeti_block_out.txt' 
        
        cmd = "python3 ttf2utf/main.py --font preeti %s %s" % (input_file, output_file)
        self.assertEqual(0, subprocess.call(['python3', 'ttf2utf/main.py', '--font', 'preeti', input_file, output_file]))
        
        s = difflib.SequenceMatcher(None, open(expected_file).readlines(), open(output_file).readlines())
        self.assertEqual(s.ratio(), 1.0)
        
#         main.main([input_file, output_file, '-f', 'preeti', '-v'])
        


if __name__ == "__main__":
    # import sys;sys.argv = ['', 'Test.testBlock']
    unittest.main()
