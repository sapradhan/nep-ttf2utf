# coding: utf-8
'''
Created on Nov 14, 2013

@author: sapradhan
'''
import re

pre_rules = []
post_rules = [ 
             (re.compile('्ा'), '')  # 
             , (re.compile('(त्र|त्त)([^उभप]+?)m'), '\\1m\\2')  # shift m just after त्र त्त 
             , (re.compile('त्रm'), 'क्र')
             , (re.compile('त्तm'), 'क्त')
             , (re.compile('([^उभप]+?)m'), 'm\\1')  # shift m just after उ भ प separated from त्र त्त to avoid false match for फ्र 
             , (re.compile('उm'), 'ऊ')
             , (re.compile('भm'), 'झ')
             , (re.compile('पm'), 'फ')
             , (re.compile('इ\{'), 'ई')
             , (re.compile('ि((.्)*[^्])'), '\\1ि')  # shift ि behind next full consonant
             , (re.compile('(.[ािीुूृेैोौंःँ]*)\{'), 'र्\\1')  # shift reph infront of preceding consonant skipping all vowels 
             , (re.compile('([ंँ])([ािीुूृेैोौः]*)'), '\\2\\1')  # shift all anuswar and chandrabindu after vowels  
             , (re.compile('अाे'), 'ओ')  
             , (re.compile('अाै'), 'औ')  
             , (re.compile('अा'), 'आ')
             , (re.compile('एे'), 'ऐ')  
             , (re.compile('ाे'), 'ो')  
             , (re.compile('ाै'), 'ौ')  
]
charmap = {    
        '~': 'ङ',
        '!':'ज्ञ',
        '@':'द्द',
        '#':'घ',
        '$':'द्ध',
        '%':'छ',
        '^':'ट',
        '&':'ठ',
        '*':'ड',
        '(':'ढ',
        ')':'ण्',
        '_':')',
        '+':'ं',
        
        '`':'ञ्',
        '1':'१',
        '2':'२',
        '3':'३',
        '4':'४',
        '5':'५',
        '6':'६',
        '7':'७',
        '8':'८',
        '9':'९',
        '0':'०',
        '-':'(',
        '=':'.',


        'Q':'त्त',
        'W':'ध्',
        'E':'भ्',
        'R':'च्',
        'T':'त्',
        'Y':'थ्',
        'U':'ग्',
        'I':'क्ष्',
        'O':'इ',
        'P':'ए',
        #    '{':'',
        '}':'ै',
        '|':'्र',

        'q':'त्र',
        'w':'ध',
        'e':'भ',
        'r':'च',
        't':'त',
        'y':'थ',
        'u':'ग',
        'i':'ष्',
        'o':'य',
        'p':'उ',
        '[':'ृ',
        ']':'े',
        '\\':'्',

        
        'A':'ब्',
        'S':'क्',
        'D':'म्',
        'F':'ा',
        'G':'न्',
        'H':'ज्',
        'J':'व्',
        'K':'प्',
        'L':'ी',
        ':':'स्',
        '"':'ू',

        'a':'ब',
        's':'क',
        'd':'म',
        'f':'ा',
        'g':'न',
        'h':'ज',
        'j':'व',
        'k':'प',
        'l':'ि',
        ';':'स',
        '\'':'ु',

        
        'Z':'श्',
        'X':'ह्',
        'C':'र्‍',
        'V':'ख्',
        'B':'द्य',
        'N':'ल्',
        'M':'ः',
        '<':'्र',
        '>':'श्र',
        '?':'रू',

        'z':'श',
        'x':'ह',
        'c':'अ',
        'v':'ख',
        'b':'द',
        'n':'ल',
        # 'm':'',
        ',':',',
        '.':'।',
        '/':'र',

        
        '¡' : 'ज्ञ्',  # 161
        '¢' : 'द्घ',  # 162
        '£' : 'घ्',  # 163
        '¤' : 'ँ',  # 164
        '¥' : 'ऋ',  # 165
        # '¦' : '',   #166
        '§' : 'ट्ट',  # 167
        # '¨' : '',   #168
        '©' : '?',  # 169

        'ª' : 'ञ',  # 170
        # '«' : '',   #171
        # '¬' : '',   #172
        # '­' : '',   #173
        '®' : '+',  # 174
        # '¯' : '',   #175
        '°' : 'ङ्क',  # 176
        # '±' : '',   #177
        # '²' : '',   #178
        # '³' : '',   #179

        '´' : 'झ',  # 180
        # 'µ' : '',   #181
        # '¶' : '',   #182
        '·' : 'ट्ठ',  # 183
        # '¸' : '',   #184
        # '¹' : '',   #185
        # 'º' : '',   #186
        # '»' : '',   #187
        # '¼' : '',   #188
        # '½' : '',   #189

        # '¾' : '',   #190
        '¿' : 'रु',  # 191
        # 'À' : '',   #192
        # 'Á' : '',   #193
        # 'Â' : '',   #194
        # 'Ã' : '',   #195
        # 'Ä' : '',   #196
        # 'Å' : '',   #197
        'Æ' : '”',  # 198
        # 'Ç' : '',   #199

        # 'È' : '',   #200
        # 'É' : '',   #201
        # 'Ê' : '',   #202
        # 'Ë' : '',   #203
        # 'Ì' : '',   #204
        # 'Í' : '',   #205
        # 'Î' : '',   #206
        # 'Ï' : '',   #207
        # 'Ð' : '',   #208
        # 'Ñ' : '',   #209

        'Ò' : 'ू',  # 210
        # 'Ó' : '',   #211
        'Ô' : 'क्ष',  # 212
        # 'Õ' : '',   #213
        # 'Ö' : '',   #214
        # '×' : '',   #215
        'Ø' : '्य',  # 216
        'Ù' : 'ह',  # 217
        # 'Ú' : '',   #218
        # 'Û' : '',   #219

        # 'Ü' : '',   #220
        # 'Ý' : '',   #221
        # 'Þ' : '',   #222
        'ß' : 'द्म',  # 223
        # 'à' : '',   #224
        # 'á' : '',   #225
        # 'â' : '',   #226
        # 'ã' : '',   #227
        # 'ä' : '',   #228
        'å' : 'द्व',  # 229

        'æ' : '“',  # 230
        'ç' : 'ॐ',  # 231
        # 'è' : '',   #232
        'é' : 'ङ्ग',  # 233
        # 'ê' : '',   #234
        # 'ë' : '',   #235
        # 'ì' : '',   #236
        'í' : 'ष',  # 237
        # 'î' : '',   #238
        # 'ï' : '',   #239

        # 'ð' : '',   #240
        'ñ' : 'ङ',  # 241
        # 'ò' : '',   #242
        # 'ó' : '',   #243
        # 'ô' : '',   #244
        # 'õ' : '',   #245
        # 'ö' : '',   #246
        '÷' : '/',  # 247
        'ø' : 'य्',  # 248
        # 'ù' : '',   #249

        'ú' : 'ू',  # 250
        # 'û' : '',   #251
        # 'ü' : '',   #252
        # 'ý' : '',   #253
        # 'þ' : '',   #254
        # 'ÿ' : '',   #255
}        

