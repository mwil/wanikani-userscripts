#! /usr/bin/env python3

import json

files = [
    ("db/jyouyou__strokeEditDistance.csv",
     "../stroke_edit_dist.json"),
    ("db/jyouyou__yehAndLiRadical.csv",
     "../yl_radical.json")
]


def extract(csv_in, json_out):
    json_obj = {}

    with open(csv_in, "r") as infile:
        for line in infile:
            data = line.split()
            curKanji = data.pop(0)

            json_obj[curKanji] = []

            while data:
                kanji, score, *data = data

                json_obj[curKanji].append(
                    {"kan": kanji, "score": float(score)}
                )

    with open(json_out, "w") as outfile:
        json.dump(json_obj, outfile)


if __name__ == "__main__":
    for csv_in, json_out in files:
        extract(csv_in, json_out)
