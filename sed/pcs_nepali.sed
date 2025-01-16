# PCS Nepali, v1.1.0
#pre-rules

#char mapping
s/~/ङ/g
s/!/ज्ञ/g
s/@/द्द/g
s/#/घ/g
s/$/द्ध/g
s/%/छ/g
s/^/ट/g
s/&/ठ/g
s/*/ड/g
s/(/ढ/g
s/)/ण्/g
s/_/)/g
s/+/ं/g
s/`/ञ्/g
s/1/१/g
s/2/२/g
s/3/३/g
s/4/४/g
s/5/५/g
s/6/६/g
s/7/७/g
s/8/८/g
s/9/९/g
s/0/०/g
s/-/(/g
s/=/./g
s/Q/त्त/g
s/W/ध्/g
s/E/भ्/g
s/R/च्/g
s/T/त्/g
s/Y/थ्/g
s/U/ग्/g
s/I/क्ष्/g
s/O/इ/g
s/P/ए/g
s/}/ै/g
s/|/्र/g
s/q/त्र/g
s/w/ध/g
s/e/भ/g
s/r/च/g
s/t/त/g
s/y/थ/g
s/u/ग/g
s/i/ष्/g
s/o/य/g
s/p/उ/g
s/[/ृ/g
s/]/े/g
s/\/्/g
s/A/ब्/g
s/S/क्/g
s/D/म्/g
s/F/ा/g
s/G/न्/g
s/H/ज्/g
s/J/व्/g
s/K/प्/g
s/L/ी/g
s/:/स्/g
s/"/ू/g
s/a/ब/g
s/s/क/g
s/d/म/g
s/f/ा/g
s/g/न/g
s/h/ज/g
s/j/व/g
s/k/प/g
s/l/ि/g
s/;/स/g
s/'/ु/g
s/Z/श्/g
s/X/ह्/g
s/C/ऱ्/g
s/V/ख्/g
s/B/द्य/g
s/N/ल्/g
s/M/ः/g
s/</्र/g
s/>/श्र/g
s/?/रू/g
s/z/श/g
s/x/ह/g
s/c/अ/g
s/v/ख/g
s/b/द/g
s/n/ल/g
s/,/,/g
s/./।/g
s///र/g
s/¡/ज्ञ्/g
s/¢/द्घ/g
s/£/घ्/g
s/¤/ँ/g
s/¥/ऋ/g
s/§/ट्ट/g
s/©/?/g
s/ª/ञ/g
s/®/+/g
s/°/ङ्क/g
s/´/झ/g
s/·/ट्ठ/g
s/¿/रु/g
s/Æ/”/g
s/Ò/ू/g
s/Ô/क्ष/g
s/Ø/्य/g
s/Ù/ह/g
s/ß/द्म/g
s/å/द्व/g
s/æ/“/g
s/ç/ॐ/g
s/é/ङ्ग/g
s/í/ष/g
s/ñ/ङ/g
s/÷///g
s/ø/य्/g
s/ú/ू/g

#post-rules
s/्ा//g
s/(त्र|त्त)([^उभप]+?)m/\1m\2/g
s/त्रm/क्र/g
s/त्तm/क्त/g
s/([^उभप]+?)m/m\1/g
s/उm/ऊ/g
s/भm/झ/g
s/पm/फ/g
s/इ{/ई/g
s/ि((.्)*[^्])/\1ि/g
s/(.[ािीुूृेैोौंःँ]*?){/{\1/g
s/((.्)*){/{\1/g
s/{/र्/g
s/([ाीुूृेैोौंःँ]+?)(्(.्)*[^्])/\2\1/g
s/्([ाीुूृेैोौंःँ]+?)((.्)*[^्])/्\2\1/g
s/([ंँ])([ािीुूृेैोौः]*)/\2\1/g
s/ँँ/ँ/g
s/ंं/ं/g
s/ेे/े/g
s/ैै/ै/g
s/ुु/ु/g
s/ूू/ू/g
s/^ः/:/g
s/टृ/ट्ट/g
s/ेा/ाे/g
s/ैा/ाै/g
s/अाे/ओ/g
s/अाै/औ/g
s/अा/आ/g
s/एे/ऐ/g
s/ाे/ो/g
s/ाै/ौ/g
