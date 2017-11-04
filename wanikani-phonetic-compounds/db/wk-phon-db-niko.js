/* jshint esversion: 6 */

// Wrapper object for Keisei database interactions
// #############################################################################
function KeiseiDB()
{
    this.KTypeEnum = Object.freeze(  {
        unknown:         0,
        hieroglyph:      1, // 象形: type of character representing pictures
        indicative:      2, // 指事: indicative (kanji whose shape is based on logical representation of an abstract idea)
        comp_indicative: 3, // 会意: kanji made up of meaningful parts (e.g. "mountain pass" is up + down + mountain)
        comp_phonetic:   4, // 形声: kanji in which one element suggests the meaning, the other the pronunciation
        derivative:      5, // 転注: applying an extended meaning to a kanji
        rebus:           6, // 仮借: borrowing a kanji with the same pronunciation to convey an unrelated term
        kokuji:          7, // kanji originating from Japan
        unprocessed:     8  // not yet visited
        }
    );

    this.wkradical_to_phon = {};
}
// #############################################################################

// #############################################################################
(function() {
   "use strict";

    KeiseiDB.prototype = {
        // #####################################################################
        init: function() {
            this.genWKRadicalToPhon();
        },
        // #####################################################################

        // #####################################################################
        checkKanji: function(kanji)
        {
            return this.kanji_db && (kanji in this.kanji_db);
        },
        // #####################################################################
        // #####################################################################
        checkPhonetic: function(phon)
        {
            return this.phonetic_db && (phon in this.phonetic_db);
        },
        // #####################################################################
        // #####################################################################
        getKType: function(kanji)
        {
            return this.KTypeEnum[this.kanji_db[kanji].type];
        },
        // #####################################################################
        // #####################################################################
        getKReadings: function(kanji)
        {
            if (!(kanji in this.kanji_db))
                return this.phonetic_db[kanji].readings;
            else
                return this.kanji_db[kanji].readings;
        },
        // #####################################################################
        // #####################################################################
        getKPhonetic: function(kanji)
        {
            if (kanji in this.kanji_db)
                return this.kanji_db[kanji].phonetic;
            else
                return null;
        },
        // #####################################################################

        // Phonetic DB functions

        // #####################################################################
        getPCompounds: function(phon)
        {
            if (phon in this.phonetic_db)
                return this.phonetic_db[phon].compounds;
            else
            {
                console.log("KEISEI: the following phonetic is not in the DB!", phon);
                return null;
            }
        },
        // #####################################################################
        // #####################################################################
        getPReadings: function(phon)
        {
            if (phon in this.phonetic_db)
                return this.phonetic_db[phon].readings;
            else
                return [];
        },
        // #####################################################################
        // #####################################################################
        getPXRefs: function(phon)
        {
            if (phon in this.phonetic_db)
                return this.phonetic_db[phon].xrefs;
            else
                return [];
        },
        // #####################################################################
        // #####################################################################
        getPNonCompounds: function(phon)
        {
            if (phon in this.phonetic_db)
                return this.phonetic_db[phon].non_compounds;
            else
                return [];
        },
        // #####################################################################

        genWKRadicalToPhon: function()
        {
            Object.keys(this.phonetic_db).forEach( function(phon) {
                var data = this.phonetic_db[phon];

                this.wkradical_to_phon[data["wk-radical"]] = phon;
            }, this);
        },
        // #####################################################################
        mapWKRadicalToPhon: function(radical)
        {
            if (this.wkradical_to_phon && radical in this.wkradical_to_phon)
                return this.wkradical_to_phon[radical];
            else
                return null;
        }
        // #####################################################################
    };
}());
// #############################################################################

// #############################################################################
KeiseiDB.prototype.kanji_db = JSON.parse(`
{
    "一": {
        "readings": ["いち", "いつ"],
        "type": "indicative"
    },
    "九": {
        "readings": ["きゅう", "く"],
        "type": "indicative"
    },
    "七": {
        "readings": ["しち", "しつ"],
        "type": "indicative"
    },
    "二": {
        "readings": ["に", "じ"],
        "type": "indicative"
    },
    "人": {
        "readings": ["じん", "にん"],
        "type": "hieroglyph"
    },
    "入": {
        "readings": ["ニュウ", "じゅ", "じゅう"],
        "type": "indicative"
    },
    "八": {
        "readings": ["ハチ", "ハツ"],
        "type": "indicative"
    },
    "力": {
        "readings": ["リョク", "リキ"],
        "type": "hieroglyph"
    },
    "十": {
        "readings": ["じゅう"],
        "type": "indicative"
    },
    "下": {
        "readings": ["か", "げ"],
        "type": "indicative"
    },
    "三": {
        "readings": ["さん"],
        "type": "indicative"
    },
    "千": {
        "readings": ["せん"],
        "type": "comp_indicative"
    },
    "上": {
        "readings": ["じょう", "しょう"],
        "type": "indicative"
    },
    "口": {
        "readings": ["こう", "く"],
        "type": "hieroglyph"
    },
    "土": {
        "readings": ["と", "ど"],
        "type": "hieroglyph"
    },
    "夕": {
        "readings": ["せき", "しゃく"],
        "type": "hieroglyph"
    },
    "大": {
        "readings": ["だい", "たい"],
        "type": "hieroglyph"
    },
    "女": {
        "readings": ["じょ", "にょ", "にょう"],
        "type": "hieroglyph"
    },
    "子": {
        "readings": ["し", "す"],
        "type": "hieroglyph"
    },
    "小": {
        "readings": ["しょう"],
        "type": "hieroglyph"
    },
    "山": {
        "readings": ["さん", "せん"],
        "type": "hieroglyph"
    },
    "川": {
        "readings": ["せん"],
        "type": "hieroglyph"
    },
    "五": {
        "readings": ["ご"],
        "type": "indicative"
    },
    "天": {
        "readings": ["てん"],
        "type": "hieroglyph"
    },
    "中": {
        "readings": ["ちゅう"],
        "type": "unknown"
    },
    "六": {
        "readings": ["ろく", "リク"],
        "type": "indicative"
    },
    "円": {
        "readings": ["えん"],
        "type": "derivative"
    },
    "手": {
        "readings": ["しゅ", "ず"],
        "type": "hieroglyph"
    },
    "文": {
        "readings": ["ぶん", "もん"],
        "type": "hieroglyph"
    },
    "日": {
        "readings": ["じつ", "にち"],
        "type": "hieroglyph"
    },
    "月": {
        "readings": ["げつ", "がつ"],
        "type": "hieroglyph"
    },
    "木": {
        "readings": ["もく", "ぼく"],
        "type": "hieroglyph"
    },
    "水": {
        "readings": ["すい"],
        "type": "hieroglyph"
    },
    "火": {
        "readings": ["か", "こ"],
        "type": "hieroglyph"
    },
    "犬": {
        "readings": ["けん"],
        "type": "hieroglyph"
    },
    "王": {
        "readings": ["おう"],
        "type": "hieroglyph"
    },
    "正": {
        "readings": ["せい", "しょう"],
        "type": "comp_indicative"
    },
    "出": {
        "readings": ["しゅつ", "すい"],
        "type": "comp_indicative"
    },
    "本": {
        "readings": ["ほん"],
        "type": "hieroglyph"
    },
    "右": {
        "readings": ["う", "ゆう"],
        "type": "comp_indicative"
    },
    "四": {
        "readings": ["し"],
        "type": "indicative"
    },
    "左": {
        "readings": ["さ"],
        "type": "comp_indicative"
    },
    "玉": {
        "readings": ["ギョク"],
        "type": "hieroglyph"
    },
    "生": {
        "readings": ["せい", "しょう"],
        "type": "hieroglyph"
    },
    "田": {
        "readings": ["でん"],
        "type": "hieroglyph"
    },
    "白": {
        "readings": ["はく", "びゃく"],
        "type": "unknown"
    },
    "目": {
        "readings": ["もく", "ぼく"],
        "type": "hieroglyph"
    },
    "石": {
        "readings": ["せき", "しゃく", "こく", "じゃく"],
        "type": "hieroglyph"
    },
    "立": {
        "readings": ["りつ", "りゅう"],
        "type": "comp_indicative"
    },
    "百": {
        "readings": ["ヒャク", "はく"],
        "type": "comp_indicative"
    },
    "年": {
        "readings": ["ねん"],
        "type": "comp_indicative"
    },
    "休": {
        "readings": ["きゅう"],
        "type": "comp_indicative"
    },
    "先": {
        "readings": ["せん"],
        "type": "comp_indicative"
    },
    "名": {
        "readings": ["めい", "みょう"],
        "type": "comp_indicative"
    },
    "字": {
        "readings": ["じ"],
        "phonetic": "子",
        "type": "comp_phonetic"
    },
    "早": {
        "readings": ["そう", "サッ"],
        "type": "comp_indicative"
    },
    "気": {
        "readings": ["き", "け"],
        "type": "unknown"
    },
    "竹": {
        "readings": ["ちく"],
        "type": "hieroglyph"
    },
    "糸": {
        "readings": ["し"],
        "type": "hieroglyph"
    },
    "耳": {
        "readings": ["じ"],
        "type": "hieroglyph"
    },
    "虫": {
        "readings": ["ちゅう"],
        "type": "hieroglyph"
    },
    "村": {
        "readings": ["そん"],
        "phonetic": "寸",
        "type": "comp_phonetic",
        "comment": "Originally 屯, but looks like adapted reading."
    },
    "男": {
        "readings": ["だん", "なん"],
        "type": "comp_indicative"
    },
    "町": {
        "readings": ["ちょう", "てい"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "花": {
        "readings": ["か", "け"],
        "phonetic": "化",
        "type": "comp_phonetic"
    },
    "見": {
        "readings": ["けん", "げん"],
        "type": "comp_indicative"
    },
    "貝": {
        "readings": ["ばい", "まい"],
        "type": "hieroglyph"
    },
    "赤": {
        "readings": ["せき", "しゃく"],
        "type": "comp_indicative"
    },
    "足": {
        "readings": ["そく", "しょく"],
        "type": "hieroglyph"
    },
    "車": {
        "readings": ["しゃ"],
        "type": "hieroglyph"
    },
    "学": {
        "readings": ["がく"],
        "type": "comp_indicative"
    },
    "林": {
        "readings": ["りん"],
        "type": "comp_indicative"
    },
    "空": {
        "readings": ["くう"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "金": {
        "readings": ["きん", "こん"],
        "type": "unknown"
    },
    "雨": {
        "readings": ["う"],
        "type": "hieroglyph"
    },
    "青": {
        "readings": ["せい", "しょう"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "草": {
        "readings": ["そう"],
        "phonetic": "早",
        "type": "comp_phonetic"
    },
    "音": {
        "readings": ["おん", "いん"],
        "type": "comp_indicative"
    },
    "校": {
        "readings": ["こう", "きょう"],
        "phonetic": "交",
        "type": "comp_phonetic"
    },
    "森": {
        "readings": ["しん"],
        "type": "comp_indicative"
    },

    "刀": {
        "readings": ["とう"],
        "type": "hieroglyph"
    },
    "万": {
        "readings": ["まん", "ばん"],
        "type": "derivative"
    },
    "丸": {
        "readings": ["がん"],
        "type": "hieroglyph"
    },
    "才": {
        "readings": ["さい"],
        "type": "unknown"
    },
    "工": {
        "readings": ["こう", "く"],
        "type": "hieroglyph"
    },
    "弓": {
        "readings": ["きゅう"],
        "type": "hieroglyph"
    },
    "内": {
        "readings": ["ない", "だい", "のう", "どう"],
        "type": "hieroglyph"
    },
    "午": {
        "readings": ["ご"],
        "phonetic": "午",
        "type": "hieroglyph"
    },
    "少": {
        "readings": ["しょう"],
        "type": "unknown"
    },
    "元": {
        "readings": ["げん", "がん"],
        "phonetic": "元",
        "type": "unknown"
    },
    "今": {
        "readings": ["こん", "きん"],
        "type": "comp_indicative"
    },
    "公": {
        "readings": ["こう", "く"],
        "type": "unknown"
    },
    "分": {
        "readings": ["ふん", "ぶん", "ぶ"],
        "type": "comp_indicative"
    },
    "切": {
        "readings": ["せつ", "せい", "さい"],
        "phonetic": "七",
        "type": "comp_phonetic"
    },
    "友": {
        "readings": ["ゆう"],
        "type": "comp_indicative"
    },
    "太": {
        "readings": ["たい", "た", "だい"],
        "type": "unknown"
    },
    "引": {
        "readings": ["いん"],
        "type": "comp_indicative"
    },
    "心": {
        "readings": ["しん"],
        "type": "hieroglyph"
    },
    "戸": {
        "readings": ["こ"],
        "type": "hieroglyph"
    },
    "方": {
        "readings": ["ほう"],
        "type": "hieroglyph"
    },
    "止": {
        "readings": ["し"],
        "type": "hieroglyph"
    },
    "毛": {
        "readings": ["もう", "ぼう"],
        "type": "hieroglyph"
    },
    "父": {
        "readings": ["ふ", "ほ"],
        "type": "comp_indicative"
    },
    "牛": {
        "readings": ["ギュウ", "ご"],
        "type": "hieroglyph"
    },
    "半": {
        "readings": ["はん"],
        "type": "comp_indicative"
    },
    "市": {
        "readings": ["し"],
        "type": "unknown"
    },
    "北": {
        "readings": ["ほく"],
        "type": "unknown"
    },
    "古": {
        "readings": ["こ"],
        "type": "unknown"
    },
    "台": {
        "readings": ["だい", "たい"],
        "type": "comp_indicative"
    },
    "兄": {
        "readings": ["けい", "きょう"],
        "type": "comp_indicative"
    },
    "冬": {
        "readings": ["とう"],
        "type": "hieroglyph"
    },
    "外": {
        "readings": ["がい", "げ", "ウイ"],
        "type": "comp_indicative"
    },
    "広": {
        "readings": ["こう"],
        "phonetic": "黄",
        "type": "comp_phonetic"
    },
    "母": {
        "readings": ["ぼ", "も", "ぼう"],
        "type": "hieroglyph"
    },
    "用": {
        "readings": ["よう"],
        "type": "hieroglyph"
    },
    "矢": {
        "readings": ["し"],
        "phonetic": "矢",
        "type": "hieroglyph"
    },
    "交": {
        "readings": ["こう"],
        "type": "hieroglyph"
    },
    "会": {
        "readings": ["かい", "え"],
        "phonetic": "会",
        "type": "comp_indicative"
    },
    "合": {
        "readings": ["ごう", "こう"],
        "phonetic": "合",
        "type": "comp_indicative"
    },
    "同": {
        "readings": ["どう"],
        "phonetic": "同",
        "type": "comp_indicative"
    },
    "回": {
        "readings": ["かい", "え"],
        "type": "hieroglyph"
    },
    "寺": {
        "readings": ["じ"],
        "type": "unknown"
    },
    "地": {
        "readings": ["ち", "じ"],
        "phonetic": "也",
        "type": "comp_phonetic"
    },
    "多": {
        "readings": ["た"],
        "type": "comp_indicative"
    },
    "光": {
        "readings": ["こう"],
        "type": "comp_indicative"
    },
    "当": {
        "readings": ["とう"],
        "phonetic": "尚",
        "type": "comp_phonetic"
    },
    "毎": {
        "readings": ["まい"],
        "type": "comp_indicative"
    },
    "池": {
        "readings": ["ち"],
        "phonetic": "也",
        "type": "comp_phonetic"
    },
    "米": {
        "readings": ["べい", "まい", "め"],
        "phonetic": "米",
        "type": "hieroglyph"
    },
    "羽": {
        "readings": ["う"],
        "type": "hieroglyph"
    },
    "考": {
        "readings": ["こう"],
        "phonetic": "考",
        "type": "unknown",
        "comment": "TODO: phonetic compound of 丂"
    },
    "肉": {
        "readings": ["ニク", "じく"],
        "type": "hieroglyph"
    },
    "自": {
        "readings": ["じ", "し"],
        "type": "hieroglyph"
    },
    "色": {
        "readings": ["しょく", "しき"],
        "type": "comp_indicative"
    },
    "行": {
        "readings": ["こう", "ぎょう", "あん"],
        "type": "hieroglyph"
    },
    "西": {
        "readings": ["せい", "さい", "すい"],
        "type": "hieroglyph"
    },
    "来": {
        "readings": ["ライ"],
        "type": "hieroglyph"
    },
    "何": {
        "readings": ["か"],
        "phonetic": "可",
        "type": "comp_phonetic"
    },
    "作": {
        "readings": ["さく", "さ"],
        "phonetic": "乍",
        "type": "comp_phonetic"
    },
    "体": {
        "readings": ["たい", "てい"],
        "type": "unknown",
        "comment": "TODO: phonetic of 豊"
    },
    "弟": {
        "readings": ["てい", "だい", "デ"],
        "type": "hieroglyph"
    },
    "図": {
        "readings": ["ず", "と"],
        "type": "comp_indicative"
    },
    "声": {
        "readings": ["せい", "しょう"],
        "type": "unknown"
    },
    "売": {
        "readings": ["ばい"],
        "type": "comp_indicative"
    },
    "形": {
        "readings": ["けい", "ぎょう"],
        "type": "unknown",
        "comment": "TODO phonetic 开"
    },
    "汽": {
        "readings": ["き"],
        "type": "unknown",
        "comment": "TODO phonetic 气"
    },
    "社": {
        "readings": ["しゃ", "じゃ"],
        "phonetic": "土",
        "type": "comp_phonetic"
    },
    "角": {
        "readings": ["かく"],
        "type": "hieroglyph"
    },
    "言": {
        "readings": ["げん", "ごん"],
        "type": "unknown"
    },
    "谷": {
        "readings": ["こく"],
        "type": "comp_indicative"
    },
    "走": {
        "readings": ["そう"],
        "type": "comp_indicative"
    },
    "近": {
        "readings": ["きん", "こん"],
        "phonetic": "斤",
        "type": "comp_phonetic"
    },
    "里": {
        "readings": ["り"],
        "type": "comp_indicative"
    },
    "麦": {
        "readings": ["ばく"],
        "type": "comp_indicative"
    },
    "画": {
        "readings": ["が", "かく"],
        "type": "comp_indicative"
    },
    "東": {
        "readings": ["とう"],
        "type": "borrowing"
    },
    "京": {
        "readings": ["きょう", "けい", "きん"],
        "type": "hieroglyph"
    },
    "夜": {
        "readings": ["や"],
        "type": "unknown"
    },
    "直": {
        "readings": ["ちょく", "じき", "ち"],
        "type": "unknown"
    },
    "国": {
        "readings": ["こく"],
        "type": "comp_indicative"
    },
    "姉": {
        "readings": ["し"],
        "type": "unknown",
        "comment": "TODO: obscure phonetic 𠂔"
    },
    "妹": {
        "readings": ["まい", "ばい"],
        "phonetic": "未",
        "type": "comp_phonetic"
    },
    "岩": {
        "readings": ["がん"],
        "type": "comp_indicative"
    },
    "店": {
        "readings": ["てん"],
        "phonetic": "占",
        "type": "comp_phonetic"
    },
    "明": {
        "readings": ["めい", "みょう", "みん"],
        "type": "comp_indicative"
    },
    "歩": {
        "readings": ["ほ", "ぶ", "ふ"],
        "type": "comp_indicative"
    },
    "知": {
        "readings": ["ち"],
        "type": "comp_indicative"
    },
    "長": {
        "readings": ["ちょう"],
        "type": "hieroglyph"
    },
    "門": {
        "readings": ["もん", "ぼん"],
        "type": "hieroglyph"
    },
    "昼": {
        "readings": ["ちゅう"],
        "type": "unknown"
    },
    "前": {
        "readings": ["ぜん", "せん"],
        "type": "comp_indicative"
    },
    "南": {
        "readings": ["なん", "な", "だん"],
        "type": "borrowing"
    },
    "点": {
        "readings": ["てん"],
        "phonetic": "占",
        "type": "comp_phonetic"
    },
    "室": {
        "readings": ["しつ"],
        "type": "unknown"
    },
    "後": {
        "readings": ["ご", "こう"],
        "type": "unknown"
    },
    "春": {
        "readings": ["シュン"],
        "phonetic": "屯",
        "type": "comp_phonetic"
    },
    "星": {
        "readings": ["せい", "しょう"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "海": {
        "readings": ["かい"],
        "type": "unknown"
    },
    "活": {
        "readings": ["カツ"],
        "type": "unknown",
        "comment": "TODO phonetic of an obscure component"
    },
    "思": {
        "readings": ["し"],
        "phonetic": "囟",
        "type": "comp_phonetic"
    },
    "科": {
        "readings": ["か"],
        "type": "comp_indicative"
    },
    "秋": {
        "readings": ["しゅう"],
        "type": "unknown",
        "comment": "TODO phonetic of an obscure component"
    },
    "茶": {
        "readings": ["チャ", "さ"],
        "type": "unknown"
    },
    "計": {
        "readings": ["けい"],
        "type": "comp_indicative"
    },
    "風": {
        "readings": ["ふう", "ふ"],
        "type": "unknown",
        "comment": "TODO: maybe phonetic of 凡"
    },
    "食": {
        "readings": ["しょく", "じき", "し"],
        "type": "unknown",
        "comment": "TODO phonetic 亼? Seems strange"
    },
    "首": {
        "readings": ["しゅ"],
        "type": "hieroglyph"
    },
    "夏": {
        "readings": ["か", "げ"],
        "type": "hieroglyph"
    },
    "弱": {
        "readings": ["じゃく", "にゃく"],
        "type": "hieroglyph"
    },
    "原": {
        "readings": ["げん"],
        "type": "comp_indicative"
    },
    "家": {
        "readings": ["か", "け"],
        "type": "derivative"
    },
    "帰": {
        "readings": ["き"],
        "type": "comp_indicative"
    },
    "時": {
        "readings": ["じ"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "紙": {
        "readings": ["し"],
        "phonetic": "氏",
        "type": "comp_phonetic"
    },
    "書": {
        "readings": ["しょ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "記": {
        "readings": ["き"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "通": {
        "readings": ["つう", "つ"],
        "phonetic": "甬",
        "type": "comp_phonetic"
    },
    "馬": {
        "readings": ["ば", "め", "ま"],
        "type": "hieroglyph"
    },
    "高": {
        "readings": ["こう"],
        "type": "hieroglyph"
    },
    "強": {
        "readings": ["きょう", "ごう"],
        "type": "comp_indicative"
    },
    "教": {
        "readings": ["きょう"],
        "type": "comp_indicative"
    },
    "理": {
        "readings": ["り"],
        "phonetic": "里",
        "type": "comp_phonetic"
    },
    "細": {
        "readings": ["さい"],
        "phonetic": "囟",
        "type": "comp_phonetic"
    },
    "組": {
        "readings": ["そ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "船": {
        "readings": ["せん"],
        "phonetic": "㕣",
        "type": "comp_phonetic"
    },
    "週": {
        "readings": ["しゅう"],
        "phonetic": "周",
        "type": "comp_phonetic"
    },
    "野": {
        "readings": ["や", "しょ"],
        "phonetic": "予",
        "type": "comp_phonetic"
    },
    "雪": {
        "readings": ["せつ"],
        "type": "comp_indicative"
    },
    "魚": {
        "readings": ["ギョ"],
        "type": "hieroglyph"
    },
    "鳥": {
        "readings": ["ちょう"],
        "type": "hieroglyph"
    },
    "黄": {
        "readings": ["こう", "おう"],
        "type": "hieroglyph"
    },
    "黒": {
        "readings": ["こく"],
        "type": "unknown"
    },
    "場": {
        "readings": ["じょう"],
        "phonetic": "昜",
        "type": "comp_phonetic"
    },
    "晴": {
        "readings": ["せい"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "答": {
        "readings": ["とう"],
        "phonetic": "合",
        "type": "comp_phonetic"
    },
    "絵": {
        "readings": ["かい", "え"],
        "phonetic": "会",
        "type": "comp_phonetic"
    },
    "買": {
        "readings": ["ばい"],
        "type": "unknown"
    },
    "朝": {
        "readings": ["ちょう"],
        "type": "comp_indicative"
    },
    "道": {
        "readings": ["どう", "とう"],
        "type": "unknown"
    },
    "番": {
        "readings": ["ばん", "はん", "は"],
        "type": "hieroglyph"
    },
    "間": {
        "readings": ["かん", "けん"],
        "type": "comp_indicative"
    },
    "雲": {
        "readings": ["うん"],
        "phonetic": "云",
        "type": "comp_phonetic"
    },
    "園": {
        "readings": ["えん", "おん"],
        "phonetic": "袁",
        "type": "comp_phonetic"
    },
    "数": {
        "readings": ["スウ", "す", "しゅ", "さく", "そく"],
        "type": "unknown"
    },
    "新": {
        "readings": ["しん"],
        "type": "unknown"
    },
    "楽": {
        "readings": ["がく", "らく", "ごう", "ぎょう"],
        "type": "hieroglyph"
    },
    "話": {
        "readings": ["わ"],
        "type": "unknown",
        "comment": "obscure pcomp 䛡"
    },
    "遠": {
        "readings": ["えん", "おん"],
        "phonetic": "袁",
        "type": "comp_phonetic"
    },
    "電": {
        "readings": ["でん", "てん"],
        "type": "comp_indicative"
    },
    "鳴": {
        "readings": ["めい", "みょう"],
        "type": "comp_indicative",
        "comment": "TODO NOT phonetic 鳥"
    },
    "歌": {
        "readings": ["か"],
        "type": "unknown",
        "comment": "phonetic mark 哥"
    },
    "算": {
        "readings": ["さん"],
        "type": "comp_indicative"
    },
    "語": {
        "readings": ["ご"],
        "phonetic": "吾",
        "type": "comp_phonetic"
    },
    "読": {
        "readings": ["どく", "とく", "とう"],
        "phonetic": "売",
        "type": "comp_phonetic"
    },
    "聞": {
        "readings": ["ぶん", "もん"],
        "phonetic": "門",
        "type": "comp_phonetic"
    },
    "線": {
        "readings": ["せん"],
        "phonetic": "泉",
        "type": "comp_phonetic"
    },
    "親": {
        "readings": ["しん"],
        "phonetic": "亲",
        "type": "comp_phonetic"
    },
    "頭": {
        "readings": ["とう", "ず", "と", "じゅう"],
        "phonetic": "豆",
        "type": "comp_phonetic"
    },
    "曜": {
        "readings": ["よう"],
        "phonetic": "翟",
        "type": "comp_phonetic"
    },
    "顔": {
        "readings": ["がん", "げん"],
        "phonetic": "彦",
        "type": "comp_phonetic"
    },


    "丁": {
        "readings": ["ちょう", "てい", "とう"],
        "type": "hieroglyph"
    },
    "予": {
        "readings": ["よ"],
        "type": "unknown"
    },
    "化": {
        "readings": ["か", "け", "げ"],
        "type": "comp_indicative"
    },
    "区": {
        "readings": ["く"],
        "type": "comp_indicative"
    },
    "反": {
        "readings": ["はん", "ほん", "たん"],
        "type": "comp_indicative"
    },
    "央": {
        "readings": ["おう", "よう", "えい"],
        "type": "unknown"
    },
    "平": {
        "readings": ["へい", "びょう", "ひょう"],
        "phonetic": "平",
        "type": "unknown"
    },
    "申": {
        "readings": ["しん"],
        "type": "hieroglyph"
    },
    "世": {
        "readings": ["せい", "セ"],
        "type": "hieroglyph"
    },
    "由": {
        "readings": ["ゆ", "ゆう", "ゆい"],
        "type": "hieroglyph"
    },
    "氷": {
        "readings": ["ひょう"],
        "type": "comp_indicative"
    },
    "主": {
        "readings": ["しゅ", "す"],
        "type": "hieroglyph"
    },
    "仕": {
        "readings": ["し", "じ"],
        "type": "unknown"
    },
    "他": {
        "readings": ["た"],
        "phonetic": "也",
        "type": "comp_phonetic"
    },
    "代": {
        "readings": ["だい", "たい"],
        "phonetic": "弋",
        "type": "comp_phonetic"
    },
    "写": {
        "readings": ["しゃ"],
        "type": "unknown"
    },
    "号": {
        "readings": ["ごう"],
        "type": "unknown"
    },
    "去": {
        "readings": ["きょ", "こ"],
        "type": "unknown"
    },
    "打": {
        "readings": ["だ", "ちょう", "てい"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "皮": {
        "readings": ["ひ"],
        "type": "hieroglyph"
    },
    "皿": {
        "readings": ["べい"],
        "type": "hieroglyph"
    },
    "礼": {
        "readings": ["れい", "ライ"],
        "type": "unknown",
        "comment": "obscure mark 豊"
    },
    "両": {
        "readings": ["りょう"],
        "type": "unknown"
    },
    "曲": {
        "readings": ["キョク"],
        "type": "hieroglyph"
    },
    "向": {
        "readings": ["こう", "きょう"],
        "type": "unknown"
    },
    "州": {
        "readings": ["しゅう"],
        "type": "hieroglyph"
    },
    "全": {
        "readings": ["ぜん"],
        "type": "hieroglyph"
    },
    "次": {
        "readings": ["じ", "し"],
        "type": "comp_indicative"
    },
    "安": {
        "readings": ["あん"],
        "type": "comp_indicative"
    },
    "守": {
        "readings": ["しゅ", "す"],
        "type": "comp_indicative"
    },
    "式": {
        "readings": ["しき", "しょく"],
        "phonetic": "弋",
        "type": "comp_phonetic"
    },
    "死": {
        "readings": ["し"],
        "type": "comp_indicative"
    },
    "列": {
        "readings": ["れつ"],
        "type": "comp_indicative"
    },
    "羊": {
        "readings": ["よう"],
        "type": "hieroglyph"
    },
    "有": {
        "readings": ["ゆう", "う"],
        "type": "comp_indicative"
    },
    "血": {
        "readings": ["けつ"],
        "type": "comp_indicative"
    },
    "住": {
        "readings": ["じゅう"],
        "phonetic": "主",
        "type": "comp_phonetic"
    },
    "助": {
        "readings": ["じょ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "医": {
        "readings": ["い"],
        "type": "comp_indicative"
    },
    "君": {
        "readings": ["くん"],
        "type": "comp_indicative"
    },
    "坂": {
        "readings": ["はん", "ばん"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "局": {
        "readings": ["キョク"],
        "type": "unknown"
    },
    "役": {
        "readings": ["やく", "えき"],
        "type": "comp_indicative"
    },
    "投": {
        "readings": ["とう"],
        "type": "comp_indicative"
    },
    "対": {
        "readings": ["たい", "ツイ"],
        "type": "comp_indicative"
    },
    "決": {
        "readings": ["けつ"],
        "phonetic": "夬",
        "type": "comp_phonetic"
    },
    "究": {
        "readings": ["きゅう", "く"],
        "phonetic": "九",
        "type": "comp_phonetic"
    },
    "豆": {
        "readings": ["とう", "ず"],
        "type": "hieroglyph"
    },
    "身": {
        "readings": ["しん"],
        "type": "indicative"
    },
    "返": {
        "readings": ["へん", "はん", "ほん"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "表": {
        "readings": ["ひょう"],
        "type": "comp_indicative"
    },
    "事": {
        "readings": ["じ", "ず"],
        "type": "unknown"
    },
    "育": {
        "readings": ["イク"],
        "type": "comp_indicative"
    },
    "使": {
        "readings": ["し"],
        "phonetic": "史",
        "type": "comp_phonetic"
    },
    "命": {
        "readings": ["めい", "みょう"],
        "type": "comp_indicative"
    },
    "味": {
        "readings": ["み", "び"],
        "phonetic": "未",
        "type": "comp_phonetic"
    },
    "幸": {
        "readings": ["こう"],
        "type": "hieroglyph"
    },
    "始": {
        "readings": ["し"],
        "type": "unknown"
    },
    "実": {
        "readings": ["じつ"],
        "type": "comp_indicative"
    },
    "定": {
        "readings": ["てい", "じょう"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "岸": {
        "readings": ["がん"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "所": {
        "readings": ["しょ", "そ"],
        "phonetic": "戸",
        "type": "comp_phonetic"
    },
    "放": {
        "readings": ["ほう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "昔": {
        "readings": ["せき", "しゃく"],
        "type": "comp_indicative"
    },
    "板": {
        "readings": ["はん", "ばん"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "泳": {
        "readings": ["えい"],
        "phonetic": "永",
        "type": "comp_phonetic"
    },
    "注": {
        "readings": ["ちゅう"],
        "phonetic": "主",
        "type": "comp_phonetic"
    },
    "波": {
        "readings": ["は"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "油": {
        "readings": ["ゆ", "ゆう"],
        "phonetic": "由",
        "type": "comp_phonetic"
    },
    "受": {
        "readings": ["じゅ", "ず"],
        "type": "comp_indicative"
    },
    "物": {
        "readings": ["ぶつ", "もつ"],
        "phonetic": "勿",
        "type": "comp_phonetic"
    },
    "具": {
        "readings": ["ぐ"],
        "type": "comp_indicative"
    },
    "委": {
        "readings": ["い"],
        "type": "unknown"
    },
    "和": {
        "readings": ["わ", "お", "か"],
        "type": "unknown"
    },
    "者": {
        "readings": ["しゃ"],
        "type": "unknown"
    },
    "取": {
        "readings": ["しゅ"],
        "type": "comp_indicative"
    },
    "服": {
        "readings": ["ふく"],
        "phonetic": "𠬝",
        "type": "comp_phonetic"
    },
    "苦": {
        "readings": ["く"],
        "phonetic": "古",
        "type": "comp_phonetic"
    },
    "重": {
        "readings": ["じゅう", "ちょう"],
        "type": "unknown"
    },
    "乗": {
        "readings": ["じょう", "しょう"],
        "type": "unknown"
    },
    "係": {
        "readings": ["けい"],
        "phonetic": "系",
        "type": "comp_phonetic"
    },
    "品": {
        "readings": ["ひん", "ほん"],
        "type": "comp_indicative"
    },
    "客": {
        "readings": ["キャク", "かく"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "県": {
        "readings": ["けん"],
        "type": "comp_indicative"
    },
    "屋": {
        "readings": ["おく"],
        "type": "comp_indicative"
    },
    "炭": {
        "readings": ["たん"],
        "type": "unknown"
    },
    "度": {
        "readings": ["ど", "と", "たく"],
        "type": "unknown",
        "comment": "maybe obscure phonetic 庶"
    },
    "待": {
        "readings": ["たい"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "急": {
        "readings": ["きゅう"],
        "phonetic": "及",
        "type": "comp_phonetic"
    },
    "指": {
        "readings": ["し"],
        "phonetic": "旨",
        "type": "comp_phonetic"
    },
    "持": {
        "readings": ["じ", "ち"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "拾": {
        "readings": ["しゅう", "じゅう"],
        "phonetic": "合",
        "type": "comp_phonetic"
    },
    "昭": {
        "readings": ["しょう"],
        "phonetic": "召",
        "type": "comp_phonetic"
    },
    "相": {
        "readings": ["そう", "しょう"],
        "type": "comp_indicative"
    },
    "柱": {
        "readings": ["ちゅう"],
        "phonetic": "主",
        "type": "comp_phonetic"
    },
    "洋": {
        "readings": ["よう"],
        "phonetic": "羊",
        "type": "comp_phonetic"
    },
    "畑": {
        "readings": [],
        "type": "kokuji"
    },
    "界": {
        "readings": ["かい"],
        "phonetic": "介",
        "type": "comp_phonetic"
    },
    "発": {
        "readings": ["はつ", "ほつ"],
        "phonetic": "癶",
        "type": "comp_phonetic"
    },
    "研": {
        "readings": ["けん", "げん"],
        "phonetic": "幵",
        "type": "comp_phonetic"
    },
    "神": {
        "readings": ["しん", "じん"],
        "phonetic": "申",
        "type": "comp_phonetic"
    },
    "秒": {
        "readings": ["びょう"],
        "type": "comp_indicative"
    },
    "級": {
        "readings": ["きゅう"],
        "phonetic": "及",
        "type": "comp_phonetic"
    },
    "美": {
        "readings": ["び", "み"],
        "type": "comp_indicative"
    },
    "負": {
        "readings": ["ふ", "ぶ", "ふう"],
        "type": "comp_indicative"
    },
    "送": {
        "readings": ["そう"],
        "phonetic": "关",
        "type": "comp_phonetic"
    },
    "追": {
        "readings": ["つい"],
        "type": "unknown"
    },
    "面": {
        "readings": ["めん", "べん"],
        "type": "unknown"
    },
    "島": {
        "readings": ["とう"],
        "type": "comp_indicative"
    },
    "勉": {
        "readings": ["べん"],
        "phonetic": "免",
        "type": "comp_phonetic"
    },
    "倍": {
        "readings": ["ばい", "はい"],
        "phonetic": "咅",
        "type": "comp_phonetic"
    },
    "真": {
        "readings": ["しん"],
        "type": "unknown"
    },
    "員": {
        "readings": ["いん"],
        "type": "indicative"
    },
    "宮": {
        "readings": ["きゅう", "ぐう", "く"],
        "type": "unknown"
    },
    "庫": {
        "readings": ["こ", "く"],
        "type": "comp_indicative"
    },
    "庭": {
        "readings": ["てい"],
        "phonetic": "廷",
        "type": "comp_phonetic"
    },
    "旅": {
        "readings": ["りょ", "ろ"],
        "phonetic": "㫃",
        "type": "comp_phonetic"
    },
    "根": {
        "readings": ["こん"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "酒": {
        "readings": ["しゅ"],
        "type": "unknown"
    },
    "消": {
        "readings": ["しょう"],
        "phonetic": "肖",
        "type": "comp_phonetic"
    },
    "流": {
        "readings": ["リュウ・ル"],
        "phonetic": "㐬",
        "type": "comp_phonetic"
    },
    "病": {
        "readings": ["びょう", "へい"],
        "phonetic": "丙",
        "type": "comp_phonetic"
    },
    "息": {
        "readings": ["そく"],
        "type": "comp_indicative"
    },
    "荷": {
        "readings": ["か"],
        "type": "unknown",
        "comment": "TODO: phonetic mark 何"
    },
    "起": {
        "readings": ["き"],
        "type": "unknown",
        "comment": "obscure tone mark 巳, doesn't fit"
    },
    "速": {
        "readings": ["そく"],
        "phonetic": "束",
        "type": "comp_phonetic"
    },
    "配": {
        "readings": ["はい"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "院": {
        "readings": ["いん"],
        "type": "unknown",
        "comment": "obscure tone mark 奐"
    },
    "悪": {
        "readings": ["あく", "お"],
        "phonetic": "亜",
        "type": "comp_phonetic"
    },
    "商": {
        "readings": ["しょう"],
        "phonetic": "章",
        "type": "comp_phonetic"
    },
    "動": {
        "readings": ["どう", "とう"],
        "phonetic": "重",
        "type": "comp_phonetic"
    },
    "宿": {
        "readings": ["しゅく", "すく"],
        "type": "unknown"
    },
    "帳": {
        "readings": ["ちょう"],
        "phonetic": "長",
        "type": "comp_phonetic"
    },
    "族": {
        "readings": ["ぞく"],
        "type": "comp_indicative"
    },
    "深": {
        "readings": ["しん"],
        "type": "unknown",
        "comment": "obscure phonetic 罙 (TODO search)"
    },
    "球": {
        "readings": ["きゅう"],
        "phonetic": "求",
        "type": "comp_phonetic"
    },
    "祭": {
        "readings": ["さい"],
        "type": "comp_indicative"
    },
    "第": {
        "readings": ["だい", "てい"],
        "phonetic": "弟",
        "type": "comp_phonetic"
    },
    "笛": {
        "readings": ["テキ", "じゃく"],
        "phonetic": "由",
        "type": "comp_phonetic"
    },
    "終": {
        "readings": ["しゅう"],
        "type": "unknown",
        "comment": "obscure and not fitting tone mark 冬"
    },
    "習": {
        "readings": ["しゅう", "じゅう"],
        "type": "unknown"
    },
    "転": {
        "readings": ["てん"],
        "phonetic": "専",
        "type": "comp_phonetic"
    },
    "進": {
        "readings": ["しん"],
        "phonetic": "隹",
        "type": "comp_phonetic"
    },
    "都": {
        "readings": ["と", "つ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "部": {
        "readings": ["ぶ", "ほう", "ほ"],
        "phonetic": "咅",
        "type": "comp_phonetic"
    },
    "問": {
        "readings": ["もん", "ぶん"],
        "phonetic": "門",
        "type": "comp_phonetic"
    },
    "章": {
        "readings": ["しょう"],
        "type": "unknown"
    },
    "寒": {
        "readings": ["かん"],
        "type": "comp_indicative"
    },
    "暑": {
        "readings": ["しょ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "植": {
        "readings": ["しょく", "ち"],
        "phonetic": "直",
        "type": "comp_phonetic"
    },
    "温": {
        "readings": ["おん", "うん"],
        "type": "unknown",
        "comment": "obscure tone mark 昷 or 𥁕"
    },
    "湖": {
        "readings": ["こ"],
        "type": "unknown",
        "comment": "obscure tone mark 胡"
    },
    "港": {
        "readings": ["こう"],
        "type": "unknown",
        "comment": "obscure tone mark 巷"
    },
    "湯": {
        "readings": ["とう", "しょう"],
        "phonetic": "昜",
        "type": "comp_phonetic"
    },
    "登": {
        "readings": ["とう", "と"],
        "phonetic": "豆",
        "type": "comp_phonetic"
    },
    "短": {
        "readings": ["たん"],
        "phonetic": "豆",
        "type": "comp_phonetic"
    },
    "童": {
        "readings": ["どう", "とう"],
        "type": "unknown"
    },
    "等": {
        "readings": ["とう"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "筆": {
        "readings": ["ひつ"],
        "phonetic": "聿",
        "type": "comp_phonetic"
    },
    "着": {
        "readings": [],
        "type": "unprocessed"
    },
    "期": {
        "readings": ["き", "ご"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "勝": {
        "readings": [],
        "type": "unprocessed"
    },
    "葉": {
        "readings": [],
        "type": "unprocessed"
    },
    "落": {
        "readings": [],
        "type": "unprocessed"
    },
    "軽": {
        "readings": ["けい", "きん"],
        "phonetic": "圣",
        "type": "comp_phonetic"
    },
    "運": {
        "readings": [],
        "type": "unprocessed"
    },
    "遊": {
        "readings": [],
        "type": "unprocessed"
    },
    "開": {
        "readings": [],
        "type": "unprocessed"
    },
    "階": {
        "readings": ["かい"],
        "phonetic": "皆",
        "type": "comp_phonetic"
    },
    "陽": {
        "readings": ["よう"],
        "phonetic": "昜",
        "type": "comp_phonetic"
    },
    "集": {
        "readings": ["しゅう"],
        "type": "comp_indicative"
    },
    "悲": {
        "readings": ["ひ"],
        "phonetic": "非",
        "type": "comp_phonetic"
    },
    "飲": {
        "readings": ["いん", "おん"],
        "type": "comp_indicative"
    },
    "歯": {
        "readings": ["し"],
        "phonetic": "止",
        "type": "comp_phonetic"
    },
    "業": {
        "readings": [],
        "type": "unprocessed"
    },
    "感": {
        "readings": ["かん"],
        "phonetic": "咸",
        "type": "comp_phonetic"
    },
    "想": {
        "readings": ["そう", "そ"],
        "phonetic": "相",
        "type": "comp_phonetic"
    },
    "暗": {
        "readings": ["あん"],
        "phonetic": "音",
        "type": "comp_phonetic"
    },
    "漢": {
        "readings": ["かん"],
        "phonetic": "𦰩",
        "type": "comp_phonetic"
    },
    "福": {
        "readings": ["ふく"],
        "phonetic": "畐",
        "type": "comp_phonetic"
    },
    "詩": {
        "readings": ["し"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "路": {
        "readings": ["ろ"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "農": {
        "readings": ["のう"],
        "type": "comp_indicative"
    },
    "鉄": {
        "readings": [],
        "type": "unprocessed"
    },
    "意": {
        "readings": [],
        "type": "unprocessed"
    },
    "様": {
        "readings": ["よう"],
        "phonetic": "羕",
        "type": "comp_phonetic"
    },
    "緑": {
        "readings": ["リョク", "ろく"],
        "phonetic": "彔",
        "type": "comp_phonetic"
    },
    "練": {
        "readings": [],
        "type": "unprocessed"
    },
    "銀": {
        "readings": ["ギン"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "駅": {
        "readings": ["えき"],
        "phonetic": "尺",
        "type": "comp_phonetic"
    },
    "鼻": {
        "readings": ["び"],
        "type": "unknown"
    },
    "横": {
        "readings": ["おう", "こう"],
        "phonetic": "黄",
        "type": "comp_phonetic"
    },
    "箱": {
        "readings": ["しょう", "そう"],
        "phonetic": "相",
        "type": "comp_phonetic"
    },
    "談": {
        "readings": ["だん", "たん"],
        "phonetic": "炎",
        "type": "comp_phonetic"
    },
    "調": {
        "readings": ["ちょう"],
        "phonetic": "周",
        "type": "comp_phonetic"
    },
    "橋": {
        "readings": ["きょう"],
        "phonetic": "喬",
        "type": "comp_phonetic"
    },
    "整": {
        "readings": ["せい"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "薬": {
        "readings": ["やく"],
        "phonetic": "楽",
        "type": "comp_phonetic"
    },
    "館": {
        "readings": ["かん"],
        "phonetic": "官",
        "type": "comp_phonetic"
    },
    "題": {
        "readings": ["だい", "てい"],
        "phonetic": "是",
        "type": "comp_phonetic"
    },


    "士": {
        "readings": ["し"],
        "type": "unknown"
    },
    "不": {
        "readings": ["ふ", "ぶ"],
        "type": "hieroglyph"
    },
    "夫": {
        "readings": ["ふ", "ふう", "ぶ"],
        "type": "hieroglyph"
    },
    "欠": {
        "readings": ["けつ", "けん"],
        "type": "unknown"
    },
    "氏": {
        "readings": ["し"],
        "type": "unknown"
    },
    "民": {
        "readings": ["みん"],
        "type": "unknown"
    },
    "史": {
        "readings": ["し"],
        "type": "comp_indicative"
    },
    "必": {
        "readings": ["ひつ"],
        "type": "unknown"
    },
    "失": {
        "readings": ["しつ", "いつ"],
        "phonetic": "失",
        "type": "unknown"
    },
    "包": {
        "readings": ["ほう"],
        "type": "hieroglyph"
    },
    "末": {
        "readings": ["まつ", "ばつ"],
        "type": "indicative"
    },
    "未": {
        "readings": ["み", "び"],
        "type": "hieroglyph"
    },
    "以": {
        "readings": ["い"],
        "type": "unknown"
    },
    "付": {
        "readings": ["ふ"],
        "type": "comp_indicative"
    },
    "令": {
        "readings": ["れい", "りょう"],
        "type": "comp_indicative"
    },
    "加": {
        "readings": ["か"],
        "type": "unknown"
    },
    "司": {
        "readings": ["し", "す"],
        "type": "comp_indicative"
    },
    "功": {
        "readings": ["こう", "く"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "札": {
        "readings": ["さつ"],
        "type": "unknown"
    },
    "辺": {
        "readings": ["へん"],
        "type": "unknown",
        "comment": "simplified obscure tone mark 臱"
    },
    "印": {
        "readings": ["いん"],
        "type": "comp_indicative"
    },
    "争": {
        "readings": ["そう"],
        "type": "comp_indicative"
    },
    "仲": {
        "readings": ["ちゅう"],
        "phonetic": "中",
        "type": "comp_phonetic"
    },
    "伝": {
        "readings": ["でん"],
        "type": "unknown"
    },
    "共": {
        "readings": ["きょう"],
        "type": "comp_indicative"
    },
    "兆": {
        "readings": ["ちょう"],
        "type": "hieroglyph"
    },
    "各": {
        "readings": ["かく"],
        "type": "comp_indicative"
    },
    "好": {
        "readings": ["こう"],
        "type": "comp_indicative"
    },
    "成": {
        "readings": ["せい", "じょう"],
        "type": "unknown"
    },
    "灯": {
        "readings": ["とう"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "老": {
        "readings": ["ろう"],
        "type": "hieroglyph"
    },
    "衣": {
        "readings": ["い", "え"],
        "type": "hieroglyph"
    },
    "求": {
        "readings": ["きゅう", "ぐ"],
        "type": "hieroglyph"
    },
    "束": {
        "readings": ["そく"],
        "type": "comp_indicative"
    },
    "兵": {
        "readings": [],
        "type": "unprocessed"
    },
    "位": {
        "readings": ["い"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "低": {
        "readings": ["てい"],
        "phonetic": "氐",
        "type": "comp_phonetic"
    },
    "児": {
        "readings": [],
        "type": "unprocessed"
    },
    "冷": {
        "readings": ["れい"],
        "phonetic": "令",
        "type": "comp_phonetic"
    },
    "別": {
        "readings": [],
        "type": "unprocessed"
    },
    "努": {
        "readings": [],
        "type": "unprocessed"
    },
    "労": {
        "readings": ["ろう"],
        "phonetic": "熒",
        "type": "comp_phonetic"
    },
    "告": {
        "readings": ["こく"],
        "type": "unknown",
        "comment": "phonetic composition of obscure 囗 box radical"
    },
    "囲": {
        "readings": ["い"],
        "phonetic": "韋",
        "type": "comp_phonetic"
    },
    "完": {
        "readings": ["かん"],
        "type": "unknown",
        "comment": "maybe tone mark 元?"
    },
    "改": {
        "readings": ["かい"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "希": {
        "readings": ["き", "げ"],
        "type": "hieroglyph"
    },
    "折": {
        "readings": ["せつ", "じゃく"],
        "type": "comp_indicative"
    },
    "材": {
        "readings": ["ザイ", "さい"],
        "phonetic": "才",
        "type": "comp_phonetic"
    },
    "利": {
        "readings": ["り"],
        "type": "comp_indicative"
    },
    "臣": {
        "readings": ["しん", "じん"],
        "type": "hieroglyph"
    },
    "良": {
        "readings": ["りょう"],
        "type": "unknown"
    },
    "芸": {
        "readings": ["ゲイ", "うん"],
        "phonetic": "云",
        "type": "comp_phonetic",
        "comment": "there is a different kanji looking exactly the same, add reading"
    },
    "初": {
        "readings": ["しょ", "そ"],
        "type": "comp_indicative"
    },
    "果": {
        "readings": ["か"],
        "type": "hieroglyph"
    },
    "刷": {
        "readings": ["さつ"],
        "type": "unknown"
    },
    "卒": {
        "readings": ["そつ", "しゅつ"],
        "type": "unknown"
    },
    "念": {
        "readings": ["ねん"],
        "phonetic": "今",
        "type": "comp_phonetic"
    },
    "例": {
        "readings": ["れい"],
        "phonetic": "列",
        "type": "comp_phonetic"
    },
    "典": {
        "readings": ["てん"],
        "type": "comp_indicative"
    },
    "周": {
        "readings": ["しゅう", "す"],
        "type": "unknown"
    },
    "協": {
        "readings": ["きょう"],
        "type": "comp_indicative"
    },
    "参": {
        "readings": ["さん", "しん"],
        "type": "unknown"
    },
    "固": {
        "readings": ["こ"],
        "phonetic": "古",
        "type": "comp_phonetic"
    },
    "官": {
        "readings": ["かん"],
        "type": "comp_indicative"
    },
    "底": {
        "readings": ["てい"],
        "phonetic": "氐",
        "type": "comp_phonetic"
    },
    "府": {
        "readings": ["ふ"],
        "phonetic": "付",
        "type": "comp_phonetic"
    },
    "径": {
        "readings": ["けい"],
        "phonetic": "圣",
        "type": "comp_phonetic"
    },
    "松": {
        "readings": ["しょう"],
        "phonetic": "公",
        "type": "comp_phonetic"
    },
    "毒": {
        "readings": ["どく"],
        "type": "comp_indicative"
    },
    "泣": {
        "readings": ["きゅう"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "治": {
        "readings": ["じ", "ち"],
        "type": "unknown",
        "comment": "TODO maybe phonetic 台=臺"
    },
    "法": {
        "readings": ["ほう", "ハッ", "ホッ"],
        "type": "comp_indicative"
    },
    "牧": {
        "readings": ["ぼく", "もく"],
        "type": "comp_indicative"
    },
        "的": {
        "readings": ["テキ"],
        "type": "unknown",
            "comment": "TODO: phonetic 的?"
    },
    "季": {
        "readings": ["き"],
        "type": "comp_indicative"
    },
    "英": {
        "readings": ["えい"],
        "phonetic": "央",
        "type": "comp_phonetic"
    },
    "芽": {
        "readings": ["が"],
        "phonetic": "牙",
        "type": "comp_phonetic"
    },
    "単": {
        "readings": ["たん", "ぜん"],
        "type": "unknown"
    },
    "省": {
        "readings": [],
        "type": "unprocessed"
    },
    "変": {
        "readings": [],
        "type": "unprocessed"
    },
    "信": {
        "readings": ["しん"],
        "type": "unknown"
    },
    "便": {
        "readings": ["ベン", "びん"],
        "type": "comp_indicative"
    },
    "軍": {
        "readings": [],
        "type": "unprocessed"
    },
    "勇": {
        "readings": ["ゆう", "よう"],
        "phonetic": "甬",
        "type": "comp_phonetic"
    },
    "型": {
        "readings": [],
        "type": "unprocessed"
    },
    "建": {
        "readings": ["けん", "こん"],
        "type": "comp_indicative"
    },
    "昨": {
        "readings": ["さく"],
        "phonetic": "乍",
        "type": "comp_phonetic"
    },
    "栄": {
        "readings": ["えい"],
        "phonetic": "熒",
        "type": "comp_phonetic"
    },
    "浅": {
        "readings": [],
        "type": "unprocessed"
    },
    "胃": {
        "readings": [],
        "type": "unprocessed"
    },
    "祝": {
        "readings": ["シュク", "しゅう"],
        "type": "comp_indicative"
    },
    "紀": {
        "readings": ["き"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "約": {
        "readings": ["やく"],
        "phonetic": "勺",
        "type": "comp_phonetic"
    },
    "要": {
        "readings": ["よう"],
        "type": "comp_indicative"
    },
    "飛": {
        "readings": [],
        "type": "unprocessed"
    },
    "候": {
        "readings": ["こう"],
        "phonetic": "侯",
        "type": "comp_phonetic"
    },
    "借": {
        "readings": ["しゃく", "しゃ"],
        "phonetic": "昔",
        "type": "comp_phonetic"
    },
    "倉": {
        "readings": ["そう"],
        "type": "unknown"
    },
    "孫": {
        "readings": [],
        "type": "unprocessed"
    },
    "案": {
        "readings": ["あん"],
        "phonetic": "安",
        "type": "comp_phonetic"
    },
    "害": {
        "readings": [],
        "type": "unprocessed"
    },
    "帯": {
        "readings": [],
        "type": "unprocessed"
    },
    "席": {
        "readings": [],
        "type": "unprocessed"
    },
    "徒": {
        "readings": ["と", "ず"],
        "type": "comp_indicative"
    },
    "挙": {
        "readings": [],
        "type": "unprocessed"
    },
    "梅": {
        "readings": [],
        "type": "unprocessed"
    },
    "残": {
        "readings": [],
        "type": "unprocessed"
    },
    "殺": {
        "readings": [],
        "type": "unprocessed"
    },
    "浴": {
        "readings": ["よく"],
        "phonetic": "谷",
        "type": "comp_phonetic"
    },
    "特": {
        "readings": ["とく", "どく"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "笑": {
        "readings": ["しょう"],
        "phonetic": "关",
        "type": "comp_phonetic"
    },
    "粉": {
        "readings": [],
        "phonetic": "分",
        "type": "comp_phonetic"
    },
    "料": {
        "readings": [],
        "type": "unprocessed"
    },
    "差": {
        "readings": ["さ", "し"],
        "phonetic": "左",
        "type": "comp_phonetic"
    },
    "脈": {
        "readings": [],
        "type": "unprocessed"
    },
    "航": {
        "readings": [],
        "type": "unprocessed"
    },
    "訓": {
        "readings": [],
        "type": "unprocessed"
    },
    "連": {
        "readings": ["れん"],
        "type": "comp_indicative"
    },
    "郡": {
        "readings": ["グン", "くん"],
        "phonetic": "君",
        "type": "comp_phonetic"
    },
    "巣": {
        "readings": [],
        "type": "unprocessed"
    },
    "健": {
        "readings": [],
        "type": "unprocessed"
    },
    "側": {
        "readings": ["そく", "しょく"],
        "phonetic": "則",
        "type": "comp_phonetic"
    },
    "停": {
        "readings": [],
        "type": "unprocessed"
    },
    "副": {
        "readings": ["ふく"],
        "phonetic": "畐",
        "type": "comp_phonetic"
    },
    "唱": {
        "readings": [],
        "type": "unprocessed"
    },
    "堂": {
        "readings": ["どう", "とう"],
        "phonetic": "尚",
        "type": "comp_phonetic"
    },
    "康": {
        "readings": [],
        "type": "unprocessed"
    },
    "得": {
        "readings": ["とく"],
        "type": "unknown"
    },
    "救": {
        "readings": ["きゅう", "ぐ", "く"],
        "phonetic": "求",
        "type": "comp_phonetic"
    },
    "械": {
        "readings": [],
        "type": "unprocessed"
    },
    "清": {
        "readings": ["せい", "しょう", "しん"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "望": {
        "readings": ["ぼう", "もう"],
        "phonetic": "亡",
        "type": "comp_phonetic"
    },
    "産": {
        "readings": ["さん"],
        "type": "comp_indicative"
    },
    "菜": {
        "readings": ["さい"],
        "phonetic": "采",
        "type": "comp_phonetic"
    },
    "票": {
        "readings": ["ひょう"],
        "type": "comp_indicative"
    },
    "貨": {
        "readings": ["か"],
        "phonetic": "化",
        "type": "comp_phonetic"
    },
    "敗": {
        "readings": ["はい", "ばい"],
        "phonetic": "貝",
        "type": "comp_phonetic"
    },
    "陸": {
        "readings": [],
        "type": "unprocessed"
    },
    "博": {
        "readings": ["はく", "ばく"],
        "phonetic": "尃",
        "type": "comp_phonetic"
    },
    "喜": {
        "readings": [],
        "type": "unprocessed"
    },
    "順": {
        "readings": [],
        "type": "unprocessed"
    },
    "街": {
        "readings": ["がい", "かい"],
        "phonetic": "圭",
        "type": "comp_phonetic"
    },
    "散": {
        "readings": [],
        "type": "unprocessed"
    },
    "景": {
        "readings": ["けい", "えい"],
        "phonetic": "京",
        "type": "comp_phonetic"
    },
    "最": {
        "readings": ["さい"],
        "type": "unknown"
    },
    "量": {
        "readings": ["りょう"],
        "type": "unknown"
    },
    "満": {
        "readings": ["まん", "ばん"],
        "phonetic": "㒼",
        "type": "comp_phonetic"
    },
    "焼": {
        "readings": [],
        "type": "unprocessed"
    },
    "然": {
        "readings": [],
        "type": "unprocessed"
    },
    "無": {
        "readings": ["む", "ぶ"],
        "type": "hieroglyph"
    },
    "給": {
        "readings": ["きゅう"],
        "phonetic": "合",
        "type": "comp_phonetic"
    },
    "結": {
        "readings": ["けつ", "ケチ", "けい"],
        "phonetic": "吉",
        "type": "comp_phonetic"
    },
    "覚": {
        "readings": [],
        "type": "unprocessed"
    },
    "象": {
        "readings": ["しょう", "ぞう"],
        "type": "hieroglyph"
    },
    "貯": {
        "readings": ["ちょ"],
        "type": "unknown",
        "comment": "obscure tone mark 宁"
    },
    "費": {
        "readings": [],
        "type": "unprocessed"
    },
    "達": {
        "readings": ["たつ", "だち", "たち"],
        "phonetic": "羍",
        "type": "comp_phonetic"
    },
    "隊": {
        "readings": ["たい", "つい"],
        "phonetic": "㒸",
        "type": "comp_phonetic"
    },
    "飯": {
        "readings": ["はん"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "働": {
        "readings": [],
        "type": "kokuji"
    },
    "塩": {
        "readings": [],
        "type": "unprocessed"
    },
    "戦": {
        "readings": ["せん"],
        "phonetic": "単",
        "type": "comp_phonetic"
    },
    "極": {
        "readings": ["きょく", "ごく"],
        "type": "unknown",
        "comment": "obscure tone mark 亟"
    },
    "照": {
        "readings": [],
        "type": "unprocessed"
    },
    "愛": {
        "readings": [],
        "type": "unprocessed"
    },
    "節": {
        "readings": [],
        "type": "unprocessed"
    },
    "続": {
        "readings": ["ぞく", "しょく"],
        "phonetic": "売",
        "type": "comp_phonetic"
    },
    "置": {
        "readings": ["ち"],
        "phonetic": "直",
        "type": "comp_phonetic"
    },
    "腸": {
        "readings": ["ちょう"],
        "phonetic": "昜",
        "type": "comp_phonetic"
    },
    "辞": {
        "readings": [],
        "type": "unprocessed"
    },
    "試": {
        "readings": [],
        "type": "unprocessed"
    },
    "歴": {
        "readings": ["れき", "りゃく"],
        "phonetic": "厤",
        "type": "comp_phonetic"
    },
    "察": {
        "readings": [],
        "type": "unprocessed"
    },
    "旗": {
        "readings": ["き"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "漁": {
        "readings": [],
        "type": "unprocessed"
    },
    "種": {
        "readings": ["しゅ", "しょう"],
        "phonetic": "重",
        "type": "comp_phonetic"
    },
    "管": {
        "readings": ["かん"],
        "phonetic": "官",
        "type": "comp_phonetic"
    },
    "説": {
        "readings": ["せつ", "ゼイ", "えつ"],
        "phonetic": "兑",
        "type": "comp_phonetic"
    },
    "関": {
        "readings": ["かん"],
        "type": "unknown",
        "comment": "Obscure tone mark 丱"
    },
    "静": {
        "readings": ["せい", "じょう"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "億": {
        "readings": [],
        "type": "unprocessed"
    },
    "器": {
        "readings": ["き"],
        "type": "comp_indicative"
    },
    "賞": {
        "readings": ["しょう"],
        "phonetic": "尚",
        "type": "comp_phonetic"
    },
    "標": {
        "readings": ["ひょう"],
        "phonetic": "票",
        "type": "comp_phonetic"
    },
    "熱": {
        "readings": [],
        "type": "unprocessed"
    },
    "養": {
        "readings": ["よう"],
        "phonetic": "羊",
        "type": "comp_phonetic"
    },
    "課": {
        "readings": ["か"],
        "phonetic": "果",
        "type": "comp_phonetic"
    },
    "輪": {
        "readings": ["りん"],
        "phonetic": "侖",
        "type": "comp_phonetic"
    },
    "選": {
        "readings": ["せん"],
        "phonetic": "巽",
        "type": "comp_phonetic"
    },
    "機": {
        "readings": ["き"],
        "phonetic": "幾",
        "type": "comp_phonetic"
    },
    "積": {
        "readings": ["せき", "し", "しゃく"],
        "phonetic": "責",
        "type": "comp_phonetic"
    },
    "録": {
        "readings": ["ろく", "リョク"],
        "phonetic": "彔",
        "type": "comp_phonetic"
    },
    "観": {
        "readings": ["かん"],
        "phonetic": "雚",
        "type": "comp_phonetic"
    },
    "類": {
        "readings": ["るい"],
        "type": "unknown"
    },
    "験": {
        "readings": ["けん", "げん"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "願": {
        "readings": ["がん"],
        "phonetic": "原",
        "type": "comp_phonetic"
    },
    "鏡": {
        "readings": ["きょう"],
        "phonetic": "竟",
        "type": "comp_phonetic"
    },
    "競": {
        "readings": [],
        "type": "unprocessed"
    },
    "議": {
        "readings": ["ぎ"],
        "phonetic": "義",
        "type": "comp_phonetic"
    },


    "久": {
        "readings": [],
        "type": "unprocessed"
    },
    "仏": {
        "readings": ["ぶつ", "ふつ"],
        "phonetic": "弗",
        "type": "comp_phonetic"
    },
    "支": {
        "readings": ["し"],
        "composition": ["十", "又"],
        "type": "comp_indicative"
    },
    "比": {
        "readings": ["ひ"],
        "type": "comp_indicative"
    },
    "可": {
        "readings": ["か", "こく"],
        "type": "comp_indicative"
    },
    "旧": {
        "readings": [],
        "type": "unprocessed"
    },
    "永": {
        "readings": ["えい", "よう"],
        "type": "unknown"
    },
    "句": {
        "readings": ["く", "こう"],
        "phonetic": "口",
        "type": "comp_phonetic"
    },
    "圧": {
        "readings": ["あつ", "おう"],
        "type": "unknown",
        "comment": "possbibly obscure tone mark 厭"
    },
    "弁": {
        "readings": ["べん"],
        "type": "hieroglyph"
    },
    "布": {
        "readings": ["ふ", "ほ"],
        "type": "unknown",
        "comment": "obscure tone mark 父"
    },
    "刊": {
        "readings": ["かん"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "犯": {
        "readings": ["はん", "ぼん"],
        "type": "unknown"
    },
    "示": {
        "readings": ["じ", "し"],
        "type": "unknown"
    },
    "再": {
        "readings": ["さい", "さ"],
        "type": "indicative"
    },
    "仮": {
        "readings": ["か"],
        "phonetic": "叚",
        "type": "comp_phonetic"
    },
    "件": {
        "readings": ["けん"],
        "type": "comp_indicative"
    },
    "任": {
        "readings": ["にん", "じん"],
        "phonetic": "壬",
        "type": "comp_phonetic"
    },
    "因": {
        "readings": ["いん"],
        "type": "comp_indicative"
    },
    "団": {
        "readings": ["だん", "とん", "たん"],
        "phonetic": "専",
        "type": "comp_phonetic"
    },
    "在": {
        "readings": [],
        "type": "unprocessed"
    },
    "舌": {
        "readings": ["ぜつ", "せつ"],
        "type": "hieroglyph"
    },
    "似": {
        "readings": [],
        "type": "unprocessed"
    },
    "余": {
        "readings": ["よ"],
        "type": "unknown"
    },
    "判": {
        "readings": ["はん", "ばん", "ほう"],
        "phonetic": "半",
        "type": "comp_phonetic"
    },
    "均": {
        "readings": [],
        "type": "unprocessed"
    },
    "志": {
        "readings": [],
        "type": "unprocessed"
    },
    "条": {
        "readings": ["じょう"],
        "phonetic": "攸",
        "type": "comp_phonetic"
    },
    "災": {
        "readings": ["さい"],
        "phonetic": "𢦏",
        "type": "comp_phonetic",
        "comment": "simplified version of 烖"
    },
    "応": {
        "readings": ["おう"],
        "type": "unknown",
        "comment": "simplified version of obscure tone mark 䧹"
    },
    "序": {
        "readings": ["じょ"],
        "phonetic": "予",
        "type": "comp_phonetic"
    },
    "快": {
        "readings": ["かい", "け"],
        "phonetic": "夬",
        "type": "comp_phonetic"
    },
    "技": {
        "readings": ["ぎ"],
        "phonetic": "支",
        "type": "comp_phonetic"
    },
    "状": {
        "readings": ["じょう"],
        "composition": ["犬", "爿"],
        "phonetic": "爿",
        "type": "comp_phonetic"
    },
    "防": {
        "readings": ["ぼう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "武": {
        "readings": ["ぶ", "む"],
        "type": "unknown"
    },
    "承": {
        "readings": ["しょう"],
        "type": "comp_indicative"
    },
    "価": {
        "readings": ["か"],
        "phonetic": "賈",
        "type": "comp_phonetic"
    },
    "舎": {
        "readings": ["しゃ"],
        "type": "unknown"
    },
    "券": {
        "readings": [],
        "type": "unprocessed"
    },
    "制": {
        "readings": ["せい"],
        "type": "comp_indicative"
    },
    "効": {
        "readings": ["こう"],
        "phonetic": "交",
        "type": "comp_phonetic"
    },
    "妻": {
        "readings": ["さい", "せい"],
        "type": "hieroglyph"
    },
    "居": {
        "readings": [],
        "type": "unprocessed"
    },
    "往": {
        "readings": ["おう"],
        "phonetic": "王",
        "type": "comp_phonetic"
    },
    "性": {
        "readings": ["せい", "しょう"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "招": {
        "readings": ["しょう"],
        "phonetic": "召",
        "type": "comp_phonetic"
    },
    "易": {
        "readings": ["えき", "い"],
        "type": "unknown"
    },
    "枝": {
        "readings": ["し", "き", "ぎ"],
        "phonetic": "支",
        "type": "comp_phonetic",
        "comment": "added き, ぎ, no reason found"
    },
    "河": {
        "readings": ["か"],
        "phonetic": "可",
        "type": "comp_phonetic"
    },
    "版": {
        "readings": ["はん"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "肥": {
        "readings": [],
        "type": "unprocessed"
    },
    "述": {
        "readings": ["じゅつ"],
        "phonetic": "朮",
        "type": "comp_phonetic"
    },
    "非": {
        "readings": ["ひ"],
        "type": "comp_indicative"
    },
    "保": {
        "readings": ["ほ", "ほう"],
        "phonetic": "呆",
        "type": "comp_phonetic"
    },
    "厚": {
        "readings": ["こう"],
        "type": "unknown",
        "comment": "obscure phonetic 㫗, related to 高"
    },
    "故": {
        "readings": ["こ"],
        "phonetic": "古",
        "type": "comp_phonetic"
    },
    "政": {
        "readings": ["せい", "しょう"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "査": {
        "readings": ["さ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "独": {
        "readings": ["どく", "とく"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "祖": {
        "readings": ["そ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "則": {
        "readings": ["そく"],
        "type": "comp_indicative"
    },
    "逆": {
        "readings": ["ぎゃく", "げき"],
        "phonetic": "屰",
        "type": "comp_phonetic"
    },
    "退": {
        "readings": ["たい"],
        "type": "comp_indicative"
    },
    "迷": {
        "readings": ["めい"],
        "phonetic": "米",
        "type": "comp_phonetic"
    },
    "限": {
        "readings": ["げん"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "師": {
        "readings": ["し"],
        "type": "comp_indicative"
    },
    "個": {
        "readings": ["こ", "か"],
        "phonetic": "固",
        "type": "comp_phonetic"
    },
    "修": {
        "readings": ["しゅう", "しゅ"],
        "phonetic": "攸",
        "type": "comp_phonetic"
    },
    "俵": {
        "readings": [],
        "type": "unprocessed"
    },
    "益": {
        "readings": ["えき", "やく"],
        "type": "comp_indicative"
    },
    "能": {
        "readings": ["のう"],
        "type": "unknown"
    },
    "容": {
        "readings": ["よう"],
        "phonetic": "谷",
        "type": "comp_phonetic"
    },
    "恩": {
        "readings": ["おん"],
        "phonetic": "因",
        "type": "comp_phonetic"
    },
    "格": {
        "readings": ["かく", "こう", "キャク"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "桜": {
        "readings": ["おう"],
        "type": "unknown",
        "comment": "obscure tone mark 嬰"
    },
    "留": {
        "readings": ["りゅう", "る"],
        "type": "unknown"
    },
    "破": {
        "readings": ["は"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "素": {
        "readings": [],
        "type": "unprocessed"
    },
    "耕": {
        "readings": ["こう"],
        "type": "unknown"
    },
    "財": {
        "readings": ["ザイ", "さい"],
        "phonetic": "才",
        "type": "comp_phonetic"
    },
    "造": {
        "readings": ["ぞう"],
        "phonetic": "告",
        "type": "comp_phonetic"
    },
    "率": {
        "readings": [],
        "type": "unprocessed"
    },
    "貧": {
        "readings": [],
        "phonetic": "分",
        "type": "comp_phonetic"
    },
    "基": {
        "readings": ["き"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "婦": {
        "readings": [],
        "type": "unprocessed"
    },
    "寄": {
        "readings": ["き"],
        "phonetic": "奇",
        "type": "comp_phonetic"
    },
    "常": {
        "readings": ["じょう"],
        "phonetic": "尚",
        "type": "comp_phonetic"
    },
    "張": {
        "readings": ["ちょう"],
        "phonetic": "長",
        "type": "comp_phonetic"
    },
    "術": {
        "readings": ["じゅつ", "しゅつ", "すい"],
        "phonetic": "朮",
        "type": "comp_phonetic"
    },
    "情": {
        "readings": ["じょう", "せい"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "採": {
        "readings": ["さい"],
        "phonetic": "采",
        "type": "comp_phonetic"
    },
    "授": {
        "readings": ["じゅ"],
        "phonetic": "受",
        "type": "comp_phonetic"
    },
    "接": {
        "readings": ["せつ", "しょう"],
        "phonetic": "妾",
        "type": "comp_phonetic"
    },
    "断": {
        "readings": ["だん"],
        "type": "comp_indicative"
    },
    "液": {
        "readings": ["えき"],
        "phonetic": "夜",
        "type": "comp_phonetic"
    },
    "混": {
        "readings": ["こん"],
        "phonetic": "昆",
        "type": "comp_phonetic"
    },
    "現": {
        "readings": ["げん"],
        "phonetic": "見",
        "type": "comp_phonetic"
    },
    "略": {
        "readings": ["りゃく"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "眼": {
        "readings": ["がん", "げん"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "務": {
        "readings": ["む", "ぶ"],
        "phonetic": "敄",
        "type": "comp_phonetic"
    },
    "移": {
        "readings": ["い"],
        "phonetic": "多",
        "type": "comp_phonetic"
    },
    "経": {
        "readings": ["けい", "きょう", "きん"],
        "phonetic": "圣",
        "type": "comp_phonetic"
    },
    "規": {
        "readings": ["き"],
        "type": "comp_indicative"
    },
    "許": {
        "readings": ["きょ", "こ"],
        "phonetic": "午",
        "type": "comp_phonetic"
    },
    "設": {
        "readings": ["せつ", "せち"],
        "type": "comp_indicative"
    },
    "責": {
        "readings": ["せき", "しゃく"],
        "phonetic": "朿",
        "type": "comp_phonetic"
    },
    "険": {
        "readings": ["けん"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "備": {
        "readings": ["び", "ひ"],
        "type": "unknown",
        "comment": "obscure 'quiver' phonetic"
    },
    "営": {
        "readings": ["えい"],
        "phonetic": "熒",
        "type": "comp_phonetic"
    },
    "報": {
        "readings": ["ほう"],
        "type": "comp_indicative"
    },
    "富": {
        "readings": ["ふ", "ふう"],
        "phonetic": "畐",
        "type": "comp_phonetic"
    },
    "属": {
        "readings": ["ぞく", "しょく"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "復": {
        "readings": ["ふく"],
        "phonetic": "复",
        "type": "comp_phonetic"
    },
    "提": {
        "readings": ["てい", "だい", "ちょう"],
        "phonetic": "是",
        "type": "comp_phonetic"
    },
    "検": {
        "readings": ["けん"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "減": {
        "readings": ["げん"],
        "phonetic": "咸",
        "type": "comp_phonetic"
    },
    "測": {
        "readings": ["そく"],
        "phonetic": "則",
        "type": "comp_phonetic"
    },
    "税": {
        "readings": ["ゼイ", "せい"],
        "phonetic": "兑",
        "type": "comp_phonetic"
    },
    "程": {
        "readings": [],
        "type": "unprocessed"
    },
    "絶": {
        "readings": [],
        "type": "unprocessed"
    },
    "統": {
        "readings": ["とう"],
        "type": "unknown",
        "comment": "maybe tone mark 充, but doesn't fit and looked different in the past."
    },
    "証": {
        "readings": ["しょう"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "評": {
        "readings": ["ひょう", "へい"],
        "phonetic": "平",
        "type": "comp_phonetic"
    },
    "賀": {
        "readings": ["が"],
        "phonetic": "加",
        "type": "comp_phonetic"
    },
    "貸": {
        "readings": ["たい"],
        "phonetic":  "代",
        "type": "comp_phonetic"
    },
    "貿": {
        "readings": [],
        "type": "unprocessed"
    },
    "過": {
        "readings": ["か"],
        "phonetic": "咼",
        "type": "comp_phonetic"
    },
    "勢": {
        "readings": [],
        "type": "unprocessed"
    },
    "幹": {
        "readings": ["かん"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "準": {
        "readings": ["しゅん", "じゅん", "せつ"],
        "phonetic": "隼",
        "type": "comp_phonetic"
    },
    "損": {
        "readings": ["そん"],
        "phonetic": "員",
        "type": "comp_phonetic"
    },
    "禁": {
        "readings": ["きん"],
        "composition": ["林", "示"],
        "type": "comp_indicative"
    },
    "罪": {
        "readings": ["ザイ"],
        "type": "comp_indicative"
    },
    "義": {
        "readings": ["ぎ"],
        "type": "comp_indicative"
    },
    "群": {
        "readings": ["グン"],
        "phonetic": "君",
        "type": "comp_phonetic"
    },
    "墓": {
        "readings": ["ぼ"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "夢": {
        "readings": ["む", "ぼう"],
        "type": "unknown"
    },
    "解": {
        "readings": ["かい", "げ"],
        "type": "comp_indicative"
    },
    "豊": {
        "readings": ["ほう"],
        "type": "hieroglyph"
    },
    "資": {
        "readings": ["し"],
        "phonetic": "次",
        "type": "comp_phonetic"
    },
    "鉱": {
        "readings": ["こう"],
        "phonetic": "広",
        "type": "comp_phonetic"
    },
    "預": {
        "readings": ["よ"],
        "phonetic": "予",
        "type": "comp_phonetic"
    },
    "飼": {
        "readings": ["し"],
        "phonetic": "司",
        "type": "comp_phonetic"
    },
    "像": {
        "readings": ["ぞう", "しょう"],
        "phonetic": "象",
        "type": "comp_phonetic"
    },
    "境": {
        "readings": ["きょう", "けい"],
        "phonetic": "竟",
        "type": "comp_phonetic"
    },
    "増": {
        "readings": ["ぞう", "そう"],
        "phonetic": "曽",
        "type": "comp_phonetic"
    },
    "徳": {
        "readings": [],
        "type": "unprocessed"
    },
    "慣": {
        "readings": ["かん"],
        "phonetic": "貫",
        "type": "comp_phonetic"
    },
    "態": {
        "readings": ["たい"],
        "decomposition": ["心", "能"],
        "phonetic": "能",
        "type": "comp_phonetic"
    },
    "構": {
        "readings": ["こう"],
        "phonetic": "冓",
        "type": "comp_phonetic"
    },
    "演": {
        "readings": ["えん"],
        "phonetic": "寅",
        "type": "comp_phonetic"
    },
    "精": {
        "readings": ["せい", "しょう"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "総": {
        "readings": ["そう"],
        "phonetic": "悤",
        "type": "comp_phonetic"
    },
    "綿": {
        "readings": [],
        "type": "unprocessed"
    },
    "製": {
        "readings": ["せい"],
        "phonetic": "制",
        "type": "comp_phonetic"
    },
    "複": {
        "readings": ["ふく"],
        "phonetic": "复",
        "type": "comp_phonetic"
    },
    "適": {
        "readings": ["てき", "せき"],
        "phonetic": "啇",
        "type": "comp_phonetic"
    },
    "酸": {
        "readings": [],
        "type": "unprocessed"
    },
    "銭": {
        "readings": ["せん", "ぜん"],
        "phonetic": "戔",
        "type": "comp_phonetic"
    },
    "銅": {
        "readings": ["どう"],
        "phonetic": "同",
        "type": "comp_phonetic"
    },
    "際": {
        "readings": [],
        "type": "unprocessed"
    },
    "雑": {
        "readings": ["さつ", "そう"],
        "phonetic": "集",
        "type": "comp_phonetic"
    },
    "領": {
        "readings": ["りょう"],
        "phonetic": "令",
        "type": "comp_phonetic"
    },
    "導": {
        "readings": ["どう"],
        "phonetic": "道",
        "type": "comp_phonetic"
    },
    "敵": {
        "readings": ["てき"],
        "phonetic": "啇",
        "type": "comp_phonetic"
    },
    "暴": {
        "readings": [],
        "type": "unprocessed"
    },
    "潔": {
        "readings": [],
        "type": "unprocessed"
    },
    "確": {
        "readings": ["かく"],
        "phonetic": "隺",
        "type": "comp_phonetic"
    },
    "編": {
        "readings": ["へん"],
        "phonetic": "扁",
        "type": "comp_phonetic"
    },
    "賛": {
        "readings": ["さん"],
        "type": "comp_indicative"
    },
    "質": {
        "readings": ["しつ", "シチ", "ち", "し"],
        "type": "comp_indicative"
    },
    "興": {
        "readings": ["こう", "きょう"],
        "type": "comp_indicative"
    },
    "衛": {
        "readings": ["えい", "え"],
        "phonetic": "韋",
        "type": "comp_phonetic"
    },
    "燃": {
        "readings": ["ねん", "ぜん"],
        "type": "unknown",
        "comment": "TODO: phonetic 然"
    },
    "築": {
        "readings": ["ちく"],
        "type": "unknown"
    },
    "輸": {
        "readings": ["ゆ", "しゅ"],
        "phonetic": "兪",
        "type": "comp_phonetic"
    },
    "績": {
        "readings": ["せき"],
        "phonetic": "責",
        "type": "comp_phonetic"
    },
    "講": {
        "readings": ["こう"],
        "phonetic": "冓",
        "type": "comp_phonetic"
    },
    "謝": {
        "readings": [],
        "type": "unprocessed"
    },
    "織": {
        "readings": ["しょく", "しき"],
        "phonetic": "戠",
        "type": "comp_phonetic"
    },
    "職": {
        "readings": ["しょく", "しき"],
        "phonetic": "戠",
        "type": "comp_phonetic"
    },
    "額": {
        "readings": ["がく"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "識": {
        "readings": ["しき", "し", "しょく"],
        "phonetic": "戠",
        "type": "comp_phonetic"
    },
    "護": {
        "readings": ["ご"],
        "type": "unknown"
    },


    "亡": {
        "readings": ["ぼう", "もう"],
        "type": "hieroglyph"
    },
    "寸": {
        "readings": ["そん", "すん"],
        "type": "comp_indicative"
    },
    "己": {
        "readings": ["こ", "き"],
        "type": "hieroglyph"
    },
    "干": {
        "readings": ["かん"],
        "type": "hieroglyph"
    },
    "仁": {
        "readings": ["じん", "に", "にん"],
        "type": "unknown"
    },
    "尺": {
        "readings": ["しゃく", "せき"],
        "type": "hieroglyph"
    },
    "片": {
        "readings": ["へん"],
        "type": "hieroglyph"
    },
    "冊": {
        "readings": ["さつ", "さく"],
        "type": "hieroglyph"
    },
    "収": {
        "readings": ["しゅう"],
        "type": "unknown"
    },
    "処": {
        "readings": ["しょ"],
        "type": "unknown"
    },
    "幼": {
        "readings": ["よう", "ゆう"],
        "type": "unknown"
    },
    "庁": {
        "readings": ["ちょう", "てい"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "穴": {
        "readings": ["けつ"],
        "type": "hieroglyph"
    },
    "危": {
        "readings": ["き"],
        "type": "unknown",
        "comment": "from obscure phonetic 厃"
    },
    "后": {
        "readings": ["こう", "ご"],
        "type": "comp_indicative"
    },
    "灰": {
        "readings": ["かい"],
        "type": "comp_indicative"
    },
    "吸": {
        "readings": ["きゅう"],
        "phonetic": "及",
        "type": "comp_phonetic"
    },
    "存": {
        "readings": ["そん", "ぞん"],
        "type": "unknown"
    },
    "宇": {
        "readings": ["う"],
        "phonetic": "于",
        "type": "comp_phonetic"
    },
    "宅": {
        "readings": ["たく"],
        "phonetic": "乇",
        "type": "comp_phonetic"
    },
    "机": {
        "readings": ["き"],
        "phonetic": "几",
        "type": "comp_phonetic"
    },
    "至": {
        "readings": [],
        "type": "unprocessed"
    },
    "否": {
        "readings": ["ひ"],
        "type": "comp_indicative"
    },
    "我": {
        "readings": ["が"],
        "type": "unknown"
    },
    "系": {
        "readings": ["けい"],
        "type": "comp_indicative"
    },
    "卵": {
        "readings": ["ラン"],
        "type": "hieroglyph"
    },
    "忘": {
        "readings": ["ぼう", "もう"],
        "phonetic": "亡",
        "type": "comp_phonetic"
    },
    "孝": {
        "readings": [],
        "type": "unprocessed"
    },
    "困": {
        "readings": ["こん"],
        "type": "unknown"
    },
    "批": {
        "readings": ["ひ"],
        "phonetic": "比",
        "type": "comp_phonetic"
    },
    "私": {
        "readings": ["し"],
        "phonetic": "厶",
        "type": "comp_phonetic"
    },
    "乱": {
        "readings": ["ラン", "ロン"],
        "type": "comp_indicative"
    },
    "垂": {
        "readings": ["すい"],
        "type": "unknown"
    },
    "乳": {
        "readings": ["ニュウ", "じゅ", "ニュ"],
        "type": "comp_indicative"
    },
    "供": {
        "readings": ["きょう", "く"],
        "phonetic": "共",
        "type": "comp_phonetic"
    },
    "並": {
        "readings": [],
        "type": "unprocessed"
    },
    "刻": {
        "readings": ["こく"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "呼": {
        "readings": [],
        "type": "unprocessed"
    },
    "宗": {
        "readings": [],
        "type": "unprocessed"
    },
    "宙": {
        "readings": ["ちゅう"],
        "phonetic": "由",
        "type": "comp_phonetic"
    },
    "宝": {
        "readings": [],
        "type": "unprocessed"
    },
    "届": {
        "readings": [],
        "type": "unprocessed"
    },
    "延": {
        "readings": ["えん"],
        "type": "unknown",
        "comment": "maybe phonetic mark 㢟"
    },
    "忠": {
        "readings": ["ちゅう"],
        "phonetic": "中",
        "type": "comp_phonetic"
    },
    "拡": {
        "readings": ["かく"],
        "phonetic": "広",
        "type": "comp_phonetic"
    },
    "担": {
        "readings": ["たん"],
        "phonetic": "旦",
        "type": "comp_phonetic"
    },
    "拝": {
        "readings": [],
        "type": "unprocessed"
    },
    "枚": {
        "readings": ["まい", "ばい"],
        "type": "comp_indicative"
    },
    "沿": {
        "readings": ["えん"],
        "phonetic": "㕣",
        "type": "comp_phonetic"
    },
    "若": {
        "readings": ["じゃく", "にゃく", "にゃ"],
        "type": "hieroglyph"
    },
    "看": {
        "readings": [],
        "type": "unprocessed"
    },
    "城": {
        "readings": ["じょう", "せい"],
        "phonetic": "成",
        "type": "comp_phonetic"
    },
    "奏": {
        "readings": [],
        "type": "unprocessed"
    },
    "姿": {
        "readings": ["し"],
        "phonetic": "次",
        "type": "comp_phonetic"
    },
    "宣": {
        "readings": ["せん"],
        "phonetic": "亘",
        "type": "comp_phonetic"
    },
    "専": {
        "readings": ["せん"],
        "type": "unknown",
        "comment": "obscure tone mark 叀?"
    },
    "巻": {
        "readings": [],
        "type": "unprocessed"
    },
    "律": {
        "readings": ["りつ", "りち"],
        "phonetic": "聿",
        "type": "comp_phonetic"
    },
    "映": {
        "readings": ["えい"],
        "phonetic": "央",
        "type": "comp_phonetic"
    },
    "染": {
        "readings": [],
        "type": "unprocessed"
    },
    "段": {
        "readings": [],
        "type": "unprocessed"
    },
    "洗": {
        "readings": ["せん"],
        "phonetic": "先",
        "type": "comp_phonetic"
    },
    "派": {
        "readings": [],
        "type": "unprocessed"
    },
    "皇": {
        "readings": [],
        "type": "unprocessed"
    },
    "泉": {
        "readings": ["せん"],
        "type": "hieroglyph"
    },
    "砂": {
        "readings": [],
        "type": "unprocessed"
    },
    "紅": {
        "readings": ["こう", "く中", "ぐ"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "背": {
        "readings": ["はい"],
        "phonetic": "北",
        "type": "comp_phonetic"
    },
    "肺": {
        "readings": [],
        "type": "unprocessed"
    },
    "革": {
        "readings": [],
        "type": "unprocessed"
    },
    "蚕": {
        "readings": [],
        "type": "unprocessed"
    },
    "値": {
        "readings": ["ち", "ちょく"],
        "phonetic": "直",
        "type": "comp_phonetic"
    },
    "俳": {
        "readings": ["はい"],
        "phonetic": "非",
        "type": "comp_phonetic"
    },
    "党": {
        "readings": ["とう"],
        "phonetic": "尚",
        "type": "comp_phonetic"
    },
    "展": {
        "readings": [],
        "type": "unprocessed"
    },
    "座": {
        "readings": ["ざ"],
        "phonetic": "坐",
        "type": "comp_phonetic"
    },
    "従": {
        "readings": ["じゅう", "しょう", "じゅ"],
        "type": "comp_indicative"
    },
    "株": {
        "readings": ["しゅ"],
        "phonetic": "朱",
        "type": "comp_phonetic"
    },
    "将": {
        "readings": [],
        "type": "unprocessed"
    },
    "班": {
        "readings": [],
        "type": "unprocessed"
    },
    "秘": {
        "readings": ["ひ"],
        "phonetic": "必",
        "type": "comp_phonetic"
    },
    "純": {
        "readings": ["ジュン"],
        "phonetic": "屯",
        "type": "comp_phonetic"
    },
    "納": {
        "readings": ["のう", "な", "なん", "とう"],
        "phonetic": "内",
        "type": "comp_phonetic"
    },
    "胸": {
        "readings": [],
        "type": "unprocessed"
    },
    "朗": {
        "readings": ["ろう"],
        "phonetic": "良",
        "type": "comp_phonetic"
    },
    "討": {
        "readings": ["とう"],
        "type": "unknown"
    },
    "射": {
        "readings": [],
        "type": "unprocessed"
    },
    "針": {
        "readings": ["しん"],
        "phonetic": "十",
        "type": "comp_phonetic"
    },
    "降": {
        "readings": [],
        "type": "unprocessed"
    },
    "除": {
        "readings": ["じ", "じ"],
        "phonetic": "余",
        "type": "comp_phonetic"
    },
    "陛": {
        "readings": [],
        "type": "unprocessed"
    },
    "骨": {
        "readings": ["コツ"],
        "type": "comp_indicative"
    },
    "域": {
        "readings": ["いき"],
        "phonetic": "或",
        "type": "comp_phonetic"
    },
    "密": {
        "readings": [],
        "type": "unprocessed"
    },
    "捨": {
        "readings": [],
        "type": "unprocessed"
    },
    "推": {
        "readings": ["すい"],
        "phonetic": "隹",
        "type": "comp_phonetic"
    },
    "探": {
        "readings": [],
        "type": "unprocessed"
    },
    "済": {
        "readings": [],
        "type": "unprocessed"
    },
    "異": {
        "readings": [],
        "type": "unprocessed"
    },
    "盛": {
        "readings": ["せい", "じょう"],
        "phonetic": "成",
        "type": "comp_phonetic"
    },
    "視": {
        "readings": ["し"],
        "phonetic": "示",
        "type": "comp_phonetic"
    },
    "窓": {
        "readings": ["そう"],
        "phonetic": "悤",
        "type": "comp_phonetic"
    },
    "翌": {
        "readings": ["よく"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "脳": {
        "readings": ["のう", "どう"],
        "type": "unknown"
    },
    "著": {
        "readings": [],
        "type": "unprocessed"
    },
    "訪": {
        "readings": ["ほう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "訳": {
        "readings": ["やく", "えき"],
        "phonetic": "尺",
        "type": "comp_phonetic"
    },
    "欲": {
        "readings": ["よく"],
        "phonetic": "谷",
        "type": "comp_phonetic"
    },
    "郷": {
        "readings": ["きょう", "ごう"],
        "type": "comp_indicative"
    },
    "郵": {
        "readings": ["ゆう"],
        "type": "comp_indicative",
        "comment": "phonetic of 垂? Sources say no"
    },
    "閉": {
        "readings": ["へい"],
        "type": "comp_indicative"
    },
    "頂": {
        "readings": ["ちょう", "てい"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "就": {
        "readings": [],
        "type": "unprocessed"
    },
    "善": {
        "readings": ["ぜん", "せん"],
        "type": "comp_indicative"
    },
    "尊": {
        "readings": ["そん"],
        "type": "comp_indicative"
    },
    "割": {
        "readings": [],
        "type": "unprocessed"
    },
    "創": {
        "readings": ["そう"],
        "phonetic": "倉",
        "type": "comp_phonetic"
    },
    "勤": {
        "readings": ["きん", "ごん"],
        "phonetic": "堇",
        "type": "comp_phonetic"
    },
    "裁": {
        "readings": ["さい"],
        "phonetic": "𢦏",
        "type": "comp_phonetic"
    },
    "揮": {
        "readings": [],
        "type": "unprocessed"
    },
    "敬": {
        "readings": ["けい", "きょう"],
        "type": "comp_indicative"
    },
    "晩": {
        "readings": [],
        "type": "unprocessed"
    },
    "棒": {
        "readings": [],
        "type": "unprocessed"
    },
    "痛": {
        "readings": ["つう", "とう"],
        "phonetic": "甬",
        "type": "comp_phonetic"
    },
    "筋": {
        "readings": ["きん"],
        "type": "unknown"
    },
    "策": {
        "readings": ["さく"],
        "phonetic": "朿",
        "type": "comp_phonetic"
    },
    "衆": {
        "readings": [],
        "type": "unprocessed"
    },
    "装": {
        "readings": [],
        "type": "unprocessed"
    },
    "補": {
        "readings": ["ほ", "ふ"],
        "phonetic": "甫",
        "type": "comp_phonetic"
    },
    "詞": {
        "readings": ["し"],
        "phonetic": "司",
        "type": "comp_phonetic"
    },
    "貴": {
        "readings": ["き"],
        "type": "comp_indicative"
    },
    "裏": {
        "readings": ["り"],
        "phonetic": "里",
        "type": "comp_phonetic"
    },
    "傷": {
        "readings": ["しょう"],
        "type": "unknown",
        "comment": "obscure phonetic 𠂉＋昜"
    },
    "暖": {
        "readings": [],
        "type": "unprocessed"
    },
    "源": {
        "readings": ["げん"],
        "phonetic": "原",
        "type": "comp_phonetic"
    },
    "聖": {
        "readings": ["せい", "しょう"],
        "phonetic": "𡈼",
        "type": "comp_phonetic"
    },
    "盟": {
        "readings": ["めい"],
        "phonetic": "明",
        "type": "comp_phonetic"
    },
    "絹": {
        "readings": ["けん"],
        "phonetic": "肙",
        "type": "comp_phonetic"
    },
    "署": {
        "readings": ["しょ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "腹": {
        "readings": ["ふく"],
        "phonetic": "复",
        "type": "comp_phonetic"
    },
    "蒸": {
        "readings": [],
        "type": "unprocessed"
    },
    "幕": {
        "readings": ["まく", "ばく"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "誠": {
        "readings": ["せい", "じょう"],
        "phonetic": "成",
        "type": "comp_phonetic"
    },
    "賃": {
        "readings": ["ちん", "じん"],
        "phonetic": "壬",
        "type": "comp_phonetic"
    },
    "疑": {
        "readings": ["ぎ"],
        "type": "comp_indicative"
    },
    "層": {
        "readings": ["そう"],
        "phonetic": "曽",
        "type": "comp_phonetic"
    },
    "模": {
        "readings": ["も", "ぼ"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "穀": {
        "readings": [],
        "type": "unprocessed"
    },
    "磁": {
        "readings": [],
        "type": "unprocessed"
    },
    "暮": {
        "readings": ["ぼ"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "誤": {
        "readings": ["ご"],
        "phonetic": "呉",
        "type": "comp_phonetic"
    },
    "誌": {
        "readings": [],
        "type": "unprocessed"
    },
    "認": {
        "readings": [],
        "type": "unprocessed"
    },
    "閣": {
        "readings": ["かく"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "障": {
        "readings": ["しょう"],
        "phonetic": "章",
        "type": "comp_phonetic"
    },
    "劇": {
        "readings": [],
        "type": "unprocessed"
    },
    "権": {
        "readings": ["けん", "ごん"],
        "phonetic": "雚",
        "type": "comp_phonetic"
    },
    "潮": {
        "readings": ["ちょう"],
        "phonetic": "朝",
        "type": "comp_phonetic"
    },
    "熟": {
        "readings": ["じゅく"],
        "phonetic": "孰",
        "type": "comp_phonetic"
    },
    "蔵": {
        "readings": ["ぞう", "そう"],
        "phonetic": "臧",
        "type": "comp_phonetic"
    },
    "諸": {
        "readings": ["しょ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "誕": {
        "readings": ["たん"],
        "phonetic": "延",
        "type": "comp_phonetic"
    },
    "論": {
        "readings": ["ロン"],
        "phonetic": "侖",
        "type": "comp_phonetic"
    },
    "遺": {
        "readings": [],
        "type": "unprocessed"
    },
    "奮": {
        "readings": ["ふん"],
        "phonetic": "奞",
        "type": "comp_phonetic"
    },
    "憲": {
        "readings": [],
        "type": "unprocessed"
    },
    "操": {
        "readings": [],
        "type": "unprocessed"
    },
    "樹": {
        "readings": [],
        "type": "unprocessed"
    },
    "激": {
        "readings": ["げき"],
        "type": "unknown",
        "comment": "obscure tone mark 敫"
    },
    "糖": {
        "readings": [],
        "type": "unprocessed"
    },
    "縦": {
        "readings": ["じゅう", "しょう"],
        "phonetic": "従",
        "type": "comp_phonetic"
    },
    "鋼": {
        "readings": ["こう"],
        "phonetic": "岡",
        "type": "comp_phonetic"
    },
    "厳": {
        "readings": [],
        "type": "unprocessed"
    },
    "優": {
        "readings": [],
        "type": "unprocessed"
    },
    "縮": {
        "readings": [],
        "type": "unprocessed"
    },
    "覧": {
        "readings": [],
        "type": "unprocessed"
    },
    "簡": {
        "readings": ["かん", "けん"],
        "phonetic": "間",
        "type": "comp_phonetic"
    },
    "臨": {
        "readings": ["りん"],
        "type": "unknown "
    },
    "難": {
        "readings": ["なん", "だん"],
        "phonetic": "𦰩",
        "type": "comp_phonetic"
    },
    "臓": {
        "readings": ["ぞう", "そう"],
        "phonetic": "蔵",
        "type": "comp_phonetic"
    },
    "警": {
        "readings": ["けい", "きょう"],
        "phonetic": "敬",
        "type": "comp_phonetic"
    },


    "乙": {
        "readings": ["オツ", "いつ"],
        "type": "unknown"
    },
    "了": {
        "readings": ["りょう"],
        "type": "unknown"
    },
    "又": {
        "readings": ["ゆう"],
        "type": "hieroglyph"
    },
    "与": {
        "readings": ["よ"],
        "type": "comp_indicative",
        "comment": "Looked like 與"
    },
    "及": {
        "readings": ["きゅう"],
        "type": "comp_indicative"
    },
    "丈": {
        "readings": ["じょう"],
        "type": "comp_indicative"
    },
    "刃": {
        "readings": ["じん", "にん"],
        "type": "hieroglyph"
    },
    "凡": {
        "readings": ["ぼん", "はん"],
        "type": "hieroglyph"
    },
    "勺": {
        "readings": ["しゃく"],
        "type": "hieroglyph"
    },
    "互": {
        "readings": [],
        "type": "unprocessed"
    },
    "弔": {
        "readings": [],
        "type": "unprocessed"
    },
    "井": {
        "readings": ["せい", "しょう"],
        "type": "hieroglyph"
    },
    "升": {
        "readings": ["しょう"],
        "type": "unknown"
    },
    "丹": {
        "readings": ["たん"],
        "type": "unknown"
    },
    "乏": {
        "readings": ["ぼう", "ほう"],
        "type": "unknown"
    },
    "匁": {
        "readings": [],
        "type": "kokuji"
    },
    "屯": {
        "readings": ["とん"],
        "type": "hieroglyph"
    },
    "介": {
        "readings": ["かい"],
        "type": "unknown"
    },
    "冗": {
        "readings": [],
        "type": "unprocessed"
    },
    "凶": {
        "readings": [],
        "type": "unprocessed"
    },
    "刈": {
        "readings": [],
        "type": "unprocessed"
    },
    "匹": {
        "readings": ["ひつ"],
        "type": "unknown"
    },
    "厄": {
        "readings": [],
        "type": "unprocessed"
    },
    "双": {
        "readings": ["そう"],
        "type": "comp_indicative"
    },
    "孔": {
        "readings": [],
        "type": "unprocessed"
    },
    "幻": {
        "readings": ["げん"],
        "type": "unknown"
    },
    "斗": {
        "readings": ["と"],
        "type": "hieroglyph"
    },
    "斤": {
        "readings": ["きん"],
        "type": "hieroglyph"
    },
    "且": {
        "readings": ["しょ", "そ", "しょう"],
        "type": "hieroglyph"
    },
    "丙": {
        "readings": ["へい"],
        "type": "hieroglyph"
    },
    "甲": {
        "readings": [],
        "type": "unprocessed"
    },
    "凸": {
        "readings": ["トツ"],
        "type": "hieroglyph"
    },
    "丘": {
        "readings": [],
        "type": "unprocessed"
    },
    "斥": {
        "readings": ["せき"],
        "type": "unknown",
        "comment": "TODO: strange"
    },
    "仙": {
        "readings": ["せん"],
        "phonetic": "山",
        "type": "comp_phonetic"
    },
    "凹": {
        "readings": ["おう"],
        "type": "hieroglyph"
    },
    "召": {
        "readings": ["しょう"],
        "type": "comp_indicative"
    },
    "巨": {
        "readings": ["きょ", "こ"],
        "type": "hieroglyph"
    },
    "占": {
        "readings": ["せん"],
        "type": "comp_indicative"
    },
    "囚": {
        "readings": ["しゅう"],
        "type": "comp_indicative"
    },
    "奴": {
        "readings": [],
        "type": "unprocessed"
    },
    "尼": {
        "readings": ["に", "じ"],
        "type": "unknown"
    },
    "巧": {
        "readings": [],
        "type": "unprocessed"
    },
    "払": {
        "readings": ["ふつ"],
        "phonetic": "弗",
        "type": "comp_phonetic"
    },
    "汁": {
        "readings": ["じゅう"],
        "phonetic": "十",
        "type": "comp_phonetic"
    },
    "玄": {
        "readings": ["げん"],
        "type": "unknown"
    },
    "甘": {
        "readings": ["かん"],
        "type": "unknown"
    },
    "矛": {
        "readings": [],
        "type": "unprocessed"
    },
    "込": {
        "readings": [],
        "type": "kokuji"
    },
    "弐": {
        "readings": [],
        "type": "unprocessed"
    },
    "朱": {
        "readings": ["しゅ", "す"],
        "type": "unknown"
    },
    "吏": {
        "readings": [],
        "type": "unprocessed"
    },
    "劣": {
        "readings": ["れつ"],
        "type": "comp_indicative"
    },
    "充": {
        "readings": [],
        "type": "unprocessed"
    },
    "妄": {
        "readings": ["もう", "ぼう"],
        "decomposition": ["女", "亡"],
        "phonetic": "亡",
        "type": "comp_phonetic"
    },
    "企": {
        "readings": ["き"],
        "phonetic": "止",
        "type": "comp_phonetic"
    },
    "仰": {
        "readings": [],
        "type": "unprocessed"
    },
    "伐": {
        "readings": ["ばつ"],
        "type": "comp_indicative"
    },
    "伏": {
        "readings": ["ふく", "ぶく"],
        "type": "unknown"
    },
    "刑": {
        "readings": [],
        "type": "unprocessed"
    },
    "旬": {
        "readings": [],
        "type": "unprocessed"
    },
    "旨": {
        "readings": ["し"],
        "type": "unknown"
    },
    "匠": {
        "readings": [],
        "type": "unprocessed"
    },
    "叫": {
        "readings": ["きょう"],
        "phonetic": "丩",
        "type": "comp_phonetic"
    },
    "吐": {
        "readings": ["と"],
        "phonetic": "土",
        "type": "unknown"
    },
    "吉": {
        "readings": ["きち", "きつ"],
        "type": "comp_indicative"
    },
    "如": {
        "readings": [],
        "type": "unprocessed"
    },
    "妃": {
        "readings": ["ひ"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "尽": {
        "readings": ["じん"],
        "type": "unknown",
        "comment": "obscure tone mark 盡"
    },
    "帆": {
        "readings": [],
        "type": "unprocessed"
    },
    "忙": {
        "readings": ["ぼう", "もう"],
        "phonetic": "亡",
        "type": "comp_phonetic"
    },
    "扱": {
        "readings": ["きゅう", "そう"],
        "phonetic": "及",
        "type": "comp_phonetic"
    },
    "朽": {
        "readings": [],
        "type": "unprocessed"
    },
    "朴": {
        "readings": ["ぼく", "はく"],
        "phonetic": "卜",
        "type": "comp_phonetic"
    },
    "汚": {
        "readings": ["お"],
        "phonetic": "于",
        "type": "comp_phonetic"
    },
    "汗": {
        "readings": ["かん"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "江": {
        "readings": ["こう"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "壮": {
        "readings": [],
        "type": "unprocessed"
    },
    "缶": {
        "readings": [],
        "type": "unprocessed"
    },
    "肌": {
        "readings": ["き"],
        "phonetic": "几",
        "type": "comp_phonetic"
    },
    "舟": {
        "readings": [],
        "type": "unprocessed"
    },
    "芋": {
        "readings": ["う"],
        "phonetic": "于",
        "type": "comp_phonetic"
    },
    "芝": {
        "readings": [],
        "type": "unprocessed"
    },
    "巡": {
        "readings": ["じゅん"],
        "type": "unknown"
    },
    "迅": {
        "readings": ["じん"],
        "phonetic": "卂",
        "type": "comp_phonetic"
    },
    "亜": {
        "readings": ["あ"],
        "type": "hieroglyph"
    },
    "更": {
        "readings": ["こう"],
        "type": "comp_indicative"
    },
    "寿": {
        "readings": [],
        "type": "unprocessed"
    },
    "励": {
        "readings": [],
        "type": "unprocessed"
    },
    "含": {
        "readings": ["がん", "かん", "ごん"],
        "phonetic": "今",
        "type": "comp_phonetic"
    },
    "佐": {
        "readings": ["さ"],
        "phonetic": "左",
        "type": "comp_phonetic"
    },
    "伺": {
        "readings": ["し"],
        "phonetic": "司",
        "type": "comp_phonetic"
    },
    "伸": {
        "readings": ["しん"],
        "phonetic": "申",
        "type": "comp_phonetic"
    },
    "但": {
        "readings": ["たん", "だん"],
        "phonetic": "旦",
        "type": "comp_phonetic"
    },
    "伯": {
        "readings": ["はく", "は"],
        "phonetic": "白",
        "type": "comp_phonetic"
    },
    "伴": {
        "readings": ["はん", "ばん"],
        "phonetic": "半",
        "type": "comp_phonetic"
    },
    "呉": {
        "readings": ["ご"],
        "type": "comp_indicative"
    },
    "克": {
        "readings": [],
        "type": "unprocessed"
    },
    "却": {
        "readings": [],
        "type": "unprocessed"
    },
    "吟": {
        "readings": ["ギン"],
        "phonetic": "今",
        "type": "comp_phonetic"
    },
    "吹": {
        "readings": [],
        "type": "unprocessed"
    },
    "呈": {
        "readings": [],
        "type": "unprocessed"
    },
    "壱": {
        "readings": [],
        "type": "unprocessed"
    },
    "坑": {
        "readings": [],
        "type": "unprocessed"
    },
    "坊": {
        "readings": ["ぼう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "妊": {
        "readings": ["にん", "じん"],
        "phonetic": "壬",
        "type": "comp_phonetic"
    },
    "妨": {
        "readings": ["ぼう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "妙": {
        "readings": [],
        "type": "unprocessed"
    },
    "肖": {
        "readings": ["しょう"],
        "phonetic": "小",
        "type": "comp_phonetic"
    },
    "尿": {
        "readings": [],
        "type": "unprocessed"
    },
    "尾": {
        "readings": [],
        "type": "unprocessed"
    },
    "岐": {
        "readings": [],
        "type": "unprocessed"
    },
    "攻": {
        "readings": ["こう"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "忌": {
        "readings": ["き"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "床": {
        "readings": [],
        "type": "unprocessed"
    },
    "廷": {
        "readings": ["てい"],
        "phonetic": "𡈼",
        "type": "comp_phonetic"
    },
    "忍": {
        "readings": ["にん", "じん"],
        "phonetic": "刃",
        "type": "comp_phonetic"
    },
    "戒": {
        "readings": [],
        "type": "unprocessed"
    },
    "戻": {
        "readings": ["れい"],
        "phonetic": "大",
        "type": "comp_phonetic"
    },
    "抗": {
        "readings": [],
        "type": "unprocessed"
    },
    "抄": {
        "readings": [],
        "type": "unprocessed"
    },
    "択": {
        "readings": ["たく"],
        "phonetic": "尺",
        "type": "comp_phonetic"
    },
    "把": {
        "readings": [],
        "type": "unprocessed"
    },
    "抜": {
        "readings": ["ばつ"],
        "decomposition": ["手", "犮"],
        "phonetic": "犮",
        "type": "comp_phonetic"
    },
    "扶": {
        "readings": ["ふ"],
        "phonetic": "夫",
        "type": "comp_phonetic"
    },
    "抑": {
        "readings": [],
        "type": "unprocessed"
    },
    "杉": {
        "readings": [],
        "type": "unprocessed"
    },
    "沖": {
        "readings": ["ちゅう"],
        "phonetic": "中",
        "type": "comp_phonetic"
    },
    "沢": {
        "readings": ["たく"],
        "phonetic": "尺",
        "type": "comp_phonetic"
    },
    "沈": {
        "readings": [],
        "type": "unprocessed"
    },
    "没": {
        "readings": [],
        "type": "unprocessed"
    },
    "妥": {
        "readings": [],
        "type": "unprocessed"
    },
    "狂": {
        "readings": ["きょう"],
        "type": "unknown",
        "comment": "obsucre tone mark 㞷"
    },
    "秀": {
        "readings": ["しゅう"],
        "type": "unknown"
    },
    "肝": {
        "readings": ["かん"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "即": {
        "readings": ["そく", "しゅく"],
        "type": "comp_indicative"
    },
    "芳": {
        "readings": ["ほう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "辛": {
        "readings": ["しん"],
        "type": "hieroglyph"
    },
    "迎": {
        "readings": ["げい", "きょう", "ごう"],
        "phonetic": "卬",
        "type": "comp_phonetic"
    },
    "邦": {
        "readings": [],
        "type": "unprocessed"
    },
    "岳": {
        "readings": [],
        "type": "unprocessed"
    },
    "奉": {
        "readings": [],
        "type": "unprocessed"
    },
    "享": {
        "readings": [],
        "type": "unprocessed"
    },
    "盲": {
        "readings": ["もう", "ぼう"],
        "phonetic": "亡",
        "type": "comp_phonetic"
    },
    "依": {
        "readings": [],
        "type": "unprocessed"
    },
    "佳": {
        "readings": [],
        "type": "unprocessed"
    },
    "侍": {
        "readings": ["じ", "し"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "侮": {
        "readings": [],
        "type": "unprocessed"
    },
    "併": {
        "readings": [],
        "type": "unprocessed"
    },
    "免": {
        "readings": ["めん", "べん", "ぶん"],
        "type": "hieroglyph"
    },
    "刺": {
        "readings": ["し", "せき"],
        "phonetic": "朿",
        "type": "comp_phonetic"
    },
    "劾": {
        "readings": ["がい"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "卓": {
        "readings": ["たく"],
        "type": "unknown"
    },
    "叔": {
        "readings": [],
        "type": "unprocessed"
    },
    "坪": {
        "readings": ["へい"],
        "phonetic": "平",
        "type": "comp_phonetic"
    },
    "奇": {
        "readings": ["き"],
        "type": "unknown"
    },
    "奔": {
        "readings": [],
        "type": "unprocessed"
    },
    "姓": {
        "readings": ["せい", "しょう"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "宜": {
        "readings": [],
        "type": "unprocessed"
    },
    "尚": {
        "readings": ["しょう"],
        "phonetic": "向",
        "type": "comp_phonetic"
    },
    "屈": {
        "readings": ["くつ"],
        "type": "comp_indicative"
    },
    "岬": {
        "readings": [],
        "type": "unprocessed"
    },
    "弦": {
        "readings": ["げん"],
        "phonetic": "玄",
        "type": "comp_phonetic"
    },
    "征": {
        "readings": ["せい"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "彼": {
        "readings": ["ひ"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "怪": {
        "readings": ["かい", "け"],
        "phonetic": "圣",
        "type": "comp_phonetic"
    },
    "怖": {
        "readings": [],
        "type": "unprocessed"
    },
    "肩": {
        "readings": [],
        "type": "unprocessed"
    },
    "房": {
        "readings": ["ぼう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "押": {
        "readings": [],
        "type": "unprocessed"
    },
    "拐": {
        "readings": [],
        "type": "unprocessed"
    },
    "拒": {
        "readings": ["きょ"],
        "phonetic": "巨",
        "type": "comp_phonetic"
    },
    "拠": {
        "readings": [],
        "type": "unprocessed"
    },
    "拘": {
        "readings": ["こう"],
        "phonetic": "句",
        "type": "comp_phonetic"
    },
    "拙": {
        "readings": ["せつ"],
        "phonetic": "出",
        "type": "comp_phonetic"
    },
    "拓": {
        "readings": ["たく"],
        "phonetic": "石",
        "type": "comp_phonetic"
    },
    "抽": {
        "readings": [],
        "type": "unprocessed"
    },
    "抵": {
        "readings": ["てい", "し"],
        "phonetic": "氐",
        "type": "comp_phonetic"
    },
    "拍": {
        "readings": ["はく", "ひょう"],
        "phonetic": "白",
        "type": "comp_phonetic"
    },
    "披": {
        "readings": ["ひ"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "抱": {
        "readings": ["ほう"],
        "phonetic": "包",
        "type": "comp_phonetic"
    },
    "抹": {
        "readings": ["まつ", "ばつ"],
        "phonetic": "末",
        "type": "comp_phonetic"
    },
    "昆": {
        "readings": ["こん"],
        "type": "unprocessed"
    },
    "昇": {
        "readings": ["しょう"],
        "phonetic": "升",
        "type": "comp_phonetic"
    },
    "枢": {
        "readings": ["スウ"],
        "phonetic": "区",
        "type": "comp_phonetic"
    },
    "析": {
        "readings": ["せき"],
        "phonetic": "斤",
        "type": "comp_phonetic"
    },
    "杯": {
        "readings": ["はい"],
        "phonetic": "不",
        "type": "comp_phonetic"
    },
    "枠": {
        "readings": [],
        "type": "kokuji"
    },
    "欧": {
        "readings": ["おう"],
        "phonetic": "区",
        "type": "comp_phonetic"
    },
    "肯": {
        "readings": ["こう"],
        "type": "comp_indicative"
    },
    "殴": {
        "readings": ["おう"],
        "phonetic": "区",
        "type": "comp_phonetic"
    },
    "況": {
        "readings": ["きょう"],
        "phonetic": "兄",
        "type": "comp_phonetic"
    },
    "沼": {
        "readings": ["しょう"],
        "phonetic": "召",
        "type": "comp_phonetic"
    },
    "泥": {
        "readings": ["デイ"],
        "phonetic": "尼",
        "type": "comp_phonetic"
    },
    "泊": {
        "readings": ["はく"],
        "phonetic": "白",
        "type": "comp_phonetic"
    },
    "泌": {
        "readings": ["ひつ", "ひ"],
        "phonetic": "必",
        "type": "comp_phonetic"
    },
    "沸": {
        "readings": ["ふつ", "ひ"],
        "phonetic": "弗",
        "type": "comp_phonetic"
    },
    "泡": {
        "readings": ["ほう"],
        "phonetic": "包",
        "type": "comp_phonetic"
    },
    "炎": {
        "readings": ["えん"],
        "type": "comp_indicative"
    },
    "炊": {
        "readings": [],
        "type": "unprocessed"
    },
    "炉": {
        "readings": [],
        "type": "unprocessed"
    },
    "邪": {
        "readings": ["じゃ", "しゃ", "や"],
        "phonetic": "牙",
        "type": "comp_phonetic"
    },
    "祈": {
        "readings": ["き"],
        "phonetic": "斤",
        "type": "comp_phonetic"
    },
    "祉": {
        "readings": ["し"],
        "phonetic": "止",
        "type": "comp_phonetic"
    },
    "突": {
        "readings": ["とつ"],
        "type": "comp_indicative"
    },
    "肢": {
        "readings": [],
        "type": "unprocessed"
    },
    "肪": {
        "readings": ["ぼう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "到": {
        "readings": [],
        "type": "unprocessed"
    },
    "茎": {
        "readings": ["けい"],
        "phonetic": "圣",
        "type": "comp_phonetic"
    },
    "苗": {
        "readings": [],
        "type": "unprocessed"
    },
    "茂": {
        "readings": [],
        "type": "unprocessed"
    },
    "迭": {
        "readings": ["テツ"],
        "phonetic": "失",
        "type": "comp_phonetic"
    },
    "迫": {
        "readings": ["はく"],
        "phonetic": "白",
        "type": "comp_phonetic"
    },
    "邸": {
        "readings": ["てい"],
        "phonetic": "氐",
        "type": "comp_phonetic"
    },
    "阻": {
        "readings": ["そ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "附": {
        "readings": ["ふ", "ぶ"],
        "phonetic": "付",
        "type": "comp_phonetic"
    },
    "斉": {
        "readings": [],
        "type": "unprocessed"
    },
    "甚": {
        "readings": [],
        "type": "unprocessed"
    },
    "帥": {
        "readings": [],
        "type": "unprocessed"
    },
    "衷": {
        "readings": ["ちゅう"],
        "phonetic": "中",
        "type": "comp_phonetic"
    },
    "幽": {
        "readings": [],
        "type": "unprocessed"
    },
    "為": {
        "readings": [],
        "type": "unprocessed"
    },
    "盾": {
        "readings": [],
        "type": "unprocessed"
    },
    "卑": {
        "readings": [],
        "type": "unprocessed"
    },
    "哀": {
        "readings": [],
        "type": "unprocessed"
    },
    "亭": {
        "readings": ["てい", "ちん"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "帝": {
        "readings": [],
        "type": "unprocessed"
    },
    "侯": {
        "readings": ["こう"],
        "type": "unknown",
        "comment": "obscure phonetic marker"
    },
    "俊": {
        "readings": [],
        "type": "unprocessed"
    },
    "侵": {
        "readings": [],
        "type": "unprocessed"
    },
    "促": {
        "readings": ["そく", "しょく"],
        "phonetic": "足",
        "type": "comp_phonetic"
    },
    "俗": {
        "readings": ["ぞく"],
        "phonetic": "谷",
        "type": "comp_phonetic"
    },
    "盆": {
        "readings": [],
        "phonetic": "分",
        "type": "comp_phonetic"
    },
    "冠": {
        "readings": [],
        "type": "unprocessed"
    },
    "削": {
        "readings": ["さく"],
        "phonetic": "肖",
        "type": "comp_phonetic"
    },
    "勅": {
        "readings": [],
        "type": "unprocessed"
    },
    "貞": {
        "readings": [],
        "type": "unprocessed"
    },
    "卸": {
        "readings": [],
        "type": "unprocessed"
    },
    "厘": {
        "readings": ["りん"],
        "type": "derivative"
    },
    "怠": {
        "readings": [],
        "type": "unprocessed"
    },
    "叙": {
        "readings": ["じょ"],
        "type": "unknown"
    },
    "咲": {
        "readings": ["しょう"],
        "phonetic": "关",
        "type": "comp_phonetic"
    },
    "垣": {
        "readings": ["えん"],
        "phonetic": "亘",
        "type": "comp_phonetic"
    },
    "契": {
        "readings": [],
        "type": "unprocessed"
    },
    "姻": {
        "readings": ["いん"],
        "phonetic": "因",
        "type": "comp_phonetic"
    },
    "孤": {
        "readings": ["こ"],
        "phonetic": "瓜",
        "type": "comp_phonetic"
    },
    "封": {
        "readings": [],
        "type": "unprocessed"
    },
    "峡": {
        "readings": ["きょう"],
        "phonetic": "夾",
        "type": "comp_phonetic"
    },
    "峠": {
        "readings": [],
        "type": "kokuji"
    },
    "弧": {
        "readings": ["こ"],
        "phonetic": "瓜",
        "type": "comp_phonetic"
    },
    "悔": {
        "readings": [],
        "type": "unprocessed"
    },
    "恒": {
        "readings": ["こう"],
        "phonetic": "亘",
        "type": "comp_phonetic"
    },
    "恨": {
        "readings": ["こん"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "怒": {
        "readings": [],
        "type": "unprocessed"
    },
    "威": {
        "readings": [],
        "type": "unprocessed"
    },
    "括": {
        "readings": [],
        "type": "unprocessed"
    },
    "挟": {
        "readings": ["きょう"],
        "phonetic": "夾",
        "type": "comp_phonetic"
    },
    "拷": {
        "readings": ["ごう", "こう"],
        "phonetic": "考",
        "type": "comp_phonetic"
    },
    "挑": {
        "readings": ["ちょう"],
        "phonetic": "兆",
        "type": "comp_phonetic"
    },
    "施": {
        "readings": ["し", "セ"],
        "phonetic": "也",
        "type": "comp_phonetic"
    },
    "是": {
        "readings": ["ぜ", "し"],
        "type": "comp_indicative"
    },
    "冒": {
        "readings": [],
        "type": "unprocessed"
    },
    "架": {
        "readings": ["か"],
        "phonetic": "加",
        "type": "comp_phonetic"
    },
    "枯": {
        "readings": ["こ"],
        "phonetic": "古",
        "type": "comp_phonetic"
    },
    "柄": {
        "readings": ["へい"],
        "phonetic": "丙",
        "type": "comp_phonetic"
    },
    "柳": {
        "readings": [],
        "type": "unprocessed"
    },
    "皆": {
        "readings": ["かい"],
        "type": "comp_indicative"
    },
    "洪": {
        "readings": ["こう"],
        "phonetic": "共",
        "type": "comp_phonetic"
    },
    "浄": {
        "readings": ["じょう"],
        "phonetic": "争",
        "type": "comp_phonetic"
    },
    "津": {
        "readings": [],
        "type": "unprocessed"
    },
    "洞": {
        "readings": ["どう", "とう"],
        "phonetic": "同",
        "type": "comp_phonetic"
    },
    "牲": {
        "readings": ["せい"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "狭": {
        "readings": ["きょう", "こう"],
        "phonetic": "夾",
        "type": "comp_phonetic"
    },
    "狩": {
        "readings": [],
        "type": "unprocessed"
    },
    "珍": {
        "readings": [],
        "type": "unprocessed"
    },
    "某": {
        "readings": [],
        "type": "unprocessed"
    },
    "疫": {
        "readings": ["えき", "やく"],
        "phonetic": "役",
        "type": "comp_phonetic"
    },
    "柔": {
        "readings": [],
        "type": "unprocessed"
    },
    "砕": {
        "readings": ["さい"],
        "phonetic": "卒",
        "type": "comp_phonetic"
    },
    "窃": {
        "readings": [],
        "type": "unprocessed"
    },
    "糾": {
        "readings": ["きゅう"],
        "phonetic": "丩",
        "type": "comp_phonetic"
    },
    "耐": {
        "readings": ["たい"],
        "type": "comp_indicative"
    },
    "胎": {
        "readings": [],
        "type": "unprocessed"
    },
    "胆": {
        "readings": ["たん", "とう"],
        "phonetic": "旦",
        "type": "comp_phonetic"
    },
    "胞": {
        "readings": ["ほう"],
        "phonetic": "包",
        "type": "comp_phonetic"
    },
    "臭": {
        "readings": [],
        "type": "unprocessed"
    },
    "荒": {
        "readings": [],
        "type": "unprocessed"
    },
    "荘": {
        "readings": [],
        "type": "unprocessed"
    },
    "虐": {
        "readings": [],
        "type": "unprocessed"
    },
    "訂": {
        "readings": ["てい", "ちょう"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "赴": {
        "readings": ["ふ"],
        "phonetic": "卜",
        "type": "comp_phonetic"
    },
    "軌": {
        "readings": ["き"],
        "phonetic": "九",
        "type": "comp_phonetic"
    },
    "逃": {
        "readings": ["とう"],
        "phonetic": "兆",
        "type": "comp_phonetic"
    },
    "郊": {
        "readings": ["こう"],
        "phonetic": "交",
        "type": "comp_phonetic"
    },
    "郎": {
        "readings": ["ろう"],
        "phonetic": "良",
        "type": "comp_phonetic"
    },
    "香": {
        "readings": [],
        "type": "unprocessed"
    },
    "剛": {
        "readings": ["ごう", "こう"],
        "phonetic": "岡",
        "type": "comp_phonetic"
    },
    "衰": {
        "readings": [],
        "type": "unprocessed"
    },
    "畝": {
        "readings": [],
        "type": "unprocessed"
    },
    "恋": {
        "readings": [],
        "type": "unprocessed"
    },
    "倹": {
        "readings": ["けん"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "倒": {
        "readings": [],
        "type": "unprocessed"
    },
    "倣": {
        "readings": [],
        "type": "unprocessed"
    },
    "俸": {
        "readings": [],
        "type": "unprocessed"
    },
    "倫": {
        "readings": ["りん"],
        "phonetic": "侖",
        "type": "comp_phonetic"
    },
    "翁": {
        "readings": ["おう"],
        "phonetic": "公",
        "type": "comp_phonetic"
    },
    "兼": {
        "readings": ["けん"],
        "type": "comp_indicative"
    },
    "准": {
        "readings": ["じゅん", "しゅん"],
        "phonetic": "隼",
        "type": "comp_phonetic"
    },
    "凍": {
        "readings": ["とう"],
        "phonetic": "東",
        "type": "comp_phonetic"
    },
    "剣": {
        "readings": ["けん"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "剖": {
        "readings": ["ぼう", "ほう"],
        "phonetic": "咅",
        "type": "comp_phonetic"
    },
    "脅": {
        "readings": [],
        "type": "unprocessed"
    },
    "匿": {
        "readings": [],
        "type": "unprocessed"
    },
    "栽": {
        "readings": ["さい"],
        "phonetic": "𢦏",
        "type": "comp_phonetic"
    },
    "索": {
        "readings": [],
        "type": "unprocessed"
    },
    "桑": {
        "readings": [],
        "type": "unprocessed"
    },
    "唆": {
        "readings": [],
        "type": "unprocessed"
    },
    "哲": {
        "readings": ["てつ"],
        "phonetic": "折",
        "type": "comp_phonetic"
    },
    "埋": {
        "readings": [],
        "type": "unprocessed"
    },
    "娯": {
        "readings": ["ご"],
        "phonetic": "呉",
        "type": "comp_phonetic"
    },
    "娠": {
        "readings": ["しん"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "姫": {
        "readings": ["き"],
        "phonetic": "臣",
        "type": "comp_phonetic"
    },
    "娘": {
        "readings": ["じょう", "にょう"],
        "phonetic": "良",
        "type": "comp_phonetic"
    },
    "宴": {
        "readings": ["えん"],
        "type": "unknown"
    },
    "宰": {
        "readings": ["さい"],
        "type": "unknown"
    },
    "宵": {
        "readings": ["しょう"],
        "phonetic": "肖",
        "type": "comp_phonetic"
    },
    "峰": {
        "readings": ["ほう", "ふ"],
        "phonetic": "夆",
        "type": "comp_phonetic"
    },
    "貢": {
        "readings": ["こう", "く"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "唐": {
        "readings": ["とう"],
        "type": "unknown"
    },
    "徐": {
        "readings": ["じょ"],
        "phonetic": "余",
        "type": "comp_phonetic"
    },
    "悦": {
        "readings": ["えつ"],
        "phonetic": "兑",
        "type": "comp_phonetic"
    },
    "恐": {
        "readings": ["きょう"],
        "type": "unknown",
        "comment": "obscure phonetic mark 巩"
    },
    "恭": {
        "readings": ["きょう"],
        "phonetic": "共",
        "type": "comp_phonetic"
    },
    "恵": {
        "readings": ["けい", "え"],
        "type": "unknown"
    },
    "悟": {
        "readings": ["ご"],
        "phonetic": "吾",
        "type": "comp_phonetic"
    },
    "悩": {
        "readings": ["のう", "どう"],
        "type": "unknown",
        "comment": "TODO: obscure phonetic component 𡿺?"
    },
    "扇": {
        "readings": [],
        "type": "unprocessed"
    },
    "振": {
        "readings": ["しん"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "捜": {
        "readings": ["そう"],
        "type": "unknown"
    },
    "挿": {
        "readings": [],
        "type": "unprocessed"
    },
    "捕": {
        "readings": ["ほ", "ぶ"],
        "phonetic": "甫",
        "type": "comp_phonetic"
    },
    "敏": {
        "readings": ["びん"],
        "type": "comp_indicative"
    },
    "核": {
        "readings": ["かく"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "桟": {
        "readings": [],
        "type": "unprocessed"
    },
    "栓": {
        "readings": ["せん"],
        "phonetic": "全",
        "type": "comp_phonetic"
    },
    "桃": {
        "readings": ["とう"],
        "phonetic": "兆",
        "type": "comp_phonetic"
    },
    "殊": {
        "readings": ["しゅ"],
        "phonetic": "朱",
        "type": "comp_phonetic"
    },
    "殉": {
        "readings": [],
        "type": "unprocessed"
    },
    "浦": {
        "readings": ["ほ"],
        "phonetic": "甫",
        "type": "comp_phonetic"
    },
    "浸": {
        "readings": [],
        "type": "unprocessed"
    },
    "泰": {
        "readings": [],
        "type": "unprocessed"
    },
    "浜": {
        "readings": ["ひん"],
        "phonetic": "賓",
        "type": "comp_phonetic"
    },
    "浮": {
        "readings": [],
        "type": "unprocessed"
    },
    "涙": {
        "readings": [],
        "type": "unprocessed"
    },
    "浪": {
        "readings": ["ろう"],
        "phonetic": "良",
        "type": "comp_phonetic"
    },
    "烈": {
        "readings": ["れつ"],
        "phonetic": "列",
        "type": "comp_phonetic"
    },
    "畜": {
        "readings": ["ちく", "キク"],
        "type": "unknown"
    },
    "珠": {
        "readings": ["しゅ"],
        "phonetic": "朱",
        "type": "comp_phonetic"
    },
    "畔": {
        "readings": ["はん"],
        "phonetic": "半",
        "type": "comp_phonetic"
    },
    "疾": {
        "readings": ["しつ"],
        "phonetic": "矢",
        "type": "comp_phonetic"
    },
    "症": {
        "readings": ["しょう"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "疲": {
        "readings": ["ひ"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "眠": {
        "readings": ["みん", "ベン"],
        "phonetic": "民",
        "type": "comp_phonetic"
    },
    "砲": {
        "readings": ["ほう"],
        "phonetic": "包",
        "type": "comp_phonetic"
    },
    "祥": {
        "readings": ["しょう"],
        "phonetic": "羊",
        "type": "comp_phonetic"
    },
    "称": {
        "readings": ["しょう"],
        "type": "unknown",
        "comment": "obscure phonetic 爯"
    },
    "租": {
        "readings": ["そ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "秩": {
        "readings": ["チツ"],
        "phonetic": "失",
        "type": "comp_phonetic"
    },
    "粋": {
        "readings": ["すい"],
        "phonetic": "卒",
        "type": "comp_phonetic"
    },
    "紛": {
        "readings": ["ふん"],
        "phonetic": "分",
        "type": "comp_phonetic"
    },
    "紡": {
        "readings": ["ぼう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "紋": {
        "readings": ["もん"],
        "phonetic": "文",
        "type": "comp_phonetic"
    },
    "耗": {
        "readings": [],
        "type": "unprocessed"
    },
    "恥": {
        "readings": ["ち"],
        "phonetic": "耳",
        "type": "comp_phonetic"
    },
    "脂": {
        "readings": ["し"],
        "phonetic": "旨",
        "type": "comp_phonetic"
    },
    "朕": {
        "readings": ["ちん"],
        "type": "comp_indicative"
    },
    "胴": {
        "readings": ["どう", "とう"],
        "phonetic": "同",
        "type": "comp_phonetic"
    },
    "致": {
        "readings": ["ち"],
        "phonetic": "至",
        "type": "comp_phonetic"
    },
    "般": {
        "readings": [],
        "type": "unprocessed"
    },
    "既": {
        "readings": [],
        "type": "unprocessed"
    },
    "華": {
        "readings": [],
        "type": "unprocessed"
    },
    "蚊": {
        "readings": ["ぶん"],
        "phonetic": "文",
        "type": "comp_phonetic"
    },
    "被": {
        "readings": ["ひ"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "託": {
        "readings": ["たく"],
        "phonetic": "乇",
        "type": "comp_phonetic"
    },
    "軒": {
        "readings": ["けん"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "辱": {
        "readings": ["じょく", "ニク"],
        "type": "unknown"
    },
    "唇": {
        "readings": ["しん"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "逝": {
        "readings": ["せい"],
        "phonetic": "折",
        "type": "comp_phonetic"
    },
    "逐": {
        "readings": ["ちく", "じく"],
        "type": "unknown"
    },
    "逓": {
        "readings": [],
        "type": "unprocessed"
    },
    "途": {
        "readings": ["と", "ず"],
        "phonetic": "余",
        "type": "comp_phonetic"
    },
    "透": {
        "readings": [],
        "type": "unprocessed"
    },
    "酌": {
        "readings": ["しゃく"],
        "phonetic": "勺",
        "type": "comp_phonetic"
    },
    "陥": {
        "readings": [],
        "type": "unprocessed"
    },
    "陣": {
        "readings": ["じん", "ちん"],
        "type": "unknown",
        "comment": "modified version of 陳"
    },
    "隻": {
        "readings": ["せき"],
        "type": "comp_indicative"
    },
    "飢": {
        "readings": ["き"],
        "phonetic": "几",
        "type": "comp_phonetic"
    },
    "鬼": {
        "readings": ["き"],
        "type": "hieroglyph"
    },
    "剤": {
        "readings": [],
        "type": "unprocessed"
    },
    "竜": {
        "readings": [],
        "type": "unprocessed"
    },
    "粛": {
        "readings": [],
        "type": "unprocessed"
    },
    "尉": {
        "readings": [],
        "type": "unprocessed"
    },
    "彫": {
        "readings": ["ちょう"],
        "phonetic": "周",
        "type": "comp_phonetic"
    },
    "偽": {
        "readings": [],
        "type": "unprocessed"
    },
    "偶": {
        "readings": ["ぐう"],
        "phonetic": "禺",
        "type": "comp_phonetic"
    },
    "偵": {
        "readings": [],
        "type": "unprocessed"
    },
    "偏": {
        "readings": ["へん"],
        "phonetic": "扁",
        "type": "comp_phonetic"
    },
    "剰": {
        "readings": ["じょう"],
        "type": "unknown",
        "comment": "maybe related to 乗"
    },
    "勘": {
        "readings": [],
        "type": "unprocessed"
    },
    "乾": {
        "readings": [],
        "type": "unprocessed"
    },
    "喝": {
        "readings": [],
        "type": "unprocessed"
    },
    "啓": {
        "readings": [],
        "type": "unprocessed"
    },
    "唯": {
        "readings": ["ゆい", "い"],
        "phonetic": "隹",
        "type": "comp_phonetic"
    },
    "執": {
        "readings": ["しつ", "しゅう"],
        "type": "comp_indicative"
    },
    "培": {
        "readings": ["ばい", "ほう", "はい"],
        "phonetic": "咅",
        "type": "comp_phonetic"
    },
    "堀": {
        "readings": ["くつ", "コツ"],
        "phonetic": "屈",
        "type": "comp_phonetic"
    },
    "婚": {
        "readings": [],
        "type": "unprocessed"
    },
    "婆": {
        "readings": [],
        "type": "unprocessed"
    },
    "寂": {
        "readings": [],
        "type": "unprocessed"
    },
    "崎": {
        "readings": ["き"],
        "phonetic": "奇",
        "type": "comp_phonetic"
    },
    "崇": {
        "readings": [],
        "type": "unprocessed"
    },
    "崩": {
        "readings": [],
        "type": "unprocessed"
    },
    "庶": {
        "readings": ["しょ"],
        "type": "comp_indicative"
    },
    "庸": {
        "readings": [],
        "type": "unprocessed"
    },
    "彩": {
        "readings": ["さい"],
        "phonetic": "采",
        "type": "comp_phonetic"
    },
    "患": {
        "readings": [],
        "type": "unprocessed"
    },
    "惨": {
        "readings": ["さん", "ザン"],
        "phonetic": "参",
        "type": "comp_phonetic"
    },
    "惜": {
        "readings": [],
        "type": "unprocessed"
    },
    "悼": {
        "readings": ["とう"],
        "phonetic": "卓",
        "type": "comp_phonetic"
    },
    "悠": {
        "readings": ["ゆう"],
        "phonetic": "攸",
        "type": "comp_phonetic"
    },
    "掛": {
        "readings": ["かい", "けい"],
        "phonetic": "圭",
        "type": "comp_phonetic"
    },
    "掘": {
        "readings": ["くつ"],
        "phonetic": "屈",
        "type": "comp_phonetic"
    },
    "掲": {
        "readings": [],
        "type": "unprocessed"
    },
    "控": {
        "readings": [],
        "type": "unprocessed"
    },
    "据": {
        "readings": [],
        "type": "unprocessed"
    },
    "措": {
        "readings": ["そ"],
        "phonetic": "昔",
        "type": "comp_phonetic"
    },
    "掃": {
        "readings": [],
        "type": "unprocessed"
    },
    "排": {
        "readings": ["はい"],
        "phonetic": "非",
        "type": "comp_phonetic"
    },
    "描": {
        "readings": [],
        "type": "unprocessed"
    },
    "斜": {
        "readings": ["しゃ"],
        "phonetic": "余",
        "type": "comp_phonetic"
    },
    "旋": {
        "readings": ["せん"],
        "type": "comp_indicative"
    },
    "曹": {
        "readings": ["そう", "ぞう"],
        "type": "comp_indicative"
    },
    "殻": {
        "readings": [],
        "type": "unprocessed"
    },
    "貫": {
        "readings": ["かん", "うん"],
        "type": "unknown"
    },
    "涯": {
        "readings": ["がい"],
        "phonetic": "厓",
        "type": "comp_phonetic"
    },
    "渇": {
        "readings": [],
        "type": "unprocessed"
    },
    "渓": {
        "readings": ["けい"],
        "type": "unknown",
        "comment": "obscure phonetic 奚"
    },
    "渋": {
        "readings": ["じゅう", "しゅう"],
        "type": "unknown",
        "comment": "maybe phonetic 歮歰"
    },
    "淑": {
        "readings": [],
        "type": "unprocessed"
    },
    "渉": {
        "readings": ["しょう"],
        "type": "comp_indicative"
    },
    "淡": {
        "readings": ["たん"],
        "phonetic": "炎",
        "type": "comp_phonetic"
    },
    "添": {
        "readings": [],
        "type": "unprocessed"
    },
    "涼": {
        "readings": [],
        "type": "unprocessed"
    },
    "猫": {
        "readings": [],
        "type": "unprocessed"
    },
    "猛": {
        "readings": [],
        "type": "unprocessed"
    },
    "猟": {
        "readings": [],
        "type": "unprocessed"
    },
    "瓶": {
        "readings": [],
        "type": "unprocessed"
    },
    "累": {
        "readings": [],
        "type": "unprocessed"
    },
    "盗": {
        "readings": [],
        "type": "unprocessed"
    },
    "眺": {
        "readings": ["ちょう"],
        "phonetic": "兆",
        "type": "comp_phonetic"
    },
    "窒": {
        "readings": ["ちつ"],
        "phonetic": "至",
        "type": "comp_phonetic"
    },
    "符": {
        "readings": ["ふ"],
        "phonetic": "付",
        "type": "comp_phonetic"
    },
    "粗": {
        "readings": ["そ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "粘": {
        "readings": ["ねん", "でん"],
        "phonetic": "占",
        "type": "comp_phonetic"
    },
    "粒": {
        "readings": ["りゅう"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "紺": {
        "readings": ["こん"],
        "phonetic": "甘",
        "type": "comp_phonetic"
    },
    "紹": {
        "readings": ["しょう"],
        "phonetic": "召",
        "type": "comp_phonetic"
    },
    "紳": {
        "readings": ["しん"],
        "phonetic": "申",
        "type": "comp_phonetic"
    },
    "脚": {
        "readings": [],
        "type": "unprocessed"
    },
    "脱": {
        "readings": ["ダツ", "タツ"],
        "phonetic": "兑",
        "type": "comp_phonetic"
    },
    "豚": {
        "readings": ["とん"],
        "type": "comp_indicative"
    },
    "舶": {
        "readings": ["はく"],
        "phonetic": "白",
        "type": "comp_phonetic"
    },
    "菓": {
        "readings": ["か"],
        "phonetic": "果",
        "type": "comp_phonetic"
    },
    "菊": {
        "readings": [],
        "type": "unprocessed"
    },
    "菌": {
        "readings": [],
        "type": "unprocessed"
    },
    "虚": {
        "readings": ["きょ", "こ"],
        "type": "unknown"
    },
    "蛍": {
        "readings": ["けい"],
        "phonetic": "熒",
        "type": "comp_phonetic"
    },
    "蛇": {
        "readings": [],
        "type": "unprocessed"
    },
    "袋": {
        "readings": ["たい", "てい"],
        "phonetic":  "代",
        "type": "comp_phonetic"
    },
    "訟": {
        "readings": ["しょう", "じゅ"],
        "phonetic": "公",
        "type": "comp_phonetic"
    },
    "販": {
        "readings": ["はん"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "赦": {
        "readings": ["しゃ"],
        "phonetic": "赤",
        "type": "comp_phonetic"
    },
    "軟": {
        "readings": ["なん", "ぜん", "ねん"],
        "type": "unknown",
        "comment": "obscure tone mark 耎"
    },
    "逸": {
        "readings": ["いつ", "いち"],
        "decomposition": ["辵", "兔"],
        "type": "comp_indicative"
    },
    "逮": {
        "readings": [],
        "type": "unprocessed"
    },
    "郭": {
        "readings": [],
        "type": "unprocessed"
    },
    "酔": {
        "readings": [],
        "type": "unprocessed"
    },
    "釈": {
        "readings": ["しゃく", "せき"],
        "phonetic": "尺",
        "type": "comp_phonetic"
    },
    "釣": {
        "readings": ["ちょう"],
        "phonetic": "勺",
        "type": "comp_phonetic"
    },
    "陰": {
        "readings": [],
        "type": "unprocessed"
    },
    "陳": {
        "readings": ["ちん", "じん"],
        "type": "comp_indicative"
    },
    "陶": {
        "readings": [],
        "type": "unprocessed"
    },
    "陪": {
        "readings": ["ばい"],
        "phonetic": "咅",
        "type": "comp_phonetic"
    },
    "隆": {
        "readings": [],
        "type": "unprocessed"
    },
    "陵": {
        "readings": [],
        "type": "unprocessed"
    },
    "麻": {
        "readings": ["ま", "ば"],
        "type": "comp_indicative"
    },
    "斎": {
        "readings": [],
        "type": "unprocessed"
    },
    "喪": {
        "readings": [],
        "type": "unprocessed"
    },
    "奥": {
        "readings": [],
        "type": "unprocessed"
    },
    "蛮": {
        "readings": [],
        "type": "unprocessed"
    },
    "偉": {
        "readings": ["い"],
        "phonetic": "韋",
        "type": "comp_phonetic"
    },
    "傘": {
        "readings": [],
        "type": "unprocessed"
    },
    "傍": {
        "readings": [],
        "type": "unprocessed"
    },
    "普": {
        "readings": [],
        "type": "unprocessed"
    },
    "喚": {
        "readings": [],
        "type": "unprocessed"
    },
    "喫": {
        "readings": ["きつ"],
        "phonetic": "契",
        "type": "comp_phonetic"
    },
    "圏": {
        "readings": [],
        "type": "unprocessed"
    },
    "堪": {
        "readings": [],
        "type": "unprocessed"
    },
    "堅": {
        "readings": ["けん"],
        "phonetic": "臤",
        "type": "comp_phonetic"
    },
    "堕": {
        "readings": [],
        "type": "unprocessed"
    },
    "塚": {
        "readings": [],
        "type": "unprocessed"
    },
    "堤": {
        "readings": ["てい"],
        "phonetic": "是",
        "type": "comp_phonetic"
    },
    "塔": {
        "readings": [],
        "type": "unprocessed"
    },
    "塀": {
        "readings": [],
        "type": "kokuji"
    },
    "媒": {
        "readings": [],
        "type": "unprocessed"
    },
    "婿": {
        "readings": ["せい"],
        "phonetic": "胥",
        "type": "comp_phonetic"
    },
    "掌": {
        "readings": ["しょう"],
        "phonetic": "尚",
        "type": "comp_phonetic"
    },
    "項": {
        "readings": [],
        "type": "unprocessed"
    },
    "幅": {
        "readings": ["ふく"],
        "phonetic": "畐",
        "type": "comp_phonetic"
    },
    "帽": {
        "readings": [],
        "type": "unprocessed"
    },
    "幾": {
        "readings": ["き"],
        "type": "comp_indicative"
    },
    "廃": {
        "readings": [],
        "type": "unprocessed"
    },
    "廊": {
        "readings": ["ろう"],
        "type": "unknown"
    },
    "弾": {
        "readings": ["だん"],
        "phonetic": "単",
        "type": "comp_phonetic"
    },
    "尋": {
        "readings": [],
        "type": "unprocessed"
    },
    "御": {
        "readings": [],
        "type": "unprocessed"
    },
    "循": {
        "readings": [],
        "type": "unprocessed"
    },
    "慌": {
        "readings": [],
        "type": "unprocessed"
    },
    "惰": {
        "readings": [],
        "type": "unprocessed"
    },
    "愉": {
        "readings": ["ゆ"],
        "phonetic": "兪",
        "type": "comp_phonetic"
    },
    "惑": {
        "readings": ["わく"],
        "phonetic": "或",
        "type": "comp_phonetic"
    },
    "雇": {
        "readings": ["こ"],
        "phonetic": "戸",
        "type": "comp_phonetic"
    },
    "扉": {
        "readings": ["ひ"],
        "phonetic": "非",
        "type": "comp_phonetic"
    },
    "握": {
        "readings": ["アク"],
        "phonetic": "屋",
        "type": "comp_phonetic"
    },
    "援": {
        "readings": ["えん"],
        "phonetic": "爰",
        "type": "comp_phonetic"
    },
    "換": {
        "readings": [],
        "type": "unprocessed"
    },
    "搭": {
        "readings": [],
        "type": "unprocessed"
    },
    "揚": {
        "readings": [],
        "type": "unprocessed"
    },
    "揺": {
        "readings": ["よう"],
        "phonetic": "䍃",
        "type": "comp_phonetic"
    },
    "敢": {
        "readings": [],
        "type": "unprocessed"
    },
    "暁": {
        "readings": [],
        "type": "unprocessed"
    },
    "晶": {
        "readings": ["しょう"],
        "type": "comp_indicative"
    },
    "替": {
        "readings": ["たい", "てい"],
        "type": "unprocessed"
    },
    "棺": {
        "readings": ["かん"],
        "phonetic": "官",
        "type": "comp_phonetic"
    },
    "棋": {
        "readings": ["き"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "棚": {
        "readings": ["おう"],
        "type": "unknown"
    },
    "棟": {
        "readings": ["とう"],
        "phonetic": "東",
        "type": "comp_phonetic"
    },
    "款": {
        "readings": [],
        "type": "unprocessed"
    },
    "欺": {
        "readings": ["ぎ", "き"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "殖": {
        "readings": ["しょく"],
        "phonetic": "直",
        "type": "comp_phonetic"
    },
    "渦": {
        "readings": ["か"],
        "phonetic": "咼",
        "type": "comp_phonetic"
    },
    "滋": {
        "readings": [],
        "type": "unprocessed"
    },
    "湿": {
        "readings": [],
        "type": "unprocessed"
    },
    "渡": {
        "readings": ["と"],
        "phonetic": "度",
        "type": "comp_phonetic"
    },
    "湾": {
        "readings": [],
        "type": "unprocessed"
    },
    "煮": {
        "readings": ["しゃ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "猶": {
        "readings": ["ゆう"],
        "type": "unknown",
        "comment": "TODO: related to 酋?"
    },
    "琴": {
        "readings": [],
        "type": "unprocessed"
    },
    "畳": {
        "readings": [],
        "type": "unprocessed"
    },
    "塁": {
        "readings": [],
        "type": "unprocessed"
    },
    "疎": {
        "readings": ["そ", "しょ"],
        "phonetic": "疋",
        "type": "comp_phonetic"
    },
    "痘": {
        "readings": ["とう"],
        "phonetic": "豆",
        "type": "comp_phonetic"
    },
    "痢": {
        "readings": ["り"],
        "phonetic": "利",
        "type": "comp_phonetic"
    },
    "硬": {
        "readings": ["こう"],
        "phonetic": "更",
        "type": "comp_phonetic"
    },
    "硝": {
        "readings": ["しょう"],
        "phonetic": "肖",
        "type": "comp_phonetic"
    },
    "硫": {
        "readings": ["りゅう", "る"],
        "phonetic": "㐬",
        "type": "comp_phonetic"
    },
    "筒": {
        "readings": ["とう"],
        "phonetic": "同",
        "type": "comp_phonetic"
    },
    "粧": {
        "readings": ["しょう", "そう"],
        "decomposition": ["米", "庄"],
        "phonetic": "庄",
        "type": "comp_phonetic"
    },
    "絞": {
        "readings": ["こう"],
        "decomposition": ["糸", "交"],
        "phonetic": "交",
        "type": "comp_phonetic"
    },
    "紫": {
        "readings": ["し"],
        "phonetic": "此",
        "type": "comp_phonetic"
    },
    "絡": {
        "readings": ["らく"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "脹": {
        "readings": [],
        "type": "unprocessed"
    },
    "腕": {
        "readings": [],
        "type": "unprocessed"
    },
    "葬": {
        "readings": [],
        "type": "unprocessed"
    },
    "募": {
        "readings": ["ぼ", "も"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "裕": {
        "readings": ["ゆう"],
        "phonetic": "谷",
        "type": "comp_phonetic"
    },
    "裂": {
        "readings": ["れつ"],
        "phonetic": "列",
        "type": "comp_phonetic"
    },
    "詠": {
        "readings": ["えい"],
        "phonetic": "永",
        "type": "comp_phonetic"
    },
    "詐": {
        "readings": ["さ"],
        "phonetic": "乍",
        "type": "comp_phonetic"
    },
    "詔": {
        "readings": ["しょう"],
        "phonetic": "召",
        "type": "comp_phonetic"
    },
    "診": {
        "readings": ["しん"],
        "type": "unknown"
    },
    "訴": {
        "readings": ["そ"],
        "phonetic": "斥",
        "type": "comp_phonetic"
    },
    "越": {
        "readings": ["えつ", "おち", "おつ"],
        "type": "unknown",
        "cooment": "obscure tone mark 戉"
    },
    "超": {
        "readings": ["ちょう"],
        "phonetic": "召",
        "type": "comp_phonetic"
    },
    "距": {
        "readings": ["きょ"],
        "phonetic": "巨",
        "type": "comp_phonetic"
    },
    "軸": {
        "readings": ["じく", "ちく"],
        "phonetic": "由",
        "type": "comp_phonetic"
    },
    "遇": {
        "readings": ["ぐう", "ぐ"],
        "phonetic": "禺",
        "type": "comp_phonetic"
    },
    "遂": {
        "readings": ["すい"],
        "phonetic": "㒸",
        "type": "comp_phonetic"
    },
    "遅": {
        "readings": ["さい"],
        "type": "unknown",
        "comment": "obscure tone mark 犀 (rhinoceros)"
    },
    "遍": {
        "readings": ["へん"],
        "phonetic": "扁",
        "type": "comp_phonetic"
    },
    "酢": {
        "readings": ["さく", "そ"],
        "phonetic": "乍",
        "type": "comp_phonetic"
    },
    "鈍": {
        "readings": ["どん"],
        "phonetic": "屯",
        "type": "comp_phonetic"
    },
    "閑": {
        "readings": [],
        "type": "unprocessed"
    },
    "隅": {
        "readings": ["ぐう"],
        "phonetic": "禺",
        "type": "comp_phonetic"
    },
    "随": {
        "readings": [],
        "type": "unprocessed"
    },
    "焦": {
        "readings": ["しょう"],
        "phonetic": "焦",
        "type": "comp_phonetic"
    },
    "雄": {
        "readings": ["ゆう"],
        "phonetic": "厷",
        "type": "comp_phonetic"
    },
    "雰": {
        "readings": [],
        "phonetic": "分",
        "type": "comp_phonetic"
    },
    "殿": {
        "readings": [],
        "type": "unprocessed"
    },
    "棄": {
        "readings": [],
        "type": "unprocessed"
    },
    "傾": {
        "readings": [],
        "type": "unprocessed"
    },
    "傑": {
        "readings": [],
        "type": "unprocessed"
    },
    "債": {
        "readings": ["さい"],
        "phonetic": "責",
        "type": "comp_phonetic"
    },
    "催": {
        "readings": ["さい"],
        "phonetic": "崔",
        "type": "comp_phonetic"
    },
    "僧": {
        "readings": ["そう"],
        "phonetic": "曽",
        "type": "comp_phonetic"
    },
    "慈": {
        "readings": [],
        "type": "unprocessed"
    },
    "勧": {
        "readings": [],
        "type": "unprocessed"
    },
    "載": {
        "readings": ["さい"],
        "phonetic": "𢦏",
        "type": "comp_phonetic"
    },
    "嗣": {
        "readings": ["し"],
        "phonetic": "司",
        "type": "comp_phonetic"
    },
    "嘆": {
        "readings": [],
        "type": "unprocessed"
    },
    "塊": {
        "readings": [],
        "type": "unprocessed"
    },
    "塑": {
        "readings": [],
        "type": "unprocessed"
    },
    "塗": {
        "readings": [],
        "type": "unprocessed"
    },
    "奨": {
        "readings": [],
        "type": "unprocessed"
    },
    "嫁": {
        "readings": ["か"],
        "phonetic": "家",
        "type": "comp_phonetic"
    },
    "嫌": {
        "readings": ["けん", "げん"],
        "phonetic": "兼",
        "type": "comp_phonetic"
    },
    "寛": {
        "readings": [],
        "type": "unprocessed"
    },
    "寝": {
        "readings": [],
        "type": "unprocessed"
    },
    "廉": {
        "readings": ["れん"],
        "phonetic": "兼",
        "type": "comp_phonetic"
    },
    "微": {
        "readings": [],
        "type": "unprocessed"
    },
    "慨": {
        "readings": [],
        "type": "unprocessed"
    },
    "愚": {
        "readings": ["ぐ"],
        "phonetic": "禺",
        "type": "comp_phonetic"
    },
    "愁": {
        "readings": ["しゅう"],
        "phonetic": "秋",
        "type": "comp_phonetic"
    },
    "慎": {
        "readings": [],
        "type": "unprocessed"
    },
    "携": {
        "readings": ["けい"],
        "type": "unknown"
    },
    "搾": {
        "readings": [],
        "type": "kokuji"
    },
    "摂": {
        "readings": [],
        "type": "unprocessed"
    },
    "搬": {
        "readings": [],
        "type": "unprocessed"
    },
    "暇": {
        "readings": ["か"],
        "phonetic": "叚",
        "type": "comp_phonetic"
    },
    "楼": {
        "readings": [],
        "type": "unprocessed"
    },
    "歳": {
        "readings": [],
        "type": "unprocessed"
    },
    "滑": {
        "readings": [],
        "type": "unprocessed"
    },
    "溝": {
        "readings": ["こう"],
        "phonetic": "冓",
        "type": "comp_phonetic"
    },
    "滞": {
        "readings": [],
        "type": "unprocessed"
    },
    "滝": {
        "readings": [],
        "type": "unprocessed"
    },
    "漠": {
        "readings": ["ばく", "まく"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "滅": {
        "readings": [],
        "type": "unprocessed"
    },
    "溶": {
        "readings": [],
        "type": "unprocessed"
    },
    "煙": {
        "readings": ["えん"],
        "phonetic": "垔",
        "type": "comp_phonetic"
    },
    "煩": {
        "readings": [],
        "type": "unprocessed"
    },
    "雅": {
        "readings": ["が"],
        "phonetic": "牙",
        "type": "comp_phonetic"
    },
    "猿": {
        "readings": [],
        "type": "unprocessed"
    },
    "献": {
        "readings": [],
        "type": "unprocessed"
    },
    "痴": {
        "readings": ["ち"],
        "phonetic": "知",
        "type": "comp_phonetic"
    },
    "睡": {
        "readings": [],
        "type": "unprocessed"
    },
    "督": {
        "readings": [],
        "type": "unprocessed"
    },
    "碁": {
        "readings": [],
        "type": "unprocessed"
    },
    "禍": {
        "readings": ["か"],
        "phonetic": "咼",
        "type": "comp_phonetic"
    },
    "禅": {
        "readings": ["ぜん"],
        "phonetic": "単",
        "type": "comp_phonetic"
    },
    "稚": {
        "readings": ["ち"],
        "phonetic": "隹",
        "type": "comp_phonetic"
    },
    "継": {
        "readings": ["けい"],
        "type": "unknown",
        "comment": "related to 断"
    },
    "腰": {
        "readings": ["よう"],
        "phonetic": "要",
        "type": "comp_phonetic"
    },
    "艇": {
        "readings": ["てい"],
        "phonetic": "廷",
        "type": "comp_phonetic"
    },
    "蓄": {
        "readings": [],
        "type": "unprocessed"
    },
    "虞": {
        "readings": ["ぐ"],
        "phonetic": "呉",
        "type": "comp_phonetic",
        "comment": "related to 虞 reading?"
    },
    "虜": {
        "readings": ["りょ", "ろ"],
        "type": "unknown"
    },
    "褐": {
        "readings": [],
        "type": "unprocessed"
    },
    "裸": {
        "readings": ["ら"],
        "phonetic": "果",
        "type": "comp_phonetic"
    },
    "触": {
        "readings": ["しょく", "そく"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "該": {
        "readings": ["がい", "かい"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "詰": {
        "readings": ["きつ"],
        "phonetic": "吉",
        "type": "comp_phonetic"
    },
    "誇": {
        "readings": [],
        "type": "unprocessed"
    },
    "詳": {
        "readings": ["しょう"],
        "phonetic": "羊",
        "type": "comp_phonetic"
    },
    "誉": {
        "readings": [],
        "type": "unprocessed"
    },
    "賊": {
        "readings": ["そく"],
        "phonetic": "則",
        "type": "comp_phonetic"
    },
    "賄": {
        "readings": ["ワイ", "かい"],
        "phonetic": "有",
        "type": "comp_phonetic"
    },
    "跡": {
        "readings": ["せき", "しゃく"],
        "phonetic": "責",
        "type": "comp_phonetic"
    },
    "践": {
        "readings": ["せん"],
        "phonetic": "戔",
        "type": "comp_phonetic"
    },
    "跳": {
        "readings": ["ちょう"],
        "phonetic": "兆",
        "type": "comp_phonetic"
    },
    "較": {
        "readings": ["かく", "こう"],
        "decomposition": ["車", "交"],
        "phonetic": "交",
        "type": "comp_phonetic"
    },
    "違": {
        "readings": ["い"],
        "phonetic": "韋",
        "type": "comp_phonetic"
    },
    "遣": {
        "readings": ["けん"],
        "type": "unknown",
        "comment": "very obscure phonetic mark, doesn't even display"
    },
    "酬": {
        "readings": ["しゅう"],
        "phonetic": "州",
        "type": "comp_phonetic"
    },
    "酪": {
        "readings": ["らく"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "鉛": {
        "readings": ["えん"],
        "phonetic": "㕣",
        "type": "comp_phonetic"
    },
    "鉢": {
        "readings": ["はち", "はつ"],
        "type": "unknown"
    },
    "鈴": {
        "readings": ["れい", "りん"],
        "phonetic": "令",
        "type": "comp_phonetic"
    },
    "隔": {
        "readings": [],
        "type": "unprocessed"
    },
    "雷": {
        "readings": ["らい"],
        "type": "unknown",
        "comment": "obscure phonetic mark 畾"
    },
    "零": {
        "readings": ["れい"],
        "phonetic": "令",
        "type": "comp_phonetic"
    },
    "靴": {
        "readings": ["か"],
        "phonetic": "化",
        "type": "comp_phonetic"
    },
    "頑": {
        "readings": ["がん"],
        "phonetic": "元",
        "type": "comp_phonetic"
    },
    "頒": {
        "readings": [],
        "phonetic": "分",
        "type": "comp_phonetic"
    },
    "飾": {
        "readings": [],
        "type": "unprocessed"
    },
    "飽": {
        "readings": ["ほう"],
        "phonetic": "包",
        "type": "comp_phonetic"
    },
    "鼓": {
        "readings": [],
        "type": "unprocessed"
    },
    "豪": {
        "readings": [],
        "type": "unprocessed"
    },
    "僕": {
        "readings": ["ぼく"],
        "phonetic": "菐",
        "type": "comp_phonetic"
    },
    "僚": {
        "readings": ["りょう"],
        "phonetic": "尞",
        "type": "comp_phonetic"
    },
    "暦": {
        "readings": ["れき", "りゃく"],
        "phonetic": "厤",
        "type": "comp_phonetic"
    },
    "塾": {
        "readings": [],
        "type": "unprocessed"
    },
    "奪": {
        "readings": ["ふん"],
        "phonetic": "奞",
        "type": "comp_phonetic"
    },
    "嫡": {
        "readings": ["ちゃく", "てき"],
        "phonetic": "啇",
        "type": "comp_phonetic"
    },
    "寡": {
        "readings": [],
        "type": "unprocessed"
    },
    "寧": {
        "readings": [],
        "type": "unprocessed"
    },
    "腐": {
        "readings": ["ふ"],
        "phonetic": "付",
        "type": "comp_phonetic"
    },
    "彰": {
        "readings": ["しょう"],
        "phonetic": "章",
        "type": "comp_phonetic"
    },
    "徴": {
        "readings": ["ちょう", "ち"],
        "type": "unknown"
    },
    "憎": {
        "readings": ["ぞう", "そう"],
        "phonetic": "曽",
        "type": "comp_phonetic"
    },
    "慢": {
        "readings": [],
        "type": "unprocessed"
    },
    "摘": {
        "readings": ["てき"],
        "phonetic": "啇",
        "type": "comp_phonetic"
    },
    "概": {
        "readings": [],
        "type": "unprocessed"
    },
    "雌": {
        "readings": ["し"],
        "phonetic": "此",
        "type": "comp_phonetic"
    },
    "漆": {
        "readings": [],
        "type": "unprocessed"
    },
    "漸": {
        "readings": [],
        "type": "unprocessed"
    },
    "漬": {
        "readings": ["し"],
        "phonetic": "責",
        "type": "comp_phonetic"
    },
    "滴": {
        "readings": ["てき"],
        "phonetic": "啇",
        "type": "comp_phonetic"
    },
    "漂": {
        "readings": ["ひょう"],
        "phonetic": "票",
        "type": "comp_phonetic"
    },
    "漫": {
        "readings": [],
        "type": "unprocessed"
    },
    "漏": {
        "readings": [],
        "type": "unprocessed"
    },
    "獄": {
        "readings": [],
        "type": "unprocessed"
    },
    "碑": {
        "readings": [],
        "type": "unprocessed"
    },
    "稲": {
        "readings": [],
        "type": "unprocessed"
    },
    "端": {
        "readings": [],
        "type": "unprocessed"
    },
    "箇": {
        "readings": ["か", "こ"],
        "phonetic": "固",
        "type": "comp_phonetic"
    },
    "維": {
        "readings": ["い"],
        "type": "unknown"
    },
    "綱": {
        "readings": ["こう"],
        "phonetic": "岡",
        "type": "comp_phonetic"
    },
    "緒": {
        "readings": ["しょ", "ちょ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "網": {
        "readings": ["もう", "ぼう"],
        "phonetic": "罔",
        "type": "comp_phonetic"
    },
    "罰": {
        "readings": [],
        "type": "unprocessed"
    },
    "膜": {
        "readings": ["まく", "ばく"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "慕": {
        "readings": ["ぼ"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "誓": {
        "readings": ["せい", "ぜい"],
        "phonetic": "折",
        "type": "comp_phonetic"
    },
    "誘": {
        "readings": [],
        "type": "unprocessed"
    },
    "踊": {
        "readings": ["よう"],
        "phonetic": "甬",
        "type": "comp_phonetic"
    },
    "遮": {
        "readings": ["しゃ"],
        "phonetic": "庶",
        "type": "comp_phonetic"
    },
    "遭": {
        "readings": ["そう"],
        "phonetic": "曹",
        "type": "comp_phonetic"
    },
    "酵": {
        "readings": [],
        "type": "unprocessed"
    },
    "酷": {
        "readings": ["こく"],
        "phonetic": "告",
        "type": "comp_phonetic"
    },
    "銃": {
        "readings": [],
        "type": "unprocessed"
    },
    "銑": {
        "readings": ["せん"],
        "phonetic": "先",
        "type": "comp_phonetic"
    },
    "銘": {
        "readings": ["めい", "みょう"],
        "phonetic": "名",
        "type": "comp_phonetic"
    },
    "閥": {
        "readings": ["ばつ", "はつ"],
        "phonetic": "伐",
        "type": "comp_phonetic"
    },
    "隠": {
        "readings": [],
        "type": "unprocessed"
    },
    "需": {
        "readings": [],
        "type": "unprocessed"
    },
    "駆": {
        "readings": ["く"],
        "phonetic": "区",
        "type": "comp_phonetic"
    },
    "駄": {
        "readings": ["だ", "た"],
        "phonetic": "太",
        "type": "comp_phonetic"
    },
    "髪": {
        "readings": ["はつ", "ほつ"],
        "phonetic": "犮",
        "type": "comp_phonetic"
    },
    "魂": {
        "readings": ["こん"],
        "phonetic": "云",
        "type": "comp_phonetic"
    },
    "錬": {
        "readings": [],
        "type": "unprocessed"
    },
    "緯": {
        "readings": [],
        "type": "unprocessed"
    },
    "韻": {
        "readings": ["いん"],
        "phonetic": "員",
        "type": "comp_phonetic"
    },
    "影": {
        "readings": ["えい", "よう"],
        "decomposition": ["彡", "景"],
        "phonetic": "景",
        "type": "comp_phonetic"
    },
    "鋭": {
        "readings": ["えい"],
        "phonetic": "兑",
        "type": "comp_phonetic"
    },
    "謁": {
        "readings": [],
        "type": "unprocessed"
    },
    "閲": {
        "readings": [],
        "type": "unprocessed"
    },
    "縁": {
        "readings": [],
        "type": "unprocessed"
    },
    "憶": {
        "readings": [],
        "type": "unprocessed"
    },
    "穏": {
        "readings": [],
        "type": "unprocessed"
    },
    "稼": {
        "readings": ["か"],
        "phonetic": "家",
        "type": "comp_phonetic"
    },
    "餓": {
        "readings": ["が"],
        "phonetic": "我",
        "type": "comp_phonetic"
    },
    "壊": {
        "readings": [],
        "type": "unprocessed"
    },
    "懐": {
        "readings": [],
        "type": "unprocessed"
    },
    "嚇": {
        "readings": [],
        "type": "unprocessed"
    },
    "獲": {
        "readings": ["かく"],
        "phonetic": "蒦",
        "type": "comp_phonetic"
    },
    "穫": {
        "readings": ["かく"],
        "phonetic": "蒦",
        "type": "comp_phonetic"
    },
    "潟": {
        "readings": [],
        "type": "unprocessed"
    },
    "轄": {
        "readings": [],
        "type": "unprocessed"
    },
    "憾": {
        "readings": ["かん"],
        "phonetic": "感",
        "type": "comp_phonetic"
    },
    "歓": {
        "readings": ["かん"],
        "phonetic": "雚",
        "type": "comp_phonetic"
    },
    "環": {
        "readings": ["かん"],
        "phonetic": "瞏",
        "type": "comp_phonetic"
    },
    "監": {
        "readings": [],
        "type": "unprocessed"
    },
    "緩": {
        "readings": ["かん"],
        "phonetic": "爰",
        "type": "comp_phonetic"
    },
    "艦": {
        "readings": [],
        "type": "unprocessed"
    },
    "還": {
        "readings": ["かん", "げん"],
        "phonetic": "瞏",
        "type": "comp_phonetic"
    },
    "鑑": {
        "readings": [],
        "type": "unprocessed"
    },
    "輝": {
        "readings": [],
        "type": "unprocessed"
    },
    "騎": {
        "readings": ["き"],
        "phonetic": "奇",
        "type": "comp_phonetic"
    },
    "儀": {
        "readings": ["ぎ"],
        "phonetic": "義",
        "type": "comp_phonetic"
    },
    "戯": {
        "readings": ["ぎ", "げ"],
        "type": "unknown"
    },
    "擬": {
        "readings": ["ぎ"],
        "phonetic": "疑",
        "type": "comp_phonetic"
    },
    "犠": {
        "readings": ["ぎ", "き"],
        "phonetic": "義",
        "type": "comp_phonetic"
    },
    "窮": {
        "readings": [],
        "type": "unprocessed"
    },
    "矯": {
        "readings": ["きょう"],
        "phonetic": "喬",
        "type": "comp_phonetic"
    },
    "響": {
        "readings": ["きょう"],
        "phonetic": "郷",
        "type": "comp_phonetic"
    },
    "驚": {
        "readings": ["きょう"],
        "phonetic": "敬",
        "type": "comp_phonetic"
    },
    "凝": {
        "readings": ["ぎょう"],
        "phonetic": "疑",
        "type": "comp_phonetic"
    },
    "緊": {
        "readings": ["きん"],
        "phonetic": "臤",
        "type": "comp_phonetic"
    },
    "襟": {
        "readings": ["きん"],
        "phonetic": "禁",
        "type": "comp_phonetic"
    },
    "謹": {
        "readings": ["きん"],
        "phonetic": "堇",
        "type": "comp_phonetic"
    },
    "繰": {
        "readings": [],
        "type": "unprocessed"
    },
    "勲": {
        "readings": ["くん"],
        "phonetic": "熏",
        "type": "comp_phonetic"
    },
    "薫": {
        "readings": ["くん"],
        "phonetic": "熏",
        "type": "comp_phonetic"
    },
    "慶": {
        "readings": ["けい", "きょう"],
        "type": "unknown"
    },
    "憩": {
        "readings": [],
        "type": "unprocessed"
    },
    "鶏": {
        "readings": [],
        "type": "unprocessed"
    },
    "鯨": {
        "readings": ["ゲイ", "けい"],
        "phonetic": "京",
        "type": "comp_phonetic"
    },
    "撃": {
        "readings": [],
        "type": "unprocessed"
    },
    "懸": {
        "readings": ["けん", "け"],
        "type": "unknown",
        "comment": "TODO: phonetic 縣"
    },
    "謙": {
        "readings": ["けん"],
        "phonetic": "兼",
        "type": "comp_phonetic"
    },
    "賢": {
        "readings": [],
        "type": "unprocessed"
    },
    "顕": {
        "readings": ["けん"],
        "type": "unknown",
        "comment": "obscure phonetic 㬎?"
    },
    "顧": {
        "readings": ["こ"],
        "phonetic": "雇",
        "type": "comp_phonetic"
    },
    "稿": {
        "readings": ["こう"],
        "phonetic": "高",
        "type": "comp_phonetic"
    },
    "衡": {
        "readings": ["こう"],
        "phonetic": "行",
        "type": "comp_phonetic"
    },
    "購": {
        "readings": ["こう"],
        "phonetic": "冓",
        "type": "comp_phonetic"
    },
    "墾": {
        "readings": ["こん"],
        "type": "unknown"
    },
    "懇": {
        "readings": [],
        "type": "unprocessed"
    },
    "鎖": {
        "readings": ["さ"],
        "type": "unknown"
    },
    "錯": {
        "readings": ["さく", "そ"],
        "phonetic": "昔",
        "type": "comp_phonetic"
    },
    "撮": {
        "readings": [],
        "type": "unprocessed"
    },
    "擦": {
        "readings": [],
        "type": "unprocessed"
    },
    "暫": {
        "readings": [],
        "type": "unprocessed"
    },
    "諮": {
        "readings": [],
        "type": "unprocessed"
    },
    "賜": {
        "readings": ["し"],
        "phonetic": "易",
        "type": "comp_phonetic"
    },
    "璽": {
        "readings": [],
        "type": "unprocessed"
    },
    "爵": {
        "readings": [],
        "type": "unprocessed"
    },
    "趣": {
        "readings": ["しゅ", "そく"],
        "phonetic": "取",
        "type": "comp_phonetic"
    },
    "儒": {
        "readings": [],
        "type": "unprocessed"
    },
    "襲": {
        "readings": [],
        "type": "unprocessed"
    },
    "醜": {
        "readings": ["しゅう"],
        "type": "comp_indicative"
    },
    "獣": {
        "readings": ["じゅう"],
        "type": "unknown"
    },
    "瞬": {
        "readings": [],
        "type": "unprocessed"
    },
    "潤": {
        "readings": [],
        "type": "unprocessed"
    },
    "遵": {
        "readings": [],
        "type": "unprocessed"
    },
    "償": {
        "readings": [],
        "type": "unprocessed"
    },
    "礁": {
        "readings": ["しょう"],
        "phonetic": "焦",
        "type": "comp_phonetic"
    },
    "衝": {
        "readings": ["しょう"],
        "phonetic": "重",
        "type": "comp_phonetic"
    },
    "鐘": {
        "readings": ["しょう", "しゅ"],
        "phonetic": "童",
        "type": "comp_phonetic"
    },
    "壌": {
        "readings": [],
        "type": "unprocessed"
    },
    "嬢": {
        "readings": [],
        "type": "unprocessed"
    },
    "譲": {
        "readings": [],
        "type": "unprocessed"
    },
    "醸": {
        "readings": [],
        "type": "unprocessed"
    },
    "錠": {
        "readings": [],
        "type": "unprocessed"
    },
    "嘱": {
        "readings": [],
        "type": "unprocessed"
    },
    "審": {
        "readings": ["しん"],
        "type": "unknown",
        "comment": "variant of 审"
    },
    "薪": {
        "readings": ["しん"],
        "phonetic": "新",
        "type": "comp_phonetic"
    },
    "震": {
        "readings": ["しん"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "錘": {
        "readings": [],
        "type": "unprocessed"
    },
    "髄": {
        "readings": [],
        "type": "unprocessed"
    },
    "澄": {
        "readings": ["ちょう"],
        "type": "unknown"
    },
    "瀬": {
        "readings": ["らい"],
        "phonetic": "頼",
        "type": "comp_phonetic"
    },
    "請": {
        "readings": ["せい", "しん", "しょう"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "籍": {
        "readings": [],
        "type": "unprocessed"
    },
    "潜": {
        "readings": [],
        "type": "unprocessed"
    },
    "繊": {
        "readings": [],
        "type": "unprocessed"
    },
    "薦": {
        "readings": ["せん"],
        "type": "unknown"
    },
    "遷": {
        "readings": [],
        "type": "unprocessed"
    },
    "鮮": {
        "readings": ["せん"],
        "type": "unknown",
        "comment": "obscure phonetic 羴"
    },
    "繕": {
        "readings": [],
        "type": "unprocessed"
    },
    "礎": {
        "readings": ["そ"],
        "phonetic": "楚",
        "type": "comp_phonetic"
    },
    "槽": {
        "readings": ["そう"],
        "phonetic": "曹",
        "type": "comp_phonetic"
    },
    "燥": {
        "readings": [],
        "type": "unprocessed"
    },
    "藻": {
        "readings": [],
        "type": "unprocessed"
    },
    "霜": {
        "readings": ["そう"],
        "phonetic": "相",
        "type": "comp_phonetic"
    },
    "騒": {
        "readings": ["そう"],
        "phonetic": "蚤",
        "type": "comp_phonetic"
    },
    "贈": {
        "readings": ["ぞう", "そう"],
        "phonetic": "曽",
        "type": "comp_phonetic"
    },
    "濯": {
        "readings": ["たく"],
        "phonetic": "翟",
        "type": "comp_phonetic"
    },
    "濁": {
        "readings": ["だく", "じょく"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "諾": {
        "readings": [],
        "type": "unprocessed"
    },
    "鍛": {
        "readings": [],
        "type": "unprocessed"
    },
    "壇": {
        "readings": ["だん", "たん"],
        "type": "unknown"
    },
    "鋳": {
        "readings": [],
        "type": "unprocessed"
    },
    "駐": {
        "readings": ["ちゅう", "チュ"],
        "phonetic": "主",
        "type": "comp_phonetic"
    },
    "懲": {
        "readings": [],
        "type": "unprocessed"
    },
    "聴": {
        "readings": [],
        "type": "unprocessed"
    },
    "鎮": {
        "readings": [],
        "type": "unprocessed"
    },
    "墜": {
        "readings": [],
        "type": "unprocessed"
    },
    "締": {
        "readings": [],
        "type": "unprocessed"
    },
    "徹": {
        "readings": [],
        "type": "unprocessed"
    },
    "撤": {
        "readings": [],
        "type": "unprocessed"
    },
    "謄": {
        "readings": [],
        "type": "unprocessed"
    },
    "踏": {
        "readings": [],
        "type": "unprocessed"
    },
    "騰": {
        "readings": [],
        "type": "unprocessed"
    },
    "闘": {
        "readings": [],
        "type": "unprocessed"
    },
    "篤": {
        "readings": [],
        "type": "unprocessed"
    },
    "曇": {
        "readings": [],
        "type": "unprocessed"
    },
    "縄": {
        "readings": ["じょう"],
        "type": "unknown"
    },
    "濃": {
        "readings": ["のう", "じょう"],
        "phonetic": "農",
        "type": "comp_phonetic"
    },
    "覇": {
        "readings": [],
        "type": "unprocessed"
    },
    "輩": {
        "readings": ["はい"],
        "phonetic": "非",
        "type": "comp_phonetic"
    },
    "賠": {
        "readings": ["ばい"],
        "phonetic": "咅",
        "type": "comp_phonetic"
    },
    "薄": {
        "readings": ["はく"],
        "phonetic": "溥",
        "type": "comp_phonetic"
    },
    "爆": {
        "readings": [],
        "type": "unprocessed"
    },
    "縛": {
        "readings": ["ばく", "はく"],
        "phonetic": "尃",
        "type": "comp_phonetic"
    },
    "繁": {
        "readings": [],
        "type": "unprocessed"
    },
    "藩": {
        "readings": [],
        "type": "unprocessed"
    },
    "範": {
        "readings": ["はん"],
        "phonetic": "氾",
        "type": "comp_phonetic"
    },
    "盤": {
        "readings": [],
        "type": "unprocessed"
    },
    "罷": {
        "readings": ["ひ"],
        "decomposition": ["网", "能"],
        "type": "comp_indicative"
    },
    "避": {
        "readings": [],
        "type": "unprocessed"
    },
    "賓": {
        "readings": ["ひん"],
        "type": "unknown"
    },
    "頻": {
        "readings": ["ひん", "びん"],
        "type": "comp_indicative"
    },
    "敷": {
        "readings": ["ふ"],
        "phonetic": "尃",
        "type": "comp_phonetic"
    },
    "膚": {
        "readings": [],
        "type": "unprocessed"
    },
    "譜": {
        "readings": [],
        "type": "unprocessed"
    },
    "賦": {
        "readings": ["ふ"],
        "phonetic": "武",
        "type": "comp_phonetic"
    },
    "舞": {
        "readings": ["ぶ", "む"],
        "phonetic": "無",
        "type": "comp_phonetic"
    },
    "覆": {
        "readings": ["ふく", "ふ", "ふう"],
        "phonetic": "复",
        "type": "comp_phonetic"
    },
    "噴": {
        "readings": ["ふん", "ほん"],
        "phonetic": "賁",
        "type": "comp_phonetic"
    },
    "墳": {
        "readings": ["ふん"],
        "phonetic": "賁",
        "type": "comp_phonetic"
    },
    "憤": {
        "readings": ["ふん"],
        "phonetic": "賁",
        "type": "comp_phonetic"
    },
    "幣": {
        "readings": [],
        "type": "unprocessed"
    },
    "弊": {
        "readings": [],
        "type": "unprocessed"
    },
    "壁": {
        "readings": [],
        "type": "unprocessed"
    },
    "癖": {
        "readings": [],
        "type": "unprocessed"
    },
    "舗": {
        "readings": ["ほ", "ふ"],
        "phonetic": "甫",
        "type": "comp_phonetic"
    },
    "穂": {
        "readings": [],
        "type": "unprocessed"
    },
    "簿": {
        "readings": ["ぼ", "ほ"],
        "phonetic": "溥",
        "type": "comp_phonetic"
    },
    "縫": {
        "readings": ["ほう"],
        "phonetic": "夆",
        "type": "comp_phonetic"
    },
    "褒": {
        "readings": [],
        "type": "unprocessed"
    },
    "膨": {
        "readings": ["ぼう", "ほう"],
        "phonetic": "彭",
        "type": "comp_phonetic"
    },
    "謀": {
        "readings": [],
        "type": "unprocessed"
    },
    "墨": {
        "readings": ["ぼく", "もく"],
        "phonetic": "黒",
        "type": "comp_phonetic"
    },
    "撲": {
        "readings": ["ぼく", "ほく"],
        "phonetic": "菐",
        "type": "comp_phonetic"
    },
    "翻": {
        "readings": ["ほん", "はん"],
        "phonetic": "番",
        "type": "comp_phonetic"
    },
    "摩": {
        "readings": ["ま"],
        "phonetic": "麻",
        "type": "comp_phonetic"
    },
    "磨": {
        "readings": ["ま", "ば"],
        "phonetic": "麻",
        "type": "comp_phonetic"
    },
    "魔": {
        "readings": ["ま", "ば"],
        "phonetic": "麻",
        "type": "comp_phonetic"
    },
    "繭": {
        "readings": [],
        "type": "unprocessed"
    },
    "魅": {
        "readings": ["み", "び"],
        "phonetic": "未",
        "type": "comp_phonetic"
    },
    "霧": {
        "readings": ["む", "ぶ"],
        "phonetic": "務",
        "type": "comp_phonetic"
    },
    "黙": {
        "readings": ["もく", "ぼく"],
        "phonetic": "黒",
        "type": "comp_phonetic"
    },
    "躍": {
        "readings": ["やく", "てき"],
        "phonetic": "翟",
        "type": "comp_phonetic"
    },
    "癒": {
        "readings": ["ゆ"],
        "phonetic": "兪",
        "type": "comp_phonetic"
    },
    "諭": {
        "readings": ["ゆ"],
        "phonetic": "兪",
        "type": "comp_phonetic"
    },
    "憂": {
        "readings": [],
        "type": "unprocessed"
    },
    "融": {
        "readings": [],
        "type": "unprocessed"
    },
    "慰": {
        "readings": [],
        "type": "unprocessed"
    },
    "窯": {
        "readings": [],
        "type": "unprocessed"
    },
    "謡": {
        "readings": ["よう"],
        "phonetic": "䍃",
        "type": "comp_phonetic"
    },
    "翼": {
        "readings": [],
        "type": "unprocessed"
    },
    "羅": {
        "readings": ["ら"],
        "type": "comp_indicative"
    },
    "頼": {
        "readings": ["らい"],
        "type": "unknown",
        "comment": "obscure phonetic 剌?"
    },
    "欄": {
        "readings": [],
        "type": "unprocessed"
    },
    "濫": {
        "readings": [],
        "type": "unprocessed"
    },
    "履": {
        "readings": ["り"],
        "type": "comp_indicative"
    },
    "離": {
        "readings": ["り"],
        "phonetic": "离",
        "type": "comp_phonetic"
    },
    "慮": {
        "readings": [],
        "type": "unprocessed"
    },
    "寮": {
        "readings": ["りょう"],
        "phonetic": "尞",
        "type": "comp_phonetic"
    },
    "療": {
        "readings": ["りょう"],
        "phonetic": "尞",
        "type": "comp_phonetic"
    },
    "糧": {
        "readings": ["りょう", "ろう"],
        "phonetic": "量",
        "type": "comp_phonetic"
    },
    "隣": {
        "readings": [],
        "type": "unprocessed"
    },
    "隷": {
        "readings": [],
        "type": "unprocessed"
    },
    "霊": {
        "readings": [],
        "type": "unprocessed"
    },
    "麗": {
        "readings": [],
        "type": "unprocessed"
    },
    "齢": {
        "readings": ["れい"],
        "phonetic": "令",
        "type": "comp_phonetic"
    },
    "擁": {
        "readings": ["よう"],
        "type": "unknown"
    },
    "露": {
        "readings": [],
        "type": "unprocessed"
    },


    "藤": {
        "readings": ["とう"],
        "phonetic": "滕",
        "type": "comp_phonetic"
    },
    "誰": {
        "readings": ["すい"],
        "phonetic": "隹",
        "type": "comp_phonetic"
    },
    "俺": {
        "readings": [],
        "type": "unprocessed"
    },
    "岡": {
        "readings": ["こう"],
        "type": "comp_indicative"
    },
    "頃": {
        "readings": ["けい", "きょう"],
        "type": "comp_indicative"
    },
    "奈": {
        "readings": ["な", "ない", "だい"],
        "type": "unknown",
        "comment": "TODO: using phonetic 示?"
    },
    "阪": {
        "readings": ["はん"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "韓": {
        "readings": ["かん"],
        "type": "unknown"
    },
    "弥": {
        "readings": ["び", "み"],
        "type": "unknown",
        "comment": "obscure phonetic 爾"
    },
    "那": {
        "readings": [],
        "type": "unprocessed"
    },
    "鹿": {
        "readings": ["ろく"],
        "type": "hieroglyph"
    },
    "斬": {
        "readings": [],
        "type": "unprocessed"
    },
    "虎": {
        "readings": ["こ"],
        "type": "unprocessed"
    },
    "狙": {
        "readings": ["そ", "しょ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "脇": {
        "readings": [],
        "type": "unprocessed"
    },
    "熊": {
        "readings": ["ゆう"],
        "decomposition": ["能", "炎"],
        "type": "unknown"
    },
    "尻": {
        "readings": ["こう"],
        "phonetic": "九",
        "type": "comp_phonetic"
    },
    "旦": {
        "readings": ["たん"],
        "type": "comp_indicative"
    },
    "闇": {
        "readings": ["あん"],
        "phonetic": "音",
        "type": "comp_phonetic"
    },
    "籠": {
        "readings": [],
        "type": "unprocessed"
    },
    "呂": {
        "readings": ["ろ", "りょ"],
        "type": "hieroglyph"
    },
    "亀": {
        "readings": [],
        "type": "unprocessed"
    },
    "頬": {
        "readings": ["きょう"],
        "phonetic": "夾",
        "type": "comp_phonetic"
    },
    "膝": {
        "readings": [],
        "type": "unprocessed"
    },
    "鶴": {
        "readings": ["かく"],
        "phonetic": "隺",
        "type": "comp_phonetic"
    },
    "匂": {
        "readings": [""],
        "type": "kokuji"
    },
    "沙": {
        "readings": ["さ", "しゃ"],
        "type": "unknown"
    },
    "須": {
        "readings": [],
        "type": "unprocessed"
    },
    "椅": {
        "readings": ["い"],
        "phonetic": "奇",
        "type": "comp_phonetic"
    },
    "股": {
        "readings": [],
        "type": "unprocessed"
    },
    "眉": {
        "readings": ["び", "み"],
        "type": "hieroglyph"
    },
    "挨": {
        "readings": [],
        "type": "unprocessed"
    },
    "拶": {
        "readings": [],
        "type": "unprocessed"
    },
    "鎌": {
        "readings": ["れん"],
        "phonetic": "兼",
        "type": "comp_phonetic"
    },
    "凄": {
        "readings": ["せい"],
        "phonetic": "妻",
        "type": "comp_phonetic"
    },
    "謎": {
        "readings": ["めい", "べい"],
        "phonetic": "迷",
        "type": "comp_phonetic"
    },
    "稽": {
        "readings": ["けい"],
        "phonetic": "旨",
        "type": "comp_phonetic"
    },
    "曾": {
        "readings": [],
        "type": "unprocessed"
    },
    "喉": {
        "readings": [],
        "type": "unprocessed"
    },
    "拭": {
        "readings": [],
        "type": "unprocessed"
    },
    "貌": {
        "readings": [],
        "type": "unprocessed"
    },
    "塞": {
        "readings": [],
        "type": "unprocessed"
    },
    "蹴": {
        "readings": [],
        "type": "unprocessed"
    },
    "鍵": {
        "readings": [],
        "type": "unprocessed"
    },
    "膳": {
        "readings": [],
        "type": "unprocessed"
    },
    "袖": {
        "readings": ["しゅう"],
        "phonetic": "由",
        "type": "comp_phonetic"
    },
    "潰": {
        "readings": [],
        "type": "unprocessed"
    },
    "駒": {
        "readings": ["く"],
        "phonetic": "句",
        "type": "comp_phonetic"
    },
    "剥": {
        "readings": [],
        "type": "unprocessed"
    },
    "鍋": {
        "readings": ["か"],
        "phonetic": "咼",
        "type": "comp_phonetic"
    },
    "湧": {
        "readings": ["ゆう"],
        "phonetic": "勇",
        "type": "comp_phonetic"
    },
    "葛": {
        "readings": [],
        "type": "unprocessed"
    },
    "梨": {
        "readings": ["り"],
        "phonetic": "利",
        "type": "comp_phonetic"
    },
    "貼": {
        "readings": ["ちょう", "てん"],
        "phonetic": "占",
        "type": "comp_phonetic"
    },
    "拉": {
        "readings": ["ら", "らつ", "ろう"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "枕": {
        "readings": [],
        "type": "unprocessed"
    },
    "顎": {
        "readings": [],
        "type": "unprocessed"
    },
    "苛": {
        "readings": ["か"],
        "phonetic": "可",
        "type": "comp_phonetic"
    },
    "蓋": {
        "readings": [],
        "type": "unprocessed"
    },
    "裾": {
        "readings": [],
        "type": "unprocessed"
    },
    "腫": {
        "readings": ["しゅ", "しょう"],
        "phonetic": "重",
        "type": "comp_phonetic"
    },
    "爪": {
        "readings": ["そう"],
        "type": "hieroglyph"
    },
    "嵐": {
        "readings": [],
        "type": "unprocessed"
    },
    "鬱": {
        "readings": [],
        "type": "unprocessed"
    },
    "妖": {
        "readings": ["よう"],
        "phonetic": "夭",
        "type": "comp_phonetic"
    },
    "藍": {
        "readings": [],
        "type": "unprocessed"
    },
    "捉": {
        "readings": [],
        "type": "unprocessed"
    },
    "宛": {
        "readings": [],
        "type": "unprocessed"
    },
    "崖": {
        "readings": ["がい"],
        "phonetic": "厓",
        "type": "comp_phonetic"
    },
    "叱": {
        "readings": ["しつ", "しち"],
        "phonetic": "七",
        "type": "comp_phonetic"
    },
    "瓦": {
        "readings": ["が"],
        "type": "hieroglyph"
    },
    "拳": {
        "readings": [],
        "type": "unprocessed"
    },
    "乞": {
        "readings": [],
        "type": "unprocessed"
    },
    "呪": {
        "readings": ["じゅ", "しゅう"],
        "phonetic": "兄",
        "type": "comp_phonetic"
    },
    "汰": {
        "readings": ["た", "たい"],
        "phonetic": "太",
        "type": "comp_phonetic"
    },
    "勃": {
        "readings": [],
        "type": "unprocessed"
    },
    "昧": {
        "readings": ["まい", "ばい"],
        "phonetic": "未",
        "type": "comp_phonetic"
    },
    "唾": {
        "readings": [],
        "type": "unprocessed"
    },
    "艶": {
        "readings": [],
        "type": "unprocessed"
    },
    "痕": {
        "readings": ["こん"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "諦": {
        "readings": [],
        "type": "unprocessed"
    },
    "餅": {
        "readings": [],
        "type": "unprocessed"
    },
    "瞳": {
        "readings": [],
        "type": "unprocessed"
    },
    "唄": {
        "readings": [],
        "type": "unprocessed"
    },
    "隙": {
        "readings": [],
        "type": "unprocessed"
    },
    "淫": {
        "readings": [],
        "type": "unprocessed"
    },
    "錦": {
        "readings": [],
        "type": "unprocessed"
    },
    "箸": {
        "readings": ["ちょ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "戚": {
        "readings": [],
        "type": "unprocessed"
    },
    "蒙": {
        "readings": [],
        "type": "unprocessed"
    },
    "妬": {
        "readings": ["と"],
        "phonetic": "石",
        "type": "comp_phonetic"
    },
    "蔑": {
        "readings": [],
        "type": "unprocessed"
    },
    "嗅": {
        "readings": [],
        "type": "unprocessed"
    },
    "蜜": {
        "readings": [],
        "type": "unprocessed"
    },
    "戴": {
        "readings": ["たい"],
        "phonetic": "𢦏",
        "type": "comp_phonetic"
    },
    "痩": {
        "readings": [],
        "type": "unprocessed"
    },
    "怨": {
        "readings": [],
        "type": "unprocessed"
    },
    "醒": {
        "readings": [],
        "type": "unprocessed"
    },
    "詣": {
        "readings": ["けい"],
        "phonetic": "旨",
        "type": "comp_phonetic"
    },
    "窟": {
        "readings": ["くつ"],
        "phonetic": "屈",
        "type": "comp_phonetic"
    },
    "巾": {
        "readings": ["きん"],
        "type": "hieroglyph"
    },
    "蜂": {
        "readings": ["ほう"],
        "phonetic": "夆",
        "type": "comp_phonetic"
    },
    "骸": {
        "readings": ["がい", "かい"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "弄": {
        "readings": [],
        "type": "unprocessed"
    },
    "嫉": {
        "readings": [],
        "type": "unprocessed"
    },
    "罵": {
        "readings": ["ば"],
        "phonetic": "馬",
        "type": "comp_phonetic"
    },
    "璧": {
        "readings": [],
        "type": "unprocessed"
    },
    "阜": {
        "readings": [],
        "type": "unprocessed"
    },
    "埼": {
        "readings": ["き"],
        "phonetic": "奇",
        "type": "comp_phonetic"
    },
    "伎": {
        "readings": ["き", "ぎ"],
        "phonetic": "支",
        "type": "comp_phonetic"
    },
    "曖": {
        "readings": [],
        "type": "unprocessed"
    },
    "餌": {
        "readings": ["じ"],
        "phonetic": "耳",
        "type": "comp_phonetic"
    },
    "爽": {
        "readings": [],
        "type": "unprocessed"
    },
    "詮": {
        "readings": ["せん"],
        "phonetic": "全",
        "type": "comp_phonetic"
    },
    "芯": {
        "readings": ["しん"],
        "phonetic": "心",
        "type": "comp_phonetic"
    },
    "綻": {
        "readings": [],
        "type": "unprocessed"
    },
    "肘": {
        "readings": ["ちゅう"],
        "type": "comp_indicative"
    },
    "麓": {
        "readings": ["ろく"],
        "phonetic": "鹿",
        "type": "comp_phonetic"
    },
    "憧": {
        "readings": ["しょう", "どう"],
        "phonetic": "童",
        "type": "comp_phonetic"
    },
    "頓": {
        "readings": ["とん", "トツ"],
        "phonetic": "屯",
        "type": "comp_phonetic"
    },
    "牙": {
        "readings": ["が", "げ"],
        "type": "hieroglyph"
    },
    "咽": {
        "readings": ["いん", "えつ", "えん"],
        "phonetic": "因",
        "type": "comp_phonetic"
    },
    "嘲": {
        "readings": ["ちょう", "とう"],
        "phonetic": "朝",
        "type": "comp_phonetic"
    },
    "臆": {
        "readings": [],
        "type": "unprocessed"
    },
    "挫": {
        "readings": ["ざ"],
        "phonetic": "坐",
        "type": "comp_phonetic"
    },
    "溺": {
        "readings": ["でき", "にょう", "じょう"],
        "phonetic": "弱",
        "type": "comp_phonetic"
    },
    "侶": {
        "readings": ["りょ", "ろ"],
        "phonetic": "呂",
        "type": "comp_phonetic"
    },
    "丼": {
        "readings": ["たん", "とん"],
        "type": "kokuji"
    },
    "瘍": {
        "readings": ["よう"],
        "phonetic": "昜",
        "type": "comp_phonetic"
    },
    "僅": {
        "readings": ["きん"],
        "phonetic": "堇",
        "type": "comp_phonetic"
    },
    "諜": {
        "readings": [],
        "type": "unprocessed"
    },
    "柵": {
        "readings": ["さく"],
        "phonetic": "冊",
        "type": "comp_phonetic"
    },
    "腎": {
        "readings": ["じん", "しん"],
        "phonetic": "臤",
        "type": "comp_phonetic"
    },
    "梗": {
        "readings": ["こう", "きょう"],
        "phonetic": "更",
        "type": "comp_phonetic"
    },
    "瑠": {
        "readings": [],
        "type": "unprocessed"
    },
    "羨": {
        "readings": [],
        "type": "unprocessed"
    },
    "酎": {
        "readings": [],
        "type": "unprocessed"
    },
    "畿": {
        "readings": ["き"],
        "phonetic": "幾",
        "type": "comp_phonetic"
    },
    "畏": {
        "readings": ["い"],
        "type": "unknown"
    },
    "瞭": {
        "readings": ["りょう"],
        "phonetic": "尞",
        "type": "comp_phonetic"
    },
    "踪": {
        "readings": [],
        "type": "unprocessed"
    },
    "栃": {
        "readings": [],
        "type": "unprocessed"
    },
    "蔽": {
        "readings": [],
        "type": "unprocessed"
    },
    "茨": {
        "readings": ["し"],
        "phonetic": "次",
        "type": "comp_phonetic"
    },
    "慄": {
        "readings": ["りつ"],
        "phonetic": "栗",
        "type": "comp_phonetic"
    },
    "傲": {
        "readings": [],
        "type": "unprocessed"
    },
    "虹": {
        "readings": ["こう"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "捻": {
        "readings": [],
        "type": "unprocessed"
    },
    "臼": {
        "readings": [],
        "type": "unprocessed"
    },
    "喩": {
        "readings": ["ゆ"],
        "phonetic": "兪",
        "type": "comp_phonetic"
    },
    "萎": {
        "readings": ["い"],
        "phonetic": "委",
        "type": "comp_phonetic"
    },
    "腺": {
        "readings": ["せん"],
        "phonetic": "泉",
        "type": "kokuji"
    },
    "桁": {
        "readings": ["こう"],
        "phonetic": "行",
        "type": "comp_phonetic"
    },
    "玩": {
        "readings": ["がん"],
        "phonetic": "元",
        "type": "comp_phonetic"
    },
    "冶": {
        "readings": ["や"],
        "type": "unknown",
        "comment": "maybe 台"
    },
    "羞": {
        "readings": ["しゅう"],
        "type": "comp_indicative"
    },
    "惧": {
        "readings": ["ぐ", "く"],
        "phonetic": "具",
        "type": "comp_phonetic"
    },
    "舷": {
        "readings": ["げん"],
        "phonetic": "玄",
        "type": "comp_phonetic"
    },
    "貪": {
        "readings": ["どん", "たん"],
        "type": "unknown",
        "comment": "phonetic 今?"
    },
    "采": {
        "readings": ["さい"],
        "type": "comp_indicative"
    },
    "堆": {
        "readings": ["たい", "つい"],
        "phonetic": "隹",
        "type": "comp_phonetic"
    },
    "煎": {
        "readings": [],
        "type": "unprocessed"
    },
    "斑": {
        "readings": [],
        "type": "unprocessed"
    },
    "冥": {
        "readings": [],
        "type": "unprocessed"
    },
    "遜": {
        "readings": [],
        "type": "unprocessed"
    },
    "旺": {
        "readings": ["おう"],
        "phonetic": "王",
        "type": "comp_phonetic"
    },
    "麺": {
        "readings": [],
        "type": "unprocessed"
    },
    "璃": {
        "readings": ["り"],
        "phonetic": "离",
        "type": "comp_phonetic"
    },
    "串": {
        "readings": [],
        "type": "unprocessed"
    },
    "填": {
        "readings": [],
        "type": "unprocessed"
    },
    "箋": {
        "readings": [],
        "type": "unprocessed"
    },
    "脊": {
        "readings": [],
        "type": "unprocessed"
    },
    "緻": {
        "readings": [],
        "type": "unprocessed"
    },
    "辣": {
        "readings": [],
        "type": "unprocessed"
    },
    "摯": {
        "readings": [],
        "type": "unprocessed"
    },
    "汎": {
        "readings": [],
        "type": "unprocessed"
    },
    "憚": {
        "readings": ["たん"],
        "phonetic": "単",
        "type": "comp_phonetic"
    },
    "哨": {
        "readings": ["しょう"],
        "phonetic": "肖",
        "type": "comp_phonetic"
    },
    "氾": {
        "readings": ["はん"],
        "type": "hieroglyph"
    },
    "諧": {
        "readings": ["かい"],
        "phonetic": "皆",
        "type": "comp_phonetic"
    },
    "媛": {
        "readings": ["えん"],
        "phonetic": "爰",
        "type": "comp_phonetic"
    },
    "彙": {
        "readings": [],
        "type": "unprocessed"
    },
    "恣": {
        "readings": ["し"],
        "phonetic": "次",
        "type": "comp_phonetic"
    },
    "聘": {
        "readings": [],
        "type": "unprocessed"
    },
    "沃": {
        "readings": ["よく", "おく"],
        "phonetic": "夭",
        "type": "comp_phonetic"
    },
    "憬": {
        "readings": [],
        "type": "unprocessed"
    },
    "捗": {
        "readings": [],
        "type": "unprocessed"
    },
    "訃": {
        "readings": ["ふ"],
        "phonetic": "卜",
        "type": "comp_phonetic"
    },

    "遥": {
        "readings": ["よう"],
        "phonetic": "䍃",
        "type": "comp_phonetic"
    },
    "椎": {
        "readings": ["すい"],
        "phonetic": "隹",
        "type": "comp_phonetic"
    },
    "茜": {
        "readings": ["せん"],
        "phonetic": "西",
        "type": "comp_phonetic"
    },
    "吾": {
        "readings": ["ご"],
        "type": "unknown",
        "comment": "TODO: tone mark 五?"
    },
    "贅": {
        "readings": ["ぜい", "せい"],
        "type": "unknown"
    },
    "賭": {
        "readings": ["と"],
        "type": "unknown"
    }
}
`);
// #############################################################################


// List of all phonetic components here ...
// #############################################################################
KeiseiDB.prototype.phonetic_db = JSON.parse(`
{
    "七": {
        "readings": ["しち", "しつ"],
        "compounds": ["叱", "切"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "seven"
    },
    "十": {
        "readings": ["じゅう", "しゅう"],
        "compounds": ["汁", "針"],
        "non_compounds": ["計"],
        "xrefs": [],
        "wk-radical": "cross"
    },
    "土": {
        "readings": ["と", "ど"],
        "compounds": ["吐", "社"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "grave"
    },
    "大": {
        "readings": ["だい", "たい"],
        "compounds": ["戻"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "big"
    },
    "子": {
        "readings": ["し", "す"],
        "compounds": ["字"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "child"
    },
    "早": {
        "readings": ["そう"],
        "compounds": ["草"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "early"
    },
    "寸": {
        "readings": ["そん", "すん"],
        "compounds": ["村"],
        "non_compounds": ["討", "耐"],
        "xrefs": [],
        "wk-radical": "measurement"
    },
    "屯": {
        "readings": ["とん", "どん"],
        "compounds": ["純", "春", "鈍", "頓"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "thorn"
    },
    "丁": {
        "readings": ["ちょう", "てい", "とう"],
        "compounds": ["庁", "灯", "町", "亭", "頂", "訂", "打"],
        "non_compounds": ["貯"],
        "xrefs": [],
        "wk-radical": "nail",
        "comment": "phonetic xref 宁?"
    },
    "化": {
        "readings": ["か", "け", "げ"],
        "compounds": ["花", "貨", "靴"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "change"
    },
    "見": {
        "readings": ["けん", "げん"],
        "compounds": ["現"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "see"
    },
    "貝": {
        "readings": ["ばい", "まい"],
        "compounds": ["敗"],
        "non_compounds": ["買"],
        "xrefs": [],
        "wk-radical": "clam"
    },
    "赤": {
        "readings": ["せき", "しゃく"],
        "compounds": ["赦"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "red"
    },
    "足": {
        "readings": ["そく", "しょく"],
        "compounds": ["促"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "foot"
    },
    "方": {
        "readings": ["ほう", "ぼう"],
        "compounds": ["坊", "妨", "芳", "防", "放", "肪", "房", "紡", "訪"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "direction",
        "comment": "added ぼう, no reason found"
    },
    "古": {
        "readings": ["こ"],
        "compounds": ["苦", "固", "故", "枯"],
        "non_compounds": [],
        "xrefs": ["固"],
        "wk-radical": "old"
    },
    "固": {
        "readings": ["こ"],
        "compounds": ["箇", "個"],
        "non_compounds": [],
        "xrefs": ["古"],
        "wk-radical": null
    },
    "生": {
        "readings": ["せい", "しょう"],
        "compounds": ["姓", "性", "牲", "星", "青"],
        "non_compounds": [],
        "xrefs": ["青"],
        "wk-radical": "life"
    },
    "青": {
        "readings": ["せい", "しょう"],
        "compounds": ["情", "清", "精", "請", "晴", "静"],
        "non_compounds": [],
        "xrefs": ["生"],
        "wk-radical": "blue"
    },
    "且": {
        "readings": ["しょ", "そ", "しょう"],
        "compounds": ["助", "狙", "阻", "祖", "租", "組", "粗", "査"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "top-hat"
    },
    "各": {
        "readings": ["かく"],
        "compounds": ["客", "格", "略", "絡", "路", "酪", "閣", "額"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "kiss"
    },
    "主": {
        "readings": ["しゅ", "す"],
        "compounds": ["住", "注", "柱", "駐"],
        "non_compounds": ["往"],
        "xrefs": [],
        "wk-radical": "master"
    },
    "王": {
        "readings": ["おう"],
        "compounds": ["往", "旺"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "king"
    },
    "几": {
        "readings": ["き"],
        "compounds": ["机", "肌", "飢"],
        "non_compounds": ["処"],
        "xrefs": [],
        "wk-radical": "table"
    },
    "亡": {
        "readings": ["ぼう", "もう"],
        "compounds": ["妄", "忘", "盲", "忙", "望"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "death"
    },
    "干": {
        "readings": ["かん"],
        "compounds": ["刊", "汗", "肝", "岸", "幹", "軒"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "antenna"
    },
    "己": {
        "readings": ["こ", "き"],
        "compounds": ["妃", "忌", "紀", "記", "配", "改"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "cobra"
    },
    "工": {
        "readings": ["こう", "く"],
        "compounds": ["功", "江", "紅", "虹", "空", "貢", "攻"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "construction"
    },
    "及": {
        "readings": ["きゅう"],
        "compounds": ["吸", "扱", "急", "級"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "escalator"
    },
    "中": {
        "readings": ["ちゅう"],
        "compounds": ["仲", "沖", "忠", "衷"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "middle"
    },
    "反": {
        "readings": ["はん", "ほん", "たん"],
        "compounds": ["坂", "阪", "返", "板", "版", "販", "飯"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "devil"
    },
    "白": {
        "readings": ["はく", "びゃく"],
        "compounds": ["伯", "泊", "拍", "迫", "舶"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "white"
    },
    "皮": {
        "readings": ["ひ"],
        "compounds": ["披", "彼", "波", "破", "疲", "被"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "skin"
    },
    "包": {
        "readings": ["ほう"],
        "compounds": ["砲", "飽", "抱", "泡", "胞"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "wrap"
    },
    "可": {
        "readings": ["か", "こく"],
        "compounds": ["何", "河", "苛"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "lip-ring"
    },
    "司": {
        "readings": ["し", "す"],
        "compounds": ["伺", "詞", "飼", "嗣"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "director"
    },
    "召": {
        "readings": ["しょう"],
        "compounds": ["招", "沼", "昭", "紹", "詔", "超"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "joker"
    },
    "寺": {
        "readings": ["じ"],
        "compounds": ["侍", "待", "持", "時", "特", "詩", "等"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "temple"
    },
    "圭": {
        "readings": ["けい"],
        "compounds": ["街", "掛"],
        "non_compounds": ["厓"],
        "xrefs": [],
        "wk-radical": null
    },
    "交": {
        "readings": ["こう"],
        "compounds": ["郊", "校", "絞", "較", "効"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "mix"
    },
    "我": {
        "readings": ["が"],
        "compounds": ["餓"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "ego"
    },
    "義": {
        "readings": ["ぎ"],
        "compounds": ["儀", "犠", "議"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "righteousness"
    },
    "兪": {
        "readings": ["ゆ"],
        "compounds": ["愉", "喩", "癒", "諭", "輸"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "death-star"
    },
    "由": {
        "readings": ["ゆ", "ゆう", "ゆい"],
        "compounds": ["油", "宙", "笛", "軸", "袖"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "reason"
    },
    "莫": {
        "readings": ["ばく", "まく", "ぼ", "も"],
        "compounds": ["募", "墓", "幕", "漠", "慕", "模", "膜", "暮"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "greenhouse"
    },
    "小": {
        "readings": ["しょう"],
        "compounds": ["肖"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "small"
    },
    "肖": {
        "readings": ["しょう"],
        "compounds": ["削", "哨", "宵", "消", "硝"],
        "non_compounds": [],
        "xrefs": ["小"],
        "wk-radical": null
    },
    "山": {
        "readings": ["さん", "せん"],
        "compounds": ["仙"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "mountain"
    },
    "文": {
        "readings": ["ぶん", "もん"],
        "compounds": ["紋", "蚊"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "doll"
    },
    "正": {
        "readings": ["せい", "しょう"],
        "compounds": ["征", "定", "政", "症", "証", "整"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "correct"
    },
    "出": {
        "readings": ["しゅつ", "すい"],
        "compounds": ["拙"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "exit"
    },
    "左": {
        "readings": ["さ"],
        "compounds": ["佐", "差"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "石": {
        "readings": ["せき", "しゃく", "こく", "じゃく"],
        "compounds": ["拓", "妬"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "stone"
    },
    "立": {
        "readings": ["りつ", "りゅう"],
        "compounds": ["位", "拉", "泣", "粒", "翌"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "stand"
    },
    "先": {
        "readings": ["せん"],
        "compounds": ["洗", "銑"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "previous"
    },
    "名": {
        "readings": ["めい", "みょう"],
        "compounds": ["銘"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "name"
    },
    "音": {
        "readings": ["おん", "いん"],
        "compounds": ["暗", "闇"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "sound"
    },
    "才": {
        "readings": ["さい"],
        "compounds": ["材", "財"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "genius"
    },
    "内": {
        "readings": ["ない", "だい", "のう", "どう"],
        "compounds": ["納"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "inside"
    },
    "午": {
        "readings": ["ご"],
        "compounds": ["許"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "noon"
    },
    "元": {
        "readings": ["げん", "がん"],
        "compounds": ["玩", "頑"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "origin"
    },
    "完": {
        "readings": ["かん"],
        "compounds": ["院"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "今": {
        "readings": ["こん", "きん"],
        "compounds": ["含", "吟", "念"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "now"
    },
    "公": {
        "readings": ["こう", "く"],
        "compounds": ["松", "翁", "訟"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "public"
    },
    "戸": {
        "readings": ["こ"],
        "compounds": ["所", "雇"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "door"
    },
    "止": {
        "readings": ["し"],
        "compounds": ["企", "祉", "歯"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "stop"
    },
    "分": {
        "readings": ["ふん", "ぶん", "ぶ"],
        "compounds": ["盆", "貧", "粉", "紛", "雰", "頒"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "part"
    },
    "少": {
        "readings": ["しょう"],
        "compounds": ["秒"],
        "non_compounds": ["沙"],
        "xrefs": [],
        "wk-radical": "few"
    },
    "半": {
        "readings": ["はん"],
        "compounds": ["伴", "判", "畔"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "half"
    },
    "北": {
        "readings": ["ほく"],
        "compounds": ["背"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "north"
    },
    "兄": {
        "readings": ["けい", "きょう"],
        "compounds": [ "呪", "況"],
        "non_compounds": ["祝"],
        "xrefs": [],
        "wk-radical": "older-brother"
    },
    "広": {
        "readings": ["こう"],
        "compounds": ["拡", "鉱"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "wide"
    },
    "失": {
        "readings": ["しつ", "いつ"],
        "compounds": ["失", "迭", "秩"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "fault"
    },
    "矢": {
        "readings": ["し"],
        "compounds": ["矢", "疾"],
        "non_compounds": ["疑"],
        "xrefs": [],
        "wk-radical": "arrow"
    },
    "会": {
        "readings": ["かい", "え"],
        "compounds": ["会", "絵"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "meet"
    },
    "合": {
        "readings": ["ごう", "こう"],
        "compounds": ["合", "拾", "給", "答"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "suit"
    },
    "同": {
        "readings": ["どう"],
        "compounds": ["同", "洞", "筒", "銅", "胴"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "same"
    },
    "米": {
        "readings": ["べい", "まい", "め"],
        "compounds": ["米", "迷"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "rice"
    },
    "迷": {
        "readings": ["めい"],
        "compounds": ["迷", "謎"],
        "non_compounds": [],
        "xrefs": ["米"],
        "wk-radical": null
    },
    "考": {
        "readings": ["こう"],
        "compounds": ["考", "拷"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "売": {
        "readings": ["ばい"],
        "compounds": ["続", "読"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "sell"
    },
    "谷": {
        "readings": ["こく"],
        "compounds": ["俗", "浴", "容", "欲", "裕"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "valley"
    },
    "量": {
        "readings": ["りょう", "ろう"],
        "compounds": ["糧"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "制": {
        "readings": ["せい"],
        "compounds": ["製"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "control"
    },
    "斤": {
        "readings": ["きん"],
        "compounds": ["近", "析", "祈"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "axe"
    },
    "里": {
        "readings": ["り"],
        "compounds": ["理", "裏"],
        "non_compounds": ["厘"],
        "xrefs": [],
        "wk-radical": "sunflower"
    },
    "東": {
        "readings": ["とう"],
        "compounds": ["凍", "棟"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "east"
    },
    "京": {
        "readings": ["きょう", "けい", "きん"],
        "compounds": ["景", "鯨"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "capital"
    },
    "直": {
        "readings": ["ちょく", "じき", "ち"],
        "compounds": ["値", "植", "殖", "置"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "未": {
        "readings": ["み", "び"],
        "compounds": ["味", "妹", "昧", "魅"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "jet"
    },
    "占": {
        "readings": ["せん", "てん"],
        "compounds": ["店", "貼", "粘", "点"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "fortune",
        "comment": "added phonetic てん, but found no reason"
    },
    "明": {
        "readings": ["めい", "みょう", "みん"],
        "compounds": ["盟"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "bright"
    },
    "歩": {
        "readings": ["ほ", "ぶ", "ふ"],
        "compounds": [],
        "non_compounds": ["頻", "渉"],
        "xrefs": [],
        "wk-radical": "walk"
    },
    "長": {
        "readings": ["ちょう"],
        "compounds": ["帳", "張"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "long"
    },
    "門": {
        "readings": ["もん", "ぼん"],
        "compounds": ["問", "聞"],
        "non_compounds": ["閉"],
        "xrefs": [],
        "wk-radical": "gate"
    },
    "是": {
        "readings": ["ぜ", "し", "てい", "だい"],
        "compounds": ["是", "堤", "提", "題"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null,
        "comment": "added だい, てい to readings, no source"
    },
    "象": {
        "readings": ["しょう", "ぞう"],
        "compounds": ["像"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "袁": {
        "readings": ["えん", "おん"],
        "compounds": ["遠", "園"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null,
        "comment": "TODO: missing compound info, search!"
    },
    "示": {
        "readings": ["じ", "し"],
        "compounds": ["視"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "jackhammer"
    },
    "秋": {
        "readings": ["しゅう"],
        "compounds": ["愁"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "弱": {
        "readings": ["じゃく", "にゃく"],
        "compounds": ["溺"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "朱": {
        "readings": ["しゅ", "す"],
        "compounds": ["株", "殊", "珠"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "甫": {
        "readings": ["ほ", "ふ"],
        "compounds": ["浦", "捕", "補", "舗"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "wedding"
    },
    "辰": {
        "readings": ["しん"],
        "compounds": ["唇", "娠", "振", "震"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "superman"
    },
    "良": {
        "readings": ["りょう", "ろう"],
        "compounds": ["浪", "郎", "朗", "娘"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "郎": {
        "readings": ["ろう"],
        "compounds": [],
        "non_compounds": [],
        "xrefs": ["良"],
        "wk-radical": null
    },
    "倉": {
        "readings": ["そう"],
        "compounds": ["創"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "非": {
        "readings": ["ひ"],
        "compounds": ["俳", "排", "悲", "扉", "輩"],
        "non_compounds": ["罪"],
        "xrefs": [],
        "wk-radical": "injustice"
    },
    "其": {
        "readings": ["き"],
        "compounds": ["期", "欺", "棋", "基", "旗"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "crab"
    },
    "圣": {
        "readings": ["けい"],
        "compounds": ["茎", "径", "経", "軽", "怪"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "tombstone"
    },
    "馬": {
        "readings": ["ば", "め", "ま"],
        "compounds": ["罵"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "horse"
    },
    "高": {
        "readings": ["こう"],
        "compounds": ["稿"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "tall"
    },
    "囟": {
        "readings": ["しん", "し"],
        "compounds": ["細", "思"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "周": {
        "readings": ["しゅう", "す"],
        "compounds": ["彫", "週", "調"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "ghost"
    },
    "予": {
        "readings": ["よ"],
        "compounds": ["序", "野", "預"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "beforehand"
    },
    "昜": {
        "readings": ["よう"],
        "compounds": ["場", "陽", "瘍", "湯", "腸"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "gravity",
        "comment": "TODO: incomplete info, search!"
    },
    "道": {
        "readings": ["どう", "とう"],
        "compounds": ["導"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "road"
    },
    "番": {
        "readings": ["ばん", "はん", "は"],
        "compounds": ["翻"],
        "non_compounds": ["審"],
        "xrefs": [],
        "wk-radical": "number"
    },
    "吾": {
        "readings": ["ご"],
        "compounds": ["悟", "語"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "賓": {
        "readings": ["ひん"],
        "compounds": ["浜"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null,
        "comment": "TODO info missing, search!"
    },
    "卜": {
        "readings": ["ぼく", "ほく"],
        "compounds": ["朴", "訃", "赴"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "toe"
    },
    "氾": {
        "readings": ["はん"],
        "compounds": ["範"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "奇": {
        "readings": ["き"],
        "compounds": ["埼", "崎", "寄", "椅", "騎"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "odd"
    },
    "皆": {
        "readings": ["かい"],
        "compounds": ["階", "諧"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "不": {
        "readings": ["ふ", "ぶ"],
        "compounds": ["杯"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "not"
    },
    "加": {
        "readings": ["か"],
        "compounds": ["架", "賀"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "弋": {
        "readings": ["よく", "いき"],
        "compounds": ["代", "式"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "ceremony"
    },
    "代": {
        "readings": [],
        "compounds": ["袋", "貸"],
        "non_compounds": [],
        "xrefs": ["弋"],
        "wk-radical": "substitute"
    },
    "央": {
        "readings": ["おう", "よう", "えい"],
        "compounds": ["英", "映"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "central"
    },
    "勺": {
        "readings": ["しゃく"],
        "compounds": ["約", "酌", "釣"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "pool"
    },
    "氐": {
        "readings": ["てい", "たい"],
        "compounds": ["低", "底", "抵", "邸"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "兑": {
        "readings": ["だ", "たい", "えつ", "えい"],
        "compounds": ["悦", "脱", "税", "説", "鋭"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "guard"
    },
    "曽": {
        "readings": ["そう", "そ", "ぞう"],
        "compounds": ["贈", "僧", "増", "層", "噌", "憎"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "mask",
        "comment": "TODO: no list, search! TODO: 噌 not in joyo!"
    },
    "菐": {
        "readings": ["ほく", "ぼく"],
        "compounds": ["撲", "僕"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "business",
        "comment": "WK uses the wrong radical here ..."
    },
    "取": {
        "readings": ["しゅ"],
        "compounds": ["趣"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "卓": {
        "readings": ["たく"],
        "compounds": ["悼"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "昔": {
        "readings": ["せき", "しゃく"],
        "compounds": ["借", "措", "錯"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "long-ago"
    },
    "具": {
        "readings": ["ぐ", "く"],
        "compounds": ["惧"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "台": {
        "readings": ["だい", "たい"],
        "compounds": [],
        "non_compounds": ["冶", "治", "始"],
        "xrefs": [],
        "wk-radical": "machine",
        "comment": "TODO: this doesn't have compounds, maybe problems."
    },
    "申": {
        "readings": ["しん"],
        "compounds": ["伸", "神", "紳"],
        "non_compounds": ["電"],
        "xrefs": [],
        "wk-radical": "say-humbly"
    },
    "鹿": {
        "readings": ["ろく"],
        "compounds": ["麓"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "心": {
        "readings": ["しん"],
        "compounds": ["芯"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "heart"
    },
    "全": {
        "readings": ["ぜん", "せん"],
        "compounds": ["詮", "栓"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "耳": {
        "readings": ["じ"],
        "compounds": ["餌", "恥"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "ear"
    },
    "𢦏": {
        "readings": ["さい"],
        "compounds": ["災", "栽", "裁", "載", "戴"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "原": {
        "readings": ["げん", "がん", "ごん"],
        "compounds": ["源", "願"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "diamond"
    },
    "家": {
        "readings": ["か", "け"],
        "compounds": ["嫁", "稼"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "house"
    },
    "氏": {
        "readings": ["し"],
        "compounds": ["紙"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "duck"
    },
    "者": {
        "readings": ["しゃ", "しょ", "と"],
        "compounds": ["都", "暑", "煮", "署", "箸", "諸", "書", "緒"],
        "non_compounds": ["賭"],
        "xrefs": [],,
        "wk-radical": "someone"
        "comment": "added しょ, but found no reason"
    },
    "甬": {
        "readings": ["つう", "よう", "ゆう"],
        "compounds": ["通", "痛", "踊", "勇"],
        "non_compounds": [],
        "xrefs": ["勇"],
        "wk-radical": null
    },
    "勇": {
        "readings": ["ゆう", "よう"],
        "compounds": ["湧"],
        "non_compounds": [],
        "xrefs": ["甬"],
        "wk-radical": "courage"
    },
    "㕣": {
        "readings": ["えん"],
        "compounds": ["船", "沿", "鉛"],
        "non_compounds": [],
        "xrefs": ["兑"],
        "wk-radical": null
    },
    "黄": {
        "readings": ["こう", "おう"],
        "compounds": ["広", "横"],
        "non_compounds": [],
        "xrefs": ["広"],
        "wk-radical": "yellow"
    },
    "黒": {
        "readings": ["こく"],
        "compounds": ["墨", "黙"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "black"
    },
    "朝": {
        "readings": ["ちょう"],
        "compounds": ["嘲", "潮"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "間": {
        "readings": ["かん", "けん"],
        "compounds": ["簡"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "interval"
    },
    "云": {
        "readings": ["うん"],
        "compounds": ["芸", "雲", "魂"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "boobs"
    },
    "果": {
        "readings": ["か"],
        "compounds": ["菓", "裸", "課"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "fruit"
    },
    "卒": {
        "readings": ["そつ", "しゅつ"],
        "compounds": ["砕", "粋"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "列": {
        "readings": ["れつ"],
        "compounds": ["例", "烈", "裂"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "参": {
        "readings": ["さん", "しん"],
        "compounds": ["惨"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": null
    },
    "官": {
        "readings": ["かん"],
        "compounds": ["棺", "管", "館"],
        "non_compounds": [],
        "xrefs": []
    },
    "付": {
        "readings": ["ふ"],
        "compounds": ["府", "附", "符", "腐"],
        "non_compounds": [],
        "xrefs": []
    },
    "牙": {
        "readings": ["が", "げ"],
        "compounds": ["芽", "邪", "雅"],
        "non_compounds": [],
        "xrefs": []
    },
    "新": {
        "readings": ["しん"],
        "compounds": ["薪"],
        "non_compounds": [],
        "xrefs": []
    },
    "楽": {
        "readings": ["がく", "らく", "ごう", "ぎょう"],
        "compounds": ["薬"],
        "non_compounds": [],
        "xrefs": []
    },
    "尞": {
        "readings": ["りょう"],
        "compounds": ["僚", "寮", "瞭"],
        "non_compounds": [],
        "xrefs": []
    },
    "泉": {
        "readings": ["せん"],
        "compounds": ["腺", "線"],
        "non_compounds": [],
        "xrefs": []
    },
    "辛": {
        "readings": ["しん"],
        "compounds": ["亲"],
        "non_compounds": [],
        "xrefs": []
    },
    "亲": {
        "readings": ["しん"],
        "compounds": ["親"],
        "non_compounds": [],
        "xrefs": ["辛"]
    },
    "豆": {
        "readings": ["とう", "ず"],
        "compounds": ["短", "痘", "登", "頭"],
        "non_compounds": [],
        "xrefs": []
    },
    "彦": {
        "readings": ["げん"],
        "compounds": ["顔"],
        "non_compounds": [],
        "xrefs": []
    },
    "夫": {
        "readings": ["ふ", "ふう", "ぶ"],
        "compounds": ["扶"],
        "non_compounds": [],
        "xrefs": []
    },
    "史": {
        "readings": ["し"],
        "compounds": ["使"],
        "non_compounds": [],
        "xrefs": []
    },
    "畐": {
        "readings": ["ふく", "ひき"],
        "compounds": ["富", "福", "副", "幅"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO incomplete, search !"
    },
    "次": {
        "readings": ["じ", "し"],
        "compounds": ["姿", "茨", "恣", "資"],
        "non_compounds": [],
        "xrefs": []
    },
    "寅": {
        "readings": ["いん"],
        "compounds": ["演"],
        "non_compounds": [],
        "xrefs": []
    },
    "貫": {
        "readings": ["かん", "うん"],
        "compounds": ["慣"],
        "non_compounds": [],
        "xrefs": []
    },
    "賁": {
        "readings": ["ひ", "ほん", "ふん"],
        "compounds": ["憤", "噴", "墳"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO no info, search!"
    },
    "冓": {
        "readings": ["こう"],
        "compounds": ["溝", "構", "講", "購"],
        "non_compounds": [],
        "xrefs": []
    },
    "雇": {
        "readings": ["こ"],
        "compounds": ["顧"],
        "non_compounds": [],
        "xrefs": ["戸"]
    },
    "必": {
        "readings": ["ひつ"],
        "compounds": ["泌", "秘"],
        "non_compounds": [],
        "xrefs": []
    },
    "末": {
        "readings": ["まつ", "ばつ"],
        "compounds": ["抹"],
        "non_compounds": [],
        "xrefs": []
    },
    "昆": {
        "readings": ["こん"],
        "compounds": ["混"],
        "non_compounds": [],
        "xrefs": []
    },
    "艮": {
        "readings": ["こん", "ごん"],
        "compounds": ["限", "恨", "根", "眼", "痕", "銀"],
        "non_compounds": [],
        "xrefs": []
    },
    "多": {
        "readings": ["た"],
        "compounds": ["移"],
        "non_compounds": [],
        "xrefs": []
    },
    "弗": {
        "readings": ["ふつ"],
        "compounds": ["仏", "沸", "払"],
        "non_compounds": [],
        "xrefs": []
    },
    "丩": {
        "readings": ["きゅう"],
        "compounds": ["叫", "糾"],
        "non_compounds": [],
        "xrefs": []
    },
    "冊": {
        "readings": ["さつ", "さく"],
        "compounds": ["柵"],
        "non_compounds": [],
        "xrefs": []
    },
    "区": {
        "readings": ["く", "おう"],
        "compounds": ["欧", "殴", "駆", "枢"],
        "non_compounds": [],
        "xrefs": []
    },
    "平": {
        "readings": ["へい", "びょう", "ひょう"],
        "compounds": ["坪", "評"],
        "non_compounds": [],
        "xrefs": []
    },
    "也": {
        "readings": ["や"],
        "compounds": ["地", "池", "他", "施"],
        "non_compounds": [],
        "xrefs": []
    },
    "向": {
        "readings": ["こう", "きょう", "しょう"],
        "compounds": ["尚"],
        "non_compounds": [],
        "xrefs": []
    },
    "州": {
        "readings": ["しゅう"],
        "compounds": ["酬"],
        "non_compounds": [],
        "xrefs": []
    },
    "安": {
        "readings": ["あん"],
        "compounds": ["案"],
        "non_compounds": [],
        "xrefs": []
    },
    "羊": {
        "readings": ["よう", "しょう", "じょう"],
        "compounds": ["洋", "祥", "詳", "養"],
        "non_compounds": [],
        "xrefs": []
    },
    "有": {
        "readings": ["ゆう", "う"],
        "compounds": ["賄"],
        "non_compounds": [],
        "xrefs": []
    },
    "君": {
        "readings": ["くん"],
        "compounds": ["郡", "群"],
        "non_compounds": [],
        "xrefs": []
    },
    "役": {
        "readings": ["やく", "えき"],
        "compounds": ["疫"],
        "non_compounds": [],
        "xrefs": []
    },
    "九": {
        "readings": ["きゅう", "く"],
        "compounds": ["尻", "究", "軌"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "nine"
    },
    "永": {
        "readings": ["えい", "よう"],
        "compounds": ["泳", "詠"],
        "non_compounds": [],
        "xrefs": []
    },
    "乍": {
        "readings": ["さ", "さく", "じゃ"],
        "compounds": ["詐", "作", "昨", "酢"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "key"
    },
    "巨": {
        "readings": ["きょ", "こ"],
        "compounds": ["拒", "距"],
        "non_compounds": [],
        "xrefs": []
    },
    "吉": {
        "readings": ["きち", "きつ"],
        "compounds": ["結", "詰"],
        "non_compounds": [],
        "xrefs": []
    },
    "朿": {
        "readings": ["し"],
        "compounds": ["刺", "策", "責"],
        "non_compounds": [],
        "xrefs": []
    },
    "兆": {
        "readings": ["ちょう"],
        "compounds": ["挑", "逃", "桃", "眺", "跳"],
        "non_compounds": [],
        "xrefs": []
    },
    "僉": {
        "readings": ["けん"],
        "compounds": ["倹", "険", "験", "検", "剣"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "則": {
        "readings": ["そく"],
        "compounds": ["側", "測", "賊"],
        "non_compounds": [],
        "xrefs": []
    },
    "章": {
        "readings": ["しょう"],
        "compounds": ["彰", "障", "商"],
        "non_compounds": [],
        "xrefs": []
    },
    "呉": {
        "readings": ["ご"],
        "compounds": ["娯", "誤", "虞"],
        "non_compounds": [],
        "xrefs": []
    },
    "蜀": {
        "readings": ["ぞく", "しょく"],
        "compounds": ["濁", "独", "属", "触"],
        "non_compounds": [],
        "xrefs": []
    },
    "亥": {
        "readings": ["がい", "かい"],
        "compounds": ["刻", "劾", "核", "該", "骸"],
        "non_compounds": [],
        "xrefs": []
    },
    "臧": {
        "readings": ["ぞう", "そう"],
        "compounds": ["蔵"],
        "non_compounds": [],
        "xrefs": []
    },
    "蔵": {
        "readings": ["ぞう", "そう"],
        "compounds": ["臓"],
        "non_compounds": [],
        "xrefs": ["臧"]
    },
    "䍃": {
        "readings": ["よう"],
        "compounds": ["揺", "謡", "遥"],
        "non_compounds": [],
        "xrefs": []
    },
    "余": {
        "readings": ["よ"],
        "compounds": ["徐", "途", "除", "斜"],
        "non_compounds": [],
        "xrefs": []
    },
    "厓": {
        "readings": ["がい"],
        "compounds": ["涯", "崖"],
        "non_compounds": [],
        "xrefs": []
    },
    "扁": {
        "readings": ["へん", "はん"],
        "compounds": ["偏", "遍", "編"],
        "non_compounds": [],
        "xrefs": []
    },
    "韋": {
        "readings": ["い"],
        "compounds": ["偉", "囲", "違", "衛"],
        "non_compounds": ["韓"],
        "xrefs": []
    },
    "戠": {
        "readings": ["しょく", "し", "しき"],
        "compounds": ["職", "識", "織"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "郷": {
        "readings": ["きょう", "ごう"],
        "compounds": ["響"],
        "non_compounds": [],
        "xrefs": []
    },
    "疑": {
        "readings": ["ぎ"],
        "compounds": ["凝", "擬"],
        "non_compounds": [],
        "xrefs": []
    },
    "爰": {
        "readings": ["えん"],
        "compounds": ["媛", "援", "緩"],
        "non_compounds": [],
        "xrefs": []
    },
    "瞏": {
        "readings": ["けい", "せん"],
        "compounds": ["還", "環"],
        "non_compounds": [],
        "xrefs": []
    },
    "堇": {
        "readings": ["きん"],
        "compounds": ["僅", "勤", "謹"],
        "non_compounds": ["難", "漢"],
        "xrefs": []
    },
    "𦰩": {
        "readings": ["かん", "なん"],
        "compounds": ["難", "漢"],
        "non_compounds": [],
        "xrefs": []
    },
    "刃": {
        "readings": ["じん", "にん"],
        "compounds": ["忍"],
        "non_compounds": [],
        "xrefs": []
    },
    "𡈼": {
        "readings": ["い"],
        "compounds": ["聖", "廷"],
        "non_compounds": [],
        "xrefs": []
    },
    "廷": {
        "readings": ["てい"],
        "compounds": ["庭", "艇"],
        "non_compounds": [],
        "xrefs": []
    },
    "要": {
        "readings": ["よう"],
        "compounds": ["腰"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "票": {
        "readings": ["ひょう"],
        "compounds": ["漂", "標"],
        "non_compounds": [],
        "xrefs": []
    },
    "尚": {
        "readings": ["しょう"],
        "compounds": ["堂", "常", "掌", "当", "賞", "党"],
        "non_compounds": [],
        "xrefs": ["向"]
    },
    "度": {
        "readings": ["ど", "と", "たく"],
        "compounds": ["渡"],
        "non_compounds": [],
        "xrefs": []
    },
    "于": {
        "readings": ["う"],
        "compounds": ["宇", "芋", "汚"],
        "non_compounds": [],
        "xrefs": []
    },
    "比": {
        "readings": ["ひ", "び"],
        "compounds": ["批"],
        "non_compounds": [],
        "xrefs": []
    },
    "厶": {
        "readings": ["し", "ぼう", "む"],
        "compounds": ["私"],
        "non_compounds": ["仏", "払"],
        "xrefs": []
    },
    "厷": {
        "readings": ["こう", "ゆう"],
        "compounds": ["雄"],
        "non_compounds": [],
        "xrefs": []
    },
    "共": {
        "readings": ["きょう", "く", "くう", "ぐ"],
        "compounds": ["供", "洪", "恭"],
        "non_compounds": [],
        "xrefs": []
    },
    "兼": {
        "readings": ["けん"],
        "compounds": ["嫌", "廉", "鎌", "謙"],
        "non_compounds": [],
        "xrefs": []
    },
    "勿": {
        "readings": ["ぶつ", "もつ"],
        "compounds": ["物"],
        "non_compounds": [],
        "xrefs": []
    },
    "委": {
        "readings": ["い"],
        "compounds": ["萎"],
        "non_compounds": [],
        "xrefs": []
    },
    "行": {
        "readings": ["こう", "ぎょう", "あん"],
        "compounds": ["衡", "桁"],
        "non_compounds": [],
        "xrefs": []
    },
    "玄": {
        "readings": ["げん"],
        "compounds": ["弦", "舷"],
        "non_compounds": [],
        "xrefs": []
    },
    "采": {
        "readings": ["さい"],
        "compounds": ["彩", "採", "菜"],
        "non_compounds": [],
        "xrefs": []
    },
    "朮": {
        "readings": ["じゅつ", "しゅつ"],
        "compounds": ["述", "術"],
        "non_compounds": [],
        "xrefs": []
    },
    "受": {
        "readings": ["じゅ", "ず"],
        "compounds": ["授"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: incomplete, search!"
    },
    "妾": {
        "readings": ["しょう"],
        "compounds": ["接"],
        "non_compounds": [],
        "xrefs": []
    },
    "夜": {
        "readings": ["や"],
        "compounds": ["液"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "敄": {
        "readings": ["ぶ", "む"],
        "compounds": ["務"],
        "non_compounds": [],
        "xrefs": ["務"]
    },
    "務": {
        "readings": ["む", "ぶ"],
        "compounds": ["霧"],
        "non_compounds": [],
        "xrefs": ["敄"]
    },
    "熒": {
        "readings": ["えい", "えい", "ぎょう"],
        "compounds": ["労", "栄", "蛍", "営"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO no list, search"
    },
    "复": {
        "readings": ["ふく", "ふう", "ぶく", "ぶ"],
        "compounds": ["復", "腹", "複", "覆"],
        "non_compounds": [],
        "xrefs": ["畐"],
        "comment": "TODO: no list, search!"
    },
    "咸": {
        "readings": ["かん", "げん"],
        "compounds": ["減", "感"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "感": {
        "readings": ["かん"],
        "compounds": ["憾"],
        "non_compounds": [],
        "xrefs": ["咸"]
    },
    "或": {
        "readings": ["わく", "こく", "よく"],
        "compounds": ["域", "惑"],
        "non_compounds": [],
        "xrefs": []
    },
    "幾": {
        "readings": ["き"],
        "compounds": ["機", "畿"],
        "non_compounds": [],
        "xrefs": []
    },
    "責": {
        "readings": ["せき", "しゃく"],
        "compounds": ["積", "債", "漬", "績", "跡"],
        "non_compounds": [],
        "xrefs": ["朿"],
        "comment": "TODO: no list, search"
    },
    "侖": {
        "readings": ["りん"],
        "compounds": ["輪", "論", "倫"],
        "non_compounds": [],
        "xrefs": []
    },
    "巽": {
        "readings": ["そん"],
        "compounds": ["選"],
        "non_compounds": [],
        "xrefs": []
    },
    "彔": {
        "readings": ["ろく"],
        "compounds": ["緑", "録"],
        "non_compounds": [],
        "xrefs": []
    },
    "竟": {
        "readings": ["けい", "きょう"],
        "compounds": ["鏡", "境"],
        "non_compounds": [],
        "xrefs": []
    },
    "重": {
        "readings": ["じゅう", "ちょう"],
        "compounds": ["動", "腫", "種", "衝"],
        "non_compounds": [],
        "xrefs": []
    },
    "童": {
        "readings": ["どう", "とう", "じゅう", "ちょう"],
        "compounds": ["憧", "鐘"],
        "non_compounds": [],
        "xrefs": ["重"]
    },
    "𠬝": {
        "readings": ["ふく", "ふう"],
        "compounds": ["服"],
        "non_compounds": ["報"],
        "xrefs": []
    },
    "旨": {
        "readings": ["し", "けい"],
        "compounds": ["指", "脂", "詣", "稽"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "two different components with the same look, just merge"
    },
    "相": {
        "readings": ["そう", "しょう"],
        "compounds": ["想", "箱", "霜"],
        "non_compounds": [],
        "xrefs": []
    },
    "介": {
        "readings": ["かい"],
        "compounds": ["界"],
        "non_compounds": [],
        "xrefs": []
    },
    "幵": {
        "readings": ["けん"],
        "compounds": ["研"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "no list, search!"
    },
    "升": {
        "readings": ["しょう"],
        "compounds": ["昇"],
        "non_compounds": [],
        "xrefs": []
    },
    "尼": {
        "readings": ["に", "じ"],
        "compounds": ["泥"],
        "non_compounds": [],
        "xrefs": []
    },
    "炎": {
        "readings": ["えん", "たん"],
        "compounds": ["淡", "談"],
        "non_compounds": [],
        "xrefs": []
    },
    "喬": {
        "readings": ["きょう", "ぎょう"],
        "compounds": ["橋", "矯"],
        "non_compounds": [],
        "xrefs": []
    },
    "敬": {
        "readings": ["けい", "きょう"],
        "compounds": ["警", "驚"],
        "non_compounds": [],
        "xrefs": []
    },
    "丙": {
        "readings": ["へい"],
        "compounds": ["柄", "病"],
        "non_compounds": [],
        "xrefs": []
    },
    "㐬": {
        "readings": ["りゅう", "る"],
        "compounds": ["硫", "流"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "㫃": {
        "readings": ["りょ", "ろ"],
        "compounds": ["旅"],
        "non_compounds": ["旋", "施", "旗", "族"],
        "xrefs": [],
        "comment": "no list, search, limited info!"
    },
    "民": {
        "readings": ["みん"],
        "compounds": ["眠"],
        "non_compounds": [],
        "xrefs": []
    },
    "栗": {
        "readings": ["りつ", "り"],
        "compounds": ["慄"],
        "non_compounds": [],
        "xrefs": []
    },
    "岡": {
        "readings": ["こう"],
        "compounds": ["綱", "鋼", "剛"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: incomplete list, search!"
    },
    "罔": {
        "readings": ["もう", "ぼう", "む"],
        "compounds": ["網"],
        "non_compounds": [],
        "xrefs": []
    },
    "瓜": {
        "readings": ["か", "こ"],
        "compounds": ["孤", "弧"],
        "non_compounds": [],
        "xrefs": []
    },
    "壬": {
        "readings": ["じん", "にん"],
        "compounds": ["任", "妊", "賃"],
        "non_compounds": [],
        "xrefs": []
    },
    "肙": {
        "readings": ["えん", "けん"],
        "compounds": ["絹"],
        "non_compounds": [],
        "xrefs": []
    },
    "知": {
        "readings": ["ち"],
        "compounds": ["痴"],
        "non_compounds": [],
        "xrefs": []
    },
    "弟": {
        "readings": ["てい", "だい", "デ"],
        "compounds": ["第"],
        "non_compounds": [],
        "xrefs": []
    },
    "夭": {
        "readings": ["よう"],
        "compounds": ["妖", "沃"],
        "non_compounds": [],
        "xrefs": []
    },
    "关": {
        "readings": ["しょう", "そう"],
        "compounds": ["送", "咲", "笑"],
        "non_compounds": ["朕"],
        "xrefs": [],
        "comment": "TODO: incomplete, search!"
    },
    "屈": {
        "readings": ["くつ"],
        "compounds": ["掘", "堀", "窟"],
        "non_compounds": [],
        "xrefs": []
    },
    "尃": {
        "readings": ["ふ", "はく"],
        "compounds": ["敷", "博", "縛"],
        "non_compounds": [],
        "xrefs": ["溥"]
    },
    "溥": {
        "readings": ["ふ", "はく"],
        "compounds": ["薄", "簿"],
        "non_compounds": [],
        "xrefs": ["尃"]
    },
    "滕": {
        "readings": ["とう", "どう"],
        "compounds": ["藤"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "至": {
        "readings": ["し"],
        "compounds": ["致", "窒"],
        "non_compounds": ["到", "室"],
        "xrefs": []
    },
    "屋": {
        "readings": ["おく"],
        "compounds": ["握"],
        "non_compounds": [],
        "xrefs": []
    },
    "疋": {
        "readings": ["しょ", "そ", "ひき", "ひつ"],
        "compounds": ["疎"],
        "non_compounds": [],
        "xrefs": []
    },
    "楚": {
        "readings": ["そ", "しょ"],
        "compounds": ["礎"],
        "non_compounds": [],
        "xrefs": ["疋"]
    },
    "胥": {
        "readings": ["しょ", "そ"],
        "compounds": ["婿"],
        "non_compounds": [],
        "xrefs": ["疋"]
    },
    "庶": {
        "readings": ["しょ"],
        "compounds": ["遮"],
        "non_compounds": [],
        "xrefs": []
    },
    "曹": {
        "readings": ["そう", "ぞう"],
        "compounds": ["遭", "槽"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "no list, search!"
    },
    "農": {
        "readings": ["のう"],
        "compounds": ["濃"],
        "non_compounds": [],
        "xrefs": []
    },
    "乇": {
        "readings": ["たく", "ちゃく"],
        "compounds": ["宅", "託"],
        "non_compounds": [],
        "xrefs": []
    },
    "禺": {
        "readings": ["ぐ", "ぐう"],
        "compounds": ["愚", "偶", "遇", "隅"],
        "non_compounds": [],
        "xrefs": []
    },
    "更": {
        "readings": ["こう", "きょう"],
        "compounds": ["梗", "硬"],
        "non_compounds": ["便"],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "告": {
        "readings": ["こく"],
        "compounds": ["造", "酷"],
        "non_compounds": [],
        "xrefs": []
    },
    "契": {
        "readings": ["けい", "きつ", "けつ"],
        "compounds": ["喫"],
        "non_compounds": [],
        "xrefs": []
    },
    "口": {
        "readings": ["こう", "く"],
        "compounds": ["句"],
        "non_compounds": [],
        "xrefs": ["句"]
    },
    "句": {
        "readings": ["く", "こう"],
        "compounds": ["拘", "駒"],
        "non_compounds": [],
        "xrefs": ["口"]
    },
    "無": {
        "readings": ["む", "ぶ"],
        "compounds": ["舞"],
        "non_compounds": [],
        "xrefs": []
    },
    "聿": {
        "readings": ["いつ", "いち"],
        "compounds": ["律", "筆"],
        "non_compounds": ["書", "建"],
        "xrefs": []
    },
    "叚": {
        "readings": ["か", "け"],
        "compounds": ["仮", "暇"],
        "non_compounds": [],
        "xrefs": []
    },
    "侯": {
        "readings": ["こう"],
        "compounds": ["候"],
        "non_compounds": [],
        "xrefs": []
    },
    "斥": {
        "readings": ["せき"],
        "compounds": ["訴"],
        "non_compounds": [],
        "xrefs": []
    },
    "旦": {
        "readings": ["たん"],
        "compounds": ["但", "胆", "担"],
        "non_compounds": [],
        "xrefs": ["亘"]
    },
    "延": {
        "readings": ["えん"],
        "compounds": ["誕"],
        "non_compounds": [],
        "xrefs": []
    },
    "孰": {
        "readings": ["しゅく", "じゅく"],
        "compounds": ["熟"],
        "non_compounds": [],
        "xrefs": []
    },
    "折": {
        "readings": ["せつ", "じゃく"],
        "compounds": ["哲", "逝", "誓"],
        "non_compounds": [],
        "xrefs": []
    },
    "単": {
        "readings": ["たん", "ぜん"],
        "compounds": ["弾", "憚", "禅", "戦"],
        "non_compounds": [],
        "xrefs": []
    },
    "攸": {
        "readings": ["ゆう"],
        "compounds": ["修", "悠", "条"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: Maybe compounds also lost readings during simplifications."
    },
    "屰": {
        "readings": ["ぎゃく"],
        "compounds": ["逆"],
        "non_compounds": [],
        "xrefs": []
    },
    "呆": {
        "readings": ["ほ", "ほう"],
        "compounds": ["保"],
        "non_compounds": [],
        "xrefs": []
    },
    "争": {
        "readings": ["そう"],
        "compounds": ["浄"],
        "non_compounds": ["静"],
        "xrefs": []
    },
    "令": {
        "readings": ["れい", "りょう"],
        "compounds": ["冷", "領", "鈴", "零", "齢"],
        "non_compounds": [],
        "xrefs": []
    },
    "隹": {
        "readings": ["すい"],
        "compounds": ["進", "推", "堆", "唯", "椎", "稚", "誰"],
        "non_compounds": ["准", "隻", "集", "雇", "雄", "雅", "雌", "維", "難"],
        "xrefs": ["崔", "焦", "奞"]
    },
    "隼": {
        "readings": ["しゅん", "じゅん"],
        "compounds": ["準", "准"],
        "non_compounds": [],
        "xrefs": []
    },
    "集": {
        "readings": ["しゅう"],
        "compounds": [ "雑"],
        "non_compounds": [],
        "xrefs": []
    },
    "崔": {
        "readings": ["がい", "さい", "すい"],
        "compounds": ["催"],
        "non_compounds": [],
        "xrefs": ["隹"]
    },
    "焦": {
        "readings": ["しょう"],
        "compounds": ["礁"],
        "non_compounds": [],
        "xrefs": ["隹"]
    },
    "奞": {
        "readings": ["すい"],
        "compounds": ["奪", "奮"],
        "non_compounds": [],
        "xrefs": ["隹"]
    },
    "雚": {
        "readings": ["かん"],
        "compounds": ["歓", "観", "権"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "隺": {
        "readings": ["かく", "こく"],
        "compounds": ["確", "鶴"],
        "non_compounds": [],
        "xrefs": []
    },
    "此": {
        "readings": ["し"],
        "compounds": ["紫", "雌"],
        "non_compounds": [],
        "xrefs": []
    },
    "翟": {
        "readings": ["けき", "たく", "たい"],
        "compounds": ["曜", "濯", "躍"],
        "non_compounds": [],
        "xrefs": []
    },
    "蒦": {
        "readings": ["ふく", "かく", "やく"],
        "compounds": ["護", "穫"],
        "non_compounds": [],
        "xrefs": []
    },
    "离": {
        "readings": ["り", "ち"],
        "compounds": ["璃", "離"],
        "non_compounds": [],
        "xrefs": []
    },
    "羕": {
        "readings": ["よう"],
        "compounds": ["様"],
        "non_compounds": [],
        "xrefs": []
    },
    "亜": {
        "readings": ["あ"],
        "compounds": ["悪"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "tie-fighter"
    },
    "能": {
        "readings": ["のう", "の", "どう", "たい", "だい", "ない"],
        "compounds": ["態"],
        "non_compounds": ["罷", "熊"],
        "xrefs": [],
        "wk-radical": "ability"
    },
    "啇": {
        "readings": ["てき", "ちゃく", "せき"],
        "compounds": ["適", "滴", "嫡", "摘", "敵"],
        "non_compounds": [],
        "xrefs": [],
        "wk-radical": "mohawk"
    },
    "犮": {
        "readings": ["はつ"],
        "compounds": ["抜", "髪"],
        "non_compounds": [],
        "xrefs": []
    },
    "景": {
        "readings": ["けい", "えい"],
        "compounds": ["影"],
        "non_compounds": [],
        "xrefs": ["京"]
    },
    "庄": {
        "readings": ["しょう", "そう"],
        "compounds": ["粧"],
        "non_compounds": [],
        "xrefs": []
    },
    "㒼": {
        "readings": ["まん", "ばん"],
        "compounds": ["満"],
        "non_compounds": [],
        "xrefs": []
    },
    "爿": {
        "readings": ["しょう"],
        "compounds": ["状"],
        "non_compounds": [],
        "xrefs": []
    },
    "支": {
        "readings": ["し"],
        "compounds": ["伎", "技", "枝"],
        "non_compounds": [],
        "xrefs": []
    },
    "易": {
        "readings": ["えき", "い"],
        "compounds": ["賜"],
        "non_compounds": ["場", "陽", "瘍", "湯", "腸"],
        "xrefs": []
    },
    "臤": {
        "readings": ["けん", "かん"],
        "compounds": ["堅", "腎", "緊", "賢"],
        "non_compounds": [],
        "xrefs": []
    },
    "禁": {
        "readings": ["きん"],
        "compounds": ["襟"],
        "non_compounds": [],
        "xrefs": []
    },
    "熏": {
        "readings": ["くん"],
        "compounds": ["薫", "勲"],
        "non_compounds": [],
        "xrefs": []
    },
    "蚤": {
        "readings": ["そう"],
        "compounds": ["騒"],
        "non_compounds": [],
        "xrefs": []
    },
    "卂": {
        "readings": ["じん", "しん"],
        "compounds": ["迅"],
        "non_compounds": [],
        "xrefs": []
    },
    "卬": {
        "readings": ["きょう", "ごう"],
        "compounds": ["迎"],
        "non_compounds": [],
        "xrefs": []
    },
    "系": {
        "readings": ["けい"],
        "compounds": ["係"],
        "non_compounds": [],
        "xrefs": []
    },
    "癶": {
        "readings": ["はつ"],
        "compounds": ["発"],
        "non_compounds": ["登"],
        "xrefs": []
    },
    "羍": {
        "readings": ["たつ", "たち"],
        "compounds": ["達"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: incomplete list, search!"
    },
    "賈": {
        "readings": ["か", "こ", "く", "け"],
        "compounds": ["価"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: incomplete list, search!"
    },
    "西": {
        "readings": ["せい", "さい", "すい"],
        "compounds": ["垔", "茜"],
        "non_compounds": [],
        "xrefs": ["垔"]
    },
    "垔": {
        "readings": ["いん", "えん"],
        "compounds": ["煙"],
        "non_compounds": [],
        "xrefs": ["西"]
    },
    "利": {
        "readings": ["り"],
        "compounds": ["梨", "痢"],
        "non_compounds": [],
        "xrefs": []
    },
    "成": {
        "readings": ["せい", "じょう"],
        "compounds": ["城", "盛", "誠"],
        "non_compounds": [],
        "xrefs": []
    },
    "免": {
        "readings": ["めん", "べん", "ぶん"],
        "compounds": ["勉"],
        "non_compounds": [],
        "xrefs": []
    },
    "咅": {
        "readings": ["ばい", "はい", "ぼう", "ほう"],
        "compounds": ["倍", "剖", "部", "培", "陪", "賠"],
        "non_compounds": [],
        "xrefs": []
    },
    "員": {
        "readings": ["いん"],
        "compounds": ["損", "韻"],
        "non_compounds": [],
        "xrefs": []
    },
    "束": {
        "readings": ["そく"],
        "compounds": ["速"],
        "non_compounds": [],
        "xrefs": []
    },
    "臣": {
        "readings": ["しん", "じん"],
        "compounds": ["姫"],
        "non_compounds": [],
        "xrefs": []
    },
    "夆": {
        "readings": ["ほう", "ふ"],
        "compounds": ["峰", "蜂", "縫"],
        "non_compounds": [],
        "xrefs": []
    },
    "甘": {
        "readings": ["かん", "こん"],
        "compounds": ["紺"],
        "non_compounds": [],
        "xrefs": []
    },
    "亘": {
        "readings": ["こう", "せん"],
        "compounds": ["宣", "恒", "垣"],
        "non_compounds": [],
        "xrefs": ["旦"]
    },
    "夬": {
        "readings": ["かい", "けつ"],
        "compounds": ["決", "快"],
        "non_compounds": [],
        "xrefs": []
    },
    "妻": {
        "readings": ["さい", "せい"],
        "compounds": ["凄"],
        "non_compounds": [],
        "xrefs": []
    },
    "咼": {
        "readings": ["か"],
        "compounds": ["過", "渦", "禍", "鍋"],
        "non_compounds": [],
        "xrefs": []
    },
    "太": {
        "readings": ["たい", "た", "だい"],
        "compounds": ["汰", "駄"],
        "non_compounds": [],
        "xrefs": []
    },
    "伐": {
        "readings": ["ばつ", "はつ"],
        "compounds": ["閥"],
        "non_compounds": [],
        "xrefs": []
    },
    "武": {
        "readings": ["ぶ", "む"],
        "compounds": ["賦"],
        "non_compounds": [],
        "xrefs": []
    },
    "彭": {
        "readings": ["ほう"],
        "compounds": ["膨"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "麻": {
        "readings": ["ま", "ば"],
        "compounds": ["摩", "磨", "魔"],
        "non_compounds": [],
        "xrefs": []
    },
    "頼": {
        "readings": ["らい"],
        "compounds": ["瀬"],
        "non_compounds": [],
        "xrefs": []
    },
    "夾": {
        "readings": ["きょう", "こう"],
        "compounds": ["挟", "狭", "峡", "頬"],
        "non_compounds": [],
        "xrefs": []
    },
    "呂": {
        "readings": ["ろ", "りょ"],
        "compounds": ["侶"],
        "non_compounds": [],
        "xrefs": []
    },
    "坐": {
        "readings": ["ざ", "さ"],
        "compounds": ["挫", "座"],
        "non_compounds": [],
        "xrefs": []
    },
    "従": {
        "readings": ["じゅう", "しょう", "じゅ"],
        "compounds": ["縦"],
        "non_compounds": [],
        "xrefs": []
    },
    "㒸": {
        "readings": ["たい", "すい"],
        "compounds": ["隊", "遂"],
        "non_compounds": [],
        "xrefs": []
    },
    "求": {
        "readings": ["きゅう", "ぐ"],
        "compounds": ["救", "球"],
        "non_compounds": [],
        "xrefs": []
    },
    "専": {
        "readings": ["せん"],
        "compounds": ["団", "転"],
        "non_compounds": [],
        "xrefs": []
    },
    "厤": {
        "readings": ["れき", "りゃく"],
        "compounds": ["暦", "歴"],
        "non_compounds": [],
        "xrefs": []
    },
    "因": {
        "readings": ["いん"],
        "compounds": ["咽", "姻", "恩"],
        "non_compounds": [],
        "xrefs": []
    },
    "悤": {
        "readings": ["そう"],
        "compounds": ["窓", "総"],
        "non_compounds": [],
        "xrefs": []
    },
    "戔": {
        "readings": ["せん", "ぜん", "さん"],
        "compounds": ["銭", "践"],
        "non_compounds": [],
        "xrefs": []
    },
    "尺": {
        "readings": ["しゃく", "せき"],
        "compounds": ["沢", "駅", "択", "訳", "釈"],
        "non_compounds": ["昼"],
        "xrefs": []
    },


    "": {
        "readings": [],
        "compounds": [],
        "non_compounds": [],
        "xrefs": []
    }
}
`);
// #############################################################################


/*
 * Notes stack
 *
 * 静荷
 *
 * Indicative component: 言殳
 */
