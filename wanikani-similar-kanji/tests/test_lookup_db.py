#! /usr/bin/env python3

import json

LOOKUP_DB = "../db/lookup.json"


def lookup_db_get_kanji_info():
    with open(LOOKUP_DB, "r") as infile:
        lookup_db = json.load(infile)

    return lookup_db


def test_entries_have_valid_readings():
    for kanji, item in lookup_db_get_kanji_info().items():
        assert len(item[item["important_reading"]]) > 0,\
               "Kanji {} lacks a proper reading!".format(kanji)


def test_entries_have_meanings():
    for kanji, item in lookup_db_get_kanji_info().items():
        assert len(item["meanings"]) > 0,\
               "Kanji {} lacks meanings!".format(kanji)
