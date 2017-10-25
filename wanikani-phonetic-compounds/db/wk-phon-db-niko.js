/* jshint esversion: 6 */

var KTypeEnum = Object.freeze(
    {
        no_clue:         0,
        hieroglyph:      1, // 象形: type of character representing pictures
        indicative:      2, // 指事: indicative (kanji whose shape is based on logical representation of an abstract idea)
        comp_indicative: 3, // 会意: kanji made up of meaningful parts (e.g. "mountain pass" is up + down + mountain)
        comp_phonetic:   4, // 形声: kanji in which one element suggests the meaning, the other the pronunciation
        derivative:      5, // 転注: applying an extended meaning to a kanji
        rebus:           6, // 仮借: borrowing a kanji with the same pronunciation to convey an unrelated term
        kokuji:          7  // kanji originating from Japan
    }
);

var kanji_db = JSON.parse(`
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
		"readings": ["ニ", "ジ"],
        "type": "indicative"
    },
    "人": {
		"readings": ["ジン", "ニン"],
        "type": "hieroglyph"
    },
    "入": {
		"readings": ["ニュウ", "ジュ", "ジュウ"],
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
		"readings": ["ジュウ", "ジッ"],
        "type": "indicative"
    },
    "下": {
		"readings": ["か", "げ"],
        "type": "indicative"
    },
    "三": {
		"readings": ["サン"],
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
		"readings": ["コウ", "ク"],
        "type": "hieroglyph"
    },
    "土": {
		"readings": ["ト", "ド"],
        "type": "hieroglyph"
    },
    "夕": {
		"readings": ["せき", "シャク"],
        "type": "hieroglyph"
    },
    "大": {
		"readings": ["ダイ", "タイ"],
        "type": "hieroglyph"
    },
    "女": {
		"readings": ["ジョ", "ニョ", "ニョウ"],
        "type": "hieroglyph"
    },
    "子": {
		"readings": ["し", "ス"],
        "type": "hieroglyph"
    },
    "小": {
		"readings": ["しょう"],
        "type": "hieroglyph"
    },
    "山": {
		"readings": ["サン", "セン"],
        "type": "hieroglyph"
    },
    "川": {
		"readings": ["セン"],
        "type": "hieroglyph"
    },
    "五": {
		"readings": ["ゴ"],
        "type": "indicative"
    },
    "天": {
		"readings": ["テン"],
        "type": "hieroglyph"
    },
    "中": {
		"readings": ["チュウ"],
        "type": "no_clue"
    },
    "六": {
		"readings": ["ロク", "リク"],
        "type": "indicative"
    },
    "円": {
		"readings": ["えん"],
        "type": "derivative"
    },
    "手": {
		"readings": ["シュ", "ズ"],
        "type": "hieroglyph"
    },
    "文": {
		"readings": ["ブン", "モン"],
        "type": "hieroglyph"
    },
    "日": {
		"readings": ["ジツ", "ニチ"],
        "type": "hieroglyph"
    },
    "月": {
		"readings": ["ゲツ", "ガツ"],
        "type": "hieroglyph"
    },
    "木": {
		"readings": ["モク", "ボク"],
        "type": "hieroglyph"
    },
    "水": {
		"readings": ["スイ"],
        "type": "hieroglyph"
    },
    "火": {
		"readings": ["カ", "コ"],
        "type": "hieroglyph"
    },
    "犬": {
		"readings": ["ケン"],
        "type": "hieroglyph"
    },
    "王": {
		"readings": ["オウ"],
        "type": "hieroglyph"
    },
    "正": {
		"readings": ["セイ", "しょう"],
        "type": "comp_indicative"
    },
    "出": {
		"readings": ["シュツ", "スイ"],
        "type": "comp_indicative"
    },
    "本": {
		"readings": ["ホン"],
        "type": "hieroglyph"
    },
    "右": {
		"readings": ["ウ", "ユウ"],
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
		"readings": ["セイ", "しょう"],
        "type": "hieroglyph"
    },
    "田": {
		"readings": ["デン"],
        "type": "hieroglyph"
    },
    "白": {
		"readings": ["ハク", "ビャク"],
        "type": "no_clue"
    },
    "目": {
		"readings": ["モク", "ボク"],
        "type": "hieroglyph"
    },
    "石": {
		"readings": ["せき", "シャク", "コク", "ジャク"],
        "type": "hieroglyph"
    },
    "立": {
		"readings": ["リツ", "リュウ"],
        "type": "comp_indicative"
    },
    "百": {
		"readings": ["ヒャク", "ハク"],
        "type": "comp_indicative"
    },
    "年": {
		"readings": ["ネン"],
        "type": "comp_indicative"
    },
    "休": {
		"readings": ["キュウ"],
        "type": "comp_indicative"
    },
    "先": {
		"readings": ["セン"],
        "type": "comp_indicative"
    },
    "名": {
		"readings": ["メイ", "ミョウ"],
        "type": "comp_indicative"
    },
    "字": {
		"readings": ["ジ"],
        "phonetic": "子",
        "type": "comp_phonetic"
    },
    "早": {
		"readings": ["そう", "サッ"],
        "type": "comp_indicative"
    },
    "気": {
		"readings": ["き", "け"],
        "type": "no_clue"
    },
    "竹": {
		"readings": ["チク"],
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
		"readings": ["チュウ"],
        "type": "hieroglyph"
    },
    "村": {
		"readings": ["ソン"],
        "phonetic": "寸",
        "type": "comp_phonetic",
        "comment": "Originally 屯, but looks like adapted reading."
    },
    "男": {
		"readings": ["ダン", "ナン"],
        "type": "comp_indicative"
    },
    "町": {
		"readings": ["ちょう", "テイ"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "花": {
		"readings": ["カ", "ケ"],
        "phonetic": "化",
        "type": "comp_phonetic"
    },
    "見": {
		"readings": ["ケン", "ゲン"],
        "type": "comp_indicative"
    },
    "貝": {
		"readings": ["バイ", "マイ"],
        "type": "hieroglyph"
    },
    "赤": {
		"readings": ["せき", "シャク"],
        "type": "comp_indicative"
    },
    "足": {
		"readings": ["ソク", "ショク"],
        "type": "hieroglyph"
    },
    "車": {
		"readings": ["シャ"],
        "type": "hieroglyph"
    },
    "学": {
		"readings": ["ガク"],
        "type": "comp_indicative"
    },
    "林": {
		"readings": ["リン"],
        "type": "comp_indicative"
    },
    "空": {
		"readings": ["クウ"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "金": {
		"readings": ["きん", "こん"],
        "type": "no_clue"
    },
    "雨": {
		"readings": ["ウ"],
        "type": "hieroglyph"
    },
    "青": {
		"readings": ["セイ", "しょう"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "草": {
		"readings": ["そう"],
        "phonetic": "早",
        "type": "comp_phonetic"
    },
    "音": {
		"readings": ["オン", "イン"],
        "type": "comp_indicative"
    },
    "校": {
		"readings": ["コウ", "きょう"],
        "phonetic": "交",
        "type": "comp_phonetic"
    },
    "森": {
		"readings": ["シン"],
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
		"readings": ["ガン"],
        "type": "hieroglyph"
    },
    "才": {
		"readings": ["サイ"],
        "type": "no_clue"
    },
    "工": {
		"readings": ["コウ", "ク"],
        "type": "hieroglyph"
    },
    "弓": {
		"readings": ["キュウ"],
        "type": "hieroglyph"
    },
    "内": {
		"readings": ["ナイ", "ダイ", "ノウ", "どう"],
        "type": "hieroglyph"
    },
    "午": {
		"readings": ["ゴ"],
        "type": "hieroglyph"
    },
    "少": {
		"readings": ["しょう"],
        "type": "no_clue"
    },
    "元": {
		"readings": ["ゲン", "ガン"],
        "type": "no_clue"
    },
    "今": {
		"readings": ["こん", "きん"],
        "type": "comp_indicative"
    },
    "公": {
		"readings": ["コウ", "ク"],
        "type": "no_clue"
    },
    "分": {
		"readings": ["フン","ブン","ブ"],
        "type": "comp_indicative"
    },
    "切": {
		"readings": ["セツ","セイ","サイ"],
        "phonetic": "七",
        "type": "comp_phonetic"
    },
    "友": {
		"readings": ["ユウ"],
        "type": "comp_indicative"
    },
    "太": {
		"readings": ["タイ", "タ", "ダイ"],
        "type": "no_clue"
    },
    "引": {
		"readings": ["イン"],
        "type": "comp_indicative"
    },
    "心": {
		"readings": ["シン"],
        "type": "hieroglyph"
    },
    "戸": {
		"readings": ["コ"],
        "type": "hieroglyph"
    },
    "方": {
		"readings": ["ホウ"],
        "type": "hieroglyph"
    },
    "止": {
		"readings": ["し"],
        "type": "hieroglyph"
    },
    "毛": {
		"readings": ["モウ", "ボウ"],
        "type": "hieroglyph"
    },
    "父": {
		"readings": ["フ", "ホ"],
        "type": "comp_indicative"
    },
    "牛": {
		"readings": ["ギュウ", "ゴ"],
        "type": "hieroglyph"
    },
    "半": {
		"readings": ["ハン"],
        "type": "comp_indicative"
    },
    "市": {
		"readings": ["し"],
        "type": "no_clue"
    },
    "北": {
		"readings": ["ホク"],
        "type": "no_clue"
    },
    "古": {
		"readings": ["コ"],
        "type": "no_clue"
    },
    "台": {
		"readings": ["ダイ", "タイ"],
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
		"readings": ["ガイ", "ゲ", "ウイ"],
        "type": "comp_indicative"
    },
    "広": {
		"readings": ["コウ"],
        "phonetic": "黄",
        "type": "comp_phonetic"
    },
    "母": {
		"readings": ["ボ", "モ", "ボウ"],
        "type": "hieroglyph"
    },
    "用": {
		"readings": ["よう"],
        "type": "hieroglyph"
    },
    "矢": {
		"readings": ["し"],
        "type": "hieroglyph"
    },
    "交": {
		"readings": ["コウ"],
        "type": "hieroglyph"
    },
    "会": {
		"readings": ["カイ", "エ"],
        "type": "comp_indicative"
    },
    "合": {
		"readings": ["ゴウ", "ガッ", "カッ", "コウ"],
        "type": "comp_indicative"
    },
    "同": {
		"readings": ["どう"],
        "type": "comp_indicative"
    },
    "回": {
		"readings": ["カイ", "エ"],
        "type": "hieroglyph"
    },
    "寺": {
		"readings": ["ジ"],
        "type": "no_clue"
    },
    "地": {
		"readings": ["チ", "ジ"],
        "phonetic": "也",
        "type": "comp_phonetic"
    },
    "多": {
		"readings": ["た"],
        "type": "comp_indicative"
    },
    "光": {
		"readings": ["コウ"],
        "type": "comp_indicative"
    },
    "当": {
		"readings": ["とう"],
        "phonetic": "尚",
        "type": "comp_phonetic"
    },
    "毎": {
		"readings": ["マイ"],
        "type": "comp_indicative"
    },
    "池": {
		"readings": ["チ"],
        "phonetic": "也",
        "type": "comp_phonetic"
    },
    "米": {
		"readings": ["ベイ", "マイ", "メ"],
        "type": "hieroglyph"
    },
    "羽": {
		"readings": ["ウ"],
        "type": "hieroglyph"
    },
    "考": {
		"readings": ["コウ"],
        "type": "no_clue",
        "comment": "TODO: phonetic compound of 丂"
    },
    "肉": {
		"readings": ["ニク", "ジク"],
        "type": "hieroglyph"
    },
    "自": {
		"readings": ["ジ", "し"],
        "type": "hieroglyph"
    },
    "色": {
		"readings": ["ショク", "シキ"],
        "type": "comp_indicative"
    },
    "行": {
		"readings": ["コウ", "ギョウ", "アン"],
        "type": "hieroglyph"
    },
    "西": {
		"readings": ["セイ", "サイ", "スイ"],
        "type": "hieroglyph"
    },
    "来": {
		"readings": ["ライ"],
        "type": "hieroglyph"
    },
    "何": {
		"readings": ["カ"],
        "phonetic": "可",
        "type": "comp_phonetic"
    },
    "作": {
		"readings": ["さく", "さ"],
        "phonetic": "乍",
        "type": "comp_phonetic"
    },
    "体": {
		"readings": ["タイ", "テイ"],
        "type": "no_clue",
        "comment": "TODO: phonetic of 豊"
    },
    "弟": {
		"readings": ["テイ", "ダイ", "デ"],
        "type": "hieroglyph"
    },
    "図": {
		"readings": ["ズ", "ト"],
        "type": "comp_indicative"
    },
    "声": {
		"readings": ["セイ", "しょう"],
        "type": "no_clue"
    },
    "売": {
		"readings": ["バイ"],
        "type": "comp_indicative"
    },
    "形": {
		"readings": ["けい", "ギョウ"],
        "type": "no_clue",
        "comment": "TODO phonetic 开"
    },
    "汽": {
		"readings": ["キ"],
        "type": "no_clue",
        "comment": "TODO phonetic 气"
    },
    "社": {
		"readings": ["シャ", "じゃ"],
        "phonetic": "土",
        "type": "comp_phonetic"
    },
    "角": {
		"readings": ["カク"],
        "type": "hieroglyph"
    },
    "言": {
		"readings": ["ゲン", "ごん"],
        "type": "no_clue"
    },
    "谷": {
		"readings": ["コク"],
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
		"readings": ["リ"],
        "type": "comp_indicative"
    },
    "麦": {
		"readings": ["バク"],
        "type": "comp_indicative"
    },
    "画": {
		"readings": ["ガ", "カク"],
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
		"readings": ["ヤ"],
        "type": "no_clue"
    },
    "直": {
		"readings": ["チョク", "ジキ", "チ"],
        "type": "no_clue"
    },
    "国": {
		"readings": ["コク"],
        "type": "comp_indicative"
    },
    "姉": {
		"readings": ["し"],
        "type": "no_clue",
        "comment": "TODO: obscure phonetic 𠂔"
    },
    "妹": {
		"readings": ["マイ", "バイ"],
        "phonetic": "未",
        "type": "comp_phonetic"
    },
    "岩": {
		"readings": ["ガン"],
        "type": "comp_indicative"
    },
    "店": {
		"readings": ["テン"],
        "phonetic": "占",
        "type": "comp_phonetic"
    },
    "明": {
		"readings": ["メイ", "ミョウ", "ミン"],
        "type": "comp_indicative"
    },
    "歩": {
		"readings": ["ホ", "ブ", "フ"],
        "type": "comp_indicative"
    },
    "知": {
		"readings": ["チ"],
        "type": "comp_indicative"
    },
    "長": {
		"readings": ["ちょう"],
        "type": "hieroglyph"
    },
    "門": {
		"readings": ["モン", "ボン"],
        "type": "hieroglyph"
    },
    "昼": {
		"readings": ["チュウ"],
        "type": "no_clue"
    },
    "前": {
		"readings": ["ゼン", "セン"],
        "type": "comp_indicative"
    },
    "南": {
		"readings": ["ナン", "ナ", "ダン"],
        "type": "borrowing"
    },
    "点": {
		"readings": ["てん"],
        "phonetic": "占",
        "type": "comp_phonetic"
    },
    "室": {
		"readings": ["シツ"],
        "type": "no_clue"
    },
    "後": {
		"readings": ["ゴ", "コウ"],
        "type": "no_clue"
    },
    "春": {
		"readings": ["シュン"],
        "phonetic": "屯",
        "type": "comp_phonetic"
    },
    "星": {
		"readings": ["セイ", "しょう"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "海": {
		"readings": ["カイ"],
        "type": "no_clue"
    },
    "活": {
		"readings": ["カツ"],
        "type": "no_clue",
        "comment": "TODO phonetic of an obscure component"
    },
    "思": {
		"readings": ["し"],
        "phonetic": "囟",
        "type": "comp_phonetic"
    },
    "科": {
		"readings": ["カ"],
        "type": "comp_indicative"
    },
    "秋": {
		"readings": ["シュウ"],
        "type": "no_clue",
        "comment": "TODO phonetic of an obscure component"
    },
    "茶": {
		"readings": ["チャ", "さ"],
        "type": "no_clue"
    },
    "計": {
		"readings": ["けい"],
        "type": "comp_indicative"
    },
    "風": {
		"readings": ["フウ", "フ"],
        "type": "no_clue",
        "comment": "TODO: maybe phonetic of 凡"
    },
    "食": {
		"readings": ["ショク", "ジキ", "し"],
        "type": "no_clue",
        "comment": "TODO phonetic 亼? Seems strange"
    },
    "首": {
		"readings": ["シュ"],
        "type": "hieroglyph"
    },
    "夏": {
		"readings": ["カ", "ゲ"],
        "type": "hieroglyph"
    },
    "弱": {
		"readings": ["ジャク", "ニャク"],
        "type": "hieroglyph"
    },
    "原": {
		"readings": ["ゲン"],
        "type": "comp_indicative"
    },
    "家": {
		"readings": ["カ", "ケ"],
        "type": "derivative"
    },
    "帰": {
		"readings": ["キ"],
        "type": "comp_indicative"
    },
    "時": {
		"readings": ["ジ"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "紙": {
		"readings": ["し"],
        "phonetic": "氏",
        "type": "comp_phonetic"
    },
    "書": {
		"readings": ["ショ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "記": {
		"readings": ["キ"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "通": {
		"readings": ["ツウ", "ツ"],
        "phonetic": "甬",
        "type": "comp_phonetic"
    },
    "馬": {
		"readings": ["バ", "メ", "マ"],
        "type": "hieroglyph"
    },
    "高": {
		"readings": ["こう"],
        "type": "hieroglyph"
    },
    "強": {
		"readings": ["きょう", "ゴウ"],
        "type": "comp_indicative"
    },
    "教": {
		"readings": ["きょう"],
        "type": "comp_indicative"
    },
    "理": {
		"readings": ["リ"],
        "phonetic": "里",
        "type": "comp_phonetic"
    },
    "細": {
		"readings": ["サイ"],
        "phonetic": "囟",
        "type": "comp_phonetic"
    },
    "組": {
		"readings": ["そ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "船": {
		"readings": ["セン"],
        "phonetic": "㕣",
        "type": "comp_phonetic"
    },
    "週": {
		"readings": ["シュウ"],
        "phonetic": "周",
        "type": "comp_phonetic"
    },
    "野": {
		"readings": ["ヤ", "ショ"],
        "phonetic": "予",
        "type": "comp_phonetic"
    },
    "雪": {
		"readings": ["セツ"],
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
		"readings": ["コウ", "オウ"],
        "type": "hieroglyph"
    },
    "黒": {
		"readings": ["コク"],
        "type": "no_clue"
    },
    "場": {
		"readings": ["じょう"],
        "phonetic": "昜",
        "type": "comp_phonetic"
    },
    "晴": {
		"readings": ["セイ"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "答": {
		"readings": ["とう"],
        "phonetic": "合",
        "type": "comp_phonetic"
    },
    "絵": {
		"readings": ["カイ", "エ"],
        "phonetic": "会",
        "type": "comp_phonetic"
    },
    "買": {
		"readings": ["バイ"],
        "type": "no_clue"
    },
    "朝": {
		"readings": ["ちょう"],
        "type": "comp_indicative"
    },
    "道": {
		"readings": ["どう", "とう"],
        "type": "no_clue"
    },
    "番": {
		"readings": ["バン", "ハン", "ハ"],
        "type": "hieroglyph"
    },
    "間": {
		"readings": ["カン", "ケン"],
        "type": "comp_indicative"
    },
    "雲": {
		"readings": ["ウン"],
        "phonetic": "云",
        "type": "comp_phonetic"
    },
    "園": {
		"readings": ["エン", "オン"],
        "phonetic": "袁",
        "type": "comp_phonetic"
    },
    "数": {
		"readings": ["スウ", "ス", "シュ", "さく", "ソク"],
        "type": "no_clue"
    },
    "新": {
		"readings": ["シン"],
        "type": "no_clue"
    },
    "楽": {
		"readings": ["ガク", "ラク", "ゴウ", "ギョウ"],
        "type": "hieroglyph"
    },
    "話": {
		"readings": ["ワ"],
        "type": "no_clue",
        "comment": "obscure pcomp 䛡"
    },
    "遠": {
		"readings": ["エン", "オン"],
        "phonetic": "袁",
        "type": "comp_phonetic"
    },
    "電": {
		"readings": ["デン", "テン"],
        "type": "comp_indicative"
    },
    "鳴": {
		"readings": ["メイ", "ミョウ"],
        "type": "comp_indicative",
        "comment": "TODO NOT phonetic 鳥"
    },
    "歌": {
		"readings": ["カ"],
        "type": "no_clue",
        "comment": "phonetic mark 哥"
    },
    "算": {
		"readings": ["サン"],
        "type": "comp_indicative"
    },
    "語": {
		"readings": ["ゴ"],
        "phonetic": "吾",
        "type": "comp_phonetic"
    },
    "読": {
		"readings": ["ドク", "トク", "とう"],
        "phonetic": "売",
        "type": "comp_phonetic"
    },
    "聞": {
		"readings": ["ブン", "モン"],
        "phonetic": "門",
        "type": "comp_phonetic"
    },
    "線": {
		"readings": ["セン"],
        "phonetic": "泉",
        "type": "comp_phonetic"
    },
    "親": {
		"readings": ["シン"],
        "phonetic": "亲",
        "type": "comp_phonetic"
    },
    "頭": {
		"readings": ["とう", "ズ", "ト", "ジュウ"],
        "phonetic": "豆",
        "type": "comp_phonetic"
    },
    "曜": {
		"readings": ["よう"],
        "type": "no_clue",
        "comment": "from obscure pmark 翟"
    },
    "顔": {
		"readings": ["ガン", "ゲン"],
        "phonetic": "彦",
        "type": "comp_phonetic"
    },


    "丁": {
		"readings": ["ちょう", "テイ", "とう"],
        "type": "hieroglyph"
    },
    "予": {
		"readings": ["よ"],
        "type": "no_clue"
    },
    "化": {
		"readings": ["カ", "ケ", "ゲ"],
        "type": "comp_indicative"
    },
    "区": {
		"readings": ["ク"],
        "type": "comp_indicative"
    },
    "反": {
		"readings": ["ハン","ホン","タン"],
        "type": "comp_indicative"
    },
    "央": {
		"readings": ["オウ", "よう", "エイ"],
        "type": "no_clue"
    },
    "平": {
		"readings": ["ヘイ", "ビョウ", "ヒョウ"],
        "type": "no_clue"
    },
    "申": {
		"readings": ["シン"],
        "type": "hieroglyph"
    },
    "世": {
		"readings": ["セイ", "セ"],
        "type": "hieroglyph"
    },
    "由": {
		"readings": ["ユ", "ユウ", "ユイ"],
        "type": "hieroglyph"
    },
    "氷": {
		"readings": ["ヒョウ"],
        "type": "comp_indicative"
    },
    "主": {
		"readings": ["シュ", "ス"],
        "type": "hieroglyph"
    },
    "仕": {
		"readings": ["し", "ジ"],
        "type": "no_clue"
    },
    "他": {
		"readings": ["タ"],
        "phonetic": "也",
        "type": "comp_phonetic"
    },
    "代": {
		"readings": ["ダイ", "タイ"],
        "phonetic": "弋",
        "type": "comp_phonetic"
    },
    "写": {
		"readings": ["シャ"],
        "type": "no_clue"
    },
    "号": {
		"readings": ["ゴウ"],
        "type": "no_clue"
    },
    "去": {
		"readings": ["キョ", "コ"],
        "type": "no_clue"
    },
    "打": {
		"readings": ["ダ", "ちょう", "テイ"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "皮": {
		"readings": ["ヒ"],
        "type": "hieroglyph"
    },
    "皿": {
		"readings": ["ベイ"],
        "type": "hieroglyph"
    },
    "礼": {
		"readings": ["レイ", "ライ"],
        "type": "no_clue",
        "comment": "obscure mark 豊"
    },
    "両": {
		"readings": ["りょう"],
        "type": "no_clue"
    },
    "曲": {
		"readings": ["キョク"],
        "type": "hieroglyph"
    },
    "向": {
		"readings": ["コウ", "きょう"],
        "type": "no_clue"
    },
    "州": {
		"readings": ["シュウ"],
        "type": "hieroglyph"
    },
    "全": {
		"readings": ["ゼン"],
        "type": "hieroglyph"
    },
    "次": {
		"readings": ["ジ", "し"],
        "type": "comp_indicative"
    },
    "安": {
		"readings": ["アン"],
        "type": "comp_indicative"
    },
    "守": {
		"readings": ["シュ", "ス"],
        "type": "comp_indicative"
    },
    "式": {
		"readings": ["シキ", "ショク"],
        "phonetic": "弋",
        "type": "comp_phonetic"
    },
    "死": {
		"readings": ["し"],
        "type": "comp_indicative"
    },
    "列": {
		"readings": ["レツ"],
        "type": "comp_indicative"
    },
    "羊": {
		"readings": ["よう"],
        "type": "hieroglyph"
    },
    "有": {
		"readings": ["ユウ", "ウ"],
        "type": "comp_indicative"
    },
    "血": {
		"readings": ["ケツ"],
        "type": "comp_indicative"
    },
    "住": {
		"readings": ["ジュウ"],
        "phonetic": "主",
        "type": "comp_phonetic"
    },
    "助": {
		"readings": ["じょ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "医": {
		"readings": ["イ"],
        "type": "comp_indicative"
    },
    "君": {
		"readings": ["クン"],
        "type": "comp_indicative"
    },
    "坂": {
		"readings": ["ハン", "バン"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "局": {
		"readings": ["キョク"],
        "type": "no_clue"
    },
    "役": {
		"readings": ["ヤク", "エキ"],
        "type": "comp_indicative"
    },
    "投": {
		"readings": ["とう"],
        "type": "comp_indicative"
    },
    "対": {
		"readings": ["タイ", "ツイ"],
        "type": "comp_indicative"
    },
    "決": {
		"readings": ["ケツ"],
        "type": "no_clue",
        "comment": "maybe compound of 夬"
    },
    "究": {
		"readings": ["キュウ", "ク"],
        "phonetic": "九",
        "type": "comp_phonetic"
    },
    "豆": {
		"readings": ["とう", "ズ"],
        "type": "hieroglyph"
    },
    "身": {
		"readings": ["シン"],
        "type": "indicative"
    },
    "返": {
		"readings": ["ヘン", "ハン", "ホン"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "表": {
		"readings": ["ヒョウ"],
        "type": "comp_indicative"
    },
    "事": {
		"readings": ["ジ", "ズ"],
        "type": "no_clue"
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
		"readings": ["メイ", "ミョウ"],
        "type": "comp_indicative"
    },
    "味": {
		"readings": ["ミ", "ビ"],
        "phonetic": "未",
        "type": "comp_phonetic"
    },
    "幸": {
		"readings": ["コウ"],
        "type": "hieroglyph"
    },
    "始": {
		"readings": ["し"],
        "type": "no_clue"
    },
    "実": {
		"readings": ["ジツ"],
        "type": "comp_indicative"
    },
    "定": {
		"readings": ["テイ", "じょう"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "岸": {
		"readings": ["ガン"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "所": {
		"readings": ["ショ", "ソ"],
        "phonetic": "戸",
        "type": "comp_phonetic"
    },
    "放": {
		"readings": ["ほう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "昔": {
		"readings": ["せき", "シャク"],
        "type": "comp_indicative"
    },
    "板": {
		"readings": ["ハン", "バン"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "泳": {
		"readings": ["エイ"],
        "phonetic": "永",
        "type": "comp_phonetic"
    },
    "注": {
		"readings": ["チュウ"],
        "phonetic": "主",
        "type": "comp_phonetic"
    },
    "波": {
		"readings": ["ハ"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "油": {
		"readings": ["ユ", "ユウ"],
        "phonetic": "由",
        "type": "comp_phonetic"
    },
    "受": {
		"readings": ["ジュ", "ズ"],
        "type": "comp_indicative"
    },
    "物": {
		"readings": ["ブツ", "モツ"],
        "phonetic": "勿",
        "type": "comp_phonetic"
    },
    "具": {
		"readings": ["グ"],
        "type": "comp_indicative"
    },
    "委": {
		"readings": ["イ"],
        "type": "no_clue"
    },
    "和": {
		"readings": ["ワ", "オ", "カ"],
        "type": "no_clue"
    },
    "者": {
		"readings": ["シャ"],
        "type": "no_clue"
    },
    "取": {
		"readings": ["シュ"],
        "type": "comp_indicative"
    },
    "服": {
		"readings": ["フク"],
        "phonetic": "𠬝",
        "type": "comp_phonetic"
    },
    "苦": {
		"readings": ["く"],
        "phonetic": "古",
        "type": "comp_phonetic"
    },
    "重": {
		"readings": ["ジュウ", "ちょう"],
        "type": "no_clue"
    },
    "乗": {
		"readings": [],
        "type": "no_clue"
    },
    "係": {
		"readings": [],
        "type": "no_clue"
    },
    "品": {
		"readings": ["ヒン", "ホン"],
        "type": "comp_indicative"
    },
    "客": {
		"readings": ["キャク", "カク"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "県": {
		"readings": ["ケン"],
        "type": "comp_indicative"
    },
    "屋": {
		"readings": ["オク"],
        "type": "comp_indicative"
    },
    "炭": {
		"readings": ["タン"],
        "type": "no_clue"
    },
    "度": {
		"readings": ["ド", "ト", "タク"],
        "type": "no_clue",
        "comment": "maybe obscure phonetic 庶"
    },
    "待": {
		"readings": ["タイ"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "急": {
		"readings": ["キュウ"],
        "phonetic": "及",
        "type": "comp_phonetic"
    },
    "指": {
		"readings": ["し"],
        "phonetic": "旨",
        "type": "comp_phonetic"
    },
    "持": {
		"readings": ["ジ", "チ"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "拾": {
		"readings": ["シュウ", "ジュウ"],
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
		"readings": ["チュウ"],
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
		"readings": ["カイ"],
        "phonetic": "介",
        "type": "comp_phonetic"
    },
    "発": {
		"readings": [],
        "type": "no_clue"
    },
    "研": {
		"readings": ["ケン", "ゲン"],
        "phonetic": "幵",
        "type": "comp_phonetic"
    },
    "神": {
		"readings": ["シン", "ジン"],
        "phonetic": "申",
        "type": "comp_phonetic"
    },
    "秒": {
		"readings": [],
        "type": "no_clue"
    },
    "級": {
		"readings": ["キュウ"],
        "phonetic": "及",
        "type": "comp_phonetic"
    },
    "美": {
		"readings": [],
        "type": "no_clue"
    },
    "負": {
		"readings": [],
        "type": "no_clue"
    },
    "送": {
		"readings": ["そう"],
        "phonetic": "关",
        "type": "comp_phonetic"
    },
    "追": {
		"readings": [],
        "type": "no_clue"
    },
    "面": {
		"readings": [],
        "type": "no_clue"
    },
    "島": {
		"readings": ["とう"],
        "type": "comp_indicative"
    },
    "勉": {
		"readings": [],
        "type": "no_clue"
    },
    "倍": {
		"readings": [],
        "type": "no_clue"
    },
    "真": {
		"readings": [],
        "type": "no_clue"
    },
    "員": {
		"readings": [],
        "type": "no_clue"
    },
    "宮": {
		"readings": [],
        "type": "no_clue"
    },
    "庫": {
		"readings": ["コ", "ク"],
        "type": "comp_indicative"
    },
    "庭": {
		"readings": ["テイ"],
        "phonetic": "廷",
        "type": "comp_phonetic"
    },
    "旅": {
		"readings": ["リョ", "ロ"],
        "phonetic": "㫃",
        "type": "comp_phonetic"
    },
    "根": {
		"readings": ["こん"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "酒": {
		"readings": ["シュ"],
        "type": "no_clue"
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
		"readings": ["ビョウ", "ヘイ"],
        "phonetic": "丙",
        "type": "comp_phonetic"
    },
    "息": {
		"readings": [],
        "type": "no_clue"
    },
    "荷": {
		"readings": [],
        "type": "no_clue"
    },
    "起": {
		"readings": [],
        "type": "no_clue"
    },
    "速": {
		"readings": [],
        "type": "no_clue"
    },
    "配": {
		"readings": ["ハイ"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "院": {
		"readings": [],
        "type": "no_clue"
    },
    "悪": {
		"readings": [],
        "type": "no_clue"
    },
    "商": {
		"readings": [],
        "type": "no_clue"
    },
    "動": {
		"readings": ["どう", "とう"],
        "phonetic": "重",
        "type": "comp_phonetic"
    },
    "宿": {
		"readings": [],
        "type": "no_clue"
    },
    "帳": {
		"readings": ["ちょう"],
        "phonetic": "長",
        "type": "comp_phonetic"
    },
    "族": {
		"readings": ["ゾク"],
        "type": "comp_indicative"
    },
    "深": {
		"readings": [],
        "type": "no_clue"
    },
    "球": {
		"readings": [],
        "type": "no_clue"
    },
    "祭": {
		"readings": [],
        "type": "no_clue"
    },
    "第": {
		"readings": ["ダイ", "テイ"],
        "phonetic": "弟",
        "type": "comp_phonetic"
    },
    "笛": {
		"readings": ["テキ", "ジャク"],
        "phonetic": "由",
        "type": "comp_phonetic"
    },
    "終": {
		"readings": [],
        "type": "no_clue"
    },
    "習": {
		"readings": [],
        "type": "no_clue"
    },
    "転": {
		"readings": [],
        "type": "no_clue"
    },
    "進": {
		"readings": [],
        "type": "no_clue"
    },
    "都": {
		"readings": ["ト", "ツ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "部": {
		"readings": [],
        "type": "no_clue"
    },
    "問": {
		"readings": ["モン", "ブン"],
        "phonetic": "門",
        "type": "comp_phonetic"
    },
    "章": {
		"readings": ["しょう"],
        "type": "no_clue"
    },
    "寒": {
		"readings": [],
        "type": "no_clue"
    },
    "暑": {
		"readings": ["ショ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "植": {
		"readings": ["ショク", "チ"],
        "phonetic": "直",
        "type": "comp_phonetic"
    },
    "温": {
		"readings": [],
        "type": "no_clue"
    },
    "湖": {
		"readings": [],
        "type": "no_clue"
    },
    "港": {
		"readings": [],
        "type": "no_clue"
    },
    "湯": {
		"readings": ["とう", "しょう"],
        "phonetic": "昜",
        "type": "comp_phonetic"
    },
    "登": {
		"readings": ["とう", "ト"],
        "phonetic": "豆",
        "type": "comp_phonetic"
    },
    "短": {
		"readings": ["タン"],
        "phonetic": "豆",
        "type": "comp_phonetic"
    },
    "童": {
		"readings": ["どう", "とう"],
        "type": "no_clue"
    },
    "等": {
		"readings": [],
        "type": "no_clue"
    },
    "筆": {
		"readings": [],
        "type": "no_clue"
    },
    "着": {
		"readings": [],
        "type": "no_clue"
    },
    "期": {
		"readings": ["キ", "ゴ"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "勝": {
		"readings": [],
        "type": "no_clue"
    },
    "葉": {
		"readings": [],
        "type": "no_clue"
    },
    "落": {
		"readings": [],
        "type": "no_clue"
    },
    "軽": {
		"readings": ["けい", "きん"],
        "phonetic": "巠",
        "type": "comp_phonetic"
    },
    "運": {
		"readings": [],
        "type": "no_clue"
    },
    "遊": {
		"readings": [],
        "type": "no_clue"
    },
    "開": {
		"readings": [],
        "type": "no_clue"
    },
    "階": {
		"readings": ["カイ"],
        "phonetic": "皆",
        "type": "comp_phonetic"
    },
    "陽": {
		"readings": ["よう"],
        "phonetic": "昜",
        "type": "comp_phonetic"
    },
    "集": {
		"readings": ["シュウ"],
        "type": "comp_indicative"
    },
    "悲": {
		"readings": ["ヒ"],
        "phonetic": "非",
        "type": "comp_phonetic"
    },
    "飲": {
		"readings": ["イン", "オン"],
        "type": "comp_indicative"
    },
    "歯": {
		"readings": ["し"],
        "phonetic": "止",
        "type": "comp_phonetic"
    },
    "業": {
		"readings": [],
        "type": "no_clue"
    },
    "感": {
		"readings": ["カン"],
        "phonetic": "咸",
        "type": "comp_phonetic"
    },
    "想": {
		"readings": ["そう", "ソ"],
        "phonetic": "相",
        "type": "comp_phonetic"
    },
    "暗": {
		"readings": ["アン"],
        "phonetic": "音",
        "type": "comp_phonetic"
    },
    "漢": {
		"readings": [],
        "type": "no_clue"
    },
    "福": {
		"readings": ["フク"],
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
		"readings": ["ノウ"],
        "type": "comp_indicative"
    },
    "鉄": {
		"readings": [],
        "type": "no_clue"
    },
    "意": {
		"readings": [],
        "type": "no_clue"
    },
    "様": {
		"readings": [],
        "type": "no_clue"
    },
    "緑": {
		"readings": ["リョク", "ロク"],
        "phonetic": "彔",
        "type": "comp_phonetic"
    },
    "練": {
		"readings": [],
        "type": "no_clue"
    },
    "銀": {
		"readings": ["ギン"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "駅": {
		"readings": [],
        "type": "no_clue"
    },
    "鼻": {
		"readings": [],
        "type": "no_clue"
    },
    "横": {
		"readings": ["オウ", "コウ"],
        "phonetic": "黄",
        "type": "comp_phonetic"
    },
    "箱": {
		"readings": ["しょう", "そう"],
        "phonetic": "相",
        "type": "comp_phonetic"
    },
    "談": {
		"readings": ["ダン", "タン"],
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
		"readings": ["セイ"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "薬": {
		"readings": ["ヤク"],
        "phonetic": "楽",
        "type": "comp_phonetic"
    },
    "館": {
		"readings": ["カン"],
        "phonetic": "官",
        "type": "comp_phonetic"
    },
    "題": {
		"readings": ["ダイ", "テイ"],
        "phonetic": "是",
        "type": "comp_phonetic"
    },


    "士": {
		"readings": ["し"],
        "type": "no_clue"
    },
    "不": {
		"readings": ["フ", "ブ"],
        "type": "hieroglyph"
    },
    "夫": {
		"readings": ["フ", "フウ", "ブ"],
        "type": "hieroglyph"
    },
    "欠": {
		"readings": ["ケツ", "ケン"],
        "type": "no_clue"
    },
    "氏": {
		"readings": ["し"],
        "type": "no_clue"
    },
    "民": {
		"readings": ["ミン"],
        "type": "no_clue"
    },
    "史": {
		"readings": ["し"],
        "type": "no_clue"
    },
    "必": {
		"readings": ["ヒツ"],
        "type": "no_clue"
    },
    "失": {
		"readings": ["シツ", "イツ"],
        "type": "no_clue"
    },
    "包": {
		"readings": ["ホウ"],
        "type": "hieroglyph"
    },
    "末": {
		"readings": ["マツ", "バツ"],
        "type": "indicative"
    },
    "未": {
		"readings": ["ミ", "ビ"],
        "type": "hieroglyph"
    },
    "以": {
		"readings": [],
        "type": "no_clue"
    },
    "付": {
		"readings": ["フ"],
        "type": "comp_indicative"
    },
    "令": {
		"readings": [],
        "type": "no_clue"
    },
    "加": {
		"readings": ["カ"],
        "type": "no_clue"
    },
    "司": {
		"readings": ["し", "す"],
        "type": "comp_indicative"
    },
    "功": {
		"readings": ["コウ・ク"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "札": {
		"readings": [],
        "type": "no_clue"
    },
    "辺": {
		"readings": [],
        "type": "no_clue"
    },
    "印": {
		"readings": [],
        "type": "no_clue"
    },
    "争": {
		"readings": [],
        "type": "no_clue"
    },
    "仲": {
		"readings": ["チュウ"],
        "phonetic": "中",
        "type": "comp_phonetic"
    },
    "伝": {
		"readings": [],
        "type": "no_clue"
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
		"readings": ["カク"],
        "type": "comp_indicative"
    },
    "好": {
		"readings": [],
        "type": "no_clue"
    },
    "成": {
		"readings": [],
        "type": "no_clue"
    },
    "灯": {
		"readings": ["とう"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "老": {
		"readings": [],
        "type": "no_clue"
    },
    "衣": {
		"readings": [],
        "type": "no_clue"
    },
    "求": {
		"readings": [],
        "type": "no_clue"
    },
    "束": {
		"readings": [],
        "type": "no_clue"
    },
    "兵": {
		"readings": [],
        "type": "no_clue"
    },
    "位": {
		"readings": ["イ"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "低": {
		"readings": ["テイ"],
        "phonetic": "氐",
        "type": "comp_phonetic"
    },
    "児": {
		"readings": [],
        "type": "no_clue"
    },
    "冷": {
		"readings": [],
        "type": "no_clue"
    },
    "別": {
		"readings": [],
        "type": "no_clue"
    },
    "努": {
		"readings": [],
        "type": "no_clue"
    },
    "労": {
		"readings": ["ろう"],
        "phonetic": "熒",
        "type": "comp_phonetic"
    },
    "告": {
		"readings": [],
        "type": "no_clue"
    },
    "囲": {
		"readings": ["イ"],
        "phonetic": "韋",
        "type": "comp_phonetic"
    },
    "完": {
		"readings": [],
        "type": "no_clue"
    },
    "改": {
		"readings": ["カイ"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "希": {
		"readings": [],
        "type": "no_clue"
    },
    "折": {
		"readings": [],
        "type": "no_clue"
    },
    "材": {
		"readings": ["ザイ", "サイ"],
        "phonetic": "才",
        "type": "comp_phonetic"
    },
    "利": {
		"readings": [],
        "type": "no_clue"
    },
    "臣": {
		"readings": [],
        "type": "no_clue"
    },
    "良": {
		"readings": ["りょう"],
        "type": "no_clue"
    },
    "芸": {
		"readings": ["ゲイ", "ウン"],
        "phonetic": "云",
        "type": "comp_phonetic",
        "comment": "there is a different kanji looking exactly the same, add reading"
    },
    "初": {
		"readings": ["ショ", "ソ"],
        "type": "comp_indicative"
    },
    "果": {
		"readings": ["カ"],
        "type": "hieroglyph"
    },
    "刷": {
		"readings": ["サツ"],
        "type": "no_clue"
    },
    "卒": {
		"readings": ["ソツ", "シュツ"],
        "type": "no_clue"
    },
    "念": {
		"readings": ["ネン"],
        "phonetic": "今",
        "type": "comp_phonetic"
    },
    "例": {
		"readings": ["レイ"],
        "phonetic": "列",
        "type": "comp_phonetic"
    },
    "典": {
		"readings": ["テン"],
        "type": "comp_indicative"
    },
    "周": {
		"readings": ["シュウ", "ス"],
        "type": "no_clue"
    },
    "協": {
		"readings": ["きょう"],
        "type": "comp_indicative"
    },
    "参": {
		"readings": ["サン", "シン"],
        "type": "no_clue"
    },
    "固": {
		"readings": ["こ"],
        "phonetic": "古",
        "type": "comp_phonetic"
    },
    "官": {
		"readings": ["カン"],
        "type": "comp_indicative"
    },
    "底": {
		"readings": ["テイ"],
        "phonetic": "氐",
        "type": "comp_phonetic"
    },
    "府": {
		"readings": ["フ"],
        "phonetic": "付",
        "type": "comp_phonetic"
    },
    "径": {
		"readings": ["けい"],
        "phonetic": "巠",
        "type": "comp_phonetic"
    },
    "松": {
		"readings": ["しょう"],
        "phonetic": "公",
        "type": "comp_phonetic"
    },
    "毒": {
		"readings": ["ドク"],
        "type": "comp_indicative"
    },
    "泣": {
		"readings": ["キュウ"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "治": {
		"readings": ["ジ", "チ"],
        "type": "no_clue",
        "comment": "TODO maybe phonetic 台=臺"
    },
    "法": {
		"readings": ["ホウ", "ハッ", "ホッ"],
        "type": "comp_indicative"
    },
    "牧": {
		"readings": ["ボク", "モク"],
        "type": "comp_indicative"
    },
        "的": {
		"readings": ["テキ"],
        "type": "no_clue",
            "comment": "TODO: phonetic 的?"
    },
    "季": {
		"readings": ["キ"],
        "type": "comp_indicative"
    },
    "英": {
		"readings": ["エイ"],
        "phonetic": "央",
        "type": "comp_phonetic"
    },
    "芽": {
		"readings": ["ガ"],
        "phonetic": "牙",
        "type": "comp_phonetic"
    },
    "単": {
		"readings": [],
        "type": "no_clue"
    },
    "省": {
		"readings": [],
        "type": "no_clue"
    },
    "変": {
		"readings": [],
        "type": "no_clue"
    },
    "信": {
		"readings": [],
        "type": "no_clue"
    },
    "便": {
		"readings": [],
        "type": "no_clue"
    },
    "軍": {
		"readings": [],
        "type": "no_clue"
    },
    "勇": {
		"readings": [],
        "type": "no_clue"
    },
    "型": {
		"readings": [],
        "type": "no_clue"
    },
    "建": {
		"readings": [],
        "type": "no_clue"
    },
    "昨": {
		"readings": ["さく"],
        "phonetic": "乍",
        "type": "comp_phonetic"
    },
    "栄": {
		"readings": ["エイ"],
        "phonetic": "熒",
        "type": "comp_phonetic"
    },
    "浅": {
		"readings": [],
        "type": "no_clue"
    },
    "胃": {
		"readings": [],
        "type": "no_clue"
    },
    "祝": {
		"readings": ["シュク", "シュウ"],
        "type": "comp_indicative"
    },
    "紀": {
		"readings": ["キ"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "約": {
		"readings": ["ヤク"],
        "phonetic": "勺",
        "type": "comp_phonetic"
    },
    "要": {
		"readings": ["よう"],
        "type": "comp_indicative"
    },
    "飛": {
		"readings": [],
        "type": "no_clue"
    },
    "候": {
		"readings": [],
        "type": "no_clue"
    },
    "借": {
		"readings": ["シャク", "シャ"],
        "phonetic": "昔",
        "type": "comp_phonetic"
    },
    "倉": {
		"readings": [],
        "type": "no_clue"
    },
    "孫": {
		"readings": [],
        "type": "no_clue"
    },
    "案": {
		"readings": ["アン"],
        "phonetic": "安",
        "type": "comp_phonetic"
    },
    "害": {
		"readings": [],
        "type": "no_clue"
    },
    "帯": {
		"readings": [],
        "type": "no_clue"
    },
    "席": {
		"readings": [],
        "type": "no_clue"
    },
    "徒": {
		"readings": [],
        "type": "no_clue"
    },
    "挙": {
		"readings": [],
        "type": "no_clue"
    },
    "梅": {
		"readings": [],
        "type": "no_clue"
    },
    "残": {
		"readings": [],
        "type": "no_clue"
    },
    "殺": {
		"readings": [],
        "type": "no_clue"
    },
    "浴": {
		"readings": ["ヨク"],
        "phonetic": "谷",
        "type": "comp_phonetic"
    },
    "特": {
		"readings": ["トク", "ドク"],
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
        "type": "no_clue"
    },
    "差": {
		"readings": ["さ", "し"],
        "phonetic": "左",
        "type": "comp_phonetic"
    },
    "脈": {
		"readings": [],
        "type": "no_clue"
    },
    "航": {
		"readings": [],
        "type": "no_clue"
    },
    "訓": {
		"readings": [],
        "type": "no_clue"
    },
    "連": {
		"readings": [],
        "type": "no_clue"
    },
    "郡": {
		"readings": ["グン", "クン"],
        "phonetic": "君",
        "type": "comp_phonetic"
    },
    "巣": {
		"readings": [],
        "type": "no_clue"
    },
    "健": {
		"readings": [],
        "type": "no_clue"
    },
    "側": {
		"readings": ["ソク", "ショク"],
        "phonetic": "則",
        "type": "comp_phonetic"
    },
    "停": {
		"readings": [],
        "type": "no_clue"
    },
    "副": {
		"readings": ["フク"],
        "phonetic": "畐",
        "type": "comp_phonetic"
    },
    "唱": {
		"readings": [],
        "type": "no_clue"
    },
    "堂": {
		"readings": ["どう", "とう"],
        "phonetic": "尚",
        "type": "comp_phonetic"
    },
    "康": {
		"readings": [],
        "type": "no_clue"
    },
    "得": {
		"readings": [],
        "type": "no_clue"
    },
    "救": {
		"readings": [],
        "type": "no_clue"
    },
    "械": {
		"readings": [],
        "type": "no_clue"
    },
    "清": {
		"readings": ["セイ", "しょう", "シン"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "望": {
		"readings": ["ボウ", "モウ"],
        "phonetic": "亡",
        "type": "comp_phonetic"
    },
    "産": {
		"readings": ["サン"],
        "type": "comp_indicative"
    },
    "菜": {
		"readings": ["サイ"],
        "phonetic": "采",
        "type": "comp_phonetic"
    },
    "票": {
		"readings": ["ヒョウ"],
        "type": "comp_indicative"
    },
    "貨": {
		"readings": ["カ"],
        "phonetic": "化",
        "type": "comp_phonetic"
    },
    "敗": {
		"readings": ["ハイ", "バイ"],
        "phonetic": "貝",
        "type": "comp_phonetic"
    },
    "陸": {
		"readings": [],
        "type": "no_clue"
    },
    "博": {
		"readings": ["ハク", "バク"],
        "phonetic": "尃",
        "type": "comp_phonetic"
    },
    "喜": {
		"readings": [],
        "type": "no_clue"
    },
    "順": {
		"readings": [],
        "type": "no_clue"
    },
    "街": {
		"readings": ["ガイ", "カイ"],
        "phonetic": "圭",
        "type": "comp_phonetic"
    },
    "散": {
		"readings": [],
        "type": "no_clue"
    },
    "景": {
		"readings": ["けい", "エイ"],
        "phonetic": "京",
        "type": "comp_phonetic"
    },
    "最": {
		"readings": [],
        "type": "no_clue"
    },
    "量": {
		"readings": ["りょう"],
        "type": "no_clue"
    },
    "満": {
		"readings": [],
        "type": "no_clue"
    },
    "焼": {
		"readings": [],
        "type": "no_clue"
    },
    "然": {
		"readings": [],
        "type": "no_clue"
    },
    "無": {
		"readings": [],
        "type": "no_clue"
    },
    "給": {
		"readings": ["キュウ"],
        "phonetic": "合",
        "type": "comp_phonetic"
    },
    "結": {
		"readings": ["ケツ", "ケチ", "けい"],
        "phonetic": "吉",
        "type": "comp_phonetic"
    },
    "覚": {
		"readings": [],
        "type": "no_clue"
    },
    "象": {
		"readings": ["しょう", "ぞう"],
        "type": "hieroglyph"
    },
    "貯": {
		"readings": [],
        "type": "no_clue"
    },
    "費": {
		"readings": [],
        "type": "no_clue"
    },
    "達": {
		"readings": [],
        "type": "no_clue"
    },
    "隊": {
		"readings": [],
        "type": "no_clue"
    },
    "飯": {
		"readings": ["ハン"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "働": {
		"readings": [],
        "type": "kokuji"
    },
    "塩": {
		"readings": [],
        "type": "no_clue"
    },
    "戦": {
		"readings": [],
        "type": "no_clue"
    },
    "極": {
		"readings": [],
        "type": "no_clue"
    },
    "照": {
		"readings": [],
        "type": "no_clue"
    },
    "愛": {
		"readings": [],
        "type": "no_clue"
    },
    "節": {
		"readings": [],
        "type": "no_clue"
    },
    "続": {
		"readings": ["ゾク", "ショク"],
        "phonetic": "売",
        "type": "comp_phonetic"
    },
    "置": {
		"readings": ["チ"],
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
        "type": "no_clue"
    },
    "試": {
		"readings": [],
        "type": "no_clue"
    },
    "歴": {
		"readings": [],
        "type": "no_clue"
    },
    "察": {
		"readings": [],
        "type": "no_clue"
    },
    "旗": {
		"readings": ["き"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "漁": {
		"readings": [],
        "type": "no_clue"
    },
    "種": {
		"readings": ["シュ", "しょう"],
        "phonetic": "重",
        "type": "comp_phonetic"
    },
    "管": {
		"readings": ["カン"],
        "phonetic": "官",
        "type": "comp_phonetic"
    },
    "説": {
		"readings": ["セツ", "ゼイ", "エツ"],
        "phonetic": "兌",
        "type": "comp_phonetic"
    },
    "関": {
		"readings": [],
        "type": "no_clue"
    },
    "静": {
		"readings": [],
        "type": "no_clue"
    },
    "億": {
		"readings": [],
        "type": "no_clue"
    },
    "器": {
		"readings": ["キ"],
        "type": "comp_indicative"
    },
    "賞": {
		"readings": ["しょう"],
        "phonetic": "尚",
        "type": "comp_phonetic"
    },
    "標": {
		"readings": ["ヒョウ"],
        "phonetic": "票",
        "type": "comp_phonetic"
    },
    "熱": {
		"readings": [],
        "type": "no_clue"
    },
    "養": {
		"readings": ["よう"],
        "phonetic": "羊",
        "type": "comp_phonetic"
    },
    "課": {
		"readings": ["カ"],
        "phonetic": "果",
        "type": "comp_phonetic"
    },
    "輪": {
		"readings": ["リン"],
        "phonetic": "侖",
        "type": "comp_phonetic"
    },
    "選": {
		"readings": ["セン"],
        "phonetic": "巽",
        "type": "comp_phonetic"
    },
    "機": {
		"readings": ["キ"],
        "phonetic": "幾",
        "type": "comp_phonetic"
    },
    "積": {
		"readings": ["せき", "し", "シャク"],
        "phonetic": "責",
        "type": "comp_phonetic"
    },
    "録": {
		"readings": ["ロク", "リョク"],
        "phonetic": "彔",
        "type": "comp_phonetic"
    },
    "観": {
		"readings": ["カン"],
        "phonetic": "雚",
        "type": "comp_phonetic"
    },
    "類": {
		"readings": ["ルイ"],
        "type": "no_clue"
    },
    "験": {
		"readings": ["ケン", "ゲン"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "願": {
		"readings": ["ガン"],
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
        "type": "no_clue"
    },
    "議": {
		"readings": ["ギ"],
        "phonetic": "義",
        "type": "comp_phonetic"
    },


    "久": {
		"readings": [],
        "type": "no_clue"
    },
    "仏": {
		"readings": ["ブツ", "フツ"],
        "phonetic": "弗",
        "type": "comp_phonetic"
    },
    "支": {
		"readings": [],
        "type": "no_clue"
    },
    "比": {
		"readings": ["ヒ"],
        "type": "comp_indicative"
    },
    "可": {
		"readings": ["カ", "コク"],
        "type": "comp_indicative"
    },
    "旧": {
		"readings": [],
        "type": "no_clue"
    },
    "永": {
		"readings": ["エイ", "よう"],
        "type": "no_clue"
    },
    "句": {
		"readings": [],
        "type": "no_clue"
    },
    "圧": {
		"readings": [],
        "type": "no_clue"
    },
    "弁": {
		"readings": [],
        "type": "no_clue"
    },
    "布": {
		"readings": [],
        "type": "no_clue"
    },
    "刊": {
		"readings": ["カン"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "犯": {
		"readings": [],
        "type": "no_clue"
    },
    "示": {
		"readings": ["ジ", "し"],
        "type": "no_clue"
    },
    "再": {
		"readings": [],
        "type": "no_clue"
    },
    "仮": {
		"readings": [],
        "type": "no_clue"
    },
    "件": {
		"readings": [],
        "type": "no_clue"
    },
    "任": {
		"readings": ["ニン", "ジン"],
        "phonetic": "壬",
        "type": "comp_phonetic"
    },
    "因": {
		"readings": [],
        "type": "no_clue"
    },
    "団": {
		"readings": [],
        "type": "no_clue"
    },
    "在": {
		"readings": [],
        "type": "no_clue"
    },
    "舌": {
		"readings": [],
        "type": "no_clue"
    },
    "似": {
		"readings": [],
        "type": "no_clue"
    },
    "余": {
		"readings": ["ヨ"],
        "type": "no_clue"
    },
    "判": {
		"readings": ["ハン", "バン", "ホウ"],
        "phonetic": "半",
        "type": "comp_phonetic"
    },
    "均": {
		"readings": [],
        "type": "no_clue"
    },
    "志": {
		"readings": [],
        "type": "no_clue"
    },
    "条": {
		"readings": [],
        "type": "no_clue"
    },
    "災": {
		"readings": ["サイ"],
        "phonetic": "𢦏",
        "type": "comp_phonetic",
        "comment": "simplified version of 烖"
    },
    "応": {
		"readings": [],
        "type": "no_clue"
    },
    "序": {
		"readings": ["ジョ"],
        "phonetic": "予",
        "type": "comp_phonetic"
    },
    "快": {
		"readings": [],
        "type": "no_clue"
    },
    "技": {
		"readings": [],
        "type": "no_clue"
    },
    "状": {
		"readings": [],
        "type": "no_clue"
    },
    "防": {
		"readings": ["ぼう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "武": {
		"readings": [],
        "type": "no_clue"
    },
    "承": {
		"readings": [],
        "type": "no_clue"
    },
    "価": {
		"readings": [],
        "type": "no_clue"
    },
    "舎": {
		"readings": [],
        "type": "no_clue"
    },
    "券": {
		"readings": [],
        "type": "no_clue"
    },
    "制": {
		"readings": ["セイ"],
        "type": "comp_indicative"
    },
    "効": {
		"readings": [],
        "type": "no_clue"
    },
    "妻": {
		"readings": [],
        "type": "no_clue"
    },
    "居": {
		"readings": [],
        "type": "no_clue"
    },
    "往": {
		"readings": [],
        "type": "no_clue"
    },
    "性": {
		"readings": ["セイ", "しょう"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "招": {
		"readings": ["しょう"],
        "phonetic": "召",
        "type": "comp_phonetic"
    },
    "易": {
		"readings": [],
        "type": "no_clue"
    },
    "枝": {
		"readings": [],
        "type": "no_clue"
    },
    "河": {
		"readings": ["カ"],
        "phonetic": "可",
        "type": "comp_phonetic"
    },
    "版": {
		"readings": ["ハン"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "肥": {
		"readings": [],
        "type": "no_clue"
    },
    "述": {
		"readings": ["ジュツ"],
        "phonetic": "朮",
        "type": "comp_phonetic"
    },
    "非": {
		"readings": ["ヒ"],
        "type": "comp_indicative"
    },
    "保": {
		"readings": [],
        "type": "no_clue"
    },
    "厚": {
		"readings": [],
        "type": "no_clue"
    },
    "故": {
		"readings": ["こ"],
        "phonetic": "古",
        "type": "comp_phonetic"
    },
    "政": {
		"readings": ["セイ", "しょう"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "査": {
		"readings": [],
        "type": "no_clue"
    },
    "独": {
		"readings": ["ドク", "トク"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "祖": {
		"readings": ["そ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "則": {
		"readings": ["ソク"],
        "type": "comp_indicative"
    },
    "逆": {
		"readings": [],
        "type": "no_clue"
    },
    "退": {
		"readings": [],
        "type": "no_clue"
    },
    "迷": {
		"readings": ["メイ"],
        "phonetic": "米",
        "type": "comp_phonetic"
    },
    "限": {
		"readings": ["ゲン"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "師": {
		"readings": [],
        "type": "no_clue"
    },
    "個": {
		"readings": [],
        "type": "no_clue"
    },
    "修": {
		"readings": [],
        "type": "no_clue"
    },
    "俵": {
		"readings": [],
        "type": "no_clue"
    },
    "益": {
		"readings": [],
        "type": "no_clue"
    },
    "能": {
		"readings": [],
        "type": "no_clue"
    },
    "容": {
		"readings": ["よう"],
        "phonetic": "谷",
        "type": "comp_phonetic"
    },
    "恩": {
		"readings": [],
        "type": "no_clue"
    },
    "格": {
		"readings": ["カク", "コウ", "キャク"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "桜": {
		"readings": [],
        "type": "no_clue"
    },
    "留": {
		"readings": [],
        "type": "no_clue"
    },
    "破": {
		"readings": ["は"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "素": {
		"readings": [],
        "type": "no_clue"
    },
    "耕": {
		"readings": ["コウ"],
        "type": "no_clue"
    },
    "財": {
		"readings": ["ザイ", "サイ"],
        "phonetic": "才",
        "type": "comp_phonetic"
    },
    "造": {
		"readings": [],
        "type": "no_clue"
    },
    "率": {
		"readings": [],
        "type": "no_clue"
    },
    "貧": {
		"readings": [],
        "phonetic": "分",
        "type": "comp_phonetic"
    },
    "基": {
		"readings": ["キ"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "婦": {
		"readings": [],
        "type": "no_clue"
    },
    "寄": {
		"readings": ["キ"],
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
		"readings": ["ジュツ", "シュツ", "スイ"],
        "phonetic": "朮",
        "type": "comp_phonetic"
    },
    "情": {
		"readings": ["じょう", "セイ"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "採": {
		"readings": ["サイ"],
        "phonetic": "采",
        "type": "comp_phonetic"
    },
    "授": {
		"readings": ["ジュ"],
        "phonetic": "受",
        "type": "comp_phonetic"
    },
    "接": {
		"readings": ["セツ", "しょう"],
        "phonetic": "妾",
        "type": "comp_phonetic"
    },
    "断": {
		"readings": ["ダン"],
        "type": "comp_indicative"
    },
    "液": {
		"readings": ["エキ"],
        "phonetic": "夜",
        "type": "comp_phonetic"
    },
    "混": {
		"readings": ["こん"],
        "phonetic": "昆",
        "type": "comp_phonetic"
    },
    "現": {
		"readings": ["ゲン"],
        "phonetic": "見",
        "type": "comp_phonetic"
    },
    "略": {
		"readings": ["リャク"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "眼": {
		"readings": ["ガン", "ゲン"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "務": {
		"readings": ["ム", "ブ"],
        "phonetic": "敄",
        "type": "comp_phonetic"
    },
    "移": {
		"readings": ["イ"],
        "phonetic": "多",
        "type": "comp_phonetic"
    },
    "経": {
		"readings": ["けい", "きょう", "きん"],
        "phonetic": "巠",
        "type": "comp_phonetic"
    },
    "規": {
		"readings": ["キ"],
        "type": "comp_indicative"
    },
    "許": {
		"readings": ["キョ", "コ"],
        "phonetic": "午",
        "type": "comp_phonetic"
    },
    "設": {
		"readings": ["セツ", "セチ"],
        "type": "comp_indicative"
    },
    "責": {
		"readings": ["せき", "シャク"],
        "phonetic": "朿",
        "type": "comp_phonetic"
    },
    "険": {
		"readings": ["ケン"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "備": {
		"readings": ["ビ", "ヒ"],
        "type": "no_clue",
        "comment": "obscure 'quiver' phonetic"
    },
    "営": {
		"readings": ["エイ"],
        "phonetic": "熒",
        "type": "comp_phonetic"
    },
    "報": {
		"readings": ["ホウ"],
        "type": "comp_indicative"
    },
    "富": {
		"readings": ["フ", "フウ"],
        "phonetic": "畐",
        "type": "comp_phonetic"
    },
    "属": {
		"readings": ["ゾク", "ショク"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "復": {
		"readings": ["フク"],
        "phonetic": "复",
        "type": "comp_phonetic"
    },
    "提": {
		"readings": ["テイ", "ダイ", "ちょう"],
        "phonetic": "是",
        "type": "comp_phonetic"
    },
    "検": {
		"readings": ["ケン"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "減": {
		"readings": ["ゲン"],
        "phonetic": "咸",
        "type": "comp_phonetic"
    },
    "測": {
		"readings": ["ソク"],
        "phonetic": "則",
        "type": "comp_phonetic"
    },
    "税": {
		"readings": ["ゼイ", "セイ"],
        "phonetic": "兌",
        "type": "comp_phonetic"
    },
    "程": {
		"readings": [],
        "type": "no_clue"
    },
    "絶": {
		"readings": [],
        "type": "no_clue"
    },
    "統": {
		"readings": [],
        "type": "no_clue"
    },
    "証": {
		"readings": ["しょう"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "評": {
		"readings": ["ヒョウ", "ヘイ"],
        "phonetic": "平",
        "type": "comp_phonetic"
    },
    "賀": {
		"readings": ["ガ"],
        "phonetic": "加",
        "type": "comp_phonetic"
    },
    "貸": {
		"readings": ["タイ"],
        "phonetic":  "代",
        "type": "comp_phonetic"
    },
    "貿": {
		"readings": [],
        "type": "no_clue"
    },
    "過": {
		"readings": [],
        "type": "no_clue"
    },
    "勢": {
		"readings": [],
        "type": "no_clue"
    },
    "幹": {
		"readings": ["カン"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "準": {
		"readings": [],
        "type": "no_clue"
    },
    "損": {
		"readings": [],
        "type": "no_clue"
    },
    "禁": {
		"readings": [],
        "type": "no_clue"
    },
    "罪": {
		"readings": ["ザイ"],
        "type": "comp_indicative"
    },
    "義": {
		"readings": ["ギ"],
        "type": "comp_indicative"
    },
    "群": {
		"readings": ["グン"],
        "phonetic": "君",
        "type": "comp_phonetic"
    },
    "墓": {
		"readings": ["ボ"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "夢": {
		"readings": [],
        "type": "no_clue"
    },
    "解": {
		"readings": ["カイ", "ゲ"],
        "type": "comp_indicative"
    },
    "豊": {
		"readings": ["ホウ"],
        "type": "hieroglyph"
    },
    "資": {
		"readings": ["し"],
        "phonetic": "次",
        "type": "comp_phonetic"
    },
    "鉱": {
		"readings": ["コウ"],
        "phonetic": "広",
        "type": "comp_phonetic"
    },
    "預": {
		"readings": ["ヨ"],
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
        "type": "no_clue"
    },
    "慣": {
		"readings": ["カン"],
        "phonetic": "貫",
        "type": "comp_phonetic"
    },
    "態": {
		"readings": [],
        "type": "no_clue"
    },
    "構": {
		"readings": ["コウ"],
        "phonetic": "冓",
        "type": "comp_phonetic"
    },
    "演": {
		"readings": ["エン"],
        "phonetic": "寅",
        "type": "comp_phonetic"
    },
    "精": {
		"readings": ["セイ", "しょう"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "総": {
		"readings": [],
        "type": "no_clue"
    },
    "綿": {
		"readings": [],
        "type": "no_clue"
    },
    "製": {
		"readings": ["セイ"],
        "phonetic": "制",
        "type": "comp_phonetic"
    },
    "複": {
		"readings": ["フク"],
        "phonetic": "复",
        "type": "comp_phonetic"
    },
    "適": {
		"readings": [],
        "type": "no_clue"
    },
    "酸": {
		"readings": [],
        "type": "no_clue"
    },
    "銭": {
		"readings": [],
        "type": "no_clue"
    },
    "銅": {
		"readings": ["どう"],
        "phonetic": "同",
        "type": "comp_phonetic"
    },
    "際": {
		"readings": [],
        "type": "no_clue"
    },
    "雑": {
		"readings": [],
        "type": "no_clue"
    },
    "領": {
		"readings": [],
        "type": "no_clue"
    },
    "導": {
		"readings": ["どう"],
        "phonetic": "道",
        "type": "comp_phonetic"
    },
    "敵": {
		"readings": ["テキ"],
        "type": "comp_indicative"
    },
    "暴": {
		"readings": [],
        "type": "no_clue"
    },
    "潔": {
		"readings": [],
        "type": "no_clue"
    },
    "確": {
		"readings": [],
        "type": "no_clue"
    },
    "編": {
		"readings": ["ヘン"],
        "phonetic": "扁",
        "type": "comp_phonetic"
    },
    "賛": {
		"readings": ["サン"],
        "type": "comp_indicative"
    },
    "質": {
		"readings": ["シツ", "シチ", "チ", "し"],
        "type": "comp_indicative"
    },
    "興": {
		"readings": ["コウ", "きょう"],
        "type": "comp_indicative"
    },
    "衛": {
		"readings": ["エイ", "エ"],
        "phonetic": "韋",
        "type": "comp_phonetic"
    },
    "燃": {
		"readings": ["ネン", "ゼン"],
        "type": "no_clue",
        "comment": "TODO: phonetic 然"
    },
    "築": {
		"readings": [],
        "type": "no_clue"
    },
    "輸": {
		"readings": ["ユ", "シュ"],
        "phonetic": "兪",
        "type": "comp_phonetic"
    },
    "績": {
		"readings": ["せき"],
        "phonetic": "責",
        "type": "comp_phonetic"
    },
    "講": {
		"readings": ["コウ"],
        "phonetic": "冓",
        "type": "comp_phonetic"
    },
    "謝": {
		"readings": [],
        "type": "no_clue"
    },
    "織": {
		"readings": ["ショク", "シキ"],
        "phonetic": "戠",
        "type": "comp_phonetic"
    },
    "職": {
		"readings": ["ショク", "シキ"],
        "phonetic": "戠",
        "type": "comp_phonetic"
    },
    "額": {
		"readings": ["ガク"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "識": {
		"readings": ["シキ", "し", "ショク"],
        "phonetic": "戠",
        "type": "comp_phonetic"
    },
    "護": {
		"readings": [],
        "type": "no_clue"
    },


    "亡": {
		"readings": ["ボウ", "モウ"],
        "type": "hieroglyph"
    },
    "寸": {
		"readings": ["ソン", "スン"],
        "type": "comp_indicative"
    },
    "己": {
		"readings": ["こ", "き"],
        "type": "hieroglyph"
    },
    "干": {
		"readings": ["カン"],
        "type": "hieroglyph"
    },
    "仁": {
		"readings": ["ジン", "ニ", "ニン"],
        "type": "no_clue"
    },
    "尺": {
		"readings": [],
        "type": "no_clue"
    },
    "片": {
		"readings": ["ヘン"],
        "type": "hieroglyph"
    },
    "冊": {
		"readings": ["サツ", "さく"],
        "type": "hieroglyph"
    },
    "収": {
		"readings": ["シュウ"],
        "type": "no_clue"
    },
    "処": {
		"readings": [],
        "type": "no_clue"
    },
    "幼": {
		"readings": ["よう", "ユウ"],
        "type": "no_clue"
    },
    "庁": {
		"readings": ["ちょう", "テイ"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "穴": {
		"readings": ["ケツ"],
        "type": "hieroglyph"
    },
    "危": {
		"readings": ["キ"],
        "type": "no_clue",
        "comment": "from obscure phonetic 厃"
    },
    "后": {
		"readings": [],
        "type": "no_clue"
    },
    "灰": {
		"readings": ["カイ"],
        "type": "comp_indicative"
    },
    "吸": {
		"readings": ["キュウ"],
        "phonetic": "及",
        "type": "comp_phonetic"
    },
    "存": {
		"readings": [],
        "type": "no_clue"
    },
    "宇": {
		"readings": ["ウ"],
        "phonetic": "于",
        "type": "comp_phonetic"
    },
    "宅": {
		"readings": ["タク"],
        "phonetic": "乇",
        "type": "comp_phonetic"
    },
    "机": {
		"readings": ["キ"],
        "phonetic": "几",
        "type": "comp_phonetic"
    },
    "至": {
		"readings": [],
        "type": "no_clue"
    },
    "否": {
		"readings": ["ヒ"],
        "type": "comp_indicative"
    },
    "我": {
		"readings": ["ガ"],
        "type": "no_clue"
    },
    "系": {
		"readings": [],
        "type": "no_clue"
    },
    "卵": {
		"readings": ["ラン"],
        "type": "hieroglyph"
    },
    "忘": {
		"readings": ["ボウ", "モウ"],
        "phonetic": "亡",
        "type": "comp_phonetic"
    },
    "孝": {
		"readings": [],
        "type": "no_clue"
    },
    "困": {
		"readings": ["こん"],
        "type": "no_clue"
    },
    "批": {
		"readings": ["ヒ"],
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
		"readings": [],
        "type": "no_clue"
    },
    "乳": {
		"readings": ["ニュウ", "ジュ", "ニュ"],
        "type": "comp_indicative"
    },
    "供": {
		"readings": ["きょう", "ク"],
        "phonetic": "共",
        "type": "comp_phonetic"
    },
    "並": {
		"readings": [],
        "type": "no_clue"
    },
    "刻": {
		"readings": ["コク"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "呼": {
		"readings": [],
        "type": "no_clue"
    },
    "宗": {
		"readings": [],
        "type": "no_clue"
    },
    "宙": {
		"readings": ["チュウ"],
        "phonetic": "由",
        "type": "comp_phonetic"
    },
    "宝": {
		"readings": [],
        "type": "no_clue"
    },
    "届": {
		"readings": [],
        "type": "no_clue"
    },
    "延": {
		"readings": [],
        "type": "no_clue"
    },
    "忠": {
		"readings": ["チュウ"],
        "phonetic": "中",
        "type": "comp_phonetic"
    },
    "拡": {
		"readings": ["カク"],
        "phonetic": "広",
        "type": "comp_phonetic"
    },
    "担": {
		"readings": ["タン"],
        "type": "no_clue",
        "comment": "TODO: phonetic 旦"
    },
    "拝": {
		"readings": [],
        "type": "no_clue"
    },
    "枚": {
		"readings": [],
        "type": "no_clue"
    },
    "沿": {
		"readings": ["エン"],
        "phonetic": "㕣",
        "type": "comp_phonetic"
    },
    "若": {
		"readings": [],
        "type": "no_clue"
    },
    "看": {
		"readings": [],
        "type": "no_clue"
    },
    "城": {
		"readings": [],
        "type": "no_clue"
    },
    "奏": {
		"readings": [],
        "type": "no_clue"
    },
    "姿": {
		"readings": ["し"],
        "phonetic": "次",
        "type": "comp_phonetic"
    },
    "宣": {
		"readings": [],
        "type": "no_clue"
    },
    "専": {
		"readings": [],
        "type": "no_clue"
    },
    "巻": {
		"readings": [],
        "type": "no_clue"
    },
    "律": {
		"readings": [],
        "type": "no_clue"
    },
    "映": {
		"readings": ["エイ"],
        "phonetic": "央",
        "type": "comp_phonetic"
    },
    "染": {
		"readings": [],
        "type": "no_clue"
    },
    "段": {
		"readings": [],
        "type": "no_clue"
    },
    "洗": {
		"readings": ["セン"],
        "phonetic": "先",
        "type": "comp_phonetic"
    },
    "派": {
		"readings": [],
        "type": "no_clue"
    },
    "皇": {
		"readings": [],
        "type": "no_clue"
    },
    "泉": {
		"readings": ["セン"],
        "type": "hieroglyph"
    },
    "砂": {
		"readings": [],
        "type": "no_clue"
    },
    "紅": {
		"readings": ["コウ", "ク中", "グ"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "背": {
		"readings": ["ハイ"],
        "phonetic": "北",
        "type": "comp_phonetic"
    },
    "肺": {
		"readings": [],
        "type": "no_clue"
    },
    "革": {
		"readings": [],
        "type": "no_clue"
    },
    "蚕": {
		"readings": [],
        "type": "no_clue"
    },
    "値": {
		"readings": ["チ", "チョク"],
        "phonetic": "直",
        "type": "comp_phonetic"
    },
    "俳": {
		"readings": ["ハイ"],
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
        "type": "no_clue"
    },
    "座": {
		"readings": [],
        "type": "no_clue"
    },
    "従": {
		"readings": [],
        "type": "no_clue"
    },
    "株": {
		"readings": ["シュ"],
        "phonetic": "朱",
        "type": "comp_phonetic"
    },
    "将": {
		"readings": [],
        "type": "no_clue"
    },
    "班": {
		"readings": [],
        "type": "no_clue"
    },
    "秘": {
		"readings": ["ヒ"],
        "phonetic": "必",
        "type": "comp_phonetic"
    },
    "純": {
		"readings": ["ジュン"],
        "phonetic": "屯",
        "type": "comp_phonetic"
    },
    "納": {
		"readings": ["ノウ", "ナッ", "ナ", "ナン", "とう"],
        "phonetic": "内",
        "type": "comp_phonetic"
    },
    "胸": {
		"readings": [],
        "type": "no_clue"
    },
    "朗": {
		"readings": ["ろう"],
        "phonetic": "良",
        "type": "comp_phonetic"
    },
    "討": {
		"readings": ["とう"],
        "phonetic": "屯",
        "type": "comp_phonetic"
    },
    "射": {
		"readings": [],
        "type": "no_clue"
    },
    "針": {
		"readings": ["シン"],
        "phonetic": "十",
        "type": "comp_phonetic"
    },
    "降": {
		"readings": [],
        "type": "no_clue"
    },
    "除": {
		"readings": ["ジ", "ジ"],
        "phonetic": "余",
        "type": "comp_phonetic"
    },
    "陛": {
		"readings": [],
        "type": "no_clue"
    },
    "骨": {
		"readings": ["コツ"],
        "type": "comp_indicative"
    },
    "域": {
		"readings": ["イキ"],
        "phonetic": "或",
        "type": "comp_phonetic"
    },
    "密": {
		"readings": [],
        "type": "no_clue"
    },
    "捨": {
		"readings": [],
        "type": "no_clue"
    },
    "推": {
		"readings": [],
        "type": "no_clue"
    },
    "探": {
		"readings": [],
        "type": "no_clue"
    },
    "済": {
		"readings": [],
        "type": "no_clue"
    },
    "異": {
		"readings": [],
        "type": "no_clue"
    },
    "盛": {
		"readings": [],
        "type": "no_clue"
    },
    "視": {
		"readings": ["し"],
        "phonetic": "示",
        "type": "comp_phonetic"
    },
    "窓": {
		"readings": [],
        "type": "no_clue"
    },
    "翌": {
		"readings": ["ヨク"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "脳": {
		"readings": [],
        "type": "no_clue"
    },
    "著": {
		"readings": [],
        "type": "no_clue"
    },
    "訪": {
		"readings": ["ホウ"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "訳": {
		"readings": [],
        "type": "no_clue"
    },
    "欲": {
		"readings": ["ヨク"],
        "phonetic": "谷",
        "type": "comp_phonetic"
    },
    "郷": {
		"readings": ["きょう", "ゴウ"],
        "type": "comp_indicative"
    },
    "郵": {
		"readings": [],
        "type": "no_clue"
    },
    "閉": {
		"readings": [],
        "type": "no_clue"
    },
    "頂": {
		"readings": ["ちょう", "テイ"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "就": {
		"readings": [],
        "type": "no_clue"
    },
    "善": {
		"readings": [],
        "type": "no_clue"
    },
    "尊": {
		"readings": [],
        "type": "no_clue"
    },
    "割": {
		"readings": [],
        "type": "no_clue"
    },
    "創": {
		"readings": [],
        "type": "no_clue"
    },
    "勤": {
		"readings": ["きん", "ごん"],
        "phonetic": "堇",
        "type": "comp_phonetic"
    },
    "裁": {
		"readings": ["サイ"],
        "phonetic": "𢦏",
        "type": "comp_phonetic"
    },
    "揮": {
		"readings": [],
        "type": "no_clue"
    },
    "敬": {
		"readings": ["けい", "きょう"],
        "type": "comp_indicative"
    },
    "晩": {
		"readings": [],
        "type": "no_clue"
    },
    "棒": {
		"readings": [],
        "type": "no_clue"
    },
    "痛": {
		"readings": ["ツウ", "とう"],
        "phonetic": "甬",
        "type": "comp_phonetic"
    },
    "筋": {
		"readings": [],
        "type": "no_clue"
    },
    "策": {
		"readings": ["さく"],
        "phonetic": "朿",
        "type": "comp_phonetic"
    },
    "衆": {
		"readings": [],
        "type": "no_clue"
    },
    "装": {
		"readings": [],
        "type": "no_clue"
    },
    "補": {
		"readings": ["ホ", "ふ"],
        "phonetic": "甫",
        "type": "comp_phonetic"
    },
    "詞": {
		"readings": ["し"],
        "phonetic": "司",
        "type": "comp_phonetic"
    },
    "貴": {
		"readings": [],
        "type": "no_clue"
    },
    "裏": {
		"readings": ["リ"],
        "phonetic": "里",
        "type": "comp_phonetic"
    },
    "傷": {
		"readings": [],
        "type": "no_clue"
    },
    "暖": {
		"readings": [],
        "type": "no_clue"
    },
    "源": {
		"readings": ["ゲン"],
        "phonetic": "原",
        "type": "comp_phonetic"
    },
    "聖": {
		"readings": ["セイ", "しょう"],
        "phonetic": "𡈼",
        "type": "comp_phonetic"
    },
    "盟": {
		"readings": ["メイ"],
        "phonetic": "明",
        "type": "comp_phonetic"
    },
    "絹": {
		"readings": ["ケン"],
        "phonetic": "肙",
        "type": "comp_phonetic"
    },
    "署": {
		"readings": ["ショ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "腹": {
		"readings": ["フク"],
        "phonetic": "复",
        "type": "comp_phonetic"
    },
    "蒸": {
		"readings": [],
        "type": "no_clue"
    },
    "幕": {
		"readings": ["マク", "バク"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "誠": {
		"readings": [],
        "type": "no_clue"
    },
    "賃": {
		"readings": ["チン", "ジン"],
        "phonetic": "壬",
        "type": "comp_phonetic"
    },
    "疑": {
		"readings": ["ギ"],
        "type": "comp_indicative"
    },
    "層": {
		"readings": ["そう"],
        "phonetic": "曽",
        "type": "comp_phonetic"
    },
    "模": {
		"readings": ["モ", "ボ"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "穀": {
		"readings": [],
        "type": "no_clue"
    },
    "磁": {
		"readings": [],
        "type": "no_clue"
    },
    "暮": {
		"readings": ["ボ"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "誤": {
		"readings": ["ゴ"],
        "phonetic": "呉",
        "type": "comp_phonetic"
    },
    "誌": {
		"readings": [],
        "type": "no_clue"
    },
    "認": {
		"readings": [],
        "type": "no_clue"
    },
    "閣": {
		"readings": ["カク"],
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
        "type": "no_clue"
    },
    "権": {
		"readings": [],
        "type": "no_clue"
    },
    "潮": {
		"readings": ["ちょう"],
        "phonetic": "朝",
        "type": "comp_phonetic"
    },
    "熟": {
		"readings": [],
        "type": "no_clue"
    },
    "蔵": {
		"readings": ["ぞう", "そう"],
        "phonetic": "臧",
        "type": "comp_phonetic"
    },
    "諸": {
		"readings": ["ショ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "誕": {
		"readings": [],
        "type": "no_clue"
    },
    "論": {
		"readings": ["ロン"],
        "phonetic": "侖",
        "type": "comp_phonetic"
    },
    "遺": {
		"readings": [],
        "type": "no_clue"
    },
    "奮": {
		"readings": [],
        "type": "no_clue"
    },
    "憲": {
		"readings": [],
        "type": "no_clue"
    },
    "操": {
		"readings": [],
        "type": "no_clue"
    },
    "樹": {
		"readings": [],
        "type": "no_clue"
    },
    "激": {
		"readings": [],
        "type": "no_clue"
    },
    "糖": {
		"readings": [],
        "type": "no_clue"
    },
    "縦": {
		"readings": [],
        "type": "no_clue"
    },
    "鋼": {
		"readings": ["コウ"],
        "phonetic": "岡",
        "type": "comp_phonetic"
    },
    "厳": {
		"readings": [],
        "type": "no_clue"
    },
    "優": {
		"readings": [],
        "type": "no_clue"
    },
    "縮": {
		"readings": [],
        "type": "no_clue"
    },
    "覧": {
		"readings": [],
        "type": "no_clue"
    },
    "簡": {
		"readings": ["カン", "ケン"],
        "phonetic": "間",
        "type": "comp_phonetic"
    },
    "臨": {
		"readings": ["リン"],
        "type": "no_clue"
    },
    "難": {
		"readings": ["ナン", "ダン"],
        "phonetic": "堇",
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
		"readings": ["オツ", "イツ"],
        "type": "no_clue"
    },
    "了": {
		"readings": ["りょう"],
        "type": "no_clue"
    },
    "又": {
		"readings": ["ユウ"],
        "type": "hieroglyph"
    },
    "与": {
		"readings": ["ヨ"],
        "type": "comp_indicative",
        "comment": "Looked like 與"
    },
    "及": {
		"readings": ["キュウ"],
        "type": "comp_indicative"
    },
    "丈": {
		"readings": ["じょう"],
        "type": "comp_indicative"
    },
    "刃": {
		"readings": ["ジン", "ニン"],
        "type": "hieroglyph"
    },
    "凡": {
		"readings": ["ボン", "ハン"],
        "type": "hieroglyph"
    },
    "勺": {
		"readings": ["シャク"],
        "type": "hieroglyph"
    },
    "互": {
		"readings": [],
        "type": "no_clue"
    },
    "弔": {
		"readings": [],
        "type": "no_clue"
    },
    "井": {
		"readings": ["セイ", "しょう"],
        "type": "hieroglyph"
    },
    "升": {
		"readings": ["しょう"],
        "type": "no_clue"
    },
    "丹": {
		"readings": ["タン"],
        "type": "no_clue"
    },
    "乏": {
		"readings": ["ボウ", "ホウ"],
        "type": "no_clue"
    },
    "匁": {
		"readings": [],
        "type": "kokuji"
    },
    "屯": {
		"readings": ["トン"],
        "type": "hieroglyph"
    },
    "介": {
		"readings": ["カイ"],
        "type": "no_clue"
    },
    "冗": {
		"readings": [],
        "type": "no_clue"
    },
    "凶": {
		"readings": [],
        "type": "no_clue"
    },
    "刈": {
		"readings": [],
        "type": "no_clue"
    },
    "匹": {
		"readings": ["ヒツ"],
        "type": "no_clue"
    },
    "厄": {
		"readings": [],
        "type": "no_clue"
    },
    "双": {
		"readings": ["そう"],
        "type": "comp_indicative"
    },
    "孔": {
		"readings": [],
        "type": "no_clue"
    },
    "幻": {
		"readings": ["ゲン"],
        "type": "no_clue"
    },
    "斗": {
		"readings": ["ト"],
        "type": "hieroglyph"
    },
    "斤": {
		"readings": ["きん"],
        "type": "hieroglyph"
    },
    "且": {
		"readings": ["ショ", "ソ", "しょう"],
        "type": "hieroglyph"
    },
    "丙": {
		"readings": ["ヘイ"],
        "type": "hieroglyph"
    },
    "甲": {
		"readings": [],
        "type": "no_clue"
    },
    "凸": {
		"readings": ["トツ"],
        "type": "hieroglyph"
    },
    "丘": {
		"readings": [],
        "type": "no_clue"
    },
    "斥": {
		"readings": ["せき"],
        "type": "no_clue",
        "comment": "TODO: strange"
    },
    "仙": {
		"readings": ["セン"],
        "phonetic": "山",
        "type": "comp_phonetic"
    },
    "凹": {
		"readings": ["オウ"],
        "type": "hieroglyph"
    },
    "召": {
		"readings": ["しょう"],
        "type": "comp_indicative"
    },
    "巨": {
		"readings": ["キョ", "コ"],
        "type": "hieroglyph"
    },
    "占": {
		"readings": ["セン"],
        "type": "comp_indicative"
    },
    "囚": {
		"readings": ["シュウ"],
        "type": "comp_indicative"
    },
    "奴": {
		"readings": [],
        "type": "no_clue"
    },
    "尼": {
		"readings": ["ニ", "ジ"],
        "type": "no_clue"
    },
    "巧": {
		"readings": [],
        "type": "no_clue"
    },
    "払": {
		"readings": ["フツ"],
        "phonetic": "弗",
        "type": "comp_phonetic"
    },
    "汁": {
		"readings": ["ジュウ"],
        "phonetic": "十",
        "type": "comp_phonetic"
    },
    "玄": {
		"readings": ["ゲン"],
        "type": "no_clue"
    },
    "甘": {
		"readings": [],
        "type": "no_clue"
    },
    "矛": {
		"readings": [],
        "type": "no_clue"
    },
    "込": {
		"readings": [],
        "type": "kokuji"
    },
    "弐": {
		"readings": [],
        "type": "no_clue"
    },
    "朱": {
		"readings": ["シュ", "ス"],
        "type": "no_clue"
    },
    "吏": {
		"readings": [],
        "type": "no_clue"
    },
    "劣": {
		"readings": ["レツ"],
        "type": "comp_indicative"
    },
    "充": {
		"readings": [],
        "type": "no_clue"
    },
    "妄": {
		"readings": ["モウ", "ボウ"],
        "phonetic": "亡",
        "type": "comp_phonetic"
    },
    "企": {
		"readings": ["キ"],
        "phonetic": "止",
        "type": "comp_phonetic"
    },
    "仰": {
		"readings": [],
        "type": "no_clue"
    },
    "伐": {
		"readings": ["バツ"],
        "type": "comp_indicative"
    },
    "伏": {
		"readings": ["フク", "ブク"],
        "type": "no_clue"
    },
    "刑": {
		"readings": [],
        "type": "no_clue"
    },
    "旬": {
		"readings": [],
        "type": "no_clue"
    },
    "旨": {
		"readings": ["し"],
        "type": "no_clue"
    },
    "匠": {
		"readings": [],
        "type": "no_clue"
    },
    "叫": {
		"readings": ["きょう"],
        "phonetic": "丩",
        "type": "comp_phonetic"
    },
    "吐": {
		"readings": ["と"],
        "phonetic": "土",
        "type": "no_clue"
    },
    "吉": {
		"readings": ["キチ", "キツ"],
        "type": "comp_indicative"
    },
    "如": {
		"readings": [],
        "type": "no_clue"
    },
    "妃": {
		"readings": ["ヒ"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "尽": {
		"readings": [],
        "type": "no_clue"
    },
    "帆": {
		"readings": [],
        "type": "no_clue"
    },
    "忙": {
		"readings": ["ボウ", "モウ"],
        "phonetic": "亡",
        "type": "comp_phonetic"
    },
    "扱": {
		"readings": ["キュウ", "そう"],
        "phonetic": "及",
        "type": "comp_phonetic"
    },
    "朽": {
		"readings": [],
        "type": "no_clue"
    },
    "朴": {
		"readings": ["ボク", "ハク"],
        "phonetic": "卜",
        "type": "comp_phonetic"
    },
    "汚": {
		"readings": ["オ"],
        "phonetic": "于",
        "type": "comp_phonetic"
    },
    "汗": {
		"readings": ["カン"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "江": {
		"readings": ["コウ"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "壮": {
		"readings": [],
        "type": "no_clue"
    },
    "缶": {
		"readings": [],
        "type": "no_clue"
    },
    "肌": {
		"readings": ["キ"],
        "phonetic": "几",
        "type": "comp_phonetic"
    },
    "舟": {
		"readings": [],
        "type": "no_clue"
    },
    "芋": {
		"readings": ["ウ"],
        "phonetic": "于",
        "type": "comp_phonetic"
    },
    "芝": {
		"readings": [],
        "type": "no_clue"
    },
    "巡": {
		"readings": [],
        "type": "no_clue"
    },
    "迅": {
		"readings": [],
        "type": "no_clue"
    },
    "亜": {
		"readings": [],
        "type": "no_clue"
    },
    "更": {
		"readings": [],
        "type": "no_clue"
    },
    "寿": {
		"readings": [],
        "type": "no_clue"
    },
    "励": {
		"readings": [],
        "type": "no_clue"
    },
    "含": {
		"readings": ["ガン", "カン", "ごん"],
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
		"readings": ["シン"],
        "phonetic": "申",
        "type": "comp_phonetic"
    },
    "但": {
		"readings": [],
        "type": "no_clue"
    },
    "伯": {
		"readings": ["ハク", "ハ"],
        "phonetic": "白",
        "type": "comp_phonetic"
    },
    "伴": {
		"readings": ["ハン", "バン"],
        "phonetic": "半",
        "type": "comp_phonetic"
    },
    "呉": {
		"readings": ["ゴ"],
        "type": "comp_indicative"
    },
    "克": {
		"readings": [],
        "type": "no_clue"
    },
    "却": {
		"readings": [],
        "type": "no_clue"
    },
    "吟": {
		"readings": ["ギン"],
        "phonetic": "今",
        "type": "comp_phonetic"
    },
    "吹": {
		"readings": [],
        "type": "no_clue"
    },
    "呈": {
		"readings": [],
        "type": "no_clue"
    },
    "壱": {
		"readings": [],
        "type": "no_clue"
    },
    "坑": {
		"readings": [],
        "type": "no_clue"
    },
    "坊": {
		"readings": ["ぼう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "妊": {
		"readings": ["ニン", "ジン"],
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
        "type": "no_clue"
    },
    "肖": {
		"readings": ["しょう"],
        "phonetic": "小",
        "type": "comp_phonetic"
    },
    "尿": {
		"readings": [],
        "type": "no_clue"
    },
    "尾": {
		"readings": [],
        "type": "no_clue"
    },
    "岐": {
		"readings": [],
        "type": "no_clue"
    },
    "攻": {
		"readings": ["コウ"],
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
        "type": "no_clue"
    },
    "廷": {
		"readings": ["テイ"],
        "phonetic": "𡈼",
        "type": "comp_phonetic"
    },
    "忍": {
		"readings": ["ニン", "ジン"],
        "phonetic": "刃",
        "type": "comp_phonetic"
    },
    "戒": {
		"readings": [],
        "type": "no_clue"
    },
    "戻": {
		"readings": ["れい"],
        "phonetic": "大",
        "type": "comp_phonetic"
    },
    "抗": {
		"readings": [],
        "type": "no_clue"
    },
    "抄": {
		"readings": [],
        "type": "no_clue"
    },
    "択": {
		"readings": [],
        "type": "no_clue"
    },
    "把": {
		"readings": [],
        "type": "no_clue"
    },
    "抜": {
		"readings": [],
        "type": "no_clue"
    },
    "扶": {
		"readings": ["フ"],
        "phonetic": "夫",
        "type": "comp_phonetic"
    },
    "抑": {
		"readings": [],
        "type": "no_clue"
    },
    "杉": {
		"readings": [],
        "type": "no_clue"
    },
    "沖": {
		"readings": ["チュウ"],
        "phonetic": "中",
        "type": "comp_phonetic"
    },
    "沢": {
		"readings": [],
        "type": "no_clue"
    },
    "沈": {
		"readings": [],
        "type": "no_clue"
    },
    "没": {
		"readings": [],
        "type": "no_clue"
    },
    "妥": {
		"readings": [],
        "type": "no_clue"
    },
    "狂": {
		"readings": [],
        "type": "no_clue"
    },
    "秀": {
		"readings": [],
        "type": "no_clue"
    },
    "肝": {
		"readings": ["カン"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "即": {
		"readings": [],
        "type": "no_clue"
    },
    "芳": {
		"readings": ["ほう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "辛": {
		"readings": ["シン"],
        "type": "hieroglyph"
    },
    "迎": {
		"readings": [],
        "type": "no_clue"
    },
    "邦": {
		"readings": [],
        "type": "no_clue"
    },
    "岳": {
		"readings": [],
        "type": "no_clue"
    },
    "奉": {
		"readings": [],
        "type": "no_clue"
    },
    "享": {
		"readings": [],
        "type": "no_clue"
    },
    "盲": {
		"readings": ["モウ", "ボウ"],
        "phonetic": "亡",
        "type": "comp_phonetic"
    },
    "依": {
		"readings": [],
        "type": "no_clue"
    },
    "佳": {
		"readings": [],
        "type": "no_clue"
    },
    "侍": {
		"readings": ["ジ", "し"],
        "phonetic": "寺",
        "type": "comp_phonetic"
    },
    "侮": {
		"readings": [],
        "type": "no_clue"
    },
    "併": {
		"readings": [],
        "type": "no_clue"
    },
    "免": {
		"readings": [],
        "type": "no_clue"
    },
    "刺": {
		"readings": ["し", "せき"],
        "phonetic": "朿",
        "type": "comp_phonetic"
    },
    "劾": {
		"readings": ["ガイ"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "卓": {
		"readings": ["タク"],
        "type": "no_clue"
    },
    "叔": {
		"readings": [],
        "type": "no_clue"
    },
    "坪": {
		"readings": ["ヘイ"],
        "phonetic": "平",
        "type": "comp_phonetic"
    },
    "奇": {
		"readings": ["キ"],
        "type": "no_clue"
    },
    "奔": {
		"readings": [],
        "type": "no_clue"
    },
    "姓": {
		"readings": ["セイ", "しょう"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "宜": {
		"readings": [],
        "type": "no_clue"
    },
    "尚": {
		"readings": ["しょう"],
        "phonetic": "向",
        "type": "comp_phonetic"
    },
    "屈": {
		"readings": ["クツ"],
        "type": "comp_indicative"
    },
    "岬": {
		"readings": [],
        "type": "no_clue"
    },
    "弦": {
		"readings": ["ゲン"],
        "phonetic": "玄",
        "type": "comp_phonetic"
    },
    "征": {
		"readings": ["セイ"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "彼": {
		"readings": ["ヒ"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "怪": {
		"readings": [],
        "type": "no_clue"
    },
    "怖": {
		"readings": [],
        "type": "no_clue"
    },
    "肩": {
		"readings": [],
        "type": "no_clue"
    },
    "房": {
		"readings": ["ボウ"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "押": {
		"readings": [],
        "type": "no_clue"
    },
    "拐": {
		"readings": [],
        "type": "no_clue"
    },
    "拒": {
		"readings": ["キョ"],
        "phonetic": "巨",
        "type": "comp_phonetic"
    },
    "拠": {
		"readings": [],
        "type": "no_clue"
    },
    "拘": {
		"readings": [],
        "type": "no_clue"
    },
    "拙": {
		"readings": ["セツ"],
        "phonetic": "出",
        "type": "comp_phonetic"
    },
    "拓": {
		"readings": ["タク"],
        "phonetic": "石",
        "type": "comp_phonetic"
    },
    "抽": {
		"readings": [],
        "type": "no_clue"
    },
    "抵": {
		"readings": ["テイ", "し"],
        "phonetic": "氐",
        "type": "comp_phonetic"
    },
    "拍": {
		"readings": ["ハク", "ヒョウ"],
        "phonetic": "白",
        "type": "comp_phonetic"
    },
    "披": {
		"readings": ["ヒ"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "抱": {
		"readings": ["ホウ"],
        "phonetic": "包",
        "type": "comp_phonetic"
    },
    "抹": {
		"readings": ["マツ", "バツ"],
        "phonetic": "末",
        "type": "comp_phonetic"
    },
    "昆": {
		"readings": ["こん"],
        "type": "no_clue"
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
		"readings": ["ハイ"],
        "phonetic": "不",
        "type": "comp_phonetic"
    },
    "枠": {
		"readings": [],
        "type": "kokuji"
    },
    "欧": {
		"readings": ["オウ"],
        "phonetic": "区",
        "type": "comp_phonetic"
    },
    "肯": {
		"readings": ["コウ"],
        "type": "comp_indicative"
    },
    "殴": {
		"readings": ["オウ"],
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
		"readings": ["ハク"],
        "phonetic": "白",
        "type": "comp_phonetic"
    },
    "泌": {
		"readings": ["ヒツ", "ヒ"],
        "phonetic": "必",
        "type": "comp_phonetic"
    },
    "沸": {
		"readings": ["フツ", "ヒ"],
        "phonetic": "弗",
        "type": "comp_phonetic"
    },
    "泡": {
		"readings": ["ホウ"],
        "phonetic": "包",
        "type": "comp_phonetic"
    },
    "炎": {
		"readings": ["エン"],
        "type": "comp_indicative"
    },
    "炊": {
		"readings": [],
        "type": "no_clue"
    },
    "炉": {
		"readings": [],
        "type": "no_clue"
    },
    "邪": {
		"readings": ["じゃ", "シャ", "ヤ"],
        "phonetic": "牙",
        "type": "comp_phonetic"
    },
    "祈": {
		"readings": ["キ"],
        "phonetic": "斤",
        "type": "comp_phonetic"
    },
    "祉": {
		"readings": ["し"],
        "phonetic": "止",
        "type": "comp_phonetic"
    },
    "突": {
		"readings": [],
        "type": "no_clue"
    },
    "肢": {
		"readings": [],
        "type": "no_clue"
    },
    "肪": {
		"readings": ["ぼう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "到": {
		"readings": [],
        "type": "no_clue"
    },
    "茎": {
		"readings": ["けい"],
        "phonetic": "巠",
        "type": "comp_phonetic"
    },
    "苗": {
		"readings": [],
        "type": "no_clue"
    },
    "茂": {
		"readings": [],
        "type": "no_clue"
    },
    "迭": {
		"readings": ["テツ"],
        "phonetic": "失",
        "type": "comp_phonetic"
    },
    "迫": {
		"readings": ["ハク"],
        "phonetic": "白",
        "type": "comp_phonetic"
    },
    "邸": {
		"readings": ["テイ"],
        "phonetic": "氐",
        "type": "comp_phonetic"
    },
    "阻": {
		"readings": ["そ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "附": {
		"readings": ["フ", "ブ"],
        "phonetic": "付",
        "type": "comp_phonetic"
    },
    "斉": {
		"readings": [],
        "type": "no_clue"
    },
    "甚": {
		"readings": [],
        "type": "no_clue"
    },
    "帥": {
		"readings": [],
        "type": "no_clue"
    },
    "衷": {
		"readings": ["チュウ"],
        "phonetic": "中",
        "type": "comp_phonetic"
    },
    "幽": {
		"readings": [],
        "type": "no_clue"
    },
    "為": {
		"readings": [],
        "type": "no_clue"
    },
    "盾": {
		"readings": [],
        "type": "no_clue"
    },
    "卑": {
		"readings": [],
        "type": "no_clue"
    },
    "哀": {
		"readings": [],
        "type": "no_clue"
    },
    "亭": {
		"readings": ["テイ", "チン"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "帝": {
		"readings": [],
        "type": "no_clue"
    },
    "侯": {
		"readings": [],
        "type": "no_clue"
    },
    "俊": {
		"readings": [],
        "type": "no_clue"
    },
    "侵": {
		"readings": [],
        "type": "no_clue"
    },
    "促": {
		"readings": ["ソク", "ショク"],
        "phonetic": "足",
        "type": "comp_phonetic"
    },
    "俗": {
		"readings": ["ゾク"],
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
        "type": "no_clue"
    },
    "削": {
		"readings": ["さく"],
        "phonetic": "肖",
        "type": "comp_phonetic"
    },
    "勅": {
		"readings": [],
        "type": "no_clue"
    },
    "貞": {
		"readings": [],
        "type": "no_clue"
    },
    "卸": {
		"readings": [],
        "type": "no_clue"
    },
    "厘": {
		"readings": ["りん"],
        "type": "derivative"
    },
    "怠": {
		"readings": [],
        "type": "no_clue"
    },
    "叙": {
		"readings": [],
        "type": "no_clue"
    },
    "咲": {
		"readings": ["しょう"],
        "phonetic": "关",
        "type": "comp_phonetic"
    },
    "垣": {
		"readings": [],
        "type": "no_clue"
    },
    "契": {
		"readings": [],
        "type": "no_clue"
    },
    "姻": {
		"readings": [],
        "type": "no_clue"
    },
    "孤": {
		"readings": ["コ"],
        "phonetic": "瓜",
        "type": "comp_phonetic"
    },
    "封": {
		"readings": [],
        "type": "no_clue"
    },
    "峡": {
		"readings": [],
        "type": "no_clue"
    },
    "峠": {
		"readings": [],
        "type": "kokuji"
    },
    "弧": {
		"readings": ["コ"],
        "phonetic": "瓜",
        "type": "comp_phonetic"
    },
    "悔": {
		"readings": [],
        "type": "no_clue"
    },
    "恒": {
		"readings": [],
        "type": "no_clue"
    },
    "恨": {
		"readings": ["こん"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "怒": {
		"readings": [],
        "type": "no_clue"
    },
    "威": {
		"readings": [],
        "type": "no_clue"
    },
    "括": {
		"readings": [],
        "type": "no_clue"
    },
    "挟": {
		"readings": [],
        "type": "no_clue"
    },
    "拷": {
		"readings": ["ゴウ", "コウ"],
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
		"readings": ["ゼ", "し"],
        "type": "comp_indicative"
    },
    "冒": {
		"readings": [],
        "type": "no_clue"
    },
    "架": {
		"readings": ["カ"],
        "phonetic": "加",
        "type": "comp_phonetic"
    },
    "枯": {
		"readings": ["こ"],
        "phonetic": "古",
        "type": "comp_phonetic"
    },
    "柄": {
		"readings": ["ヘイ"],
        "phonetic": "丙",
        "type": "comp_phonetic"
    },
    "柳": {
		"readings": [],
        "type": "no_clue"
    },
    "皆": {
		"readings": ["カイ"],
        "type": "comp_indicative"
    },
    "洪": {
		"readings": ["コウ"],
        "phonetic": "共",
        "type": "comp_phonetic"
    },
    "浄": {
		"readings": [],
        "type": "no_clue"
    },
    "津": {
		"readings": [],
        "type": "no_clue"
    },
    "洞": {
		"readings": ["どう", "とう"],
        "phonetic": "同",
        "type": "comp_phonetic"
    },
    "牲": {
		"readings": ["セイ"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "狭": {
		"readings": [],
        "type": "no_clue"
    },
    "狩": {
		"readings": [],
        "type": "no_clue"
    },
    "珍": {
		"readings": [],
        "type": "no_clue"
    },
    "某": {
		"readings": [],
        "type": "no_clue"
    },
    "疫": {
		"readings": ["エキ", "ヤク"],
        "phonetic": "役",
        "type": "comp_phonetic"
    },
    "柔": {
		"readings": [],
        "type": "no_clue"
    },
    "砕": {
		"readings": ["サイ"],
        "phonetic": "卒",
        "type": "comp_phonetic"
    },
    "窃": {
		"readings": [],
        "type": "no_clue"
    },
    "糾": {
		"readings": ["キュウ"],
        "phonetic": "丩",
        "type": "comp_phonetic"
    },
    "耐": {
		"readings": ["タイ"],
        "type": "comp_indicative"
    },
    "胎": {
		"readings": [],
        "type": "no_clue"
    },
    "胆": {
		"readings": [],
        "type": "no_clue"
    },
    "胞": {
		"readings": ["ホウ"],
        "phonetic": "包",
        "type": "comp_phonetic"
    },
    "臭": {
		"readings": [],
        "type": "no_clue"
    },
    "荒": {
		"readings": [],
        "type": "no_clue"
    },
    "荘": {
		"readings": [],
        "type": "no_clue"
    },
    "虐": {
		"readings": [],
        "type": "no_clue"
    },
    "訂": {
		"readings": ["テイ", "ちょう"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "赴": {
		"readings": ["フ"],
        "phonetic": "卜",
        "type": "comp_phonetic"
    },
    "軌": {
		"readings": ["キ"],
        "phonetic": "九",
        "type": "comp_phonetic"
    },
    "逃": {
		"readings": ["とう"],
        "phonetic": "兆",
        "type": "comp_phonetic"
    },
    "郊": {
		"readings": ["コウ"],
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
        "type": "no_clue"
    },
    "剛": {
		"readings": ["ゴウ", "コウ"],
        "phonetic": "岡",
        "type": "comp_phonetic"
    },
    "衰": {
		"readings": [],
        "type": "no_clue"
    },
    "畝": {
		"readings": [],
        "type": "no_clue"
    },
    "恋": {
		"readings": [],
        "type": "no_clue"
    },
    "倹": {
		"readings": ["ケン"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "倒": {
		"readings": [],
        "type": "no_clue"
    },
    "倣": {
		"readings": [],
        "type": "no_clue"
    },
    "俸": {
		"readings": [],
        "type": "no_clue"
    },
    "倫": {
		"readings": ["リン"],
        "phonetic": "侖",
        "type": "comp_phonetic"
    },
    "翁": {
		"readings": ["オウ"],
        "phonetic": "公",
        "type": "comp_phonetic"
    },
    "兼": {
		"readings": ["ケン"],
        "type": "comp_indicative"
    },
    "准": {
		"readings": [],
        "type": "no_clue"
    },
    "凍": {
		"readings": ["とう"],
        "phonetic": "東",
        "type": "comp_phonetic"
    },
    "剣": {
		"readings": ["ケン"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "剖": {
		"readings": [],
        "type": "no_clue"
    },
    "脅": {
		"readings": [],
        "type": "no_clue"
    },
    "匿": {
		"readings": [],
        "type": "no_clue"
    },
    "栽": {
		"readings": ["サイ"],
        "phonetic": "𢦏",
        "type": "comp_phonetic"
    },
    "索": {
		"readings": [],
        "type": "no_clue"
    },
    "桑": {
		"readings": [],
        "type": "no_clue"
    },
    "唆": {
		"readings": [],
        "type": "no_clue"
    },
    "哲": {
		"readings": [],
        "type": "no_clue"
    },
    "埋": {
		"readings": [],
        "type": "no_clue"
    },
    "娯": {
		"readings": ["ゴ"],
        "phonetic": "呉",
        "type": "comp_phonetic"
    },
    "娠": {
		"readings": ["シン"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "姫": {
		"readings": [],
        "type": "no_clue"
    },
    "娘": {
		"readings": [],
        "type": "no_clue"
    },
    "宴": {
		"readings": [],
        "type": "no_clue"
    },
    "宰": {
		"readings": [],
        "type": "no_clue"
    },
    "宵": {
		"readings": ["しょう"],
        "phonetic": "肖",
        "type": "comp_phonetic"
    },
    "峰": {
		"readings": [],
        "type": "no_clue"
    },
    "貢": {
		"readings": ["コウ", "ク"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "唐": {
		"readings": [],
        "type": "no_clue"
    },
    "徐": {
		"readings": ["ジョ"],
        "phonetic": "余",
        "type": "comp_phonetic"
    },
    "悦": {
		"readings": ["エツ"],
        "phonetic": "兌",
        "type": "comp_phonetic"
    },
    "恐": {
		"readings": [],
        "type": "no_clue"
    },
    "恭": {
		"readings": ["きょう"],
        "phonetic": "共",
        "type": "comp_phonetic"
    },
    "恵": {
		"readings": ["けい", "エ"],
        "type": "no_clue"
    },
    "悟": {
		"readings": ["ゴ"],
        "phonetic": "吾",
        "type": "comp_phonetic"
    },
    "悩": {
		"readings": ["ノウ", "どう"],
        "type": "no_clue",
        "comment": "TODO: obscure phonetic component 𡿺?"
    },
    "扇": {
		"readings": [],
        "type": "no_clue"
    },
    "振": {
		"readings": ["シン"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "捜": {
		"readings": [],
        "type": "no_clue"
    },
    "挿": {
		"readings": [],
        "type": "no_clue"
    },
    "捕": {
		"readings": ["ホ", "ブ"],
        "phonetic": "甫",
        "type": "comp_phonetic"
    },
    "敏": {
		"readings": ["ビン"],
        "type": "comp_indicative"
    },
    "核": {
		"readings": ["カク"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "桟": {
		"readings": [],
        "type": "no_clue"
    },
    "栓": {
		"readings": ["セン"],
        "phonetic": "全",
        "type": "comp_phonetic"
    },
    "桃": {
		"readings": ["とう"],
        "phonetic": "兆",
        "type": "comp_phonetic"
    },
    "殊": {
		"readings": ["シュ"],
        "phonetic": "朱",
        "type": "comp_phonetic"
    },
    "殉": {
		"readings": [],
        "type": "no_clue"
    },
    "浦": {
		"readings": ["ホ"],
        "phonetic": "甫",
        "type": "comp_phonetic"
    },
    "浸": {
		"readings": [],
        "type": "no_clue"
    },
    "泰": {
		"readings": [],
        "type": "no_clue"
    },
    "浜": {
		"readings": ["ヒン"],
        "phonetic": "賓",
        "type": "comp_phonetic"
    },
    "浮": {
		"readings": [],
        "type": "no_clue"
    },
    "涙": {
		"readings": [],
        "type": "no_clue"
    },
    "浪": {
		"readings": ["ろう"],
        "phonetic": "良",
        "type": "comp_phonetic"
    },
    "烈": {
		"readings": ["レツ"],
        "phonetic": "列",
        "type": "comp_phonetic"
    },
    "畜": {
		"readings": ["チク", "キク"],
        "type": "no_clue"
    },
    "珠": {
		"readings": ["シュ"],
        "phonetic": "朱",
        "type": "comp_phonetic"
    },
    "畔": {
		"readings": ["ハン"],
        "phonetic": "半",
        "type": "comp_phonetic"
    },
    "疾": {
		"readings": ["シツ"],
        "phonetic": "矢",
        "type": "comp_phonetic"
    },
    "症": {
		"readings": ["しょう"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "疲": {
		"readings": ["ヒ"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "眠": {
		"readings": ["ミン", "ベン"],
        "phonetic": "民",
        "type": "comp_phonetic"
    },
    "砲": {
		"readings": ["ホウ"],
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
        "type": "no_clue",
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
		"readings": ["スイ"],
        "phonetic": "卒",
        "type": "comp_phonetic"
    },
    "紛": {
		"readings": ["フン"],
        "phonetic": "分",
        "type": "comp_phonetic"
    },
    "紡": {
		"readings": ["ボウ"],
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
        "type": "no_clue"
    },
    "恥": {
		"readings": ["チ"],
        "phonetic": "耳",
        "type": "comp_phonetic"
    },
    "脂": {
		"readings": ["し"],
        "phonetic": "旨",
        "type": "comp_phonetic"
    },
    "朕": {
		"readings": ["チン"],
        "type": "comp_indicative"
    },
    "胴": {
		"readings": ["どう", "とう"],
        "phonetic": "同",
        "type": "comp_phonetic"
    },
    "致": {
		"readings": [],
        "type": "no_clue"
    },
    "般": {
		"readings": [],
        "type": "no_clue"
    },
    "既": {
		"readings": [],
        "type": "no_clue"
    },
    "華": {
		"readings": [],
        "type": "no_clue"
    },
    "蚊": {
		"readings": ["ブン"],
        "phonetic": "文",
        "type": "comp_phonetic"
    },
    "被": {
		"readings": ["ヒ"],
        "phonetic": "皮",
        "type": "comp_phonetic"
    },
    "託": {
		"readings": ["タク"],
        "phonetic": "乇",
        "type": "comp_phonetic"
    },
    "軒": {
		"readings": ["ケン"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "辱": {
		"readings": ["ジョク", "ニク"],
        "type": "no_clue"
    },
    "唇": {
		"readings": ["シン"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "逝": {
		"readings": [],
        "type": "no_clue"
    },
    "逐": {
		"readings": ["チク", "ジク"],
        "type": "no_clue"
    },
    "逓": {
		"readings": [],
        "type": "no_clue"
    },
    "途": {
		"readings": ["ト", "ズ"],
        "phonetic": "余",
        "type": "comp_phonetic"
    },
    "透": {
		"readings": [],
        "type": "no_clue"
    },
    "酌": {
		"readings": ["シャク"],
        "phonetic": "勺",
        "type": "comp_phonetic"
    },
    "陥": {
		"readings": [],
        "type": "no_clue"
    },
    "陣": {
		"readings": [],
        "type": "no_clue"
    },
    "隻": {
		"readings": [],
        "type": "no_clue"
    },
    "飢": {
		"readings": ["キ"],
        "phonetic": "几",
        "type": "comp_phonetic"
    },
    "鬼": {
		"readings": [],
        "type": "no_clue"
    },
    "剤": {
		"readings": [],
        "type": "no_clue"
    },
    "竜": {
		"readings": [],
        "type": "no_clue"
    },
    "粛": {
		"readings": [],
        "type": "no_clue"
    },
    "尉": {
		"readings": [],
        "type": "no_clue"
    },
    "彫": {
		"readings": ["ちょう"],
        "phonetic": "周",
        "type": "comp_phonetic"
    },
    "偽": {
		"readings": [],
        "type": "no_clue"
    },
    "偶": {
		"readings": ["グウ"],
        "phonetic": "禺",
        "type": "comp_phonetic"
    },
    "偵": {
		"readings": [],
        "type": "no_clue"
    },
    "偏": {
		"readings": ["ヘン"],
        "phonetic": "扁",
        "type": "comp_phonetic"
    },
    "剰": {
		"readings": [],
        "type": "no_clue"
    },
    "勘": {
		"readings": [],
        "type": "no_clue"
    },
    "乾": {
		"readings": [],
        "type": "no_clue"
    },
    "喝": {
		"readings": [],
        "type": "no_clue"
    },
    "啓": {
		"readings": [],
        "type": "no_clue"
    },
    "唯": {
		"readings": [],
        "type": "no_clue"
    },
    "執": {
		"readings": ["シツ", "シュウ"],
        "type": "comp_indicative"
    },
    "培": {
		"readings": [],
        "type": "no_clue"
    },
    "堀": {
		"readings": ["クツ", "コツ"],
        "phonetic": "屈",
        "type": "comp_phonetic"
    },
    "婚": {
		"readings": [],
        "type": "no_clue"
    },
    "婆": {
		"readings": [],
        "type": "no_clue"
    },
    "寂": {
		"readings": [],
        "type": "no_clue"
    },
    "崎": {
		"readings": ["キ"],
        "phonetic": "奇",
        "type": "comp_phonetic"
    },
    "崇": {
		"readings": [],
        "type": "no_clue"
    },
    "崩": {
		"readings": [],
        "type": "no_clue"
    },
    "庶": {
		"readings": ["ショ"],
        "type": "comp_indicative"
    },
    "庸": {
		"readings": [],
        "type": "no_clue"
    },
    "彩": {
		"readings": ["サイ"],
        "phonetic": "采",
        "type": "comp_phonetic"
    },
    "患": {
		"readings": [],
        "type": "no_clue"
    },
    "惨": {
		"readings": ["サン", "ザン"],
        "phonetic": "参",
        "type": "comp_phonetic"
    },
    "惜": {
		"readings": [],
        "type": "no_clue"
    },
    "悼": {
		"readings": ["とう"],
        "phonetic": "卓",
        "type": "comp_phonetic"
    },
    "悠": {
		"readings": [],
        "type": "no_clue"
    },
    "掛": {
		"readings": ["カイ", "けい"],
        "phonetic": "圭",
        "type": "comp_phonetic"
    },
    "掘": {
		"readings": ["クツ"],
        "phonetic": "屈",
        "type": "comp_phonetic"
    },
    "掲": {
		"readings": [],
        "type": "no_clue"
    },
    "控": {
		"readings": [],
        "type": "no_clue"
    },
    "据": {
		"readings": [],
        "type": "no_clue"
    },
    "措": {
		"readings": ["ソ"],
        "phonetic": "昔",
        "type": "comp_phonetic"
    },
    "掃": {
		"readings": [],
        "type": "no_clue"
    },
    "排": {
		"readings": ["ハイ"],
        "phonetic": "非",
        "type": "comp_phonetic"
    },
    "描": {
		"readings": [],
        "type": "no_clue"
    },
    "斜": {
		"readings": ["シャ"],
        "phonetic": "余",
        "type": "comp_phonetic"
    },
    "旋": {
		"readings": ["セン"],
        "type": "comp_indicative"
    },
    "曹": {
		"readings": ["そう", "ぞう"],
        "type": "comp_indicative"
    },
    "殻": {
		"readings": [],
        "type": "no_clue"
    },
    "貫": {
		"readings": [],
        "type": "no_clue"
    },
    "涯": {
		"readings": ["ガイ"],
        "phonetic": "厓",
        "type": "comp_phonetic"
    },
    "渇": {
		"readings": [],
        "type": "no_clue"
    },
    "渓": {
		"readings": ["けい"],
        "type": "no_clue",
        "comment": "obscure phonetic 奚"
    },
    "渋": {
		"readings": ["ジュウ", "シュウ"],
        "type": "no_clue",
        "comment": "maybe phonetic 歮歰"
    },
    "淑": {
		"readings": [],
        "type": "no_clue"
    },
    "渉": {
		"readings": ["しょう"],
        "type": "comp_indicative"
    },
    "淡": {
		"readings": ["タン"],
        "phonetic": "炎",
        "type": "comp_phonetic"
    },
    "添": {
		"readings": [],
        "type": "no_clue"
    },
    "涼": {
		"readings": [],
        "type": "no_clue"
    },
    "猫": {
		"readings": [],
        "type": "no_clue"
    },
    "猛": {
		"readings": [],
        "type": "no_clue"
    },
    "猟": {
		"readings": [],
        "type": "no_clue"
    },
    "瓶": {
		"readings": [],
        "type": "no_clue"
    },
    "累": {
		"readings": [],
        "type": "no_clue"
    },
    "盗": {
		"readings": [],
        "type": "no_clue"
    },
    "眺": {
		"readings": ["ちょう"],
        "phonetic": "兆",
        "type": "comp_phonetic"
    },
    "窒": {
		"readings": [],
        "type": "no_clue"
    },
    "符": {
		"readings": ["フ"],
        "phonetic": "付",
        "type": "comp_phonetic"
    },
    "粗": {
		"readings": ["そ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "粘": {
		"readings": ["ネン", "デン"],
        "phonetic": "占",
        "type": "comp_phonetic"
    },
    "粒": {
		"readings": ["リュウ"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "紺": {
		"readings": [],
        "type": "no_clue"
    },
    "紹": {
		"readings": ["しょう"],
        "phonetic": "召",
        "type": "comp_phonetic"
    },
    "紳": {
		"readings": ["シン"],
        "phonetic": "申",
        "type": "comp_phonetic"
    },
    "脚": {
		"readings": [],
        "type": "no_clue"
    },
    "脱": {
		"readings": ["ダツ", "タツ"],
        "phonetic": "兌",
        "type": "comp_phonetic"
    },
    "豚": {
		"readings": [],
        "type": "no_clue"
    },
    "舶": {
		"readings": ["ハク"],
        "phonetic": "白",
        "type": "comp_phonetic"
    },
    "菓": {
		"readings": ["カ"],
        "phonetic": "果",
        "type": "comp_phonetic"
    },
    "菊": {
		"readings": [],
        "type": "no_clue"
    },
    "菌": {
		"readings": [],
        "type": "no_clue"
    },
    "虚": {
		"readings": [],
        "type": "no_clue"
    },
    "蛍": {
		"readings": ["けい"],
        "phonetic": "熒",
        "type": "comp_phonetic"
    },
    "蛇": {
		"readings": [],
        "type": "no_clue"
    },
    "袋": {
		"readings": ["タイ", "テイ"],
        "phonetic":  "代",
        "type": "comp_phonetic"
    },
    "訟": {
		"readings": ["しょう", "ジュ"],
        "phonetic": "公",
        "type": "comp_phonetic"
    },
    "販": {
		"readings": ["ハン"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "赦": {
		"readings": ["シャ"],
        "phonetic": "赤",
        "type": "comp_phonetic"
    },
    "軟": {
		"readings": [],
        "type": "no_clue"
    },
    "逸": {
		"readings": [],
        "type": "no_clue"
    },
    "逮": {
		"readings": [],
        "type": "no_clue"
    },
    "郭": {
		"readings": [],
        "type": "no_clue"
    },
    "酔": {
		"readings": [],
        "type": "no_clue"
    },
    "釈": {
		"readings": [],
        "type": "no_clue"
    },
    "釣": {
		"readings": ["ちょう"],
        "phonetic": "勺",
        "type": "comp_phonetic"
    },
    "陰": {
		"readings": [],
        "type": "no_clue"
    },
    "陳": {
		"readings": ["チン", "ジン"],
        "phonetic": "申",
        "type": "comp_phonetic"
    },
    "陶": {
		"readings": [],
        "type": "no_clue"
    },
    "陪": {
		"readings": [],
        "type": "no_clue"
    },
    "隆": {
		"readings": [],
        "type": "no_clue"
    },
    "陵": {
		"readings": [],
        "type": "no_clue"
    },
    "麻": {
		"readings": [],
        "type": "no_clue"
    },
    "斎": {
		"readings": [],
        "type": "no_clue"
    },
    "喪": {
		"readings": [],
        "type": "no_clue"
    },
    "奥": {
		"readings": [],
        "type": "no_clue"
    },
    "蛮": {
		"readings": [],
        "type": "no_clue"
    },
    "偉": {
		"readings": ["イ"],
        "phonetic": "韋",
        "type": "comp_phonetic"
    },
    "傘": {
		"readings": [],
        "type": "no_clue"
    },
    "傍": {
		"readings": [],
        "type": "no_clue"
    },
    "普": {
		"readings": [],
        "type": "no_clue"
    },
    "喚": {
		"readings": [],
        "type": "no_clue"
    },
    "喫": {
		"readings": [],
        "type": "no_clue"
    },
    "圏": {
		"readings": [],
        "type": "no_clue"
    },
    "堪": {
		"readings": [],
        "type": "no_clue"
    },
    "堅": {
		"readings": [],
        "type": "no_clue"
    },
    "堕": {
		"readings": [],
        "type": "no_clue"
    },
    "塚": {
		"readings": [],
        "type": "no_clue"
    },
    "堤": {
		"readings": ["テイ"],
        "phonetic": "是",
        "type": "comp_phonetic"
    },
    "塔": {
		"readings": [],
        "type": "no_clue"
    },
    "塀": {
		"readings": [],
        "type": "kokuji"
    },
    "媒": {
		"readings": [],
        "type": "no_clue"
    },
    "婿": {
		"readings": ["セイ"],
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
        "type": "no_clue"
    },
    "幅": {
		"readings": ["フク"],
        "phonetic": "畐",
        "type": "comp_phonetic"
    },
    "帽": {
		"readings": [],
        "type": "no_clue"
    },
    "幾": {
		"readings": ["キ"],
        "type": "comp_indicative"
    },
    "廃": {
		"readings": [],
        "type": "no_clue"
    },
    "廊": {
		"readings": [],
        "type": "no_clue"
    },
    "弾": {
		"readings": [],
        "type": "no_clue"
    },
    "尋": {
		"readings": [],
        "type": "no_clue"
    },
    "御": {
		"readings": [],
        "type": "no_clue"
    },
    "循": {
		"readings": [],
        "type": "no_clue"
    },
    "慌": {
		"readings": [],
        "type": "no_clue"
    },
    "惰": {
		"readings": [],
        "type": "no_clue"
    },
    "愉": {
		"readings": ["ユ"],
        "phonetic": "兪",
        "type": "comp_phonetic"
    },
    "惑": {
		"readings": ["ワク"],
        "phonetic": "或",
        "type": "comp_phonetic"
    },
    "雇": {
		"readings": ["コ"],
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
		"readings": ["エン"],
        "phonetic": "爰",
        "type": "comp_phonetic"
    },
    "換": {
		"readings": [],
        "type": "no_clue"
    },
    "搭": {
		"readings": [],
        "type": "no_clue"
    },
    "揚": {
		"readings": [],
        "type": "no_clue"
    },
    "揺": {
		"readings": ["よう"],
        "phonetic": "䍃",
        "type": "comp_phonetic"
    },
    "敢": {
		"readings": [],
        "type": "no_clue"
    },
    "暁": {
		"readings": [],
        "type": "no_clue"
    },
    "晶": {
		"readings": [],
        "type": "no_clue"
    },
    "替": {
		"readings": [],
        "type": "no_clue"
    },
    "棺": {
		"readings": ["カン"],
        "phonetic": "官",
        "type": "comp_phonetic"
    },
    "棋": {
		"readings": ["キ"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "棚": {
		"readings": [],
        "type": "no_clue"
    },
    "棟": {
		"readings": ["とう"],
        "phonetic": "東",
        "type": "comp_phonetic"
    },
    "款": {
		"readings": [],
        "type": "no_clue"
    },
    "欺": {
		"readings": ["ギ", "キ"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "殖": {
		"readings": ["ショク"],
        "phonetic": "直",
        "type": "comp_phonetic"
    },
    "渦": {
		"readings": [],
        "type": "no_clue"
    },
    "滋": {
		"readings": [],
        "type": "no_clue"
    },
    "湿": {
		"readings": [],
        "type": "no_clue"
    },
    "渡": {
		"readings": ["ト"],
        "phonetic": "度",
        "type": "comp_phonetic"
    },
    "湾": {
		"readings": [],
        "type": "no_clue"
    },
    "煮": {
		"readings": ["シャ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "猶": {
		"readings": [],
        "type": "no_clue"
    },
    "琴": {
		"readings": [],
        "type": "no_clue"
    },
    "畳": {
		"readings": [],
        "type": "no_clue"
    },
    "塁": {
		"readings": [],
        "type": "no_clue"
    },
    "疎": {
		"readings": ["ソ", "ショ"],
        "phonetic": "疋",
        "type": "comp_phonetic"
    },
    "痘": {
		"readings": ["とう"],
        "phonetic": "豆",
        "type": "comp_phonetic"
    },
    "痢": {
		"readings": [],
        "type": "no_clue"
    },
    "硬": {
		"readings": [],
        "type": "no_clue"
    },
    "硝": {
		"readings": ["しょう"],
        "phonetic": "肖",
        "type": "comp_phonetic"
    },
    "硫": {
		"readings": ["リュウ", "ル"],
        "phonetic": "㐬",
        "type": "comp_phonetic"
    },
    "筒": {
		"readings": ["とう"],
        "phonetic": "同",
        "type": "comp_phonetic"
    },
    "粧": {
		"readings": [],
        "type": "no_clue"
    },
    "絞": {
		"readings": ["コウ"],
        "phonetic": "交",
        "type": "comp_phonetic"
    },
    "紫": {
		"readings": [],
        "type": "no_clue"
    },
    "絡": {
		"readings": ["らく"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "脹": {
		"readings": [],
        "type": "no_clue"
    },
    "腕": {
		"readings": [],
        "type": "no_clue"
    },
    "葬": {
		"readings": [],
        "type": "no_clue"
    },
    "募": {
		"readings": ["ボ", "モ"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "裕": {
		"readings": ["ユウ"],
        "phonetic": "谷",
        "type": "comp_phonetic"
    },
    "裂": {
		"readings": ["レツ"],
        "phonetic": "列",
        "type": "comp_phonetic"
    },
    "詠": {
		"readings": ["エイ"],
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
		"readings": ["シン"],
        "type": "no_clue"
    },
    "訴": {
		"readings": [],
        "type": "no_clue"
    },
    "越": {
		"readings": [],
        "type": "no_clue"
    },
    "超": {
		"readings": ["ちょう"],
        "phonetic": "召",
        "type": "comp_phonetic"
    },
    "距": {
		"readings": ["キョ"],
        "phonetic": "巨",
        "type": "comp_phonetic"
    },
    "軸": {
		"readings": ["ジク", "チク"],
        "phonetic": "由",
        "type": "comp_phonetic"
    },
    "遇": {
		"readings": ["グウ", "グ"],
        "phonetic": "禺",
        "type": "comp_phonetic"
    },
    "遂": {
		"readings": [],
        "type": "no_clue"
    },
    "遅": {
		"readings": [],
        "type": "no_clue"
    },
    "遍": {
		"readings": ["ヘン"],
        "phonetic": "扁",
        "type": "comp_phonetic"
    },
    "酢": {
		"readings": ["さく", "ソ"],
        "phonetic": "乍",
        "type": "comp_phonetic"
    },
    "鈍": {
		"readings": ["ドン"],
        "phonetic": "屯",
        "type": "comp_phonetic"
    },
    "閑": {
		"readings": [],
        "type": "no_clue"
    },
    "隅": {
		"readings": ["グウ"],
        "phonetic": "禺",
        "type": "comp_phonetic"
    },
    "随": {
		"readings": [],
        "type": "no_clue"
    },
    "焦": {
		"readings": [],
        "type": "no_clue"
    },
    "雄": {
		"readings": ["ユウ"],
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
        "type": "no_clue"
    },
    "棄": {
		"readings": [],
        "type": "no_clue"
    },
    "傾": {
		"readings": [],
        "type": "no_clue"
    },
    "傑": {
		"readings": [],
        "type": "no_clue"
    },
    "債": {
		"readings": ["サイ"],
        "phonetic": "責",
        "type": "comp_phonetic"
    },
    "催": {
		"readings": [],
        "type": "no_clue"
    },
    "僧": {
		"readings": ["そう"],
        "phonetic": "曽",
        "type": "comp_phonetic"
    },
    "慈": {
		"readings": [],
        "type": "no_clue"
    },
    "勧": {
		"readings": [],
        "type": "no_clue"
    },
    "載": {
		"readings": ["サイ"],
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
        "type": "no_clue"
    },
    "塊": {
		"readings": [],
        "type": "no_clue"
    },
    "塑": {
		"readings": [],
        "type": "no_clue"
    },
    "塗": {
		"readings": [],
        "type": "no_clue"
    },
    "奨": {
		"readings": [],
        "type": "no_clue"
    },
    "嫁": {
		"readings": ["カ"],
        "phonetic": "家",
        "type": "comp_phonetic"
    },
    "嫌": {
		"readings": ["ケン", "ゲン"],
        "phonetic": "兼",
        "type": "comp_phonetic"
    },
    "寛": {
		"readings": [],
        "type": "no_clue"
    },
    "寝": {
		"readings": [],
        "type": "no_clue"
    },
    "廉": {
		"readings": ["レン"],
        "phonetic": "兼",
        "type": "comp_phonetic"
    },
    "微": {
		"readings": [],
        "type": "no_clue"
    },
    "慨": {
		"readings": [],
        "type": "no_clue"
    },
    "愚": {
		"readings": ["グ"],
        "phonetic": "禺",
        "type": "comp_phonetic"
    },
    "愁": {
		"readings": ["シュウ"],
        "phonetic": "秋",
        "type": "comp_phonetic"
    },
    "慎": {
		"readings": [],
        "type": "no_clue"
    },
    "携": {
		"readings": [],
        "type": "no_clue"
    },
    "搾": {
		"readings": [],
        "type": "kokuji"
    },
    "摂": {
		"readings": [],
        "type": "no_clue"
    },
    "搬": {
		"readings": [],
        "type": "no_clue"
    },
    "暇": {
		"readings": [],
        "type": "no_clue"
    },
    "楼": {
		"readings": [],
        "type": "no_clue"
    },
    "歳": {
		"readings": [],
        "type": "no_clue"
    },
    "滑": {
		"readings": [],
        "type": "no_clue"
    },
    "溝": {
		"readings": ["コウ"],
        "phonetic": "冓",
        "type": "comp_phonetic"
    },
    "滞": {
		"readings": [],
        "type": "no_clue"
    },
    "滝": {
		"readings": [],
        "type": "no_clue"
    },
    "漠": {
		"readings": ["バク", "マク"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "滅": {
		"readings": [],
        "type": "no_clue"
    },
    "溶": {
		"readings": [],
        "type": "no_clue"
    },
    "煙": {
		"readings": [],
        "type": "no_clue"
    },
    "煩": {
		"readings": [],
        "type": "no_clue"
    },
    "雅": {
		"readings": ["ガ"],
        "phonetic": "牙",
        "type": "comp_phonetic"
    },
    "猿": {
		"readings": [],
        "type": "no_clue"
    },
    "献": {
		"readings": [],
        "type": "no_clue"
    },
    "痴": {
		"readings": ["チ"],
        "phonetic": "知",
        "type": "comp_phonetic"
    },
    "睡": {
		"readings": [],
        "type": "no_clue"
    },
    "督": {
		"readings": [],
        "type": "no_clue"
    },
    "碁": {
		"readings": [],
        "type": "no_clue"
    },
    "禍": {
		"readings": [],
        "type": "no_clue"
    },
    "禅": {
		"readings": [],
        "type": "no_clue"
    },
    "稚": {
		"readings": [],
        "type": "no_clue"
    },
    "継": {
		"readings": [],
        "type": "no_clue"
    },
    "腰": {
		"readings": [],
        "type": "no_clue"
    },
    "艇": {
		"readings": ["テイ"],
        "phonetic": "廷",
        "type": "comp_phonetic"
    },
    "蓄": {
		"readings": [],
        "type": "no_clue"
    },
    "虞": {
		"readings": ["グ"],
        "phonetic": "呉",
        "type": "comp_phonetic",
        "comment": "related to 虞 reading?"
    },
    "虜": {
		"readings": ["リョ", "ロ"],
        "type": "no_clue"
    },
    "褐": {
		"readings": [],
        "type": "no_clue"
    },
    "裸": {
		"readings": ["ラ"],
        "phonetic": "果",
        "type": "comp_phonetic"
    },
    "触": {
		"readings": ["ショク", "ソク"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "該": {
		"readings": ["ガイ", "カイ"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "詰": {
		"readings": ["キツ"],
        "phonetic": "吉",
        "type": "comp_phonetic"
    },
    "誇": {
		"readings": [],
        "type": "no_clue"
    },
    "詳": {
		"readings": ["しょう"],
        "phonetic": "羊",
        "type": "comp_phonetic"
    },
    "誉": {
		"readings": [],
        "type": "no_clue"
    },
    "賊": {
		"readings": ["ソク"],
        "phonetic": "則",
        "type": "comp_phonetic"
    },
    "賄": {
		"readings": ["ワイ", "カイ"],
        "phonetic": "有",
        "type": "comp_phonetic"
    },
    "跡": {
		"readings": ["せき", "シャク"],
        "phonetic": "責",
        "type": "comp_phonetic"
    },
    "践": {
		"readings": [],
        "type": "no_clue"
    },
    "跳": {
		"readings": ["ちょう"],
        "phonetic": "兆",
        "type": "comp_phonetic"
    },
    "較": {
		"readings": ["カク", "コウ"],
        "phonetic": "交",
        "type": "comp_phonetic"
    },
    "違": {
		"readings": ["イ"],
        "phonetic": "韋",
        "type": "comp_phonetic"
    },
    "遣": {
		"readings": [],
        "type": "no_clue"
    },
    "酬": {
		"readings": ["シュウ"],
        "phonetic": "州",
        "type": "comp_phonetic"
    },
    "酪": {
		"readings": ["らく"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "鉛": {
		"readings": ["エン"],
        "phonetic": "㕣",
        "type": "comp_phonetic"
    },
    "鉢": {
		"readings": [],
        "type": "no_clue"
    },
    "鈴": {
		"readings": [],
        "type": "no_clue"
    },
    "隔": {
		"readings": [],
        "type": "no_clue"
    },
    "雷": {
		"readings": [],
        "type": "no_clue"
    },
    "零": {
		"readings": [],
        "type": "no_clue"
    },
    "靴": {
		"readings": ["カ"],
        "phonetic": "化",
        "type": "comp_phonetic"
    },
    "頑": {
		"readings": ["ガン"],
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
        "type": "no_clue"
    },
    "飽": {
		"readings": ["ホウ"],
        "phonetic": "包",
        "type": "comp_phonetic"
    },
    "鼓": {
		"readings": [],
        "type": "no_clue"
    },
    "豪": {
		"readings": [],
        "type": "no_clue"
    },
    "僕": {
		"readings": ["ボク"],
        "phonetic": "菐",
        "type": "comp_phonetic"
    },
    "僚": {
		"readings": ["りょう"],
        "phonetic": "尞",
        "type": "comp_phonetic"
    },
    "暦": {
		"readings": ["レキ", "リャク"],
        "type": "no_clue",
        "comment": "TODO: tone mark 厤?"
    },
    "塾": {
		"readings": [],
        "type": "no_clue"
    },
    "奪": {
		"readings": [],
        "type": "no_clue"
    },
    "嫡": {
		"readings": ["チャク", "テキ"],
        "type": "no_clue"
    },
    "寡": {
		"readings": [],
        "type": "no_clue"
    },
    "寧": {
		"readings": [],
        "type": "no_clue"
    },
    "腐": {
		"readings": ["フ"],
        "phonetic": "付",
        "type": "comp_phonetic"
    },
    "彰": {
		"readings": ["しょう"],
        "phonetic": "章",
        "type": "comp_phonetic"
    },
    "徴": {
		"readings": [],
        "type": "no_clue"
    },
    "憎": {
		"readings": ["ぞう", "そう"],
        "phonetic": "曽",
        "type": "comp_phonetic"
    },
    "慢": {
		"readings": [],
        "type": "no_clue"
    },
    "摘": {
		"readings": [],
        "type": "no_clue"
    },
    "概": {
		"readings": [],
        "type": "no_clue"
    },
    "雌": {
		"readings": [],
        "type": "no_clue"
    },
    "漆": {
		"readings": [],
        "type": "no_clue"
    },
    "漸": {
		"readings": [],
        "type": "no_clue"
    },
    "漬": {
		"readings": ["し"],
        "phonetic": "責",
        "type": "comp_phonetic"
    },
    "滴": {
		"readings": [],
        "type": "no_clue"
    },
    "漂": {
		"readings": ["ヒョウ"],
        "phonetic": "票",
        "type": "comp_phonetic"
    },
    "漫": {
		"readings": [],
        "type": "no_clue"
    },
    "漏": {
		"readings": [],
        "type": "no_clue"
    },
    "獄": {
		"readings": [],
        "type": "no_clue"
    },
    "碑": {
		"readings": [],
        "type": "no_clue"
    },
    "稲": {
		"readings": [],
        "type": "no_clue"
    },
    "端": {
		"readings": [],
        "type": "no_clue"
    },
    "箇": {
		"readings": [],
        "type": "no_clue"
    },
    "維": {
		"readings": [],
        "type": "no_clue"
    },
    "綱": {
		"readings": ["コウ"],
        "phonetic": "岡",
        "type": "comp_phonetic"
    },
    "緒": {
		"readings": [],
        "type": "no_clue"
    },
    "網": {
		"readings": ["モウ", "ボウ"],
        "phonetic": "罔",
        "type": "comp_phonetic"
    },
    "罰": {
		"readings": [],
        "type": "no_clue"
    },
    "膜": {
		"readings": ["マク", "バク"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "慕": {
		"readings": ["ボ"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "誓": {
		"readings": [],
        "type": "no_clue"
    },
    "誘": {
		"readings": [],
        "type": "no_clue"
    },
    "踊": {
		"readings": [],
        "type": "no_clue"
    },
    "遮": {
		"readings": ["シャ"],
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
        "type": "no_clue"
    },
    "酷": {
		"readings": [],
        "type": "no_clue"
    },
    "銃": {
		"readings": [],
        "type": "no_clue"
    },
    "銑": {
		"readings": ["セン"],
        "phonetic": "先",
        "type": "comp_phonetic"
    },
    "銘": {
		"readings": ["メイ", "ミョウ"],
        "phonetic": "名",
        "type": "comp_phonetic"
    },
    "閥": {
		"readings": [],
        "type": "no_clue"
    },
    "隠": {
		"readings": [],
        "type": "no_clue"
    },
    "需": {
		"readings": [],
        "type": "no_clue"
    },
    "駆": {
		"readings": ["ク"],
        "phonetic": "区",
        "type": "comp_phonetic"
    },
    "駄": {
		"readings": [],
        "type": "no_clue"
    },
    "髪": {
		"readings": [],
        "type": "no_clue"
    },
    "魂": {
		"readings": ["こん"],
        "phonetic": "云",
        "type": "comp_phonetic"
    },
    "錬": {
		"readings": [],
        "type": "no_clue"
    },
    "緯": {
		"readings": [],
        "type": "no_clue"
    },
    "韻": {
		"readings": [],
        "type": "no_clue"
    },
    "影": {
		"readings": [],
        "type": "no_clue"
    },
    "鋭": {
		"readings": ["エイ"],
        "phonetic": "兌",
        "type": "comp_phonetic"
    },
    "謁": {
		"readings": [],
        "type": "no_clue"
    },
    "閲": {
		"readings": [],
        "type": "no_clue"
    },
    "縁": {
		"readings": [],
        "type": "no_clue"
    },
    "憶": {
		"readings": [],
        "type": "no_clue"
    },
    "穏": {
		"readings": [],
        "type": "no_clue"
    },
    "稼": {
		"readings": ["カ"],
        "phonetic": "家",
        "type": "comp_phonetic"
    },
    "餓": {
		"readings": ["ガ"],
        "phonetic": "我",
        "type": "comp_phonetic"
    },
    "壊": {
		"readings": [],
        "type": "no_clue"
    },
    "懐": {
		"readings": [],
        "type": "no_clue"
    },
    "嚇": {
		"readings": [],
        "type": "no_clue"
    },
    "獲": {
		"readings": [],
        "type": "no_clue"
    },
    "穫": {
		"readings": [],
        "type": "no_clue"
    },
    "潟": {
		"readings": [],
        "type": "no_clue"
    },
    "轄": {
		"readings": [],
        "type": "no_clue"
    },
    "憾": {
		"readings": ["カン"],
        "phonetic": "感",
        "type": "comp_phonetic"
    },
    "歓": {
		"readings": ["カン"],
        "phonetic": "雚",
        "type": "comp_phonetic"
    },
    "環": {
		"readings": ["カン"],
        "phonetic": "瞏",
        "type": "comp_phonetic"
    },
    "監": {
		"readings": [],
        "type": "no_clue"
    },
    "緩": {
		"readings": ["カン"],
        "phonetic": "爰",
        "type": "comp_phonetic"
    },
    "艦": {
		"readings": [],
        "type": "no_clue"
    },
    "還": {
		"readings": ["カン", "ゲン"],
        "phonetic": "瞏",
        "type": "comp_phonetic"
    },
    "鑑": {
		"readings": [],
        "type": "no_clue"
    },
    "輝": {
		"readings": [],
        "type": "no_clue"
    },
    "騎": {
		"readings": ["キ"],
        "phonetic": "奇",
        "type": "comp_phonetic"
    },
    "儀": {
		"readings": ["ギ"],
        "phonetic": "義",
        "type": "comp_phonetic"
    },
    "戯": {
		"readings": ["ギ", "ゲ"],
        "type": "no_clue"
    },
    "擬": {
		"readings": ["ギ"],
        "phonetic": "疑",
        "type": "comp_phonetic"
    },
    "犠": {
		"readings": ["ギ", "キ"],
        "phonetic": "義",
        "type": "comp_phonetic"
    },
    "窮": {
		"readings": [],
        "type": "no_clue"
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
		"readings": ["ギョウ"],
        "phonetic": "疑",
        "type": "comp_phonetic"
    },
    "緊": {
		"readings": [],
        "type": "no_clue"
    },
    "襟": {
		"readings": [],
        "type": "no_clue"
    },
    "謹": {
		"readings": ["きん"],
        "phonetic": "堇",
        "type": "comp_phonetic"
    },
    "繰": {
		"readings": [],
        "type": "no_clue"
    },
    "勲": {
		"readings": [],
        "type": "no_clue"
    },
    "薫": {
		"readings": [],
        "type": "no_clue"
    },
    "慶": {
		"readings": [],
        "type": "no_clue"
    },
    "憩": {
		"readings": [],
        "type": "no_clue"
    },
    "鶏": {
		"readings": [],
        "type": "no_clue"
    },
    "鯨": {
		"readings": ["ゲイ", "けい"],
        "phonetic": "京",
        "type": "comp_phonetic"
    },
    "撃": {
		"readings": [],
        "type": "no_clue"
    },
    "懸": {
		"readings": ["ケン", "ケ"],
        "type": "no_clue",
        "comment": "TODO: phonetic 縣"
    },
    "謙": {
		"readings": ["ケン"],
        "phonetic": "兼",
        "type": "comp_phonetic"
    },
    "賢": {
		"readings": [],
        "type": "no_clue"
    },
    "顕": {
		"readings": ["ケン"],
        "type": "no_clue",
        "comment": "obscure phonetic 㬎?"
    },
    "顧": {
		"readings": ["コ"],
        "phonetic": "雇",
        "type": "comp_phonetic"
    },
    "稿": {
		"readings": ["コウ"],
        "phonetic": "高",
        "type": "comp_phonetic"
    },
    "衡": {
		"readings": ["コウ"],
        "phonetic": "行",
        "type": "comp_phonetic"
    },
    "購": {
		"readings": ["コウ"],
        "phonetic": "冓",
        "type": "comp_phonetic"
    },
    "墾": {
		"readings": [],
        "type": "no_clue"
    },
    "懇": {
		"readings": [],
        "type": "no_clue"
    },
    "鎖": {
		"readings": [],
        "type": "no_clue"
    },
    "錯": {
		"readings": ["さく", "ソ"],
        "phonetic": "昔",
        "type": "comp_phonetic"
    },
    "撮": {
		"readings": [],
        "type": "no_clue"
    },
    "擦": {
		"readings": [],
        "type": "no_clue"
    },
    "暫": {
		"readings": [],
        "type": "no_clue"
    },
    "諮": {
		"readings": [],
        "type": "no_clue"
    },
    "賜": {
		"readings": [],
        "type": "no_clue"
    },
    "璽": {
		"readings": [],
        "type": "no_clue"
    },
    "爵": {
		"readings": [],
        "type": "no_clue"
    },
    "趣": {
		"readings": ["シュ", "ソク"],
        "phonetic": "取",
        "type": "comp_phonetic"
    },
    "儒": {
		"readings": [],
        "type": "no_clue"
    },
    "襲": {
		"readings": [],
        "type": "no_clue"
    },
    "醜": {
		"readings": [],
        "type": "no_clue"
    },
    "獣": {
		"readings": [],
        "type": "no_clue"
    },
    "瞬": {
		"readings": [],
        "type": "no_clue"
    },
    "潤": {
		"readings": [],
        "type": "no_clue"
    },
    "遵": {
		"readings": [],
        "type": "no_clue"
    },
    "償": {
		"readings": [],
        "type": "no_clue"
    },
    "礁": {
		"readings": [],
        "type": "no_clue"
    },
    "衝": {
		"readings": ["しょう"],
        "phonetic": "重",
        "type": "comp_phonetic"
    },
    "鐘": {
		"readings": ["しょう", "シュ"],
        "phonetic": "童",
        "type": "comp_phonetic"
    },
    "壌": {
		"readings": [],
        "type": "no_clue"
    },
    "嬢": {
		"readings": [],
        "type": "no_clue"
    },
    "譲": {
		"readings": [],
        "type": "no_clue"
    },
    "醸": {
		"readings": [],
        "type": "no_clue"
    },
    "錠": {
		"readings": [],
        "type": "no_clue"
    },
    "嘱": {
		"readings": [],
        "type": "no_clue"
    },
    "審": {
		"readings": ["シン"],
        "type": "no_clue",
        "comment": "variant of 审"
    },
    "薪": {
		"readings": ["シン"],
        "phonetic": "新",
        "type": "comp_phonetic"
    },
    "震": {
		"readings": ["シン"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "錘": {
		"readings": [],
        "type": "no_clue"
    },
    "髄": {
		"readings": [],
        "type": "no_clue"
    },
    "澄": {
		"readings": [],
        "type": "no_clue"
    },
    "瀬": {
		"readings": [],
        "type": "no_clue"
    },
    "請": {
		"readings": ["セイ", "シン", "しょう"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "籍": {
		"readings": [],
        "type": "no_clue"
    },
    "潜": {
		"readings": [],
        "type": "no_clue"
    },
    "繊": {
		"readings": [],
        "type": "no_clue"
    },
    "薦": {
		"readings": [],
        "type": "no_clue"
    },
    "遷": {
		"readings": [],
        "type": "no_clue"
    },
    "鮮": {
		"readings": [],
        "type": "no_clue"
    },
    "繕": {
		"readings": [],
        "type": "no_clue"
    },
    "礎": {
		"readings": ["ソ"],
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
        "type": "no_clue"
    },
    "藻": {
		"readings": [],
        "type": "no_clue"
    },
    "霜": {
		"readings": ["そう"],
        "phonetic": "相",
        "type": "comp_phonetic"
    },
    "騒": {
		"readings": [],
        "type": "no_clue"
    },
    "贈": {
		"readings": ["ぞう", "そう"],
        "phonetic": "曽",
        "type": "comp_phonetic"
    },
    "濯": {
		"readings": [],
        "type": "no_clue"
    },
    "濁": {
		"readings": ["ダク", "ジョク"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "諾": {
		"readings": [],
        "type": "no_clue"
    },
    "鍛": {
		"readings": [],
        "type": "no_clue"
    },
    "壇": {
		"readings": [],
        "type": "no_clue"
    },
    "鋳": {
		"readings": [],
        "type": "no_clue"
    },
    "駐": {
		"readings": ["チュウ", "チュ"],
        "phonetic": "主",
        "type": "comp_phonetic"
    },
    "懲": {
		"readings": [],
        "type": "no_clue"
    },
    "聴": {
		"readings": [],
        "type": "no_clue"
    },
    "鎮": {
		"readings": [],
        "type": "no_clue"
    },
    "墜": {
		"readings": [],
        "type": "no_clue"
    },
    "締": {
		"readings": [],
        "type": "no_clue"
    },
    "徹": {
		"readings": [],
        "type": "no_clue"
    },
    "撤": {
		"readings": [],
        "type": "no_clue"
    },
    "謄": {
		"readings": [],
        "type": "no_clue"
    },
    "踏": {
		"readings": [],
        "type": "no_clue"
    },
    "騰": {
		"readings": [],
        "type": "no_clue"
    },
    "闘": {
		"readings": [],
        "type": "no_clue"
    },
    "篤": {
		"readings": [],
        "type": "no_clue"
    },
    "曇": {
		"readings": [],
        "type": "no_clue"
    },
    "縄": {
		"readings": [],
        "type": "no_clue"
    },
    "濃": {
		"readings": ["ノウ", "じょう"],
        "phonetic": "農",
        "type": "comp_phonetic"
    },
    "覇": {
		"readings": [],
        "type": "no_clue"
    },
    "輩": {
		"readings": ["ハイ"],
        "phonetic": "非",
        "type": "comp_phonetic"
    },
    "賠": {
		"readings": [],
        "type": "no_clue"
    },
    "薄": {
		"readings": ["ハク"],
        "phonetic": "溥",
        "type": "comp_phonetic"
    },
    "爆": {
		"readings": [],
        "type": "no_clue"
    },
    "縛": {
		"readings": ["バク", "ハク"],
        "phonetic": "尃",
        "type": "comp_phonetic"
    },
    "繁": {
		"readings": [],
        "type": "no_clue"
    },
    "藩": {
		"readings": [],
        "type": "no_clue"
    },
    "範": {
		"readings": ["ハン"],
        "phonetic": "氾",
        "type": "comp_phonetic"
    },
    "盤": {
		"readings": [],
        "type": "no_clue"
    },
    "罷": {
		"readings": [],
        "type": "no_clue"
    },
    "避": {
		"readings": [],
        "type": "no_clue"
    },
    "賓": {
		"readings": [],
        "type": "no_clue"
    },
    "頻": {
		"readings": ["ヒン", "ビン"],
        "type": "comp_indicative"
    },
    "敷": {
		"readings": ["フ"],
        "phonetic": "尃",
        "type": "comp_phonetic"
    },
    "膚": {
		"readings": [],
        "type": "no_clue"
    },
    "譜": {
		"readings": [],
        "type": "no_clue"
    },
    "賦": {
		"readings": [],
        "type": "no_clue"
    },
    "舞": {
		"readings": [],
        "type": "no_clue"
    },
    "覆": {
		"readings": ["フク", "フ", "フウ"],
        "phonetic": "复",
        "type": "comp_phonetic"
    },
    "噴": {
		"readings": ["フン", "ホン"],
        "phonetic": "賁",
        "type": "comp_phonetic"
    },
    "墳": {
		"readings": ["フン"],
        "phonetic": "賁",
        "type": "comp_phonetic"
    },
    "憤": {
		"readings": ["フン"],
        "phonetic": "賁",
        "type": "comp_phonetic"
    },
    "幣": {
		"readings": [],
        "type": "no_clue"
    },
    "弊": {
		"readings": [],
        "type": "no_clue"
    },
    "壁": {
		"readings": [],
        "type": "no_clue"
    },
    "癖": {
		"readings": [],
        "type": "no_clue"
    },
    "舗": {
		"readings": ["ホ", "フ"],
        "phonetic": "甫",
        "type": "comp_phonetic"
    },
    "穂": {
		"readings": [],
        "type": "no_clue"
    },
    "簿": {
		"readings": ["ボ", "ホ"],
        "phonetic": "溥",
        "type": "comp_phonetic"
    },
    "縫": {
		"readings": [],
        "type": "no_clue"
    },
    "褒": {
		"readings": [],
        "type": "no_clue"
    },
    "膨": {
		"readings": [],
        "type": "no_clue"
    },
    "謀": {
		"readings": [],
        "type": "no_clue"
    },
    "墨": {
		"readings": ["ボク", "モク"],
        "phonetic": "黒",
        "type": "comp_phonetic"
    },
    "撲": {
		"readings": ["ボク", "ホク"],
        "phonetic": "菐",
        "type": "comp_phonetic"
    },
    "翻": {
		"readings": ["ホン", "ハン"],
        "phonetic": "番",
        "type": "comp_phonetic"
    },
    "摩": {
		"readings": [],
        "type": "no_clue"
    },
    "磨": {
		"readings": [],
        "type": "no_clue"
    },
    "魔": {
		"readings": [],
        "type": "no_clue"
    },
    "繭": {
		"readings": [],
        "type": "no_clue"
    },
    "魅": {
		"readings": ["ミ", "ビ"],
        "phonetic": "未",
        "type": "comp_phonetic"
    },
    "霧": {
		"readings": ["ム", "ブ"],
        "phonetic": "務",
        "type": "comp_phonetic"
    },
    "黙": {
		"readings": ["モク", "ボク"],
        "phonetic": "黒",
        "type": "comp_phonetic"
    },
    "躍": {
		"readings": [],
        "type": "no_clue"
    },
    "癒": {
		"readings": ["ユ"],
        "phonetic": "兪",
        "type": "comp_phonetic"
    },
    "諭": {
		"readings": ["ユ"],
        "phonetic": "兪",
        "type": "comp_phonetic"
    },
    "憂": {
		"readings": [],
        "type": "no_clue"
    },
    "融": {
		"readings": [],
        "type": "no_clue"
    },
    "慰": {
		"readings": [],
        "type": "no_clue"
    },
    "窯": {
		"readings": [],
        "type": "no_clue"
    },
    "謡": {
		"readings": ["よう"],
        "phonetic": "䍃",
        "type": "comp_phonetic"
    },
    "翼": {
		"readings": [],
        "type": "no_clue"
    },
    "羅": {
		"readings": [],
        "type": "no_clue"
    },
    "頼": {
		"readings": [],
        "type": "no_clue"
    },
    "欄": {
		"readings": [],
        "type": "no_clue"
    },
    "濫": {
		"readings": [],
        "type": "no_clue"
    },
    "履": {
		"readings": ["リ"],
        "type": "comp_indicative"
    },
    "離": {
		"readings": [],
        "type": "no_clue"
    },
    "慮": {
		"readings": [],
        "type": "no_clue"
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
        "type": "no_clue"
    },
    "隷": {
		"readings": [],
        "type": "no_clue"
    },
    "霊": {
		"readings": [],
        "type": "no_clue"
    },
    "麗": {
		"readings": [],
        "type": "no_clue"
    },
    "齢": {
		"readings": [],
        "type": "no_clue"
    },
    "擁": {
		"readings": [],
        "type": "no_clue"
    },
    "露": {
		"readings": [],
        "type": "no_clue"
    },


    "藤": {
		"readings": ["とう"],
        "phonetic": "滕",
        "type": "comp_phonetic"
    },
    "誰": {
		"readings": [],
        "type": "no_clue"
    },
    "俺": {
		"readings": [],
        "type": "no_clue"
    },
    "岡": {
		"readings": ["コウ"],
        "type": "comp_indicative"
    },
    "頃": {
		"readings": [],
        "type": "no_clue"
    },
    "奈": {
		"readings": [],
        "type": "no_clue"
    },
    "阪": {
		"readings": ["ハン"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "韓": {
		"readings": [],
        "type": "no_clue"
    },
    "弥": {
		"readings": ["ビ", "ミ"],
        "type": "no_clue",
        "comment": "obscure phonetic 爾"
    },
    "那": {
		"readings": [],
        "type": "no_clue"
    },
    "鹿": {
		"readings": ["ロク"],
        "type": "hieroglyph"
    },
    "斬": {
		"readings": [],
        "type": "no_clue"
    },
    "虎": {
		"readings": ["コ"],
        "type": "no_clue"
    },
    "狙": {
		"readings": ["ソ", "ショ"],
        "phonetic": "且",
        "type": "comp_phonetic"
    },
    "脇": {
		"readings": [],
        "type": "no_clue"
    },
    "熊": {
		"readings": [],
        "type": "no_clue"
    },
    "尻": {
		"readings": ["コウ"],
        "phonetic": "九",
        "type": "comp_phonetic"
    },
    "旦": {
		"readings": [],
        "type": "no_clue"
    },
    "闇": {
		"readings": ["アン"],
        "phonetic": "音",
        "type": "comp_phonetic"
    },
    "籠": {
		"readings": [],
        "type": "no_clue"
    },
    "呂": {
		"readings": [],
        "type": "no_clue"
    },
    "亀": {
		"readings": [],
        "type": "no_clue"
    },
    "頬": {
		"readings": [],
        "type": "no_clue"
    },
    "膝": {
		"readings": [],
        "type": "no_clue"
    },
    "鶴": {
		"readings": ["カク"],
        "phonetic": "隺",
        "type": "comp_phonetic"
    },
    "匂": {
		"readings": [""],
        "type": "kokuji"
    },
    "沙": {
		"readings": ["さ", "シャ"],
        "type": "no_clue"
    },
    "須": {
		"readings": [],
        "type": "no_clue"
    },
    "椅": {
		"readings": ["い"],
        "phonetic": "奇",
        "type": "comp_phonetic"
    },
    "股": {
		"readings": [],
        "type": "no_clue"
    },
    "眉": {
		"readings": [],
        "type": "no_clue"
    },
    "挨": {
		"readings": [],
        "type": "no_clue"
    },
    "拶": {
		"readings": [],
        "type": "no_clue"
    },
    "鎌": {
		"readings": ["レン"],
        "phonetic": "兼",
        "type": "comp_phonetic"
    },
    "凄": {
		"readings": [],
        "type": "no_clue"
    },
    "謎": {
		"readings": ["メイ", "ベイ"],
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
        "type": "no_clue"
    },
    "喉": {
		"readings": [],
        "type": "no_clue"
    },
    "拭": {
		"readings": [],
        "type": "no_clue"
    },
    "貌": {
		"readings": [],
        "type": "no_clue"
    },
    "塞": {
		"readings": [],
        "type": "no_clue"
    },
    "蹴": {
		"readings": [],
        "type": "no_clue"
    },
    "鍵": {
		"readings": [],
        "type": "no_clue"
    },
    "膳": {
		"readings": [],
        "type": "no_clue"
    },
    "袖": {
		"readings": [],
        "type": "no_clue"
    },
    "潰": {
		"readings": [],
        "type": "no_clue"
    },
    "駒": {
		"readings": [],
        "type": "no_clue"
    },
    "剥": {
		"readings": [],
        "type": "no_clue"
    },
    "鍋": {
		"readings": [],
        "type": "no_clue"
    },
    "湧": {
		"readings": [],
        "type": "no_clue"
    },
    "葛": {
		"readings": [],
        "type": "no_clue"
    },
    "梨": {
		"readings": [],
        "type": "no_clue"
    },
    "貼": {
		"readings": ["ちょう", "テン"],
        "phonetic": "占",
        "type": "comp_phonetic"
    },
    "拉": {
		"readings": ["ラ", "ラツ", "ろう"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "枕": {
		"readings": [],
        "type": "no_clue"
    },
    "顎": {
		"readings": [],
        "type": "no_clue"
    },
    "苛": {
		"readings": ["カ"],
        "phonetic": "可",
        "type": "comp_phonetic"
    },
    "蓋": {
		"readings": [],
        "type": "no_clue"
    },
    "裾": {
		"readings": [],
        "type": "no_clue"
    },
    "腫": {
		"readings": ["シュ", "しょう"],
        "phonetic": "重",
        "type": "comp_phonetic"
    },
    "爪": {
		"readings": ["そう"],
        "type": "hieroglyph"
    },
    "嵐": {
		"readings": [],
        "type": "no_clue"
    },
    "鬱": {
		"readings": [],
        "type": "no_clue"
    },
    "妖": {
		"readings": ["よう"],
        "phonetic": "夭",
        "type": "comp_phonetic"
    },
    "藍": {
		"readings": [],
        "type": "no_clue"
    },
    "捉": {
		"readings": [],
        "type": "no_clue"
    },
    "宛": {
		"readings": [],
        "type": "no_clue"
    },
    "崖": {
		"readings": ["ガイ"],
        "phonetic": "厓",
        "type": "comp_phonetic"
    },
    "叱": {
		"readings": ["しつ", "しち"],
        "phonetic": "七",
        "type": "comp_phonetic"
    },
    "瓦": {
		"readings": ["ガ"],
        "type": "hieroglyph"
    },
    "拳": {
		"readings": [],
        "type": "no_clue"
    },
    "乞": {
		"readings": [],
        "type": "no_clue"
    },
    "呪": {
		"readings": ["ジュ", "シュウ"],
        "phonetic": "兄",
        "type": "comp_phonetic"
    },
    "汰": {
		"readings": [],
        "type": "no_clue"
    },
    "勃": {
		"readings": [],
        "type": "no_clue"
    },
    "昧": {
		"readings": ["マイ", "バイ"],
        "phonetic": "未",
        "type": "comp_phonetic"
    },
    "唾": {
		"readings": [],
        "type": "no_clue"
    },
    "艶": {
		"readings": [],
        "type": "no_clue"
    },
    "痕": {
		"readings": ["こん"],
        "phonetic": "艮",
        "type": "comp_phonetic"
    },
    "諦": {
		"readings": [],
        "type": "no_clue"
    },
    "餅": {
		"readings": [],
        "type": "no_clue"
    },
    "瞳": {
		"readings": [],
        "type": "no_clue"
    },
    "唄": {
		"readings": [],
        "type": "no_clue"
    },
    "隙": {
		"readings": [],
        "type": "no_clue"
    },
    "淫": {
		"readings": [],
        "type": "no_clue"
    },
    "錦": {
		"readings": [],
        "type": "no_clue"
    },
    "箸": {
		"readings": ["チョ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "戚": {
		"readings": [],
        "type": "no_clue"
    },
    "蒙": {
		"readings": [],
        "type": "no_clue"
    },
    "妬": {
		"readings": ["ト"],
        "phonetic": "石",
        "type": "comp_phonetic"
    },
    "蔑": {
		"readings": [],
        "type": "no_clue"
    },
    "嗅": {
		"readings": [],
        "type": "no_clue"
    },
    "蜜": {
		"readings": [],
        "type": "no_clue"
    },
    "戴": {
		"readings": ["タイ"],
        "phonetic": "𢦏",
        "type": "comp_phonetic"
    },
    "痩": {
		"readings": [],
        "type": "no_clue"
    },
    "怨": {
		"readings": [],
        "type": "no_clue"
    },
    "醒": {
		"readings": [],
        "type": "no_clue"
    },
    "詣": {
		"readings": ["けい"],
        "phonetic": "旨",
        "type": "comp_phonetic"
    },
    "窟": {
		"readings": ["クツ"],
        "phonetic": "屈",
        "type": "comp_phonetic"
    },
    "巾": {
		"readings": ["きん"],
        "type": "hieroglyph"
    },
    "蜂": {
		"readings": [],
        "type": "no_clue"
    },
    "骸": {
		"readings": ["ガイ", "カイ"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "弄": {
		"readings": [],
        "type": "no_clue"
    },
    "嫉": {
		"readings": [],
        "type": "no_clue"
    },
    "罵": {
		"readings": ["バ"],
        "phonetic": "馬",
        "type": "comp_phonetic"
    },
    "璧": {
		"readings": [],
        "type": "no_clue"
    },
    "阜": {
		"readings": [],
        "type": "no_clue"
    },
    "埼": {
		"readings": ["キ"],
        "phonetic": "奇",
        "type": "comp_phonetic"
    },
    "伎": {
		"readings": [],
        "type": "no_clue"
    },
    "曖": {
		"readings": [],
        "type": "no_clue"
    },
    "餌": {
		"readings": ["じ"],
        "phonetic": "耳",
        "type": "comp_phonetic"
    },
    "爽": {
		"readings": [],
        "type": "no_clue"
    },
    "詮": {
		"readings": ["セン"],
        "phonetic": "全",
        "type": "comp_phonetic"
    },
    "芯": {
		"readings": ["シン"],
        "phonetic": "心",
        "type": "comp_phonetic"
    },
    "綻": {
		"readings": [],
        "type": "no_clue"
    },
    "肘": {
		"readings": ["チュウ"],
        "type": "comp_indicative"
    },
    "麓": {
		"readings": ["ロク"],
        "phonetic": "鹿",
        "type": "comp_phonetic"
    },
    "憧": {
		"readings": ["しょう", "どう"],
        "phonetic": "童",
        "type": "comp_phonetic"
    },
    "頓": {
		"readings": ["トン", "トツ"],
        "phonetic": "屯",
        "type": "comp_phonetic"
    },
    "牙": {
		"readings": ["ガ", "ゲ"],
        "type": "hieroglyph"
    },
    "咽": {
		"readings": [],
        "type": "no_clue"
    },
    "嘲": {
		"readings": ["ちょう", "とう"],
        "phonetic": "朝",
        "type": "comp_phonetic"
    },
    "臆": {
		"readings": [],
        "type": "no_clue"
    },
    "挫": {
		"readings": [],
        "type": "no_clue"
    },
    "溺": {
		"readings": ["デキ", "ニョウ", "じょう"],
        "phonetic": "弱",
        "type": "comp_phonetic"
    },
    "侶": {
		"readings": [],
        "type": "no_clue"
    },
    "丼": {
		"readings": ["タン", "トン"],
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
        "type": "no_clue"
    },
    "柵": {
		"readings": ["さく"],
        "phonetic": "冊",
        "type": "comp_phonetic"
    },
    "腎": {
		"readings": [],
        "type": "no_clue"
    },
    "梗": {
		"readings": [],
        "type": "no_clue"
    },
    "瑠": {
		"readings": [],
        "type": "no_clue"
    },
    "羨": {
		"readings": [],
        "type": "no_clue"
    },
    "酎": {
		"readings": [],
        "type": "no_clue"
    },
    "畿": {
		"readings": ["キ"],
        "phonetic": "幾",
        "type": "comp_phonetic"
    },
    "畏": {
		"readings": ["イ"],
        "type": "no_clue"
    },
    "瞭": {
		"readings": ["りょう"],
        "phonetic": "尞",
        "type": "comp_phonetic"
    },
    "踪": {
		"readings": [],
        "type": "no_clue"
    },
    "栃": {
		"readings": [],
        "type": "no_clue"
    },
    "蔽": {
		"readings": [],
        "type": "no_clue"
    },
    "茨": {
		"readings": ["し"],
        "phonetic": "次",
        "type": "comp_phonetic"
    },
    "慄": {
		"readings": ["リツ"],
        "phonetic": "栗",
        "type": "comp_phonetic"
    },
    "傲": {
		"readings": [],
        "type": "no_clue"
    },
    "虹": {
		"readings": ["コウ"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "捻": {
		"readings": [],
        "type": "no_clue"
    },
    "臼": {
		"readings": [],
        "type": "no_clue"
    },
    "喩": {
		"readings": ["ユ"],
        "phonetic": "兪",
        "type": "comp_phonetic"
    },
    "萎": {
		"readings": ["イ"],
        "phonetic": "委",
        "type": "comp_phonetic"
    },
    "腺": {
		"readings": ["セン"],
        "phonetic": "泉",
        "type": "kokuji"
    },
    "桁": {
		"readings": ["コウ"],
        "phonetic": "行",
        "type": "comp_phonetic"
    },
    "玩": {
		"readings": ["ガン"],
        "phonetic": "元",
        "type": "comp_phonetic"
    },
    "冶": {
		"readings": ["や"],
        "type": "no_clue",
        "comment": "maybe 台"
    },
    "羞": {
		"readings": ["シュウ"],
        "type": "comp_indicative"
    },
    "惧": {
		"readings": ["グ", "ク"],
        "phonetic": "具",
        "type": "comp_phonetic"
    },
    "舷": {
		"readings": ["ゲン"],
        "phonetic": "玄",
        "type": "comp_phonetic"
    },
    "貪": {
		"readings": ["ドン", "タン"],
        "type": "no_clue",
        "comment": "phonetic 今?"
    },
    "采": {
		"readings": ["サイ"],
        "type": "comp_indicative"
    },
    "堆": {
		"readings": [],
        "type": "no_clue"
    },
    "煎": {
		"readings": [],
        "type": "no_clue"
    },
    "斑": {
		"readings": [],
        "type": "no_clue"
    },
    "冥": {
		"readings": [],
        "type": "no_clue"
    },
    "遜": {
		"readings": [],
        "type": "no_clue"
    },
    "旺": {
		"readings": ["オウ"],
        "phonetic": "王",
        "type": "comp_phonetic"
    },
    "麺": {
		"readings": [],
        "type": "no_clue"
    },
    "璃": {
		"readings": [],
        "type": "no_clue"
    },
    "串": {
		"readings": [],
        "type": "no_clue"
    },
    "填": {
		"readings": [],
        "type": "no_clue"
    },
    "箋": {
		"readings": [],
        "type": "no_clue"
    },
    "脊": {
		"readings": [],
        "type": "no_clue"
    },
    "緻": {
		"readings": [],
        "type": "no_clue"
    },
    "辣": {
		"readings": [],
        "type": "no_clue"
    },
    "摯": {
		"readings": [],
        "type": "no_clue"
    },
    "汎": {
		"readings": [],
        "type": "no_clue"
    },
    "憚": {
		"readings": [],
        "type": "no_clue"
    },
    "哨": {
		"readings": ["しょう"],
        "phonetic": "肖",
        "type": "comp_phonetic"
    },
    "氾": {
		"readings": ["ハン"],
        "type": "hieroglyph"
    },
    "諧": {
		"readings": ["カイ"],
        "phonetic": "皆",
        "type": "comp_phonetic"
    },
    "媛": {
		"readings": ["エン"],
        "phonetic": "爰",
        "type": "comp_phonetic"
    },
    "彙": {
		"readings": [],
        "type": "no_clue"
    },
    "恣": {
		"readings": ["し"],
        "phonetic": "次",
        "type": "comp_phonetic"
    },
    "聘": {
		"readings": [],
        "type": "no_clue"
    },
    "沃": {
		"readings": ["ヨク", "オク"],
        "phonetic": "夭",
        "type": "comp_phonetic"
    },
    "憬": {
		"readings": [],
        "type": "no_clue"
    },
    "捗": {
		"readings": [],
        "type": "no_clue"
    },
    "訃": {
		"readings": ["フ"],
        "phonetic": "卜",
        "type": "comp_phonetic"
    },

    "遥": {
		"readings": ["よう"],
        "phonetic": "䍃",
        "type": "comp_phonetic"
    }
}`);


/* List of all phonetic components here ... */
var phonetic_db = JSON.parse(`
{
    "七": {
        "readings": ["しち", "しつ"],
        "compounds": ["叱","切"],
        "non_compounds": [],
        "xrefs": ["七"],
        "quality": -1.0
    },
    "十": {
        "readings": ["ジュウ", "ジッ", "シュウ"],
        "compounds": ["汁", "針"],
        "non_compounds": ["計"],
        "xrefs": ["十"],
        "quality": -1.0
    },
    "土": {
        "readings": ["ト", "ド"],
        "compounds": ["吐", "社"],
        "non_compounds": [],
        "xrefs": ["土"],
        "quality": -1.0
    },
    "大": {
        "readings": ["ダイ", "タイ"],
        "compounds": ["戻"],
        "non_compounds": [],
        "xrefs": ["大"],
        "quality": -1.0
    },
    "子": {
        "readings": ["し", "ス"],
        "compounds": ["字"],
        "non_compounds": [],
        "xrefs": ["子"],
        "quality": -1.0
    },
    "早": {
        "readings": ["そう"],
        "compounds": ["草"],
        "non_compounds": [],
        "xrefs": ["早"],
        "quality": -1.0
    },
    "寸": {
        "readings": ["ソン", "スン"],
        "compounds": ["村"],
        "non_compounds": ["討", "耐"],
        "xrefs": ["寸"],
        "quality": -1.0
    },
    "屯": {
        "readings": ["トン", "チュン", "ドン"],
        "compounds": ["討", "純", "春", "鈍", "頓"],
        "non_compounds": [],
        "xrefs": ["屯"],
        "quality": -1.0
    },
    "丁": {
        "readings": ["ちょう", "テイ", "とう"],
        "compounds": ["庁", "灯", "町", "亭", "頂", "訂", "打"],
        "non_compounds": [],
        "xrefs": ["丁"],
        "quality": -1.0
    },
    "化": {
        "readings": ["カ", "ケ", "ゲ"],
        "compounds": ["花", "貨", "靴"],
        "non_compounds": [],
        "xrefs": ["化"],
        "quality": -1.0
    },
    "見": {
        "readings": ["ケン", "ゲン"],
        "compounds": ["現"],
        "non_compounds": [],
        "xrefs": ["見"],
        "quality": -1.0
    },
    "貝": {
        "readings": ["バイ", "マイ"],
        "compounds": ["敗"],
        "non_compounds": ["買"],
        "xrefs": ["貝"],
        "quality": -1.0
    },
    "赤": {
        "readings": ["せき", "シャク"],
        "compounds": ["赦"],
        "non_compounds": [],
        "xrefs": ["赤"],
        "quality": -1.0
    },
    "足": {
        "readings": ["ソク", "ショク"],
        "compounds": ["促"],
        "non_compounds": [],
        "xrefs": ["足"],
        "quality": -1.0
    },
    "方": {
        "readings": ["ホウ", "ぼう"],
        "compounds": ["坊", "妨", "芳", "防", "放", "肪", "房", "紡", "訪"],
        "non_compounds": [],
        "xrefs": ["方"],
        "quality": -1.0,
        "comment": "added ぼう, no reason found"
    },
    "古": {
        "readings": ["コ"],
        "compounds": ["苦", "固", "故", "枯"],
        "non_compounds": [],
        "xrefs": ["古"],
        "quality": -1.0
    },
    "生": {
        "readings": ["セイ", "しょう"],
        "compounds": ["姓", "性", "牲", "星", "青"],
        "non_compounds": [],
        "xrefs": ["生"],
        "quality": -1.0
    },
    "青": {
        "readings": ["セイ", "しょう"],
        "compounds": ["情", "清", "精", "請", "晴"],
        "non_compounds": [],
        "xrefs": ["青", "生"],
        "quality": -1.0
    },
    "且": {
        "readings": ["ショ", "ソ", "しょう"],
        "compounds": ["助", "狙", "阻", "祖", "租", "組", "粗"],
        "non_compounds": [],
        "xrefs": ["且"],
        "quality": -1.0
    },
    "各": {
        "readings": ["かく"],
        "compounds": ["客", "格", "略", "絡", "路", "酪", "閣", "額"],
        "non_compounds": [],
        "xrefs": ["各"],
        "quality": -1.0
    },
    "主": {
        "readings": ["シュ", "ス"],
        "compounds": ["住", "注", "柱", "駐"],
        "non_compounds": [],
        "xrefs": ["主"],
        "quality": -1.0
    },
    "几": {
        "readings": ["キ"],
        "compounds": ["机", "肌", "飢"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "亡": {
        "readings": ["ボウ", "モウ"],
        "compounds": ["妄", "忘", "盲", "忙", "望"],
        "non_compounds": [],
        "xrefs": ["亡"],
        "quality": -1.0
    },
    "干": {
        "readings": ["カン"],
        "compounds": ["刊", "汗", "肝", "岸", "幹", "軒"],
        "non_compounds": [],
        "xrefs": ["干"],
        "quality": -1.0
    },
    "己": {
        "readings": ["こ", "き"],
        "compounds": ["妃", "忌", "紀", "記", "配", "改"],
        "non_compounds": [],
        "xrefs": ["己"],
        "quality": -1.0
    },
    "工": {
        "readings": ["コウ", "ク"],
        "compounds": ["功", "江", "紅", "虹", "空", "貢", "攻"],
        "non_compounds": [],
        "xrefs": ["工"],
        "quality": -1.0
    },
    "及": {
        "readings": ["キュウ"],
        "compounds": ["吸", "扱", "急", "級"],
        "non_compounds": [],
        "xrefs": ["及"],
        "quality": -1.0
    },
    "中": {
        "readings": ["チュウ"],
        "compounds": ["仲", "沖", "忠", "衷"],
        "non_compounds": [],
        "xrefs": ["中"],
        "quality": -1.0
    },
    "反": {
        "readings": ["ハン","ホン","タン"],
        "compounds": ["坂", "阪", "返", "板", "版", "販", "飯"],
        "non_compounds": [],
        "xrefs": ["反"],
        "quality": -1.0
    },
    "白": {
        "readings": ["ハク", "ビャク"],
        "compounds": ["伯", "泊", "拍", "迫", "舶"],
        "non_compounds": [],
        "xrefs": ["白"],
        "quality": -1.0
    },
    "皮": {
        "readings": ["ヒ"],
        "compounds": ["披", "彼", "波", "破", "疲", "被"],
        "non_compounds": [],
        "xrefs": ["皮"],
        "quality": -1.0
    },
    "包": {
        "readings": ["ホウ"],
        "compounds": ["砲", "飽", "抱", "泡", "胞"],
        "non_compounds": [],
        "xrefs": ["包"],
        "quality": -1.0
    },
    "可": {
        "readings": ["カ", "コク"],
        "compounds": ["何", "河", "苛"],
        "non_compounds": [],
        "xrefs": ["可"],
        "quality": -1.0
    },
    "司": {
        "readings": ["し", "す"],
        "compounds": ["伺", "詞", "飼", "嗣"],
        "non_compounds": [],
        "xrefs": ["司"],
        "quality": -1.0
    },
    "召": {
        "readings": ["しょう"],
        "compounds": ["招", "沼", "昭", "紹", "詔", "超"],
        "non_compounds": [],
        "xrefs": ["召"],
        "quality": -1.0
    },
    "寺": {
        "readings": ["ジ"],
        "compounds": ["侍", "待", "持", "時", "特", "詩"],
        "non_compounds": [],
        "xrefs": ["寺"],
        "quality": -1.0
    },
    "圭": {
        "readings": ["けい"],
        "compounds": ["街", "掛"],
        "non_compounds": [],
        "xrefs": ["圭", "厓"],
        "quality": -1.0
    },
    "交": {
        "readings": ["コウ"],
        "compounds": ["郊", "校", "絞", "較"],
        "non_compounds": ["効"],
        "xrefs": ["交"],
        "quality": -1.0
    },
    "我": {
        "readings": ["ガ"],
        "compounds": ["餓"],
        "non_compounds": [],
        "xrefs": ["我"],
        "quality": -1.0
    },
    "義": {
        "readings": ["ギ"],
        "compounds": ["儀", "犠", "議"],
        "non_compounds": [],
        "xrefs": ["義"],
        "quality": -1.0
    },
    "兪": {
        "readings": ["ユ"],
        "compounds": ["愉", "喩", "癒", "諭", "輸"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "由": {
        "readings": ["ユ", "ユウ", "ユイ"],
        "compounds": ["油", "宙", "笛", "軸"],
        "non_compounds": [],
        "xrefs": ["由"],
        "quality": -1.0
    },
    "莫": {
        "readings": ["バク", "マク", "ボ", "モ"],
        "compounds": ["募", "墓", "幕", "漠", "慕", "模", "膜", "暮"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "小": {
        "readings": ["しょう"],
        "compounds": ["肖"],
        "non_compounds": [],
        "xrefs": ["小"],
        "quality": -1.0
    },
    "肖": {
        "readings": ["しょう"],
        "compounds": ["削", "哨", "宵", "消", "硝"],
        "non_compounds": [],
        "xrefs": ["肖", "小"],
        "quality": -1.0
    },
    "山": {
        "readings": ["サン", "セン"],
        "compounds": ["仙"],
        "non_compounds": [],
        "xrefs": ["山"],
        "quality": -1.0
    },
    "文": {
        "readings": ["ブン", "モン"],
        "compounds": ["紋", "蚊"],
        "non_compounds": [],
        "xrefs": ["文"],
        "quality": -1.0
    },
    "王": {
        "readings": ["おう"],
        "compounds": [""],
        "non_compounds": ["旺"],
        "xrefs": ["王"],
        "quality": -1.0
    },
    "正": {
        "readings": ["セイ", "しょう"],
        "compounds": ["征", "定", "政", "症", "証", "整"],
        "non_compounds": [],
        "xrefs": ["正"],
        "quality": -1.0
    },
    "出": {
        "readings": ["シュツ", "スイ"],
        "compounds": ["拙"],
        "non_compounds": [],
        "xrefs": ["出"],
        "quality": -1.0
    },
    "左": {
        "readings": ["さ"],
        "compounds": ["佐", "差"],
        "non_compounds": [],
        "xrefs": ["左"],
        "quality": -1.0
    },
    "石": {
        "readings": ["せき", "シャク", "コク", "ジャク"],
        "compounds": ["拓", "妬"],
        "non_compounds": [],
        "xrefs": ["石"],
        "quality": -1.0
    },
    "立": {
        "readings": ["リツ", "リュウ"],
        "compounds": ["位", "拉", "泣", "粒", "翌"],
        "non_compounds": [],
        "xrefs": ["立"],
        "quality": -1.0
    },
    "先": {
        "readings": ["セン"],
        "compounds": ["洗", "銑"],
        "non_compounds": [],
        "xrefs": ["先"],
        "quality": -1.0
    },
    "名": {
        "readings": ["メイ", "ミョウ"],
        "compounds": ["銘"],
        "non_compounds": [],
        "xrefs": ["名"],
        "quality": -1.0
    },
    "音": {
        "readings": ["オン", "イン"],
        "compounds": ["暗", "闇"],
        "non_compounds": [],
        "xrefs": ["音"],
        "quality": -1.0
    },
    "才": {
        "readings": ["サイ"],
        "compounds": ["材", "財"],
        "non_compounds": [],
        "xrefs": ["才"],
        "quality": -1.0
    },
    "内": {
        "readings": ["ナイ", "ダイ", "ノウ", "どう"],
        "compounds": ["納"],
        "non_compounds": [],
        "xrefs": ["内"],
        "quality": -1.0
    },
    "午": {
        "readings": ["ゴ"],
        "compounds": ["許"],
        "non_compounds": [],
        "xrefs": ["午"],
        "quality": -1.0
    },
    "元": {
        "readings": ["ゲン", "ガン"],
        "compounds": ["玩", "頑"],
        "non_compounds": [],
        "xrefs": ["元"],
        "quality": -1.0
    },
    "今": {
        "readings": ["こん", "きん"],
        "compounds": ["含", "吟", "念"],
        "non_compounds": [],
        "xrefs": ["今"],
        "quality": -1.0
    },
    "公": {
        "readings": ["コウ", "ク"],
        "compounds": ["松", "翁", "訟"],
        "non_compounds": [],
        "xrefs": ["公"],
        "quality": -1.0
    },
    "戸": {
        "readings": ["コ"],
        "compounds": ["所", "雇"],
        "non_compounds": [],
        "xrefs": ["戸"],
        "quality": -1.0
    },
    "止": {
        "readings": ["し"],
        "compounds": ["企", "祉", "歯"],
        "non_compounds": [],
        "xrefs": ["止"],
        "quality": -1.0
    },
    "分": {
        "readings": ["フン", "ブン", "ブ"],
        "compounds": ["盆", "貧", "粉", "紛", "雰", "頒"],
        "non_compounds": [],
        "xrefs": ["分"],
        "quality": -1.0
    },
    "少": {
        "readings": ["しょう"],
        "compounds": ["秒"],
        "non_compounds": ["沙"],
        "xrefs": ["少"],
        "quality": -1.0
    },
    "半": {
        "readings": ["ハン"],
        "compounds": ["伴", "判", "畔"],
        "non_compounds": [],
        "xrefs": ["半"],
        "quality": -1.0
    },
    "北": {
        "readings": ["ホク"],
        "compounds": ["背"],
        "non_compounds": [],
        "xrefs": ["北"],
        "quality": -1.0
    },
    "兄": {
        "readings": ["けい", "きょう"],
        "compounds": ["呪", "況"],
        "non_compounds": ["祝"],
        "xrefs": ["兄"],
        "quality": -1.0
    },
    "広": {
        "readings": ["コウ"],
        "compounds": ["拡", "鉱"],
        "non_compounds": [],
        "xrefs": ["広"],
        "quality": -1.0
    },
    "失": {
        "readings": ["シツ", "イツ"],
        "compounds": ["迭", "秩"],
        "non_compounds": [],
        "xrefs": ["失"],
        "quality": -1.0
    },
    "矢": {
        "readings": ["し"],
        "compounds": ["疾"],
        "non_compounds": ["疑"],
        "xrefs": ["矢"],
        "quality": -1.0
    },
    "会": {
        "readings": ["カイ", "エ"],
        "compounds": ["絵"],
        "non_compounds": [],
        "xrefs": ["会"],
        "quality": -1.0
    },
    "合": {
        "readings": ["ゴウ", "ガッ", "カッ", "コウ"],
        "compounds": ["拾", "給", "答"],
        "non_compounds": [],
        "xrefs": ["合"],
        "quality": -1.0
    },
    "同": {
        "readings": ["どう"],
        "compounds": ["洞", "筒", "銅", "胴"],
        "non_compounds": [],
        "xrefs": ["同"],
        "quality": -1.0
    },
    "米": {
        "readings": ["ベイ", "マイ", "メ"],
        "compounds": ["迷"],
        "non_compounds": [],
        "xrefs": ["米"],
        "quality": -1.0
    },
    "迷": {
        "readings": ["メイ"],
        "compounds": ["謎"],
        "non_compounds": [],
        "xrefs": ["迷", "米"],
        "quality": -1.0
    },
    "考": {
        "readings": ["コウ"],
        "compounds": ["拷"],
        "non_compounds": [],
        "xrefs": ["考"],
        "quality": -1.0
    },
    "売": {
        "readings": ["バイ"],
        "compounds": ["続", "読"],
        "non_compounds": [],
        "xrefs": ["売"],
        "quality": -1.0
    },
    "谷": {
        "readings": ["コク"],
        "compounds": ["俗", "浴", "容", "欲", "裕"],
        "non_compounds": [],
        "xrefs": ["谷"],
        "quality": -1.0
    },
    "量": {
        "readings": ["りょう", "ろう"],
        "compounds": ["糧"],
        "non_compounds": [],
        "xrefs": ["量"],
        "quality": -1.0
    },
    "制": {
        "readings": ["セイ"],
        "compounds": ["製"],
        "non_compounds": [],
        "xrefs": ["制"],
        "quality": -1.0
    },
    "斤": {
        "readings": ["きん"],
        "compounds": ["近", "析", "祈"],
        "non_compounds": [],
        "xrefs": ["斤"],
        "quality": -1.0
    },
    "里": {
        "readings": ["リ"],
        "compounds": ["理", "裏"],
        "non_compounds": ["厘"],
        "xrefs": ["里"],
        "quality": -1.0
    },
    "東": {
        "readings": ["とう"],
        "compounds": ["凍", "棟"],
        "non_compounds": [],
        "xrefs": ["東"],
        "quality": -1.0
    },
    "京": {
        "readings": ["きょう", "けい", "きん"],
        "compounds": ["景", "鯨"],
        "non_compounds": [],
        "xrefs": ["京"],
        "quality": -1.0
    },
    "直": {
        "readings": ["チョク", "ジキ", "チ"],
        "compounds": ["値", "植", "殖", "置"],
        "non_compounds": [],
        "xrefs": ["直"],
        "quality": -1.0
    },
    "未": {
        "readings": ["ミ", "ビ"],
        "compounds": ["味", "妹", "昧", "魅"],
        "non_compounds": [],
        "xrefs": ["未"],
        "quality": -1.0
    },
    "占": {
        "readings": ["セン", "てん"],
        "compounds": ["店", "貼", "粘", "点"],
        "non_compounds": [],
        "xrefs": ["占"],
        "quality": -1.0,
        "comment": "added phonetic てん, but found no reason"
    },
    "明": {
        "readings": ["メイ", "ミョウ", "ミン"],
        "compounds": ["盟"],
        "non_compounds": [],
        "xrefs": ["明"],
        "quality": -1.0
    },
    "歩": {
        "readings": ["ホ", "ブ", "フ"],
        "compounds": [],
        "non_compounds": ["頻", "渉"],
        "xrefs": ["歩"],
        "quality": -1.0
    },
    "長": {
        "readings": ["ちょう"],
        "compounds": ["帳", "張"],
        "non_compounds": [],
        "xrefs": ["長"],
        "quality": -1.0
    },
    "門": {
        "readings": ["モン", "ボン"],
        "compounds": ["問", "聞"],
        "non_compounds": [],
        "xrefs": ["門"],
        "quality": -1.0
    },
    "是": {
        "readings": ["ゼ", "し", "テイ", "ダイ"],
        "compounds": ["堤", "提", "題"],
        "non_compounds": [],
        "xrefs": ["是"],
        "quality": -1.0,
        "comment": "added ダイ, テイ to readings, no source"
    },
    "象": {
        "readings": ["しょう", "ぞう"],
        "compounds": ["像"],
        "non_compounds": [],
        "xrefs": ["象"],
        "quality": -1.0
    },
    "袁": {
        "readings": ["えん", "おん"],
        "compounds": ["遠, 園"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO: missing compound info, search!"
    },
    "示": {
        "readings": ["ジ", "し"],
        "compounds": ["視"],
        "non_compounds": [],
        "xrefs": ["示"],
        "quality": -1.0
    },
    "秋": {
        "readings": ["シュウ"],
        "compounds": ["愁"],
        "non_compounds": [],
        "xrefs": ["秋"],
        "quality": -1.0
    },
    "弱": {
        "readings": ["ジャク", "ニャク"],
        "compounds": ["溺"],
        "non_compounds": [],
        "xrefs": ["弱"],
        "quality": -1.0
    },
    "朱": {
        "readings": ["シュ", "ス"],
        "compounds": ["株", "殊", "珠"],
        "non_compounds": [],
        "xrefs": ["朱"],
        "quality": -1.0
    },
    "甫": {
        "readings": ["ホ", "フ"],
        "compounds": ["浦", "捕", "補", "舗"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "辰": {
        "readings": ["シン"],
        "compounds": ["唇", "娠", "振", "震"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "良": {
        "readings": ["りょう", "ろう"],
        "compounds": ["浪", "郎", "朗"],
        "non_compounds": [],
        "xrefs": ["良"],
        "quality": -1.0
    },
    "非": {
        "readings": ["ヒ"],
        "compounds": ["俳", "排", "悲", "扉", "輩"],
        "non_compounds": ["罪"],
        "xrefs": ["非"],
        "quality": -1.0
    },
    "其": {
        "readings": ["キ"],
        "compounds": ["期", "欺", "棋", "基", "旗"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "巠": {
        "readings": ["けい"],
        "compounds": ["茎", "径", "経", "軽"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "馬": {
        "readings": ["バ", "メ", "マ"],
        "compounds": ["罵"],
        "non_compounds": [],
        "xrefs": ["馬"],
        "quality": -1.0
    },
    "高": {
        "readings": ["こう"],
        "compounds": ["稿"],
        "non_compounds": [],
        "xrefs": ["高"],
        "quality": -1.0
    },
    "囟": {
        "readings": ["シン", "し"],
        "compounds": ["細", "思"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "周": {
        "readings": ["シュウ", "ス"],
        "compounds": ["彫", "週", "調"],
        "non_compounds": [],
        "xrefs": ["周"],
        "quality": -1.0
    },
    "予": {
        "readings": ["よ"],
        "compounds": ["序", "野", "預"],
        "non_compounds": [],
        "xrefs": ["予"],
        "quality": -1.0
    },
    "昜": {
        "readings": ["よう"],
        "compounds": ["場", "陽", "瘍", "湯", "腸"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO: incomplete info, search!"
    },
    "道": {
        "readings": ["どう", "とう"],
        "compounds": ["導"],
        "non_compounds": [],
        "xrefs": ["道"],
        "quality": -1.0
    },
    "番": {
        "readings": ["バン", "ハン", "ハ"],
        "compounds": ["翻"],
        "non_compounds": ["審"],
        "xrefs": ["番"],
        "quality": -1.0
    },
    "吾": {
        "readings": ["ゴ"],
        "compounds": ["悟", "語"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "賓": {
        "readings": ["ヒン"],
        "compounds": ["浜"],
        "non_compounds": [],
        "xrefs": ["賓"],
        "quality": -1.0,
        "comment": "TODO info missing, search!"
    },
    "卜": {
        "readings": ["ボク", "ホク"],
        "compounds": ["朴", "訃", "赴"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "氾": {
        "readings": ["はん"],
        "compounds": ["範"],
        "non_compounds": [],
        "xrefs": ["氾"],
        "quality": -1.0
    },
    "奇": {
        "readings": ["キ"],
        "compounds": ["埼", "崎", "寄", "椅", "騎"],
        "non_compounds": [],
        "xrefs": ["奇"],
        "quality": -1.0
    },
    "皆": {
        "readings": ["カイ"],
        "compounds": ["階", "諧"],
        "non_compounds": [],
        "xrefs": ["皆"],
        "quality": -1.0
    },
    "不": {
        "readings": ["フ", "ブ"],
        "compounds": ["杯"],
        "non_compounds": [],
        "xrefs": ["不"],
        "quality": -1.0
    },
    "加": {
        "readings": ["カ"],
        "compounds": ["架", "賀"],
        "non_compounds": [],
        "xrefs": ["加"],
        "quality": -1.0
    },
    "弋": {
        "readings": ["ヨク", "イキ"],
        "compounds": ["代", "式"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "代": {
        "readings": [],
        "compounds": ["袋", "貸"],
        "non_compounds": [],
        "xrefs": ["代", "弋"],
        "quality": -1.0
    },
    "央": {
        "readings": ["オウ", "よう", "エイ"],
        "compounds": ["英", "映"],
        "non_compounds": [],
        "xrefs": ["央"],
        "quality": -1.0
    },
    "勺": {
        "readings": ["シャク"],
        "compounds": ["約", "酌", "釣"],
        "non_compounds": [],
        "xrefs": ["勺"],
        "quality": -1.0
    },
    "氐": {
        "readings": ["テイ", "タイ"],
        "compounds": ["低", "底", "抵", "邸"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "兌": {
        "readings": ["ダ", "タイ", "エツ", "エイ"],
        "compounds": ["悦", "脱", "税", "説", "鋭"],
        "non_compounds": [],
        "xrefs": ["兌"],
        "quality": -1.0
    },
    "曽": {
        "readings": ["そう", "ゾ",  "ソ", "ぞう"],
        "compounds": ["贈", "僧", "増", "層", "噌", "憎"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO: no list, search! TODO: 噌 not in joyo!"
    },
    "菐": {
        "readings": ["ホク", "ボク"],
        "compounds": ["撲", "僕"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "取": {
        "readings": ["シュ"],
        "compounds": ["趣"],
        "non_compounds": [],
        "xrefs": ["取"],
        "quality": -1.0
    },
    "卓": {
        "readings": ["タク"],
        "compounds": ["悼"],
        "non_compounds": [],
        "xrefs": ["卓"],
        "quality": -1.0
    },
    "昔": {
        "readings": ["せき", "シャク"],
        "compounds": ["借", "措", "錯"],
        "non_compounds": [],
        "xrefs": ["昔"],
        "quality": -1.0
    },
    "具": {
        "readings": ["グ", "ク"],
        "compounds": ["惧"],
        "non_compounds": [],
        "xrefs": ["具"],
        "quality": -1.0
    },
    "台": {
        "readings": ["ダイ", "タイ"],
        "compounds": [""],
        "non_compounds": ["冶", "治", "始"],
        "xrefs": ["台"],
        "quality": -1.0
    },
    "申": {
        "readings": ["シン"],
        "compounds": ["伸", "神", "紳", "陳"],
        "non_compounds": ["電"],
        "xrefs": ["申"],
        "quality": -1.0
    },
    "鹿": {
        "readings": ["ロク"],
        "compounds": ["麓"],
        "non_compounds": [],
        "xrefs": "鹿",
        "quality": -1.0
    },
    "心": {
        "readings": ["シン"],
        "compounds": ["芯"],
        "non_compounds": [],
        "xrefs": ["心"],
        "quality": -1.0
    },
    "全": {
        "readings": ["ゼン", "セン"],
        "compounds": ["詮", "栓"],
        "non_compounds": [],
        "xrefs": ["全"],
        "quality": -1.0
    },
    "耳": {
        "readings": ["じ"],
        "compounds": ["餌", "恥"],
        "non_compounds": [],
        "xrefs": ["耳"],
        "quality": -1.0
    },
    "𢦏": {
        "readings": ["サイ"],
        "compounds": ["災", "栽", "裁", "載", "戴"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "原": {
        "readings": ["ゲン", "ガン", "ごん"],
        "compounds": ["源", "願"],
        "non_compounds": [],
        "xrefs": ["原"],
        "quality": -1.0
    },
    "家": {
        "readings": ["カ", "ケ"],
        "compounds": ["嫁", "稼"],
        "non_compounds": [],
        "xrefs": ["家"],
        "quality": -1.0
    },
    "氏": {
        "readings": ["し"],
        "compounds": ["紙"],
        "non_compounds": [],
        "xrefs": ["氏"],
        "quality": -1.0
    },
    "者": {
        "readings": ["シャ", "しょ"],
        "compounds": ["都", "暑", "煮", "署", "箸", "諸", "書"],
        "non_compounds": [],
        "xrefs": ["者", "煮"],
        "quality": -1.0,
        "comment": "added しょ, but found no reason"
    },
    "甬": {
        "readings": ["ツウ", "よう", "ユウ"],
        "compounds": ["通", "痛"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "㕣": {
        "readings": ["エン"],
        "compounds": ["船", "沿", "鉛"],
        "non_compounds": [],
        "xrefs": ["㕣", "兌"],
        "quality": -1.0
    },
    "黄": {
        "readings": ["コウ", "オウ"],
        "compounds": ["広", "横"],
        "non_compounds": [],
        "xrefs": ["黄", "広"],
        "quality": -1.0
    },
    "黒": {
        "readings": ["コク"],
        "compounds": ["墨", "黙"],
        "non_compounds": [],
        "xrefs": ["黒"],
        "quality": -1.0
    },
    "朝": {
        "readings": ["ちょう"],
        "compounds": ["嘲", "潮"],
        "non_compounds": [],
        "xrefs": ["朝"],
        "quality": -1.0
    },
    "間": {
        "readings": ["カン", "ケン"],
        "compounds": ["簡"],
        "non_compounds": [],
        "xrefs": ["間"],
        "quality": -1.0
    },
    "云": {
        "readings": ["ウン"],
        "compounds": ["芸", "雲", "魂"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "果": {
        "readings": ["カ"],
        "compounds": ["菓", "裸", "課"],
        "non_compounds": [],
        "xrefs": ["果"],
        "quality": -1.0
    },
    "卒": {
        "readings": ["ソツ", "シュツ"],
        "compounds": ["砕", "粋"],
        "non_compounds": [],
        "xrefs": ["卒"],
        "quality": -1.0
    },
    "列": {
        "readings": ["レツ"],
        "compounds": ["例", "烈", "裂"],
        "non_compounds": [],
        "xrefs": ["列"],
        "quality": -1.0
    },
    "参": {
        "readings": ["サン", "シン"],
        "compounds": ["惨"],
        "non_compounds": [],
        "xrefs": ["参"],
        "quality": -1.0
    },
    "官": {
        "readings": ["カン"],
        "compounds": ["棺", "管", "館"],
        "non_compounds": [],
        "xrefs": ["官"],
        "quality": -1.0
    },
    "付": {
        "readings": ["フ"],
        "compounds": ["府", "附", "符", "腐"],
        "non_compounds": [],
        "xrefs": ["付"],
        "quality": -1.0
    },
    "牙": {
        "readings": ["ガ", "ゲ"],
        "compounds": ["芽", "邪", "雅"],
        "non_compounds": [],
        "xrefs": ["牙"],
        "quality": -1.0
    },
    "新": {
        "readings": ["シン"],
        "compounds": ["薪"],
        "non_compounds": [],
        "xrefs": ["新"],
        "quality": -1.0
    },
    "楽": {
        "readings": ["ガク", "ラク", "ゴウ", "ギョウ"],
        "compounds": ["薬"],
        "non_compounds": [],
        "xrefs": ["楽"],
        "quality": -1.0
    },
    "尞": {
        "readings": ["りょう"],
        "compounds": ["僚", "寮", "瞭"],
        "non_compounds": [],
        "xrefs": ["尞"],
        "quality": -1.0
    },
    "泉": {
        "readings": ["セン"],
        "compounds": ["腺", "線"],
        "non_compounds": [],
        "xrefs": ["泉"],
        "quality": -1.0
    },
    "辛": {
        "readings": ["シン"],
        "compounds": ["亲"],
        "non_compounds": [],
        "xrefs": ["辛"],
        "quality": -1.0
    },
    "亲": {
        "readings": ["シン"],
        "compounds": ["親"],
        "non_compounds": [],
        "xrefs": ["亲", "辛"],
        "quality": -1.0
    },
    "豆": {
        "readings": ["とう", "ズ"],
        "compounds": ["短", "痘", "登", "頭"],
        "non_compounds": [],
        "xrefs": ["豆"],
        "quality": -1.0
    },
    "彦": {
        "readings": ["ゲン"],
        "compounds": ["顔"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "夫": {
        "readings": ["フ", "フウ", "ブ"],
        "compounds": ["扶"],
        "non_compounds": [],
        "xrefs": ["夫"],
        "quality": -1.0
    },
    "史": {
        "readings": ["し"],
        "compounds": ["使"],
        "non_compounds": [],
        "xrefs": ["史"],
        "quality": -1.0
    },
    "幸": {
        "readings": ["コウ"],
        "compounds": [""],
        "non_compounds": [],
        "xrefs": ["幸"],
        "quality": -1.0
    },
    "畐": {
        "readings": ["フク", "ヒョク", "ヒキ"],
        "compounds": ["富", "福", "副", "幅"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO incomplete, search !"
    },
    "次": {
        "readings": ["ジ", "し"],
        "compounds": ["姿", "茨", "恣", "資"],
        "non_compounds": [],
        "xrefs": ["次"],
        "quality": -1.0
    },
    "寅": {
        "readings": ["イン"],
        "compounds": ["演"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "貫": {
        "readings": ["カン"],
        "compounds": ["慣"],
        "non_compounds": [],
        "xrefs": ["貫"],
        "quality": -1.0
    },
    "賁": {
        "readings": ["ヒ", "ホン", "フン"],
        "compounds": ["憤", "噴", "墳"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO no info, search!"
    },
    "冓": {
        "readings": ["コウ"],
        "compounds": ["溝", "構", "講", "購"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "雇": {
        "readings": ["コ"],
        "compounds": ["顧"],
        "non_compounds": [],
        "xrefs": ["雇", "戸"],
        "quality": -1.0
    },
    "必": {
        "readings": ["ヒツ"],
        "compounds": ["泌", "秘"],
        "non_compounds": [],
        "xrefs": ["必"],
        "quality": -1.0
    },
    "末": {
        "readings": ["マツ", "バツ"],
        "compounds": ["抹"],
        "non_compounds": [],
        "xrefs": ["末"],
        "quality": -1.0
    },
    "昆": {
        "readings": ["こん"],
        "compounds": ["混"],
        "non_compounds": [],
        "xrefs": ["昆"],
        "quality": -1.0
    },
    "艮": {
        "readings": ["こん", "ごん"],
        "compounds": ["限", "恨", "根", "眼", "痕", "銀"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "多": {
        "readings": ["た"],
        "compounds": ["移"],
        "non_compounds": [],
        "xrefs": ["多"],
        "quality": -1.0
    },
    "弗": {
        "readings": ["フツ", "ホツ"],
        "compounds": ["仏", "沸", "払"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "丩": {
        "readings": ["キュウ"],
        "compounds": ["叫、糾"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "冊": {
        "readings": ["サツ", "さく"],
        "compounds": ["柵"],
        "non_compounds": [],
        "xrefs": ["冊"],
        "quality": -1.0
    },
    "区": {
        "readings": ["ク", "オウ"],
        "compounds": ["欧", "殴", "駆", "枢"],
        "non_compounds": [],
        "xrefs": ["区"],
        "quality": -1.0
    },
    "平": {
        "readings": ["ヘイ", "ビョウ", "ヒョウ"],
        "compounds": ["坪", "評"],
        "non_compounds": [],
        "xrefs": ["平"],
        "quality": -1.0
    },
    "也": {
        "readings": ["ヤ"],
        "compounds": ["地", "池", "他", "施"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "向": {
        "readings": ["コウ", "きょう", "しょう"],
        "compounds": ["尚"],
        "non_compounds": [],
        "xrefs": ["向"],
        "quality": -1.0
    },
    "州": {
        "readings": ["シュウ"],
        "compounds": ["酬"],
        "non_compounds": [],
        "xrefs": ["州"],
        "quality": -1.0
    },
    "安": {
        "readings": ["アン"],
        "compounds": ["案"],
        "non_compounds": [],
        "xrefs": ["安"],
        "quality": -1.0
    },
    "羊": {
        "readings": ["よう", "しょう", "じょう"],
        "compounds": ["洋", "祥", "詳", "養"],
        "non_compounds": [],
        "xrefs": ["羊"],
        "quality": -1.0
    },
    "有": {
        "readings": ["ユウ", "ウ"],
        "compounds": ["賄"],
        "non_compounds": [],
        "xrefs": ["有"],
        "quality": -1.0
    },
    "君": {
        "readings": ["クン"],
        "compounds": ["郡", "群"],
        "non_compounds": [],
        "xrefs": ["君"],
        "quality": -1.0
    },
    "役": {
        "readings": ["ヤク", "エキ"],
        "compounds": ["疫"],
        "non_compounds": [],
        "xrefs": ["役"],
        "quality": -1.0
    },
    "九": {
        "readings": ["きゅう", "く"],
        "compounds": ["尻", "究", "軌"],
        "non_compounds": [],
        "xrefs": ["九"],
        "quality": -1.0
    },
    "永": {
        "readings": ["エイ", "よう"],
        "compounds": ["泳", "詠"],
        "non_compounds": [],
        "xrefs": ["永"],
        "quality": -1.0
    },
    "乍": {
        "readings": ["さ", "さく", "じゃ"],
        "compounds": ["詐", "作", "昨", "酢"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "巨": {
        "readings": ["キョ", "コ"],
        "compounds": ["拒", "距"],
        "non_compounds": [],
        "xrefs": ["巨"],
        "quality": -1.0
    },
    "吉": {
        "readings": ["キチ", "キツ"],
        "compounds": ["結", "詰"],
        "non_compounds": [],
        "xrefs": ["吉"],
        "quality": -1.0
    },
    "朿": {
        "readings": ["し"],
        "compounds": ["刺", "策", "責"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "兆": {
        "readings": ["ちょう"],
        "compounds": ["挑", "逃", "桃", "眺", "跳"],
        "non_compounds": [],
        "xrefs": ["兆"],
        "quality": -1.0
    },
    "僉": {
        "readings": ["ケン"],
        "compounds": ["倹", "険", "験", "検", "剣"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO: no list, search!"
    },
    "則": {
        "readings": ["ソク"],
        "compounds": ["側", "測", "賊"],
        "non_compounds": [],
        "xrefs": ["則"],
        "quality": -1.0
    },
    "章": {
        "readings": ["しょう"],
        "compounds": ["彰", "障"],
        "non_compounds": [],
        "xrefs": ["章"],
        "quality": -1.0
    },
    "呉": {
        "readings": ["ゴ"],
        "compounds": ["娯", "誤", "虞"],
        "non_compounds": [],
        "xrefs": ["呉"],
        "quality": -1.0
    },
    "蜀": {
        "readings": ["ゾク", "ショク"],
        "compounds": ["濁", "独", "属", "触"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "亥": {
        "readings": ["ガイ", "カイ"],
        "compounds": ["刻", "劾", "核", "該", "骸"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "臧": {
        "readings": ["ぞう", "そう"],
        "compounds": ["蔵"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "蔵": {
        "readings": ["ぞう", "そう"],
        "compounds": ["臓"],
        "non_compounds": [],
        "xrefs": ["蔵", "臧"],
        "quality": -1.0
    },
    "䍃": {
        "readings": ["よう"],
        "compounds": ["揺", "謡", "遥"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "余": {
        "readings": ["ヨ"],
        "compounds": ["徐", "途", "除", "斜"],
        "non_compounds": [],
        "xrefs": ["余"],
        "quality": -1.0
    },
    "厓": {
        "readings": ["ガイ"],
        "compounds": ["涯", "崖"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "扁": {
        "readings": ["ヘン", "ハン"],
        "compounds": ["偏", "遍", "編"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "韋": {
        "readings": ["イ"],
        "compounds": ["偉", "囲", "違", "衛"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "戠": {
        "readings": ["ショク", "し", "シキ"],
        "compounds": ["職", "識", "織"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO: no list, search!"
    },
    "郷": {
        "readings": ["きょう", "ゴウ"],
        "compounds": ["響"],
        "non_compounds": [],
        "xrefs": ["郷"],
        "quality": -1.0
    },
    "疑": {
        "readings": ["ギ"],
        "compounds": ["凝", "擬"],
        "non_compounds": [],
        "xrefs": ["疑"],
        "quality": -1.0
    },
    "爰": {
        "readings": ["エン"],
        "compounds": ["媛", "援", "緩"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "瞏": {
        "readings": ["けい", "セン"],
        "compounds": ["還", "環"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "雚": {
        "readings": ["カン"],
        "compounds": ["歓", "観"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO: no list, search!"
    },
    "隺": {
        "readings": ["カク", "コク"],
        "compounds": ["鶴"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "堇": {
        "readings": ["きん"],
        "compounds": ["僅", "勤", "謹", "難"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "刃": {
        "readings": ["ジン", "ニン"],
        "compounds": ["忍"],
        "non_compounds": [],
        "xrefs": ["刃"],
        "quality": -1.0
    },
    "𡈼": {
        "readings": ["イ"],
        "compounds": ["聖", "廷"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "廷": {
        "readings": ["テイ"],
        "compounds": ["庭", "艇"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "要": {
        "readings": ["よう"],
        "compounds": ["腰"],
        "non_compounds": [],
        "xrefs": ["要"],
        "quality": -1.0,
        "comment": "TODO: no list, search!"
    },
    "票": {
        "readings": ["ヒョウ"],
        "compounds": ["漂", "標"],
        "non_compounds": [],
        "xrefs": ["票"],
        "quality": -1.0
    },
    "尚": {
        "readings": ["しょう"],
        "compounds": ["堂", "常", "掌", "当", "賞", "党"],
        "non_compounds": [],
        "xrefs": ["尚", "向"],
        "quality": -1.0
    },
    "度": {
        "readings": ["ド", "ト", "タク"],
        "compounds": ["渡"],
        "non_compounds": [],
        "xrefs": ["度"],
        "quality": -1.0
    },
    "于": {
        "readings": ["ウ"],
        "compounds": ["宇", "芋", "汚"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "比": {
        "readings": ["ヒ", "ビ"],
        "compounds": ["批"],
        "non_compounds": [],
        "xrefs": ["比"],
        "quality": -1.0
    },
    "厶": {
        "readings": ["し", "ボウ", "ム"],
        "compounds": ["私"],
        "non_compounds": ["仏", "払"],
        "xrefs": [],
        "quality": -1.0
    },
    "厷": {
        "readings": ["コウ", "ユウ"],
        "compounds": ["雄"],
        "non_compounds": [],
        "xrefs": ["厷"],
        "quality": -1.0
    },
    "共": {
        "readings": ["きょう", "ク", "クウ", "グ"],
        "compounds": ["供", "洪", "恭"],
        "non_compounds": [],
        "xrefs": ["共"],
        "quality": -1.0
    },
    "兼": {
        "readings": ["ケン"],
        "compounds": ["嫌", "廉", "鎌", "謙"],
        "non_compounds": [],
        "xrefs": ["兼"],
        "quality": -1.0
    },
    "勿": {
        "readings": ["ブツ", "モツ", "モチ"],
        "compounds": ["物"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "委": {
        "readings": ["イ"],
        "compounds": ["萎"],
        "non_compounds": [],
        "xrefs": ["委"],
        "quality": -1.0
    },
    "行": {
        "readings": ["コウ", "ギョウ", "アン"],
        "compounds": ["衡", "桁"],
        "non_compounds": [],
        "xrefs": ["行"],
        "quality": -1.0
    },
    "玄": {
        "readings": ["ゲン"],
        "compounds": ["弦", "舷"],
        "non_compounds": [],
        "xrefs": ["玄"],
        "quality": -1.0
    },
    "采": {
        "readings": ["サイ"],
        "compounds": ["彩", "採", "菜"],
        "non_compounds": [],
        "xrefs": ["采"],
        "quality": -1.0
    },
    "朮": {
        "readings": ["ジュツ", "シュツ", "チュツ"],
        "compounds": ["述", "術"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "受": {
        "readings": ["ジュ", "ズ"],
        "compounds": ["授"],
        "non_compounds": [],
        "xrefs": ["受"],
        "quality": -1.0,
        "comment": "TODO: incomplete, search!"
    },
    "妾": {
        "readings": ["しょう"],
        "compounds": ["接"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "夜": {
        "readings": ["ヤ"],
        "compounds": ["液"],
        "non_compounds": [],
        "xrefs": ["夜"],
        "quality": -1.0,
        "comment": "TODO: no list, search!"
    },
    "敄": {
        "readings": ["ブ", "ム"],
        "compounds": ["務"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "務": {
        "readings": ["ム", "ブ"],
        "compounds": ["霧"],
        "non_compounds": [],
        "xrefs": ["務", "敄"],
        "quality": -1.0
    },
    "熒": {
        "readings": ["エイ", "エイ", "ギョウ"],
        "compounds": ["労", "栄", "蛍", "営"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO no list, search"
    },
    "复": {
        "readings": ["フク", "フウ", "ブク", "ブ"],
        "compounds": ["復", "腹", "複", "覆"],
        "non_compounds": [],
        "xrefs": ["复", "畐"],
        "quality": -1.0,
        "comment": "TODO: no list, search!"
    },
    "咸": {
        "readings": ["カン", "ゲン"],
        "compounds": ["減", "感"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO: no list, search!"
    },
    "感": {
        "readings": ["カン"],
        "compounds": ["憾"],
        "non_compounds": [],
        "xrefs": ["感", "咸"],
        "quality": -1.0
    },
    "或": {
        "readings": ["ワク", "コク", "ヨク"],
        "compounds": ["域", "惑"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "幾": {
        "readings": ["キ"],
        "compounds": ["機", "畿"],
        "non_compounds": [],
        "xrefs": ["幾"],
        "quality": -1.0
    },
    "責": {
        "readings": ["せき", "シャク"],
        "compounds": ["積", "債", "漬", "績", "跡"],
        "non_compounds": [],
        "xrefs": ["責", "朿"],
        "quality": -1.0,
        "comment": "TODO: no list, search"
    },
    "侖": {
        "readings": ["リン"],
        "compounds": ["輪", "論", "倫"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "巽": {
        "readings": ["ソン"],
        "compounds": ["選"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "彔": {
        "readings": ["ロク"],
        "compounds": ["緑", "録"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "竟": {
        "readings": ["けい", "きょう"],
        "compounds": ["鏡", "境"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "重": {
        "readings": ["ジュウ", "ちょう"],
        "compounds": ["動", "腫", "種", "衝"],
        "non_compounds": [],
        "xrefs": ["重"],
        "quality": -1.0
    },
    "童": {
        "readings": ["どう", "とう", "ジュウ", "ちょう"],
        "compounds": ["憧", "鐘"],
        "non_compounds": [],
        "xrefs": ["童", "重"],
        "quality": -1.0
    },
    "𠬝": {
        "readings": ["フク", "フウ"],
        "compounds": ["服"],
        "non_compounds": ["報"],
        "xrefs": [],
        "quality": -1.0
    },
    "旨": {
        "readings": ["し", "けい"],
        "compounds": ["指", "脂", "詣", "稽"],
        "non_compounds": [],
        "xrefs": ["旨"],
        "quality": -1.0,
        "comment": "two different components with the same look, just merge"
    },
    "相": {
        "readings": ["そう", "しょう"],
        "compounds": ["想", "箱", "霜"],
        "non_compounds": [],
        "xrefs": ["相"],
        "quality": -1.0
    },
    "介": {
        "readings": ["カイ"],
        "compounds": ["界"],
        "non_compounds": [],
        "xrefs": ["介"],
        "quality": -1.0
    },
    "幵": {
        "readings": ["ケン"],
        "compounds": ["研"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "no list, search!"
    },
    "升": {
        "readings": ["しょう"],
        "compounds": ["昇"],
        "non_compounds": [],
        "xrefs": ["升"],
        "quality": -1.0
    },
    "尼": {
        "readings": ["ニ", "ジ"],
        "compounds": ["泥"],
        "non_compounds": [],
        "xrefs": ["尼"],
        "quality": -1.0
    },
    "炎": {
        "readings": ["エン"],
        "compounds": ["淡", "談"],
        "non_compounds": [],
        "xrefs": ["炎"],
        "quality": -1.0,
        "comment": "why often だん?"
    },
    "喬": {
        "readings": ["きょう", "ギョウ"],
        "compounds": ["橋", "矯"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "敬": {
        "readings": ["けい", "きょう"],
        "compounds": ["警", "驚"],
        "non_compounds": [],
        "xrefs": ["敬"],
        "quality": -1.0
    },
    "丙": {
        "readings": ["ヘイ"],
        "compounds": ["柄", "病"],
        "non_compounds": [],
        "xrefs": ["丙"],
        "quality": -1.0
    },
    "㐬": {
        "readings": ["リュウ", "ル"],
        "compounds": ["硫", "流"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO: no list, search!"
    },
    "㫃": {
        "readings": ["リョ", "ロ"],
        "compounds": ["旅"],
        "non_compounds": ["旋", "施", "旗", "族"],
        "xrefs": [],
        "quality": -1.0,
        "comment": "no list, search, limited info!"
    },
    "民": {
        "readings": ["ミン"],
        "compounds": ["眠"],
        "non_compounds": [],
        "xrefs": ["民"],
        "quality": -1.0
    },
    "栗": {
        "readings": ["リツ", "リ"],
        "compounds": ["慄"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "岡": {
        "readings": ["コウ"],
        "compounds": ["綱", "鋼", "剛"],
        "non_compounds": [],
        "xrefs": ["岡"],
        "quality": -1.0,
        "comment": "TODO: incomplete list, search!"
    },
    "罔": {
        "readings": ["モウ", "ボウ", "ム"],
        "compounds": ["網"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "瓜": {
        "readings": ["カ", "コ"],
        "compounds": ["孤", "弧"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "壬": {
        "readings": ["ジン", "ニン"],
        "compounds": ["任", "妊", "賃"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "肙": {
        "readings": ["エン", "ケン"],
        "compounds": ["絹"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "知": {
        "readings": ["チ"],
        "compounds": ["痴"],
        "non_compounds": [],
        "xrefs": ["知"],
        "quality": -1.0
    },
    "弟": {
        "readings": ["テイ", "ダイ", "デ"],
        "compounds": ["第"],
        "non_compounds": [],
        "xrefs": ["弟"],
        "quality": -1.0
    },
    "夭": {
        "readings": ["よう"],
        "compounds": ["妖", "沃"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "关": {
        "readings": ["しょう", "そう"],
        "compounds": ["送", "咲", "笑"],
        "non_compounds": ["朕"],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO: incomplete, search!"
    },
    "屈": {
        "readings": ["クツ"],
        "compounds": ["掘", "堀", "窟"],
        "non_compounds": [],
        "xrefs": ["屈"],
        "quality": -1.0
    },
    "尃": {
        "readings": ["フ", "ハク"],
        "compounds": ["敷", "博", "縛"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "溥": {
        "readings": ["フ", "ハク"],
        "compounds": ["薄", "簿"],
        "non_compounds": [],
        "xrefs": ["溥", "尃"],
        "quality": -1.0
    },
    "滕": {
        "readings": ["とう", "どう"],
        "compounds": ["藤"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0,
        "comment": "TODO: no list, search!"
    },
    "屋": {
        "readings": ["オク"],
        "compounds": ["握"],
        "non_compounds": [],
        "xrefs": ["屋"],
        "quality": -1.0
    },
    "疋": {
        "readings": ["ショ", "ソ", "ヒキ", "ヒツ"],
        "compounds": ["疎"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "楚": {
        "readings": ["ソ", "ショ"],
        "compounds": ["礎"],
        "non_compounds": [],
        "xrefs": ["楚", "疋"],
        "quality": -1.0
    },
    "胥": {
        "readings": ["ショ", "ソ"],
        "compounds": ["婿"],
        "non_compounds": [],
        "xrefs": ["胥", "疋"],
        "quality": -1.0
    },
    "庶": {
        "readings": ["ショ"],
        "compounds": ["遮"],
        "non_compounds": [],
        "xrefs": ["庶"],
        "quality": -1.0
    },
    "曹": {
        "readings": ["そう", "ぞう"],
        "compounds": ["遭", "槽"],
        "non_compounds": [],
        "xrefs": ["曹"],
        "quality": -1.0,
        "comment": "no list, search!"
    },
    "農": {
        "readings": ["ノウ"],
        "compounds": ["濃"],
        "non_compounds": [],
        "xrefs": ["農"],
        "quality": -1.0
    },
    "乇": {
        "readings": ["タク", "チャク"],
        "compounds": ["宅", "託"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
    "禺": {
        "readings": ["グ", "グウ"],
        "compounds": ["愚", "偶", "遇", "隅"],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    }
}`);

phonetics_template = {
    "": {
        "readings": [],
        "compounds": [],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1.0
    },
};

/*
 * Notes stack
 *
 * 静荷
 *
 * Indicative component: 言殳
 */
