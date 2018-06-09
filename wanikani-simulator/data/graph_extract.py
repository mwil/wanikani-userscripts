# /usr/bin/env python3

import json

from collections import defaultdict

FILENAME = "wk_subjects_{}000.json"

if __name__ == "__main__":
    result = defaultdict(list)

    for i in range(9):
        with open(FILENAME.format(i), "r") as infile:
            wk_subjects = json.load(infile)

        for subject in wk_subjects["data"]:
            new_item = {}

            level = subject["data"]["level"]

            new_item["id"] = subject["id"]
            new_item["object"] = subject["object"]
            new_item["level"] = level

            try:
                new_item["component"] = (
                    subject["data"]["component_subject_ids"])
            except KeyError:
                pass

            try:
                new_item["amalgamation"] = (
                    subject["data"]["amalgamation_subject_ids"])
            except KeyError:
                pass

            result[level].append(new_item)

    with open("wk_graph.json", "w") as outfile:
        json.dump(result, outfile, ensure_ascii=False, indent=4)
