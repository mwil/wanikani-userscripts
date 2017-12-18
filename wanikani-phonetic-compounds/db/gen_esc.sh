#! /bin/bash

echo "Regenerating the escaped databases ..."

jq -ac . < kanji.json > kanji_esc.json
jq -ac . < phonetic.json > phonetic_esc.json
jq -ac . < wk_kanji.json > wk_kanji_esc.json

echo "Done."
