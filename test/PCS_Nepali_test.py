# coding: utf-8
'''
Created on Nov 16, 2013

@author: sapradhan
'''
from ttf2utf.rules import PCS_Nepali_rules
from ttf2utf.word_mapper import WordMapper
import unittest

class Test(unittest.TestCase):

    def setUp(self):
        self.vectors = [
                        ('g]kfn', 'नेपाल')
                        , ('g]kfnL', 'नेपाली')
                        , ('rGb', 'चन्द')
                        , ('lxdfn', 'हिमाल')
                        , ('/fli^<o', 'राष्ट्रिय')
                        , ('ljz]if)f', 'विशेषण')
                        , ('u)f]z', 'गणेश')
                        , ('kfl)f', 'पाणि')
                        , ('ug{', 'गर्न')
                        , ('ug{]', 'गर्ने')
                        , ('ug]{', 'गर्ने')
                        , ('lgdfrf]{s', 'निमार्चोक')
                        , ('rGb|f]bo', 'चन्द्रोदय')
                        , ('k|mfO{', 'फ्राई')
                        , ('cfkm\gf]', 'आफ्नो')
                        , ('cfk\mg}', 'आफ्नै')
                        , ('eQm', 'भक्त')
                        , ('em/gf', 'झरना')
                        , ('k|ltlqmof', 'प्रतिक्रिया')
                        , ('hfpm', 'जाऊ')
                        , ('hfp¤m', 'जाऊँ')
                        , ('e]mNg\'', 'झेल्नु')
                        , ('em]Ng\'', 'झेल्नु')
                        , ('emfs|L', 'झाक्री')
                        , (':ofk|m\'a]zL', 'स्याफ्रुबेशी')
                        , ('O{Zj/', 'ईश्वर')
                        , ('kf}jf', 'पौवा')
                        , ('If]qkf^L', 'क्षेत्रपाटी')
                        , ('cf]vtL', 'ओखती')
                        , ('P]gf', 'ऐना')
                        , ('hfcf}+', 'जाऔं')
                        ] 
        self.word_mapper = WordMapper(PCS_Nepali_rules.charmap,
                                       PCS_Nepali_rules.pre_rules, PCS_Nepali_rules.post_rules)

    def test(self):
        for vec in self.vectors:
            converted = self.word_mapper.convert(vec[0])
            print (converted)
            self.assertEqual(converted, vec[1],
                             'got {0} expected {1} for {2}'.format(converted, vec[1], vec[0]))


if __name__ == "__main__":
    # import sys;sys.argv = ['', 'Test.testName']
    unittest.main()
