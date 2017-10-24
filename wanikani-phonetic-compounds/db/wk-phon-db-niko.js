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

var kanji_db = [
    /* List of all joyo kanji here ... */

    /* G1 */
    {
        kanji: "一", readings: ["いち", "いつ"],
        type: KTypeEnum.indicative,
    },
    {
        kanji: "九", readings: ["きゅう", "く"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "七", readings: ["しち", "しつ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "二", readings: ["ニ", "ジ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "人", readings: ["ジン", "ニン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "入", readings: ["ニュウ", "ジュ", "ジュウ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "八", readings: ["ハチ", "ハツ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "力", readings: ["リョク", "リキ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "十", readings: ["ジュウ", "ジッ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "下", readings: ["か", "げ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "三", readings: ["サン"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "千", readings: ["せん"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "上", readings: ["ジョウ", "ショウ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "口", readings: ["コウ", "ク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "土", readings: ["ト", "ド"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "夕", readings: ["セキ", "シャク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "大", readings: ["ダイ", "タイ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "女", readings: ["ジョ", "ニョ", "ニョウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "子", readings: ["シ", "ス"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "小", readings: ["ショウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "山", readings: ["サン", "セン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "川", readings: ["セン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "五", readings: ["ゴ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "天", readings: ["テン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "中", readings: ["チュウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "六", readings: ["ロク", "リク"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "円", readings: ["えん"],
        type: KTypeEnum.derivative
    },
    {
        kanji: "手", readings: ["シュ", "ズ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "文", readings: ["ブン", "モン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "日", readings: ["ジツ", "ニチ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "月", readings: ["ゲツ", "ガツ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "木", readings: ["モク", "ボク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "水", readings: ["スイ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "火", readings: ["カ", "コ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "犬", readings: ["ケン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "王", readings: ["オウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "正", readings: ["セイ", "ショウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "出", readings: ["シュツ", "スイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "本", readings: ["ホン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "右", readings: ["ウ", "ユウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "四", readings: ["シ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "左", readings: ["サ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "玉", readings: ["ギョク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "生", readings: ["セイ", "ショウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "田", readings: ["デン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "白", readings: ["ハク", "ビャク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "目", readings: ["モク", "ボク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "石", readings: ["セキ", "シャク", "コク", "ジャク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "立", readings: ["リツ", "リュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "百", readings: ["ヒャク", "ハク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "年", readings: ["ネン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "休", readings: ["キュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "先", readings: ["セン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "名", readings: ["メイ", "ミョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "字", readings: ["ジ"],
        phonetic: "子", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "早", readings: ["ソウ", "サッ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "気", readings: ["き", "け"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "竹", readings: ["チク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "糸", readings: ["し"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "耳", readings: ["じ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "虫", readings: ["チュウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "村", readings: ["ソン"], // originally 屯, but looks like kanjou
        phonetic: "寸", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "男", readings: ["ダン", "ナン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "町", readings: ["チョウ", "テイ"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "花", readings: ["カ", "ケ"],
        phonetic: "化", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "見", readings: ["ケン", "ゲン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "貝", readings: ["バイ", "マイ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "赤", readings: ["セキ", "シャク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "足", readings: ["ソク", "ショク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "車", readings: ["シャ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "学", readings: ["ガク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "林", readings: ["リン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "空", readings: ["クウ"],
        phonetic: "工", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "金", readings: ["キン", "コン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雨", readings: ["ウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "青", readings: ["セイ", "ショウ"],
        phonetic: "生", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "草", readings: ["そう"],
        phonetic: "早", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "音", readings: ["オン", "イン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "校", readings: ["コウ", "キョウ"],
        phonetic: "交", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "森", readings: ["シン"],
        type: KTypeEnum.comp_indicative
    },

    /* G2 */

    {
        kanji: "刀", readings: ["トウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "万", readings: ["まん", "ばん"],
        type: KTypeEnum.derivative
    },
    {
        kanji: "丸", readings: ["ガン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "才", readings: ["サイ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "工", readings: ["コウ", "ク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "弓", readings: ["キュウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "内", readings: ["ナイ", "ダイ", "ノウ", "ドウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "午", readings: ["ゴ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "少", readings: ["しょう"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "元", readings: ["ゲン", "ガン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "今", readings: ["コン", "キン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "公", readings: ["コウ", "ク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "分", readings: ["フン","ブン","ブ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "切", readings: ["セツ","セイ","サイ"],
        phonetic: "七", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "友", readings: ["ユウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "太", readings: ["タイ", "タ", "ダイ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "引", readings: ["イン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "心", readings: ["シン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "戸", readings: ["コ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "方", readings: ["ホウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "止", readings: ["シ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "毛", readings: ["モウ", "ボウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "父", readings: ["フ", "ホ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "牛", readings: ["ギュウ", "ゴ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "半", readings: ["ハン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "市", readings: ["シ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "北", readings: ["ホク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "古", readings: ["コ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "台", readings: ["ダイ", "タイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "兄", readings: ["ケイ", "キョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "冬", readings: ["トウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "外", readings: ["ガイ", "ゲ", "ウイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "広", readings: ["コウ"],
        phonetic: "黄", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "母", readings: ["ボ", "モ", "ボウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "用", readings: ["ヨウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "矢", readings: ["シ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "交", readings: ["コウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "会", readings: ["カイ", "エ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "合", readings: ["ゴウ", "ガッ", "カッ", "コウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "同", readings: ["ドウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "回", readings: ["カイ", "エ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "寺", readings: ["ジ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "地", readings: ["チ", "ジ"],
        phonetic: "也", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "多", readings: ["た"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "光", readings: ["コウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "当", readings: ["とう"],
        phonetic: "尚", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "毎", readings: ["マイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "池", readings: ["チ"],
        phonetic: "也", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "米", readings: ["ベイ", "マイ", "メ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "羽", readings: ["ウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "考", readings: ["コウ"],  // TODO: phonetic compound of 丂
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肉", readings: ["ニク", "ジク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "自", readings: ["ジ", "シ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "色", readings: ["ショク", "シキ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "行", readings: ["コウ", "ギョウ", "アン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "西", readings: ["セイ", "サイ", "スイ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "来", readings: ["ライ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "何", readings: ["カ"],
        phonetic: "可", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "作", readings: ["サク", "サ"],
        phonetic: "乍", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "体", readings: ["タイ", "テイ"],  // TODO: phonetic of 豊
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弟", readings: ["テイ", "ダイ", "デ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "図", readings: ["ズ", "ト"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "声", readings: ["セイ", "ショウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "売", readings: ["バイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "形", readings: ["ケイ", "ギョウ"], // TODO phonetic 开
        type: KTypeEnum.no_clue
    },
    {
        kanji: "汽", readings: ["キ"],  // TODO phonetic 气
        type: KTypeEnum.no_clue
    },
    {
        kanji: "社", readings: ["シャ", "ジャ"],
        phonetic: "土", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "角", readings: ["カク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "言", readings: ["ゲン", "ゴン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "谷", readings: ["コク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "走", readings: ["ソウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "近", readings: ["キン", "コン"],
        phonetic: "斤", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "里", readings: ["リ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "麦", readings: ["バク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "画", readings: ["ガ", "カク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "東", readings: ["トウ"],
        type: KTypeEnum.borrowing
    },
    {
        kanji: "京", readings: ["キョウ", "ケイ", "キン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "夜", readings: ["ヤ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "直", readings: ["チョク", "ジキ", "チ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "国", readings: ["コク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "姉", readings: ["シ"],  // TODO: obscure phonetic 𠂔
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妹", readings: ["マイ", "バイ"],
        phonetic: "未", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "岩", readings: ["ガン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "店", readings: ["テン"],
        phonetic: "占", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "明", readings: ["メイ", "ミョウ", "ミン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "歩", readings: ["ホ", "ブ", "フ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "知", readings: ["チ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "長", readings: ["チョウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "門", readings: ["モン", "ボン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "昼", readings: ["チュウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "前", readings: ["ゼン", "セン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "南", readings: ["ナン", "ナ", "ダン"],
        type: KTypeEnum.borrowing
    },
    {
        kanji: "点", readings: ["てん"],
        phonetic: "占", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "室", readings: ["シツ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "後", readings: ["ゴ", "コウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "春", readings: ["シュン"],
        phonetic: "屯", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "星", readings: ["セイ", "ショウ"],
        phonetic: "生", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "海", readings: ["カイ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "活", readings: ["カツ"], // TODO phonetic of an obscure component
        type: KTypeEnum.no_clue
    },
    {
        kanji: "思", readings: ["シ"],
        phonetic: "囟", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "科", readings: ["カ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "秋", readings: ["シュウ"], // TODO phonetic of an obscure component
        type: KTypeEnum.no_clue
    },
    {
        kanji: "茶", readings: ["チャ", "サ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "計", readings: ["ケイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "風", readings: ["フウ", "フ"],  // TODO: maybe phonetic of 凡
        type: KTypeEnum.no_clue
    },
    {
        kanji: "食", readings: ["ショク", "ジキ", "シ"],  // TODO phonetic 亼? Seems strange
        type: KTypeEnum.no_clue
    },
    {
        kanji: "首", readings: ["シュ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "夏", readings: ["カ", "ゲ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "弱", readings: ["ジャク", "ニャク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "原", readings: ["ゲン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "家", readings: ["カ", "ケ"],
        type: KTypeEnum.derivative
    },
    {
        kanji: "帰", readings: ["キ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "時", readings: ["ジ"],
        phonetic: "寺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "紙", readings: ["シ"],
        phonetic: "氏", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "書", readings: ["ショ"],
        phonetic: "者", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "記", readings: ["キ"],
        phonetic: "己", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "通", readings: ["ツウ", "ツ"],
        phonetic: "甬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "馬", readings: ["バ", "メ", "マ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "高", readings: ["こう"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "強", readings: ["キョウ", "ゴウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "教", readings: ["キョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "理", readings: ["リ"],
        phonetic: "里", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "細", readings: ["サイ"],
        phonetic: "囟", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "組", readings: ["そ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "船", readings: ["セン"],
        phonetic: "㕣", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "週", readings: ["シュウ"],
        phonetic: "周", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "野", readings: ["ヤ", "ショ"],
        phonetic: "予", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "雪", readings: ["セツ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "魚", readings: ["ギョ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "鳥", readings: ["チョウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "黄", readings: ["コウ", "オウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "黒", readings: ["コク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "場", readings: ["ジョウ"],
        phonetic: "昜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "晴", readings: ["セイ"],
        phonetic: "青", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "答", readings: ["トウ"],
        phonetic: "合", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "絵", readings: ["カイ", "エ"],
        phonetic: "会", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "買", readings: ["バイ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "朝", readings: ["チョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "道", readings: ["ドウ", "トウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "番", readings: ["バン", "ハン", "ハ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "間", readings: ["カン", "ケン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "雲", readings: ["ウン"],
        phonetic: "云", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "園", readings: ["エン", "オン"],
        phonetic: "袁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "数", readings: ["スウ", "ス", "シュ", "サク", "ソク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "新", readings: ["シン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "楽", readings: ["ガク", "ラク", "ゴウ", "ギョウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "話", readings: ["ワ"],  // obscure pcomp 䛡
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遠", readings: ["エン", "オン"],
        phonetic: "袁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "電", readings: ["デン", "テン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "鳴", readings: ["メイ", "ミョウ"],  // TODO NOT phonetic 鳥
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "歌", readings: ["カ"], // phonetic mark 哥
        type: KTypeEnum.no_clue
    },
    {
        kanji: "算", readings: ["サン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "語", readings: ["ゴ"],
        phonetic: "吾", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "読", readings: ["ドク", "トク", "トウ"],
        phonetic: "売", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "聞", readings: ["ブン", "モン"],
        phonetic: "門", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "線", readings: ["セン"],
        phonetic: "泉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "親", readings: ["シン"],
        phonetic: "亲", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "頭", readings: ["トウ", "ズ", "ト", "ジュウ"],
        phonetic: "豆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "曜", readings: ["ヨウ"],  // from obscure pmark 翟
        type: KTypeEnum.no_clue
    },
    {
        kanji: "顔", readings: ["ガン", "ゲン"],
        phonetic: "彦", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },

    /* G3 */

    {
        kanji: "丁", readings: ["チョウ", "テイ", "トウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "予", readings: ["よ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "化", readings: ["カ", "ケ", "ゲ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "区", readings: ["ク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "反", readings: ["ハン","ホン","タン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "央", readings: ["オウ", "ヨウ", "エイ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "平", readings: ["ヘイ", "ビョウ", "ヒョウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "申", readings: ["シン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "世", readings: ["セイ", "セ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "由", readings: ["ユ", "ユウ", "ユイ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "氷", readings: ["ヒョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "主", readings: ["シュ", "ス"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "仕", readings: ["シ", "ジ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "他", readings: ["タ"],
        phonetic: "也", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "代", readings: ["ダイ", "タイ"],
        phonetic: "弋", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "写", readings: ["シャ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "号", readings: ["ゴウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "去", readings: ["キョ", "コ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "打", readings: ["ダ", "チョウ", "テイ"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "皮", readings: ["ヒ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "皿", readings: ["ベイ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "礼", readings: ["レイ", "ライ"],  // obscure mark 豊
        type: KTypeEnum.no_clue
    },
    {
        kanji: "両", readings: ["リョウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "曲", readings: ["キョク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "向", readings: ["コウ", "キョウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "州", readings: ["シュウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "全", readings: ["ゼン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "次", readings: ["ジ", "シ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "安", readings: ["アン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "守", readings: ["シュ", "ス"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "式", readings: ["シキ", "ショク"],
        phonetic: "弋", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "死", readings: ["シ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "列", readings: ["レツ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "羊", readings: ["ヨウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "有", readings: ["ユウ", "ウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "血", readings: ["ケツ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "住", readings: ["ジュウ"],
        phonetic: "主", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "助", readings: ["じょ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "医", readings: ["イ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "君", readings: ["クン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "坂", readings: ["ハン", "バン"],
        phonetic: "反", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "局", readings: ["キョク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "役", readings: ["ヤク", "エキ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "投", readings: ["トウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "対", readings: ["タイ", "ツイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "決", readings: ["ケツ"], // maybe compound of 夬
        type: KTypeEnum.no_clue
    },
    {
        kanji: "究", readings: ["キュウ", "ク"],
        phonetic: "九", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "豆", readings: ["トウ", "ズ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "身", readings: ["シン"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "返", readings: ["ヘン", "ハン", "ホン"],
        phonetic: "反", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "表", readings: ["ヒョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "事", readings: ["ジ", "ズ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "育", readings: ["イク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "使", readings: ["シ"],
        phonetic: "史", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "命", readings: ["メイ", "ミョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "味", readings: ["ミ", "ビ"],
        phonetic: "未", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "幸", readings: ["コウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "始", readings: ["シ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "実", readings: ["ジツ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "定", readings: ["テイ", "ジョウ"],
        phonetic: "正", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "岸", readings: ["ガン"],
        phonetic: "干", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "所", readings: ["ショ", "ソ"],
        phonetic: "戸", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "放", readings: ["ほう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "昔", readings: ["セキ", "シャク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "板", readings: ["ハン", "バン"],
        phonetic: "反", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "泳", readings: ["エイ"],
        phonetic: "永", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "注", readings: ["チュウ"],
        phonetic: "主", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "波", readings: ["ハ"],
        phonetic: "皮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "油", readings: ["ユ", "ユウ"],
        phonetic: "由", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "受", readings: ["ジュ", "ズ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "物", readings: ["ブツ", "モツ"],
        phonetic: "勿", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "具", readings: ["グ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "委", readings: ["イ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "和", readings: ["ワ", "オ", "カ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "者", readings: ["シャ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "取", readings: ["シュ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "服", readings: ["フク"],
        phonetic: "𠬝", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "苦", readings: ["く"],
        phonetic: "古", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "重", readings: ["ジュウ", "チョウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "係", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "品", readings: ["ヒン", "ホン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "客", readings: ["キャク", "カク"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "県", readings: ["ケン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "屋", readings: ["オク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "炭", readings: ["タン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "度", readings: ["ド", "ト", "タク"],  // maybe obscure phonetic 庶
        type: KTypeEnum.no_clue
    },
    {
        kanji: "待", readings: ["タイ"],
        phonetic: "寺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "急", readings: ["キュウ"],
        phonetic: "及", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "指", readings: ["シ"],
        phonetic: "旨", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "持", readings: ["ジ", "チ"],
        phonetic: "寺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "拾", readings: ["シュウ", "ジュウ"],
        phonetic: "合", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "昭", readings: ["ショウ"],
        phonetic: "召", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "相", readings: ["ソウ", "ショウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "柱", readings: ["チュウ"],
        phonetic: "主", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "洋", readings: ["ヨウ"],
        phonetic: "羊", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "畑", readings: [],
        type: KTypeEnum.kokuji
    },
    {
        kanji: "界", readings: ["カイ"],
        phonetic: "介", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "発", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "研", readings: ["ケン", "ゲン"],
        phonetic: "幵", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "神", readings: ["シン", "ジン"],
        phonetic: "申", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "秒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "級", readings: ["キュウ"],
        phonetic: "及", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "美", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "負", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "送", readings: ["ソウ"],
        phonetic: "关", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "追", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "面", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "島", readings: ["トウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "勉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "倍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "真", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "員", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "庫", readings: ["コ", "ク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "庭", readings: ["テイ"],
        phonetic: "廷", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "旅", readings: ["リョ", "ロ"],
        phonetic: "㫃", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "根", readings: ["コン"],
        phonetic: "艮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "酒", readings: ["シュ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "消", readings: ["ショウ"],
        phonetic: "肖", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "流", readings: ["リュウ・ル"],
        phonetic: "㐬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "病", readings: ["ビョウ", "ヘイ"],
        phonetic: "丙", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "息", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "荷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "起", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "速", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "配", readings: ["ハイ"],
        phonetic: "己", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "院", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "商", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "動", readings: ["ドウ", "トウ"],
        phonetic: "重", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "宿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "帳", readings: ["チョウ"],
        phonetic: "長", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "族", readings: ["ゾク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "深", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "球", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "祭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "第", readings: ["ダイ", "テイ"],
        phonetic: "弟", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "笛", readings: ["テキ", "ジャク"],
        phonetic: "由", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "終", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "習", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "転", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "進", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "都", readings: ["ト", "ツ"],
        phonetic: "者", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "部", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "問", readings: ["モン", "ブン"],
        phonetic: "門", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "章", readings: ["ショウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暑", readings: ["ショ"],
        phonetic: "者", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "植", readings: ["ショク", "チ"],
        phonetic: "直", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "温", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "湖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "港", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "湯", readings: ["トウ", "ショウ"],
        phonetic: "昜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "登", readings: ["トウ", "ト"],
        phonetic: "豆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "短", readings: ["タン"],
        phonetic: "豆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "童", readings: ["ドウ", "トウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "等", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "筆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "着", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "期", readings: ["キ", "ゴ"],
        phonetic: "其", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "勝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "葉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "落", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "軽", readings: ["ケイ", "キン"],
        phonetic: "巠", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "運", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "開", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "階", readings: ["カイ"],
        phonetic: "皆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "陽", readings: ["ヨウ"],
        phonetic: "昜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "集", readings: ["シュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "悲", readings: ["ヒ"],
        phonetic: "非", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "飲", readings: ["イン", "オン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "歯", readings: ["シ"],
        phonetic: "止", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "業", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "感", readings: ["カン"],
        phonetic: "咸", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "想", readings: ["ソウ", "ソ"],
        phonetic: "相", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "暗", readings: ["アン"],
        phonetic: "音", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "漢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "福", readings: ["フク"],
        phonetic: "畐", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "詩", readings: ["シ"],
        phonetic: "寺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "路", readings: ["ろ"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "農", readings: ["ノウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "鉄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "意", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "様", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "緑", readings: ["リョク", "ロク"],
        phonetic: "彔", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "練", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銀", readings: ["ギン"],
        phonetic: "艮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "駅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鼻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "横", readings: ["オウ", "コウ"],
        phonetic: "黄", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "箱", readings: ["ショウ", "ソウ"],
        phonetic: "相", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "談", readings: ["ダン", "タン"],
        phonetic: "炎", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "調", readings: ["チョウ"],
        phonetic: "周", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "橋", readings: ["キョウ"],
        phonetic: "喬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "整", readings: ["セイ"],
        phonetic: "正", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "薬", readings: ["ヤク"],
        phonetic: "楽", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "館", readings: ["カン"],
        phonetic: "官", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "題", readings: ["ダイ", "テイ"],
        phonetic: "是", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },

    /* G4 */

    {
        kanji: "士", readings: ["シ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "不", readings: ["フ", "ブ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "夫", readings: ["フ", "フウ", "ブ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "欠", readings: ["ケツ", "ケン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "氏", readings: ["シ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "民", readings: ["ミン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "史", readings: ["シ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "必", readings: ["ヒツ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "失", readings: ["シツ", "イツ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "包", readings: ["ホウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "末", readings: ["マツ", "バツ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "未", readings: ["ミ", "ビ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "以", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "付", readings: ["フ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "令", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "加", readings: ["カ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "司", readings: ["し", "す"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "功", readings: ["コウ・ク"],
        phonetic: "工", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "札", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "辺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "印", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "争", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "仲", readings: ["チュウ"],
        phonetic: "中", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "伝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "共", readings: ["キョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "兆", readings: ["チョウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "各", readings: ["カク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "好", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "成", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "灯", readings: ["とう"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "老", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "衣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "求", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "束", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "兵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "位", readings: ["イ"],
        phonetic: "立", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "低", readings: ["テイ"],
        phonetic: "氐", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "児", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "冷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "別", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "努", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "労", readings: ["ロウ"],
        phonetic: "熒", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "告", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "囲", readings: ["イ"],
        phonetic: "韋", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "完", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "改", readings: ["カイ"],
        phonetic: "己", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "希", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "折", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "材", readings: ["ザイ", "サイ"],
        phonetic: "才", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "利", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "臣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "良", readings: ["リョウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "芸", readings: ["ゲイ", "ウン"],  // there is a different kanji looking exactly the same, add reading
        phonetic: "云", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "初", readings: ["ショ", "ソ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "果", readings: ["カ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "刷", readings: ["サツ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "卒", readings: ["ソツ", "シュツ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "念", readings: ["ネン"],
        phonetic: "今", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "例", readings: ["レイ"],
        phonetic: "列", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "典", readings: ["テン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "周", readings: ["シュウ", "ス"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "協", readings: ["キョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "参", readings: ["サン", "シン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "固", readings: ["こ"],
        phonetic: "古", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "官", readings: ["カン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "底", readings: ["テイ"],
        phonetic: "氐", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "府", readings: ["フ"],
        phonetic: "付", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "径", readings: ["ケイ"],
        phonetic: "巠", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "松", readings: ["ショウ"],
        phonetic: "公", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "毒", readings: ["ドク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "泣", readings: ["キュウ"],
        phonetic: "立", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "治", readings: ["ジ", "チ"],  // TODO maybe phonetic 台=臺
        type: KTypeEnum.no_clue
    },
    {
        kanji: "法", readings: ["ホウ", "ハッ", "ホッ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "牧", readings: ["ボク", "モク"],
        type: KTypeEnum.comp_indicative
    },
    {
            kanji: "的", readings: ["テキ"],  // TODO: phonetic 的?
        type: KTypeEnum.no_clue
    },
    {
        kanji: "季", readings: ["キ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "英", readings: ["エイ"],
        phonetic: "央", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "芽", readings: ["ガ"],
        phonetic: "牙", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "単", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "省", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "変", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "信", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "便", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "軍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "型", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "建", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "昨", readings: ["サク"],
        phonetic: "乍", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "栄", readings: ["エイ"],
        phonetic: "熒", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "浅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "胃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "祝", readings: ["シュク", "シュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "紀", readings: ["キ"],
        phonetic: "己", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "約", readings: ["ヤク"],
        phonetic: "勺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "要", readings: ["ヨウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "飛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "候", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "借", readings: ["シャク", "シャ"],
        phonetic: "昔", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "倉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "孫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "案", readings: ["アン"],
        phonetic: "安", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "害", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "帯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "席", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "徒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "梅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "残", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "殺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浴", readings: ["ヨク"],
        phonetic: "谷", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "特", readings: ["トク", "ドク"],
        phonetic: "寺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "笑", readings: ["ショウ"],
        phonetic: "关", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "粉", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "料", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "差", readings: ["サ", "シ"],
        phonetic: "左", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "脈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "航", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "連", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "郡", readings: ["グン", "クン"],
        phonetic: "君", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "巣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "健", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "側", readings: ["ソク", "ショク"],
        phonetic: "則", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "停", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "副", readings: ["フク"],
        phonetic: "畐", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "唱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堂", readings: ["ドウ", "トウ"],
        phonetic: "尚", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "康", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "得", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "救", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "械", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "清", readings: ["セイ", "ショウ", "シン"],
        phonetic: "青", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "望", readings: ["ボウ", "モウ"],
        phonetic: "亡", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "産", readings: ["サン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "菜", readings: ["サイ"],
        phonetic: "采", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "票", readings: ["ヒョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "貨", readings: ["カ"],
        phonetic: "化", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "敗", readings: ["ハイ", "バイ"],
        phonetic: "貝", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "陸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "博", readings: ["ハク", "バク"],
        phonetic: "尃", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "喜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "順", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "街", readings: ["ガイ", "カイ"],
        phonetic: "圭", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "散", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "景", readings: ["ケイ", "エイ"],
        phonetic: "京", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "最", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "量", readings: ["リョウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "満", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "焼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "然", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "無", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "給", readings: ["キュウ"],
        phonetic: "合", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "結", readings: ["ケツ", "ケチ", "ケイ"],
        phonetic: "吉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "覚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "象", readings: ["ショウ", "ゾウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "貯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "費", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "達", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "飯", readings: ["ハン"],
        phonetic: "反", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "働", readings: [],
        type: KTypeEnum.kokuji
    },
    {
        kanji: "塩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "戦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "極", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "照", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "愛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "節", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "続", readings: ["ゾク", "ショク"],
        phonetic: "売", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "置", readings: ["チ"],
        phonetic: "直", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "腸", readings: ["チョウ"],
        phonetic: "昜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "辞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "試", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "歴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "察", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旗", readings: ["き"],
        phonetic: "其", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "漁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "種", readings: ["シュ", "ショウ"],
        phonetic: "重", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "管", readings: ["カン"],
        phonetic: "官", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "説", readings: ["セツ", "ゼイ", "エツ"],
        phonetic: "兌", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "関", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "静", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "億", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "器", readings: ["キ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "賞", readings: ["ショウ"],
        phonetic: "尚", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "標", readings: ["ヒョウ"],
        phonetic: "票", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "熱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "養", readings: ["ヨウ"],
        phonetic: "羊", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "課", readings: ["カ"],
        phonetic: "果", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "輪", readings: ["リン"],
        phonetic: "侖", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "選", readings: ["セン"],
        phonetic: "巽", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "機", readings: ["キ"],
        phonetic: "幾", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "積", readings: ["セキ", "シ", "シャク"],
        phonetic: "責", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "録", readings: ["ロク", "リョク"],
        phonetic: "彔", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "観", readings: ["カン"],
        phonetic: "雚", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "類", readings: ["ルイ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "験", readings: ["ケン", "ゲン"],
        phonetic: "僉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "願", readings: ["ガン"],
        phonetic: "原", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "鏡", readings: ["キョウ"],
        phonetic: "竟", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "競", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "議", readings: ["ギ"],
        phonetic: "義", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },

    /* G5 */

    {
        kanji: "久", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "仏", readings: ["ブツ", "フツ"],
        phonetic: "弗", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "支", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "比", readings: ["ヒ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "可", readings: ["カ", "コク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "旧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "永", readings: ["エイ", "ヨウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "句", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "圧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "布", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刊", readings: ["カン"],
        phonetic: "干", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "犯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "示", readings: ["ジ", "シ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "再", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "仮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "件", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "任", readings: ["ニン", "ジン"],
        phonetic: "壬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "因", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "団", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "在", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "似", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "余", readings: ["ヨ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "判", readings: ["ハン", "バン", "ホウ"],
        phonetic: "半", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "均", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "志", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "条", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "災", readings: ["サイ"],  // simplified version of 烖
        phonetic: "𢦏", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "応", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "序", readings: ["ジョ"],
        phonetic: "予", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "快", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "技", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "状", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "防", readings: ["ぼう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "武", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "承", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "価", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "券", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "制", readings: ["セイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "効", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "居", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "往", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "性", readings: ["セイ", "ショウ"],
        phonetic: "生", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "招", readings: ["ショウ"],
        phonetic: "召", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "易", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "枝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "河", readings: ["カ"],
        phonetic: "可", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "版", readings: ["ハン"],
        phonetic: "反", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "肥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "述", readings: ["ジュツ"],
        phonetic: "朮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "非", readings: ["ヒ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "保", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "厚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "故", readings: ["こ"],
        phonetic: "古", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "政", readings: ["セイ", "ショウ"],
        phonetic: "正", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "査", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "独", readings: ["ドク", "トク"],
        phonetic: "蜀", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "祖", readings: ["そ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "則", readings: ["ソク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "逆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "退", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "迷", readings: ["メイ"],
        phonetic: "米", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "限", readings: ["ゲン"],
        phonetic: "艮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "師", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "個", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "修", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "俵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "益", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "能", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "容", readings: ["ヨウ"],
        phonetic: "谷", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "恩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "格", readings: ["カク", "コウ", "キャク"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "桜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "留", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "破", readings: ["は"],
        phonetic: "皮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "素", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "耕", readings: ["コウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "財", readings: ["ザイ", "サイ"],
        phonetic: "才", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "造", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "率", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貧", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "基", readings: ["キ"],
        phonetic: "其", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "婦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寄", readings: ["キ"],
        phonetic: "奇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "常", readings: ["ジョウ"],
        phonetic: "尚", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "張", readings: ["チョウ"],
        phonetic: "長", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "術", readings: ["ジュツ", "シュツ", "スイ"],
        phonetic: "朮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "情", readings: ["ジョウ", "セイ"],
        phonetic: "青", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "採", readings: ["サイ"],
        phonetic: "采", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "授", readings: ["ジュ"],
        phonetic: "受", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "接", readings: ["セツ", "ショウ"],
        phonetic: "妾", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "断", readings: ["ダン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "液", readings: ["エキ"],
        phonetic: "夜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "混", readings: ["コン"],
        phonetic: "昆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "現", readings: ["ゲン"],
        phonetic: "見", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "略", readings: ["リャク"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "眼", readings: ["ガン", "ゲン"],
        phonetic: "艮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "務", readings: ["ム", "ブ"],
        phonetic: "敄", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "移", readings: ["イ"],
        phonetic: "多", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "経", readings: ["ケイ", "キョウ", "キン"],
        phonetic: "巠", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "規", readings: ["キ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "許", readings: ["キョ", "コ"],
        phonetic: "午", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "設", readings: ["セツ", "セチ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "責", readings: ["セキ", "シャク"],
        phonetic: "朿", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "険", readings: ["ケン"],
        phonetic: "僉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "備", readings: ["ビ", "ヒ"], // obscure "quiver" phonetic
        type: KTypeEnum.no_clue
    },
    {
        kanji: "営", readings: ["エイ"],
        phonetic: "熒", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "報", readings: ["ホウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "富", readings: ["フ", "フウ"],
        phonetic: "畐", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "属", readings: ["ゾク", "ショク"],
        phonetic: "蜀", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "復", readings: ["フク"],
        phonetic: "复", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "提", readings: ["テイ", "ダイ", "チョウ"],
        phonetic: "是", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "検", readings: ["ケン"],
        phonetic: "僉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "減", readings: ["ゲン"],
        phonetic: "咸", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "測", readings: ["ソク"],
        phonetic: "則", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "税", readings: ["ゼイ", "セイ"],
        phonetic: "兌", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "程", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "絶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "統", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "証", readings: ["ショウ"],
        phonetic: "正", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "評", readings: ["ヒョウ", "ヘイ"],
        phonetic: "平", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "賀", readings: ["ガ"],
        phonetic: "加", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "貸", readings: ["タイ"],
        phonetic:  "代", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "貿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "過", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幹", readings: ["カン"],
        phonetic: "干", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "準", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "損", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "禁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "罪", readings: ["ザイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "義", readings: ["ギ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "群", readings: ["グン"],
        phonetic: "君", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "墓", readings: ["ボ"],
        phonetic: "莫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "夢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "解", readings: ["カイ", "ゲ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "豊", readings: ["ホウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "資", readings: ["シ"],
        phonetic: "次", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "鉱", readings: ["コウ"],
        phonetic: "広", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "預", readings: ["ヨ"],
        phonetic: "予", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "飼", readings: ["シ"],
        phonetic: "司", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "像", readings: ["ゾウ", "ショウ"],
        phonetic: "象", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "境", readings: ["キョウ", "ケイ"],
        phonetic: "竟", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "増", readings: ["ゾウ", "ソウ"],
        phonetic: "曽", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "徳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慣", readings: ["カン"],
        phonetic: "貫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "態", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "構", readings: ["コウ"],
        phonetic: "冓", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "演", readings: ["エン"],
        phonetic: "寅", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "精", readings: ["セイ", "ショウ"],
        phonetic: "青", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "総", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "綿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "製", readings: ["セイ"],
        phonetic: "制", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "複", readings: ["フク"],
        phonetic: "复", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "適", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銅", readings: ["ドウ"],
        phonetic: "同", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "際", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "領", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "導", readings: ["ドウ"],
        phonetic: "道", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "敵", readings: ["テキ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "暴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "確", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "編", readings: ["ヘン"],
        phonetic: "扁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "賛", readings: ["サン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "質", readings: ["シツ", "シチ", "チ", "シ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "興", readings: ["コウ", "キョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "衛", readings: ["エイ", "エ"],
        phonetic: "韋", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "燃", readings: ["ネン", "ゼン"], // TODO: phonetic 然
        type: KTypeEnum.no_clue
    },
    {
        kanji: "築", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "輸", readings: ["ユ", "シュ"],
        phonetic: "兪", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "績", readings: ["セキ"],
        phonetic: "責", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "講", readings: ["コウ"],
        phonetic: "冓", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "謝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "織", readings: ["ショク", "シキ"],
        phonetic: "戠", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "職", readings: ["ショク", "シキ"],
        phonetic: "戠", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "額", readings: ["ガク"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "識", readings: ["シキ", "シ", "ショク"],
        phonetic: "戠", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "護", readings: [],
        type: KTypeEnum.no_clue
    },

    /* G6 */

    {
        kanji: "亡", readings: ["ボウ", "モウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "寸", readings: ["ソン", "スン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "己", readings: ["こ", "き"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "干", readings: ["カン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "仁", readings: ["ジン", "ニ", "ニン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "片", readings: ["ヘン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "冊", readings: ["サツ", "サク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "収", readings: ["シュウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "処", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幼", readings: ["ヨウ", "ユウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "庁", readings: ["チョウ", "テイ"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "穴", readings: ["ケツ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "危", readings: ["キ"],  // from obscure phonetic 厃
        type: KTypeEnum.no_clue
    },
    {
        kanji: "后", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "灰", readings: ["カイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "吸", readings: ["キュウ"],
        phonetic: "及", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "存", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宇", readings: ["ウ"],
        phonetic: "于", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "宅", readings: ["タク"],
        phonetic: "乇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "机", readings: ["キ"],
        phonetic: "几", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "至", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "否", readings: ["ヒ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "我", readings: ["ガ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "系", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "卵", readings: ["ラン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "忘", readings: ["ボウ", "モウ"],
        phonetic: "亡", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "孝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "困", readings: ["コン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "批", readings: ["ヒ"],
        phonetic: "比", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "私", readings: ["シ"],
        phonetic: "厶", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "乱", readings: ["ラン", "ロン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "垂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乳", readings: ["ニュウ", "ジュ", "ニュ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "供", readings: ["キョウ", "ク"],
        phonetic: "共", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "並", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刻", readings: ["コク"],
        phonetic: "蜀", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "呼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宙", readings: ["チュウ"],
        phonetic: "由", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "宝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "届", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "延", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "忠", readings: ["チュウ"],
        phonetic: "中", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "拡", readings: ["カク"],
        phonetic: "広", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "担", readings: ["タン"], // TODO: phonetic 旦
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "枚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沿", readings: ["エン"],
        phonetic: "㕣", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "若", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "看", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "城", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "姿", readings: ["シ"],
        phonetic: "次", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "宣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "専", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "巻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "律", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "映", readings: ["エイ"],
        phonetic: "央", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "染", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "段", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "洗", readings: ["セン"],
        phonetic: "先", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "派", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "皇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "泉", readings: ["セン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "砂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "紅", readings: ["コウ", "ク中", "グ"],
        phonetic: "工", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "背", readings: ["ハイ"],
        phonetic: "北", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "肺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "革", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蚕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "値", readings: ["チ", "チョク"],
        phonetic: "直", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "俳", readings: ["ハイ"],
        phonetic: "非", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "党", readings: ["トウ"],
        phonetic: "尚", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "展", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "座", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "従", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "株", readings: ["シュ"],
        phonetic: "朱", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "将", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "班", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "秘", readings: ["ヒ"],
        phonetic: "必", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "純", readings: ["ジュン"],
        phonetic: "屯", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "納", readings: ["ノウ", "ナッ", "ナ", "ナン", "トウ"],
        phonetic: "内", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "胸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "朗", readings: ["ロウ"],
        phonetic: "良", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "討", readings: ["トウ"],
        phonetic: "屯", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "射", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "針", readings: ["シン"],
        phonetic: "十", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "降", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "除", readings: ["ジ", "ジ"],
        phonetic: "余", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "陛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "骨", readings: ["コツ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "域", readings: ["イキ"],
        phonetic: "或", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "密", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "捨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "推", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "探", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "済", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "異", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "視", readings: ["シ"],
        phonetic: "示", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "窓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "翌", readings: ["ヨク"],
        phonetic: "立", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "脳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "著", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訪", readings: ["ホウ"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "訳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "欲", readings: ["ヨク"],
        phonetic: "谷", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "郷", readings: ["キョウ", "ゴウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "郵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "閉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頂", readings: ["チョウ", "テイ"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "就", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "善", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "割", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "創", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勤", readings: ["キン", "ゴン"],
        phonetic: "堇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "裁", readings: ["サイ"],
        phonetic: "𢦏", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "揮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "敬", readings: ["ケイ", "キョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "晩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "棒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "痛", readings: ["ツウ", "トウ"],
        phonetic: "甬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "筋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "策", readings: ["サク"],
        phonetic: "朿", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "衆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "装", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "補", readings: ["ホ", "ふ"],
        phonetic: "甫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "詞", readings: ["シ"],
        phonetic: "司", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "貴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "裏", readings: ["リ"],
        phonetic: "里", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "傷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "源", readings: ["ゲン"],
        phonetic: "原", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "聖", readings: ["セイ", "ショウ"],
        phonetic: "𡈼", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "盟", readings: ["メイ"],
        phonetic: "明", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "絹", readings: ["ケン"],
        phonetic: "肙", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "署", readings: ["ショ"],
        phonetic: "者", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "腹", readings: ["フク"],
        phonetic: "复", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "蒸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幕", readings: ["マク", "バク"],
        phonetic: "莫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "誠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賃", readings: ["チン", "ジン"],
        phonetic: "壬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "疑", readings: ["ギ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "層", readings: ["ソウ"],
        phonetic: "曽", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "模", readings: ["モ", "ボ"],
        phonetic: "莫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "穀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "磁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暮", readings: ["ボ"],
        phonetic: "莫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "誤", readings: ["ゴ"],
        phonetic: "呉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "誌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "認", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "閣", readings: ["カク"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "障", readings: ["ショウ"],
        phonetic: "章", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "劇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "権", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潮", readings: ["チョウ"],
        phonetic: "朝", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "熟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蔵", readings: ["ゾウ", "ソウ"],
        phonetic: "臧", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "諸", readings: ["ショ"],
        phonetic: "者", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "誕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "論", readings: ["ロン"],
        phonetic: "侖", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "遺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "操", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "樹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "激", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "糖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鋼", readings: ["コウ"],
        phonetic: "岡", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "厳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "優", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "覧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "簡", readings: ["カン", "ケン"],
        phonetic: "間", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "臨", readings: ["リン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "難", readings: ["ナン", "ダン"],
        phonetic: "堇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "臓", readings: ["ゾウ", "ソウ"],
        phonetic: "蔵", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "警", readings: ["ケイ", "キョウ"],
        phonetic: "敬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },

    /* G9 */

    {
        kanji: "乙", readings: ["オツ", "イツ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "了", readings: ["リョウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "又", readings: ["ユウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "与", readings: ["ヨ"],  // Looked like 與
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "及", readings: ["キュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "丈", readings: ["ジョウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "刃", readings: ["ジン", "ニン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "凡", readings: ["ボン", "ハン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "勺", readings: ["シャク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "互", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "井", readings: ["セイ", "ショウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "升", readings: ["ショウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "丹", readings: ["タン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乏", readings: ["ボウ", "ホウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "匁", readings: [],
        type: KTypeEnum.kokuji
    },
    {
        kanji: "屯", readings: ["トン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "介", readings: ["カイ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "冗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "凶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "匹", readings: ["ヒツ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "厄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "双", readings: ["ソウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "孔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幻", readings: ["ゲン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斗", readings: ["ト"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "斤", readings: ["キン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "且", readings: ["ショ", "ソ", "ショウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "丙", readings: ["ヘイ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "甲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "凸", readings: ["トツ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "丘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斥", readings: ["セキ"], // TODO: strange
        type: KTypeEnum.no_clue
    },
    {
        kanji: "仙", readings: ["セン"],
        phonetic: "山", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "凹", readings: ["オウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "召", readings: ["ショウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "巨", readings: ["キョ", "コ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "占", readings: ["セン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "囚", readings: ["シュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "奴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尼", readings: ["ニ", "ジ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "巧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "払", readings: ["フツ"],
        phonetic: "弗", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "汁", readings: ["ジュウ"],
        phonetic: "十", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "玄", readings: ["ゲン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "甘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "矛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "込", readings: [],
        type: KTypeEnum.kokuji
    },
    {
        kanji: "弐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "朱", readings: ["シュ", "ス"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "吏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "劣", readings: ["レツ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "充", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妄", readings: ["モウ", "ボウ"],
        phonetic: "亡", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "企", readings: ["キ"],
        phonetic: "止", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "仰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "伐", readings: ["バツ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "伏", readings: ["フク", "ブク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旨", readings: ["シ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "匠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "叫", readings: ["キョウ"],
        phonetic: "丩", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "吐", readings: ["と"],
        phonetic: "土", phonetic_id: -1,
        type: KTypeEnum.no_clue
    },
    {
        kanji: "吉", readings: ["キチ", "キツ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "如", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妃", readings: ["ヒ"],
        phonetic: "己", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "尽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "帆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "忙", readings: ["ボウ", "モウ"],
        phonetic: "亡", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "扱", readings: ["キュウ", "ソウ"],
        phonetic: "及", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "朽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "朴", readings: ["ボク", "ハク"],
        phonetic: "卜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "汚", readings: ["オ"],
        phonetic: "于", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "汗", readings: ["カン"],
        phonetic: "干", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "江", readings: ["コウ"],
        phonetic: "工", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "壮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "缶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肌", readings: ["キ"],
        phonetic: "几", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "舟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "芋", readings: ["ウ"],
        phonetic: "于", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "芝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "巡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "迅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "亜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "更", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "励", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "含", readings: ["ガン", "カン", "ゴン"],
        phonetic: "今", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "佐", readings: ["サ"],
        phonetic: "左", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "伺", readings: ["シ"],
        phonetic: "司", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "伸", readings: ["シン"],
        phonetic: "申", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "但", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "伯", readings: ["ハク", "ハ"],
        phonetic: "白", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "伴", readings: ["ハン", "バン"],
        phonetic: "半", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "呉", readings: ["ゴ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "克", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "却", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "吟", readings: ["ギン"],
        phonetic: "今", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "吹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "呈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "壱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "坑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "坊", readings: ["ぼう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "妊", readings: ["ニン", "ジン"],
        phonetic: "壬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "妨", readings: ["ぼう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "妙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肖", readings: ["ショウ"],
        phonetic: "小", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "尿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "岐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "攻", readings: ["コウ"],
        phonetic: "工", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "忌", readings: ["き"],
        phonetic: "己", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "床", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "廷", readings: ["テイ"],
        phonetic: "𡈼", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "忍", readings: ["ニン", "ジン"],
        phonetic: "刃", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "戒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "戻", readings: ["れい"],
        phonetic: "大", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "抗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "抄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "択", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "把", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "抜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "扶", readings: ["フ"],
        phonetic: "夫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "抑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "杉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沖", readings: ["チュウ"],
        phonetic: "中", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "沢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "没", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "狂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "秀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肝", readings: ["カン"],
        phonetic: "干", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "即", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "芳", readings: ["ほう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "辛", readings: ["シン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "迎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "邦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "岳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "享", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盲", readings: ["モウ", "ボウ"],
        phonetic: "亡", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "依", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "佳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "侍", readings: ["ジ", "シ"],
        phonetic: "寺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "侮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "併", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "免", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刺", readings: ["シ", "セキ"],
        phonetic: "朿", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "劾", readings: ["ガイ"],
        phonetic: "蜀", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "卓", readings: ["タク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "叔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "坪", readings: ["ヘイ"],
        phonetic: "平", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "奇", readings: ["キ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "姓", readings: ["セイ", "ショウ"],
        phonetic: "生", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "宜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尚", readings: ["ショウ"],
        phonetic: "向", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "屈", readings: ["クツ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "岬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弦", readings: ["ゲン"],
        phonetic: "玄", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "征", readings: ["セイ"],
        phonetic: "正", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "彼", readings: ["ヒ"],
        phonetic: "皮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "怪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "怖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "房", readings: ["ボウ"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "押", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拒", readings: ["キョ"],
        phonetic: "巨", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "拠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拙", readings: ["セツ"],
        phonetic: "出", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "拓", readings: ["タク"],
        phonetic: "石", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "抽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "抵", readings: ["テイ", "シ"],
        phonetic: "氐", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "拍", readings: ["ハク", "ヒョウ"],
        phonetic: "白", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "披", readings: ["ヒ"],
        phonetic: "皮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "抱", readings: ["ホウ"],
        phonetic: "包", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "抹", readings: ["マツ", "バツ"],
        phonetic: "末", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "昆", readings: ["コン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "昇", readings: ["ショウ"],
        phonetic: "升", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "枢", readings: ["スウ"],
        phonetic: "区", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "析", readings: ["セキ"],
        phonetic: "斤", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "杯", readings: ["ハイ"],
        phonetic: "不", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "枠", readings: [],
        type: KTypeEnum.kokuji
    },
    {
        kanji: "欧", readings: ["オウ"],
        phonetic: "区", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "肯", readings: ["コウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "殴", readings: ["オウ"],
        phonetic: "区", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "況", readings: ["キョウ"],
        phonetic: "兄", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "沼", readings: ["ショウ"],
        phonetic: "召", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "泥", readings: ["デイ"],
        phonetic: "尼", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "泊", readings: ["ハク"],
        phonetic: "白", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "泌", readings: ["ヒツ", "ヒ"],
        phonetic: "必", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "沸", readings: ["フツ", "ヒ"],
        phonetic: "弗", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "泡", readings: ["ホウ"],
        phonetic: "包", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "炎", readings: ["エン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "炊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "炉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "邪", readings: ["ジャ", "シャ", "ヤ"],
        phonetic: "牙", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "祈", readings: ["キ"],
        phonetic: "斤", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "祉", readings: ["シ"],
        phonetic: "止", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "突", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肪", readings: ["ぼう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "到", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "茎", readings: ["ケイ"],
        phonetic: "巠", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "苗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "茂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "迭", readings: ["テツ"],
        phonetic: "失", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "迫", readings: ["ハク"],
        phonetic: "白", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "邸", readings: ["テイ"],
        phonetic: "氐", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "阻", readings: ["そ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "附", readings: ["フ", "ブ"],
        phonetic: "付", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "斉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "甚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "帥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "衷", readings: ["チュウ"],
        phonetic: "中", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "幽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "為", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "卑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "哀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "亭", readings: ["テイ", "チン"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "帝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "侯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "俊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "侵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "促", readings: ["ソク", "ショク"],
        phonetic: "足", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "俗", readings: ["ゾク"],
        phonetic: "谷", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "盆", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "冠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "削", readings: ["サク"],
        phonetic: "肖", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "勅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "卸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "厘", readings: ["りん"],
        type: KTypeEnum.derivative
    },
    {
        kanji: "怠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "叙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "咲", readings: ["ショウ"],
        phonetic: "关", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "垣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "契", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "姻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "孤", readings: ["コ"],
        phonetic: "瓜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "封", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "峡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "峠", readings: [],
        type: KTypeEnum.kokuji
    },
    {
        kanji: "弧", readings: ["コ"],
        phonetic: "瓜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "悔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恨", readings: ["コン"],
        phonetic: "艮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "怒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "威", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "括", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拷", readings: ["ゴウ", "コウ"],
        phonetic: "考", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "挑", readings: ["チョウ"],
        phonetic: "兆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "施", readings: ["シ", "セ"],
        phonetic: "也", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "是", readings: ["ゼ", "シ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "冒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "架", readings: ["カ"],
        phonetic: "加", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "枯", readings: ["こ"],
        phonetic: "古", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "柄", readings: ["ヘイ"],
        phonetic: "丙", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "柳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "皆", readings: ["カイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "洪", readings: ["コウ"],
        phonetic: "共", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "浄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "津", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "洞", readings: ["ドウ", "トウ"],
        phonetic: "同", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "牲", readings: ["セイ"],
        phonetic: "生", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "狭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "狩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "珍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "某", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "疫", readings: ["エキ", "ヤク"],
        phonetic: "役", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "柔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "砕", readings: ["サイ"],
        phonetic: "卒", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "窃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "糾", readings: ["キュウ"],
        phonetic: "丩", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "耐", readings: ["タイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "胎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "胆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "胞", readings: ["ホウ"],
        phonetic: "包", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "臭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "荒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "荘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訂", readings: ["テイ", "チョウ"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "赴", readings: ["フ"],
        phonetic: "卜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "軌", readings: ["キ"],
        phonetic: "九", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "逃", readings: ["トウ"],
        phonetic: "兆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "郊", readings: ["コウ"],
        phonetic: "交", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "郎", readings: ["ロウ"],
        phonetic: "良", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "香", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "剛", readings: ["ゴウ", "コウ"],
        phonetic: "岡", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "衰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "畝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "倹", readings: ["ケン"],
        phonetic: "僉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "倒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "倣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "俸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "倫", readings: ["リン"],
        phonetic: "侖", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "翁", readings: ["オウ"],
        phonetic: "公", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "兼", readings: ["ケン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "准", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "凍", readings: ["トウ"],
        phonetic: "東", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "剣", readings: ["ケン"],
        phonetic: "僉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "剖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "脅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "匿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "栽", readings: ["サイ"],
        phonetic: "𢦏", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "索", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "桑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "哲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "埋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "娯", readings: ["ゴ"],
        phonetic: "呉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "娠", readings: ["シン"],
        phonetic: "辰", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "姫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "娘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宵", readings: ["ショウ"],
        phonetic: "肖", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "峰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貢", readings: ["コウ", "ク"],
        phonetic: "工", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "唐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "徐", readings: ["ジョ"],
        phonetic: "余", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "悦", readings: ["エツ"],
        phonetic: "兌", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "恐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恭", readings: ["キョウ"],
        phonetic: "共", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "恵", readings: ["ケイ", "エ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悟", readings: ["ゴ"],
        phonetic: "吾", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "悩", readings: ["ノウ", "ドウ"],  // TODO: obscure phonetic component 𡿺?
        type: KTypeEnum.no_clue
    },
    {
        kanji: "扇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "振", readings: ["シン"],
        phonetic: "辰", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "捜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "捕", readings: ["ホ", "ブ"],
        phonetic: "甫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "敏", readings: ["ビン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "核", readings: ["カク"],
        phonetic: "蜀", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "桟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "栓", readings: ["セン"],
        phonetic: "全", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "桃", readings: ["トウ"],
        phonetic: "兆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "殊", readings: ["シュ"],
        phonetic: "朱", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "殉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浦", readings: ["ホ"],
        phonetic: "甫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "浸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "泰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浜", readings: ["ヒン"],
        phonetic: "賓", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "浮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "涙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浪", readings: ["ロウ"],
        phonetic: "良", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "烈", readings: ["レツ"],
        phonetic: "列", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "畜", readings: ["チク", "キク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "珠", readings: ["シュ"],
        phonetic: "朱", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "畔", readings: ["ハン"],
        phonetic: "半", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "疾", readings: ["シツ"],
        phonetic: "矢", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "症", readings: ["ショウ"],
        phonetic: "正", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "疲", readings: ["ヒ"],
        phonetic: "皮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "眠", readings: ["ミン", "ベン"],
        phonetic: "民", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "砲", readings: ["ホウ"],
        phonetic: "包", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "祥", readings: ["ショウ"],
        phonetic: "羊", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "称", readings: ["ショウ"],  // obscure phonetic 爯
        type: KTypeEnum.no_clue
    },
    {
        kanji: "租", readings: ["そ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "秩", readings: ["チツ"],
        phonetic: "失", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "粋", readings: ["スイ"],
        phonetic: "卒", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "紛", readings: ["フン"],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "紡", readings: ["ボウ"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "紋", readings: ["もん"],
        phonetic: "文", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "耗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恥", readings: ["チ"],
        phonetic: "耳", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "脂", readings: ["シ"],
        phonetic: "旨", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "朕", readings: ["チン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "胴", readings: ["ドウ", "トウ"],
        phonetic: "同", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "致", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "般", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "既", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "華", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蚊", readings: ["ブン"],
        phonetic: "文", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "被", readings: ["ヒ"],
        phonetic: "皮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "託", readings: ["タク"],
        phonetic: "乇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "軒", readings: ["ケン"],
        phonetic: "干", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "辱", readings: ["ジョク", "ニク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唇", readings: ["シン"],
        phonetic: "辰", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "逝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逐", readings: ["チク", "ジク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "途", readings: ["ト", "ズ"],
        phonetic: "余", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "透", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酌", readings: ["シャク"],
        phonetic: "勺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "陥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "飢", readings: ["キ"],
        phonetic: "几", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "鬼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "剤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "竜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "粛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "彫", readings: ["チョウ"],
        phonetic: "周", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "偽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "偶", readings: ["グウ"],
        phonetic: "禺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "偵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "偏", readings: ["ヘン"],
        phonetic: "扁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "剰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "啓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "執", readings: ["シツ", "シュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "培", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堀", readings: ["クツ", "コツ"],
        phonetic: "屈", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "婚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "婆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "崎", readings: ["キ"],
        phonetic: "奇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "崇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "崩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "庶", readings: ["ショ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "庸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "彩", readings: ["サイ"],
        phonetic: "采", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "患", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "惨", readings: ["サン", "ザン"],
        phonetic: "参", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "惜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悼", readings: ["トウ"],
        phonetic: "卓", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "悠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "掛", readings: ["カイ", "ケイ"],
        phonetic: "圭", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "掘", readings: ["クツ"],
        phonetic: "屈", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "掲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "控", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "据", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "措", readings: ["ソ"],
        phonetic: "昔", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "掃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "排", readings: ["ハイ"],
        phonetic: "非", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "描", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斜", readings: ["シャ"],
        phonetic: "余", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "旋", readings: ["セン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "曹", readings: ["ソウ", "ゾウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "殻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "涯", readings: ["ガイ"],
        phonetic: "厓", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "渇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "渓", readings: ["ケイ"],  // obscure phonetic 奚
        type: KTypeEnum.no_clue
    },
    {
        kanji: "渋", readings: ["ジュウ", "シュウ"],  // maybe phonetic 歮歰
        type: KTypeEnum.no_clue
    },
    {
        kanji: "淑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "渉", readings: ["ショウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "淡", readings: ["タン"],
        phonetic: "炎", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "添", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "涼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "猫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "猛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "猟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瓶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "累", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "眺", readings: ["チョウ"],
        phonetic: "兆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "窒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "符", readings: ["フ"],
        phonetic: "付", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "粗", readings: ["そ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "粘", readings: ["ネン", "デン"],
        phonetic: "占", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "粒", readings: ["リュウ"],
        phonetic: "立", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "紺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "紹", readings: ["ショウ"],
        phonetic: "召", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "紳", readings: ["シン"],
        phonetic: "申", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "脚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "脱", readings: ["ダツ", "タツ"],
        phonetic: "兌", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "豚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舶", readings: ["ハク"],
        phonetic: "白", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "菓", readings: ["カ"],
        phonetic: "果", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "菊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "菌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蛍", readings: ["ケイ"],
        phonetic: "熒", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "蛇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "袋", readings: ["タイ", "テイ"],
        phonetic:  "代", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "訟", readings: ["ショウ", "ジュ"],
        phonetic: "公", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "販", readings: ["ハン"],
        phonetic: "反", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "赦", readings: ["シャ"],
        phonetic: "赤", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "軟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "郭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "釈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "釣", readings: ["チョウ"],
        phonetic: "勺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "陰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陳", readings: ["チン", "ジン"],
        phonetic: "申", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "陶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "麻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蛮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "偉", readings: ["イ"],
        phonetic: "韋", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "傘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "傍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "普", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "圏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堤", readings: ["テイ"],
        phonetic: "是", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "塔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塀", readings: [],
        type: KTypeEnum.kokuji
    },
    {
        kanji: "媒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "婿", readings: ["セイ"],
        phonetic: "胥", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "掌", readings: ["ショウ"],
        phonetic: "尚", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "項", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幅", readings: ["フク"],
        phonetic: "畐", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "帽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幾", readings: ["キ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "廃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "廊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "御", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "循", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "惰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "愉", readings: ["ユ"],
        phonetic: "兪", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "惑", readings: ["ワク"],
        phonetic: "或", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "雇", readings: ["コ"],
        phonetic: "戸", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "扉", readings: ["ひ"],
        phonetic: "非", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "握", readings: ["アク"],
        phonetic: "屋", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "援", readings: ["エン"],
        phonetic: "爰", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "換", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "搭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "揚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "揺", readings: ["ヨウ"],
        phonetic: "䍃", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "敢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "晶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "替", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "棺", readings: ["カン"],
        phonetic: "官", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "棋", readings: ["キ"],
        phonetic: "其", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "棚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "棟", readings: ["トウ"],
        phonetic: "東", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "款", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "欺", readings: ["ギ", "キ"],
        phonetic: "其", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "殖", readings: ["ショク"],
        phonetic: "直", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "渦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "滋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "湿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "渡", readings: ["ト"],
        phonetic: "度", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "湾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "煮", readings: ["シャ"],
        phonetic: "者", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "猶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "琴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "畳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "疎", readings: ["ソ", "ショ"],
        phonetic: "疋", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "痘", readings: ["トウ"],
        phonetic: "豆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "痢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "硬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "硝", readings: ["ショウ"],
        phonetic: "肖", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "硫", readings: ["リュウ", "ル"],
        phonetic: "㐬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "筒", readings: ["トウ"],
        phonetic: "同", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "粧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "絞", readings: ["コウ"],
        phonetic: "交", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "紫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "絡", readings: ["らく"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "脹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "葬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "募", readings: ["ボ", "モ"],
        phonetic: "莫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "裕", readings: ["ユウ"],
        phonetic: "谷", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "裂", readings: ["レツ"],
        phonetic: "列", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "詠", readings: ["エイ"],
        phonetic: "永", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "詐", readings: ["サ"],
        phonetic: "乍", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "詔", readings: ["ショウ"],
        phonetic: "召", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "診", readings: ["シン"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "越", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "超", readings: ["チョウ"],
        phonetic: "召", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "距", readings: ["キョ"],
        phonetic: "巨", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "軸", readings: ["ジク", "チク"],
        phonetic: "由", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "遇", readings: ["グウ", "グ"],
        phonetic: "禺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "遂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遍", readings: ["ヘン"],
        phonetic: "扁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "酢", readings: ["サク", "ソ"],
        phonetic: "乍", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "鈍", readings: ["ドン"],
        phonetic: "屯", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "閑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隅", readings: ["グウ"],
        phonetic: "禺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "随", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "焦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雄", readings: ["ユウ"],
        phonetic: "厷", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "雰", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "殿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "棄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "傾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "傑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "債", readings: ["サイ"],
        phonetic: "責", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "催", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "僧", readings: ["ソウ"],
        phonetic: "曽", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "慈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "載", readings: ["サイ"],
        phonetic: "𢦏", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "嗣", readings: ["シ"],
        phonetic: "司", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "嘆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嫁", readings: ["カ"],
        phonetic: "家", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "嫌", readings: ["ケン", "ゲン"],
        phonetic: "兼", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "寛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "廉", readings: ["レン"],
        phonetic: "兼", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "微", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "愚", readings: ["グ"],
        phonetic: "禺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "愁", readings: ["シュウ"],
        phonetic: "秋", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "慎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "携", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "搾", readings: [],
        type: KTypeEnum.kokuji
    },
    {
        kanji: "摂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "搬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "楼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "歳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "滑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "溝", readings: ["コウ"],
        phonetic: "冓", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "滞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "滝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漠", readings: ["バク", "マク"],
        phonetic: "莫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "滅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "溶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "煙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "煩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雅", readings: ["ガ"],
        phonetic: "牙", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "猿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "献", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "痴", readings: ["チ"],
        phonetic: "知", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "睡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "督", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "碁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "禍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "禅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "稚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "継", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "艇", readings: ["テイ"],
        phonetic: "廷", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "蓄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虞", readings: ["グ"],  // related to 虞 reading?
        phonetic: "呉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "虜", readings: ["リョ", "ロ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "褐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "裸", readings: ["ラ"],
        phonetic: "果", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "触", readings: ["ショク", "ソク"],
        phonetic: "蜀", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "該", readings: ["ガイ", "カイ"],
        phonetic: "蜀", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "詰", readings: ["キツ"],
        phonetic: "吉", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "誇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詳", readings: ["ショウ"],
        phonetic: "羊", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "誉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賊", readings: ["ソク"],
        phonetic: "則", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "賄", readings: ["ワイ", "カイ"],
        phonetic: "有", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "跡", readings: ["セキ", "シャク"],
        phonetic: "責", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "践", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "跳", readings: ["チョウ"],
        phonetic: "兆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "較", readings: ["カク", "コウ"],
        phonetic: "交", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "違", readings: ["イ"],
        phonetic: "韋", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "遣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酬", readings: ["シュウ"],
        phonetic: "州", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "酪", readings: ["らく"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "鉛", readings: ["エン"],
        phonetic: "㕣", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "鉢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鈴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "零", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "靴", readings: ["カ"],
        phonetic: "化", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "頑", readings: ["ガン"],
        phonetic: "元", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "頒", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "飾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "飽", readings: ["ホウ"],
        phonetic: "包", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "鼓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "豪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "僕", readings: ["ボク"],
        phonetic: "菐", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "僚", readings: ["リョウ"],
        phonetic: "尞", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "暦", readings: ["レキ", "リャク"],  // TODO: tone mark 厤?
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嫡", readings: ["チャク", "テキ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腐", readings: ["フ"],
        phonetic: "付", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "彰", readings: ["ショウ"],
        phonetic: "章", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "徴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憎", readings: ["ゾウ", "ソウ"],
        phonetic: "曽", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "慢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "摘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "概", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漬", readings: ["シ"],
        phonetic: "責", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "滴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漂", readings: ["ヒョウ"],
        phonetic: "票", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "漫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "獄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "碑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "稲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "端", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "箇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "維", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "綱", readings: ["コウ"],
        phonetic: "岡", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "緒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "網", readings: ["モウ", "ボウ"],
        phonetic: "罔", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "罰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "膜", readings: ["マク", "バク"],
        phonetic: "莫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "慕", readings: ["ボ"],
        phonetic: "莫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "誓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "誘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "踊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遮", readings: ["シャ"],
        phonetic: "庶", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "遭", readings: ["ソウ"],
        phonetic: "曹", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "酵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銑", readings: ["セン"],
        phonetic: "先", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "銘", readings: ["メイ", "ミョウ"],
        phonetic: "名", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "閥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "需", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "駆", readings: ["ク"],
        phonetic: "区", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "駄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "髪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "魂", readings: ["コン"],
        phonetic: "云", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "錬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "緯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "韻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "影", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鋭", readings: ["エイ"],
        phonetic: "兌", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "謁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "閲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "穏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "稼", readings: ["カ"],
        phonetic: "家", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "餓", readings: ["ガ"],
        phonetic: "我", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "壊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "懐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嚇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "獲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "穫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "轄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憾", readings: ["カン"],
        phonetic: "感", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "歓", readings: ["カン"],
        phonetic: "雚", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "環", readings: ["カン"],
        phonetic: "瞏", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "監", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "緩", readings: ["カン"],
        phonetic: "爰", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "艦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "還", readings: ["カン", "ゲン"],
        phonetic: "瞏", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "鑑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "輝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "騎", readings: ["キ"],
        phonetic: "奇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "儀", readings: ["ギ"],
        phonetic: "義", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "戯", readings: ["ギ", "ゲ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "擬", readings: ["ギ"],
        phonetic: "疑", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "犠", readings: ["ギ", "キ"],
        phonetic: "義", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "窮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "矯", readings: ["キョウ"],
        phonetic: "喬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "響", readings: ["キョウ"],
        phonetic: "郷", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "驚", readings: ["キョウ"],
        phonetic: "敬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "凝", readings: ["ギョウ"],
        phonetic: "疑", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "緊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "襟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謹", readings: ["キン"],
        phonetic: "堇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "繰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "薫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鶏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鯨", readings: ["ゲイ", "ケイ"],
        phonetic: "京", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "撃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "懸", readings: ["ケン", "ケ"],  // TODO: phonetic 縣
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謙", readings: ["ケン"],
        phonetic: "兼", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "賢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "顕", readings: ["ケン"],  // obscure phonetic 㬎?
        type: KTypeEnum.no_clue
    },
    {
        kanji: "顧", readings: ["コ"],
        phonetic: "雇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "稿", readings: ["コウ"],
        phonetic: "高", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "衡", readings: ["コウ"],
        phonetic: "行", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "購", readings: ["コウ"],
        phonetic: "冓", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "墾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "懇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鎖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "錯", readings: ["サク", "ソ"],
        phonetic: "昔", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "撮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "擦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "諮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "璽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "爵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "趣", readings: ["シュ", "ソク"],
        phonetic: "取", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "儒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "襲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "醜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "獣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瞬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "償", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "礁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "衝", readings: ["ショウ"],
        phonetic: "重", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "鐘", readings: ["ショウ", "シュ"],
        phonetic: "童", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "壌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嬢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "譲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "醸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "錠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嘱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "審", readings: ["シン"],  // variant of 审
        type: KTypeEnum.no_clue
    },
    {
        kanji: "薪", readings: ["シン"],
        phonetic: "新", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "震", readings: ["シン"],
        phonetic: "辰", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "錘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "髄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "澄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瀬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "請", readings: ["セイ", "シン", "ショウ"],
        phonetic: "青", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "籍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "繊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "薦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鮮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "繕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "礎", readings: ["ソ"],
        phonetic: "楚", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "槽", readings: ["ソウ"],
        phonetic: "曹", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "燥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "藻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "霜", readings: ["ソウ"],
        phonetic: "相", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "騒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "贈", readings: ["ゾウ", "ソウ"],
        phonetic: "曽", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "濯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "濁", readings: ["ダク", "ジョク"],
        phonetic: "蜀", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "諾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鍛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "壇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鋳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "駐", readings: ["チュウ", "チュ"],
        phonetic: "主", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "懲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "聴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鎮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "墜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "締", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "徹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "撤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "踏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "騰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "闘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "篤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "曇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "濃", readings: ["ノウ", "ジョウ"],
        phonetic: "農", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "覇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "輩", readings: ["ハイ"],
        phonetic: "非", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "賠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "薄", readings: ["ハク"],
        phonetic: "溥", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "爆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縛", readings: ["バク", "ハク"],
        phonetic: "尃", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "繁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "藩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "範", readings: ["ハン"],
        phonetic: "氾", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "盤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "罷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "避", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頻", readings: ["ヒン", "ビン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "敷", readings: ["フ"],
        phonetic: "尃", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "膚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "譜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "覆", readings: ["フク", "フ", "フウ"],
        phonetic: "复", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "噴", readings: ["フン", "ホン"],
        phonetic: "賁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "墳", readings: ["フン"],
        phonetic: "賁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "憤", readings: ["フン"],
        phonetic: "賁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "幣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "壁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "癖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舗", readings: ["ホ", "フ"],
        phonetic: "甫", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "穂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "簿", readings: ["ボ", "ホ"],
        phonetic: "溥", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "縫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "褒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "膨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "墨", readings: ["ボク", "モク"],
        phonetic: "黒", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "撲", readings: ["ボク", "ホク"],
        phonetic: "菐", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "翻", readings: ["ホン", "ハン"],
        phonetic: "番", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "摩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "磨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "魔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "繭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "魅", readings: ["ミ", "ビ"],
        phonetic: "未", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "霧", readings: ["ム", "ブ"],
        phonetic: "務", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "黙", readings: ["モク", "ボク"],
        phonetic: "黒", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "躍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "癒", readings: ["ユ"],
        phonetic: "兪", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "諭", readings: ["ユ"],
        phonetic: "兪", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "憂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "融", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "窯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謡", readings: ["ヨウ"],
        phonetic: "䍃", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "翼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "羅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "欄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "濫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "履", readings: ["リ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "離", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寮", readings: ["リョウ"],
        phonetic: "尞", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "療", readings: ["リョウ"],
        phonetic: "尞", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "糧", readings: ["リョウ", "ロウ"],
        phonetic: "量", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "隣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "霊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "麗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "齢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "擁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "露", readings: [],
        type: KTypeEnum.no_clue
    },

    /* Kanji added to Joyo in 2008 */

    {
        kanji: "藤", readings: ["トウ"],
        phonetic: "滕", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "誰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "俺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "岡", readings: ["コウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "頃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "阪", readings: ["ハン"],
        phonetic: "反", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "韓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弥", readings: ["ビ", "ミ"],  // obscure phonetic 爾
        type: KTypeEnum.no_clue
    },
    {
        kanji: "那", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鹿", readings: ["ロク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "斬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虎", readings: ["コ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "狙", readings: ["ソ", "ショ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "脇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "熊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尻", readings: ["コウ"],
        phonetic: "九", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "旦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "闇", readings: ["アン"],
        phonetic: "音", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "籠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "呂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "亀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "膝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鶴", readings: ["カク"],
        phonetic: "隺", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "匂", readings: [""],
        type: KTypeEnum.kokuji
    },
    {
        kanji: "沙", readings: ["サ", "シャ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "須", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "椅", readings: ["い"],
        phonetic: "奇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "股", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "眉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鎌", readings: ["レン"],
        phonetic: "兼", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "凄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謎", readings: ["メイ", "ベイ"],
        phonetic: "迷", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "稽", readings: ["ケイ"],
        phonetic: "旨", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "曾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蹴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鍵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "膳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "袖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "駒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "剥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鍋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "湧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "葛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "梨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貼", readings: ["チョウ", "テン"],
        phonetic: "占", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "拉", readings: ["ラ", "ラツ", "ロウ"],
        phonetic: "立", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "枕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "顎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "苛", readings: ["カ"],
        phonetic: "可", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "蓋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "裾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腫", readings: ["シュ", "ショウ"],
        phonetic: "重", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "爪", readings: ["ソウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "嵐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鬱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妖", readings: ["ヨウ"],
        phonetic: "夭", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "藍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "捉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "崖", readings: ["ガイ"],
        phonetic: "厓", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "叱", readings: ["しつ", "しち"],
        phonetic: "七", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "瓦", readings: ["ガ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "拳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "呪", readings: ["ジュ", "シュウ"],
        phonetic: "兄", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "汰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "昧", readings: ["マイ", "バイ"],
        phonetic: "未", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "唾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "艶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "痕", readings: ["コン"],
        phonetic: "艮", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "諦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "餅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瞳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "淫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "錦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "箸", readings: ["チョ"],
        phonetic: "者", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "戚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蒙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妬", readings: ["ト"],
        phonetic: "石", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "蔑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嗅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蜜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "戴", readings: ["タイ"],
        phonetic: "𢦏", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "痩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "怨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "醒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詣", readings: ["ケイ"],
        phonetic: "旨", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "窟", readings: ["クツ"],
        phonetic: "屈", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "巾", readings: ["キン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "蜂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "骸", readings: ["ガイ", "カイ"],
        phonetic: "蜀", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "弄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嫉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "罵", readings: ["バ"],
        phonetic: "馬", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "璧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "阜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "埼", readings: ["キ"],
        phonetic: "奇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "伎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "曖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "餌", readings: ["じ"],
        phonetic: "耳", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "爽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詮", readings: ["セン"],
        phonetic: "全", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "芯", readings: ["シン"],
        phonetic: "心", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "綻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肘", readings: ["チュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "麓", readings: ["ロク"],
        phonetic: "鹿", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "憧", readings: ["ショウ", "ドウ"],
        phonetic: "童", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "頓", readings: ["トン", "トツ"],
        phonetic: "屯", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "牙", readings: ["ガ", "ゲ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "咽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嘲", readings: ["チョウ", "トウ"],
        phonetic: "朝", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "臆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "溺", readings: ["デキ", "ニョウ", "ジョウ"],
        phonetic: "弱", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "侶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "丼", readings: ["タン", "トン"],
        type: KTypeEnum.kokuji
    },
    {
        kanji: "瘍", readings: ["ヨウ"],
        phonetic: "昜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "僅", readings: ["キン"],
        phonetic: "堇", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "諜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "柵", readings: ["サク"],
        phonetic: "冊", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "腎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "梗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瑠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "羨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "畿", readings: ["キ"],
        phonetic: "幾", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "畏", readings: ["イ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瞭", readings: ["リョウ"],
        phonetic: "尞", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "踪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "栃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蔽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "茨", readings: ["シ"],
        phonetic: "次", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "慄", readings: ["リツ"],
        phonetic: "栗", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "傲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虹", readings: ["コウ"],
        phonetic: "工", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "捻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "臼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喩", readings: ["ユ"],
        phonetic: "兪", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "萎", readings: ["イ"],
        phonetic: "委", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "腺", readings: ["セン"],
        phonetic: "泉", phonetic_id: -1,
        type: KTypeEnum.kokuji
    },
    {
        kanji: "桁", readings: ["コウ"],
        phonetic: "行", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "玩", readings: ["ガン"],
        phonetic: "元", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "冶", readings: ["や"], // maybe 台
        type: KTypeEnum.no_clue
    },
    {
        kanji: "羞", readings: ["シュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "惧", readings: ["グ", "ク"],
        phonetic: "具", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "舷", readings: ["ゲン"],
        phonetic: "玄", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "貪", readings: ["ドン", "タン"], // phonetic 今?
        type: KTypeEnum.no_clue
    },
    {
        kanji: "采", readings: ["サイ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "堆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "煎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "冥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旺", readings: ["オウ"],
        phonetic: "王", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "麺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "璃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "串", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "填", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "箋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "脊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "緻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "辣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "摯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "汎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "哨", readings: ["ショウ"],
        phonetic: "肖", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "氾", readings: ["ハン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "諧", readings: ["カイ"],
        phonetic: "皆", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "媛", readings: ["エン"],
        phonetic: "爰", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "彙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恣", readings: ["シ"],
        phonetic: "次", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "聘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沃", readings: ["ヨク", "オク"],
        phonetic: "夭", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "憬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "捗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訃", readings: ["フ"],
        phonetic: "卜", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },


    /* WK additional kanji set */
    {
        kanji: "遥", readings: ["ヨウ"],
        phonetic: "䍃", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },


    /* Template No Clue */
    {
        kanji: "", readings: [],
        type: KTypeEnum.no_clue
    },
    /* Template Indicative */
    {
        kanji: "", readings: [],
        type: KTypeEnum.indicative
    },
    /* Template Phonetic */
    {
        kanji: "", readings: [],
        phonetic: null, phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
];

var phon_db = [
    /* List of all phonetic components here ... */
    {
        phonetic: "七", readings: ["しち", "しつ"],
        compounds: ["叱","切"],
        non_compounds: [],
        xrefs: ["七"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "十", readings: ["ジュウ", "ジッ", "シュウ"],
        compounds: ["汁", "針"],
        non_compounds: ["計"],
        xrefs: ["十"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "土", readings: ["ト", "ド"],
        compounds: ["吐", "社"],
        non_compounds: [],
        xrefs: ["土"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "大", readings: ["ダイ", "タイ"],
        compounds: ["戻"],
        non_compounds: [],
        xrefs: ["大"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "子", readings: ["シ", "ス"],
        compounds: ["字"],
        non_compounds: [],
        xrefs: ["子"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "早", readings: ["そう"],
        compounds: ["草"],
        non_compounds: [],
        xrefs: ["早"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "寸", readings: ["ソン", "スン"],
        compounds: ["村"],
        non_compounds: ["討", "耐"],
        xrefs: ["寸"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "屯", readings: ["トン", "チュン", "ドン"],
        compounds: ["討", "純", "春", "鈍", "頓"],
        non_compounds: [],
        xrefs: ["屯"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "丁", readings: ["チョウ", "テイ", "トウ"],
        compounds: ["庁", "灯", "町", "亭", "頂", "訂", "打"],
        non_compounds: [],
        xrefs: ["丁"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "化", readings: ["カ", "ケ", "ゲ"],
        compounds: ["花", "貨", "靴"],
        non_compounds: [],
        xrefs: ["化"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "見", readings: ["ケン", "ゲン"],
        compounds: ["現"],
        non_compounds: [],
        xrefs: ["見"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "貝", readings: ["バイ", "マイ"],
        compounds: ["敗"],
        non_compounds: ["買"],
        xrefs: ["貝"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "赤", readings: ["セキ", "シャク"],
        compounds: ["赦"],
        non_compounds: [],
        xrefs: ["赤"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "足", readings: ["ソク", "ショク"],
        compounds: ["促"],
        non_compounds: [],
        xrefs: ["足"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "方", readings: ["ホウ", "ぼう"],   // added ぼう, no reason found
        compounds: ["坊", "妨", "芳", "防", "放", "肪", "房", "紡", "訪"],
        non_compounds: [],
        xrefs: ["方"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "古", readings: ["コ"],
        compounds: ["苦", "固", "故", "枯"],
        non_compounds: [],
        xrefs: ["古"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "生", readings: ["セイ", "ショウ"],
        compounds: ["姓", "性", "牲", "星", "青"],
        non_compounds: [],
        xrefs: ["生"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "青", readings: ["セイ", "ショウ"],
        compounds: ["情", "清", "精", "請", "晴"],
        non_compounds: [],
        xrefs: ["青", "生"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "且", readings: ["ショ", "ソ", "ショウ"],
        compounds: ["助", "狙", "阻", "祖", "租", "組", "粗"],
        non_compounds: [],
        xrefs: ["且"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "各", readings: ["かく"],
        compounds: ["客", "格", "略", "絡", "路", "酪", "閣", "額"],
        non_compounds: [],
        xrefs: ["各"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "主", readings: ["シュ", "ス"],
        compounds: ["住", "注", "柱", "駐"],
        non_compounds: [],
        xrefs: ["主"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "几", readings: ["キ"],
        compounds: ["机", "肌", "飢"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "亡", readings: ["ボウ", "モウ"],
        compounds: ["妄", "忘", "盲", "忙", "望"],
        non_compounds: [],
        xrefs: ["亡"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "干", readings: ["カン"],
        compounds: ["刊", "汗", "肝", "岸", "幹", "軒"],
        non_compounds: [],
        xrefs: ["干"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "己", readings: ["こ", "き"],
        compounds: ["妃", "忌", "紀", "記", "配", "改"],
        non_compounds: [],
        xrefs: ["己"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "工", readings: ["コウ", "ク"],
        compounds: ["功", "江", "紅", "虹", "空", "貢", "攻"],
        non_compounds: [],
        xrefs: ["工"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "及", readings: ["キュウ"],
        compounds: ["吸", "扱", "急", "級"],
        non_compounds: [],
        xrefs: ["及"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "中", readings: ["チュウ"],
        compounds: ["仲", "沖", "忠", "衷"],
        non_compounds: [],
        xrefs: ["中"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "反", readings: ["ハン","ホン","タン"],
        compounds: ["坂", "阪", "返", "板", "版", "販", "飯"],
        non_compounds: [],
        xrefs: ["反"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "白", readings: ["ハク", "ビャク"],
        compounds: ["伯", "泊", "拍", "迫", "舶"],
        non_compounds: [],
        xrefs: ["白"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "皮", readings: ["ヒ"],
        compounds: ["披", "彼", "波", "破", "疲", "被"],
        non_compounds: [],
        xrefs: ["皮"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "包", readings: ["ホウ"],
        compounds: ["砲", "飽", "抱", "泡", "胞"],
        non_compounds: [],
        xrefs: ["包"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "可", readings: ["カ", "コク"],
        compounds: ["何", "河", "苛"],
        non_compounds: [],
        xrefs: ["可"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "司", readings: ["し", "す"],
        compounds: ["伺", "詞", "飼", "嗣"],
        non_compounds: [],
        xrefs: ["司"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "召", readings: ["ショウ"],
        compounds: ["招", "沼", "昭", "紹", "詔", "超"],
        non_compounds: [],
        xrefs: ["召"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "寺", readings: ["ジ"],
        compounds: ["侍", "待", "持", "時", "特", "詩"],
        non_compounds: [],
        xrefs: ["寺"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "圭", readings: ["ケイ"],
        compounds: ["街", "掛"],
        non_compounds: [],
        xrefs: ["圭", "厓"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "交", readings: ["コウ"],
        compounds: ["郊", "校", "絞", "較"],
        non_compounds: ["効"],
        xrefs: ["交"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "我", readings: ["ガ"],
        compounds: ["餓"],
        non_compounds: [],
        xrefs: ["我"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "義", readings: ["ギ"],
        compounds: ["儀", "犠", "議"],
        non_compounds: [],
        xrefs: ["義"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "兪", readings: ["ユ"],
        compounds: ["愉", "喩", "癒", "諭", "輸"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "由", readings: ["ユ", "ユウ", "ユイ"],
        compounds: ["油", "宙", "笛", "軸"],
        non_compounds: [],
        xrefs: ["由"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "莫", readings: ["バク", "マク", "ボ", "モ"],
        compounds: ["募", "墓", "幕", "漠", "慕", "模", "膜", "暮"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "小", readings: ["しょう"],
        compounds: ["肖"],
        non_compounds: [],
        xrefs: ["小"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "肖", readings: ["ショウ"],
        compounds: ["削", "哨", "宵", "消", "硝"],
        non_compounds: [],
        xrefs: ["肖", "小"], xref_ids: [],
        quality: -1.0
    },

    {
        phonetic: "山", readings: ["サン", "セン"],
        compounds: ["仙"],
        non_compounds: [],
        xrefs: ["山"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "文", readings: ["ブン", "モン"],
        compounds: ["紋", "蚊"],
        non_compounds: [],
        xrefs: ["文"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "王", readings: ["おう"],
        compounds: [""],
        non_compounds: ["旺"],
        xrefs: ["王"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "正", readings: ["セイ", "ショウ"],
        compounds: ["征", "定", "政", "症", "証", "整"],
        non_compounds: [],
        xrefs: ["正"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "出", readings: ["シュツ", "スイ"],
        compounds: ["拙"],
        non_compounds: [],
        xrefs: ["出"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "左", readings: ["さ"],
        compounds: ["佐", "差"],
        non_compounds: [],
        xrefs: ["左"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "石", readings: ["セキ", "シャク", "コク", "ジャク"],
        compounds: ["拓", "妬"],
        non_compounds: [],
        xrefs: ["石"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "立", readings: ["リツ", "リュウ"],
        compounds: ["位", "拉", "泣", "粒", "翌"],
        non_compounds: [],
        xrefs: ["立"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "先", readings: ["セン"],
        compounds: ["洗", "銑"],
        non_compounds: [],
        xrefs: ["先"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "名", readings: ["メイ", "ミョウ"],
        compounds: ["銘"],
        non_compounds: [],
        xrefs: ["名"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "音", readings: ["オン", "イン"],
        compounds: ["暗", "闇"],
        non_compounds: [],
        xrefs: ["音"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "才", readings: ["サイ"],
        compounds: ["材", "財"],
        non_compounds: [],
        xrefs: ["才"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "内", readings: ["ナイ", "ダイ", "ノウ", "ドウ"],
        compounds: ["納"],
        non_compounds: [],
        xrefs: ["内"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "午", readings: ["ゴ"],
        compounds: ["許"],
        non_compounds: [],
        xrefs: ["午"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "元", readings: ["ゲン", "ガン"],
        compounds: ["玩", "頑"],
        non_compounds: [],
        xrefs: ["元"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "今", readings: ["コン", "キン"],
        compounds: ["含", "吟", "念"],
        non_compounds: [],
        xrefs: ["今"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "公", readings: ["コウ", "ク"],
        compounds: ["松", "翁", "訟"],
        non_compounds: [],
        xrefs: ["公"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "戸", readings: ["コ"],
        compounds: ["所", "雇"],
        non_compounds: [],
        xrefs: ["戸"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "止", readings: ["シ"],
        compounds: ["企", "祉", "歯"],
        non_compounds: [],
        xrefs: ["止"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "分", readings: ["フン", "ブン", "ブ"],
        compounds: ["盆", "貧", "粉", "紛", "雰", "頒"],
        non_compounds: [],
        xrefs: ["分"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "少", readings: ["しょう"],
        compounds: ["秒"],
        non_compounds: ["沙"],
        xrefs: ["少"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "半", readings: ["ハン"],
        compounds: ["伴", "判", "畔"],
        non_compounds: [],
        xrefs: ["半"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "北", readings: ["ホク"],
        compounds: ["背"],
        non_compounds: [],
        xrefs: ["北"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "兄", readings: ["ケイ", "キョウ"],
        compounds: ["呪", "況"],
        non_compounds: ["祝"],
        xrefs: ["兄"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "広", readings: ["コウ"],
        compounds: ["拡", "鉱"],
        non_compounds: [],
        xrefs: ["広"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "失", readings: ["シツ", "イツ"],
        compounds: ["迭", "秩"],
        non_compounds: [],
        xrefs: ["失"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "矢", readings: ["シ"],
        compounds: ["疾"],
        non_compounds: ["疑"],
        xrefs: ["矢"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "会", readings: ["カイ", "エ"],
        compounds: ["絵"],
        non_compounds: [],
        xrefs: ["会"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "合", readings: ["ゴウ", "ガッ", "カッ", "コウ"],
        compounds: ["拾", "給", "答"],
        non_compounds: [],
        xrefs: ["合"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "同", readings: ["ドウ"],
        compounds: ["洞", "筒", "銅", "胴"],
        non_compounds: [],
        xrefs: ["同"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "米", readings: ["ベイ", "マイ", "メ"],
        compounds: ["迷"],
        non_compounds: [],
        xrefs: ["米"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "迷", readings: ["メイ"],
        compounds: ["謎"],
        non_compounds: [],
        xrefs: ["迷", "米"], xref_ids: [],
        quality: -1.0
    },

    {
        phonetic: "考", readings: ["コウ"],
        compounds: ["拷"],
        non_compounds: [],
        xrefs: ["考"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "売", readings: ["バイ"],
        compounds: ["続", "読"],
        non_compounds: [],
        xrefs: ["売"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "谷", readings: ["コク"],
        compounds: ["俗", "浴", "容", "欲", "裕"],
        non_compounds: [],
        xrefs: ["谷"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "量", readings: ["リョウ", "ロウ"],
        compounds: ["糧"],
        non_compounds: [],
        xrefs: ["量"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "制", readings: ["セイ"],
        compounds: ["製"],
        non_compounds: [],
        xrefs: ["制"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "斤", readings: ["キン"],
        compounds: ["近", "析", "祈"],
        non_compounds: [],
        xrefs: ["斤"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "里", readings: ["リ"],
        compounds: ["理", "裏"],
        non_compounds: ["厘"],
        xrefs: ["里"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "東", readings: ["トウ"],
        compounds: ["凍", "棟"],
        non_compounds: [],
        xrefs: ["東"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "京", readings: ["キョウ", "ケイ", "キン"],
        compounds: ["景", "鯨"],
        non_compounds: [],
        xrefs: ["京"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "直", readings: ["チョク", "ジキ", "チ"],
        compounds: ["値", "植", "殖", "置"],
        non_compounds: [],
        xrefs: ["直"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "未", readings: ["ミ", "ビ"],
        compounds: ["味", "妹", "昧", "魅"],
        non_compounds: [],
        xrefs: ["未"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "占", readings: ["セン", "てん"],  // added phonetic てん, but found no reason
        compounds: ["店", "貼", "粘", "点"],
        non_compounds: [],
        xrefs: ["占"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "明", readings: ["メイ", "ミョウ", "ミン"],
        compounds: ["盟"],
        non_compounds: [],
        xrefs: ["明"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "歩", readings: ["ホ", "ブ", "フ"],
        compounds: [],
        non_compounds: ["頻", "渉"],
        xrefs: ["歩"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "長", readings: ["チョウ"],
        compounds: ["帳", "張"],
        non_compounds: [],
        xrefs: ["長"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "門", readings: ["モン", "ボン"],
        compounds: ["問", "聞"],
        non_compounds: [],
        xrefs: ["門"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "是", readings: ["ゼ", "シ", "テイ", "ダイ"], // added ダイ, テイ to readings, no source
        compounds: ["堤", "提", "題"],
        non_compounds: [],
        xrefs: ["是"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "象", readings: ["ショウ", "ゾウ"],
        compounds: ["像"],
        non_compounds: [],
        xrefs: ["象"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "袁", readings: ["えん", "おん"],  // TODO: missing compound info, search!
        compounds: ["遠, 園"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "示", readings: ["ジ", "シ"],
        compounds: ["視"],
        non_compounds: [],
        xrefs: ["示"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "秋", readings: ["シュウ"],
        compounds: ["愁"],
        non_compounds: [],
        xrefs: ["秋"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "弱", readings: ["ジャク", "ニャク"],
        compounds: ["溺"],
        non_compounds: [],
        xrefs: ["弱"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "朱", readings: ["シュ", "ス"],
        compounds: ["株", "殊", "珠"],
        non_compounds: [],
        xrefs: ["朱"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "甫", readings: ["ホ", "フ"],
        compounds: ["浦", "捕", "補", "舗"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "辰", readings: ["シン"],
        compounds: ["唇", "娠", "振", "震"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "良", readings: ["リョウ", "ロウ"],
        compounds: ["浪", "郎", "朗"],
        non_compounds: [],
        xrefs: ["良"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "非", readings: ["ヒ"],
        compounds: ["俳", "排", "悲", "扉", "輩"],
        non_compounds: ["罪"],
        xrefs: ["非"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "其", readings: ["キ"],
        compounds: ["期", "欺", "棋", "基", "旗"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "巠", readings: ["ケイ"],
        compounds: ["茎", "径", "経", "軽"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "馬", readings: ["バ", "メ", "マ"],
        compounds: ["罵"],
        non_compounds: [],
        xrefs: ["馬"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "高", readings: ["こう"],
        compounds: ["稿"],
        non_compounds: [],
        xrefs: ["高"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "囟", readings: ["シン", "シ"],
        compounds: ["細", "思"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "周", readings: ["シュウ", "ス"],
        compounds: ["彫", "週", "調"],
        non_compounds: [],
        xrefs: ["周"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "予", readings: ["よ"],
        compounds: ["序", "野", "預"],
        non_compounds: [],
        xrefs: ["予"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "昜", readings: ["ヨウ"],  // TODO: incomplete info, search!
        compounds: ["場", "陽", "瘍", "湯", "腸"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "道", readings: ["ドウ", "トウ"],
        compounds: ["導"],
        non_compounds: [],
        xrefs: ["道"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "番", readings: ["バン", "ハン", "ハ"],
        compounds: ["翻"],
        non_compounds: ["審"],
        xrefs: ["番"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: phonetic 五 theory?
        phonetic: "吾", readings: ["ゴ"],
        compounds: ["悟", "語"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "賓", readings: ["ヒン"],  // TODO info missing, search!
        compounds: ["浜"],
        non_compounds: [],
        xrefs: ["賓"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "卜", readings: ["ボク", "ホク"],
        compounds: ["朴", "訃", "赴"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "氾", readings: ["はん"],
        compounds: ["範"],
        non_compounds: [],
        xrefs: ["氾"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "奇", readings: ["キ"],
        compounds: ["埼", "崎", "寄", "椅", "騎"],
        non_compounds: [],
        xrefs: ["奇"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "皆", readings: ["カイ"],
        compounds: ["階", "諧"],
        non_compounds: [],
        xrefs: ["皆"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "不", readings: ["フ", "ブ"],
        compounds: ["杯"],
        non_compounds: [],
        xrefs: ["不"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "加", readings: ["カ"],
        compounds: ["架", "賀"],
        non_compounds: [],
        xrefs: ["加"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "弋", readings: ["ヨク", "イキ"],
        compounds: ["代", "式"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "代", readings: [],
        compounds: ["袋", "貸"],
        non_compounds: [],
        xrefs: ["代", "弋"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "央", readings: ["オウ", "ヨウ", "エイ"],
        compounds: ["英", "映"],
        non_compounds: [],
        xrefs: ["央"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "勺", readings: ["シャク"],
        compounds: ["約", "酌", "釣"],
        non_compounds: [],
        xrefs: ["勺"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "氐", readings: ["テイ", "タイ"],
        compounds: ["低", "底", "抵", "邸"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "兌", readings: ["ダ", "タイ", "エツ", "エイ"],
        compounds: ["悦", "脱", "税", "説", "鋭"],
        non_compounds: [],
        xrefs: ["兌"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "曽", readings: ["ソウ", "ゾ",  "ソ", "ゾウ"],  // TODO: no list, search!
        compounds: ["贈", "僧", "増", "層", "噌", "憎"], // TODO: 噌 not in joyo!
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "菐", readings: ["ホク", "ボク"],
        compounds: ["撲", "僕"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "取", readings: ["シュ"],
        compounds: ["趣"],
        non_compounds: [],
        xrefs: ["取"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "卓", readings: ["タク"],
        compounds: ["悼"],
        non_compounds: [],
        xrefs: ["卓"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "昔", readings: ["セキ", "シャク"],
        compounds: ["借", "措", "錯"],
        non_compounds: [],
        xrefs: ["昔"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "具", readings: ["グ", "ク"],
        compounds: ["惧"],
        non_compounds: [],
        xrefs: ["具"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "台", readings: ["ダイ", "タイ"],
        compounds: [""],
        non_compounds: ["冶", "治", "始"],
        xrefs: ["台"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "申", readings: ["シン"],
        compounds: ["伸", "神", "紳", "陳"],
        non_compounds: ["電"],
        xrefs: ["申"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "鹿", readings: ["ロク"],
        compounds: ["麓"],
        non_compounds: [],
        xrefs: "鹿", xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "心", readings: ["シン"],
        compounds: ["芯"],
        non_compounds: [],
        xrefs: ["心"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "全", readings: ["ゼン", "セン"],
        compounds: ["詮", "栓"],
        non_compounds: [],
        xrefs: ["全"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "耳", readings: ["じ"],
        compounds: ["餌", "恥"],
        non_compounds: [],
        xrefs: ["耳"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "𢦏", readings: ["サイ"],
        compounds: ["災", "栽", "裁", "載", "戴"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "原", readings: ["ゲン", "ガン", "ゴン"],
        compounds: ["源", "願"],
        non_compounds: [],
        xrefs: ["原"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "家", readings: ["カ", "ケ"],
        compounds: ["嫁", "稼"],
        non_compounds: [],
        xrefs: ["家"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "氏", readings: ["シ"],
        compounds: ["紙"],
        non_compounds: [],
        xrefs: ["氏"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "者", readings: ["シャ", "しょ"],　// added しょ, but found no reason
        compounds: ["都", "暑", "煮", "署", "箸", "諸", "書"],
        non_compounds: [],
        xrefs: ["者", "煮"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "甬", readings: ["ツウ", "ヨウ", "ユウ"],
        compounds: ["通", "痛"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "㕣", readings: ["エン"],
        compounds: ["船", "沿", "鉛"],
        non_compounds: [],
        xrefs: ["㕣", "兌"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "黄", readings: ["コウ", "オウ"],
        compounds: ["広", "横"],
        non_compounds: [],
        xrefs: ["黄", "広"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "黒", readings: ["コク"],
        compounds: ["墨", "黙"],
        non_compounds: [],
        xrefs: ["黒"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "朝", readings: ["チョウ"],
        compounds: ["嘲", "潮"],
        non_compounds: [],
        xrefs: ["朝"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "間", readings: ["カン", "ケン"],
        compounds: ["簡"],
        non_compounds: [],
        xrefs: ["間"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "云", readings: ["ウン"],
        compounds: ["芸", "雲", "魂"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "果", readings: ["カ"],
        compounds: ["菓", "裸", "課"],
        non_compounds: [],
        xrefs: ["果"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "卒", readings: ["ソツ", "シュツ"],
        compounds: ["砕", "粋"],
        non_compounds: [],
        xrefs: ["卒"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "列", readings: ["レツ"],
        compounds: ["例", "烈", "裂"],
        non_compounds: [],
        xrefs: ["列"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "参", readings: ["サン", "シン"],
        compounds: ["惨"],
        non_compounds: [],
        xrefs: ["参"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "官", readings: ["カン"],
        compounds: ["棺", "管", "館"],
        non_compounds: [],
        xrefs: ["官"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "付", readings: ["フ"],
        compounds: ["府", "附", "符", "腐"],
        non_compounds: [],
        xrefs: ["付"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "牙", readings: ["ガ", "ゲ"],
        compounds: ["芽", "邪", "雅"],
        non_compounds: [],
        xrefs: ["牙"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "新", readings: ["シン"],
        compounds: ["薪"],
        non_compounds: [],
        xrefs: ["新"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "楽", readings: ["ガク", "ラク", "ゴウ", "ギョウ"],
        compounds: ["薬"],
        non_compounds: [],
        xrefs: ["楽"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "尞", readings: ["リョウ"],
        compounds: ["僚", "寮", "瞭"],
        non_compounds: [],
        xrefs: ["尞"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "泉", readings: ["セン"],
        compounds: ["腺", "線"],
        non_compounds: [],
        xrefs: ["泉"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "辛", readings: ["シン"],
        compounds: ["亲"],
        non_compounds: [],
        xrefs: ["辛"], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "亲", readings: ["シン"],
        compounds: ["親"],
        non_compounds: [],
        xrefs: ["亲", "辛"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "豆", readings: ["トウ", "ズ"],
        compounds: ["短", "痘", "登", "頭"],
        non_compounds: [],
        xrefs: ["豆"], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "彦", readings: ["ゲン"],
        compounds: ["顔"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "夫", readings: ["フ", "フウ", "ブ"],
        compounds: ["扶"],
        non_compounds: [],
        xrefs: ["夫"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "史", readings: ["シ"],
        compounds: ["使"],
        non_compounds: [],
        xrefs: ["史"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "幸", readings: ["コウ"],
        compounds: [""],
        non_compounds: [],
        xrefs: ["幸"], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "畐", readings: ["フク", "ヒョク", "ヒキ"],  // TODO incomplete, search !
        compounds: ["富", "福", "副", "幅"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "次", readings: ["ジ", "シ"],
        compounds: ["姿", "茨", "恣", "資"],
        non_compounds: [],
        xrefs: ["次"], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "寅", readings: ["イン"],
        compounds: ["演"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "貫", readings: ["カン"],
        compounds: ["慣"],
        non_compounds: [],
        xrefs: ["貫"], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "賁", readings: ["ヒ", "ホン", "フン"], // TODO no info, search!
        compounds: ["憤", "噴", "墳"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "冓", readings: ["コウ"],
        compounds: ["溝", "構", "講", "購"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "雇", readings: ["コ"],
        compounds: ["顧"],
        non_compounds: [],
        xrefs: ["雇", "戸"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "必", readings: ["ヒツ"],
        compounds: ["泌", "秘"],
        non_compounds: [],
        xrefs: ["必"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "末", readings: ["マツ", "バツ"],
        compounds: ["抹"],
        non_compounds: [],
        xrefs: ["末"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "昆", readings: ["コン"],
        compounds: ["混"],
        non_compounds: [],
        xrefs: ["昆"], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "艮", readings: ["コン", "ゴン"],
        compounds: ["限", "恨", "根", "眼", "痕", "銀"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "多", readings: ["た"],
        compounds: ["移"],
        non_compounds: [],
        xrefs: ["多"], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "弗", readings: ["フツ", "ホツ"],
        compounds: ["仏", "沸", "払"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "丩", readings: ["キュウ"],
        compounds: ["叫、糾"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "冊", readings: ["サツ", "サク"],
        compounds: ["柵"],
        non_compounds: [],
        xrefs: ["冊"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "区", readings: ["ク", "オウ"],
        compounds: ["欧", "殴", "駆", "枢"],
        non_compounds: [],
        xrefs: ["区"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "平", readings: ["ヘイ", "ビョウ", "ヒョウ"],
        compounds: ["坪", "評"],
        non_compounds: [],
        xrefs: ["平"], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "也", readings: ["ヤ"],
        compounds: ["地", "池", "他", "施"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "向", readings: ["コウ", "キョウ", "ショウ"],
        compounds: ["尚"],
        non_compounds: [],
        xrefs: ["向"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "州", readings: ["シュウ"],
        compounds: ["酬"],
        non_compounds: [],
        xrefs: ["州"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "安", readings: ["アン"],
        compounds: ["案"],
        non_compounds: [],
        xrefs: ["安"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "羊", readings: ["ヨウ", "ショウ", "ジョウ"],
        compounds: ["洋", "祥", "詳", "養"],
        non_compounds: [],
        xrefs: ["羊"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "有", readings: ["ユウ", "ウ"],
        compounds: ["賄"],
        non_compounds: [],
        xrefs: ["有"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "君", readings: ["クン"],
        compounds: ["郡", "群"],
        non_compounds: [],
        xrefs: ["君"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "役", readings: ["ヤク", "エキ"],
        compounds: ["疫"],
        non_compounds: [],
        xrefs: ["役"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "九", readings: ["きゅう", "く"],
        compounds: ["尻", "究", "軌"],
        non_compounds: [],
        xrefs: ["九"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "永", readings: ["エイ", "ヨウ"],
        compounds: ["泳", "詠"],
        non_compounds: [],
        xrefs: ["永"], xref_ids: [],
        quality: -1.0
    },{
        phonetic: "乍", readings: ["サ", "サク", "ジャ"],
        compounds: ["詐", "作", "昨", "酢"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "巨", readings: ["キョ", "コ"],
        compounds: ["拒", "距"],
        non_compounds: [],
        xrefs: ["巨"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "吉", readings: ["キチ", "キツ"],
        compounds: ["結", "詰"],
        non_compounds: [],
        xrefs: ["吉"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "朿", readings: ["シ"],
        compounds: ["刺", "策", "責"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "兆", readings: ["チョウ"],
        compounds: ["挑", "逃", "桃", "眺", "跳"],
        non_compounds: [],
        xrefs: ["兆"], xref_ids: [],
        quality: -1.0
    },
    {
    phonetic: "僉", readings: ["ケン"],  // TODO: no list, search!
        compounds: ["倹", "険", "験", "検", "剣"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "則", readings: ["ソク"],
        compounds: ["側", "測", "賊"],
        non_compounds: [],
        xrefs: ["則"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "章", readings: ["ショウ"],
        compounds: ["彰", "障"],
        non_compounds: [],
        xrefs: ["章"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "呉", readings: ["ゴ"],
        compounds: ["娯", "誤", "虞"],
        non_compounds: [],
        xrefs: ["呉"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "蜀", readings: ["ゾク", "ショク"],
        compounds: ["濁", "独", "属", "触"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "亥", readings: ["ガイ", "カイ"],
        compounds: ["刻", "劾", "核", "該", "骸"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "臧", readings: ["ゾウ", "ソウ"],
        compounds: ["蔵"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },

    {
        phonetic: "蔵", readings: ["ゾウ", "ソウ"],
        compounds: ["臓"],
        non_compounds: [],
        xrefs: ["蔵", "臧"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "䍃", readings: ["ヨウ"],
        compounds: ["揺", "謡", "遥"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "余", readings: ["ヨ"],
        compounds: ["徐", "途", "除", "斜"],
        non_compounds: [],
        xrefs: ["余"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "厓", readings: ["ガイ"],
        compounds: ["涯", "崖"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "扁", readings: ["ヘン", "ハン"],
        compounds: ["偏", "遍", "編"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "韋", readings: ["イ"],
        compounds: ["偉", "囲", "違", "衛"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "戠", readings: ["ショク", "シ", "シキ"],  // TODO: no list, search!
        compounds: ["職", "識", "織"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "郷", readings: ["キョウ", "ゴウ"],
        compounds: ["響"],
        non_compounds: [],
        xrefs: ["郷"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "疑", readings: ["ギ"],
        compounds: ["凝", "擬"],
        non_compounds: [],
        xrefs: ["疑"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "爰", readings: ["エン"],
        compounds: ["媛", "援", "緩"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "瞏", readings: ["ケイ", "セン"],
        compounds: ["還", "環"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "雚", readings: ["カン"],  // TODO: no list, search!
        compounds: ["歓", "観"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "隺", readings: ["カク", "コク"],
        compounds: ["鶴"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "堇", readings: ["キン"],
        compounds: ["僅", "勤", "謹", "難"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "刃", readings: ["ジン", "ニン"],
        compounds: ["忍"],
        non_compounds: [],
        xrefs: ["刃"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "𡈼", readings: ["イ"],
        compounds: ["聖", "廷"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "廷", readings: ["テイ"],
        compounds: ["庭", "艇"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "要", readings: ["ヨウ"],  // TODO: no list, search!
        compounds: ["腰"],
        non_compounds: [],
        xrefs: ["要"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "票", readings: ["ヒョウ"],
        compounds: ["漂", "標"],
        non_compounds: [],
        xrefs: ["票"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "尚", readings: ["ショウ"],
        compounds: ["堂", "常", "掌", "当", "賞", "党"],
        non_compounds: [],
        xrefs: ["尚", "向"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "度", readings: ["ド", "ト", "タク"],
        compounds: ["渡"],
        non_compounds: [],
        xrefs: ["度"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "于", readings: ["ウ"],
        compounds: ["宇", "芋", "汚"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "比", readings: ["ヒ", "ビ"],
        compounds: ["批"],
        non_compounds: [],
        xrefs: ["比"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "厶", readings: ["シ", "ボウ", "ム"],
        compounds: ["私"],
        non_compounds: ["仏", "払"],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "厷", readings: ["コウ", "ユウ"],
        compounds: ["雄"],
        non_compounds: [],
        xrefs: ["厷"], xref_ids: [],
        quality: -1.0
    },

    {
        phonetic: "共", readings: ["キョウ", "ク", "クウ", "グ"],
        compounds: ["供", "洪", "恭"],
        non_compounds: [],
        xrefs: ["共"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "兼", readings: ["ケン"],
        compounds: ["嫌", "廉", "鎌", "謙"],
        non_compounds: [],
        xrefs: ["兼"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "勿", readings: ["ブツ", "モツ", "モチ"],
        compounds: ["物"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "委", readings: ["イ"],
        compounds: ["萎"],
        non_compounds: [],
        xrefs: ["委"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "行", readings: ["コウ", "ギョウ", "アン"],
        compounds: ["衡", "桁"],
        non_compounds: [],
        xrefs: ["行"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "玄", readings: ["ゲン"],
        compounds: ["弦", "舷"],
        non_compounds: [],
        xrefs: ["玄"], xref_ids: [],
        quality: -1.0
    },

    {
        phonetic: "采", readings: ["サイ"],
        compounds: ["彩", "採", "菜"],
        non_compounds: [],
        xrefs: ["采"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "朮", readings: ["ジュツ", "シュツ", "チュツ"],
        compounds: ["述", "術"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "受", readings: ["ジュ", "ズ"],  // TODO: incomplete, search!
        compounds: ["授"],
        non_compounds: [],
        xrefs: ["受"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "妾", readings: ["ショウ"],
        compounds: ["接"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "夜", readings: ["ヤ"],  // TODO: no list, search!
        compounds: ["液"],
        non_compounds: [],
        xrefs: ["夜"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "敄", readings: ["ブ", "ム"],
        compounds: ["務"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "務", readings: ["ム", "ブ"],
        compounds: ["霧"],
        non_compounds: [],
        xrefs: ["務", "敄"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "熒", readings: ["エイ", "エイ", "ギョウ"],  // TODO no list, search
        compounds: ["労", "栄", "蛍", "営"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "复", readings: ["フク", "フウ", "ブク", "ブ"],  // TODO: no list, search!
        compounds: ["復", "腹", "複", "覆"],
        non_compounds: [],
        xrefs: ["复", "畐"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "咸", readings: ["カン", "ゲン"],  // TODO: no list, search!
        compounds: ["減", "感"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "感", readings: ["カン"],
        compounds: ["憾"],
        non_compounds: [],
        xrefs: ["感", "咸"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "或", readings: ["ワク", "コク", "ヨク"],
        compounds: ["域", "惑"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "幾", readings: ["キ"],
        compounds: ["機", "畿"],
        non_compounds: [],
        xrefs: ["幾"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "責", readings: ["セキ", "シャク"],  // TODO: no list, search
        compounds: ["積", "債", "漬", "績", "跡"],
        non_compounds: [],
        xrefs: ["責", "朿"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "侖", readings: ["リン"],
        compounds: ["輪", "論", "倫"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "巽", readings: ["ソン"],
        compounds: ["選"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "彔", readings: ["ロク"],
        compounds: ["緑", "録"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "竟", readings: ["ケイ", "キョウ"],
        compounds: ["鏡", "境"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "重", readings: ["ジュウ", "チョウ"],
        compounds: ["動", "腫", "種", "衝"],
        non_compounds: [],
        xrefs: ["重"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "童", readings: ["ドウ", "トウ", "ジュウ", "チョウ"],
        compounds: ["憧", "鐘"],
        non_compounds: [],
        xrefs: ["童", "重"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "𠬝", readings: ["フク", "フウ"],
        compounds: ["服"],
        non_compounds: ["報"],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "旨", readings: ["シ", "ケイ"],    // two different components with the same look, just merge
        compounds: ["指", "脂", "詣", "稽"],
        non_compounds: [],
        xrefs: ["旨"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "相", readings: ["ソウ", "ショウ"],
        compounds: ["想", "箱", "霜"],
        non_compounds: [],
        xrefs: ["相"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "介", readings: ["カイ"],
        compounds: ["界"],
        non_compounds: [],
        xrefs: ["介"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "幵", readings: ["ケン"],   // no list, search!
        compounds: ["研"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "升", readings: ["ショウ"],
        compounds: ["昇"],
        non_compounds: [],
        xrefs: ["升"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "尼", readings: ["ニ", "ジ"],
        compounds: ["泥"],
        non_compounds: [],
        xrefs: ["尼"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "炎", readings: ["エン"],  // why often だん?
        compounds: ["淡", "談"],
        non_compounds: [],
        xrefs: ["炎"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "喬", readings: ["キョウ", "ギョウ"],
        compounds: ["橋", "矯"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "敬", readings: ["ケイ", "キョウ"],
        compounds: ["警", "驚"],
        non_compounds: [],
        xrefs: ["敬"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "丙", readings: ["ヘイ"],
        compounds: ["柄", "病"],
        non_compounds: [],
        xrefs: ["丙"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "㐬", readings: ["リュウ", "ル"],  // TODO: no list, search!
        compounds: ["硫", "流"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "㫃", readings: ["リョ", "ロ"], // no list, search, limited info!
        compounds: ["旅"],
        non_compounds: ["旋", "施", "旗", "族"],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "民", readings: ["ミン"],
        compounds: ["眠"],
        non_compounds: [],
        xrefs: ["民"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "栗", readings: ["リツ", "リ"],
        compounds: ["慄"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "岡", readings: ["コウ"],     // TODO: incomplete list, search!
        compounds: ["綱", "鋼", "剛"],
        non_compounds: [],
        xrefs: ["岡"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "罔", readings: ["モウ", "ボウ", "ム"],
        compounds: ["網"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "瓜", readings: ["カ", "コ"],
        compounds: ["孤", "弧"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "壬", readings: ["ジン", "ニン"],
        compounds: ["任", "妊", "賃"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "肙", readings: ["エン", "ケン"],
        compounds: ["絹"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "知", readings: ["チ"],
        compounds: ["痴"],
        non_compounds: [],
        xrefs: ["知"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "弟", readings: ["テイ", "ダイ", "デ"],
        compounds: ["第"],
        non_compounds: [],
        xrefs: ["弟"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "夭", readings: ["ヨウ"],
        compounds: ["妖", "沃"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "关", readings: ["ショウ", "ソウ"],  // TODO: incomplete, search!
        compounds: ["送", "咲", "笑"],
        non_compounds: ["朕"],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "屈", readings: ["クツ"],
        compounds: ["掘", "堀", "窟"],
        non_compounds: [],
        xrefs: ["屈"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "尃", readings: ["フ", "ハク"],
        compounds: ["敷", "博", "縛"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "溥", readings: ["フ", "ハク"],
        compounds: ["薄", "簿"],
        non_compounds: [],
        xrefs: ["溥", "尃"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "滕", readings: ["トウ", "ドウ"],  // TODO: no list, search!
        compounds: ["藤"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "屋", readings: ["オク"],
        compounds: ["握"],
        non_compounds: [],
        xrefs: ["屋"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "疋", readings: ["ショ", "ソ", "ヒキ", "ヒツ"],
        compounds: ["疎"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "楚", readings: ["ソ", "ショ"],
        compounds: ["礎"],
        non_compounds: [],
        xrefs: ["楚", "疋"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "胥", readings: ["ショ", "ソ"],
        compounds: ["婿"],
        non_compounds: [],
        xrefs: ["胥", "疋"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "庶", readings: ["ショ"],
        compounds: ["遮"],
        non_compounds: [],
        xrefs: ["庶"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "曹", readings: ["ソウ", "ゾウ"],  // no list, search!
        compounds: ["遭", "槽"],
        non_compounds: [],
        xrefs: ["曹"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "農", readings: ["ノウ"],
        compounds: ["濃"],
        non_compounds: [],
        xrefs: ["農"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "乇", readings: ["タク", "チャク"],
        compounds: ["宅", "託"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "禺", readings: ["グ", "グウ"],
        compounds: ["愚", "偶", "遇", "隅"],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },

    /* Template */
    {
        phonetic: "", readings: [],
        compounds: [""],
        non_compounds: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
];

phonetics = {
    "": {
        "readings": [],
        "compounds": [],
        "non_compounds": [],
        "xrefs": [],
        "quality": -1
    },
};

/*
 * Notes stack
 *
 * 静荷
 *
 * Indicative component: 言殳
 */
