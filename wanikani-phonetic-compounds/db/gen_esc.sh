#! /bin/bash

python -m json.tool kanji.json > kanji_esc.json
python -m json.tool phonetic.json > phonetic_esc.json
