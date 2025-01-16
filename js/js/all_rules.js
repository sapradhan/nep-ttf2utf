var all_rules = {"pcs nepali": {"name": "PCS Nepali", "v": "1.1.0", "char-map": {"~": "ङ", "!": "ज्ञ", "@": "द्द", "#": "घ", "$": "द्ध", "%": "छ", "^": "ट", "&": "ठ", "*": "ड", "(": "ढ", ")": "ण्", "_": ")", "+": "ं", "`": "ञ्", "1": "१", "2": "२", "3": "३", "4": "४", "5": "५", "6": "६", "7": "७", "8": "८", "9": "९", "0": "०", "-": "(", "=": ".", "Q": "त्त", "W": "ध्", "E": "भ्", "R": "च्", "T": "त्", "Y": "थ्", "U": "ग्", "I": "क्ष्", "O": "इ", "P": "ए", "}": "ै", "|": "्र", "q": "त्र", "w": "ध", "e": "भ", "r": "च", "t": "त", "y": "थ", "u": "ग", "i": "ष्", "o": "य", "p": "उ", "[": "ृ", "]": "े", "\\": "्", "A": "ब्", "S": "क्", "D": "म्", "F": "ा", "G": "न्", "H": "ज्", "J": "व्", "K": "प्", "L": "ी", ":": "स्", "\"": "ू", "a": "ब", "s": "क", "d": "म", "f": "ा", "g": "न", "h": "ज", "j": "व", "k": "प", "l": "ि", ";": "स", "'": "ु", "Z": "श्", "X": "ह्", "C": "ऱ्", "V": "ख्", "B": "द्य", "N": "ल्", "M": "ः", "<": "्र", ">": "श्र", "?": "रू", "z": "श", "x": "ह", "c": "अ", "v": "ख", "b": "द", "n": "ल", ",": ",", ".": "।", "/": "र", "¡": "ज्ञ्", "¢": "द्घ", "£": "घ्", "¤": "ँ", "¥": "ऋ", "§": "ट्ट", "©": "?", "ª": "ञ", "®": "+", "°": "ङ्क", "´": "झ", "·": "ट्ठ", "¿": "रु", "Æ": "”", "Ò": "ू", "Ô": "क्ष", "Ø": "्य", "Ù": "ह", "ß": "द्म", "å": "द्व", "æ": "“", "ç": "ॐ", "é": "ङ्ग", "í": "ष", "ñ": "ङ", "÷": "/", "ø": "य्", "ú": "ू"}, "post-rules": [["्ा", ""], ["(त्र|त्त)([^उभप]+?)m", "$1m$2"], ["त्रm", "क्र"], ["त्तm", "क्त"], ["([^उभप]+?)m", "m$1"], ["उm", "ऊ"], ["भm", "झ"], ["पm", "फ"], ["इ{", "ई"], ["ि((.्)*[^्])", "$1ि"], ["(.[ािीुूृेैोौंःँ]*?){", "{$1"], ["((.्)*){", "{$1"], ["{", "र्"], ["([ाीुूृेैोौंःँ]+?)(्(.्)*[^्])", "$2$1"], ["्([ाीुूृेैोौंःँ]+?)((.्)*[^्])", "्$2$1"], ["([ंँ])([ािीुूृेैोौः]*)", "$2$1"], ["ँँ", "ँ"], ["ंं", "ं"], ["ेे", "े"], ["ैै", "ै"], ["ुु", "ु"], ["ूू", "ू"], ["^ः", ":"], ["टृ", "ट्ट"], ["ेा", "ाे"], ["ैा", "ाै"], ["अाे", "ओ"], ["अाै", "औ"], ["अा", "आ"], ["एे", "ऐ"], ["ाे", "ो"], ["ाै", "ौ"]], "pre-rules": []}, "fontasy himali tt": {"name": "FONTASY HIMALI TT", "v": "1.1.0", "char-map": {"~": "ञ", "!": "ज्ञ", "@": "द्द", "#": "घ", "$": "द्ध", "%": "छ", "^": "ट", "&": "ठ", "*": "ड", "(": "ढ", ")": "ण्", "_": ")", "+": "ं", "`": "ञ्", "1": "१", "2": "२", "3": "३", "4": "४", "5": "५", "6": "६", "7": "७", "8": "८", "9": "९", "0": "०", "-": "(", "=": ".", "Q": "त्त", "W": "ध्", "E": "भ्", "R": "च्", "T": "त्", "Y": "थ्", "U": "ग्", "I": "क्ष्", "O": "इ", "P": "ए", "}": "ै", "|": "्र", "q": "त्र", "w": "ध", "e": "भ", "r": "च", "t": "त", "y": "थ", "u": "ग", "i": "ष्", "o": "य", "p": "उ", "[": "ृ", "]": "े", "\\": "्", "A": "ब्", "S": "क्", "D": "म्", "F": "ा", "G": "न्", "H": "ज्", "J": "व्", "K": "प्", "L": "ी", ":": "स्", "\"": "ू", "a": "ब", "s": "क", "d": "म", "f": "ा", "g": "न", "h": "ज", "j": "व", "k": "प", "l": "ि", ";": "स", "'": "ु", "Z": "श्", "X": "हृ", "C": "ऋ", "V": "ख्", "B": "द्य", "N": "ल्", "M": "ः", "<": "?", ">": "श्र", "?": "रु", "z": "श", "x": "ह", "c": "अ", "v": "ख", "b": "द", "n": "ल", ",": ",", ".": "।", "/": "र", "¡": "ज्ञ्", "¢": "द्घ", "£": "घ्", "¤": "ँ", "¥": "ऱ्", "§": "ट्ट", "ª": "ङ", "«": "्र", "­": "(", "®": "+", "°": "ङ्क", "´": "झ", "¶": "ठ्ठ", "»": "", "¿": "रू", "Æ": "”", "Ñ": "ङ", "Ò": "ू", "Ô": "क्ष", "×": "×", "Ø": "्य", "Ù": "ह", "Ú": "ु", "ß": "द्म", "å": "द्व", "æ": "“", "ç": "ॐ", "é": "ङ्ग", "í": "ष", "÷": "/", "ø": "य्", "ú": "ू"}, "post-rules": [["्ा", ""], ["(त्र|त्त)([^उभप]+?)m", "$1m$2"], ["त्रm", "क्र"], ["त्तm", "क्त"], ["([^उभप]+?)m", "m$1"], ["उm", "ऊ"], ["भm", "झ"], ["पm", "फ"], ["इ{", "ई"], ["ि((.्)*[^्])", "$1ि"], ["(.[ािीुूृेैोौंःँ]*?){", "{$1"], ["((.्)*){", "{$1"], ["{", "र्"], ["([ाीुूृेैोौंःँ]+?)(्(.्)*[^्])", "$2$1"], ["्([ाीुूृेैोौंःँ]+?)((.्)*[^्])", "्$2$1"], ["([ंँ])([ािीुूृेैोौः]*)", "$2$1"], ["ँँ", "ँ"], ["ंं", "ं"], ["ेे", "े"], ["ैै", "ै"], ["ुु", "ु"], ["ूू", "ू"], ["^ः", ":"], ["टृ", "ट्ट"], ["ेा", "ाे"], ["ैा", "ाै"], ["अाे", "ओ"], ["अाै", "औ"], ["अा", "आ"], ["एे", "ऐ"], ["ाे", "ो"], ["ाै", "ौ"]], "pre-rules": []}, "kantipur": {"name": "Kantipur", "v": "1.1.0", "char-map": {"~": "ञ्", "!": "१", "@": "२", "#": "३", "$": "४", "%": "५", "^": "६", "&": "७", "*": "८", "(": "९", ")": "०", "_": ")", "+": "ं", "`": "ञ", "1": "ज्ञ", "2": "द्द", "3": "घ", "4": "द्ध", "5": "छ", "6": "ट", "7": "ठ", "8": "ड", "9": "ढ", "0": "ण्", "-": "(", "=": ".", "Q": "त्त", "W": "ध्", "E": "भ्", "R": "च्", "T": "त्", "Y": "थ्", "U": "ग्", "I": "क्ष्", "O": "इ", "P": "ए", "}": "ै", "|": "्र", "q": "त्र", "w": "ध", "e": "भ", "r": "च", "t": "त", "y": "थ", "u": "ग", "i": "ष्", "o": "य", "p": "उ", "[": "ृ", "]": "े", "\\": "्", "A": "ब्", "S": "क्", "D": "म्", "F": "ा", "G": "न्", "H": "ज्", "J": "व्", "K": "प्", "L": "ी", ":": "स्", "\"": "ू", "a": "ब", "s": "क", "d": "म", "f": "ा", "g": "न", "h": "ज", "j": "व", "k": "प", "l": "ि", ";": "स", "'": "ु", "Z": "श्", "X": "हृ", "C": "ऋ", "V": "ख्", "B": "द्य", "N": "ल्", "M": "ः", "<": "?", ">": "श्र", "?": "रु", "z": "श", "x": "ह", "c": "अ", "v": "ख", "b": "द", "n": "ल", ",": ",", ".": "।", "/": "र", "„": "ध्र", "…": "‘", "†": "!", "‰": "झ्", "‹": "ङ्ग", "Œ": "त्त्", "‘": "ॅ", "“": "ँ", "•": "ड्ड", "˜": "ऽ", "™": "र", "›": "ऽ", "œ": "त्र्", "¡": "ज्ञ्", "¢": "द्घ", "£": "घ्", "¤": "झ्", "¥": "ऱ्", "§": "ट्ट", "¨": "ङ्ग", "©": "र", "ª": "ङ", "«": "्र", "¬": "…", "­": "(", "®": "र", "¯": "¯", "°": "ङ्ढ", "±": "+", "´": "झ", "µ": "र", "¶": "ठ्ठ", "º": "फ्", "¿": "रू", "Â": "र", "Æ": "”", "È": "ष", "Ë": "ङ्ग", "Ì": "न्न", "Í": "ङ्क", "Î": "फ्", "Ï": "फ्", "Ò": "¨", "Ô": "क्ष", "Ø": "्य", "Ú": "’", "ß": "द्म", "å": "द्व", "æ": "“", "ç": "ॐ", "÷": "/", "ø": "य्"}, "post-rules": [["्ा", ""], ["(त्र|त्त)([^उभप]+?)m", "$1m$2"], ["त्रm", "क्र"], ["त्तm", "क्त"], ["([^उभप]+?)m", "m$1"], ["उm", "ऊ"], ["भm", "झ"], ["पm", "फ"], ["इ{", "ई"], ["ि((.्)*[^्])", "$1ि"], ["(.[ािीुूृेैोौंःँ]*?){", "{$1"], ["((.्)*){", "{$1"], ["{", "र्"], ["([ाीुूृेैोौंःँ]+?)(्(.्)*[^्])", "$2$1"], ["्([ाीुूृेैोौंःँ]+?)((.्)*[^्])", "्$2$1"], ["([ंँ])([ािीुूृेैोौः]*)", "$2$1"], ["ँँ", "ँ"], ["ंं", "ं"], ["ेे", "े"], ["ैै", "ै"], ["ुु", "ु"], ["ूू", "ू"], ["^ः", ":"], ["टृ", "ट्ट"], ["ेा", "ाे"], ["ैा", "ाै"], ["अाे", "ओ"], ["अाै", "औ"], ["अा", "आ"], ["एे", "ऐ"], ["ाे", "ो"], ["ाै", "ौ"]], "pre-rules": []}, "sagarmatha": {"name": "Sagarmatha", "v": "1.1.0", "char-map": {"~": "ञ्", "!": "१", "@": "२", "#": "३", "$": "४", "%": "५", "^": "६", "&": "७", "*": "८", "(": "९", ")": "०", "_": ")", "+": "ं", "`": "ञ", "1": "ज्ञ", "2": "द्द", "3": "घ", "4": "द्ध", "5": "छ", "6": "ट", "7": "ठ", "8": "ड", "9": "ढ", "0": "ण्", "-": "(", "=": ".", "Q": "त्त", "W": "ध्", "E": "भ्", "R": "च्", "T": "त्", "Y": "थ्", "U": "ग्", "I": "क्ष्", "O": "इ", "P": "ए", "}": "ै", "|": "्र", "q": "त्र", "w": "ध", "e": "भ", "r": "च", "t": "त", "y": "थ", "u": "ग", "i": "ष्", "o": "य", "p": "उ", "[": "ृ", "]": "े", "\\": "्", "A": "ब्", "S": "क्", "D": "म्", "F": "ँ", "G": "न्", "H": "ज्", "J": "व्", "K": "प्", "L": "ी", ":": "स्", "\"": "ू", "a": "ब", "s": "क", "d": "म", "f": "ा", "g": "न", "h": "ज", "j": "व", "k": "प", "l": "ि", ";": "स", "'": "ु", "Z": "श्", "X": "ह्", "C": "ऋ", "V": "ख्", "B": "द्य", "N": "ल्", "M": "ः", "<": "?", ">": "श्र", "?": "रु", "z": "श", "x": "ह", "c": "अ", "v": "ख", "b": "द", "n": "ल", ",": ",", ".": "।", "/": "र", "‚": ")", "ƒ": "द्र", "„": "्", "†": ";", "‡": "े", "ˆ": "ृ", "‰": "झ्", "Š": "र्", "‹": "ै", "Œ": "त्त्", "‘": "‘", "’": "’", "“": "ँ", "”": "”", "œ": "त्र्", "¡": "ज्ञ्", "¢": "द्घ", "£": "घ्", "¤": "!", "¥": "ऱ्", "§": "ट्ट", "ª": "ङ", "«": "्र", "¬": "ु", "­": "(", "®": "र", "°": "ङ्क", "±": "+", "´": "झ", "µ": "झ", "¶": "ठ्ठ", "·": "ङ्ग", "¸": "ड्ड", "¿": "रू", "Å": "फ", "Æ": "”", "Ç": "फ्", "È": "ष", "É": "स", "Ò": "ू", "Ô": "क्ष", "Ø": "्य", "Ù": "ह", "Ü": "%", "Þ": "ह्", "ß": "द्म", "å": "द्व", "æ": "“", "ç": "ॐ", "è": "द्भ", "÷": "/", "ø": "य्"}, "post-rules": [["्ा", ""], ["(त्र|त्त)([^उभप]+?)m", "$1m$2"], ["त्रm", "क्र"], ["त्तm", "क्त"], ["([^उभप]+?)m", "m$1"], ["उm", "ऊ"], ["भm", "झ"], ["पm", "फ"], ["इ{", "ई"], ["ि((.्)*[^्])", "$1ि"], ["(.[ािीुूृेैोौंःँ]*?){", "{$1"], ["((.्)*){", "{$1"], ["{", "र्"], ["([ाीुूृेैोौंःँ]+?)(्(.्)*[^्])", "$2$1"], ["्([ाीुूृेैोौंःँ]+?)((.्)*[^्])", "्$2$1"], ["([ंँ])([ािीुूृेैोौः]*)", "$2$1"], ["ँँ", "ँ"], ["ंं", "ं"], ["ेे", "े"], ["ैै", "ै"], ["ुु", "ु"], ["ूू", "ू"], ["^ः", ":"], ["टृ", "ट्ट"], ["ेा", "ाे"], ["ैा", "ाै"], ["अाे", "ओ"], ["अाै", "औ"], ["अा", "आ"], ["एे", "ऐ"], ["ाे", "ो"], ["ाै", "ौ"]], "pre-rules": []}, "preeti": {"name": "Preeti", "v": "1.1.0", "char-map": {"~": "ञ्", "!": "१", "@": "२", "#": "३", "$": "४", "%": "५", "^": "६", "&": "७", "*": "८", "(": "९", ")": "०", "_": ")", "+": "ं", "`": "ञ", "1": "ज्ञ", "2": "द्द", "3": "घ", "4": "द्ध", "5": "छ", "6": "ट", "7": "ठ", "8": "ड", "9": "ढ", "0": "ण्", "-": "(", "=": ".", "Q": "त्त", "W": "ध्", "E": "भ्", "R": "च्", "T": "त्", "Y": "थ्", "U": "ग्", "I": "क्ष्", "O": "इ", "P": "ए", "}": "ै", "|": "्र", "q": "त्र", "w": "ध", "e": "भ", "r": "च", "t": "त", "y": "थ", "u": "ग", "i": "ष्", "o": "य", "p": "उ", "[": "ृ", "]": "े", "\\": "्", "A": "ब्", "S": "क्", "D": "म्", "F": "ँ", "G": "न्", "H": "ज्", "J": "व्", "K": "प्", "L": "ी", ":": "स्", "\"": "ू", "a": "ब", "s": "क", "d": "म", "f": "ा", "g": "न", "h": "ज", "j": "व", "k": "प", "l": "ि", ";": "स", "'": "ु", "Z": "श्", "X": "ह्", "C": "ऋ", "V": "ख्", "B": "द्य", "N": "ल्", "M": "ः", "<": "?", ">": "श्र", "?": "रु", "z": "श", "x": "ह", "c": "अ", "v": "ख", "b": "द", "n": "ल", ",": ",", ".": "।", "/": "र", "„": "ध्र", "…": "‘", "ˆ": "फ्", "‰": "झ्", "‹": "ङ्घ", "‘": "ॅ", "•": "ड्ड", "˜": "ऽ", "›": "द्र", "¡": "ज्ञ्", "¢": "द्घ", "£": "घ्", "¤": "झ्", "¥": "ऱ्", "§": "ट्ट", "©": "र", "ª": "ङ", "«": "्र", "°": "ङ्ढ", "±": "+", "´": "झ", "¶": "ठ्ठ", "¿": "रू", "Å": "हृ", "Æ": "”", "Ë": "ङ्ग", "Ì": "न्न", "Í": "ङ्क", "Î": "ङ्ख", "Ò": "¨", "Ö": "=", "×": "×", "Ø": "्य", "Ù": ";", "Ú": "’", "Û": "!", "Ü": "%", "Ý": "ट्ठ", "ß": "द्म", "å": "द्व", "æ": "“", "ç": "ॐ", "÷": "/"}, "post-rules": [["्ा", ""], ["(त्र|त्त)([^उभप]+?)m", "$1m$2"], ["त्रm", "क्र"], ["त्तm", "क्त"], ["([^उभप]+?)m", "m$1"], ["उm", "ऊ"], ["भm", "झ"], ["पm", "फ"], ["इ{", "ई"], ["ि((.्)*[^्])", "$1ि"], ["(.[ािीुूृेैोौंःँ]*?){", "{$1"], ["((.्)*){", "{$1"], ["{", "र्"], ["([ाीुूृेैोौंःँ]+?)(्(.्)*[^्])", "$2$1"], ["्([ाीुूृेैोौंःँ]+?)((.्)*[^्])", "्$2$1"], ["([ंँ])([ािीुूृेैोौः]*)", "$2$1"], ["ँँ", "ँ"], ["ंं", "ं"], ["ेे", "े"], ["ैै", "ै"], ["ुु", "ु"], ["ूू", "ू"], ["^ः", ":"], ["टृ", "ट्ट"], ["ेा", "ाे"], ["ैा", "ाै"], ["अाे", "ओ"], ["अाै", "औ"], ["अा", "आ"], ["एे", "ऐ"], ["ाे", "ो"], ["ाै", "ौ"]], "pre-rules": []}}