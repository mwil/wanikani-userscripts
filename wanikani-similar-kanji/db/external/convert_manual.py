#! /usr/bin/env python3

import json

from collections import defaultdict


if __name__ == "__main__":
    with open("manual_edit.json", "r") as phon_in:
        manual_json = json.load(phon_in)

    result = defaultdict(list)

    for kanji, similars in manual_json.items():
        result[kanji] = similars

        for sim_kan in similars:
            result[sim_kan].append(kanji)
            result[sim_kan].extend(sim for sim in similars if sim != sim_kan)

    with open("../manual.json", "w") as outfile:
        json.dump(result, outfile, ensure_ascii=False, indent=4)

    with open("../manual_esc.json", "w") as outfile:
        json.dump(result, outfile)
