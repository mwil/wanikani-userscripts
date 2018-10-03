#! /usr/bin/env python3

import json
import re

if __name__ == "__main__":
    with open("./kanji_esc.json") as infile:
        kanji_db = json.load(infile)

    with open("./wk_kanji_esc.json") as infile:
        wk_kanji_db = json.load(infile)

    for wk_kanji in wk_kanji_db:
        if not "category" in kanji_db[wk_kanji]:
            kanji_db[wk_kanji]["category"] = "jouyou"

    OTHER_JOYO="蚕挨曖宛畏萎彙壱咽淫韻畝謁怨艶旺翁臆虞苛箇瓦楷潰諧蓋骸柿嚇顎葛褐釜棺玩毀畿臼嗅斤僅惧串窟薫詣憬稽桁繭舷股錮勾侯梗喉慌乞痕墾挫采塞柵刹拶肢恣嗣摯賜餌璽嫉爵腫儒袖羞愁蹴遵抄宵硝詔拭薪腎裾凄醒斥戚煎羨腺詮箋膳繕塑遡曽痩踪捉唾堆但綻緻逐嫡衷嘲勅捗朕逓諦溺填妬痘謄頓貪弐匂捻罵剥氾汎斑頒眉膝肘附訃賦丙蔽餅璧倣貌勃昧冥麺耗冶喩妖瘍窯沃拉辣濫吏慄侶厘弄楼籠麓"

    for kanji in OTHER_JOYO:
        if not "category" in kanji_db[kanji]:
            kanji_db[kanji]["category"] = "jouyou"

    with open("kanji.json", "w") as outfile:
        json.dump(kanji_db, outfile, ensure_ascii=False, indent=4)
