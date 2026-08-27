#!/usr/bin/env python3
"""Plakt alle losse bestanden samen tot één Leeromgeving.html om te delen."""
import re, os

HIER = os.path.dirname(os.path.abspath(__file__))
idx = open(os.path.join(HIER, 'index.html'), encoding='utf-8').read()

css = open(os.path.join(HIER, 'uiterlijk/style.css'), encoding='utf-8').read()
idx = idx.replace('<link rel="stylesheet" href="uiterlijk/style.css">',
                  '<style>\n' + css + '\n</style>')

for m in list(re.finditer(r'<script src="([^"]+)"></script>', idx)):
    inhoud = open(os.path.join(HIER, m.group(1)), encoding='utf-8').read()
    idx = idx.replace(m.group(0), '<script>\n' + inhoud + '\n</script>')

idx = re.sub(r'<!-- STOF:(START|EINDE) -->\n?', '', idx)
uit = os.path.join(HIER, 'Leeromgeving.html')
open(uit, 'w', encoding='utf-8').write(idx)
print('Leeromgeving.html gemaakt: %d KB' % (len(idx.encode()) // 1024))
