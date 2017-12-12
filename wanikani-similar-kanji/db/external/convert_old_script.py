#! /usr/bin/env python3

import json

if __name__ == "__main__":
    json_out = {}

    with open("db/wk_similarkanji.json") as infile:
        json_in = json.load(infile)

        for kanji, info in json_in.items():
            json_out[kanji] = []

            for sim_info in info["similar"]:
                json_out[kanji].append(sim_info["character"])

    with open("../old_script_esc.json", "w") as outfile:
        json.dump(json_out, outfile)
