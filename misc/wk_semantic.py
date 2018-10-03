#! /usr/bin/env python3

import collections
import json
import queue

from collections import defaultdict
from functools import partial

KANJI_DB = "../wanikani-phonetic-compounds/db/kanji.json"
PHONETIC_DB = "../wanikani-phonetic-compounds/db/phonetic.json"

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

rad_to_phon_d = defaultdict(set)

for kanji, k_item in kanji_db.items():
    if k_item["type"] != "comp_phonetic":
        continue

    rad_to_phon_d[k_item["semantic"]].add(k_item["phonetic"])


def find_best_phon(rad_config):
    phon_cnt = collections.Counter()

    for rad in rad_config:
        phon_cnt.update(rad_to_phon_d[rad])

    return phon_cnt.most_common()[:nphon]


def draw_matrix(rads, phons, outpath="wk_matrix.txt"):
    cur_sort_rad = [rad for rad in sort_rad if rad in rads]
    cur_sort_phon = [phon for phon in sort_phon if phon in phons]

    with open(outpath, "w") as outfile:
        fprint = partial(print, file=outfile, end="")

        fprint("　　{}\n".format("".join(cur_sort_phon)))
        fprint("　"*(len(cur_sort_phon)+2))
        fprint("\n")

        for rad in cur_sort_rad:
            fprint("{}　".format(rad))

            for phon in cur_sort_phon:
                if phon in rad_to_phon_d[rad]:
                    common = (set(radicals[rad]) &
                              set(phonetic_db[phon]["compounds"]))

                    fprint(common.pop())
                else:
                    fprint("　")

            fprint("\n")


if __name__ == "__main__":
    # with open("wk_rad.txt", "w") as outfile:
    #     for rad in sort_rad:
    #         print("{} ({}): {}"
    #               .format(rad, len(radicals[rad]), "".join(radicals[rad])),
    #               file=outfile)

    # draw_matrix("言頁山心口貝人竹艸水車⽊宀米火日糸力行衣疒女邑手辵土阜月攴禾",
    #             "隹方者莫曷寺工由昜且己正青兪丁召各奇支非曽圣甫𢦏反咅立皮啇交")

    ###########################################################################

    # with open("wk_matrix.txt", "w") as outfile:
    #     nrad = 30
    #     nphon = 200
    #     best_rads = sort_rad[:nrad]

    #     rad_match = defaultdict(int)
    #     phon_match = defaultdict(int)

    #     for rad in best_rads:
    #         for phon, p_item in phonetic_db.items():
    #             common = (set(radicals[rad]) &
    #                       set(p_item["compounds"]))

    #             rad_match[rad] += len(common)
    #             phon_match[phon] += len(common)

    #     rad_match_sort = list(sorted(rad_match,
    #                                  key=lambda a: rad_match[a],
    #                                  reverse=True))

    #     phon_match_sort = list(sorted(phon_match,
    #                                   key=lambda a: phon_match[a],
    #                                   reverse=True))

    #     rad_match_local = defaultdict(int)

    #     for rad in best_rads:
    #         for phon in phon_match_sort[:nphon]:
    #             common = (set(radicals[rad]) &
    #                       set(phonetic_db[phon]["compounds"]))

    #             rad_match_local[rad] += len(common)

    #     rad_match_local_sort = list(sorted(rad_match_local,
    #                                        key=lambda a: rad_match_local[a],
    #                                        reverse=True))

    #     print("　　{}".format("".join(phon_match_sort[:nphon])), file=outfile)
    #     print(file=outfile)

    #     for rad in rad_match_local_sort:
    #         print("{}　".format(rad), file=outfile, end="")

    #         for phon in phon_match_sort[:nphon]:
    #             common = (set(radicals[rad]) &
    #                       set(phonetic_db[phon]["compounds"]))

    #             if common:
    #                 print(common.pop(), file=outfile, end="")
    #             else:
    #                 print("　", file=outfile, end="")

    #         print(file=outfile)

    #     hits = sum([phon_match[phon] for phon in phon_match_sort[:nphon]])
    #     print("Found {} compounds in total, coverage {:.3f}!".format(
    #           hits, hits/(nrad*nphon)))

    ###########################################################################

    nrad = 20
    nphon = 20

    best_config = set(sort_rad[:nrad])
    replace_q = queue.PriorityQueue()
    visited_configs = {frozenset(best_config)}
    planned_configs = {frozenset(best_config)}

    best_phon_count = sum(map(lambda a: a[1], find_best_phon(best_config)))
    print("Starting with config", best_config, "score is", best_phon_count)

    curr_config = best_config
    old_config = curr_config

    old_qsize = 0
    visits = 0

    while True:
        curr_phon_count = sum(map(lambda a: a[1], find_best_phon(curr_config)))

        if curr_phon_count > best_phon_count:
            print("Found better configuration, new count is", curr_phon_count)
            print("New config is {} with phonetic {}"
                  .format("".join(curr_config),
                          "".join(map(lambda a: a[0],
                                  find_best_phon(curr_config)))))
            best_phon_count = curr_phon_count
            best_config = curr_config

        for rad in curr_config:
            contrib = len((rad_to_phon_d[rad] &
                          set(map(lambda a: a[0],
                              find_best_phon(curr_config)))))

            for repl_rad in set(radicals) - curr_config:
                repl_phon_len = len(rad_to_phon_d[repl_rad])

                if (repl_phon_len >= contrib and
                   (curr_phon_count-contrib+repl_phon_len) > best_phon_count):
                    # print("contrib of {} is {}, new len of {} is {}".format(
                    #       rad, contrib, repl_rad, repl_phon_len))
                    tmp_config = (curr_config - {rad}) | {repl_rad}

                    if (tmp_config not in planned_configs and
                       (tmp_config not in visited_configs)):
                        replace_q.put((
                            -10*curr_phon_count+contrib-repl_phon_len,
                            tmp_config))
                        planned_configs.add(frozenset(tmp_config))

        if replace_q.empty():
            break

        if not(visits % 10000):
            qsize = replace_q.qsize()

            if qsize > 3e6:
                print("Exploding queue, maybe found best solution already ...")
                break

            print("queue len is {} after {} configs (delta {})!"
                  .format(qsize, visits, qsize-old_qsize))
            old_qsize = qsize

        old_config = curr_config
        score, curr_config = replace_q.get()
        visited_configs.add(frozenset(old_config))
        planned_configs.remove(frozenset(old_config))

        visits += 1

        if score > -10*curr_phon_count:
            print("Breaking out with score", score)
            break

    best_phons = list(map(lambda a: a[0], find_best_phon(best_config)))

    print("Best config was", "".join(best_config))
    print("An instance of corresponding compounds is", "".join(best_phons))

    draw_matrix(best_config, best_phons,
                outpath="wk_matrix_{}_{}.txt".format(nrad, nphon))

    ###########################################################################

    # with open("wk_matrix_full.txt", "w") as outfile:
    #     print("　　{}".format("".join(sort_rad)), file=outfile)
    #     print(file=outfile)

    #     for phon, p_item in sorted(phonetic_db.items(),
    #                                key=lambda a: len(a[1]["compounds"]),
    #                                reverse=True):
    #         print("{}　".format(phon), file=outfile, end="")

    #         for rad in sort_rad:
    #             common = set(radicals[rad]) & set(p_item["compounds"])

    #             if common:
    #                 print(common.pop(), file=outfile, end="")
    #             else:
    #                 print("　", file=outfile, end="")

    #         print(file=outfile)
