#! /usr/bin/env python3

import json

from collections import defaultdict

KANJI_DB = "../wanikani-phonetic-compounds/db/kanji.json"
PHONETIC_DB = "../wanikani-phonetic-compounds/db/phonetic.json"

if __name__ == "__main__":
    with open(KANJI_DB, "r") as infile:
        kanji_db = json.load(infile)

    with open(PHONETIC_DB, "r") as infile:
        phonetic_db = json.load(infile)

    radicals = defaultdict(list)

    for kanji, k_item in kanji_db.items():
        if "semantic" not in k_item:
            continue

        radicals[k_item["semantic"]].append(kanji)

    sort_rad = list(sorted(radicals,
                           key=lambda a: len(radicals[a]),
                           reverse=True))

    sort_phon = list(sorted(phonetic_db,
                            key=lambda a: len(phonetic_db[a]["compounds"]),
                            reverse=True))

    with open("wk_rad.txt", "w") as outfile:
        for rad in sort_rad:
            print("{} ({}): {}"
                  .format(rad, len(radicals[rad]), "".join(radicals[rad])),
                  file=outfile)

    with open("wk_matrix.txt", "w") as outfile:
        X = 18
        best_rads = sort_rad[:X]

        rad_match = defaultdict(int)
        phon_match = defaultdict(int)

        for rad in best_rads:
            for phon, p_item in phonetic_db.items():
                common = (set(radicals[rad]) &
                          set(p_item["compounds"]))

                rad_match[rad] += len(common)
                phon_match[phon] += len(common)

        rad_match_sort = list(sorted(rad_match,
                                     key=lambda a: rad_match[a],
                                     reverse=True))

        phon_match_sort = list(sorted(phon_match,
                                      key=lambda a: phon_match[a],
                                      reverse=True))

        print("　　{}".format("".join(phon_match_sort[:2*X])), file=outfile)
        print(file=outfile)

        for rad in rad_match_sort:
            print("{}　".format(rad), file=outfile, end="")

            for phon in phon_match_sort[:2*X]:
                common = (set(radicals[rad]) &
                          set(phonetic_db[phon]["compounds"]))

                if common:
                    print(common.pop(), file=outfile, end="")
                else:
                    print("　", file=outfile, end="")

            print(file=outfile)

        hits = sum([phon_match[phon] for phon in phon_match_sort[:2*X]])
        print("Found {} compounds in total, coverage {:.3f}!".format(
              hits, hits/X**2))

    with open("wk_matrix_full.txt", "w") as outfile:
        print("　　{}".format("".join(sort_rad)), file=outfile)
        print(file=outfile)

        for phon, p_item in sorted(phonetic_db.items(),
                                   key=lambda a: len(a[1]["compounds"]),
                                   reverse=True):
            print("{}　".format(phon), file=outfile, end="")

            for rad in sort_rad:
                common = set(radicals[rad]) & set(p_item["compounds"])

                if common:
                    print(common.pop(), file=outfile, end="")
                else:
                    print("　", file=outfile, end="")

            print(file=outfile)
