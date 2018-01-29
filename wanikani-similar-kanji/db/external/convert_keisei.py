#! /usr/bin/env python3

import json
import os
import re

from collections import defaultdict

KEISEI_DB_PATH = "../../../wanikani-phonetic-compounds/db/"


def titlecase(s):
    return re.sub(
        r"[A-Za-z]+('[A-Za-z]+)?",
        lambda mo: mo.group(0)[0].upper() + mo.group(0)[1:].lower(),
        s
    )


if __name__ == "__main__":
    with open(os.path.join(KEISEI_DB_PATH, "phonetic.json"), "r") as phon_in:
        phon_json = json.load(phon_in)

    with open(os.path.join(KEISEI_DB_PATH, "kanji.json"), "r") as kanji_in:
        kanji_json = json.load(kanji_in)

    similar_out = defaultdict(list)

    for kanji, kan_item in kanji_json.items():
        if kan_item["type"] == "comp_phonetic":
            phon = kan_item["phonetic"]
            phon_item = phon_json[phon]

            similar_out[kanji].append(phon)

            for cur_phon in [phon, *phon_item["xrefs"]]:
                cur_item = phon_json[cur_phon]

                for compound in [*cur_item["compounds"],
                                 *cur_item["non_compounds"]]:

                    if compound == kanji:
                        continue

                    similar_out[kanji].append(compound)

    with open("../from_keisei_esc.json", "w") as outfile:
        json.dump(similar_out, outfile)

    # Create a new lookup database (meanings) with all entries
    # from the old wk_kanji db and kanji db for jouyou kanji
    # not in WK.
    with open(os.path.join(KEISEI_DB_PATH, "wk_kanji.json"), "r") as kanji_in:
        wk_kanji_json = json.load(kanji_in)

    lookup_out = defaultdict(dict)

    for kanji, kan_item in kanji_json.items():
        cur_item = lookup_out[kanji]

        if "meanings" in kan_item:
            # the kanji is not included in WK, create!
            cur_item["level"] = 99
            cur_item["meanings"] = list(map(titlecase, kan_item["meanings"]))
            cur_item["onyomi"] = kan_item["readings"]
            cur_item["kunyomi"] = []
            cur_item["important_reading"] = "onyomi"
            cur_item["nanori"] = []
        else:
            wk_kan_item = wk_kanji_json[kanji]

            cur_item["level"] = wk_kan_item["level"]
            cur_item["meanings"] = list(
                    map(titlecase, wk_kan_item["meaning"].split(",")))

            if wk_kan_item["onyomi"]:
                cur_item["onyomi"] = wk_kan_item["onyomi"].split(",")
            else:
                cur_item["onyomi"] = []

            if wk_kan_item["kunyomi"]:
                cur_item["kunyomi"] = wk_kan_item["kunyomi"].split(",")
            else:
                cur_item["kunyomi"] = []

            cur_item["important_reading"] = wk_kan_item["important_reading"]

            if wk_kan_item["nanori"]:
                cur_item["nanori"] = wk_kan_item["nanori"].split(",")
            else:
                cur_item["nanori"] = []

    with open("../lookup_esc.json", "w") as outfile:
        json.dump(lookup_out, outfile)
