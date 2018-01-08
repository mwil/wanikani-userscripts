import json
import regex

KANJI_DB = "../db/kanji.json"
WK_KANJI_DB = "../db/wk_kanji.json"
PHONETIC_DB = "../db/phonetic.json"
WK_RAD_DB = "../db/wk_rad.json"


def phonetic_db_import():
    with open(PHONETIC_DB, "r") as infile:
        phonetic_db = json.load(infile)

    return phonetic_db


def kanji_db_import():
    with open(KANJI_DB, "r") as infile:
        kanji_db = json.load(infile)

    return kanji_db


def wk_kanji_db_import():
    with open(WK_KANJI_DB, "r") as infile:
        wk_kanji_db = json.load(infile)

    return wk_kanji_db


def wk_rad_db_import():
    with open(WK_RAD_DB, "r") as infile:
        wk_rad_db = json.load(infile)

    return wk_rad_db


def test_kanji_entries_are_consistent():
    kanji_db = kanji_db_import()

    types = [
            "unknown",
            "hieroglyph",
            "indicative",
            "comp_indicative",
            "comp_phonetic",
            "derivative",
            "rebus",
            "kokuji"]

    for kanji, item in kanji_db.items():
        for prop in ["readings", "type"]:
            assert prop in item

        assert item["type"] in types,\
            """Kanji {} has unknown item type '{}'
            """.format(kanji, item["type"])

        assert item["type"] not in ["unprocessed"],\
            "Kanji {} is still unprocessed!".format(kanji)

        if item["type"] != "kokuji":
            assert len(item["readings"]) > 0,\
                "Kanji {} lacks readings!".format(kanji)

        if item["type"] == "comp_phonetic":
            assert "phonetic" in item,\
                """Kanji {} is marked as phonetic, but
                lacks the reference""".format(kanji)


def test_phonetic_entries_are_consistent():
    phonetic_db = phonetic_db_import()

    for phon, item in phonetic_db.items():
        for prop in ["readings",
                     "compounds",
                     "non_compounds",
                     "xrefs",
                     "wk-radical"]:
            assert prop in item

        assert len(item["readings"]) > 0,\
            "Tone mark '{}' has no readings!".format(phon)


def test_phonetic_compounds_are_kanji():
    kanji_db = kanji_db_import()
    phonetic_db = phonetic_db_import()

    for phon, item in phonetic_db.items():
        for comp in item["compounds"]:
            assert comp in kanji_db,\
                   """Kanji {} appears as compound of {},
                   but it was not found in the kanji_db!
                   """.format(comp, phon)


def test_phonetic_references_exist():
    kanji_db = kanji_db_import()
    phonetic_db = phonetic_db_import()

    for kanji, item in kanji_db.items():
        if "phonetic" in item:
            assert item["phonetic"] in phonetic_db,\
                   """Kanji {} lists {} as a tone mark,
                   but it is not in phonetic_db!
                   """.format(kanji, item["phonetic"])


def test_two_way_xrefs_of_phonetics():
    phonetic_db = phonetic_db_import()

    for phon, item in phonetic_db.items():
        for xref in item["xrefs"]:
            assert phon in phonetic_db[xref]["xrefs"],\
                   """Tone mark {} hass xref {},
                   but it is not mutual!
                   """.format(phon, xref)


def test_compounds_appear_as_xrefs():
    phonetic_db = phonetic_db_import()

    for phon, item in phonetic_db.items():
        for comp in item["compounds"]:
            if comp in phonetic_db:
                assert comp in item["xrefs"],\
                    """Phonetic {} is compound of {}, but no xref!
                    """.format(comp, phon)


def test_readings_are_hiragana():
    kanji_db = kanji_db_import()
    phonetic_db = phonetic_db_import()

    for db in [kanji_db, phonetic_db]:
        for kanji, item in db.items():
            for rdn in item["readings"]:
                assert not regex.sub("\p{Hiragana}", "", rdn),\
                    """Kanji {}, reading '{}' not in hiragana!
                    """.format(kanji, rdn)


def test_compound_appear_multiple_times():
    phonetic_db = phonetic_db_import()

    for phon, item in phonetic_db.items():
        for comp in item["compounds"]:
            assert item["compounds"].count(comp) == 1,\
                """Duplicate of comp {} for phon {}
                """.format(comp, phon)


def test_overlap_compounds_noncompounds():
    phonetic_db = phonetic_db_import()

    for phon, item in phonetic_db.items():
        for comp in item["compounds"]:
            assert comp not in item["non_compounds"],\
                """Kanji {} inconsistent compound for phon {}.
                """.format(comp, phon)


def test_wk_radical_coverage():
    phonetic_db = phonetic_db_import()
    wk_rad_db = wk_rad_db_import()

    wk_exceptions = ["易", "ト", "業", "禹", "ム", "ホ", "専", "両"]
    wk_exceptions2 = ["易", "専"]

    for phon, item in phonetic_db.items():
        cur_rad = item["wk-radical"]

        if cur_rad:
            cur_rad_char = wk_rad_db[cur_rad]["character"]

            if cur_rad_char and cur_rad_char not in wk_exceptions:
                assert cur_rad_char == phon,\
                    """Character of WK {} and phon {} don't match!
                    """.format(cur_rad_char, phon)
        else:
            for wk_rad, wk_item in wk_rad_db.items():
                if wk_item["character"] not in wk_exceptions2:
                    assert wk_item["character"] != phon,\
                        """Matching WK radical {} not mentioned in DB!
                        """.format(phon)


def test_consistent_readings_wk_kanji():
    kanji_db = kanji_db_import()
    wk_kanji_db = wk_kanji_db_import()
    phonetic_db = phonetic_db_import()

    # 掛,堰,烏 seems like mistake in WK
    # KP wrong for 斐?
    EXCEPTIONS = ["兄", "黄", "由", "絵", "掛", "枕", "丼", "噌", "牙", "鈴",
                  "御", "斐", "井", "鳩", "箸", "堰", "乃", "綾", "萌", "烏"]

    for wk_kanji, wk_item in wk_kanji_db.items():
        if wk_kanji not in kanji_db:
            continue

        if wk_kanji in EXCEPTIONS:
            continue

        if not kanji_db[wk_kanji]["readings"]:
            print("No ON readings for kanji {}!".format(wk_kanji))
            continue

        rdg_first = kanji_db[wk_kanji]["readings"][0]

        if not wk_item["onyomi"] or wk_item["onyomi"] == "None":
            continue

        rdgs_wk = [rdg.strip() for rdg in wk_item["onyomi"].split(",")]

        assert rdg_first in rdgs_wk,\
            """Reading {} of kanji {} not in WK!
            """.format(rdg_first, wk_kanji)

    for phon, p_item in phonetic_db.items():
        if phon in wk_kanji_db:
            continue


def test_consistent_phonetics():
    kanji_db = kanji_db_import()
    phonetic_db = phonetic_db_import()

    for kanji, k_item in kanji_db.items():
        if k_item["type"] != "comp_phonetic":
            continue

        assert "phonetic" in k_item
        assert "semantic" in k_item

        assert k_item["phonetic"] in phonetic_db

        assert kanji in phonetic_db[k_item["phonetic"]]["compounds"],\
            """Kanji {} not found as a compound for {}!
            """.format(kanji, k_item["phonetic"])
