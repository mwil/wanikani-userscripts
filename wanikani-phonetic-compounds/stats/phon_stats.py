#! /usr/bin/env python3

import json

import matplotlib.pyplot as plt

from collections import defaultdict

if __name__ == "__main__":
    with open("../db/phonetic.json", "r") as infile:
        phonetic_db = json.load(infile)

    stats = defaultdict(list)

    for phon, item in phonetic_db.items():
        stats["num_compounds"].append(len(item["compounds"]))

    stats["num_phon"] = len(phonetic_db)

    print(stats)

    n, bins, patches = plt.hist(stats["num_compounds"],
                                11,
                                normed=True,
                                align="left",
                                facecolor='g',
                                alpha=0.75)

    plt.grid(True)
    plt.show()
