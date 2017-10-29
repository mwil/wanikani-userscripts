/* jshint esversion: 6 */

var KTypeEnum = Object.freeze(
    {
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

var kanji_db = JSON.parse(`
{
    "一": {
		"readings": ["いち", "いつ"],
        "type": "indicative"
    },
    "九": {
		"readings": ["きゅう", "く"],
		"phonetic": "九",
        "type": "indicative"
    },
    "七": {
		"readings": ["しち", "しつ"],
        "type": "indicative"
    },
    "二": {
		"readings": ["ニ", "じ"],
        "type": "indicative"
    },
    "人": {
		"readings": ["ジン", "にん"],
        "type": "hieroglyph"
    },
    "入": {
		"readings": ["ニュウ", "ジュ", "じゅう"],
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
		"phonetic": "十",
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
		"readings": ["こう", "く"],
        "type": "hieroglyph"
    },
    "土": {
		"readings": ["ト", "ド"],
		"phonetic": "土",
        "type": "hieroglyph"
    },
    "夕": {
		"readings": ["せき", "シャク"],
        "type": "hieroglyph"
    },
    "大": {
		"readings": ["ダイ", "タイ"],
		"phonetic": "大",
        "type": "hieroglyph"
    },
    "女": {
		"readings": ["ジョ", "ニョ", "ニョウ"],
        "type": "hieroglyph"
    },
    "子": {
		"readings": ["し", "ス"],
		"phonetic": "子",
        "type": "hieroglyph"
    },
    "小": {
		"readings": ["しょう"],
		"phonetic": "小",
        "type": "hieroglyph"
    },
    "山": {
		"readings": ["サン", "セン"],
		"phonetic": "山",
        "type": "hieroglyph"
    },
    "川": {
		"readings": ["セン"],
        "type": "hieroglyph"
    },
    "五": {
		"readings": ["ご"],
        "type": "indicative"
    },
    "天": {
		"readings": ["テン"],
        "type": "hieroglyph"
    },
    "中": {
		"readings": ["チュウ"],
		"phonetic": "中",
        "type": "unknown"
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
		"readings": ["しゅ", "ズ"],
        "type": "hieroglyph"
    },
    "文": {
		"readings": ["ブン", "モン"],
		"phonetic": "文",
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
		"readings": ["か", "こ"],
        "type": "hieroglyph"
    },
    "犬": {
		"readings": ["けん"],
        "type": "hieroglyph"
    },
    "王": {
		"readings": ["オウ"],
		"phonetic": "王",
        "type": "hieroglyph"
    },
    "正": {
		"readings": ["セイ", "しょう"],
		"phonetic": "正",
        "type": "comp_indicative"
    },
    "出": {
		"readings": ["シュツ", "スイ"],
		"phonetic": "出",
        "type": "comp_indicative"
    },
    "本": {
		"readings": ["ホン"],
        "type": "hieroglyph"
    },
    "右": {
		"readings": ["ウ", "ゆう"],
        "type": "comp_indicative"
    },
    "四": {
		"readings": ["し"],
        "type": "indicative"
    },
    "左": {
		"readings": ["さ"],
		"phonetic": "左",
        "type": "comp_indicative"
    },
    "玉": {
		"readings": ["ギョク"],
        "type": "hieroglyph"
    },
    "生": {
		"readings": ["セイ", "しょう"],
		"phonetic": "生",
        "type": "hieroglyph"
    },
    "田": {
		"readings": ["デン"],
        "type": "hieroglyph"
    },
    "白": {
		"readings": ["ハク", "ビャク"],
		"phonetic": "白",
        "type": "unknown"
    },
    "目": {
		"readings": ["モク", "ボク"],
        "type": "hieroglyph"
    },
    "石": {
		"readings": ["せき", "シャク", "こく", "ジャク"],
		"phonetic": "石",
        "type": "hieroglyph"
    },
    "立": {
		"readings": ["りつ", "リュウ"],
		"phonetic": "立",
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
		"phonetic": "先",
        "type": "comp_indicative"
    },
    "名": {
		"readings": ["メイ", "ミョウ"],
		"phonetic": "名",
        "type": "comp_indicative"
    },
    "字": {
		"readings": ["じ"],
        "phonetic": "子",
        "type": "comp_phonetic"
    },
    "早": {
		"readings": ["そう", "サッ"],
		"phonetic": "早",
        "type": "comp_indicative"
    },
    "気": {
		"readings": ["き", "け"],
        "type": "unknown"
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
		"phonetic": "耳",
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
		"readings": ["か", "ケ"],
        "phonetic": "化",
        "type": "comp_phonetic"
    },
    "見": {
		"readings": ["けん", "ゲン"],
		"phonetic": "見",
        "type": "comp_indicative"
    },
    "貝": {
		"readings": ["バイ", "マイ"],
		"phonetic": "貝",
        "type": "hieroglyph"
    },
    "赤": {
		"readings": ["せき", "シャク"],
		"phonetic": "赤",
        "type": "comp_indicative"
    },
    "足": {
		"readings": ["そく", "しょく"],
		"phonetic": "足",
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
        "type": "unknown"
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
		"readings": ["おん", "いん"],
		"phonetic": "音",
        "type": "comp_indicative"
    },
    "校": {
		"readings": ["こう", "きょう"],
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
		"phonetic": "才",
        "type": "unknown"
    },
    "工": {
		"readings": ["こう", "く"],
		"phonetic": "工",
        "type": "hieroglyph"
    },
    "弓": {
		"readings": ["キュウ"],
        "type": "hieroglyph"
    },
    "内": {
		"readings": ["ナイ", "ダイ", "ノウ", "どう"],
		"phonetic": "内",
        "type": "hieroglyph"
    },
    "午": {
		"readings": ["ご"],
		"phonetic": "午",
        "type": "hieroglyph"
    },
    "少": {
		"readings": ["しょう"],
		"phonetic": "少",
        "type": "unknown"
    },
    "元": {
		"readings": ["ゲン", "ガン"],
		"phonetic": "元",
        "type": "unknown"
    },
    "今": {
		"readings": ["こん", "きん"],
		"phonetic": "今",
        "type": "comp_indicative"
    },
    "公": {
		"readings": ["こう", "く"],
		"phonetic": "公",
        "type": "unknown"
    },
    "分": {
		"readings": ["フン","ブン","ブ"],
		"phonetic": "分",
        "type": "comp_indicative"
    },
    "切": {
		"readings": ["セツ","セイ","サイ"],
        "phonetic": "七",
        "type": "comp_phonetic"
    },
    "友": {
		"readings": ["ゆう"],
        "type": "comp_indicative"
    },
    "太": {
		"readings": ["タイ", "タ", "ダイ"],
        "type": "unknown"
    },
    "引": {
		"readings": ["いん"],
        "type": "comp_indicative"
    },
    "心": {
		"readings": ["シン"],
		"phonetic": "心",
        "type": "hieroglyph"
    },
    "戸": {
		"readings": ["こ"],
		"phonetic": "戸",
        "type": "hieroglyph"
    },
    "方": {
		"readings": ["ほう"],
		"phonetic": "方",
        "type": "hieroglyph"
    },
    "止": {
		"readings": ["し"],
		"phonetic": "止",
        "type": "hieroglyph"
    },
    "毛": {
		"readings": ["もう", "ぼう"],
        "type": "hieroglyph"
    },
    "父": {
		"readings": ["フ", "ホ"],
        "type": "comp_indicative"
    },
    "牛": {
		"readings": ["ギュウ", "ご"],
        "type": "hieroglyph"
    },
    "半": {
		"readings": ["ハン"],
		"phonetic": "半",
        "type": "comp_indicative"
    },
    "市": {
		"readings": ["し"],
        "type": "unknown"
    },
    "北": {
		"readings": ["ホク"],
		"phonetic": "北",
        "type": "unknown"
    },
    "古": {
		"readings": ["こ"],
		"phonetic": "古",
        "type": "unknown"
    },
    "台": {
		"readings": ["ダイ", "タイ"],
		"phonetic": "台",
        "type": "comp_indicative"
    },
    "兄": {
		"readings": ["けい", "きょう"],
		"phonetic": "兄",
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
		"readings": ["こう"],
        "phonetic": "黄",
        "type": "comp_phonetic"
    },
    "母": {
		"readings": ["ボ", "モ", "ぼう"],
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
		"phonetic": "交",
        "type": "hieroglyph"
    },
    "会": {
		"readings": ["カイ", "エ"],
		"phonetic": "会",
        "type": "comp_indicative"
    },
    "合": {
		"readings": ["ゴウ", "ガッ", "カッ", "こう"],
		"phonetic": "合",
        "type": "comp_indicative"
    },
    "同": {
		"readings": ["どう"],
		"phonetic": "同",
        "type": "comp_indicative"
    },
    "回": {
		"readings": ["カイ", "エ"],
        "type": "hieroglyph"
    },
    "寺": {
		"readings": ["じ"],
		"phonetic": "寺",
        "type": "unknown"
    },
    "地": {
		"readings": ["チ", "じ"],
        "phonetic": "也",
        "type": "comp_phonetic"
    },
    "多": {
		"readings": ["た"],
		"phonetic": "多",
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
		"phonetic": "米",
        "type": "hieroglyph"
    },
    "羽": {
		"readings": ["ウ"],
        "type": "hieroglyph"
    },
    "考": {
		"readings": ["こう"],
		"phonetic": "考",
        "type": "unknown",
        "comment": "TODO: phonetic compound of 丂"
    },
    "肉": {
		"readings": ["ニク", "ジク"],
        "type": "hieroglyph"
    },
    "自": {
		"readings": ["じ", "し"],
        "type": "hieroglyph"
    },
    "色": {
		"readings": ["しょく", "シキ"],
        "type": "comp_indicative"
    },
    "行": {
		"readings": ["こう", "ギョウ", "アン"],
		"phonetic": "行",
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
		"readings": ["タイ", "テイ"],
        "type": "unknown",
        "comment": "TODO: phonetic of 豊"
    },
    "弟": {
		"readings": ["テイ", "ダイ", "デ"],
		"phonetic": "弟",
        "type": "hieroglyph"
    },
    "図": {
		"readings": ["ズ", "ト"],
        "type": "comp_indicative"
    },
    "声": {
		"readings": ["セイ", "しょう"],
        "type": "unknown"
    },
    "売": {
		"readings": ["バイ"],
		"phonetic": "売",
        "type": "comp_indicative"
    },
    "形": {
		"readings": ["けい", "ギョウ"],
        "type": "unknown",
        "comment": "TODO phonetic 开"
    },
    "汽": {
		"readings": ["き"],
        "type": "unknown",
        "comment": "TODO phonetic 气"
    },
    "社": {
		"readings": ["シャ", "じゃ"],
        "phonetic": "土",
        "type": "comp_phonetic"
    },
    "角": {
		"readings": ["かく"],
        "type": "hieroglyph"
    },
    "言": {
		"readings": ["ゲン", "ごん"],
        "type": "unknown"
    },
    "谷": {
		"readings": ["こく"],
		"phonetic": "谷",
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
		"phonetic": "里",
        "type": "comp_indicative"
    },
    "麦": {
		"readings": ["バク"],
        "type": "comp_indicative"
    },
    "画": {
		"readings": ["ガ", "かく"],
        "type": "comp_indicative"
    },
    "東": {
		"readings": ["とう"],
		"phonetic": "東",
        "type": "borrowing"
    },
    "京": {
		"readings": ["きょう", "けい", "きん"],
		"phonetic": "京",
        "type": "hieroglyph"
    },
    "夜": {
		"readings": ["ヤ"],
		"phonetic": "夜",
        "type": "unknown"
    },
    "直": {
		"readings": ["チョク", "ジキ", "チ"],
		"phonetic": "直",
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
		"phonetic": "明",
        "type": "comp_indicative"
    },
    "歩": {
		"readings": ["ホ", "ブ", "フ"],
		"phonetic": "歩",
        "type": "comp_indicative"
    },
    "知": {
		"readings": ["チ"],
		"phonetic": "知",
        "type": "comp_indicative"
    },
    "長": {
		"readings": ["ちょう"],
		"phonetic": "長",
        "type": "hieroglyph"
    },
    "門": {
		"readings": ["モン", "ボン"],
		"phonetic": "門",
        "type": "hieroglyph"
    },
    "昼": {
		"readings": ["チュウ"],
        "type": "unknown"
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
		"readings": ["セイ", "しょう"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "海": {
		"readings": ["カイ"],
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
		"phonetic": "秋",
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
		"readings": ["フウ", "フ"],
        "type": "unknown",
        "comment": "TODO: maybe phonetic of 凡"
    },
    "食": {
		"readings": ["しょく", "ジキ", "し"],
        "type": "unknown",
        "comment": "TODO phonetic 亼? Seems strange"
    },
    "首": {
		"readings": ["しゅ"],
        "type": "hieroglyph"
    },
    "夏": {
		"readings": ["か", "ゲ"],
        "type": "hieroglyph"
    },
    "弱": {
		"readings": ["ジャク", "ニャク"],
		"phonetic": "弱",
        "type": "hieroglyph"
    },
    "原": {
		"readings": ["ゲン"],
		"phonetic": "原",
        "type": "comp_indicative"
    },
    "家": {
		"readings": ["か", "ケ"],
		"phonetic": "家",
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
		"readings": ["つう", "ツ"],
        "phonetic": "甬",
        "type": "comp_phonetic"
    },
    "馬": {
		"readings": ["バ", "メ", "マ"],
		"phonetic": "馬",
        "type": "hieroglyph"
    },
    "高": {
		"readings": ["こう"],
		"phonetic": "高",
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
		"readings": ["しゅう"],
        "phonetic": "周",
        "type": "comp_phonetic"
    },
    "野": {
		"readings": ["ヤ", "しょ"],
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
		"readings": ["こう", "オウ"],
		"phonetic": "黄",
        "type": "hieroglyph"
    },
    "黒": {
		"readings": ["こく"],
		"phonetic": "黒",
        "type": "unknown"
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
        "type": "unknown"
    },
    "朝": {
		"readings": ["ちょう"],
		"phonetic": "朝",
        "type": "comp_indicative"
    },
    "道": {
		"readings": ["どう", "とう"],
		"phonetic": "道",
        "type": "unknown"
    },
    "番": {
		"readings": ["バン", "ハン", "ハ"],
		"phonetic": "番",
        "type": "hieroglyph"
    },
    "間": {
		"readings": ["かん", "けん"],
		"phonetic": "間",
        "type": "comp_indicative"
    },
    "雲": {
		"readings": ["ウン"],
        "phonetic": "云",
        "type": "comp_phonetic"
    },
    "園": {
		"readings": ["えん", "おん"],
        "phonetic": "袁",
        "type": "comp_phonetic"
    },
    "数": {
		"readings": ["スウ", "ス", "しゅ", "さく", "そく"],
        "type": "unknown"
    },
    "新": {
		"readings": ["シン"],
		"phonetic": "新",
        "type": "unknown"
    },
    "楽": {
		"readings": ["ガク", "ラク", "ゴウ", "ギョウ"],
		"phonetic": "楽",
        "type": "hieroglyph"
    },
    "話": {
		"readings": ["ワ"],
        "type": "unknown",
        "comment": "obscure pcomp 䛡"
    },
    "遠": {
		"readings": ["えん", "おん"],
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
		"readings": ["か"],
        "type": "unknown",
        "comment": "phonetic mark 哥"
    },
    "算": {
		"readings": ["サン"],
        "type": "comp_indicative"
    },
    "語": {
		"readings": ["ご"],
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
		"readings": ["とう", "ズ", "ト", "じゅう"],
        "phonetic": "豆",
        "type": "comp_phonetic"
    },
    "曜": {
		"readings": ["よう"],
        "phonetic": "翟",
        "type": "comp_phonetic"
    },
    "顔": {
		"readings": ["ガン", "ゲン"],
        "phonetic": "彦",
        "type": "comp_phonetic"
    },


    "丁": {
		"readings": ["ちょう", "テイ", "とう"],
		"phonetic": "丁",
        "type": "hieroglyph"
    },
    "予": {
		"readings": ["よ"],
		"phonetic": "予",
        "type": "unknown"
    },
    "化": {
		"readings": ["か", "ケ", "ゲ"],
		"phonetic": "化",
        "type": "comp_indicative"
    },
    "区": {
		"readings": ["く"],
		"phonetic": "区",
        "type": "comp_indicative"
    },
    "反": {
		"readings": ["ハン","ホン","タン"],
		"phonetic": "反",
        "type": "comp_indicative"
    },
    "央": {
		"readings": ["オウ", "よう", "エイ"],
		"phonetic": "央",
        "type": "unknown"
    },
    "平": {
		"readings": ["ヘイ", "ビョウ", "ヒョウ"],
		"phonetic": "平",
        "type": "unknown"
    },
    "申": {
		"readings": ["シン"],
		"phonetic": "申",
        "type": "hieroglyph"
    },
    "世": {
		"readings": ["セイ", "セ"],
        "type": "hieroglyph"
    },
    "由": {
		"readings": ["ゆ", "ゆう", "ユイ"],
		"phonetic": "由",
        "type": "hieroglyph"
    },
    "氷": {
		"readings": ["ヒョウ"],
        "type": "comp_indicative"
    },
    "主": {
		"readings": ["しゅ", "ス"],
		"phonetic": "主",
        "type": "hieroglyph"
    },
    "仕": {
		"readings": ["し", "じ"],
        "type": "unknown"
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
        "type": "unknown"
    },
    "号": {
		"readings": ["ゴウ"],
        "type": "unknown"
    },
    "去": {
		"readings": ["キョ", "こ"],
        "type": "unknown"
    },
    "打": {
		"readings": ["ダ", "ちょう", "テイ"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "皮": {
		"readings": ["ヒ"],
		"phonetic": "皮",
        "type": "hieroglyph"
    },
    "皿": {
		"readings": ["ベイ"],
        "type": "hieroglyph"
    },
    "礼": {
		"readings": ["レイ", "ライ"],
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
		"phonetic": "向",
        "type": "unknown"
    },
    "州": {
		"readings": ["しゅう"],
		"phonetic": "州",
        "type": "hieroglyph"
    },
    "全": {
		"readings": ["ゼン"],
		"phonetic": "全",
        "type": "hieroglyph"
    },
    "次": {
		"readings": ["じ", "し"],
		"phonetic": "次",
        "type": "comp_indicative"
    },
    "安": {
		"readings": ["アン"],
		"phonetic": "安",
        "type": "comp_indicative"
    },
    "守": {
		"readings": ["しゅ", "ス"],
        "type": "comp_indicative"
    },
    "式": {
		"readings": ["シキ", "しょく"],
        "phonetic": "弋",
        "type": "comp_phonetic"
    },
    "死": {
		"readings": ["し"],
        "type": "comp_indicative"
    },
    "列": {
		"readings": ["レツ"],
		"phonetic": "列",
        "type": "comp_indicative"
    },
    "羊": {
		"readings": ["よう"],
		"phonetic": "羊",
        "type": "hieroglyph"
    },
    "有": {
		"readings": ["ゆう", "ウ"],
		"phonetic": "有",
        "type": "comp_indicative"
    },
    "血": {
		"readings": ["ケツ"],
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
		"readings": ["クン"],
		"phonetic": "君",
        "type": "comp_indicative"
    },
    "坂": {
		"readings": ["ハン", "バン"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "局": {
		"readings": ["キョク"],
        "type": "unknown"
    },
    "役": {
		"readings": ["ヤク", "エキ"],
		"phonetic": "役",
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
        "type": "unknown",
        "comment": "maybe compound of 夬"
    },
    "究": {
		"readings": ["キュウ", "く"],
        "phonetic": "九",
        "type": "comp_phonetic"
    },
    "豆": {
		"readings": ["とう", "ズ"],
		"phonetic": "豆",
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
		"readings": ["じ", "ズ"],
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
		"readings": ["メイ", "ミョウ"],
        "type": "comp_indicative"
    },
    "味": {
		"readings": ["ミ", "ビ"],
        "phonetic": "未",
        "type": "comp_phonetic"
    },
    "幸": {
		"readings": ["こう"],
		"phonetic": "幸",
        "type": "hieroglyph"
    },
    "始": {
		"readings": ["し"],
        "type": "unknown"
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
		"readings": ["せき", "シャク"],
		"phonetic": "昔",
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
		"readings": ["ゆ", "ゆう"],
        "phonetic": "由",
        "type": "comp_phonetic"
    },
    "受": {
		"readings": ["ジュ", "ズ"],
		"phonetic": "受",
        "type": "comp_indicative"
    },
    "物": {
		"readings": ["ブツ", "モツ"],
        "phonetic": "勿",
        "type": "comp_phonetic"
    },
    "具": {
		"readings": ["グ"],
		"phonetic": "具",
        "type": "comp_indicative"
    },
    "委": {
		"readings": ["い"],
		"phonetic": "委",
        "type": "unknown"
    },
    "和": {
		"readings": ["ワ", "オ", "か"],
        "type": "unknown"
    },
    "者": {
		"readings": ["シャ"],
		"phonetic": "者",
        "type": "unknown"
    },
    "取": {
		"readings": ["しゅ"],
		"phonetic": "取",
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
		"phonetic": "重",
        "type": "unknown"
    },
    "乗": {
		"readings": [],
        "type": "unprocessed"
    },
    "係": {
		"readings": [],
        "type": "unprocessed"
    },
    "品": {
		"readings": ["ヒン", "ホン"],
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
		"readings": ["オク"],
		"phonetic": "屋",
        "type": "comp_indicative"
    },
    "炭": {
		"readings": ["タン"],
        "type": "unknown"
    },
    "度": {
		"readings": ["ド", "ト", "タク"],
		"phonetic": "度",
        "type": "unknown",
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
		"readings": ["じ", "チ"],
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
		"phonetic": "相",
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
        "type": "unprocessed"
    },
    "研": {
		"readings": ["けん", "ゲン"],
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
        "type": "unprocessed"
    },
    "級": {
		"readings": ["キュウ"],
        "phonetic": "及",
        "type": "comp_phonetic"
    },
    "美": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "面": {
		"readings": [],
        "type": "unprocessed"
    },
    "島": {
		"readings": ["とう"],
        "type": "comp_indicative"
    },
    "勉": {
		"readings": [],
        "type": "unprocessed"
    },
    "倍": {
		"readings": [],
        "type": "unprocessed"
    },
    "真": {
		"readings": [],
        "type": "unprocessed"
    },
    "員": {
		"readings": [],
        "type": "unprocessed"
    },
    "宮": {
		"readings": [],
        "type": "unprocessed"
    },
    "庫": {
		"readings": ["こ", "く"],
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
		"readings": ["ビョウ", "ヘイ"],
        "phonetic": "丙",
        "type": "comp_phonetic"
    },
    "息": {
		"readings": [],
        "type": "unprocessed"
    },
    "荷": {
		"readings": ["か"],
        "type": "unknown",
        "comment": "TODO: phonetic mark 何"
    },
    "起": {
		"readings": [],
        "type": "unprocessed"
    },
    "速": {
		"readings": [],
        "type": "unprocessed"
    },
    "配": {
		"readings": ["ハイ"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "院": {
		"readings": [],
        "type": "unprocessed"
    },
    "悪": {
		"readings": ["あく", "お"],
        "phonetic": "亜",
        "type": "comp_phonetic"
    },
    "商": {
		"readings": [],
        "type": "unprocessed"
    },
    "動": {
		"readings": ["どう", "とう"],
        "phonetic": "重",
        "type": "comp_phonetic"
    },
    "宿": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "球": {
		"readings": [],
        "type": "unprocessed"
    },
    "祭": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "習": {
		"readings": [],
        "type": "unprocessed"
    },
    "転": {
		"readings": [],
        "type": "unprocessed"
    },
    "進": {
		"readings": ["しん"],
        "phonetic": "隹",
        "type": "comp_phonetic"
    },
    "都": {
		"readings": ["ト", "ツ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "部": {
		"readings": [],
        "type": "unprocessed"
    },
    "問": {
		"readings": ["モン", "ブン"],
        "phonetic": "門",
        "type": "comp_phonetic"
    },
    "章": {
		"readings": ["しょう"],
		"phonetic": "章",
        "type": "unknown"
    },
    "寒": {
		"readings": [],
        "type": "unprocessed"
    },
    "暑": {
		"readings": ["しょ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "植": {
		"readings": ["しょく", "チ"],
        "phonetic": "直",
        "type": "comp_phonetic"
    },
    "温": {
		"readings": [],
        "type": "unprocessed"
    },
    "湖": {
		"readings": [],
        "type": "unprocessed"
    },
    "港": {
		"readings": [],
        "type": "unprocessed"
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
		"phonetic": "童",
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
        "phonetic": "巠",
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
		"readings": ["しゅう"],
        "type": "comp_indicative"
    },
    "悲": {
		"readings": ["ヒ"],
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
		"readings": ["アン"],
        "phonetic": "音",
        "type": "comp_phonetic"
    },
    "漢": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ノウ"],
		"phonetic": "農",
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
		"readings": ["リョク", "ロク"],
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
        "type": "unknown",
        "comment": "simplification of kanji with phonetic 睪"
    },
    "鼻": {
		"readings": ["び"],
        "type": "unknown"
    },
    "横": {
		"readings": ["オウ", "こう"],
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
		"readings": ["かん"],
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
        "type": "unknown"
    },
    "不": {
		"readings": ["フ", "ブ"],
		"phonetic": "不",
        "type": "hieroglyph"
    },
    "夫": {
		"readings": ["フ", "フウ", "ブ"],
		"phonetic": "夫",
        "type": "hieroglyph"
    },
    "欠": {
		"readings": ["ケツ", "けん"],
        "type": "unknown"
    },
    "氏": {
		"readings": ["し"],
		"phonetic": "氏",
        "type": "unknown"
    },
    "民": {
		"readings": ["ミン"],
		"phonetic": "民",
        "type": "unknown"
    },
    "史": {
		"readings": ["し"],
		"phonetic": "史",
        "type": "comp_indicative"
    },
    "必": {
		"readings": ["ヒツ"],
		"phonetic": "必",
        "type": "unknown"
    },
    "失": {
		"readings": ["シツ", "イツ"],
		"phonetic": "失",
        "type": "unknown"
    },
    "包": {
		"readings": ["ほう"],
		"phonetic": "包",
        "type": "hieroglyph"
    },
    "末": {
		"readings": ["マツ", "バツ"],
		"phonetic": "末",
        "type": "indicative"
    },
    "未": {
		"readings": ["ミ", "ビ"],
		"phonetic": "未",
        "type": "hieroglyph"
    },
    "以": {
		"readings": [],
        "type": "unprocessed"
    },
    "付": {
		"readings": ["フ"],
		"phonetic": "付",
        "type": "comp_indicative"
    },
    "令": {
		"readings": ["れい", "りょう"],
        "type": "comp_indicative"
    },
    "加": {
		"readings": ["か"],
		"phonetic": "加",
        "type": "unknown"
    },
    "司": {
		"readings": ["し", "す"],
		"phonetic": "司",
        "type": "comp_indicative"
    },
    "功": {
		"readings": ["コウ・ク"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "札": {
		"readings": [],
        "type": "unprocessed"
    },
    "辺": {
		"readings": ["へん"],
        "type": "unknown",
        "comment": "simplified obscure tone mark 臱"
    },
    "印": {
		"readings": [],
        "type": "unprocessed"
    },
    "争": {
		"readings": ["そう"],
        "type": "comp_indicative"
    },
    "仲": {
		"readings": ["チュウ"],
        "phonetic": "中",
        "type": "comp_phonetic"
    },
    "伝": {
		"readings": [],
        "type": "unprocessed"
    },
    "共": {
		"readings": ["きょう"],
		"phonetic": "共",
        "type": "comp_indicative"
    },
    "兆": {
		"readings": ["ちょう"],
		"phonetic": "兆",
        "type": "hieroglyph"
    },
    "各": {
		"readings": ["かく"],
		"phonetic": "各",
        "type": "comp_indicative"
    },
    "好": {
		"readings": [],
        "type": "unprocessed"
    },
    "成": {
		"readings": [],
        "type": "unprocessed"
    },
    "灯": {
		"readings": ["とう"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "老": {
		"readings": [],
        "type": "unprocessed"
    },
    "衣": {
		"readings": [],
        "type": "unprocessed"
    },
    "求": {
		"readings": [],
        "type": "unprocessed"
    },
    "束": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["テイ"],
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
		"readings": [],
        "type": "unprocessed"
    },
    "改": {
		"readings": ["カイ"],
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
		"readings": ["ザイ", "サイ"],
        "phonetic": "才",
        "type": "comp_phonetic"
    },
    "利": {
		"readings": [],
        "type": "unprocessed"
    },
    "臣": {
		"readings": [],
        "type": "unprocessed"
    },
    "良": {
		"readings": ["りょう"],
		"phonetic": "良",
        "type": "unknown"
    },
    "芸": {
		"readings": ["ゲイ", "ウン"],
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
		"phonetic": "果",
        "type": "hieroglyph"
    },
    "刷": {
		"readings": ["サツ"],
        "type": "unknown"
    },
    "卒": {
		"readings": ["ソツ", "シュツ"],
		"phonetic": "卒",
        "type": "unknown"
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
		"readings": ["しゅう", "ス"],
		"phonetic": "周",
        "type": "unknown"
    },
    "協": {
		"readings": ["きょう"],
        "type": "comp_indicative"
    },
    "参": {
		"readings": ["サン", "シン"],
		"phonetic": "参",
        "type": "unknown"
    },
    "固": {
		"readings": ["こ"],
        "phonetic": "古",
        "type": "comp_phonetic"
    },
    "官": {
		"readings": ["かん"],
		"phonetic": "官",
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
		"readings": ["じ", "チ"],
        "type": "unknown",
        "comment": "TODO maybe phonetic 台=臺"
    },
    "法": {
		"readings": ["ほう", "ハッ", "ホッ"],
        "type": "comp_indicative"
    },
    "牧": {
		"readings": ["ボク", "モク"],
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
		"readings": [],
        "type": "unprocessed"
    },
    "便": {
		"readings": ["ベン", "ビン"],
        "type": "comp_indicative"
    },
    "軍": {
		"readings": [],
        "type": "unprocessed"
    },
    "勇": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["エイ"],
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
		"readings": ["ヤク"],
        "phonetic": "勺",
        "type": "comp_phonetic"
    },
    "要": {
		"readings": ["よう"],
		"phonetic": "要",
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
		"readings": ["シャク", "シャ"],
        "phonetic": "昔",
        "type": "comp_phonetic"
    },
    "倉": {
		"readings": [],
        "type": "unprocessed"
    },
    "孫": {
		"readings": [],
        "type": "unprocessed"
    },
    "案": {
		"readings": ["アン"],
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "郡": {
		"readings": ["グン", "クン"],
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
		"readings": [],
        "type": "unprocessed"
    },
    "救": {
		"readings": [],
        "type": "unprocessed"
    },
    "械": {
		"readings": [],
        "type": "unprocessed"
    },
    "清": {
		"readings": ["セイ", "しょう", "シン"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "望": {
		"readings": ["ぼう", "もう"],
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
		"phonetic": "票",
        "type": "comp_indicative"
    },
    "貨": {
		"readings": ["か"],
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
        "type": "unprocessed"
    },
    "博": {
		"readings": ["ハク", "バク"],
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
		"readings": ["ガイ", "カイ"],
        "phonetic": "圭",
        "type": "comp_phonetic"
    },
    "散": {
		"readings": [],
        "type": "unprocessed"
    },
    "景": {
		"readings": ["けい", "エイ"],
        "phonetic": "京",
        "type": "comp_phonetic"
    },
    "最": {
		"readings": [],
        "type": "unprocessed"
    },
    "量": {
		"readings": ["りょう"],
		"phonetic": "量",
        "type": "unknown"
    },
    "満": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "象": {
		"readings": ["しょう", "ぞう"],
		"phonetic": "象",
        "type": "hieroglyph"
    },
    "貯": {
		"readings": [],
        "type": "unprocessed"
    },
    "費": {
		"readings": [],
        "type": "unprocessed"
    },
    "達": {
		"readings": [],
        "type": "unprocessed"
    },
    "隊": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "戦": {
		"readings": ["せん"],
        "phonetic": "単",
        "type": "comp_phonetic"
    },
    "極": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ゾク", "しょく"],
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
        "type": "unprocessed"
    },
    "試": {
		"readings": [],
        "type": "unprocessed"
    },
    "歴": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["セツ", "ゼイ", "エツ"],
        "phonetic": "兌",
        "type": "comp_phonetic"
    },
    "関": {
		"readings": ["かん"],
        "type": "unknown",
        "comment": "Obscure tone mark 丱"
    },
    "静": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ヒョウ"],
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
		"readings": ["き"],
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
		"readings": ["かん"],
        "phonetic": "雚",
        "type": "comp_phonetic"
    },
    "類": {
		"readings": ["るい"],
        "type": "unknown"
    },
    "験": {
		"readings": ["けん", "ゲン"],
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
        "type": "unprocessed"
    },
    "議": {
		"readings": ["ギ"],
        "phonetic": "義",
        "type": "comp_phonetic"
    },


    "久": {
		"readings": [],
        "type": "unprocessed"
    },
    "仏": {
		"readings": ["ブツ", "フツ"],
        "phonetic": "弗",
        "type": "comp_phonetic"
    },
    "支": {
		"readings": [],
        "type": "unprocessed"
    },
    "比": {
		"readings": ["ヒ"],
		"phonetic": "比",
        "type": "comp_indicative"
    },
    "可": {
		"readings": ["か", "こく"],
		"phonetic": "可",
        "type": "comp_indicative"
    },
    "旧": {
		"readings": [],
        "type": "unprocessed"
    },
    "永": {
		"readings": ["エイ", "よう"],
		"phonetic": "永",
        "type": "unknown"
    },
    "句": {
		"readings": ["く", "こう"],
        "phonetic": "口",
        "type": "comp_phonetic"
    },
    "圧": {
		"readings": [],
        "type": "unprocessed"
    },
    "弁": {
		"readings": [],
        "type": "unprocessed"
    },
    "布": {
		"readings": [],
        "type": "unprocessed"
    },
    "刊": {
		"readings": ["かん"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "犯": {
		"readings": [],
        "type": "unprocessed"
    },
    "示": {
		"readings": ["じ", "し"],
		"phonetic": "示",
        "type": "unknown"
    },
    "再": {
		"readings": [],
        "type": "unprocessed"
    },
    "仮": {
		"readings": ["か"],
        "phonetic": "叚",
        "type": "comp_phonetic"
    },
    "件": {
		"readings": [],
        "type": "unprocessed"
    },
    "任": {
		"readings": ["にん", "ジン"],
        "phonetic": "壬",
        "type": "comp_phonetic"
    },
    "因": {
		"readings": [],
        "type": "unprocessed"
    },
    "団": {
		"readings": [],
        "type": "unprocessed"
    },
    "在": {
		"readings": [],
        "type": "unprocessed"
    },
    "舌": {
		"readings": [],
        "type": "unprocessed"
    },
    "似": {
		"readings": [],
        "type": "unprocessed"
    },
    "余": {
		"readings": ["よ"],
		"phonetic": "余",
        "type": "unknown"
    },
    "判": {
		"readings": ["ハン", "バン", "ほう"],
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
		"readings": ["サイ"],
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
		"readings": ["ジョ"],
        "phonetic": "予",
        "type": "comp_phonetic"
    },
    "快": {
		"readings": [],
        "type": "unprocessed"
    },
    "技": {
		"readings": [],
        "type": "unprocessed"
    },
    "状": {
		"readings": [],
        "type": "unprocessed"
    },
    "防": {
		"readings": ["ぼう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "武": {
		"readings": [],
        "type": "unprocessed"
    },
    "承": {
		"readings": [],
        "type": "unprocessed"
    },
    "価": {
		"readings": [],
        "type": "unprocessed"
    },
    "舎": {
		"readings": [],
        "type": "unprocessed"
    },
    "券": {
		"readings": [],
        "type": "unprocessed"
    },
    "制": {
		"readings": ["セイ"],
		"phonetic": "制",
        "type": "comp_indicative"
    },
    "効": {
		"readings": [],
        "type": "unprocessed"
    },
    "妻": {
		"readings": [],
        "type": "unprocessed"
    },
    "居": {
		"readings": [],
        "type": "unprocessed"
    },
    "往": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "枝": {
		"readings": [],
        "type": "unprocessed"
    },
    "河": {
		"readings": ["か"],
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
        "type": "unprocessed"
    },
    "述": {
		"readings": ["ジュツ"],
        "phonetic": "朮",
        "type": "comp_phonetic"
    },
    "非": {
		"readings": ["ヒ"],
		"phonetic": "非",
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
		"readings": ["セイ", "しょう"],
        "phonetic": "正",
        "type": "comp_phonetic"
    },
    "査": {
		"readings": ["さ"],
        "phonetic": "且",
        "type": "comp_phonetic"
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
		"readings": ["そく"],
		"phonetic": "則",
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "格": {
		"readings": ["かく", "こう", "キャク"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "桜": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ザイ", "サイ"],
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
		"readings": ["い"],
        "phonetic": "多",
        "type": "comp_phonetic"
    },
    "経": {
		"readings": ["けい", "きょう", "きん"],
        "phonetic": "巠",
        "type": "comp_phonetic"
    },
    "規": {
		"readings": ["き"],
        "type": "comp_indicative"
    },
    "許": {
		"readings": ["キョ", "こ"],
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
		"readings": ["けん"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "備": {
		"readings": ["ビ", "ヒ"],
        "type": "unknown",
        "comment": "obscure 'quiver' phonetic"
    },
    "営": {
		"readings": ["エイ"],
        "phonetic": "熒",
        "type": "comp_phonetic"
    },
    "報": {
		"readings": ["ほう"],
        "type": "comp_indicative"
    },
    "富": {
		"readings": ["フ", "フウ"],
        "phonetic": "畐",
        "type": "comp_phonetic"
    },
    "属": {
		"readings": ["ゾク", "しょく"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "復": {
		"readings": ["ふく"],
        "phonetic": "复",
        "type": "comp_phonetic"
    },
    "提": {
		"readings": ["テイ", "ダイ", "ちょう"],
        "phonetic": "是",
        "type": "comp_phonetic"
    },
    "検": {
		"readings": ["けん"],
        "phonetic": "僉",
        "type": "comp_phonetic"
    },
    "減": {
		"readings": ["ゲン"],
        "phonetic": "咸",
        "type": "comp_phonetic"
    },
    "測": {
		"readings": ["そく"],
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
        "type": "unprocessed"
    },
    "絶": {
		"readings": [],
        "type": "unprocessed"
    },
    "統": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "過": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "損": {
		"readings": [],
        "type": "unprocessed"
    },
    "禁": {
		"readings": [],
        "type": "unprocessed"
    },
    "罪": {
		"readings": ["ザイ"],
        "type": "comp_indicative"
    },
    "義": {
		"readings": ["ギ"],
		"phonetic": "義",
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
        "type": "unprocessed"
    },
    "解": {
		"readings": ["カイ", "ゲ"],
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
		"readings": ["セイ", "しょう"],
        "phonetic": "青",
        "type": "comp_phonetic"
    },
    "総": {
		"readings": [],
        "type": "unprocessed"
    },
    "綿": {
		"readings": [],
        "type": "unprocessed"
    },
    "製": {
		"readings": ["セイ"],
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["こう", "きょう"],
        "type": "comp_indicative"
    },
    "衛": {
		"readings": ["エイ", "エ"],
        "phonetic": "韋",
        "type": "comp_phonetic"
    },
    "燃": {
		"readings": ["ネン", "ゼン"],
        "type": "unknown",
        "comment": "TODO: phonetic 然"
    },
    "築": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["しょく", "シキ"],
        "phonetic": "戠",
        "type": "comp_phonetic"
    },
    "職": {
		"readings": ["しょく", "シキ"],
        "phonetic": "戠",
        "type": "comp_phonetic"
    },
    "額": {
		"readings": ["ガク"],
        "phonetic": "各",
        "type": "comp_phonetic"
    },
    "識": {
		"readings": ["シキ", "し", "しょく"],
        "phonetic": "戠",
        "type": "comp_phonetic"
    },
    "護": {
		"readings": ["ご"],
        "type": "unknown"
    },


    "亡": {
		"readings": ["ぼう", "もう"],
		"phonetic": "亡",
        "type": "hieroglyph"
    },
    "寸": {
		"readings": ["ソン", "スン"],
		"phonetic": "寸",
        "type": "comp_indicative"
    },
    "己": {
		"readings": ["こ", "き"],
		"phonetic": "己",
        "type": "hieroglyph"
    },
    "干": {
		"readings": ["かん"],
		"phonetic": "干",
        "type": "hieroglyph"
    },
    "仁": {
		"readings": ["ジン", "ニ", "にん"],
        "type": "unknown"
    },
    "尺": {
		"readings": [],
        "type": "unprocessed"
    },
    "片": {
		"readings": ["ヘン"],
        "type": "hieroglyph"
    },
    "冊": {
		"readings": ["サツ", "さく"],
		"phonetic": "冊",
        "type": "hieroglyph"
    },
    "収": {
		"readings": ["しゅう"],
        "type": "unknown"
    },
    "処": {
		"readings": [],
        "type": "unprocessed"
    },
    "幼": {
		"readings": ["よう", "ゆう"],
        "type": "unknown"
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
		"readings": ["き"],
        "type": "unknown",
        "comment": "from obscure phonetic 厃"
    },
    "后": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["そん", "ぞん"],
        "type": "unknown"
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
		"readings": ["き"],
        "phonetic": "几",
        "type": "comp_phonetic"
    },
    "至": {
		"readings": [],
        "type": "unprocessed"
    },
    "否": {
		"readings": ["ヒ"],
        "type": "comp_indicative"
    },
    "我": {
		"readings": ["ガ"],
		"phonetic": "我",
        "type": "unknown"
    },
    "系": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "乳": {
		"readings": ["ニュウ", "ジュ", "ニュ"],
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
		"readings": ["チュウ"],
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
		"readings": ["チュウ"],
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
		"readings": [],
        "type": "unprocessed"
    },
    "看": {
		"readings": [],
        "type": "unprocessed"
    },
    "城": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "専": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["エイ"],
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
		"readings": ["セン"],
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
		"readings": ["セン"],
		"phonetic": "泉",
        "type": "hieroglyph"
    },
    "砂": {
		"readings": [],
        "type": "unprocessed"
    },
    "紅": {
		"readings": ["こう", "く中", "グ"],
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
        "type": "unprocessed"
    },
    "座": {
		"readings": [],
        "type": "unprocessed"
    },
    "従": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "針": {
		"readings": ["シン"],
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
		"readings": ["イキ"],
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
		"readings": [],
        "type": "unprocessed"
    },
    "視": {
		"readings": ["し"],
        "phonetic": "示",
        "type": "comp_phonetic"
    },
    "窓": {
		"readings": [],
        "type": "unprocessed"
    },
    "翌": {
		"readings": ["ヨク"],
        "phonetic": "立",
        "type": "comp_phonetic"
    },
    "脳": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "欲": {
		"readings": ["ヨク"],
        "phonetic": "谷",
        "type": "comp_phonetic"
    },
    "郷": {
		"readings": ["きょう", "ゴウ"],
		"phonetic": "郷",
        "type": "comp_indicative"
    },
    "郵": {
		"readings": [],
        "type": "unprocessed"
    },
    "閉": {
		"readings": [],
        "type": "unprocessed"
    },
    "頂": {
		"readings": ["ちょう", "テイ"],
        "phonetic": "丁",
        "type": "comp_phonetic"
    },
    "就": {
		"readings": [],
        "type": "unprocessed"
    },
    "善": {
		"readings": [],
        "type": "unprocessed"
    },
    "尊": {
		"readings": [],
        "type": "unprocessed"
    },
    "割": {
		"readings": [],
        "type": "unprocessed"
    },
    "創": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "敬": {
		"readings": ["けい", "きょう"],
		"phonetic": "敬",
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
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "裏": {
		"readings": ["リ"],
        "phonetic": "里",
        "type": "comp_phonetic"
    },
    "傷": {
		"readings": [],
        "type": "unprocessed"
    },
    "暖": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["マク", "バク"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "誠": {
		"readings": [],
        "type": "unprocessed"
    },
    "賃": {
		"readings": ["チン", "ジン"],
        "phonetic": "壬",
        "type": "comp_phonetic"
    },
    "疑": {
		"readings": ["ギ"],
		"phonetic": "疑",
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
        "type": "unprocessed"
    },
    "磁": {
		"readings": [],
        "type": "unprocessed"
    },
    "暮": {
		"readings": ["ボ"],
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
		"readings": [],
        "type": "unprocessed"
    },
    "糖": {
		"readings": [],
        "type": "unprocessed"
    },
    "縦": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["リン"],
        "type": "unprocessed"
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
		"readings": ["キュウ"],
		"phonetic": "及",
        "type": "comp_indicative"
    },
    "丈": {
		"readings": ["じょう"],
        "type": "comp_indicative"
    },
    "刃": {
		"readings": ["ジン", "にん"],
		"phonetic": "刃",
        "type": "hieroglyph"
    },
    "凡": {
		"readings": ["ボン", "ハン"],
        "type": "hieroglyph"
    },
    "勺": {
		"readings": ["シャク"],
		"phonetic": "勺",
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
		"readings": ["セイ", "しょう"],
        "type": "hieroglyph"
    },
    "升": {
		"readings": ["しょう"],
		"phonetic": "升",
        "type": "unknown"
    },
    "丹": {
		"readings": ["タン"],
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
		"readings": ["トン"],
		"phonetic": "屯",
        "type": "hieroglyph"
    },
    "介": {
		"readings": ["カイ"],
		"phonetic": "介",
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
		"readings": ["ヒツ"],
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
		"readings": ["ゲン"],
        "type": "unknown"
    },
    "斗": {
		"readings": ["ト"],
        "type": "hieroglyph"
    },
    "斤": {
		"readings": ["きん"],
		"phonetic": "斤",
        "type": "hieroglyph"
    },
    "且": {
		"readings": ["しょ", "そ", "しょう"],
		"phonetic": "且",
        "type": "hieroglyph"
    },
    "丙": {
		"readings": ["ヘイ"],
		"phonetic": "丙",
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
		"phonetic": "召",
        "type": "comp_indicative"
    },
    "巨": {
		"readings": ["キョ", "こ"],
		"phonetic": "巨",
        "type": "hieroglyph"
    },
    "占": {
		"readings": ["セン"],
		"phonetic": "占",
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
		"readings": ["ニ", "じ"],
		"phonetic": "尼",
        "type": "unknown"
    },
    "巧": {
		"readings": [],
        "type": "unprocessed"
    },
    "払": {
		"readings": ["フツ"],
        "phonetic": "弗",
        "type": "comp_phonetic"
    },
    "汁": {
		"readings": ["じゅう"],
        "phonetic": "十",
        "type": "comp_phonetic"
    },
    "玄": {
		"readings": ["ゲン"],
		"phonetic": "玄",
        "type": "unknown"
    },
    "甘": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["しゅ", "ス"],
		"phonetic": "朱",
        "type": "unknown"
    },
    "吏": {
		"readings": [],
        "type": "unprocessed"
    },
    "劣": {
		"readings": ["レツ"],
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
		"readings": ["バツ"],
        "type": "comp_indicative"
    },
    "伏": {
		"readings": ["ふく", "ブク"],
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
		"phonetic": "旨",
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
		"readings": ["キチ", "キツ"],
		"phonetic": "吉",
        "type": "comp_indicative"
    },
    "如": {
		"readings": [],
        "type": "unprocessed"
    },
    "妃": {
		"readings": ["ヒ"],
        "phonetic": "己",
        "type": "comp_phonetic"
    },
    "尽": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["キュウ", "そう"],
        "phonetic": "及",
        "type": "comp_phonetic"
    },
    "朽": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ウ"],
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ガン", "かん", "ごん"],
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
		"readings": ["たん", "だん"],
        "phonetic": "旦",
        "type": "comp_phonetic"
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
		"readings": ["ご"],
		"phonetic": "呉",
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
		"readings": ["にん", "ジン"],
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
		"readings": ["テイ"],
        "phonetic": "𡈼",
        "type": "comp_phonetic"
    },
    "忍": {
		"readings": ["にん", "ジン"],
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["フ"],
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
		"readings": ["チュウ"],
        "phonetic": "中",
        "type": "comp_phonetic"
    },
    "沢": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "秀": {
		"readings": [],
        "type": "unprocessed"
    },
    "肝": {
		"readings": ["かん"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "即": {
		"readings": [],
        "type": "unprocessed"
    },
    "芳": {
		"readings": ["ほう"],
        "phonetic": "方",
        "type": "comp_phonetic"
    },
    "辛": {
		"readings": ["シン"],
		"phonetic": "辛",
        "type": "hieroglyph"
    },
    "迎": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"phonetic": "卓",
        "type": "unknown"
    },
    "叔": {
		"readings": [],
        "type": "unprocessed"
    },
    "坪": {
		"readings": ["ヘイ"],
        "phonetic": "平",
        "type": "comp_phonetic"
    },
    "奇": {
		"readings": ["き"],
		"phonetic": "奇",
        "type": "unknown"
    },
    "奔": {
		"readings": [],
        "type": "unprocessed"
    },
    "姓": {
		"readings": ["セイ", "しょう"],
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
		"readings": ["クツ"],
		"phonetic": "屈",
        "type": "comp_indicative"
    },
    "岬": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
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
		"readings": ["キョ"],
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
        "type": "unprocessed"
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
		"readings": ["ほう"],
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
		"phonetic": "昆",
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
		"readings": ["こう"],
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
		"readings": ["ほう"],
        "phonetic": "包",
        "type": "comp_phonetic"
    },
    "炎": {
		"readings": ["えん"],
		"phonetic": "炎",
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
		"readings": ["じゃ", "シャ", "ヤ"],
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
		"readings": [],
        "type": "unprocessed"
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
        "phonetic": "巠",
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
		"readings": ["チュウ"],
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
		"readings": ["テイ", "チン"],
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
		"readings": [],
        "type": "unprocessed"
    },
    "咲": {
		"readings": ["しょう"],
        "phonetic": "关",
        "type": "comp_phonetic"
    },
    "垣": {
		"readings": [],
        "type": "unprocessed"
    },
    "契": {
		"readings": [],
        "type": "unprocessed"
    },
    "姻": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "拷": {
		"readings": ["ゴウ", "こう"],
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
		"phonetic": "是",
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
		"readings": ["ヘイ"],
        "phonetic": "丙",
        "type": "comp_phonetic"
    },
    "柳": {
		"readings": [],
        "type": "unprocessed"
    },
    "皆": {
		"readings": ["カイ"],
		"phonetic": "皆",
        "type": "comp_indicative"
    },
    "洪": {
		"readings": ["こう"],
        "phonetic": "共",
        "type": "comp_phonetic"
    },
    "浄": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["セイ"],
        "phonetic": "生",
        "type": "comp_phonetic"
    },
    "狭": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["エキ", "ヤク"],
        "phonetic": "役",
        "type": "comp_phonetic"
    },
    "柔": {
		"readings": [],
        "type": "unprocessed"
    },
    "砕": {
		"readings": ["サイ"],
        "phonetic": "卒",
        "type": "comp_phonetic"
    },
    "窃": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ゴウ", "こう"],
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
		"readings": ["けん"],
		"phonetic": "兼",
        "type": "comp_indicative"
    },
    "准": {
		"readings": ["じゅん", "しゅん"],
        "type": "unprocessed",
        "comment": "actually simplified form of 準"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["サイ"],
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
		"readings": ["シン"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "姫": {
		"readings": [],
        "type": "unprocessed"
    },
    "娘": {
		"readings": [],
        "type": "unprocessed"
    },
    "宴": {
		"readings": [],
        "type": "unprocessed"
    },
    "宰": {
		"readings": [],
        "type": "unprocessed"
    },
    "宵": {
		"readings": ["しょう"],
        "phonetic": "肖",
        "type": "comp_phonetic"
    },
    "峰": {
		"readings": [],
        "type": "unprocessed"
    },
    "貢": {
		"readings": ["こう", "く"],
        "phonetic": "工",
        "type": "comp_phonetic"
    },
    "唐": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "恭": {
		"readings": ["きょう"],
        "phonetic": "共",
        "type": "comp_phonetic"
    },
    "恵": {
		"readings": ["けい", "エ"],
        "type": "unprocessed"
    },
    "悟": {
		"readings": ["ご"],
        "phonetic": "吾",
        "type": "comp_phonetic"
    },
    "悩": {
		"readings": ["ノウ", "どう"],
        "type": "unprocessed",
        "comment": "TODO: obscure phonetic component 𡿺?"
    },
    "扇": {
		"readings": [],
        "type": "unprocessed"
    },
    "振": {
		"readings": ["シン"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "捜": {
		"readings": ["そう"],
        "type": "unprocessed"
    },
    "挿": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["かく"],
        "phonetic": "蜀",
        "type": "comp_phonetic"
    },
    "桟": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["しゅ"],
        "phonetic": "朱",
        "type": "comp_phonetic"
    },
    "殉": {
		"readings": [],
        "type": "unprocessed"
    },
    "浦": {
		"readings": ["ホ"],
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
		"readings": ["ヒン"],
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
		"readings": ["レツ"],
        "phonetic": "列",
        "type": "comp_phonetic"
    },
    "畜": {
		"readings": ["チク", "キク"],
        "type": "unprocessed"
    },
    "珠": {
		"readings": ["しゅ"],
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
        "type": "unprocessed",
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
        "type": "unprocessed"
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
		"readings": ["けん"],
        "phonetic": "干",
        "type": "comp_phonetic"
    },
    "辱": {
		"readings": ["ジョク", "ニク"],
        "type": "unprocessed"
    },
    "唇": {
		"readings": ["シン"],
        "phonetic": "辰",
        "type": "comp_phonetic"
    },
    "逝": {
		"readings": ["せい"],
        "phonetic": "折",
        "type": "comp_phonetic"
    },
    "逐": {
		"readings": ["チク", "ジク"],
        "type": "unprocessed"
    },
    "逓": {
		"readings": [],
        "type": "unprocessed"
    },
    "途": {
		"readings": ["ト", "ズ"],
        "phonetic": "余",
        "type": "comp_phonetic"
    },
    "透": {
		"readings": [],
        "type": "unprocessed"
    },
    "酌": {
		"readings": ["シャク"],
        "phonetic": "勺",
        "type": "comp_phonetic"
    },
    "陥": {
		"readings": [],
        "type": "unprocessed"
    },
    "陣": {
		"readings": ["じん", "ちん"],
        "type": "unprocessed",
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
		"readings": ["グウ"],
        "phonetic": "禺",
        "type": "comp_phonetic"
    },
    "偵": {
		"readings": [],
        "type": "unprocessed"
    },
    "偏": {
		"readings": ["ヘン"],
        "phonetic": "扁",
        "type": "comp_phonetic"
    },
    "剰": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["シツ", "しゅう"],
        "type": "comp_indicative"
    },
    "培": {
		"readings": [],
        "type": "unprocessed"
    },
    "堀": {
		"readings": ["クツ", "コツ"],
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
		"phonetic": "庶",
        "type": "comp_indicative"
    },
    "庸": {
		"readings": [],
        "type": "unprocessed"
    },
    "彩": {
		"readings": ["サイ"],
        "phonetic": "采",
        "type": "comp_phonetic"
    },
    "患": {
		"readings": [],
        "type": "unprocessed"
    },
    "惨": {
		"readings": ["サン", "ザン"],
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
		"readings": ["ハイ"],
        "phonetic": "非",
        "type": "comp_phonetic"
    },
    "描": {
		"readings": [],
        "type": "unprocessed"
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
		"phonetic": "曹",
        "type": "comp_indicative"
    },
    "殻": {
		"readings": [],
        "type": "unprocessed"
    },
    "貫": {
		"readings": [],
		"phonetic": "貫",
        "type": "unprocessed"
    },
    "涯": {
		"readings": ["ガイ"],
        "phonetic": "厓",
        "type": "comp_phonetic"
    },
    "渇": {
		"readings": [],
        "type": "unprocessed"
    },
    "渓": {
		"readings": ["けい"],
        "type": "unprocessed",
        "comment": "obscure phonetic 奚"
    },
    "渋": {
		"readings": ["じゅう", "しゅう"],
        "type": "unprocessed",
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
		"readings": ["タン"],
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
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "脱": {
		"readings": ["ダツ", "タツ"],
        "phonetic": "兌",
        "type": "comp_phonetic"
    },
    "豚": {
		"readings": [],
        "type": "unprocessed"
    },
    "舶": {
		"readings": ["ハク"],
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
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "逸": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["チン", "ジン"],
        "type": "comp_indicative"
    },
    "陶": {
		"readings": [],
        "type": "unprocessed"
    },
    "陪": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["テイ"],
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
		"phonetic": "幾",
        "type": "comp_indicative"
    },
    "廃": {
		"readings": [],
        "type": "unprocessed"
    },
    "廊": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ワク"],
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ギ", "き"],
        "phonetic": "其",
        "type": "comp_phonetic"
    },
    "殖": {
		"readings": ["しょく"],
        "phonetic": "直",
        "type": "comp_phonetic"
    },
    "渦": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ト"],
        "phonetic": "度",
        "type": "comp_phonetic"
    },
    "湾": {
		"readings": [],
        "type": "unprocessed"
    },
    "煮": {
		"readings": ["シャ"],
        "phonetic": "者",
        "type": "comp_phonetic"
    },
    "猶": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "絞": {
		"readings": ["こう"],
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
		"readings": ["ボ", "モ"],
        "phonetic": "莫",
        "type": "comp_phonetic"
    },
    "裕": {
		"readings": ["ゆう"],
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
        "type": "unprocessed"
    },
    "訴": {
		"readings": ["そ"],
        "phonetic": "斥",
        "type": "comp_phonetic"
    },
    "越": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "遅": {
		"readings": [],
        "type": "unprocessed"
    },
    "遍": {
		"readings": ["ヘン"],
        "phonetic": "扁",
        "type": "comp_phonetic"
    },
    "酢": {
		"readings": ["さく", "そ"],
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
        "type": "unprocessed"
    },
    "隅": {
		"readings": ["グウ"],
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
		"readings": ["サイ"],
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
		"readings": ["けん", "ゲン"],
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
		"readings": ["レン"],
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
		"readings": ["グ"],
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
        "type": "unprocessed"
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
		"readings": ["バク", "マク"],
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
		"readings": ["ガ"],
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
		"readings": ["チ"],
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
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed",
        "comment": "related to 断"
    },
    "腰": {
		"readings": ["よう"],
        "phonetic": "要",
        "type": "comp_phonetic"
    },
    "艇": {
		"readings": ["テイ"],
        "phonetic": "廷",
        "type": "comp_phonetic"
    },
    "蓄": {
		"readings": [],
        "type": "unprocessed"
    },
    "虞": {
		"readings": ["グ"],
        "phonetic": "呉",
        "type": "comp_phonetic",
        "comment": "related to 虞 reading?"
    },
    "虜": {
		"readings": ["リョ", "ロ"],
        "type": "unprocessed"
    },
    "褐": {
		"readings": [],
        "type": "unprocessed"
    },
    "裸": {
		"readings": ["ラ"],
        "phonetic": "果",
        "type": "comp_phonetic"
    },
    "触": {
		"readings": ["しょく", "そく"],
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
		"readings": ["せん"],
        "type": "unprocessed",
        "comment": "rare phonetic mark 戔, simplified"
    },
    "跳": {
		"readings": ["ちょう"],
        "phonetic": "兆",
        "type": "comp_phonetic"
    },
    "較": {
		"readings": ["かく", "こう"],
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
        "type": "unprocessed",
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
        "type": "unprocessed"
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
        "type": "unprocessed",
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
        "type": "unprocessed",
        "comment": "TODO: tone mark 厤?"
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
        "type": "unprocessed"
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
		"readings": ["ヒョウ"],
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
        "type": "unprocessed"
    },
    "綱": {
		"readings": ["こう"],
        "phonetic": "岡",
        "type": "comp_phonetic"
    },
    "緒": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "影": {
		"readings": [],
        "type": "unprocessed"
    },
    "鋭": {
		"readings": ["エイ"],
        "phonetic": "兌",
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
		"readings": ["ガ"],
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
		"readings": ["かん", "ゲン"],
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
		"readings": ["ギ"],
        "phonetic": "義",
        "type": "comp_phonetic"
    },
    "戯": {
		"readings": ["ギ", "ゲ"],
        "type": "unprocessed"
    },
    "擬": {
		"readings": ["ギ"],
        "phonetic": "疑",
        "type": "comp_phonetic"
    },
    "犠": {
		"readings": ["ギ", "き"],
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
		"readings": ["ギョウ"],
        "phonetic": "疑",
        "type": "comp_phonetic"
    },
    "緊": {
		"readings": [],
        "type": "unprocessed"
    },
    "襟": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "薫": {
		"readings": [],
        "type": "unprocessed"
    },
    "慶": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["けん", "ケ"],
        "type": "unprocessed",
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
        "type": "unprocessed",
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
		"readings": [],
        "type": "unprocessed"
    },
    "懇": {
		"readings": [],
        "type": "unprocessed"
    },
    "鎖": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
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
		"readings": ["シン"],
        "type": "unprocessed",
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
        "type": "unprocessed"
    },
    "髄": {
		"readings": [],
        "type": "unprocessed"
    },
    "澄": {
		"readings": [],
        "type": "unprocessed"
    },
    "瀬": {
		"readings": [],
        "type": "unprocessed"
    },
    "請": {
		"readings": ["セイ", "シン", "しょう"],
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
		"readings": [],
        "type": "unprocessed"
    },
    "遷": {
		"readings": [],
        "type": "unprocessed"
    },
    "鮮": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["ダク", "ジョク"],
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
		"readings": [],
        "type": "unprocessed"
    },
    "鋳": {
		"readings": [],
        "type": "unprocessed"
    },
    "駐": {
		"readings": ["チュウ", "チュ"],
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
		"readings": [],
        "type": "unprocessed"
    },
    "濃": {
		"readings": ["ノウ", "じょう"],
        "phonetic": "農",
        "type": "comp_phonetic"
    },
    "覇": {
		"readings": [],
        "type": "unprocessed"
    },
    "輩": {
		"readings": ["ハイ"],
        "phonetic": "非",
        "type": "comp_phonetic"
    },
    "賠": {
		"readings": [],
        "type": "unprocessed"
    },
    "薄": {
		"readings": ["ハク"],
        "phonetic": "溥",
        "type": "comp_phonetic"
    },
    "爆": {
		"readings": [],
        "type": "unprocessed"
    },
    "縛": {
		"readings": ["バク", "ハク"],
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
		"readings": ["ハン"],
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
		"readings": [],
		"phonetic": "賓",
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "譜": {
		"readings": [],
        "type": "unprocessed"
    },
    "賦": {
		"readings": [],
        "type": "unprocessed"
    },
    "舞": {
		"readings": ["ぶ", "む"],
        "phonetic": "無",
        "type": "comp_phonetic"
    },
    "覆": {
		"readings": ["ふく", "フ", "フウ"],
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
		"readings": ["ホ", "フ"],
        "phonetic": "甫",
        "type": "comp_phonetic"
    },
    "穂": {
		"readings": [],
        "type": "unprocessed"
    },
    "簿": {
		"readings": ["ボ", "ホ"],
        "phonetic": "溥",
        "type": "comp_phonetic"
    },
    "縫": {
		"readings": [],
        "type": "unprocessed"
    },
    "褒": {
		"readings": [],
        "type": "unprocessed"
    },
    "膨": {
		"readings": [],
        "type": "unprocessed"
    },
    "謀": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "磨": {
		"readings": [],
        "type": "unprocessed"
    },
    "魔": {
		"readings": [],
        "type": "unprocessed"
    },
    "繭": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["リ"],
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
        "type": "unprocessed"
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
		"phonetic": "岡",
        "type": "comp_indicative"
    },
    "頃": {
		"readings": ["けい", "きょう"],
        "type": "comp_indicative"
    },
    "奈": {
		"readings": ["な", "ない", "だい"],
        "type": "unprocessed",
        "comment": "TODO: using phonetic 示?"
    },
    "阪": {
		"readings": ["ハン"],
        "phonetic": "反",
        "type": "comp_phonetic"
    },
    "韓": {
		"readings": ["かん"],
        "type": "unprocessed"
    },
    "弥": {
		"readings": ["ビ", "ミ"],
        "type": "unprocessed",
        "comment": "obscure phonetic 爾"
    },
    "那": {
		"readings": [],
        "type": "unprocessed"
    },
    "鹿": {
		"readings": ["ロク"],
		"phonetic": "鹿",
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
		"readings": ["アン"],
        "phonetic": "音",
        "type": "comp_phonetic"
    },
    "籠": {
		"readings": [],
        "type": "unprocessed"
    },
    "呂": {
		"readings": [],
        "type": "unprocessed"
    },
    "亀": {
		"readings": [],
        "type": "unprocessed"
    },
    "頬": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["さ", "シャ"],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": ["レン"],
        "phonetic": "兼",
        "type": "comp_phonetic"
    },
    "凄": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "湧": {
		"readings": [],
        "type": "unprocessed"
    },
    "葛": {
		"readings": [],
        "type": "unprocessed"
    },
    "梨": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "乞": {
		"readings": [],
        "type": "unprocessed"
    },
    "呪": {
		"readings": ["ジュ", "しゅう"],
        "phonetic": "兄",
        "type": "comp_phonetic"
    },
    "汰": {
		"readings": [],
        "type": "unprocessed"
    },
    "勃": {
		"readings": [],
        "type": "unprocessed"
    },
    "昧": {
		"readings": ["マイ", "バイ"],
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
		"readings": ["チョ"],
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
		"readings": ["ト"],
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
		"readings": ["タイ"],
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
        "type": "unprocessed"
    },
    "骸": {
		"readings": ["ガイ", "カイ"],
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
		"readings": ["バ"],
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
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
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
		"phonetic": "牙",
        "type": "hieroglyph"
    },
    "咽": {
		"readings": [],
        "type": "unprocessed"
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
		"readings": [],
        "type": "unprocessed"
    },
    "溺": {
		"readings": ["デキ", "ニョウ", "じょう"],
        "phonetic": "弱",
        "type": "comp_phonetic"
    },
    "侶": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
    },
    "柵": {
		"readings": ["さく"],
        "phonetic": "冊",
        "type": "comp_phonetic"
    },
    "腎": {
		"readings": [],
        "type": "unprocessed"
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
        "type": "unprocessed"
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
		"readings": ["セン"],
        "phonetic": "泉",
        "type": "kokuji"
    },
    "桁": {
		"readings": ["こう"],
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
        "type": "unprocessed",
        "comment": "maybe 台"
    },
    "羞": {
		"readings": ["しゅう"],
        "type": "comp_indicative"
    },
    "惧": {
		"readings": ["グ", "く"],
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
        "type": "unprocessed",
        "comment": "phonetic 今?"
    },
    "采": {
		"readings": ["サイ"],
		"phonetic": "采",
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
		"readings": ["オウ"],
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
		"readings": ["ハン"],
		"phonetic": "氾",
        "type": "hieroglyph"
    },
    "諧": {
		"readings": ["カイ"],
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
		"readings": ["ヨク", "オク"],
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
		"readings": ["フ"],
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
    }
}
`);


/* List of all phonetic components here ... */
var phonetic_db = JSON.parse(`
{
    "七": {
        "readings": ["しち", "しつ"],
        "compounds": ["七", "叱", "切"],
        "non_compounds": [],
        "xrefs": []
    },
    "十": {
        "readings": ["じゅう", "しゅう"],
        "compounds": ["十", "汁", "針"],
        "non_compounds": ["計"],
        "xrefs": []
    },
    "土": {
        "readings": ["ト", "ド"],
        "compounds": ["土", "吐", "社"],
        "non_compounds": [],
        "xrefs": []
    },
    "大": {
        "readings": ["ダイ", "タイ"],
        "compounds": ["大", "戻"],
        "non_compounds": [],
        "xrefs": []
    },
    "子": {
        "readings": ["し", "ス"],
        "compounds": ["子", "字"],
        "non_compounds": [],
        "xrefs": []
    },
    "早": {
        "readings": ["そう"],
        "compounds": ["早", "草"],
        "non_compounds": [],
        "xrefs": []
    },
    "寸": {
        "readings": ["ソン", "スン"],
        "compounds": ["寸", "村"],
        "non_compounds": ["討", "耐"],
        "xrefs": []
    },
    "屯": {
        "readings": ["トン", "チュン", "ドン"],
        "compounds": ["屯", "討", "純", "春", "鈍", "頓"],
        "non_compounds": [],
        "xrefs": []
    },
    "丁": {
        "readings": ["ちょう", "テイ", "とう"],
        "compounds": ["丁", "庁", "灯", "町", "亭", "頂", "訂", "打"],
        "non_compounds": [],
        "xrefs": []
    },
    "化": {
        "readings": ["か", "ケ", "ゲ"],
        "compounds": ["化", "花", "貨", "靴"],
        "non_compounds": [],
        "xrefs": []
    },
    "見": {
        "readings": ["けん", "ゲン"],
        "compounds": ["見", "現"],
        "non_compounds": [],
        "xrefs": []
    },
    "貝": {
        "readings": ["バイ", "マイ"],
        "compounds": ["貝", "敗"],
        "non_compounds": ["買"],
        "xrefs": []
    },
    "赤": {
        "readings": ["せき", "シャク"],
        "compounds": ["赤", "赦"],
        "non_compounds": [],
        "xrefs": []
    },
    "足": {
        "readings": ["そく", "しょく"],
        "compounds": ["足", "促"],
        "non_compounds": [],
        "xrefs": []
    },
    "方": {
        "readings": ["ほう", "ぼう"],
        "compounds": ["方", "坊", "妨", "芳", "防", "放", "肪", "房", "紡", "訪"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "added ぼう, no reason found"
    },
    "古": {
        "readings": ["こ"],
        "compounds": ["古", "苦", "固", "故", "枯"],
        "non_compounds": [],
        "xrefs": []
    },
    "固": {
        "readings": ["こ"],
        "compounds": ["箇", "個"],
        "non_compounds": [],
        "xrefs": ["古"]
    },
    "生": {
        "readings": ["セイ", "しょう"],
        "compounds": ["生", "姓", "性", "牲", "星", "青"],
        "non_compounds": [],
        "xrefs": []
    },
    "青": {
        "readings": ["セイ", "しょう"],
        "compounds": ["青", "情", "清", "精", "請", "晴"],
        "non_compounds": [],
        "xrefs": ["生"]
    },
    "且": {
        "readings": ["しょ", "そ", "しょう"],
        "compounds": ["且", "助", "狙", "阻", "祖", "租", "組", "粗", "査"],
        "non_compounds": [],
        "xrefs": []
    },
    "各": {
        "readings": ["かく"],
        "compounds": ["各", "客", "格", "略", "絡", "路", "酪", "閣", "額"],
        "non_compounds": [],
        "xrefs": []
    },
    "主": {
        "readings": ["しゅ", "ス"],
        "compounds": ["主", "住", "注", "柱", "駐"],
        "non_compounds": [],
        "xrefs": []
    },
    "几": {
        "readings": ["き"],
        "compounds": ["机", "肌", "飢"],
        "non_compounds": [],
        "xrefs": []
    },
    "亡": {
        "readings": ["ぼう", "もう"],
        "compounds": ["亡", "妄", "忘", "盲", "忙", "望"],
        "non_compounds": [],
        "xrefs": []
    },
    "干": {
        "readings": ["かん"],
        "compounds": ["干", "刊", "汗", "肝", "岸", "幹", "軒"],
        "non_compounds": [],
        "xrefs": []
    },
    "己": {
        "readings": ["こ", "き"],
        "compounds": ["己", "妃", "忌", "紀", "記", "配", "改"],
        "non_compounds": [],
        "xrefs": []
    },
    "工": {
        "readings": ["こう", "く"],
        "compounds": ["工", "功", "江", "紅", "虹", "空", "貢", "攻"],
        "non_compounds": [],
        "xrefs": []
    },
    "及": {
        "readings": ["キュウ"],
        "compounds": ["及", "吸", "扱", "急", "級"],
        "non_compounds": [],
        "xrefs": []
    },
    "中": {
        "readings": ["チュウ"],
        "compounds": ["中", "仲", "沖", "忠", "衷"],
        "non_compounds": [],
        "xrefs": []
    },
    "反": {
        "readings": ["ハン","ホン","タン"],
        "compounds": ["反", "坂", "阪", "返", "板", "版", "販", "飯"],
        "non_compounds": [],
        "xrefs": []
    },
    "白": {
        "readings": ["ハク", "ビャク"],
        "compounds": ["白", "伯", "泊", "拍", "迫", "舶"],
        "non_compounds": [],
        "xrefs": []
    },
    "皮": {
        "readings": ["ヒ"],
        "compounds": ["皮", "披", "彼", "波", "破", "疲", "被"],
        "non_compounds": [],
        "xrefs": []
    },
    "包": {
        "readings": ["ほう"],
        "compounds": ["包", "砲", "飽", "抱", "泡", "胞"],
        "non_compounds": [],
        "xrefs": []
    },
    "可": {
        "readings": ["か", "こく"],
        "compounds": ["可", "何", "河", "苛"],
        "non_compounds": [],
        "xrefs": []
    },
    "司": {
        "readings": ["し", "す"],
        "compounds": ["司", "伺", "詞", "飼", "嗣"],
        "non_compounds": [],
        "xrefs": []
    },
    "召": {
        "readings": ["しょう"],
        "compounds": ["召", "招", "沼", "昭", "紹", "詔", "超"],
        "non_compounds": [],
        "xrefs": []
    },
    "寺": {
        "readings": ["じ"],
        "compounds": ["寺", "侍", "待", "持", "時", "特", "詩", "等"],
        "non_compounds": [],
        "xrefs": []
    },
    "圭": {
        "readings": ["けい"],
        "compounds": ["街", "掛"],
        "non_compounds": ["厓"],
        "xrefs": []
    },
    "交": {
        "readings": ["こう"],
        "compounds": ["交", "郊", "校", "絞", "較"],
        "non_compounds": ["効"],
        "xrefs": []
    },
    "我": {
        "readings": ["ガ"],
        "compounds": ["我", "餓"],
        "non_compounds": [],
        "xrefs": []
    },
    "義": {
        "readings": ["ギ"],
        "compounds": ["義", "儀", "犠", "議"],
        "non_compounds": [],
        "xrefs": []
    },
    "兪": {
        "readings": ["ゆ"],
        "compounds": ["愉", "喩", "癒", "諭", "輸"],
        "non_compounds": [],
        "xrefs": []
    },
    "由": {
        "readings": ["ゆ", "ゆう", "ユイ"],
        "compounds": ["由", "油", "宙", "笛", "軸"],
        "non_compounds": [],
        "xrefs": []
    },
    "莫": {
        "readings": ["バク", "マク", "ボ", "モ"],
        "compounds": ["募", "墓", "幕", "漠", "慕", "模", "膜", "暮"],
        "non_compounds": [],
        "xrefs": []
    },
    "小": {
        "readings": ["しょう"],
        "compounds": ["小", "肖"],
        "non_compounds": [],
        "xrefs": []
    },
    "肖": {
        "readings": ["しょう"],
        "compounds": ["肖", "削", "哨", "宵", "消", "硝"],
        "non_compounds": [],
        "xrefs": ["小"]
    },
    "山": {
        "readings": ["サン", "セン"],
        "compounds": ["山", "仙"],
        "non_compounds": [],
        "xrefs": []
    },
    "文": {
        "readings": ["ブン", "モン"],
        "compounds": ["文", "紋", "蚊"],
        "non_compounds": [],
        "xrefs": []
    },
    "王": {
        "readings": ["おう"],
        "compounds": ["王"],
        "non_compounds": ["旺"],
        "xrefs": []
    },
    "正": {
        "readings": ["セイ", "しょう"],
        "compounds": ["正", "征", "定", "政", "症", "証", "整"],
        "non_compounds": [],
        "xrefs": []
    },
    "出": {
        "readings": ["シュツ", "スイ"],
        "compounds": ["出", "拙"],
        "non_compounds": [],
        "xrefs": []
    },
    "左": {
        "readings": ["さ"],
        "compounds": ["左", "佐", "差"],
        "non_compounds": [],
        "xrefs": []
    },
    "石": {
        "readings": ["せき", "シャク", "こく", "ジャク"],
        "compounds": ["石", "拓", "妬"],
        "non_compounds": [],
        "xrefs": []
    },
    "立": {
        "readings": ["りつ", "リュウ"],
        "compounds": ["立", "位", "拉", "泣", "粒", "翌"],
        "non_compounds": [],
        "xrefs": []
    },
    "先": {
        "readings": ["セン"],
        "compounds": ["先", "洗", "銑"],
        "non_compounds": [],
        "xrefs": []
    },
    "名": {
        "readings": ["メイ", "ミョウ"],
        "compounds": ["名", "銘"],
        "non_compounds": [],
        "xrefs": []
    },
    "音": {
        "readings": ["おん", "いん"],
        "compounds": ["音", "暗", "闇"],
        "non_compounds": [],
        "xrefs": []
    },
    "才": {
        "readings": ["サイ"],
        "compounds": ["才", "材", "財"],
        "non_compounds": [],
        "xrefs": []
    },
    "内": {
        "readings": ["ナイ", "ダイ", "ノウ", "どう"],
        "compounds": ["内", "納"],
        "non_compounds": [],
        "xrefs": []
    },
    "午": {
        "readings": ["ご"],
        "compounds": ["午", "許"],
        "non_compounds": [],
        "xrefs": []
    },
    "元": {
        "readings": ["ゲン", "ガン"],
        "compounds": ["元", "玩", "頑"],
        "non_compounds": [],
        "xrefs": []
    },
    "今": {
        "readings": ["こん", "きん"],
        "compounds": ["今", "含", "吟", "念"],
        "non_compounds": [],
        "xrefs": []
    },
    "公": {
        "readings": ["こう", "く"],
        "compounds": ["公", "松", "翁", "訟"],
        "non_compounds": [],
        "xrefs": []
    },
    "戸": {
        "readings": ["こ"],
        "compounds": ["戸", "所", "雇"],
        "non_compounds": [],
        "xrefs": []
    },
    "止": {
        "readings": ["し"],
        "compounds": ["止", "企", "祉", "歯"],
        "non_compounds": [],
        "xrefs": []
    },
    "分": {
        "readings": ["フン", "ブン", "ブ"],
        "compounds": ["分", "盆", "貧", "粉", "紛", "雰", "頒"],
        "non_compounds": [],
        "xrefs": []
    },
    "少": {
        "readings": ["しょう"],
        "compounds": ["少", "秒"],
        "non_compounds": ["沙"],
        "xrefs": []
    },
    "半": {
        "readings": ["ハン"],
        "compounds": ["半", "伴", "判", "畔"],
        "non_compounds": [],
        "xrefs": []
    },
    "北": {
        "readings": ["ホク"],
        "compounds": ["北", "背"],
        "non_compounds": [],
        "xrefs": []
    },
    "兄": {
        "readings": ["けい", "きょう"],
        "compounds": ["兄", "呪", "況"],
        "non_compounds": ["祝"],
        "xrefs": []
    },
    "広": {
        "readings": ["こう"],
        "compounds": ["広", "拡", "鉱"],
        "non_compounds": [],
        "xrefs": []
    },
    "失": {
        "readings": ["シツ", "イツ"],
        "compounds": ["失", "迭", "秩"],
        "non_compounds": [],
        "xrefs": []
    },
    "矢": {
        "readings": ["し"],
        "compounds": ["矢", "疾"],
        "non_compounds": ["疑"],
        "xrefs": []
    },
    "会": {
        "readings": ["カイ", "エ"],
        "compounds": ["会", "絵"],
        "non_compounds": [],
        "xrefs": []
    },
    "合": {
        "readings": ["ゴウ", "ガッ", "カッ", "こう"],
        "compounds": ["合", "拾", "給", "答"],
        "non_compounds": [],
        "xrefs": []
    },
    "同": {
        "readings": ["どう"],
        "compounds": ["同", "洞", "筒", "銅", "胴"],
        "non_compounds": [],
        "xrefs": []
    },
    "米": {
        "readings": ["ベイ", "マイ", "メ"],
        "compounds": ["米", "迷"],
        "non_compounds": [],
        "xrefs": []
    },
    "迷": {
        "readings": ["メイ"],
        "compounds": ["迷", "謎"],
        "non_compounds": [],
        "xrefs": ["米"]
    },
    "考": {
        "readings": ["こう"],
        "compounds": ["考", "拷"],
        "non_compounds": [],
        "xrefs": []
    },
    "売": {
        "readings": ["バイ"],
        "compounds": ["売", "続", "読"],
        "non_compounds": [],
        "xrefs": []
    },
    "谷": {
        "readings": ["こく"],
        "compounds": ["谷", "俗", "浴", "容", "欲", "裕"],
        "non_compounds": [],
        "xrefs": []
    },
    "量": {
        "readings": ["りょう", "ろう"],
        "compounds": ["量", "糧"],
        "non_compounds": [],
        "xrefs": []
    },
    "制": {
        "readings": ["セイ"],
        "compounds": ["制", "製"],
        "non_compounds": [],
        "xrefs": []
    },
    "斤": {
        "readings": ["きん"],
        "compounds": ["斤", "近", "析", "祈"],
        "non_compounds": [],
        "xrefs": []
    },
    "里": {
        "readings": ["リ"],
        "compounds": ["里", "理", "裏"],
        "non_compounds": ["厘"],
        "xrefs": []
    },
    "東": {
        "readings": ["とう"],
        "compounds": ["東", "凍", "棟"],
        "non_compounds": [],
        "xrefs": []
    },
    "京": {
        "readings": ["きょう", "けい", "きん"],
        "compounds": ["京", "景", "鯨"],
        "non_compounds": [],
        "xrefs": []
    },
    "直": {
        "readings": ["チョク", "ジキ", "チ"],
        "compounds": ["直", "値", "植", "殖", "置"],
        "non_compounds": [],
        "xrefs": []
    },
    "未": {
        "readings": ["ミ", "ビ"],
        "compounds": ["未", "味", "妹", "昧", "魅"],
        "non_compounds": [],
        "xrefs": []
    },
    "占": {
        "readings": ["セン", "てん"],
        "compounds": ["占", "店", "貼", "粘", "点"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "added phonetic てん, but found no reason"
    },
    "明": {
        "readings": ["メイ", "ミョウ", "ミン"],
        "compounds": ["明", "盟"],
        "non_compounds": [],
        "xrefs": []
    },
    "歩": {
        "readings": ["ホ", "ブ", "フ"],
        "compounds": ["歩"],
        "non_compounds": ["頻", "渉"],
        "xrefs": []
    },
    "長": {
        "readings": ["ちょう"],
        "compounds": ["長", "帳", "張"],
        "non_compounds": [],
        "xrefs": []
    },
    "門": {
        "readings": ["モン", "ボン"],
        "compounds": ["門", "問", "聞"],
        "non_compounds": [],
        "xrefs": []
    },
    "是": {
        "readings": ["ゼ", "し", "テイ", "ダイ"],
        "compounds": ["是", "堤", "提", "題"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "added ダイ, テイ to readings, no source"
    },
    "象": {
        "readings": ["しょう", "ぞう"],
        "compounds": ["象", "像"],
        "non_compounds": [],
        "xrefs": []
    },
    "袁": {
        "readings": ["えん", "おん"],
        "compounds": ["遠", "園"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: missing compound info, search!"
    },
    "示": {
        "readings": ["じ", "し"],
        "compounds": ["示", "視"],
        "non_compounds": [],
        "xrefs": []
    },
    "秋": {
        "readings": ["しゅう"],
        "compounds": ["秋", "愁"],
        "non_compounds": [],
        "xrefs": []
    },
    "弱": {
        "readings": ["ジャク", "ニャク"],
        "compounds": ["弱", "溺"],
        "non_compounds": [],
        "xrefs": []
    },
    "朱": {
        "readings": ["しゅ", "ス"],
        "compounds": ["朱", "株", "殊", "珠"],
        "non_compounds": [],
        "xrefs": []
    },
    "甫": {
        "readings": ["ホ", "フ"],
        "compounds": ["浦", "捕", "補", "舗"],
        "non_compounds": [],
        "xrefs": []
    },
    "辰": {
        "readings": ["シン"],
        "compounds": ["唇", "娠", "振", "震"],
        "non_compounds": [],
        "xrefs": []
    },
    "良": {
        "readings": ["りょう", "ろう"],
        "compounds": ["良", "浪", "郎", "朗"],
        "non_compounds": [],
        "xrefs": []
    },
    "非": {
        "readings": ["ヒ"],
        "compounds": ["非", "俳", "排", "悲", "扉", "輩"],
        "non_compounds": ["罪"],
        "xrefs": []
    },
    "其": {
        "readings": ["き"],
        "compounds": ["期", "欺", "棋", "基", "旗"],
        "non_compounds": [],
        "xrefs": []
    },
    "巠": {
        "readings": ["けい"],
        "compounds": ["茎", "径", "経", "軽"],
        "non_compounds": [],
        "xrefs": []
    },
    "馬": {
        "readings": ["バ", "メ", "マ"],
        "compounds": ["馬", "罵"],
        "non_compounds": [],
        "xrefs": []
    },
    "高": {
        "readings": ["こう"],
        "compounds": ["高", "稿"],
        "non_compounds": [],
        "xrefs": []
    },
    "囟": {
        "readings": ["シン", "し"],
        "compounds": ["細", "思"],
        "non_compounds": [],
        "xrefs": []
    },
    "周": {
        "readings": ["しゅう", "ス"],
        "compounds": ["周", "彫", "週", "調"],
        "non_compounds": [],
        "xrefs": []
    },
    "予": {
        "readings": ["よ"],
        "compounds": ["予", "序", "野", "預"],
        "non_compounds": [],
        "xrefs": []
    },
    "昜": {
        "readings": ["よう"],
        "compounds": ["場", "陽", "瘍", "湯", "腸"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: incomplete info, search!"
    },
    "道": {
        "readings": ["どう", "とう"],
        "compounds": ["道", "導"],
        "non_compounds": [],
        "xrefs": []
    },
    "番": {
        "readings": ["バン", "ハン", "ハ"],
        "compounds": ["番", "翻"],
        "non_compounds": ["審"],
        "xrefs": []
    },
    "吾": {
        "readings": ["ご"],
        "compounds": ["悟", "語"],
        "non_compounds": [],
        "xrefs": []
    },
    "賓": {
        "readings": ["ヒン"],
        "compounds": ["賓", "浜"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO info missing, search!"
    },
    "卜": {
        "readings": ["ボク", "ホク"],
        "compounds": ["朴", "訃", "赴"],
        "non_compounds": [],
        "xrefs": []
    },
    "氾": {
        "readings": ["はん"],
        "compounds": ["氾", "範"],
        "non_compounds": [],
        "xrefs": []
    },
    "奇": {
        "readings": ["き"],
        "compounds": ["奇", "埼", "崎", "寄", "椅", "騎"],
        "non_compounds": [],
        "xrefs": []
    },
    "皆": {
        "readings": ["カイ"],
        "compounds": ["皆", "階", "諧"],
        "non_compounds": [],
        "xrefs": []
    },
    "不": {
        "readings": ["フ", "ブ"],
        "compounds": ["不", "杯"],
        "non_compounds": [],
        "xrefs": []
    },
    "加": {
        "readings": ["か"],
        "compounds": ["加", "架", "賀"],
        "non_compounds": [],
        "xrefs": []
    },
    "弋": {
        "readings": ["ヨク", "イキ"],
        "compounds": ["代", "式"],
        "non_compounds": [],
        "xrefs": []
    },
    "代": {
        "readings": [],
        "compounds": ["代", "袋", "貸"],
        "non_compounds": [],
        "xrefs": ["弋"]
    },
    "央": {
        "readings": ["オウ", "よう", "エイ"],
        "compounds": ["央", "英", "映"],
        "non_compounds": [],
        "xrefs": []
    },
    "勺": {
        "readings": ["シャク"],
        "compounds": ["勺", "約", "酌", "釣"],
        "non_compounds": [],
        "xrefs": []
    },
    "氐": {
        "readings": ["テイ", "タイ"],
        "compounds": ["低", "底", "抵", "邸"],
        "non_compounds": [],
        "xrefs": []
    },
    "兌": {
        "readings": ["ダ", "タイ", "エツ", "エイ"],
        "compounds": ["悦", "脱", "税", "説", "鋭"],
        "non_compounds": [],
        "xrefs": []
    },
    "曽": {
        "readings": ["そう", "ゾ",  "そ", "ぞう"],
        "compounds": ["贈", "僧", "増", "層", "噌", "憎"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search! TODO: 噌 not in joyo!"
    },
    "菐": {
        "readings": ["ホク", "ボク"],
        "compounds": ["撲", "僕"],
        "non_compounds": [],
        "xrefs": []
    },
    "取": {
        "readings": ["しゅ"],
        "compounds": ["取", "趣"],
        "non_compounds": [],
        "xrefs": []
    },
    "卓": {
        "readings": ["タク"],
        "compounds": ["卓", "悼"],
        "non_compounds": [],
        "xrefs": []
    },
    "昔": {
        "readings": ["せき", "シャク"],
        "compounds": ["昔", "借", "措", "錯"],
        "non_compounds": [],
        "xrefs": []
    },
    "具": {
        "readings": ["グ", "く"],
        "compounds": ["具", "惧"],
        "non_compounds": [],
        "xrefs": []
    },
    "台": {
        "readings": ["ダイ", "タイ"],
        "compounds": ["台"],
        "non_compounds": ["冶", "治", "始"],
        "xrefs": []
    },
    "申": {
        "readings": ["シン"],
        "compounds": ["申", "伸", "神", "紳"],
        "non_compounds": ["電"],
        "xrefs": []
    },
    "鹿": {
        "readings": ["ロク"],
        "compounds": ["鹿", "麓"],
        "non_compounds": [],
        "xrefs": []
    },
    "心": {
        "readings": ["シン"],
        "compounds": ["心", "芯"],
        "non_compounds": [],
        "xrefs": []
    },
    "全": {
        "readings": ["ゼン", "セン"],
        "compounds": ["全", "詮", "栓"],
        "non_compounds": [],
        "xrefs": []
    },
    "耳": {
        "readings": ["じ"],
        "compounds": ["耳", "餌", "恥"],
        "non_compounds": [],
        "xrefs": []
    },
    "𢦏": {
        "readings": ["サイ"],
        "compounds": ["災", "栽", "裁", "載", "戴"],
        "non_compounds": [],
        "xrefs": []
    },
    "原": {
        "readings": ["ゲン", "ガン", "ごん"],
        "compounds": ["原", "源", "願"],
        "non_compounds": [],
        "xrefs": []
    },
    "家": {
        "readings": ["か", "ケ"],
        "compounds": ["家", "嫁", "稼"],
        "non_compounds": [],
        "xrefs": []
    },
    "氏": {
        "readings": ["し"],
        "compounds": ["氏", "紙"],
        "non_compounds": [],
        "xrefs": []
    },
    "者": {
        "readings": ["シャ", "しょ"],
        "compounds": ["者", "都", "暑", "煮", "署", "箸", "諸", "書"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "added しょ, but found no reason"
    },
    "甬": {
        "readings": ["つう", "よう", "ゆう"],
        "compounds": ["通", "痛", "踊"],
        "non_compounds": [],
        "xrefs": []
    },
    "㕣": {
        "readings": ["えん"],
        "compounds": ["船", "沿", "鉛"],
        "non_compounds": [],
        "xrefs": ["兌"]
    },
    "黄": {
        "readings": ["こう", "オウ"],
        "compounds": ["黄", "横"],
        "non_compounds": [],
        "xrefs": ["広"]
    },
    "黒": {
        "readings": ["こく"],
        "compounds": ["黒", "墨", "黙"],
        "non_compounds": [],
        "xrefs": []
    },
    "朝": {
        "readings": ["ちょう"],
        "compounds": ["朝", "嘲", "潮"],
        "non_compounds": [],
        "xrefs": []
    },
    "間": {
        "readings": ["かん", "けん"],
        "compounds": ["間", "簡"],
        "non_compounds": [],
        "xrefs": []
    },
    "云": {
        "readings": ["ウン"],
        "compounds": ["芸", "雲", "魂"],
        "non_compounds": [],
        "xrefs": []
    },
    "果": {
        "readings": ["か"],
        "compounds": ["果", "菓", "裸", "課"],
        "non_compounds": [],
        "xrefs": []
    },
    "卒": {
        "readings": ["ソツ", "シュツ"],
        "compounds": ["卒", "砕", "粋"],
        "non_compounds": [],
        "xrefs": []
    },
    "列": {
        "readings": ["レツ"],
        "compounds": ["列", "例", "烈", "裂"],
        "non_compounds": [],
        "xrefs": []
    },
    "参": {
        "readings": ["サン", "シン"],
        "compounds": ["参", "惨"],
        "non_compounds": [],
        "xrefs": []
    },
    "官": {
        "readings": ["かん"],
        "compounds": ["官", "棺", "管", "館"],
        "non_compounds": [],
        "xrefs": []
    },
    "付": {
        "readings": ["フ"],
        "compounds": ["付", "府", "附", "符", "腐"],
        "non_compounds": [],
        "xrefs": []
    },
    "牙": {
        "readings": ["ガ", "ゲ"],
        "compounds": ["牙", "芽", "邪", "雅"],
        "non_compounds": [],
        "xrefs": []
    },
    "新": {
        "readings": ["シン"],
        "compounds": ["新", "薪"],
        "non_compounds": [],
        "xrefs": []
    },
    "楽": {
        "readings": ["ガク", "ラク", "ゴウ", "ギョウ"],
        "compounds": ["楽", "薬"],
        "non_compounds": [],
        "xrefs": []
    },
    "尞": {
        "readings": ["りょう"],
        "compounds": ["尞", "僚", "寮", "瞭"],
        "non_compounds": [],
        "xrefs": []
    },
    "泉": {
        "readings": ["セン"],
        "compounds": ["泉", "腺", "線"],
        "non_compounds": [],
        "xrefs": []
    },
    "辛": {
        "readings": ["シン"],
        "compounds": ["辛", "亲"],
        "non_compounds": [],
        "xrefs": []
    },
    "亲": {
        "readings": ["シン"],
        "compounds": ["親"],
        "non_compounds": [],
        "xrefs": ["辛"]
    },
    "豆": {
        "readings": ["とう", "ズ"],
        "compounds": ["豆", "短", "痘", "登", "頭"],
        "non_compounds": [],
        "xrefs": []
    },
    "彦": {
        "readings": ["ゲン"],
        "compounds": ["顔"],
        "non_compounds": [],
        "xrefs": []
    },
    "夫": {
        "readings": ["フ", "フウ", "ブ"],
        "compounds": ["夫", "扶"],
        "non_compounds": [],
        "xrefs": []
    },
    "史": {
        "readings": ["し"],
        "compounds": ["史", "使"],
        "non_compounds": [],
        "xrefs": []
    },
    "幸": {
        "readings": ["こう"],
        "compounds": ["幸"],
        "non_compounds": [],
        "xrefs": []
    },
    "畐": {
        "readings": ["ふく", "ヒョク", "ヒキ"],
        "compounds": ["富", "福", "副", "幅"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO incomplete, search !"
    },
    "次": {
        "readings": ["じ", "し"],
        "compounds": ["次", "姿", "茨", "恣", "資"],
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
        "readings": ["かん"],
        "compounds": ["貫", "慣"],
        "non_compounds": [],
        "xrefs": []
    },
    "賁": {
        "readings": ["ヒ", "ホン", "フン"],
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
        "compounds": ["雇", "顧"],
        "non_compounds": [],
        "xrefs": ["戸"]
    },
    "必": {
        "readings": ["ヒツ"],
        "compounds": ["必", "泌", "秘"],
        "non_compounds": [],
        "xrefs": []
    },
    "末": {
        "readings": ["マツ", "バツ"],
        "compounds": ["末", "抹"],
        "non_compounds": [],
        "xrefs": []
    },
    "昆": {
        "readings": ["こん"],
        "compounds": ["昆", "混"],
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
        "compounds": ["多", "移"],
        "non_compounds": [],
        "xrefs": []
    },
    "弗": {
        "readings": ["フツ", "ホツ"],
        "compounds": ["仏", "沸", "払"],
        "non_compounds": [],
        "xrefs": []
    },
    "丩": {
        "readings": ["キュウ"],
        "compounds": ["叫、糾"],
        "non_compounds": [],
        "xrefs": []
    },
    "冊": {
        "readings": ["サツ", "さく"],
        "compounds": ["冊", "柵"],
        "non_compounds": [],
        "xrefs": []
    },
    "区": {
        "readings": ["く", "オウ"],
        "compounds": ["区", "欧", "殴", "駆", "枢"],
        "non_compounds": [],
        "xrefs": []
    },
    "平": {
        "readings": ["ヘイ", "ビョウ", "ヒョウ"],
        "compounds": ["平", "坪", "評"],
        "non_compounds": [],
        "xrefs": []
    },
    "也": {
        "readings": ["ヤ"],
        "compounds": ["地", "池", "他", "施"],
        "non_compounds": [],
        "xrefs": []
    },
    "向": {
        "readings": ["こう", "きょう", "しょう"],
        "compounds": ["向", "尚"],
        "non_compounds": [],
        "xrefs": []
    },
    "州": {
        "readings": ["しゅう"],
        "compounds": ["州", "酬"],
        "non_compounds": [],
        "xrefs": []
    },
    "安": {
        "readings": ["アン"],
        "compounds": ["安", "案"],
        "non_compounds": [],
        "xrefs": []
    },
    "羊": {
        "readings": ["よう", "しょう", "じょう"],
        "compounds": ["羊", "洋", "祥", "詳", "養"],
        "non_compounds": [],
        "xrefs": []
    },
    "有": {
        "readings": ["ゆう", "ウ"],
        "compounds": ["有", "賄"],
        "non_compounds": [],
        "xrefs": []
    },
    "君": {
        "readings": ["クン"],
        "compounds": ["君", "郡", "群"],
        "non_compounds": [],
        "xrefs": []
    },
    "役": {
        "readings": ["ヤク", "エキ"],
        "compounds": ["役", "疫"],
        "non_compounds": [],
        "xrefs": []
    },
    "九": {
        "readings": ["きゅう", "く"],
        "compounds": ["九", "尻", "究", "軌"],
        "non_compounds": [],
        "xrefs": []
    },
    "永": {
        "readings": ["エイ", "よう"],
        "compounds": ["永", "泳", "詠"],
        "non_compounds": [],
        "xrefs": []
    },
    "乍": {
        "readings": ["さ", "さく", "じゃ"],
        "compounds": ["詐", "作", "昨", "酢"],
        "non_compounds": [],
        "xrefs": []
    },
    "巨": {
        "readings": ["キョ", "こ"],
        "compounds": ["巨", "拒", "距"],
        "non_compounds": [],
        "xrefs": []
    },
    "吉": {
        "readings": ["キチ", "キツ"],
        "compounds": ["吉", "結", "詰"],
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
        "compounds": ["兆", "挑", "逃", "桃", "眺", "跳"],
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
        "compounds": ["則", "側", "測", "賊"],
        "non_compounds": [],
        "xrefs": []
    },
    "章": {
        "readings": ["しょう"],
        "compounds": ["章", "彰", "障"],
        "non_compounds": [],
        "xrefs": []
    },
    "呉": {
        "readings": ["ご"],
        "compounds": ["呉", "娯", "誤", "虞"],
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
        "readings": ["ガイ", "カイ"],
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
        "compounds": ["蔵", "臓"],
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
        "compounds": ["余", "徐", "途", "除", "斜"],
        "non_compounds": [],
        "xrefs": []
    },
    "厓": {
        "readings": ["ガイ"],
        "compounds": ["涯", "崖"],
        "non_compounds": [],
        "xrefs": []
    },
    "扁": {
        "readings": ["ヘン", "ハン"],
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
        "readings": ["しょく", "し", "シキ"],
        "compounds": ["職", "識", "織"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "郷": {
        "readings": ["きょう", "ゴウ"],
        "compounds": ["郷", "響"],
        "non_compounds": [],
        "xrefs": []
    },
    "疑": {
        "readings": ["ギ"],
        "compounds": ["疑", "凝", "擬"],
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
        "readings": ["けい", "セン"],
        "compounds": ["還", "環"],
        "non_compounds": [],
        "xrefs": []
    },
    "堇": {
        "readings": ["きん"],
        "compounds": ["僅", "勤", "謹", "難"],
        "non_compounds": [],
        "xrefs": []
    },
    "刃": {
        "readings": ["ジン", "にん"],
        "compounds": ["刃", "忍"],
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
        "readings": ["テイ"],
        "compounds": ["庭", "艇"],
        "non_compounds": [],
        "xrefs": []
    },
    "要": {
        "readings": ["よう"],
        "compounds": ["要", "腰"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "票": {
        "readings": ["ヒョウ"],
        "compounds": ["票", "漂", "標"],
        "non_compounds": [],
        "xrefs": []
    },
    "尚": {
        "readings": ["しょう"],
        "compounds": ["尚", "堂", "常", "掌", "当", "賞", "党"],
        "non_compounds": [],
        "xrefs": ["向"]
    },
    "度": {
        "readings": ["ド", "ト", "タク"],
        "compounds": ["度", "渡"],
        "non_compounds": [],
        "xrefs": []
    },
    "于": {
        "readings": ["ウ"],
        "compounds": ["宇", "芋", "汚"],
        "non_compounds": [],
        "xrefs": []
    },
    "比": {
        "readings": ["ヒ", "ビ"],
        "compounds": ["比", "批"],
        "non_compounds": [],
        "xrefs": []
    },
    "厶": {
        "readings": ["し", "ぼう", "ム"],
        "compounds": ["私"],
        "non_compounds": ["仏", "払"],
        "xrefs": []
    },
    "厷": {
        "readings": ["こう", "ゆう"],
        "phonetic": "厷",
        "compounds": ["厷", "雄"],
        "non_compounds": [],
        "xrefs": []
    },
    "共": {
        "readings": ["きょう", "く", "クウ", "グ"],
        "compounds": ["共", "供", "洪", "恭"],
        "non_compounds": [],
        "xrefs": []
    },
    "兼": {
        "readings": ["けん"],
        "compounds": ["兼", "嫌", "廉", "鎌", "謙"],
        "non_compounds": [],
        "xrefs": []
    },
    "勿": {
        "readings": ["ブツ", "モツ", "モチ"],
        "compounds": ["物"],
        "non_compounds": [],
        "xrefs": []
    },
    "委": {
        "readings": ["い"],
        "compounds": ["委", "萎"],
        "non_compounds": [],
        "xrefs": []
    },
    "行": {
        "readings": ["こう", "ギョウ", "アン"],
        "compounds": ["行", "衡", "桁"],
        "non_compounds": [],
        "xrefs": []
    },
    "玄": {
        "readings": ["ゲン"],
        "compounds": ["玄", "弦", "舷"],
        "non_compounds": [],
        "xrefs": []
    },
    "采": {
        "readings": ["サイ"],
        "compounds": ["采", "彩", "採", "菜"],
        "non_compounds": [],
        "xrefs": []
    },
    "朮": {
        "readings": ["ジュツ", "シュツ", "チュツ"],
        "compounds": ["述", "術"],
        "non_compounds": [],
        "xrefs": []
    },
    "受": {
        "readings": ["ジュ", "ズ"],
        "compounds": ["受", "授"],
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
        "readings": ["ヤ"],
        "compounds": ["夜", "液"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "敄": {
        "readings": ["ブ", "ム"],
        "compounds": ["務"],
        "non_compounds": [],
        "xrefs": []
    },
    "務": {
        "readings": ["ム", "ブ"],
        "compounds": ["務", "霧"],
        "non_compounds": [],
        "xrefs": ["敄"]
    },
    "熒": {
        "readings": ["エイ", "エイ", "ギョウ"],
        "compounds": ["労", "栄", "蛍", "営"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO no list, search"
    },
    "复": {
        "readings": ["ふく", "フウ", "ブク", "ブ"],
        "compounds": ["復", "腹", "複", "覆"],
        "non_compounds": [],
        "xrefs": ["畐"],
        "comment": "TODO: no list, search!"
    },
    "咸": {
        "readings": ["かん", "ゲン"],
        "compounds": ["減", "感"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "感": {
        "readings": ["かん"],
        "compounds": ["感", "憾"],
        "non_compounds": [],
        "xrefs": ["咸"]
    },
    "或": {
        "readings": ["ワク", "こく", "ヨク"],
        "compounds": ["域", "惑"],
        "non_compounds": [],
        "xrefs": []
    },
    "幾": {
        "readings": ["き"],
        "compounds": ["幾", "機", "畿"],
        "non_compounds": [],
        "xrefs": []
    },
    "責": {
        "readings": ["せき", "シャク"],
        "compounds": ["責", "積", "債", "漬", "績", "跡"],
        "non_compounds": [],
        "xrefs": ["朿"],
        "comment": "TODO: no list, search"
    },
    "侖": {
        "readings": ["リン"],
        "compounds": ["輪", "論", "倫"],
        "non_compounds": [],
        "xrefs": []
    },
    "巽": {
        "readings": ["ソン"],
        "compounds": ["選"],
        "non_compounds": [],
        "xrefs": []
    },
    "彔": {
        "readings": ["ロク"],
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
        "compounds": ["重", "動", "腫", "種", "衝"],
        "non_compounds": [],
        "xrefs": []
    },
    "童": {
        "readings": ["どう", "とう", "じゅう", "ちょう"],
        "compounds": ["童", "憧", "鐘"],
        "non_compounds": [],
        "xrefs": ["重"]
    },
    "𠬝": {
        "readings": ["ふく", "フウ"],
        "compounds": ["服"],
        "non_compounds": ["報"],
        "xrefs": []
    },
    "旨": {
        "readings": ["し", "けい"],
        "compounds": ["旨", "指", "脂", "詣", "稽"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "two different components with the same look, just merge"
    },
    "相": {
        "readings": ["そう", "しょう"],
        "compounds": ["相", "想", "箱", "霜"],
        "non_compounds": [],
        "xrefs": []
    },
    "介": {
        "readings": ["カイ"],
        "compounds": ["介", "界"],
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
        "compounds": ["升", "昇"],
        "non_compounds": [],
        "xrefs": []
    },
    "尼": {
        "readings": ["ニ", "じ"],
        "compounds": ["尼", "泥"],
        "non_compounds": [],
        "xrefs": []
    },
    "炎": {
        "readings": ["えん", "たん"],
        "compounds": ["炎", "淡", "談"],
        "non_compounds": [],
        "xrefs": []
    },
    "喬": {
        "readings": ["きょう", "ギョウ"],
        "compounds": ["橋", "矯"],
        "non_compounds": [],
        "xrefs": []
    },
    "敬": {
        "readings": ["けい", "きょう"],
        "compounds": ["敬", "警", "驚"],
        "non_compounds": [],
        "xrefs": []
    },
    "丙": {
        "readings": ["ヘイ"],
        "compounds": ["丙", "柄", "病"],
        "non_compounds": [],
        "xrefs": []
    },
    "㐬": {
        "readings": ["リュウ", "ル"],
        "compounds": ["硫", "流"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: no list, search!"
    },
    "㫃": {
        "readings": ["リョ", "ロ"],
        "compounds": ["旅"],
        "non_compounds": ["旋", "施", "旗", "族"],
        "xrefs": [],
        "comment": "no list, search, limited info!"
    },
    "民": {
        "readings": ["ミン"],
        "compounds": ["民", "眠"],
        "non_compounds": [],
        "xrefs": []
    },
    "栗": {
        "readings": ["りつ", "リ"],
        "compounds": ["慄"],
        "non_compounds": [],
        "xrefs": []
    },
    "岡": {
        "readings": ["こう"],
        "compounds": ["岡", "綱", "鋼", "剛"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "TODO: incomplete list, search!"
    },
    "罔": {
        "readings": ["もう", "ぼう", "ム"],
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
        "readings": ["ジン", "にん"],
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
        "readings": ["チ"],
        "compounds": ["知", "痴"],
        "non_compounds": [],
        "xrefs": []
    },
    "弟": {
        "readings": ["テイ", "ダイ", "デ"],
        "compounds": ["弟", "第"],
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
        "readings": ["クツ"],
        "compounds": ["屈", "掘", "堀", "窟"],
        "non_compounds": [],
        "xrefs": []
    },
    "尃": {
        "readings": ["フ", "ハク"],
        "compounds": ["敷", "博", "縛"],
        "non_compounds": [],
        "xrefs": []
    },
    "溥": {
        "readings": ["フ", "ハク"],
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
    "屋": {
        "readings": ["オク"],
        "compounds": ["屋", "握"],
        "non_compounds": [],
        "xrefs": []
    },
    "疋": {
        "readings": ["しょ", "そ", "ヒキ", "ヒツ"],
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
        "compounds": ["庶", "遮"],
        "non_compounds": [],
        "xrefs": []
    },
    "曹": {
        "readings": ["そう", "ぞう"],
        "compounds": ["曹", "遭", "槽"],
        "non_compounds": [],
        "xrefs": [],
        "comment": "no list, search!"
    },
    "農": {
        "readings": ["ノウ"],
        "compounds": ["農", "濃"],
        "non_compounds": [],
        "xrefs": []
    },
    "乇": {
        "readings": ["タク", "チャク"],
        "compounds": ["宅", "託"],
        "non_compounds": [],
        "xrefs": []
    },
    "禺": {
        "readings": ["グ", "グウ"],
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
    "垔": {
        "readings": ["いん", "えん"],
        "compounds": ["煙"],
        "non_compounds": [],
        "xrefs": []
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
        "compounds": ["口", "句"],
        "non_compounds": [],
        "xrefs": []
    },
    "句": {
        "readings": ["く", "こう"],
        "compounds": ["句", "拘", "駒"],
        "non_compounds": [],
        "xrefs": ["口"]
    },
    "無": {
        "readings": ["む", "ぶ"],
        "compounds": ["無", "舞"],
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
        "compounds": ["侯", "候"],
        "non_compounds": [],
        "xrefs": []
    },
    "斥": {
        "readings": ["せき"],
        "compounds": ["斥", "訴"],
        "non_compounds": [],
        "xrefs": []
    },
    "旦": {
        "readings": ["たん"],
        "compounds": ["旦", "但", "胆", "担"],
        "non_compounds": [],
        "xrefs": []
    },
    "延": {
        "readings": ["えん"],
        "compounds": ["延", "誕"],
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
        "compounds": ["折", "哲", "逝", "誓"],
        "non_compounds": [],
        "xrefs": []
    },
    "単": {
        "readings": ["たん", "ぜん"],
        "compounds": ["単", "弾", "憚", "禅", "戦"],
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
        "compounds": ["争"],
        "non_compounds": [],
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
        "non_compounds": ["准", "隻", "集", "隼", "雇", "雄", "焦", "雅", "雌", "維", "難"],
        "xrefs": []
    },
    "隼": {
        "readings": ["しゅん", "じゅん"],
        "compounds": ["準", "准"],
        "non_compounds": [],
        "xrefs": []
    },
    "集": {
        "readings": ["しゅう"],
        "compounds": ["集", "雑"],
        "non_compounds": [],
        "xrefs": ["隹"]
    },
    "崔": {
        "readings": ["がい", "さい", "すい"],
        "compounds": ["催"],
        "non_compounds": [],
        "xrefs": ["隹"]
    },
    "焦": {
        "readings": ["しょう"],
        "compounds": ["焦", "礁"],
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
        "xrefs": []
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


    "": {
        "readings": [],
        "compounds": [],
        "non_compounds": [],
        "xrefs": []
    }
}
`);


/*
 * Notes stack
 *
 * 静荷
 *
 * Indicative component: 言殳
 */
