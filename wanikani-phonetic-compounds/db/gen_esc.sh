#! /bin/bash

jq -ac . < kanji.json > kanji_esc.json
jq -ac . < phonetic.json > phonetic_esc.json
