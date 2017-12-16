#! /usr/bin/env python3

import json

from collections import defaultdict

similar_dbs = [
    ("../old_script_esc.json", 0.4),
    ("../yl_radical_esc.json", 0),
    ("../stroke_edit_dist_esc.json", 0),
    ("../from_keisei_esc.json", 0.5)
]

lookup_db = "../lookup_esc.json"

if __name__ == "__main__":
    d_result_db = defaultdict(dict)
    lars_missing = set()

    with open(lookup_db, "r") as infile:
        all_kanji_db = json.load(infile)

    for similar_in, base_score in similar_dbs:
        with open(similar_in, "r") as infile:
            sim_kanji_db = json.load(infile)

            for kanji in all_kanji_db:
                if kanji not in sim_kanji_db:
                    if kanji not in d_result_db:
                        d_result_db[kanji] = {}

                    if not base_score:
                        lars_missing.add(kanji)
                    continue

                for sim_info in sim_kanji_db[kanji]:
                    sim_kanji = (sim_info
                                 if isinstance(sim_info, str)
                                 else sim_info["kan"])

                    sim_score = (0
                                 if isinstance(sim_info, str)
                                 else sim_info["score"])

                    d_result_db[kanji][sim_kanji] = (
                                sim_score + base_score)

    l_result_db = defaultdict(dict)

    l_result_db["missing_list"] = list(lars_missing)

    for kanji, d_sim in d_result_db.items():
        if kanji in lars_missing:
            continue

        l_result_db["sim"][kanji] = sorted(
                d_sim, key=d_sim.__getitem__, reverse=True)

    for kanji in list(lars_missing):
        l_result_db["mis"][kanji] = sorted(
                d_result_db[kanji],
                key=d_result_db[kanji].__getitem__,
                reverse=True)

    with open("joined_db.json", "w") as outfile:
        json.dump(l_result_db, outfile)
