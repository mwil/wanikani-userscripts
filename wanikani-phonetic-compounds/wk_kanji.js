/* jshint esversion: 6 */

var wk_kanji_db = JSON.parse(`
{
  "一": {
    "level": 1,
    "character": "一",
    "meaning": "one",
    "onyomi": "いち",
    "kunyomi": "ひと",
    "important_reading": "onyomi",
    "nanori": "かず"
  },
  "二": {
    "level": 1,
    "character": "二",
    "meaning": "two",
    "onyomi": "に",
    "kunyomi": "ふた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "九": {
    "level": 1,
    "character": "九",
    "meaning": "nine",
    "onyomi": "く, きゅう",
    "kunyomi": "ここの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "七": {
    "level": 1,
    "character": "七",
    "meaning": "seven",
    "onyomi": "しち",
    "kunyomi": "なな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "人": {
    "level": 1,
    "character": "人",
    "meaning": "person",
    "onyomi": "にん, じん",
    "kunyomi": "ひと, と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "入": {
    "level": 1,
    "character": "入",
    "meaning": "enter",
    "onyomi": "にゅう",
    "kunyomi": "はい, い",
    "important_reading": "onyomi",
    "nanori": null
  },
  "八": {
    "level": 1,
    "character": "八",
    "meaning": "eight",
    "onyomi": "はち",
    "kunyomi": "や",
    "important_reading": "onyomi",
    "nanori": null
  },
  "力": {
    "level": 1,
    "character": "力",
    "meaning": "power, strength",
    "onyomi": "りょく, りき",
    "kunyomi": "ちから",
    "important_reading": "onyomi",
    "nanori": null
  },
  "十": {
    "level": 1,
    "character": "十",
    "meaning": "ten",
    "onyomi": "じゅう",
    "kunyomi": "とお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "三": {
    "level": 1,
    "character": "三",
    "meaning": "three",
    "onyomi": "さん",
    "kunyomi": "み",
    "important_reading": "onyomi",
    "nanori": null
  },
  "上": {
    "level": 1,
    "character": "上",
    "meaning": "above, up, over",
    "onyomi": "じょう",
    "kunyomi": "うえ, あ, のぼ, うわ, かみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "下": {
    "level": 1,
    "character": "下",
    "meaning": "below, down, under, beneath",
    "onyomi": "か, げ",
    "kunyomi": "した, さが, くだ, お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "口": {
    "level": 1,
    "character": "口",
    "meaning": "mouth",
    "onyomi": "こう, く",
    "kunyomi": "くち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "大": {
    "level": 1,
    "character": "大",
    "meaning": "big, large",
    "onyomi": "たい, だい",
    "kunyomi": "おお",
    "important_reading": "onyomi",
    "nanori": "ひろ"
  },
  "女": {
    "level": 1,
    "character": "女",
    "meaning": "woman",
    "onyomi": "じょ",
    "kunyomi": "おんな, め",
    "important_reading": "onyomi",
    "nanori": null
  },
  "山": {
    "level": 1,
    "character": "山",
    "meaning": "mountain",
    "onyomi": "さん",
    "kunyomi": "やま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "川": {
    "level": 1,
    "character": "川",
    "meaning": "river",
    "onyomi": "せん",
    "kunyomi": "かわ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "工": {
    "level": 1,
    "character": "工",
    "meaning": "construction, industry",
    "onyomi": "こう, く",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "刀": {
    "level": 2,
    "character": "刀",
    "meaning": "sword, katana",
    "onyomi": "とう",
    "kunyomi": "かたな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "土": {
    "level": 2,
    "character": "土",
    "meaning": "soil, earth, ground, dirt",
    "onyomi": "ど, と",
    "kunyomi": "つち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "千": {
    "level": 2,
    "character": "千",
    "meaning": "thousand",
    "onyomi": "せん",
    "kunyomi": "ち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "夕": {
    "level": 2,
    "character": "夕",
    "meaning": "evening",
    "onyomi": "せき",
    "kunyomi": "ゆう",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "子": {
    "level": 2,
    "character": "子",
    "meaning": "child, kid",
    "onyomi": "し, す",
    "kunyomi": "こ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "小": {
    "level": 2,
    "character": "小",
    "meaning": "small, little",
    "onyomi": "しょう",
    "kunyomi": "ちい, こ, お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "丁": {
    "level": 2,
    "character": "丁",
    "meaning": "street, ward",
    "onyomi": "ちょう, てい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "了": {
    "level": 2,
    "character": "了",
    "meaning": "finish, complete, end",
    "onyomi": "りょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "又": {
    "level": 2,
    "character": "又",
    "meaning": "again",
    "onyomi": null,
    "kunyomi": "また",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "丸": {
    "level": 2,
    "character": "丸",
    "meaning": "circle, circular, round",
    "onyomi": "がん",
    "kunyomi": "まる",
    "important_reading": "kunyomi",
    "nanori": ""
  },
  "才": {
    "level": 2,
    "character": "才",
    "meaning": "genius",
    "onyomi": "さい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "中": {
    "level": 2,
    "character": "中",
    "meaning": "middle, in, inside, center",
    "onyomi": "ちゅう",
    "kunyomi": "なか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "五": {
    "level": 2,
    "character": "五",
    "meaning": "five",
    "onyomi": "ご",
    "kunyomi": "いつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "六": {
    "level": 2,
    "character": "六",
    "meaning": "six",
    "onyomi": "ろく",
    "kunyomi": "む",
    "important_reading": "onyomi",
    "nanori": null
  },
  "円": {
    "level": 2,
    "character": "円",
    "meaning": "yen, round, circle",
    "onyomi": "えん",
    "kunyomi": "まる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "天": {
    "level": 2,
    "character": "天",
    "meaning": "heaven",
    "onyomi": "てん",
    "kunyomi": "あま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "手": {
    "level": 2,
    "character": "手",
    "meaning": "hand",
    "onyomi": "しゅ",
    "kunyomi": "て",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "文": {
    "level": 2,
    "character": "文",
    "meaning": "writing, sentence",
    "onyomi": "ぶん, もん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "日": {
    "level": 2,
    "character": "日",
    "meaning": "sun, day",
    "onyomi": "にち, じつ",
    "kunyomi": "ひ, か, び",
    "important_reading": "onyomi",
    "nanori": null
  },
  "月": {
    "level": 2,
    "character": "月",
    "meaning": "moon, month",
    "onyomi": "げつ, がつ",
    "kunyomi": "つき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "木": {
    "level": 2,
    "character": "木",
    "meaning": "tree, wood",
    "onyomi": "もく",
    "kunyomi": "き, こ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "水": {
    "level": 2,
    "character": "水",
    "meaning": "water",
    "onyomi": "すい",
    "kunyomi": "みず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "火": {
    "level": 2,
    "character": "火",
    "meaning": "fire",
    "onyomi": "か",
    "kunyomi": "ひ, ほ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "犬": {
    "level": 2,
    "character": "犬",
    "meaning": "dog",
    "onyomi": "けん",
    "kunyomi": "いぬ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "王": {
    "level": 2,
    "character": "王",
    "meaning": "king",
    "onyomi": "おう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "出": {
    "level": 2,
    "character": "出",
    "meaning": "exit",
    "onyomi": "しゅつ",
    "kunyomi": "で, だ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "右": {
    "level": 2,
    "character": "右",
    "meaning": "right",
    "onyomi": "う, ゆう",
    "kunyomi": "みぎ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "四": {
    "level": 2,
    "character": "四",
    "meaning": "four",
    "onyomi": "し",
    "kunyomi": "よん, よ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "左": {
    "level": 2,
    "character": "左",
    "meaning": "left",
    "onyomi": "さ",
    "kunyomi": "ひだり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "本": {
    "level": 2,
    "character": "本",
    "meaning": "book, origin, real, main",
    "onyomi": "ほん",
    "kunyomi": "もと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "正": {
    "level": 2,
    "character": "正",
    "meaning": "correct",
    "onyomi": "せい, しょう",
    "kunyomi": "ただ, まさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "玉": {
    "level": 2,
    "character": "玉",
    "meaning": "ball",
    "onyomi": "ぎょく",
    "kunyomi": "たま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "田": {
    "level": 2,
    "character": "田",
    "meaning": "rice paddy, rice field, field",
    "onyomi": "でん",
    "kunyomi": "た",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "白": {
    "level": 2,
    "character": "白",
    "meaning": "white",
    "onyomi": "はく",
    "kunyomi": "しろ, しら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "目": {
    "level": 2,
    "character": "目",
    "meaning": "eye",
    "onyomi": "もく",
    "kunyomi": "め",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "石": {
    "level": 2,
    "character": "石",
    "meaning": "stone",
    "onyomi": "せき",
    "kunyomi": "いし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "立": {
    "level": 2,
    "character": "立",
    "meaning": "stand",
    "onyomi": "りつ",
    "kunyomi": "た",
    "important_reading": "onyomi",
    "nanori": null
  },
  "々": {
    "level": 2,
    "character": "々",
    "meaning": "repeater, repetition, reduplication, iteration mark",
    "onyomi": "のま",
    "kunyomi": "のま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "万": {
    "level": 3,
    "character": "万",
    "meaning": "ten thousand",
    "onyomi": "まん, ばん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "久": {
    "level": 3,
    "character": "久",
    "meaning": "long time",
    "onyomi": "きゅう, く",
    "kunyomi": "ひさ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "今": {
    "level": 3,
    "character": "今",
    "meaning": "now",
    "onyomi": "こん",
    "kunyomi": "いま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "元": {
    "level": 3,
    "character": "元",
    "meaning": "origin",
    "onyomi": "げん, がん",
    "kunyomi": "もと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "公": {
    "level": 3,
    "character": "公",
    "meaning": "public",
    "onyomi": "こう",
    "kunyomi": "N/A",
    "important_reading": "onyomi",
    "nanori": null
  },
  "内": {
    "level": 3,
    "character": "内",
    "meaning": "inside, within",
    "onyomi": "ない",
    "kunyomi": "うち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "分": {
    "level": 3,
    "character": "分",
    "meaning": "part, minute, separate, understand",
    "onyomi": "ぶん, ふん, ぶ",
    "kunyomi": "わ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "切": {
    "level": 3,
    "character": "切",
    "meaning": "cut",
    "onyomi": "せつ",
    "kunyomi": "き",
    "important_reading": "onyomi",
    "nanori": null
  },
  "午": {
    "level": 3,
    "character": "午",
    "meaning": "noon",
    "onyomi": "ご",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "友": {
    "level": 3,
    "character": "友",
    "meaning": "friend",
    "onyomi": "ゆう",
    "kunyomi": "とも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "太": {
    "level": 3,
    "character": "太",
    "meaning": "fat",
    "onyomi": "たい, た",
    "kunyomi": "ふと",
    "important_reading": "onyomi",
    "nanori": "おお"
  },
  "少": {
    "level": 3,
    "character": "少",
    "meaning": "few, a little",
    "onyomi": "しょう",
    "kunyomi": "すこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "引": {
    "level": 3,
    "character": "引",
    "meaning": "pull",
    "onyomi": "いん",
    "kunyomi": "ひ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "心": {
    "level": 3,
    "character": "心",
    "meaning": "heart",
    "onyomi": "しん",
    "kunyomi": "こころ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "戸": {
    "level": 3,
    "character": "戸",
    "meaning": "door",
    "onyomi": "こ",
    "kunyomi": "と",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "方": {
    "level": 3,
    "character": "方",
    "meaning": "direction, way",
    "onyomi": "ほう",
    "kunyomi": "かた",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "牛": {
    "level": 3,
    "character": "牛",
    "meaning": "cow",
    "onyomi": "ぎゅう",
    "kunyomi": "うし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "父": {
    "level": 3,
    "character": "父",
    "meaning": "father, dad",
    "onyomi": "ふ",
    "kunyomi": "ちち",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "毛": {
    "level": 3,
    "character": "毛",
    "meaning": "fur, hair",
    "onyomi": "もう",
    "kunyomi": "け",
    "important_reading": "onyomi",
    "nanori": null
  },
  "兄": {
    "level": 3,
    "character": "兄",
    "meaning": "older brother, big brother, elder brother",
    "onyomi": "きょう",
    "kunyomi": "あに",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "冬": {
    "level": 3,
    "character": "冬",
    "meaning": "winter",
    "onyomi": "とう",
    "kunyomi": "ふゆ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "北": {
    "level": 3,
    "character": "北",
    "meaning": "north",
    "onyomi": "ほく",
    "kunyomi": "きた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "半": {
    "level": 3,
    "character": "半",
    "meaning": "half",
    "onyomi": "はん",
    "kunyomi": "なか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "古": {
    "level": 3,
    "character": "古",
    "meaning": "old",
    "onyomi": "こ",
    "kunyomi": "ふる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "台": {
    "level": 3,
    "character": "台",
    "meaning": "machine",
    "onyomi": "だい, たい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "外": {
    "level": 3,
    "character": "外",
    "meaning": "outside",
    "onyomi": "がい",
    "kunyomi": "そと, はず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "市": {
    "level": 3,
    "character": "市",
    "meaning": "city",
    "onyomi": "し",
    "kunyomi": "いち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "広": {
    "level": 3,
    "character": "広",
    "meaning": "wide",
    "onyomi": "こう",
    "kunyomi": "ひろ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "母": {
    "level": 3,
    "character": "母",
    "meaning": "mother, mom, mum",
    "onyomi": "ぼ",
    "kunyomi": "はは",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "用": {
    "level": 3,
    "character": "用",
    "meaning": "task, use",
    "onyomi": "よう",
    "kunyomi": "もち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "矢": {
    "level": 3,
    "character": "矢",
    "meaning": "arrow",
    "onyomi": "し",
    "kunyomi": "や",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "生": {
    "level": 3,
    "character": "生",
    "meaning": "life",
    "onyomi": "せい, しょう",
    "kunyomi": "い, なま, う, なま, は, き",
    "important_reading": "onyomi",
    "nanori": null
  },
  "止": {
    "level": 3,
    "character": "止",
    "meaning": "stop",
    "onyomi": "し",
    "kunyomi": "と, や",
    "important_reading": "onyomi",
    "nanori": null
  },
  "氷": {
    "level": 4,
    "character": "氷",
    "meaning": "ice",
    "onyomi": "ひょう",
    "kunyomi": "こおり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "虫": {
    "level": 4,
    "character": "虫",
    "meaning": "insect, bug",
    "onyomi": "ちゅう, き",
    "kunyomi": "むし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "世": {
    "level": 4,
    "character": "世",
    "meaning": "generation, world, society",
    "onyomi": "せ, せい",
    "kunyomi": "よ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "主": {
    "level": 4,
    "character": "主",
    "meaning": "master",
    "onyomi": "しゅ",
    "kunyomi": "おも, ぬし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "他": {
    "level": 4,
    "character": "他",
    "meaning": "other",
    "onyomi": "た",
    "kunyomi": "ほか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "代": {
    "level": 4,
    "character": "代",
    "meaning": "substitute, replace, period, age",
    "onyomi": "だい",
    "kunyomi": "か, かわ, しろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "写": {
    "level": 4,
    "character": "写",
    "meaning": "copy",
    "onyomi": "しゃ",
    "kunyomi": "うつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "去": {
    "level": 4,
    "character": "去",
    "meaning": "past",
    "onyomi": "きょ, こ",
    "kunyomi": "さ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "号": {
    "level": 4,
    "character": "号",
    "meaning": "number",
    "onyomi": "ごう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "平": {
    "level": 4,
    "character": "平",
    "meaning": "flat, peace",
    "onyomi": "へい, ひょう, びょう",
    "kunyomi": "たいら, ひら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "打": {
    "level": 4,
    "character": "打",
    "meaning": "hit",
    "onyomi": "だ",
    "kunyomi": "う, ぶ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "申": {
    "level": 4,
    "character": "申",
    "meaning": "say humbly, say, humbly say",
    "onyomi": "しん",
    "kunyomi": "もう",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "皮": {
    "level": 4,
    "character": "皮",
    "meaning": "skin",
    "onyomi": "ひ",
    "kunyomi": "かわ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "皿": {
    "level": 4,
    "character": "皿",
    "meaning": "plate, dish",
    "onyomi": null,
    "kunyomi": "さら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "礼": {
    "level": 4,
    "character": "礼",
    "meaning": "thanks",
    "onyomi": "れい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "休": {
    "level": 4,
    "character": "休",
    "meaning": "rest",
    "onyomi": "きゅう",
    "kunyomi": "やす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "先": {
    "level": 4,
    "character": "先",
    "meaning": "previous, ahead, past, former",
    "onyomi": "せん",
    "kunyomi": "さき, まず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "名": {
    "level": 4,
    "character": "名",
    "meaning": "name, famous",
    "onyomi": "めい, みょう",
    "kunyomi": "な",
    "important_reading": "onyomi",
    "nanori": null
  },
  "字": {
    "level": 4,
    "character": "字",
    "meaning": "letter, character, symbol",
    "onyomi": "じ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "年": {
    "level": 4,
    "character": "年",
    "meaning": "year",
    "onyomi": "ねん",
    "kunyomi": "とし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "早": {
    "level": 4,
    "character": "早",
    "meaning": "early, fast, quick",
    "onyomi": "そう",
    "kunyomi": "はや, さ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "気": {
    "level": 4,
    "character": "気",
    "meaning": "energy, spirit",
    "onyomi": "き, け",
    "kunyomi": "いき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "百": {
    "level": 4,
    "character": "百",
    "meaning": "hundred",
    "onyomi": "ひゃく",
    "kunyomi": "もも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "竹": {
    "level": 4,
    "character": "竹",
    "meaning": "bamboo",
    "onyomi": null,
    "kunyomi": "たけ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "糸": {
    "level": 4,
    "character": "糸",
    "meaning": "thread",
    "onyomi": "し",
    "kunyomi": "いと",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "耳": {
    "level": 4,
    "character": "耳",
    "meaning": "ear",
    "onyomi": "じ",
    "kunyomi": "みみ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "村": {
    "level": 4,
    "character": "村",
    "meaning": "village",
    "onyomi": "そん",
    "kunyomi": "むら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "男": {
    "level": 4,
    "character": "男",
    "meaning": "man",
    "onyomi": "だん",
    "kunyomi": "おとこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "町": {
    "level": 4,
    "character": "町",
    "meaning": "town",
    "onyomi": "ちょう",
    "kunyomi": "まち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "花": {
    "level": 4,
    "character": "花",
    "meaning": "flower",
    "onyomi": "か, け",
    "kunyomi": "はな",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "見": {
    "level": 4,
    "character": "見",
    "meaning": "see",
    "onyomi": "けん",
    "kunyomi": "み",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "貝": {
    "level": 4,
    "character": "貝",
    "meaning": "shellfish, shell, clam",
    "onyomi": null,
    "kunyomi": "かい",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "赤": {
    "level": 4,
    "character": "赤",
    "meaning": "red",
    "onyomi": "せき",
    "kunyomi": "あか",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "足": {
    "level": 4,
    "character": "足",
    "meaning": "foot, leg, sufficient",
    "onyomi": "そく",
    "kunyomi": "あし, た",
    "important_reading": "onyomi",
    "nanori": null
  },
  "車": {
    "level": 4,
    "character": "車",
    "meaning": "car",
    "onyomi": "しゃ",
    "kunyomi": "くるま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "不": {
    "level": 4,
    "character": "不",
    "meaning": "not",
    "onyomi": "ふ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "仕": {
    "level": 4,
    "character": "仕",
    "meaning": "doing, do",
    "onyomi": "し",
    "kunyomi": "つか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "央": {
    "level": 4,
    "character": "央",
    "meaning": "center, central, centre",
    "onyomi": "おう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "青": {
    "level": 5,
    "character": "青",
    "meaning": "blue",
    "onyomi": "せい, しょう",
    "kunyomi": "あお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "肉": {
    "level": 5,
    "character": "肉",
    "meaning": "meat",
    "onyomi": "にく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "池": {
    "level": 5,
    "character": "池",
    "meaning": "pond",
    "onyomi": "ち",
    "kunyomi": "いけ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "米": {
    "level": 5,
    "character": "米",
    "meaning": "rice, america",
    "onyomi": "べい, まい",
    "kunyomi": "こめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "交": {
    "level": 5,
    "character": "交",
    "meaning": "mix",
    "onyomi": "こう",
    "kunyomi": "まじ, ま, か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "会": {
    "level": 5,
    "character": "会",
    "meaning": "meet",
    "onyomi": "かい",
    "kunyomi": "あ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "光": {
    "level": 5,
    "character": "光",
    "meaning": "sunlight, light",
    "onyomi": "こう",
    "kunyomi": "ひかり, ひか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "同": {
    "level": 5,
    "character": "同",
    "meaning": "same",
    "onyomi": "どう",
    "kunyomi": "おな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "回": {
    "level": 5,
    "character": "回",
    "meaning": "times, revolve",
    "onyomi": "かい",
    "kunyomi": "まわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "多": {
    "level": 5,
    "character": "多",
    "meaning": "many, much, lots of",
    "onyomi": "た",
    "kunyomi": "おお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "当": {
    "level": 5,
    "character": "当",
    "meaning": "right, success, correct",
    "onyomi": "とう",
    "kunyomi": "あ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "毎": {
    "level": 5,
    "character": "毎",
    "meaning": "every",
    "onyomi": "まい",
    "kunyomi": "ごと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "羽": {
    "level": 5,
    "character": "羽",
    "meaning": "feather, feathers, wing, wings",
    "onyomi": "う",
    "kunyomi": "はね, は",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "考": {
    "level": 5,
    "character": "考",
    "meaning": "think, consider",
    "onyomi": "こう",
    "kunyomi": "かんが",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "自": {
    "level": 5,
    "character": "自",
    "meaning": "self",
    "onyomi": "じ, し",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "色": {
    "level": 5,
    "character": "色",
    "meaning": "color, colour",
    "onyomi": "しき, しょく",
    "kunyomi": "いろ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "行": {
    "level": 5,
    "character": "行",
    "meaning": "go",
    "onyomi": "こう, ぎょう",
    "kunyomi": "い, おこな, ゆ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "西": {
    "level": 5,
    "character": "西",
    "meaning": "west",
    "onyomi": "せい, さい",
    "kunyomi": "にし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "何": {
    "level": 5,
    "character": "何",
    "meaning": "what",
    "onyomi": "か",
    "kunyomi": "なに, なん",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "体": {
    "level": 5,
    "character": "体",
    "meaning": "body",
    "onyomi": "たい",
    "kunyomi": "からだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "作": {
    "level": 5,
    "character": "作",
    "meaning": "make",
    "onyomi": "さく, さ",
    "kunyomi": "つく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "図": {
    "level": 5,
    "character": "図",
    "meaning": "diagram",
    "onyomi": "ず, と",
    "kunyomi": "え, はか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "声": {
    "level": 5,
    "character": "声",
    "meaning": "voice",
    "onyomi": "せい",
    "kunyomi": "こえ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "売": {
    "level": 5,
    "character": "売",
    "meaning": "sell",
    "onyomi": "ばい",
    "kunyomi": "う",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "弟": {
    "level": 5,
    "character": "弟",
    "meaning": "younger brother, little brother",
    "onyomi": "だい, で, てい",
    "kunyomi": "おとうと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "形": {
    "level": 5,
    "character": "形",
    "meaning": "shape, appearance, form",
    "onyomi": "けい",
    "kunyomi": "かた, かたち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "来": {
    "level": 5,
    "character": "来",
    "meaning": "come, next",
    "onyomi": "らい",
    "kunyomi": "く",
    "important_reading": "onyomi",
    "nanori": null
  },
  "社": {
    "level": 5,
    "character": "社",
    "meaning": "company",
    "onyomi": "しゃ",
    "kunyomi": "やしろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "角": {
    "level": 5,
    "character": "角",
    "meaning": "angle, corner",
    "onyomi": "かく",
    "kunyomi": "かど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "言": {
    "level": 5,
    "character": "言",
    "meaning": "say",
    "onyomi": "げん, ごん",
    "kunyomi": "い, こと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "谷": {
    "level": 5,
    "character": "谷",
    "meaning": "valley",
    "onyomi": "こく",
    "kunyomi": "たに",
    "important_reading": "kunyomi",
    "nanori": "せ"
  },
  "走": {
    "level": 5,
    "character": "走",
    "meaning": "run",
    "onyomi": "そう",
    "kunyomi": "はし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "近": {
    "level": 5,
    "character": "近",
    "meaning": "near, close",
    "onyomi": "きん, こん",
    "kunyomi": "ちか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "里": {
    "level": 5,
    "character": "里",
    "meaning": "home village, home town, hometown",
    "onyomi": "り",
    "kunyomi": "さと",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "麦": {
    "level": 5,
    "character": "麦",
    "meaning": "wheat",
    "onyomi": "ばく",
    "kunyomi": "むぎ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "学": {
    "level": 5,
    "character": "学",
    "meaning": "study, learn, learning",
    "onyomi": "がく",
    "kunyomi": "まな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "林": {
    "level": 5,
    "character": "林",
    "meaning": "forest, woods",
    "onyomi": "りん",
    "kunyomi": "はやし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "空": {
    "level": 5,
    "character": "空",
    "meaning": "sky",
    "onyomi": "くう",
    "kunyomi": "そら, あ, から",
    "important_reading": "onyomi",
    "nanori": null
  },
  "金": {
    "level": 5,
    "character": "金",
    "meaning": "gold",
    "onyomi": "きん",
    "kunyomi": "かね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "雨": {
    "level": 5,
    "character": "雨",
    "meaning": "rain",
    "onyomi": "う",
    "kunyomi": "あめ, あま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "草": {
    "level": 5,
    "character": "草",
    "meaning": "grass, weed",
    "onyomi": "そう",
    "kunyomi": "くさ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "音": {
    "level": 5,
    "character": "音",
    "meaning": "sound",
    "onyomi": "おん",
    "kunyomi": "おと, ね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "亡": {
    "level": 6,
    "character": "亡",
    "meaning": "deceased, death",
    "onyomi": "ぼう",
    "kunyomi": "な",
    "important_reading": "onyomi",
    "nanori": null
  },
  "化": {
    "level": 6,
    "character": "化",
    "meaning": "change",
    "onyomi": "か",
    "kunyomi": "ば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "地": {
    "level": 6,
    "character": "地",
    "meaning": "earth, ground",
    "onyomi": "ち, じ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "両": {
    "level": 6,
    "character": "両",
    "meaning": "both",
    "onyomi": "りょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "全": {
    "level": 6,
    "character": "全",
    "meaning": "all, whole",
    "onyomi": "ぜん",
    "kunyomi": "すべ, まった",
    "important_reading": "onyomi",
    "nanori": null
  },
  "向": {
    "level": 6,
    "character": "向",
    "meaning": "yonder, facing",
    "onyomi": "こう",
    "kunyomi": "む",
    "important_reading": "onyomi",
    "nanori": "なた"
  },
  "安": {
    "level": 6,
    "character": "安",
    "meaning": "relax, cheap",
    "onyomi": "あん",
    "kunyomi": "やす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "州": {
    "level": 6,
    "character": "州",
    "meaning": "state, province, county",
    "onyomi": "しゅう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "曲": {
    "level": 6,
    "character": "曲",
    "meaning": "music, bend",
    "onyomi": "きょく",
    "kunyomi": "ま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "有": {
    "level": 6,
    "character": "有",
    "meaning": "have",
    "onyomi": "ゆう, う",
    "kunyomi": "あ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "次": {
    "level": 6,
    "character": "次",
    "meaning": "next",
    "onyomi": "じ",
    "kunyomi": "つぎ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "死": {
    "level": 6,
    "character": "死",
    "meaning": "death",
    "onyomi": "し",
    "kunyomi": "し",
    "important_reading": "onyomi",
    "nanori": null
  },
  "羊": {
    "level": 6,
    "character": "羊",
    "meaning": "sheep",
    "onyomi": "よう",
    "kunyomi": "ひつじ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "血": {
    "level": 6,
    "character": "血",
    "meaning": "blood",
    "onyomi": "けつ",
    "kunyomi": "ち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "京": {
    "level": 6,
    "character": "京",
    "meaning": "capital",
    "onyomi": "きょう",
    "kunyomi": "みやこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "国": {
    "level": 6,
    "character": "国",
    "meaning": "country",
    "onyomi": "こく",
    "kunyomi": "くに",
    "important_reading": "onyomi",
    "nanori": null
  },
  "夜": {
    "level": 6,
    "character": "夜",
    "meaning": "night, evening",
    "onyomi": "や",
    "kunyomi": "よ, よる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "妹": {
    "level": 6,
    "character": "妹",
    "meaning": "younger sister, little sister",
    "onyomi": "まい",
    "kunyomi": "いもうと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "姉": {
    "level": 6,
    "character": "姉",
    "meaning": "older sister, big sister, elder sister",
    "onyomi": "し",
    "kunyomi": "お, あね, ねえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "店": {
    "level": 6,
    "character": "店",
    "meaning": "shop, store",
    "onyomi": "てん",
    "kunyomi": "みせ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "明": {
    "level": 6,
    "character": "明",
    "meaning": "bright",
    "onyomi": "めい",
    "kunyomi": "あ, あか, あき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "東": {
    "level": 6,
    "character": "東",
    "meaning": "east",
    "onyomi": "とう",
    "kunyomi": "ひがし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "歩": {
    "level": 6,
    "character": "歩",
    "meaning": "walk",
    "onyomi": "ほ",
    "kunyomi": "ある, あゆ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "画": {
    "level": 6,
    "character": "画",
    "meaning": "drawing, painting",
    "onyomi": "が, かく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "直": {
    "level": 6,
    "character": "直",
    "meaning": "fix, direct",
    "onyomi": "ちょく, じき",
    "kunyomi": "なお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "知": {
    "level": 6,
    "character": "知",
    "meaning": "know",
    "onyomi": "ち",
    "kunyomi": "し",
    "important_reading": "onyomi",
    "nanori": null
  },
  "長": {
    "level": 6,
    "character": "長",
    "meaning": "long, leader",
    "onyomi": "ちょう",
    "kunyomi": "なが",
    "important_reading": "onyomi",
    "nanori": "は"
  },
  "前": {
    "level": 6,
    "character": "前",
    "meaning": "front, before",
    "onyomi": "ぜん",
    "kunyomi": "まえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "南": {
    "level": 6,
    "character": "南",
    "meaning": "south",
    "onyomi": "なん",
    "kunyomi": "みなみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "室": {
    "level": 6,
    "character": "室",
    "meaning": "room",
    "onyomi": "しつ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "後": {
    "level": 6,
    "character": "後",
    "meaning": "behind, after, back, rear",
    "onyomi": "ご, こう",
    "kunyomi": "うし, あと, のち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "思": {
    "level": 6,
    "character": "思",
    "meaning": "think, thought",
    "onyomi": "し",
    "kunyomi": "おも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "星": {
    "level": 6,
    "character": "星",
    "meaning": "star",
    "onyomi": "せい",
    "kunyomi": "ほし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "活": {
    "level": 6,
    "character": "活",
    "meaning": "lively",
    "onyomi": "かつ",
    "kunyomi": "い",
    "important_reading": "onyomi",
    "nanori": null
  },
  "海": {
    "level": 6,
    "character": "海",
    "meaning": "sea, ocean",
    "onyomi": "かい",
    "kunyomi": "うみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "点": {
    "level": 6,
    "character": "点",
    "meaning": "point, decimal, decimal point",
    "onyomi": "てん",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "科": {
    "level": 6,
    "character": "科",
    "meaning": "science",
    "onyomi": "か",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "茶": {
    "level": 6,
    "character": "茶",
    "meaning": "tea",
    "onyomi": "ちゃ, さ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "食": {
    "level": 6,
    "character": "食",
    "meaning": "eat, meal",
    "onyomi": "しょく",
    "kunyomi": "た, く",
    "important_reading": "onyomi",
    "nanori": null
  },
  "首": {
    "level": 6,
    "character": "首",
    "meaning": "neck",
    "onyomi": "しゅ",
    "kunyomi": "くび",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "黄": {
    "level": 7,
    "character": "黄",
    "meaning": "yellow",
    "onyomi": "おう",
    "kunyomi": "き",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "黒": {
    "level": 7,
    "character": "黒",
    "meaning": "black",
    "onyomi": "こく",
    "kunyomi": "くろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "欠": {
    "level": 7,
    "character": "欠",
    "meaning": "lack",
    "onyomi": "けつ",
    "kunyomi": "か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "氏": {
    "level": 7,
    "character": "氏",
    "meaning": "family name, last name, surname",
    "onyomi": "し",
    "kunyomi": "うじ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "由": {
    "level": 7,
    "character": "由",
    "meaning": "reason",
    "onyomi": "ゆう",
    "kunyomi": "よし, よ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "札": {
    "level": 7,
    "character": "札",
    "meaning": "bill, label, note",
    "onyomi": "さつ",
    "kunyomi": "ふだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "民": {
    "level": 7,
    "character": "民",
    "meaning": "peoples, people, nation",
    "onyomi": "みん",
    "kunyomi": "たみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "辺": {
    "level": 7,
    "character": "辺",
    "meaning": "area",
    "onyomi": "へん",
    "kunyomi": "あた, べ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "付": {
    "level": 7,
    "character": "付",
    "meaning": "attach",
    "onyomi": "ふ",
    "kunyomi": "つ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "以": {
    "level": 7,
    "character": "以",
    "meaning": "by means of, by the means of, by way of, by the way of",
    "onyomi": "い",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "失": {
    "level": 7,
    "character": "失",
    "meaning": "fault",
    "onyomi": "しつ",
    "kunyomi": "うしな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "必": {
    "level": 7,
    "character": "必",
    "meaning": "certain",
    "onyomi": "ひつ",
    "kunyomi": "かなら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "未": {
    "level": 7,
    "character": "未",
    "meaning": "not yet",
    "onyomi": "み",
    "kunyomi": "ま, いま, ひつじ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "末": {
    "level": 7,
    "character": "末",
    "meaning": "end",
    "onyomi": "まつ",
    "kunyomi": "すえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "校": {
    "level": 7,
    "character": "校",
    "meaning": "school",
    "onyomi": "こう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "夏": {
    "level": 7,
    "character": "夏",
    "meaning": "summer",
    "onyomi": "げ, か, が",
    "kunyomi": "なつ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "家": {
    "level": 7,
    "character": "家",
    "meaning": "house, home",
    "onyomi": "か, け",
    "kunyomi": "いえ, や, うち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "弱": {
    "level": 7,
    "character": "弱",
    "meaning": "weak",
    "onyomi": "じゃく",
    "kunyomi": "よわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "時": {
    "level": 7,
    "character": "時",
    "meaning": "time, o'clock, hour",
    "onyomi": "じ",
    "kunyomi": "とき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "紙": {
    "level": 7,
    "character": "紙",
    "meaning": "paper",
    "onyomi": "し",
    "kunyomi": "かみ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "記": {
    "level": 7,
    "character": "記",
    "meaning": "write down, record",
    "onyomi": "き",
    "kunyomi": "しる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "通": {
    "level": 7,
    "character": "通",
    "meaning": "pass through",
    "onyomi": "つう",
    "kunyomi": "とお, かよ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "高": {
    "level": 7,
    "character": "高",
    "meaning": "tall, expensive, high",
    "onyomi": "こう",
    "kunyomi": "たか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "強": {
    "level": 7,
    "character": "強",
    "meaning": "strong, strength",
    "onyomi": "きょう",
    "kunyomi": "つよ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "教": {
    "level": 7,
    "character": "教",
    "meaning": "teach",
    "onyomi": "きょう",
    "kunyomi": "おし, おそ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "理": {
    "level": 7,
    "character": "理",
    "meaning": "reason",
    "onyomi": "り",
    "kunyomi": "ことわり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "組": {
    "level": 7,
    "character": "組",
    "meaning": "group, association, team",
    "onyomi": "そ",
    "kunyomi": "くみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "船": {
    "level": 7,
    "character": "船",
    "meaning": "boat, ship",
    "onyomi": "せん",
    "kunyomi": "ふね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "週": {
    "level": 7,
    "character": "週",
    "meaning": "week",
    "onyomi": "しゅう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "雪": {
    "level": 7,
    "character": "雪",
    "meaning": "snow",
    "onyomi": "せつ",
    "kunyomi": "ゆき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "魚": {
    "level": 7,
    "character": "魚",
    "meaning": "fish",
    "onyomi": "ぎょ",
    "kunyomi": "さかな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鳥": {
    "level": 7,
    "character": "鳥",
    "meaning": "bird",
    "onyomi": "ちょう",
    "kunyomi": "とり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "風": {
    "level": 7,
    "character": "風",
    "meaning": "wind, style",
    "onyomi": "ふう",
    "kunyomi": "かぜ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "反": {
    "level": 8,
    "character": "反",
    "meaning": "anti",
    "onyomi": "はん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "支": {
    "level": 8,
    "character": "支",
    "meaning": "support, branch",
    "onyomi": "し",
    "kunyomi": "ささ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "住": {
    "level": 8,
    "character": "住",
    "meaning": "dwelling, reside, dwell",
    "onyomi": "じゅう",
    "kunyomi": "す",
    "important_reading": "onyomi",
    "nanori": null
  },
  "助": {
    "level": 8,
    "character": "助",
    "meaning": "help",
    "onyomi": "じょ",
    "kunyomi": "たす, すけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "医": {
    "level": 8,
    "character": "医",
    "meaning": "medicine",
    "onyomi": "い",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "君": {
    "level": 8,
    "character": "君",
    "meaning": "buddy",
    "onyomi": "くん",
    "kunyomi": "きみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "対": {
    "level": 8,
    "character": "対",
    "meaning": "versus, opposite",
    "onyomi": "たい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "局": {
    "level": 8,
    "character": "局",
    "meaning": "bureau, department",
    "onyomi": "きょく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "役": {
    "level": 8,
    "character": "役",
    "meaning": "service, duty",
    "onyomi": "やく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "投": {
    "level": 8,
    "character": "投",
    "meaning": "throw",
    "onyomi": "とう",
    "kunyomi": "な",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "決": {
    "level": 8,
    "character": "決",
    "meaning": "decide, decision",
    "onyomi": "けつ",
    "kunyomi": "き",
    "important_reading": "onyomi",
    "nanori": null
  },
  "究": {
    "level": 8,
    "character": "究",
    "meaning": "research",
    "onyomi": "きゅう",
    "kunyomi": "きわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "身": {
    "level": 8,
    "character": "身",
    "meaning": "somebody, someone, body",
    "onyomi": "しん",
    "kunyomi": "み",
    "important_reading": "onyomi",
    "nanori": null
  },
  "者": {
    "level": 8,
    "character": "者",
    "meaning": "someone, somebody",
    "onyomi": "しゃ",
    "kunyomi": "もの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "研": {
    "level": 8,
    "character": "研",
    "meaning": "sharpen",
    "onyomi": "けん",
    "kunyomi": "と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "場": {
    "level": 8,
    "character": "場",
    "meaning": "location, place",
    "onyomi": "じょう",
    "kunyomi": "ば",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "朝": {
    "level": 8,
    "character": "朝",
    "meaning": "morning",
    "onyomi": "ちょう",
    "kunyomi": "あさ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "番": {
    "level": 8,
    "character": "番",
    "meaning": "number in a series, turn, ordinal number",
    "onyomi": "ばん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "答": {
    "level": 8,
    "character": "答",
    "meaning": "answer, response, reply",
    "onyomi": "とう",
    "kunyomi": "こた",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "絵": {
    "level": 8,
    "character": "絵",
    "meaning": "drawing, painting",
    "onyomi": "え",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "買": {
    "level": 8,
    "character": "買",
    "meaning": "buy",
    "onyomi": "ばい",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "道": {
    "level": 8,
    "character": "道",
    "meaning": "road, street, path, way",
    "onyomi": "どう",
    "kunyomi": "みち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "間": {
    "level": 8,
    "character": "間",
    "meaning": "interval, interval of time, time interval",
    "onyomi": "かん, けん",
    "kunyomi": "あいだ, ま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "雲": {
    "level": 8,
    "character": "雲",
    "meaning": "cloud",
    "onyomi": "うん",
    "kunyomi": "くも",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "数": {
    "level": 8,
    "character": "数",
    "meaning": "count, number, amount",
    "onyomi": "すう",
    "kunyomi": "かぞ, かず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "楽": {
    "level": 8,
    "character": "楽",
    "meaning": "comfort, ease, pleasure",
    "onyomi": "らく, がく",
    "kunyomi": "たの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "話": {
    "level": 8,
    "character": "話",
    "meaning": "talk, speak",
    "onyomi": "わ",
    "kunyomi": "はな, はなし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "所": {
    "level": 8,
    "character": "所",
    "meaning": "place",
    "onyomi": "しょ",
    "kunyomi": "ところ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "森": {
    "level": 8,
    "character": "森",
    "meaning": "forest, woods",
    "onyomi": "しん",
    "kunyomi": "もり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "電": {
    "level": 8,
    "character": "電",
    "meaning": "electricity",
    "onyomi": "でん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "合": {
    "level": 8,
    "character": "合",
    "meaning": "suit, fit, join",
    "onyomi": "ごう, がっ",
    "kunyomi": "あ, あい",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "馬": {
    "level": 8,
    "character": "馬",
    "meaning": "horse",
    "onyomi": "ば",
    "kunyomi": "うま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "返": {
    "level": 9,
    "character": "返",
    "meaning": "return",
    "onyomi": "へん",
    "kunyomi": "かえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "事": {
    "level": 9,
    "character": "事",
    "meaning": "action, matter, thing",
    "onyomi": "じ",
    "kunyomi": "こと, つか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "使": {
    "level": 9,
    "character": "使",
    "meaning": "use",
    "onyomi": "し",
    "kunyomi": "つか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "具": {
    "level": 9,
    "character": "具",
    "meaning": "tool",
    "onyomi": "ぐ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "受": {
    "level": 9,
    "character": "受",
    "meaning": "accept, receive",
    "onyomi": "じゅ",
    "kunyomi": "う",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "和": {
    "level": 9,
    "character": "和",
    "meaning": "peace, japanese style",
    "onyomi": "わ, お",
    "kunyomi": "なご, やわ",
    "important_reading": "onyomi",
    "nanori": "かず, より"
  },
  "始": {
    "level": 9,
    "character": "始",
    "meaning": "begin, start",
    "onyomi": "し",
    "kunyomi": "はじ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "定": {
    "level": 9,
    "character": "定",
    "meaning": "determine",
    "onyomi": "てい, じょう",
    "kunyomi": "さだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "実": {
    "level": 9,
    "character": "実",
    "meaning": "truth, reality",
    "onyomi": "じつ",
    "kunyomi": "み",
    "important_reading": "onyomi",
    "nanori": null
  },
  "服": {
    "level": 9,
    "character": "服",
    "meaning": "clothes, clothing",
    "onyomi": "ふく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "泳": {
    "level": 9,
    "character": "泳",
    "meaning": "swim",
    "onyomi": "えい",
    "kunyomi": "およ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "物": {
    "level": 9,
    "character": "物",
    "meaning": "thing",
    "onyomi": "ぶつ, もつ",
    "kunyomi": "もの",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "苦": {
    "level": 9,
    "character": "苦",
    "meaning": "suffering",
    "onyomi": "く",
    "kunyomi": "くる, にが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "表": {
    "level": 9,
    "character": "表",
    "meaning": "express",
    "onyomi": "ひょう",
    "kunyomi": "あらわ, おもて",
    "important_reading": "onyomi",
    "nanori": null
  },
  "部": {
    "level": 9,
    "character": "部",
    "meaning": "part, department, club",
    "onyomi": "ぶ",
    "kunyomi": "へ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "乗": {
    "level": 9,
    "character": "乗",
    "meaning": "ride",
    "onyomi": "じょう",
    "kunyomi": "の",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "客": {
    "level": 9,
    "character": "客",
    "meaning": "guest",
    "onyomi": "きゃく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "屋": {
    "level": 9,
    "character": "屋",
    "meaning": "roof, shop, store",
    "onyomi": "おく",
    "kunyomi": "や",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "度": {
    "level": 9,
    "character": "度",
    "meaning": "degrees, occurrence",
    "onyomi": "ど, たく",
    "kunyomi": "たび",
    "important_reading": "onyomi",
    "nanori": null
  },
  "待": {
    "level": 9,
    "character": "待",
    "meaning": "wait",
    "onyomi": "たい",
    "kunyomi": "ま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "持": {
    "level": 9,
    "character": "持",
    "meaning": "hold",
    "onyomi": "じ",
    "kunyomi": "も",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "界": {
    "level": 9,
    "character": "界",
    "meaning": "world",
    "onyomi": "かい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "発": {
    "level": 9,
    "character": "発",
    "meaning": "departure",
    "onyomi": "はつ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "相": {
    "level": 9,
    "character": "相",
    "meaning": "mutual",
    "onyomi": "そう, しょう",
    "kunyomi": "あい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "県": {
    "level": 9,
    "character": "県",
    "meaning": "prefecture",
    "onyomi": "けん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "美": {
    "level": 9,
    "character": "美",
    "meaning": "beauty, beautiful",
    "onyomi": "び, み",
    "kunyomi": "うつく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "負": {
    "level": 9,
    "character": "負",
    "meaning": "lose",
    "onyomi": "ふ",
    "kunyomi": "ま, お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "送": {
    "level": 9,
    "character": "送",
    "meaning": "send",
    "onyomi": "そう",
    "kunyomi": "おく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "重": {
    "level": 9,
    "character": "重",
    "meaning": "heavy",
    "onyomi": "じゅう, ちょう",
    "kunyomi": "おも, かさ, え",
    "important_reading": "onyomi",
    "nanori": null
  },
  "談": {
    "level": 9,
    "character": "談",
    "meaning": "discuss",
    "onyomi": "だん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "要": {
    "level": 9,
    "character": "要",
    "meaning": "need",
    "onyomi": "よう",
    "kunyomi": "い, かなめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "勝": {
    "level": 9,
    "character": "勝",
    "meaning": "win",
    "onyomi": "しょう",
    "kunyomi": "か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "仮": {
    "level": 9,
    "character": "仮",
    "meaning": "temporary",
    "onyomi": "か",
    "kunyomi": "かり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "予": {
    "level": 9,
    "character": "予",
    "meaning": "beforehand",
    "onyomi": "よ",
    "kunyomi": "あらかじ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "新": {
    "level": 9,
    "character": "新",
    "meaning": "new",
    "onyomi": "しん",
    "kunyomi": "あたら, あら, にい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "農": {
    "level": 10,
    "character": "農",
    "meaning": "farming, agriculture",
    "onyomi": "のう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "終": {
    "level": 10,
    "character": "終",
    "meaning": "end, finish",
    "onyomi": "しゅう",
    "kunyomi": "おわ, お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "習": {
    "level": 10,
    "character": "習",
    "meaning": "learn",
    "onyomi": "しゅう",
    "kunyomi": "なら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鉄": {
    "level": 10,
    "character": "鉄",
    "meaning": "iron",
    "onyomi": "てつ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "歌": {
    "level": 10,
    "character": "歌",
    "meaning": "song, sing",
    "onyomi": "か",
    "kunyomi": "うた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "転": {
    "level": 10,
    "character": "転",
    "meaning": "revolve",
    "onyomi": "てん",
    "kunyomi": "ころ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "進": {
    "level": 10,
    "character": "進",
    "meaning": "advance",
    "onyomi": "しん",
    "kunyomi": "すす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "落": {
    "level": 10,
    "character": "落",
    "meaning": "fall",
    "onyomi": "らく",
    "kunyomi": "お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "葉": {
    "level": 10,
    "character": "葉",
    "meaning": "leaf, leaves",
    "onyomi": "よう",
    "kunyomi": "は, ば",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "最": {
    "level": 10,
    "character": "最",
    "meaning": "most",
    "onyomi": "さい",
    "kunyomi": "もっと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "聞": {
    "level": 10,
    "character": "聞",
    "meaning": "hear",
    "onyomi": "ぶん, もん",
    "kunyomi": "き",
    "important_reading": "onyomi",
    "nanori": null
  },
  "語": {
    "level": 10,
    "character": "語",
    "meaning": "language",
    "onyomi": "ご",
    "kunyomi": "かた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "読": {
    "level": 10,
    "character": "読",
    "meaning": "read",
    "onyomi": "とう, どく",
    "kunyomi": "よ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "鳴": {
    "level": 10,
    "character": "鳴",
    "meaning": "chirp",
    "onyomi": "めい",
    "kunyomi": "な",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "線": {
    "level": 10,
    "character": "線",
    "meaning": "line",
    "onyomi": "せん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "横": {
    "level": 10,
    "character": "横",
    "meaning": "side",
    "onyomi": "おう",
    "kunyomi": "よこ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "集": {
    "level": 10,
    "character": "集",
    "meaning": "collect, gather",
    "onyomi": "しゅう",
    "kunyomi": "あつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "飲": {
    "level": 10,
    "character": "飲",
    "meaning": "drink",
    "onyomi": "いん",
    "kunyomi": "の",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "業": {
    "level": 10,
    "character": "業",
    "meaning": "business",
    "onyomi": "ぎょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "漢": {
    "level": 10,
    "character": "漢",
    "meaning": "chinese, china",
    "onyomi": "かん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "起": {
    "level": 10,
    "character": "起",
    "meaning": "wake up",
    "onyomi": "き",
    "kunyomi": "お",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "速": {
    "level": 10,
    "character": "速",
    "meaning": "fast",
    "onyomi": "そく",
    "kunyomi": "はや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "配": {
    "level": 10,
    "character": "配",
    "meaning": "distribute",
    "onyomi": "はい",
    "kunyomi": "くば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "酒": {
    "level": 10,
    "character": "酒",
    "meaning": "alcohol",
    "onyomi": "しゅ",
    "kunyomi": "さけ, さか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "院": {
    "level": 10,
    "character": "院",
    "meaning": "institution",
    "onyomi": "いん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "路": {
    "level": 10,
    "character": "路",
    "meaning": "road",
    "onyomi": "ろ",
    "kunyomi": "じ, みち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "軽": {
    "level": 10,
    "character": "軽",
    "meaning": "lightweight, light, light weight",
    "onyomi": "けい",
    "kunyomi": "かる, かろ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "運": {
    "level": 10,
    "character": "運",
    "meaning": "carry, luck",
    "onyomi": "うん",
    "kunyomi": "はこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "開": {
    "level": 10,
    "character": "開",
    "meaning": "open, opened",
    "onyomi": "かい",
    "kunyomi": "あ, ひら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "算": {
    "level": 10,
    "character": "算",
    "meaning": "calculate, calculation",
    "onyomi": "さん",
    "kunyomi": "そろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "調": {
    "level": 10,
    "character": "調",
    "meaning": "investigate, tone",
    "onyomi": "ちょう",
    "kunyomi": "しら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "頭": {
    "level": 10,
    "character": "頭",
    "meaning": "head",
    "onyomi": "ず, とう",
    "kunyomi": "あたま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "親": {
    "level": 10,
    "character": "親",
    "meaning": "parent",
    "onyomi": "しん",
    "kunyomi": "おや, した",
    "important_reading": "onyomi",
    "nanori": null
  },
  "顔": {
    "level": 10,
    "character": "顔",
    "meaning": "face",
    "onyomi": "がん",
    "kunyomi": "かお",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "病": {
    "level": 10,
    "character": "病",
    "meaning": "sick, sickness, ill, illness",
    "onyomi": "びょう",
    "kunyomi": "や, やまい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "特": {
    "level": 11,
    "character": "特",
    "meaning": "special",
    "onyomi": "とく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "味": {
    "level": 11,
    "character": "味",
    "meaning": "flavor, taste, flavour",
    "onyomi": "み",
    "kunyomi": "あじ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "成": {
    "level": 11,
    "character": "成",
    "meaning": "become",
    "onyomi": "せい",
    "kunyomi": "な",
    "important_reading": "onyomi",
    "nanori": null
  },
  "老": {
    "level": 11,
    "character": "老",
    "meaning": "elderly",
    "onyomi": "ろう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "位": {
    "level": 11,
    "character": "位",
    "meaning": "rank",
    "onyomi": "い",
    "kunyomi": "くらい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "低": {
    "level": 11,
    "character": "低",
    "meaning": "low",
    "onyomi": "てい",
    "kunyomi": "ひく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "利": {
    "level": 11,
    "character": "利",
    "meaning": "profit, benefit, advantage",
    "onyomi": "り",
    "kunyomi": "き",
    "important_reading": "onyomi",
    "nanori": null
  },
  "努": {
    "level": 11,
    "character": "努",
    "meaning": "toil",
    "onyomi": "ど",
    "kunyomi": "つと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "伝": {
    "level": 11,
    "character": "伝",
    "meaning": "transmit, tell",
    "onyomi": "でん",
    "kunyomi": "つた, つて",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "放": {
    "level": 11,
    "character": "放",
    "meaning": "release",
    "onyomi": "ほう",
    "kunyomi": "はな, ほう",
    "important_reading": "onyomi",
    "nanori": null
  },
  "拾": {
    "level": 11,
    "character": "拾",
    "meaning": "pick up",
    "onyomi": null,
    "kunyomi": "ひろ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "争": {
    "level": 11,
    "character": "争",
    "meaning": "conflict",
    "onyomi": "そう",
    "kunyomi": "あらそ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "仲": {
    "level": 11,
    "character": "仲",
    "meaning": "relationship",
    "onyomi": "ちゅう",
    "kunyomi": "なか",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "共": {
    "level": 11,
    "character": "共",
    "meaning": "together",
    "onyomi": "きょう",
    "kunyomi": "とも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "好": {
    "level": 11,
    "character": "好",
    "meaning": "like",
    "onyomi": "こう",
    "kunyomi": "す, この",
    "important_reading": "onyomi",
    "nanori": null
  },
  "初": {
    "level": 11,
    "character": "初",
    "meaning": "first",
    "onyomi": "しょ",
    "kunyomi": "はじ, はつ, そ, ぞ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "別": {
    "level": 11,
    "character": "別",
    "meaning": "separate",
    "onyomi": "べつ",
    "kunyomi": "わか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "労": {
    "level": 11,
    "character": "労",
    "meaning": "labor, labour",
    "onyomi": "ろう",
    "kunyomi": "いたわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "命": {
    "level": 11,
    "character": "命",
    "meaning": "fate",
    "onyomi": "めい, みょう",
    "kunyomi": "いのち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "岸": {
    "level": 11,
    "character": "岸",
    "meaning": "coast, shore",
    "onyomi": "がん",
    "kunyomi": "きし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "昔": {
    "level": 11,
    "character": "昔",
    "meaning": "long ago, long time ago",
    "onyomi": null,
    "kunyomi": "むかし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "波": {
    "level": 11,
    "character": "波",
    "meaning": "wave",
    "onyomi": "は",
    "kunyomi": "なみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "注": {
    "level": 11,
    "character": "注",
    "meaning": "pour",
    "onyomi": "ちゅう",
    "kunyomi": "そそ, さ, つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "育": {
    "level": 11,
    "character": "育",
    "meaning": "nurture, raise",
    "onyomi": "いく",
    "kunyomi": "そだ, はぐく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "指": {
    "level": 11,
    "character": "指",
    "meaning": "finger",
    "onyomi": "し",
    "kunyomi": "ゆび, さ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "洋": {
    "level": 11,
    "character": "洋",
    "meaning": "western style, ocean",
    "onyomi": "よう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "神": {
    "level": 11,
    "character": "神",
    "meaning": "god",
    "onyomi": "しん",
    "kunyomi": "かみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "戦": {
    "level": 11,
    "character": "戦",
    "meaning": "war, battle",
    "onyomi": "せん",
    "kunyomi": "たたか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "秒": {
    "level": 11,
    "character": "秒",
    "meaning": "second",
    "onyomi": "びょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "級": {
    "level": 11,
    "character": "級",
    "meaning": "rank, grade, level",
    "onyomi": "きゅう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "追": {
    "level": 11,
    "character": "追",
    "meaning": "follow, chase",
    "onyomi": "つい",
    "kunyomi": "お",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "競": {
    "level": 11,
    "character": "競",
    "meaning": "compete",
    "onyomi": "きょう",
    "kunyomi": "きそ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "良": {
    "level": 11,
    "character": "良",
    "meaning": "good",
    "onyomi": "りょう",
    "kunyomi": "よ, い",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "功": {
    "level": 11,
    "character": "功",
    "meaning": "achievement, accomplishment",
    "onyomi": "こう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "便": {
    "level": 11,
    "character": "便",
    "meaning": "convenience, convenient",
    "onyomi": "べん, びん",
    "kunyomi": "たよ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "働": {
    "level": 11,
    "character": "働",
    "meaning": "work, labor, labour",
    "onyomi": "どう",
    "kunyomi": "はたら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "令": {
    "level": 11,
    "character": "令",
    "meaning": "orders",
    "onyomi": "れい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "意": {
    "level": 11,
    "character": "意",
    "meaning": "idea",
    "onyomi": "い",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "勉": {
    "level": 12,
    "character": "勉",
    "meaning": "exertion",
    "onyomi": "べん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "階": {
    "level": 12,
    "character": "階",
    "meaning": "floor, story, storey",
    "onyomi": "かい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "員": {
    "level": 12,
    "character": "員",
    "meaning": "member",
    "onyomi": "いん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "第": {
    "level": 12,
    "character": "第",
    "meaning": "ordinal number prefix, ordinal prefix, number",
    "onyomi": "だい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "都": {
    "level": 12,
    "character": "都",
    "meaning": "metropolis",
    "onyomi": "と, つ",
    "kunyomi": "みやこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "深": {
    "level": 12,
    "character": "深",
    "meaning": "deep",
    "onyomi": "しん",
    "kunyomi": "ふか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "童": {
    "level": 12,
    "character": "童",
    "meaning": "juvenile",
    "onyomi": "どう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "庭": {
    "level": 12,
    "character": "庭",
    "meaning": "garden",
    "onyomi": "てい",
    "kunyomi": "にわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "旅": {
    "level": 12,
    "character": "旅",
    "meaning": "trip, travel",
    "onyomi": "りょ",
    "kunyomi": "たび",
    "important_reading": "onyomi",
    "nanori": null
  },
  "根": {
    "level": 12,
    "character": "根",
    "meaning": "root",
    "onyomi": "こん",
    "kunyomi": "ね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "流": {
    "level": 12,
    "character": "流",
    "meaning": "stream",
    "onyomi": "りゅう, る",
    "kunyomi": "なが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "消": {
    "level": 12,
    "character": "消",
    "meaning": "extinguish",
    "onyomi": "しょう",
    "kunyomi": "き, け",
    "important_reading": "onyomi",
    "nanori": null
  },
  "倍": {
    "level": 12,
    "character": "倍",
    "meaning": "double, times, multiply",
    "onyomi": "ばい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "島": {
    "level": 12,
    "character": "島",
    "meaning": "island",
    "onyomi": "とう",
    "kunyomi": "しま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "祭": {
    "level": 12,
    "character": "祭",
    "meaning": "festival",
    "onyomi": "さい",
    "kunyomi": "まつり, まつ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "章": {
    "level": 12,
    "character": "章",
    "meaning": "chapter",
    "onyomi": "しょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "動": {
    "level": 12,
    "character": "動",
    "meaning": "move",
    "onyomi": "どう",
    "kunyomi": "うご",
    "important_reading": "onyomi",
    "nanori": null
  },
  "商": {
    "level": 12,
    "character": "商",
    "meaning": "merchandise",
    "onyomi": "しょう",
    "kunyomi": "あきな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "悪": {
    "level": 12,
    "character": "悪",
    "meaning": "bad, evil",
    "onyomi": "あく, お",
    "kunyomi": "わる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "族": {
    "level": 12,
    "character": "族",
    "meaning": "tribe, family",
    "onyomi": "ぞく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "球": {
    "level": 12,
    "character": "球",
    "meaning": "sphere, ball",
    "onyomi": "きゅう",
    "kunyomi": "たま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "陽": {
    "level": 12,
    "character": "陽",
    "meaning": "sunshine, sunlight",
    "onyomi": "よう",
    "kunyomi": "ひ",
    "important_reading": "onyomi",
    "nanori": "はる"
  },
  "寒": {
    "level": 12,
    "character": "寒",
    "meaning": "cold",
    "onyomi": "かん",
    "kunyomi": "さむ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "悲": {
    "level": 12,
    "character": "悲",
    "meaning": "sad",
    "onyomi": "ひ",
    "kunyomi": "かな",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "暑": {
    "level": 12,
    "character": "暑",
    "meaning": "hot, hot weather",
    "onyomi": "しょ",
    "kunyomi": "あつ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "期": {
    "level": 12,
    "character": "期",
    "meaning": "period of time, time period",
    "onyomi": "き",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "植": {
    "level": 12,
    "character": "植",
    "meaning": "plant",
    "onyomi": "しょく",
    "kunyomi": "う",
    "important_reading": "onyomi",
    "nanori": null
  },
  "歯": {
    "level": 12,
    "character": "歯",
    "meaning": "tooth, teeth",
    "onyomi": "し",
    "kunyomi": "は",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "温": {
    "level": 12,
    "character": "温",
    "meaning": "warm",
    "onyomi": "おん",
    "kunyomi": "あたた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "港": {
    "level": 12,
    "character": "港",
    "meaning": "harbor, harbour, port",
    "onyomi": "こう",
    "kunyomi": "みなと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "湯": {
    "level": 12,
    "character": "湯",
    "meaning": "hot water",
    "onyomi": "とう",
    "kunyomi": "ゆ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "登": {
    "level": 12,
    "character": "登",
    "meaning": "climb",
    "onyomi": "とう, と",
    "kunyomi": "のぼ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "着": {
    "level": 12,
    "character": "着",
    "meaning": "wear, arrive",
    "onyomi": "ちゃく",
    "kunyomi": "き, つ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "野": {
    "level": 12,
    "character": "野",
    "meaning": "field",
    "onyomi": "や",
    "kunyomi": "の",
    "important_reading": "onyomi",
    "nanori": null
  },
  "短": {
    "level": 12,
    "character": "短",
    "meaning": "short",
    "onyomi": "たん",
    "kunyomi": "みじか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "泉": {
    "level": 12,
    "character": "泉",
    "meaning": "spring, fountain",
    "onyomi": "せん",
    "kunyomi": "いずみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "息": {
    "level": 12,
    "character": "息",
    "meaning": "breath",
    "onyomi": "そく",
    "kunyomi": "いき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "感": {
    "level": 13,
    "character": "感",
    "meaning": "feeling",
    "onyomi": "かん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "橋": {
    "level": 13,
    "character": "橋",
    "meaning": "bridge",
    "onyomi": "きょう",
    "kunyomi": "はし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "詩": {
    "level": 13,
    "character": "詩",
    "meaning": "poem",
    "onyomi": "し",
    "kunyomi": "し",
    "important_reading": "onyomi",
    "nanori": null
  },
  "銀": {
    "level": 13,
    "character": "銀",
    "meaning": "silver",
    "onyomi": "ぎん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "題": {
    "level": 13,
    "character": "題",
    "meaning": "topic",
    "onyomi": "だい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "宿": {
    "level": 13,
    "character": "宿",
    "meaning": "lodge",
    "onyomi": "しゅく",
    "kunyomi": "やど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "願": {
    "level": 13,
    "character": "願",
    "meaning": "request",
    "onyomi": "がん",
    "kunyomi": "ねが, ねがい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "駅": {
    "level": 13,
    "character": "駅",
    "meaning": "station, train station",
    "onyomi": "えき",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "器": {
    "level": 13,
    "character": "器",
    "meaning": "container, vessel",
    "onyomi": "き",
    "kunyomi": "うつわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "士": {
    "level": 13,
    "character": "士",
    "meaning": "samurai",
    "onyomi": "し",
    "kunyomi": "さむらい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "課": {
    "level": 13,
    "character": "課",
    "meaning": "section",
    "onyomi": "か",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "問": {
    "level": 13,
    "character": "問",
    "meaning": "problem",
    "onyomi": "もん",
    "kunyomi": "と, とん",
    "important_reading": "onyomi",
    "nanori": null
  },
  "整": {
    "level": 13,
    "character": "整",
    "meaning": "arrange, organize, organise",
    "onyomi": "せい",
    "kunyomi": "ととの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "暗": {
    "level": 13,
    "character": "暗",
    "meaning": "dark",
    "onyomi": "あん",
    "kunyomi": "くら, くれ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "様": {
    "level": 13,
    "character": "様",
    "meaning": "formal name title, formal name ender, manner",
    "onyomi": "よう",
    "kunyomi": "さま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "福": {
    "level": 13,
    "character": "福",
    "meaning": "luck, fortune",
    "onyomi": "ふく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "緑": {
    "level": 13,
    "character": "緑",
    "meaning": "green",
    "onyomi": "りょく",
    "kunyomi": "みどり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "練": {
    "level": 13,
    "character": "練",
    "meaning": "practice",
    "onyomi": "れん",
    "kunyomi": "ね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "館": {
    "level": 13,
    "character": "館",
    "meaning": "public building",
    "onyomi": "かん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "億": {
    "level": 13,
    "character": "億",
    "meaning": "hundred million",
    "onyomi": "おく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "料": {
    "level": 13,
    "character": "料",
    "meaning": "fee, material",
    "onyomi": "りょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "標": {
    "level": 13,
    "character": "標",
    "meaning": "signpost",
    "onyomi": "ひょう",
    "kunyomi": "しるし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "殺": {
    "level": 13,
    "character": "殺",
    "meaning": "kill",
    "onyomi": "さつ",
    "kunyomi": "ころ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "然": {
    "level": 13,
    "character": "然",
    "meaning": "nature",
    "onyomi": "ぜん, ねん",
    "kunyomi": "しか, さ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "熱": {
    "level": 13,
    "character": "熱",
    "meaning": "heat, fever",
    "onyomi": "ねつ",
    "kunyomi": "あつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "賞": {
    "level": 13,
    "character": "賞",
    "meaning": "prize",
    "onyomi": "しょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "輪": {
    "level": 13,
    "character": "輪",
    "meaning": "wheel, ring, loop",
    "onyomi": "りん",
    "kunyomi": "わ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "選": {
    "level": 13,
    "character": "選",
    "meaning": "choose",
    "onyomi": "せん",
    "kunyomi": "えら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鏡": {
    "level": 13,
    "character": "鏡",
    "meaning": "mirror",
    "onyomi": "きょう",
    "kunyomi": "かがみ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "養": {
    "level": 13,
    "character": "養",
    "meaning": "foster",
    "onyomi": "よう",
    "kunyomi": "やしな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "謝": {
    "level": 13,
    "character": "謝",
    "meaning": "apologize, apologise",
    "onyomi": "しゃ",
    "kunyomi": "あやま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "情": {
    "level": 13,
    "character": "情",
    "meaning": "feeling, emotion",
    "onyomi": "じょう",
    "kunyomi": "なさけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "映": {
    "level": 13,
    "character": "映",
    "meaning": "reflect, reflection",
    "onyomi": "えい",
    "kunyomi": "うつ, は",
    "important_reading": "onyomi",
    "nanori": null
  },
  "疑": {
    "level": 13,
    "character": "疑",
    "meaning": "doubt",
    "onyomi": "ぎ",
    "kunyomi": "うたが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "皆": {
    "level": 13,
    "character": "皆",
    "meaning": "all, everyone, everything, everybody",
    "onyomi": "かい",
    "kunyomi": "みな, みんな",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "想": {
    "level": 13,
    "character": "想",
    "meaning": "concept",
    "onyomi": "そう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "像": {
    "level": 13,
    "character": "像",
    "meaning": "statue, image",
    "onyomi": "ぞう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "卒": {
    "level": 14,
    "character": "卒",
    "meaning": "graduate",
    "onyomi": "そつ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "完": {
    "level": 14,
    "character": "完",
    "meaning": "perfect",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "残": {
    "level": 14,
    "character": "残",
    "meaning": "remainder",
    "onyomi": "ざん",
    "kunyomi": "のこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "念": {
    "level": 14,
    "character": "念",
    "meaning": "thought",
    "onyomi": "ねん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "望": {
    "level": 14,
    "character": "望",
    "meaning": "hope",
    "onyomi": "ぼう",
    "kunyomi": "のぞ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "芸": {
    "level": 14,
    "character": "芸",
    "meaning": "acting, art",
    "onyomi": "げい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "格": {
    "level": 14,
    "character": "格",
    "meaning": "status",
    "onyomi": "かく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "能": {
    "level": 14,
    "character": "能",
    "meaning": "ability",
    "onyomi": "のう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "妥": {
    "level": 14,
    "character": "妥",
    "meaning": "gentle",
    "onyomi": "だ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "束": {
    "level": 14,
    "character": "束",
    "meaning": "bundle",
    "onyomi": "そく",
    "kunyomi": "たば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "雰": {
    "level": 14,
    "character": "雰",
    "meaning": "atmosphere",
    "onyomi": "ふん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "松": {
    "level": 14,
    "character": "松",
    "meaning": "pine, pine tree",
    "onyomi": "しょう",
    "kunyomi": "まつ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "例": {
    "level": 14,
    "character": "例",
    "meaning": "example",
    "onyomi": "れい",
    "kunyomi": "たと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "協": {
    "level": 14,
    "character": "協",
    "meaning": "cooperation",
    "onyomi": "きょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "参": {
    "level": 14,
    "character": "参",
    "meaning": "participate",
    "onyomi": "さん",
    "kunyomi": "まい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "周": {
    "level": 14,
    "character": "周",
    "meaning": "circumference",
    "onyomi": "しゅう",
    "kunyomi": "まわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "囲": {
    "level": 14,
    "character": "囲",
    "meaning": "surround",
    "onyomi": "い",
    "kunyomi": "かこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "固": {
    "level": 14,
    "character": "固",
    "meaning": "hard",
    "onyomi": "こ",
    "kunyomi": "かた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "季": {
    "level": 14,
    "character": "季",
    "meaning": "seasons",
    "onyomi": "き",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "希": {
    "level": 14,
    "character": "希",
    "meaning": "wish",
    "onyomi": "き",
    "kunyomi": "まれ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "折": {
    "level": 14,
    "character": "折",
    "meaning": "fold, bend",
    "onyomi": "せつ",
    "kunyomi": "お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "材": {
    "level": 14,
    "character": "材",
    "meaning": "lumber, timber",
    "onyomi": "ざい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "求": {
    "level": 14,
    "character": "求",
    "meaning": "request",
    "onyomi": "きゅう",
    "kunyomi": "もと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "的": {
    "level": 14,
    "character": "的",
    "meaning": "target, al, ~al, like, ~like",
    "onyomi": "てき",
    "kunyomi": "まと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "約": {
    "level": 14,
    "character": "約",
    "meaning": "promise",
    "onyomi": "やく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "基": {
    "level": 14,
    "character": "基",
    "meaning": "foundation",
    "onyomi": "き",
    "kunyomi": "もと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "性": {
    "level": 14,
    "character": "性",
    "meaning": "gender, nature",
    "onyomi": "せい, しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "技": {
    "level": 14,
    "character": "技",
    "meaning": "skill",
    "onyomi": "ぎ",
    "kunyomi": "わざ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "術": {
    "level": 14,
    "character": "術",
    "meaning": "art",
    "onyomi": "じゅつ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "私": {
    "level": 14,
    "character": "私",
    "meaning": "i, private",
    "onyomi": "し",
    "kunyomi": "わたし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "骨": {
    "level": 14,
    "character": "骨",
    "meaning": "bone",
    "onyomi": "こつ",
    "kunyomi": "ほね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "頑": {
    "level": 14,
    "character": "頑",
    "meaning": "stubborn",
    "onyomi": "がん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "猫": {
    "level": 15,
    "character": "猫",
    "meaning": "cat",
    "onyomi": "None",
    "kunyomi": "ねこ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "司": {
    "level": 15,
    "character": "司",
    "meaning": "director",
    "onyomi": "し",
    "kunyomi": "つかさど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "夫": {
    "level": 15,
    "character": "夫",
    "meaning": "husband",
    "onyomi": "ふう, ふ",
    "kunyomi": "おっと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "建": {
    "level": 15,
    "character": "建",
    "meaning": "build",
    "onyomi": "けん",
    "kunyomi": "た",
    "important_reading": "onyomi",
    "nanori": null
  },
  "飯": {
    "level": 15,
    "character": "飯",
    "meaning": "meal, food",
    "onyomi": "はん",
    "kunyomi": "めし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "勇": {
    "level": 15,
    "character": "勇",
    "meaning": "courage, bravery, valor, valour",
    "onyomi": "ゆう",
    "kunyomi": "いさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "単": {
    "level": 15,
    "character": "単",
    "meaning": "simple",
    "onyomi": "たん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "寺": {
    "level": 15,
    "character": "寺",
    "meaning": "temple",
    "onyomi": "じ",
    "kunyomi": "てら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "岩": {
    "level": 15,
    "character": "岩",
    "meaning": "boulder",
    "onyomi": "がん",
    "kunyomi": "いわ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "晴": {
    "level": 15,
    "character": "晴",
    "meaning": "clear up",
    "onyomi": "せい",
    "kunyomi": "は",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "秋": {
    "level": 15,
    "character": "秋",
    "meaning": "autumn, fall",
    "onyomi": "None",
    "kunyomi": "あき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "帰": {
    "level": 15,
    "character": "帰",
    "meaning": "return, return home",
    "onyomi": "き",
    "kunyomi": "かえ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "春": {
    "level": 15,
    "character": "春",
    "meaning": "spring",
    "onyomi": "しゅん",
    "kunyomi": "はる",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "昼": {
    "level": 15,
    "character": "昼",
    "meaning": "noon",
    "onyomi": "None",
    "kunyomi": "ひる",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "計": {
    "level": 15,
    "character": "計",
    "meaning": "measure, measurement",
    "onyomi": "けい",
    "kunyomi": "はか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "列": {
    "level": 15,
    "character": "列",
    "meaning": "row",
    "onyomi": "れつ, れ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "区": {
    "level": 15,
    "character": "区",
    "meaning": "district, ward",
    "onyomi": "く",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "坂": {
    "level": 15,
    "character": "坂",
    "meaning": "slope",
    "onyomi": "はん",
    "kunyomi": "さか",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "式": {
    "level": 15,
    "character": "式",
    "meaning": "ritual, ceremony, equation",
    "onyomi": "しき",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "信": {
    "level": 15,
    "character": "信",
    "meaning": "believe, trust",
    "onyomi": "しん",
    "kunyomi": "しん",
    "important_reading": "onyomi",
    "nanori": null
  },
  "変": {
    "level": 15,
    "character": "変",
    "meaning": "change, strange",
    "onyomi": "へん",
    "kunyomi": "か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "昨": {
    "level": 15,
    "character": "昨",
    "meaning": "previous, yesterday",
    "onyomi": "さく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "毒": {
    "level": 15,
    "character": "毒",
    "meaning": "poison",
    "onyomi": "どく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "法": {
    "level": 15,
    "character": "法",
    "meaning": "method, law",
    "onyomi": "ほう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "泣": {
    "level": 15,
    "character": "泣",
    "meaning": "cry",
    "onyomi": "きゅう",
    "kunyomi": "な",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "浅": {
    "level": 15,
    "character": "浅",
    "meaning": "shallow",
    "onyomi": "せん",
    "kunyomi": "あさ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "紀": {
    "level": 15,
    "character": "紀",
    "meaning": "account, narrative",
    "onyomi": "き",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "英": {
    "level": 15,
    "character": "英",
    "meaning": "england, english",
    "onyomi": "えい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "軍": {
    "level": 15,
    "character": "軍",
    "meaning": "army",
    "onyomi": "ぐん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "仏": {
    "level": 15,
    "character": "仏",
    "meaning": "buddha",
    "onyomi": "ぶつ",
    "kunyomi": "ほとけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "築": {
    "level": 15,
    "character": "築",
    "meaning": "construct, build",
    "onyomi": "ちく",
    "kunyomi": "きず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "晩": {
    "level": 15,
    "character": "晩",
    "meaning": "night, evening",
    "onyomi": "ばん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "丈": {
    "level": 15,
    "character": "丈",
    "meaning": "height, ten feet",
    "onyomi": "じょう",
    "kunyomi": "たけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "証": {
    "level": 16,
    "character": "証",
    "meaning": "evidence, proof",
    "onyomi": "しょう",
    "kunyomi": "あかし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "品": {
    "level": 16,
    "character": "品",
    "meaning": "product, article, goods, products",
    "onyomi": "ひん",
    "kunyomi": "しな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "遠": {
    "level": 16,
    "character": "遠",
    "meaning": "far",
    "onyomi": "えん",
    "kunyomi": "とお",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "笑": {
    "level": 16,
    "character": "笑",
    "meaning": "laugh",
    "onyomi": "しょう",
    "kunyomi": "わら, え",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "留": {
    "level": 16,
    "character": "留",
    "meaning": "detain",
    "onyomi": "る, りゅう",
    "kunyomi": "と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "園": {
    "level": 16,
    "character": "園",
    "meaning": "garden, park",
    "onyomi": "えん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "曜": {
    "level": 16,
    "character": "曜",
    "meaning": "weekday, day of the week",
    "onyomi": "よう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "書": {
    "level": 16,
    "character": "書",
    "meaning": "write, writing",
    "onyomi": "しょ",
    "kunyomi": "か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "門": {
    "level": 16,
    "character": "門",
    "meaning": "gates, gate",
    "onyomi": "もん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "係": {
    "level": 16,
    "character": "係",
    "meaning": "connection",
    "onyomi": "けい",
    "kunyomi": "かか, かかり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "取": {
    "level": 16,
    "character": "取",
    "meaning": "take",
    "onyomi": "しゅ",
    "kunyomi": "と",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "守": {
    "level": 16,
    "character": "守",
    "meaning": "protect",
    "onyomi": "す, しゅ",
    "kunyomi": "まも, もり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "典": {
    "level": 16,
    "character": "典",
    "meaning": "rule",
    "onyomi": "てん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "幸": {
    "level": 16,
    "character": "幸",
    "meaning": "happiness",
    "onyomi": "こう",
    "kunyomi": "しあわ, さいわ, さち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "急": {
    "level": 16,
    "character": "急",
    "meaning": "hurry",
    "onyomi": "きゅう",
    "kunyomi": "いそ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "真": {
    "level": 16,
    "character": "真",
    "meaning": "reality",
    "onyomi": "しん",
    "kunyomi": "ま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "箱": {
    "level": 16,
    "character": "箱",
    "meaning": "box",
    "onyomi": "None",
    "kunyomi": "はこ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "荷": {
    "level": 16,
    "character": "荷",
    "meaning": "luggage",
    "onyomi": "か",
    "kunyomi": "に",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "面": {
    "level": 16,
    "character": "面",
    "meaning": "surface, face",
    "onyomi": "めん",
    "kunyomi": "おも, おもて",
    "important_reading": "onyomi",
    "nanori": null
  },
  "府": {
    "level": 16,
    "character": "府",
    "meaning": "government",
    "onyomi": "ふ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "治": {
    "level": 16,
    "character": "治",
    "meaning": "cure, heal, reign, rule",
    "onyomi": "じ, ち",
    "kunyomi": "なお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "浴": {
    "level": 16,
    "character": "浴",
    "meaning": "bathe",
    "onyomi": "よく",
    "kunyomi": "あ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "辞": {
    "level": 16,
    "character": "辞",
    "meaning": "quit, word",
    "onyomi": "じ",
    "kunyomi": "や",
    "important_reading": "onyomi",
    "nanori": null
  },
  "関": {
    "level": 16,
    "character": "関",
    "meaning": "related, connected",
    "onyomi": "かん",
    "kunyomi": "かか, せき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "保": {
    "level": 16,
    "character": "保",
    "meaning": "preserve, guarantee",
    "onyomi": "ほ",
    "kunyomi": "たも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "弁": {
    "level": 16,
    "character": "弁",
    "meaning": "dialect, speech",
    "onyomi": "べん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "政": {
    "level": 16,
    "character": "政",
    "meaning": "politics, government",
    "onyomi": "せい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "険": {
    "level": 16,
    "character": "険",
    "meaning": "risky, steep",
    "onyomi": "けん",
    "kunyomi": "けわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "危": {
    "level": 16,
    "character": "危",
    "meaning": "dangerous",
    "onyomi": "き",
    "kunyomi": "あぶ, あや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "存": {
    "level": 16,
    "character": "存",
    "meaning": "exist, suppose",
    "onyomi": "そん, ぞん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "専": {
    "level": 16,
    "character": "専",
    "meaning": "specialty",
    "onyomi": "せん",
    "kunyomi": "もっぱ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "冒": {
    "level": 16,
    "character": "冒",
    "meaning": "dare",
    "onyomi": "ぼう",
    "kunyomi": "おか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "冗": {
    "level": 16,
    "character": "冗",
    "meaning": "superfluous, unnecessary, uselessness",
    "onyomi": "じょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "阪": {
    "level": 16,
    "character": "阪",
    "meaning": "heights, slope",
    "onyomi": "はん",
    "kunyomi": "さか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "喜": {
    "level": 16,
    "character": "喜",
    "meaning": "rejoice, delighted, pleased, happy",
    "onyomi": "き",
    "kunyomi": "よろこ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "干": {
    "level": 17,
    "character": "干",
    "meaning": "dry, dry out",
    "onyomi": "かん",
    "kunyomi": "ほ, ひ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "無": {
    "level": 17,
    "character": "無",
    "meaning": "nothing",
    "onyomi": "む, ぶ",
    "kunyomi": "な",
    "important_reading": "onyomi",
    "nanori": null
  },
  "非": {
    "level": 17,
    "character": "非",
    "meaning": "injustice, negative, mistake",
    "onyomi": "ひ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "是": {
    "level": 17,
    "character": "是",
    "meaning": "absolutely",
    "onyomi": "ぜ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "結": {
    "level": 17,
    "character": "結",
    "meaning": "bind, tie",
    "onyomi": "けつ",
    "kunyomi": "むす, ゆ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "細": {
    "level": 17,
    "character": "細",
    "meaning": "thin",
    "onyomi": "さい",
    "kunyomi": "ほそ, こま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "原": {
    "level": 17,
    "character": "原",
    "meaning": "original, fundamental, plain, field",
    "onyomi": "げん",
    "kunyomi": "はら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "薬": {
    "level": 17,
    "character": "薬",
    "meaning": "medicine, drug, drugs",
    "onyomi": "やく",
    "kunyomi": "くすり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鼻": {
    "level": 17,
    "character": "鼻",
    "meaning": "nose",
    "onyomi": "び",
    "kunyomi": "はな",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "側": {
    "level": 17,
    "character": "側",
    "meaning": "side",
    "onyomi": "そく",
    "kunyomi": "がわ, そば",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "兵": {
    "level": 17,
    "character": "兵",
    "meaning": "soldier",
    "onyomi": "へい, ひょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "堂": {
    "level": 17,
    "character": "堂",
    "meaning": "hall, public chamber",
    "onyomi": "どう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "塩": {
    "level": 17,
    "character": "塩",
    "meaning": "salt",
    "onyomi": "えん",
    "kunyomi": "しお",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "席": {
    "level": 17,
    "character": "席",
    "meaning": "seat",
    "onyomi": "せき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "敗": {
    "level": 17,
    "character": "敗",
    "meaning": "failure, fail",
    "onyomi": "はい",
    "kunyomi": "やぶ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "梅": {
    "level": 17,
    "character": "梅",
    "meaning": "ume, japanese plum",
    "onyomi": "ばい",
    "kunyomi": "うめ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "因": {
    "level": 17,
    "character": "因",
    "meaning": "cause",
    "onyomi": "いん",
    "kunyomi": "よ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "常": {
    "level": 17,
    "character": "常",
    "meaning": "normal, ordinary",
    "onyomi": "じょう",
    "kunyomi": "つね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "識": {
    "level": 17,
    "character": "識",
    "meaning": "discerning, discriminating, know",
    "onyomi": "しき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "渉": {
    "level": 17,
    "character": "渉",
    "meaning": "ford",
    "onyomi": "しょう",
    "kunyomi": "わた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "虚": {
    "level": 17,
    "character": "虚",
    "meaning": "void",
    "onyomi": "きょ, こ",
    "kunyomi": "むな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "官": {
    "level": 17,
    "character": "官",
    "meaning": "government",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "察": {
    "level": 17,
    "character": "察",
    "meaning": "guess",
    "onyomi": "さつ",
    "kunyomi": "さっ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "底": {
    "level": 17,
    "character": "底",
    "meaning": "bottom",
    "onyomi": "てい",
    "kunyomi": "そこ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "愛": {
    "level": 17,
    "character": "愛",
    "meaning": "love",
    "onyomi": "あい",
    "kunyomi": "まな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "署": {
    "level": 17,
    "character": "署",
    "meaning": "government office, political office, office",
    "onyomi": "しょ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "警": {
    "level": 17,
    "character": "警",
    "meaning": "warn, admonish",
    "onyomi": "けい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "恋": {
    "level": 17,
    "character": "恋",
    "meaning": "romance",
    "onyomi": "れん",
    "kunyomi": "こい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "覚": {
    "level": 17,
    "character": "覚",
    "meaning": "memorize, awake, memorise",
    "onyomi": "かく",
    "kunyomi": "おぼ, さ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "説": {
    "level": 17,
    "character": "説",
    "meaning": "theory",
    "onyomi": "せつ",
    "kunyomi": "と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "幻": {
    "level": 17,
    "character": "幻",
    "meaning": "illusion",
    "onyomi": "げん",
    "kunyomi": "まぼろし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "果": {
    "level": 17,
    "character": "果",
    "meaning": "fruit",
    "onyomi": "か",
    "kunyomi": "くだ, は",
    "important_reading": "onyomi",
    "nanori": null
  },
  "栄": {
    "level": 17,
    "character": "栄",
    "meaning": "prosperity, flourish",
    "onyomi": "えい",
    "kunyomi": "さか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "訓": {
    "level": 18,
    "character": "訓",
    "meaning": "instruction",
    "onyomi": "くん",
    "kunyomi": "よ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "試": {
    "level": 18,
    "character": "試",
    "meaning": "try, attempt",
    "onyomi": "し",
    "kunyomi": "こころ, ため",
    "important_reading": "onyomi",
    "nanori": null
  },
  "弓": {
    "level": 18,
    "character": "弓",
    "meaning": "bow",
    "onyomi": "きゅう",
    "kunyomi": "ゆみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "告": {
    "level": 18,
    "character": "告",
    "meaning": "announce",
    "onyomi": "こく",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "種": {
    "level": 18,
    "character": "種",
    "meaning": "kind, type",
    "onyomi": "しゅ",
    "kunyomi": "たね, ぐさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "達": {
    "level": 18,
    "character": "達",
    "meaning": "attain, plural",
    "onyomi": "たつ",
    "kunyomi": "たち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "類": {
    "level": 18,
    "character": "類",
    "meaning": "type, category, kind",
    "onyomi": "るい",
    "kunyomi": "たぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "報": {
    "level": 18,
    "character": "報",
    "meaning": "news, report",
    "onyomi": "ほう",
    "kunyomi": "むく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "祈": {
    "level": 18,
    "character": "祈",
    "meaning": "pray, prayer",
    "onyomi": "き",
    "kunyomi": "いの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "等": {
    "level": 18,
    "character": "等",
    "meaning": "equal",
    "onyomi": "とう",
    "kunyomi": "ひと, など",
    "important_reading": "onyomi",
    "nanori": null
  },
  "汽": {
    "level": 18,
    "character": "汽",
    "meaning": "steam",
    "onyomi": "き",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "借": {
    "level": 18,
    "character": "借",
    "meaning": "borrow",
    "onyomi": "しゃく",
    "kunyomi": "か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "焼": {
    "level": 18,
    "character": "焼",
    "meaning": "bake, cook, burn",
    "onyomi": "しょう",
    "kunyomi": "や",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "座": {
    "level": 18,
    "character": "座",
    "meaning": "sit, seat",
    "onyomi": "ざ",
    "kunyomi": "すわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "忘": {
    "level": 18,
    "character": "忘",
    "meaning": "forget",
    "onyomi": "ぼう",
    "kunyomi": "わす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "洗": {
    "level": 18,
    "character": "洗",
    "meaning": "wash",
    "onyomi": "せん",
    "kunyomi": "あら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "胸": {
    "level": 18,
    "character": "胸",
    "meaning": "chest, breast",
    "onyomi": "きょう",
    "kunyomi": "むね",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "脳": {
    "level": 18,
    "character": "脳",
    "meaning": "brain",
    "onyomi": "のう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "僧": {
    "level": 18,
    "character": "僧",
    "meaning": "priest, monk",
    "onyomi": "そう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "禅": {
    "level": 18,
    "character": "禅",
    "meaning": "zen, zen buddhism",
    "onyomi": "ぜん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "験": {
    "level": 18,
    "character": "験",
    "meaning": "test",
    "onyomi": "けん",
    "kunyomi": "ため, ためし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "可": {
    "level": 18,
    "character": "可",
    "meaning": "possible",
    "onyomi": "か",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "許": {
    "level": 18,
    "character": "許",
    "meaning": "permit, allow",
    "onyomi": "きょ",
    "kunyomi": "ゆる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "枚": {
    "level": 18,
    "character": "枚",
    "meaning": "flat objects counter, flat object, counter for flat objects",
    "onyomi": "まい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "静": {
    "level": 18,
    "character": "静",
    "meaning": "quiet",
    "onyomi": "せい",
    "kunyomi": "しず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "句": {
    "level": 18,
    "character": "句",
    "meaning": "paragraph, phrase",
    "onyomi": "く",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "禁": {
    "level": 18,
    "character": "禁",
    "meaning": "prohibition",
    "onyomi": "きん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "喫": {
    "level": 18,
    "character": "喫",
    "meaning": "consume",
    "onyomi": "きつ",
    "kunyomi": "の",
    "important_reading": "onyomi",
    "nanori": null
  },
  "煙": {
    "level": 18,
    "character": "煙",
    "meaning": "smoke",
    "onyomi": "えん",
    "kunyomi": "けむ, けむり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "舌": {
    "level": 19,
    "character": "舌",
    "meaning": "tongue",
    "onyomi": "ぜつ",
    "kunyomi": "した",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "続": {
    "level": 19,
    "character": "続",
    "meaning": "continue",
    "onyomi": "ぞく",
    "kunyomi": "つづ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "加": {
    "level": 19,
    "character": "加",
    "meaning": "add",
    "onyomi": "か",
    "kunyomi": "くわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "節": {
    "level": 19,
    "character": "節",
    "meaning": "season",
    "onyomi": "せつ",
    "kunyomi": "ふし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "減": {
    "level": 19,
    "character": "減",
    "meaning": "decrease",
    "onyomi": "げん",
    "kunyomi": "へ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "順": {
    "level": 19,
    "character": "順",
    "meaning": "order, sequence",
    "onyomi": "じゅん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "容": {
    "level": 19,
    "character": "容",
    "meaning": "form, appearance, shape, figure",
    "onyomi": "よう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "布": {
    "level": 19,
    "character": "布",
    "meaning": "cloth",
    "onyomi": "ふ",
    "kunyomi": "ぬの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "易": {
    "level": 19,
    "character": "易",
    "meaning": "easy",
    "onyomi": "い, えき",
    "kunyomi": "やさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "財": {
    "level": 19,
    "character": "財",
    "meaning": "wealth",
    "onyomi": "さい, ざい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "若": {
    "level": 19,
    "character": "若",
    "meaning": "young",
    "onyomi": "じゃく",
    "kunyomi": "わか, も",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "詞": {
    "level": 19,
    "character": "詞",
    "meaning": "part of speech, speech particle, particle of speech, grammar particle",
    "onyomi": "し",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "昆": {
    "level": 19,
    "character": "昆",
    "meaning": "descendants",
    "onyomi": "こん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "閥": {
    "level": 19,
    "character": "閥",
    "meaning": "clique, clan",
    "onyomi": "ばつ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "歴": {
    "level": 19,
    "character": "歴",
    "meaning": "continuation",
    "onyomi": "れき",
    "kunyomi": "へ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "冊": {
    "level": 19,
    "character": "冊",
    "meaning": "books counter, books, counter for books, volumes counter, volumes, counter for volumes",
    "onyomi": "さつ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "宇": {
    "level": 19,
    "character": "宇",
    "meaning": "outer space",
    "onyomi": "う",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "宙": {
    "level": 19,
    "character": "宙",
    "meaning": "mid air",
    "onyomi": "ちゅう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "忙": {
    "level": 19,
    "character": "忙",
    "meaning": "busy",
    "onyomi": "ぼう",
    "kunyomi": "いそが",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "履": {
    "level": 19,
    "character": "履",
    "meaning": "boots",
    "onyomi": "り",
    "kunyomi": "は",
    "important_reading": "onyomi",
    "nanori": null
  },
  "団": {
    "level": 19,
    "character": "団",
    "meaning": "group",
    "onyomi": "だん, とん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "暴": {
    "level": 19,
    "character": "暴",
    "meaning": "violence",
    "onyomi": "ぼう",
    "kunyomi": "あば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "混": {
    "level": 19,
    "character": "混",
    "meaning": "mix",
    "onyomi": "こん",
    "kunyomi": "ま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "乱": {
    "level": 19,
    "character": "乱",
    "meaning": "riot",
    "onyomi": "らん",
    "kunyomi": "みだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "徒": {
    "level": 19,
    "character": "徒",
    "meaning": "junior, follower",
    "onyomi": "と",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "得": {
    "level": 19,
    "character": "得",
    "meaning": "acquire",
    "onyomi": "とく",
    "kunyomi": "え, う",
    "important_reading": "onyomi",
    "nanori": null
  },
  "改": {
    "level": 19,
    "character": "改",
    "meaning": "renew",
    "onyomi": "かい",
    "kunyomi": "あらた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "連": {
    "level": 19,
    "character": "連",
    "meaning": "take along",
    "onyomi": "れん",
    "kunyomi": "つ, つら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "善": {
    "level": 19,
    "character": "善",
    "meaning": "morally good, good",
    "onyomi": "ぜん",
    "kunyomi": "ぜん",
    "important_reading": "onyomi",
    "nanori": null
  },
  "困": {
    "level": 19,
    "character": "困",
    "meaning": "distressed, troubled",
    "onyomi": "こん",
    "kunyomi": "こま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "絡": {
    "level": 19,
    "character": "絡",
    "meaning": "entangle, coil around, entwine",
    "onyomi": "らく",
    "kunyomi": "から",
    "important_reading": "onyomi",
    "nanori": null
  },
  "比": {
    "level": 19,
    "character": "比",
    "meaning": "compare",
    "onyomi": "ひ",
    "kunyomi": "くら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "笛": {
    "level": 19,
    "character": "笛",
    "meaning": "flute",
    "onyomi": "てき",
    "kunyomi": "ふえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "史": {
    "level": 19,
    "character": "史",
    "meaning": "history",
    "onyomi": "し",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "災": {
    "level": 20,
    "character": "災",
    "meaning": "disaster",
    "onyomi": "さい",
    "kunyomi": "わざわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "産": {
    "level": 20,
    "character": "産",
    "meaning": "give birth, birth",
    "onyomi": "さん",
    "kunyomi": "う",
    "important_reading": "onyomi",
    "nanori": null
  },
  "穴": {
    "level": 20,
    "character": "穴",
    "meaning": "hole, cave",
    "onyomi": "けつ",
    "kunyomi": "あな",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "機": {
    "level": 20,
    "character": "機",
    "meaning": "machine",
    "onyomi": "き",
    "kunyomi": "はた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "害": {
    "level": 20,
    "character": "害",
    "meaning": "damage, injury, harm",
    "onyomi": "がい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "率": {
    "level": 20,
    "character": "率",
    "meaning": "percent, percentage",
    "onyomi": "りつ, そつ",
    "kunyomi": "ひき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "飛": {
    "level": 20,
    "character": "飛",
    "meaning": "fly",
    "onyomi": "ひ",
    "kunyomi": "と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "余": {
    "level": 20,
    "character": "余",
    "meaning": "surplus, excess",
    "onyomi": "よ",
    "kunyomi": "あま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "難": {
    "level": 20,
    "character": "難",
    "meaning": "difficult",
    "onyomi": "なん",
    "kunyomi": "むずか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "妨": {
    "level": 20,
    "character": "妨",
    "meaning": "obstruct, impede",
    "onyomi": "ぼう",
    "kunyomi": "さまた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "被": {
    "level": 20,
    "character": "被",
    "meaning": "incur",
    "onyomi": "ひ",
    "kunyomi": "かぶ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "裕": {
    "level": 20,
    "character": "裕",
    "meaning": "abundant, plentiful",
    "onyomi": "ゆう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "震": {
    "level": 20,
    "character": "震",
    "meaning": "earthquake, quake, shake",
    "onyomi": "しん",
    "kunyomi": "ふる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "尻": {
    "level": 20,
    "character": "尻",
    "meaning": "butt",
    "onyomi": null,
    "kunyomi": "しり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "尾": {
    "level": 20,
    "character": "尾",
    "meaning": "tail",
    "onyomi": "び",
    "kunyomi": "お, ぽ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "械": {
    "level": 20,
    "character": "械",
    "meaning": "contraption",
    "onyomi": "かい",
    "kunyomi": "かせ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "確": {
    "level": 20,
    "character": "確",
    "meaning": "certain",
    "onyomi": "かく",
    "kunyomi": "たし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "嫌": {
    "level": 20,
    "character": "嫌",
    "meaning": "dislike",
    "onyomi": "けん",
    "kunyomi": "いや, きら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "個": {
    "level": 20,
    "character": "個",
    "meaning": "individual",
    "onyomi": "こ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "圧": {
    "level": 20,
    "character": "圧",
    "meaning": "pressure",
    "onyomi": "あつ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "在": {
    "level": 20,
    "character": "在",
    "meaning": "exist",
    "onyomi": "ざい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "夢": {
    "level": 20,
    "character": "夢",
    "meaning": "dream",
    "onyomi": "む",
    "kunyomi": "ゆめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "倒": {
    "level": 20,
    "character": "倒",
    "meaning": "overthrow, collapse",
    "onyomi": "とう",
    "kunyomi": "たお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "臭": {
    "level": 20,
    "character": "臭",
    "meaning": "stinking, stinky, smelly",
    "onyomi": "しゅう",
    "kunyomi": "くさ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "厚": {
    "level": 20,
    "character": "厚",
    "meaning": "thick",
    "onyomi": "こう",
    "kunyomi": "あつ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "妻": {
    "level": 20,
    "character": "妻",
    "meaning": "wife",
    "onyomi": "さい",
    "kunyomi": "つま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "議": {
    "level": 20,
    "character": "議",
    "meaning": "deliberation, discussion",
    "onyomi": "ぎ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "犯": {
    "level": 20,
    "character": "犯",
    "meaning": "crime",
    "onyomi": "はん",
    "kunyomi": "おか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "罪": {
    "level": 20,
    "character": "罪",
    "meaning": "guilt",
    "onyomi": "ざい",
    "kunyomi": "つみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "防": {
    "level": 20,
    "character": "防",
    "meaning": "prevent, prevention",
    "onyomi": "ぼう",
    "kunyomi": "ふせ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "論": {
    "level": 20,
    "character": "論",
    "meaning": "theory",
    "onyomi": "ろん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "経": {
    "level": 20,
    "character": "経",
    "meaning": "passage of time, pass through, manage",
    "onyomi": "けい",
    "kunyomi": "た, へ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "義": {
    "level": 21,
    "character": "義",
    "meaning": "righteousness",
    "onyomi": "ぎ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "敵": {
    "level": 21,
    "character": "敵",
    "meaning": "enemy",
    "onyomi": "てき",
    "kunyomi": "かな, かたき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "済": {
    "level": 21,
    "character": "済",
    "meaning": "come to an end",
    "onyomi": "さい",
    "kunyomi": "す",
    "important_reading": "onyomi",
    "nanori": null
  },
  "委": {
    "level": 21,
    "character": "委",
    "meaning": "committee",
    "onyomi": "い",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "挙": {
    "level": 21,
    "character": "挙",
    "meaning": "raise",
    "onyomi": "きょ",
    "kunyomi": "あ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "判": {
    "level": 21,
    "character": "判",
    "meaning": "judge",
    "onyomi": "はん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "制": {
    "level": 21,
    "character": "制",
    "meaning": "control",
    "onyomi": "せい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "務": {
    "level": 21,
    "character": "務",
    "meaning": "task",
    "onyomi": "む",
    "kunyomi": "つと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "査": {
    "level": 21,
    "character": "査",
    "meaning": "inspect, investigate, inspection, investigation",
    "onyomi": "さ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "総": {
    "level": 21,
    "character": "総",
    "meaning": "whole",
    "onyomi": "そう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "設": {
    "level": 21,
    "character": "設",
    "meaning": "establish",
    "onyomi": "せつ",
    "kunyomi": "もう",
    "important_reading": "onyomi",
    "nanori": null
  },
  "資": {
    "level": 21,
    "character": "資",
    "meaning": "resources",
    "onyomi": "し",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "権": {
    "level": 21,
    "character": "権",
    "meaning": "rights",
    "onyomi": "けん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "件": {
    "level": 21,
    "character": "件",
    "meaning": "matter, affair",
    "onyomi": "けん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "派": {
    "level": 21,
    "character": "派",
    "meaning": "sect",
    "onyomi": "は",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "岡": {
    "level": 21,
    "character": "岡",
    "meaning": "hill",
    "onyomi": "None",
    "kunyomi": "おか",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "素": {
    "level": 21,
    "character": "素",
    "meaning": "element",
    "onyomi": "す, そ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "断": {
    "level": 21,
    "character": "断",
    "meaning": "cut off",
    "onyomi": "だん",
    "kunyomi": "ことわ, た",
    "important_reading": "onyomi",
    "nanori": null
  },
  "評": {
    "level": 21,
    "character": "評",
    "meaning": "evaluate",
    "onyomi": "ひょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "批": {
    "level": 21,
    "character": "批",
    "meaning": "criticism",
    "onyomi": "ひ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "任": {
    "level": 21,
    "character": "任",
    "meaning": "duty",
    "onyomi": "にん",
    "kunyomi": "まか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "検": {
    "level": 21,
    "character": "検",
    "meaning": "examine",
    "onyomi": "けん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "審": {
    "level": 21,
    "character": "審",
    "meaning": "judge",
    "onyomi": "しん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "条": {
    "level": 21,
    "character": "条",
    "meaning": "clause",
    "onyomi": "じょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "責": {
    "level": 21,
    "character": "責",
    "meaning": "blame",
    "onyomi": "せき",
    "kunyomi": "せ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "省": {
    "level": 21,
    "character": "省",
    "meaning": "conserve",
    "onyomi": "しょう, せい",
    "kunyomi": "はぶ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "増": {
    "level": 21,
    "character": "増",
    "meaning": "increase",
    "onyomi": "ぞう",
    "kunyomi": "ふ, ま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "税": {
    "level": 21,
    "character": "税",
    "meaning": "tax",
    "onyomi": "ぜい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "解": {
    "level": 21,
    "character": "解",
    "meaning": "untie, solve",
    "onyomi": "かい",
    "kunyomi": "と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "際": {
    "level": 21,
    "character": "際",
    "meaning": "occasion",
    "onyomi": "さい",
    "kunyomi": "きわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "認": {
    "level": 21,
    "character": "認",
    "meaning": "recognize, recognise",
    "onyomi": "にん",
    "kunyomi": "みと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "企": {
    "level": 21,
    "character": "企",
    "meaning": "plan",
    "onyomi": "き",
    "kunyomi": "くわだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "各": {
    "level": 22,
    "character": "各",
    "meaning": "each",
    "onyomi": "かく",
    "kunyomi": "おの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "誕": {
    "level": 22,
    "character": "誕",
    "meaning": "birth",
    "onyomi": "たん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "罰": {
    "level": 22,
    "character": "罰",
    "meaning": "penalty, punishment",
    "onyomi": "ばつ",
    "kunyomi": "ばっ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "脱": {
    "level": 22,
    "character": "脱",
    "meaning": "undress",
    "onyomi": "だつ",
    "kunyomi": "ぬ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "過": {
    "level": 22,
    "character": "過",
    "meaning": "surpass",
    "onyomi": "か",
    "kunyomi": "す, あやま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "坊": {
    "level": 22,
    "character": "坊",
    "meaning": "monk",
    "onyomi": "ぼう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "寝": {
    "level": 22,
    "character": "寝",
    "meaning": "lie down, lay down, sleep",
    "onyomi": "しん",
    "kunyomi": "ね",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "宮": {
    "level": 22,
    "character": "宮",
    "meaning": "shinto shrine, shrine, palace",
    "onyomi": "きゅう",
    "kunyomi": "みや",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "案": {
    "level": 22,
    "character": "案",
    "meaning": "plan",
    "onyomi": "あん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "置": {
    "level": 22,
    "character": "置",
    "meaning": "put",
    "onyomi": "ち",
    "kunyomi": "お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "費": {
    "level": 22,
    "character": "費",
    "meaning": "expense, cost",
    "onyomi": "ひ",
    "kunyomi": "つい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "価": {
    "level": 22,
    "character": "価",
    "meaning": "value",
    "onyomi": "か",
    "kunyomi": "あたい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "勢": {
    "level": 22,
    "character": "勢",
    "meaning": "force",
    "onyomi": "せい",
    "kunyomi": "いきお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "営": {
    "level": 22,
    "character": "営",
    "meaning": "manage",
    "onyomi": "えい",
    "kunyomi": "いとな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "示": {
    "level": 22,
    "character": "示",
    "meaning": "indicate, show",
    "onyomi": "じ, し",
    "kunyomi": "しめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "統": {
    "level": 22,
    "character": "統",
    "meaning": "unite",
    "onyomi": "とう",
    "kunyomi": "す",
    "important_reading": "onyomi",
    "nanori": null
  },
  "領": {
    "level": 22,
    "character": "領",
    "meaning": "territory",
    "onyomi": "りょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "策": {
    "level": 22,
    "character": "策",
    "meaning": "plan",
    "onyomi": "さく",
    "kunyomi": "さく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "藤": {
    "level": 22,
    "character": "藤",
    "meaning": "wisteria",
    "onyomi": "とう, どう",
    "kunyomi": "ふじ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "副": {
    "level": 22,
    "character": "副",
    "meaning": "vice, side",
    "onyomi": "ふく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "観": {
    "level": 22,
    "character": "観",
    "meaning": "view",
    "onyomi": "かん",
    "kunyomi": "み",
    "important_reading": "onyomi",
    "nanori": null
  },
  "値": {
    "level": 22,
    "character": "値",
    "meaning": "value",
    "onyomi": "ち",
    "kunyomi": "ね, あたい",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "吸": {
    "level": 22,
    "character": "吸",
    "meaning": "suck, inhale",
    "onyomi": "きゅう",
    "kunyomi": "す",
    "important_reading": "onyomi",
    "nanori": null
  },
  "域": {
    "level": 22,
    "character": "域",
    "meaning": "region, regional boundary, boundary",
    "onyomi": "いき",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "姿": {
    "level": 22,
    "character": "姿",
    "meaning": "figure, shape, form",
    "onyomi": "し",
    "kunyomi": "すがた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "応": {
    "level": 22,
    "character": "応",
    "meaning": "respond",
    "onyomi": "おう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "提": {
    "level": 22,
    "character": "提",
    "meaning": "present, submit",
    "onyomi": "てい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "援": {
    "level": 22,
    "character": "援",
    "meaning": "aid, assist",
    "onyomi": "えん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "状": {
    "level": 22,
    "character": "状",
    "meaning": "condition",
    "onyomi": "じょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "態": {
    "level": 22,
    "character": "態",
    "meaning": "appearance",
    "onyomi": "たい",
    "kunyomi": "わざ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "賀": {
    "level": 22,
    "character": "賀",
    "meaning": "congratulations",
    "onyomi": "が",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "革": {
    "level": 23,
    "character": "革",
    "meaning": "leather",
    "onyomi": "かく",
    "kunyomi": "かわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鬼": {
    "level": 23,
    "character": "鬼",
    "meaning": "demon",
    "onyomi": "き",
    "kunyomi": "おに",
    "important_reading": "onyomi",
    "nanori": null
  },
  "俳": {
    "level": 23,
    "character": "俳",
    "meaning": "haiku",
    "onyomi": "はい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "裁": {
    "level": 23,
    "character": "裁",
    "meaning": "judge",
    "onyomi": "さい",
    "kunyomi": "さば, た",
    "important_reading": "onyomi",
    "nanori": null
  },
  "呼": {
    "level": 23,
    "character": "呼",
    "meaning": "call",
    "onyomi": "こ",
    "kunyomi": "よ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "収": {
    "level": 23,
    "character": "収",
    "meaning": "obtain",
    "onyomi": "しゅう",
    "kunyomi": "おさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "停": {
    "level": 23,
    "character": "停",
    "meaning": "halt",
    "onyomi": "てい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "職": {
    "level": 23,
    "character": "職",
    "meaning": "employment",
    "onyomi": "しょく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "規": {
    "level": 23,
    "character": "規",
    "meaning": "standard",
    "onyomi": "き",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "護": {
    "level": 23,
    "character": "護",
    "meaning": "defend",
    "onyomi": "ご",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "割": {
    "level": 23,
    "character": "割",
    "meaning": "divide",
    "onyomi": "かつ",
    "kunyomi": "わり, わ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "崎": {
    "level": 23,
    "character": "崎",
    "meaning": "cape",
    "onyomi": "き",
    "kunyomi": "さき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "演": {
    "level": 23,
    "character": "演",
    "meaning": "perform, performance",
    "onyomi": "えん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "律": {
    "level": 23,
    "character": "律",
    "meaning": "law",
    "onyomi": "りつ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "師": {
    "level": 23,
    "character": "師",
    "meaning": "teacher, expert, master",
    "onyomi": "し",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "看": {
    "level": 23,
    "character": "看",
    "meaning": "watch over",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "準": {
    "level": 23,
    "character": "準",
    "meaning": "standard",
    "onyomi": "じゅん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "則": {
    "level": 23,
    "character": "則",
    "meaning": "rule",
    "onyomi": "そく",
    "kunyomi": "のっと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "備": {
    "level": 23,
    "character": "備",
    "meaning": "provide, equip",
    "onyomi": "び",
    "kunyomi": "そな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "導": {
    "level": 23,
    "character": "導",
    "meaning": "lead",
    "onyomi": "どう",
    "kunyomi": "みちび",
    "important_reading": "onyomi",
    "nanori": null
  },
  "幹": {
    "level": 23,
    "character": "幹",
    "meaning": "tree trunk",
    "onyomi": "かん",
    "kunyomi": "みき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "張": {
    "level": 23,
    "character": "張",
    "meaning": "stretch",
    "onyomi": "ちょう",
    "kunyomi": "は",
    "important_reading": "onyomi",
    "nanori": null
  },
  "優": {
    "level": 23,
    "character": "優",
    "meaning": "superior, gentle",
    "onyomi": "ゆう",
    "kunyomi": "やさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "宅": {
    "level": 23,
    "character": "宅",
    "meaning": "house, home",
    "onyomi": "たく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "沢": {
    "level": 23,
    "character": "沢",
    "meaning": "swamp",
    "onyomi": "たく",
    "kunyomi": "さわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "贅": {
    "level": 23,
    "character": "贅",
    "meaning": "luxury",
    "onyomi": "ぜい",
    "kunyomi": "いぼ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "施": {
    "level": 23,
    "character": "施",
    "meaning": "carry out",
    "onyomi": "し",
    "kunyomi": "ほどこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "現": {
    "level": 23,
    "character": "現",
    "meaning": "present time, present",
    "onyomi": "げん",
    "kunyomi": "あらわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "乳": {
    "level": 23,
    "character": "乳",
    "meaning": "milk",
    "onyomi": "にゅう",
    "kunyomi": "ちち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "城": {
    "level": 23,
    "character": "城",
    "meaning": "castle",
    "onyomi": "じょう",
    "kunyomi": "しろ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "秀": {
    "level": 23,
    "character": "秀",
    "meaning": "excel",
    "onyomi": "しゅう",
    "kunyomi": "ひい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "祝": {
    "level": 24,
    "character": "祝",
    "meaning": "celebrate",
    "onyomi": "しゅく, しゅう",
    "kunyomi": "いわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "担": {
    "level": 24,
    "character": "担",
    "meaning": "carry, bear",
    "onyomi": "たん",
    "kunyomi": "にな, かつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "額": {
    "level": 24,
    "character": "額",
    "meaning": "amount, framed picture, forehead",
    "onyomi": "がく",
    "kunyomi": "ひたい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "製": {
    "level": 24,
    "character": "製",
    "meaning": "manufacture",
    "onyomi": "せい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "違": {
    "level": 24,
    "character": "違",
    "meaning": "different",
    "onyomi": "い",
    "kunyomi": "ちが",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "燃": {
    "level": 24,
    "character": "燃",
    "meaning": "burn",
    "onyomi": "ねん",
    "kunyomi": "も",
    "important_reading": "onyomi",
    "nanori": null
  },
  "輸": {
    "level": 24,
    "character": "輸",
    "meaning": "transport",
    "onyomi": "ゆ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "届": {
    "level": 24,
    "character": "届",
    "meaning": "deliver",
    "onyomi": "None",
    "kunyomi": "とど",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "狭": {
    "level": 24,
    "character": "狭",
    "meaning": "narrow",
    "onyomi": "きょう",
    "kunyomi": "せま, せば",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "肩": {
    "level": 24,
    "character": "肩",
    "meaning": "shoulder",
    "onyomi": "けん",
    "kunyomi": "かた",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "腕": {
    "level": 24,
    "character": "腕",
    "meaning": "arm",
    "onyomi": "わん",
    "kunyomi": "うで",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "腰": {
    "level": 24,
    "character": "腰",
    "meaning": "waist",
    "onyomi": "よう",
    "kunyomi": "こし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "触": {
    "level": 24,
    "character": "触",
    "meaning": "touch",
    "onyomi": "しょく",
    "kunyomi": "さ, ふ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "視": {
    "level": 24,
    "character": "視",
    "meaning": "look at",
    "onyomi": "し",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "載": {
    "level": 24,
    "character": "載",
    "meaning": "publish",
    "onyomi": "さい",
    "kunyomi": "の",
    "important_reading": "onyomi",
    "nanori": null
  },
  "層": {
    "level": 24,
    "character": "層",
    "meaning": "layer",
    "onyomi": "そう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "型": {
    "level": 24,
    "character": "型",
    "meaning": "model, type",
    "onyomi": "けい",
    "kunyomi": "かた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "庁": {
    "level": 24,
    "character": "庁",
    "meaning": "agency, government office",
    "onyomi": "ちょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "差": {
    "level": 24,
    "character": "差",
    "meaning": "distinction",
    "onyomi": "さ",
    "kunyomi": "さ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "管": {
    "level": 24,
    "character": "管",
    "meaning": "pipe",
    "onyomi": "かん",
    "kunyomi": "くだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "武": {
    "level": 24,
    "character": "武",
    "meaning": "military",
    "onyomi": "ぶ",
    "kunyomi": "たけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "象": {
    "level": 24,
    "character": "象",
    "meaning": "elephant, phenomenon",
    "onyomi": "しょう, ぞう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "量": {
    "level": 24,
    "character": "量",
    "meaning": "quantity, amount",
    "onyomi": "りょう",
    "kunyomi": "はか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "境": {
    "level": 24,
    "character": "境",
    "meaning": "boundary",
    "onyomi": "きょう",
    "kunyomi": "さかい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "環": {
    "level": 24,
    "character": "環",
    "meaning": "loop",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "質": {
    "level": 24,
    "character": "質",
    "meaning": "quality",
    "onyomi": "しつ, しち",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "述": {
    "level": 24,
    "character": "述",
    "meaning": "mention",
    "onyomi": "じゅつ",
    "kunyomi": "の",
    "important_reading": "onyomi",
    "nanori": null
  },
  "供": {
    "level": 24,
    "character": "供",
    "meaning": "servant, companion",
    "onyomi": "きょう",
    "kunyomi": "とも, そな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "展": {
    "level": 24,
    "character": "展",
    "meaning": "expand",
    "onyomi": "てん",
    "kunyomi": "のぶ, のび",
    "important_reading": "onyomi",
    "nanori": null
  },
  "販": {
    "level": 24,
    "character": "販",
    "meaning": "sell",
    "onyomi": "はん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "株": {
    "level": 24,
    "character": "株",
    "meaning": "stocks, shares",
    "onyomi": "しゅ",
    "kunyomi": "かぶ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "居": {
    "level": 25,
    "character": "居",
    "meaning": "alive",
    "onyomi": "きょ",
    "kunyomi": "い",
    "important_reading": "onyomi",
    "nanori": null
  },
  "補": {
    "level": 25,
    "character": "補",
    "meaning": "supplement",
    "onyomi": "ほ",
    "kunyomi": "おぎな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鮮": {
    "level": 25,
    "character": "鮮",
    "meaning": "fresh",
    "onyomi": "せん",
    "kunyomi": "あざ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "限": {
    "level": 25,
    "character": "限",
    "meaning": "limit",
    "onyomi": "げん",
    "kunyomi": "かぎ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "与": {
    "level": 25,
    "character": "与",
    "meaning": "give",
    "onyomi": "よ",
    "kunyomi": "あた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "含": {
    "level": 25,
    "character": "含",
    "meaning": "include",
    "onyomi": "がん",
    "kunyomi": "ふく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "影": {
    "level": 25,
    "character": "影",
    "meaning": "shadow",
    "onyomi": "えい",
    "kunyomi": "かげ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "況": {
    "level": 25,
    "character": "況",
    "meaning": "condition",
    "onyomi": "きょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "渡": {
    "level": 25,
    "character": "渡",
    "meaning": "transit",
    "onyomi": "と",
    "kunyomi": "わた",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "響": {
    "level": 25,
    "character": "響",
    "meaning": "echo, reverberation, resound",
    "onyomi": "きょう",
    "kunyomi": "ひび",
    "important_reading": "onyomi",
    "nanori": null
  },
  "票": {
    "level": 25,
    "character": "票",
    "meaning": "ballot",
    "onyomi": "ひょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "景": {
    "level": 25,
    "character": "景",
    "meaning": "scene",
    "onyomi": "けい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "抜": {
    "level": 25,
    "character": "抜",
    "meaning": "extract",
    "onyomi": "ばつ, はつ, はい",
    "kunyomi": "ぬ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "訴": {
    "level": 25,
    "character": "訴",
    "meaning": "sue",
    "onyomi": "そ",
    "kunyomi": "うった",
    "important_reading": "onyomi",
    "nanori": null
  },
  "訟": {
    "level": 25,
    "character": "訟",
    "meaning": "lawsuit",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "逮": {
    "level": 25,
    "character": "逮",
    "meaning": "apprehend",
    "onyomi": "たい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "候": {
    "level": 25,
    "character": "候",
    "meaning": "climate, candidate",
    "onyomi": "こう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "構": {
    "level": 25,
    "character": "構",
    "meaning": "set up, care",
    "onyomi": "こう",
    "kunyomi": "かま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "模": {
    "level": 25,
    "character": "模",
    "meaning": "imitation",
    "onyomi": "も, ぼ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "捕": {
    "level": 25,
    "character": "捕",
    "meaning": "catch",
    "onyomi": "ほ",
    "kunyomi": "つか, とら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "効": {
    "level": 25,
    "character": "効",
    "meaning": "effective",
    "onyomi": "こう",
    "kunyomi": "き",
    "important_reading": "onyomi",
    "nanori": null
  },
  "属": {
    "level": 25,
    "character": "属",
    "meaning": "belong",
    "onyomi": "ぞく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "慣": {
    "level": 25,
    "character": "慣",
    "meaning": "accustomed",
    "onyomi": "かん",
    "kunyomi": "な",
    "important_reading": "onyomi",
    "nanori": null
  },
  "豊": {
    "level": 25,
    "character": "豊",
    "meaning": "plentiful",
    "onyomi": "ほう",
    "kunyomi": "ゆた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "満": {
    "level": 25,
    "character": "満",
    "meaning": "full",
    "onyomi": "まん",
    "kunyomi": "み",
    "important_reading": "onyomi",
    "nanori": null
  },
  "肥": {
    "level": 25,
    "character": "肥",
    "meaning": "obese",
    "onyomi": "ひ",
    "kunyomi": "こ, こえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "巻": {
    "level": 25,
    "character": "巻",
    "meaning": "scroll",
    "onyomi": "かん",
    "kunyomi": "ま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "捜": {
    "level": 25,
    "character": "捜",
    "meaning": "search",
    "onyomi": "そう",
    "kunyomi": "さが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "絞": {
    "level": 25,
    "character": "絞",
    "meaning": "strangle",
    "onyomi": "こう",
    "kunyomi": "し, しぼ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "輩": {
    "level": 25,
    "character": "輩",
    "meaning": "comrade",
    "onyomi": "はい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "隠": {
    "level": 25,
    "character": "隠",
    "meaning": "hide",
    "onyomi": "いん",
    "kunyomi": "かく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "掛": {
    "level": 25,
    "character": "掛",
    "meaning": "hang",
    "onyomi": "がい",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "替": {
    "level": 25,
    "character": "替",
    "meaning": "replace, exchange",
    "onyomi": "たい",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "造": {
    "level": 26,
    "character": "造",
    "meaning": "create",
    "onyomi": "ぞう",
    "kunyomi": "つく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "印": {
    "level": 26,
    "character": "印",
    "meaning": "seal, mark",
    "onyomi": "いん",
    "kunyomi": "しるし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "復": {
    "level": 26,
    "character": "復",
    "meaning": "restore",
    "onyomi": "ふく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "往": {
    "level": 26,
    "character": "往",
    "meaning": "depart",
    "onyomi": "おう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "較": {
    "level": 26,
    "character": "較",
    "meaning": "contrast",
    "onyomi": "かく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "筆": {
    "level": 26,
    "character": "筆",
    "meaning": "writing brush",
    "onyomi": "ひつ",
    "kunyomi": "ふで",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鉛": {
    "level": 26,
    "character": "鉛",
    "meaning": "lead",
    "onyomi": "えん",
    "kunyomi": "なまり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "貯": {
    "level": 26,
    "character": "貯",
    "meaning": "savings",
    "onyomi": "ちょ",
    "kunyomi": "たくわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "我": {
    "level": 26,
    "character": "我",
    "meaning": "i, me",
    "onyomi": "が",
    "kunyomi": "われ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "故": {
    "level": 26,
    "character": "故",
    "meaning": "circumstance, reason",
    "onyomi": "こ",
    "kunyomi": "ゆえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "障": {
    "level": 26,
    "character": "障",
    "meaning": "hinder",
    "onyomi": "しょう",
    "kunyomi": "さわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "従": {
    "level": 26,
    "character": "従",
    "meaning": "obey, accompany, follow",
    "onyomi": "じゅう",
    "kunyomi": "したが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "激": {
    "level": 26,
    "character": "激",
    "meaning": "fierce, violent",
    "onyomi": "げき",
    "kunyomi": "はげ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "刺": {
    "level": 26,
    "character": "刺",
    "meaning": "stab",
    "onyomi": "し",
    "kunyomi": "さ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "励": {
    "level": 26,
    "character": "励",
    "meaning": "encourage",
    "onyomi": "れい",
    "kunyomi": "はげ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "郵": {
    "level": 26,
    "character": "郵",
    "meaning": "mail",
    "onyomi": "ゆう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "針": {
    "level": 26,
    "character": "針",
    "meaning": "needle",
    "onyomi": "しん",
    "kunyomi": "はり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "徴": {
    "level": 26,
    "character": "徴",
    "meaning": "indication, sign",
    "onyomi": "ちょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "怪": {
    "level": 26,
    "character": "怪",
    "meaning": "suspicious",
    "onyomi": "かい, け",
    "kunyomi": "あや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "獣": {
    "level": 26,
    "character": "獣",
    "meaning": "beast, animal",
    "onyomi": "じゅう",
    "kunyomi": "けもの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "突": {
    "level": 26,
    "character": "突",
    "meaning": "stab, thrust",
    "onyomi": "とつ",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "菓": {
    "level": 26,
    "character": "菓",
    "meaning": "cake",
    "onyomi": "か",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "河": {
    "level": 26,
    "character": "河",
    "meaning": "river",
    "onyomi": "か",
    "kunyomi": "かわ",
    "important_reading": "onyomi",
    "nanori": "こう, こお"
  },
  "振": {
    "level": 26,
    "character": "振",
    "meaning": "shake, wave",
    "onyomi": "しん",
    "kunyomi": "ふ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "汗": {
    "level": 26,
    "character": "汗",
    "meaning": "sweat",
    "onyomi": "かん",
    "kunyomi": "あせ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "豚": {
    "level": 26,
    "character": "豚",
    "meaning": "pork, pig",
    "onyomi": "とん",
    "kunyomi": "ぶた",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "再": {
    "level": 26,
    "character": "再",
    "meaning": "again",
    "onyomi": "さ, さい",
    "kunyomi": "ふたた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "接": {
    "level": 26,
    "character": "接",
    "meaning": "adjoin",
    "onyomi": "せつ",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "独": {
    "level": 26,
    "character": "独",
    "meaning": "alone",
    "onyomi": "どく",
    "kunyomi": "ひと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "占": {
    "level": 26,
    "character": "占",
    "meaning": "fortune, occupy",
    "onyomi": "せん",
    "kunyomi": "うらな, し",
    "important_reading": "onyomi",
    "nanori": null
  },
  "胃": {
    "level": 27,
    "character": "胃",
    "meaning": "stomach",
    "onyomi": "い",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "郎": {
    "level": 27,
    "character": "郎",
    "meaning": "guy",
    "onyomi": "ろう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "招": {
    "level": 27,
    "character": "招",
    "meaning": "beckon",
    "onyomi": "しょう",
    "kunyomi": "まね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "段": {
    "level": 27,
    "character": "段",
    "meaning": "steps, stairs",
    "onyomi": "だん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "腹": {
    "level": 27,
    "character": "腹",
    "meaning": "belly, abdomen, stomach",
    "onyomi": "ふく",
    "kunyomi": "はら, なか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "痛": {
    "level": 27,
    "character": "痛",
    "meaning": "pain",
    "onyomi": "つう",
    "kunyomi": "いた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "退": {
    "level": 27,
    "character": "退",
    "meaning": "retreat, reject",
    "onyomi": "たい",
    "kunyomi": "しりぞ, ひ, ど, の",
    "important_reading": "onyomi",
    "nanori": null
  },
  "悩": {
    "level": 27,
    "character": "悩",
    "meaning": "worry",
    "onyomi": "のう",
    "kunyomi": "なや",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "屈": {
    "level": 27,
    "character": "屈",
    "meaning": "yield",
    "onyomi": "くつ",
    "kunyomi": "かが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "暇": {
    "level": 27,
    "character": "暇",
    "meaning": "spare time, free time",
    "onyomi": "か",
    "kunyomi": "ひま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "織": {
    "level": 27,
    "character": "織",
    "meaning": "weave",
    "onyomi": "しき, しょく",
    "kunyomi": "お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "貸": {
    "level": 27,
    "character": "貸",
    "meaning": "lend",
    "onyomi": "たい",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "迷": {
    "level": 27,
    "character": "迷",
    "meaning": "astray",
    "onyomi": "めい",
    "kunyomi": "まよ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "惑": {
    "level": 27,
    "character": "惑",
    "meaning": "misguided",
    "onyomi": "わく",
    "kunyomi": "まど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "誘": {
    "level": 27,
    "character": "誘",
    "meaning": "invite",
    "onyomi": "ゆう",
    "kunyomi": "さそ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "就": {
    "level": 27,
    "character": "就",
    "meaning": "settle in",
    "onyomi": "しゅう",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "症": {
    "level": 27,
    "character": "症",
    "meaning": "symptom",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "訪": {
    "level": 27,
    "character": "訪",
    "meaning": "visit",
    "onyomi": "ほう",
    "kunyomi": "たず, おとず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "怒": {
    "level": 27,
    "character": "怒",
    "meaning": "angry, anger",
    "onyomi": "ど",
    "kunyomi": "おこ, いか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "昇": {
    "level": 27,
    "character": "昇",
    "meaning": "ascend",
    "onyomi": "しょう",
    "kunyomi": "のぼ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "眠": {
    "level": 27,
    "character": "眠",
    "meaning": "sleep",
    "onyomi": "みん",
    "kunyomi": "ねむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "睡": {
    "level": 27,
    "character": "睡",
    "meaning": "drowsy",
    "onyomi": "すい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "締": {
    "level": 27,
    "character": "締",
    "meaning": "tighten",
    "onyomi": "てい",
    "kunyomi": "し",
    "important_reading": "onyomi",
    "nanori": null
  },
  "迫": {
    "level": 27,
    "character": "迫",
    "meaning": "urge, compel, coerce",
    "onyomi": "はく",
    "kunyomi": "せま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "靴": {
    "level": 27,
    "character": "靴",
    "meaning": "shoes",
    "onyomi": "か",
    "kunyomi": "くつ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "濃": {
    "level": 27,
    "character": "濃",
    "meaning": "thick",
    "onyomi": "のう",
    "kunyomi": "こ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "端": {
    "level": 27,
    "character": "端",
    "meaning": "edge",
    "onyomi": "たん",
    "kunyomi": "はし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "極": {
    "level": 27,
    "character": "極",
    "meaning": "extreme",
    "onyomi": "きょく, ごく",
    "kunyomi": "きわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "途": {
    "level": 27,
    "character": "途",
    "meaning": "route",
    "onyomi": "と",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "健": {
    "level": 27,
    "character": "健",
    "meaning": "healthy",
    "onyomi": "けん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "康": {
    "level": 27,
    "character": "康",
    "meaning": "health",
    "onyomi": "こう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "給": {
    "level": 27,
    "character": "給",
    "meaning": "salary",
    "onyomi": "きゅう",
    "kunyomi": "たま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "巨": {
    "level": 28,
    "character": "巨",
    "meaning": "giant",
    "onyomi": "きょ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "妙": {
    "level": 28,
    "character": "妙",
    "meaning": "strange",
    "onyomi": "みょう",
    "kunyomi": "たえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "麗": {
    "level": 28,
    "character": "麗",
    "meaning": "lovely",
    "onyomi": "れい",
    "kunyomi": "うるわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "並": {
    "level": 28,
    "character": "並",
    "meaning": "line up",
    "onyomi": "へい",
    "kunyomi": "なら, なみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "冷": {
    "level": 28,
    "character": "冷",
    "meaning": "cool, cold",
    "onyomi": "れい",
    "kunyomi": "つめ, ひ, さ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "処": {
    "level": 28,
    "character": "処",
    "meaning": "deal with",
    "onyomi": "しょ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "逆": {
    "level": 28,
    "character": "逆",
    "meaning": "reverse",
    "onyomi": "ぎゃく",
    "kunyomi": "さか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "庫": {
    "level": 28,
    "character": "庫",
    "meaning": "storage, warehouse",
    "onyomi": "こ",
    "kunyomi": "くら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "児": {
    "level": 28,
    "character": "児",
    "meaning": "child",
    "onyomi": "じ",
    "kunyomi": "こ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "凍": {
    "level": 28,
    "character": "凍",
    "meaning": "frozen",
    "onyomi": "とう",
    "kunyomi": "こお, こご",
    "important_reading": "onyomi",
    "nanori": null
  },
  "幼": {
    "level": 28,
    "character": "幼",
    "meaning": "infancy, child",
    "onyomi": "よう",
    "kunyomi": "おさな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "稚": {
    "level": 28,
    "character": "稚",
    "meaning": "immature",
    "onyomi": "ち",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "博": {
    "level": 28,
    "character": "博",
    "meaning": "exhibition, gambling",
    "onyomi": "はく, ばく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "奇": {
    "level": 28,
    "character": "奇",
    "meaning": "odd, strange",
    "onyomi": "き",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "清": {
    "level": 28,
    "character": "清",
    "meaning": "pure",
    "onyomi": "せい, しょう, しん",
    "kunyomi": "きよ",
    "important_reading": "onyomi",
    "nanori": "し"
  },
  "潔": {
    "level": 28,
    "character": "潔",
    "meaning": "pure",
    "onyomi": "けつ",
    "kunyomi": "いさぎよ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "録": {
    "level": 28,
    "character": "録",
    "meaning": "record",
    "onyomi": "ろく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "隊": {
    "level": 28,
    "character": "隊",
    "meaning": "squad",
    "onyomi": "たい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "修": {
    "level": 28,
    "character": "修",
    "meaning": "discipline",
    "onyomi": "しゅう",
    "kunyomi": "おさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "券": {
    "level": 28,
    "character": "券",
    "meaning": "ticket",
    "onyomi": "けん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "婦": {
    "level": 28,
    "character": "婦",
    "meaning": "wife",
    "onyomi": "ふ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "微": {
    "level": 28,
    "character": "微",
    "meaning": "delicate",
    "onyomi": "び",
    "kunyomi": "かす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "益": {
    "level": 28,
    "character": "益",
    "meaning": "benefit",
    "onyomi": "えき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "移": {
    "level": 28,
    "character": "移",
    "meaning": "shift",
    "onyomi": "い",
    "kunyomi": "うつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "程": {
    "level": 28,
    "character": "程",
    "meaning": "extent",
    "onyomi": "てい",
    "kunyomi": "ほど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "精": {
    "level": 28,
    "character": "精",
    "meaning": "spirit",
    "onyomi": "せい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "絶": {
    "level": 28,
    "character": "絶",
    "meaning": "extinction, die out",
    "onyomi": "ぜつ",
    "kunyomi": "た",
    "important_reading": "onyomi",
    "nanori": null
  },
  "憲": {
    "level": 28,
    "character": "憲",
    "meaning": "constitution",
    "onyomi": "けん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "衆": {
    "level": 28,
    "character": "衆",
    "meaning": "populace",
    "onyomi": "しゅう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "傘": {
    "level": 28,
    "character": "傘",
    "meaning": "umbrella",
    "onyomi": "さん",
    "kunyomi": "かさ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "浜": {
    "level": 28,
    "character": "浜",
    "meaning": "beach",
    "onyomi": "ひん",
    "kunyomi": "はま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "撃": {
    "level": 28,
    "character": "撃",
    "meaning": "attack",
    "onyomi": "げき",
    "kunyomi": "う",
    "important_reading": "onyomi",
    "nanori": null
  },
  "攻": {
    "level": 28,
    "character": "攻",
    "meaning": "aggression, attack, offence, offense",
    "onyomi": "こう",
    "kunyomi": "せ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "綺": {
    "level": 28,
    "character": "綺",
    "meaning": "beautiful",
    "onyomi": "き",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "娘": {
    "level": 29,
    "character": "娘",
    "meaning": "daughter",
    "onyomi": "None",
    "kunyomi": "むすめ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "乾": {
    "level": 29,
    "character": "乾",
    "meaning": "dry",
    "onyomi": "かん",
    "kunyomi": "かわ, ほ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "監": {
    "level": 29,
    "character": "監",
    "meaning": "oversee",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "杯": {
    "level": 29,
    "character": "杯",
    "meaning": "cup of liquid, counter for cups",
    "onyomi": "はい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "催": {
    "level": 29,
    "character": "催",
    "meaning": "sponsor",
    "onyomi": "さい",
    "kunyomi": "もよお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "促": {
    "level": 29,
    "character": "促",
    "meaning": "urge",
    "onyomi": "そく",
    "kunyomi": "うなが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "欧": {
    "level": 29,
    "character": "欧",
    "meaning": "europe",
    "onyomi": "おう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "江": {
    "level": 29,
    "character": "江",
    "meaning": "inlet, bay",
    "onyomi": "こう",
    "kunyomi": "え",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "請": {
    "level": 29,
    "character": "請",
    "meaning": "request",
    "onyomi": "せい, しん, しょう",
    "kunyomi": "う, こ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "雄": {
    "level": 29,
    "character": "雄",
    "meaning": "male, brave",
    "onyomi": "ゆう",
    "kunyomi": "おす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "韓": {
    "level": 29,
    "character": "韓",
    "meaning": "korea",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "壊": {
    "level": 29,
    "character": "壊",
    "meaning": "break",
    "onyomi": "かい",
    "kunyomi": "こわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "診": {
    "level": 29,
    "character": "診",
    "meaning": "diagnose",
    "onyomi": "しん",
    "kunyomi": "み",
    "important_reading": "onyomi",
    "nanori": null
  },
  "閣": {
    "level": 29,
    "character": "閣",
    "meaning": "the cabinet, cabinet",
    "onyomi": "かく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "僚": {
    "level": 29,
    "character": "僚",
    "meaning": "colleague",
    "onyomi": "りょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "積": {
    "level": 29,
    "character": "積",
    "meaning": "accumulate",
    "onyomi": "せき",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "督": {
    "level": 29,
    "character": "督",
    "meaning": "coach",
    "onyomi": "とく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "臣": {
    "level": 29,
    "character": "臣",
    "meaning": "servant, retainer",
    "onyomi": "しん, じん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "略": {
    "level": 29,
    "character": "略",
    "meaning": "abbreviation, abbreviate",
    "onyomi": "りゃく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "航": {
    "level": 29,
    "character": "航",
    "meaning": "navigation",
    "onyomi": "こう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": "わたる"
  },
  "寄": {
    "level": 29,
    "character": "寄",
    "meaning": "approach",
    "onyomi": "き",
    "kunyomi": "よ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "板": {
    "level": 29,
    "character": "板",
    "meaning": "board",
    "onyomi": "はん",
    "kunyomi": "いた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "街": {
    "level": 29,
    "character": "街",
    "meaning": "street",
    "onyomi": "がい, かい",
    "kunyomi": "まち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "宗": {
    "level": 29,
    "character": "宗",
    "meaning": "religion",
    "onyomi": "しゅう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "緊": {
    "level": 29,
    "character": "緊",
    "meaning": "tense",
    "onyomi": "きん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "宴": {
    "level": 29,
    "character": "宴",
    "meaning": "banquet",
    "onyomi": "えん",
    "kunyomi": "うたげ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "怖": {
    "level": 29,
    "character": "怖",
    "meaning": "scary",
    "onyomi": "ふ",
    "kunyomi": "こわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "恐": {
    "level": 29,
    "character": "恐",
    "meaning": "fear",
    "onyomi": "きょう",
    "kunyomi": "おそ, こわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "添": {
    "level": 29,
    "character": "添",
    "meaning": "append",
    "onyomi": "てん",
    "kunyomi": "そ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "猛": {
    "level": 29,
    "character": "猛",
    "meaning": "fierce",
    "onyomi": "もう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "烈": {
    "level": 29,
    "character": "烈",
    "meaning": "violent, intense",
    "onyomi": "れつ",
    "kunyomi": "はげ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "索": {
    "level": 29,
    "character": "索",
    "meaning": "search",
    "onyomi": "さく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "詰": {
    "level": 29,
    "character": "詰",
    "meaning": "stuffed",
    "onyomi": "きつ, きち",
    "kunyomi": "つ, づ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "魅": {
    "level": 30,
    "character": "魅",
    "meaning": "alluring",
    "onyomi": "み",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "系": {
    "level": 30,
    "character": "系",
    "meaning": "lineage",
    "onyomi": "けい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "詳": {
    "level": 30,
    "character": "詳",
    "meaning": "detailed",
    "onyomi": "しょう",
    "kunyomi": "くわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "渇": {
    "level": 30,
    "character": "渇",
    "meaning": "thirst",
    "onyomi": "かつ",
    "kunyomi": "かわ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "婚": {
    "level": 30,
    "character": "婚",
    "meaning": "marriage",
    "onyomi": "こん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "遊": {
    "level": 30,
    "character": "遊",
    "meaning": "play",
    "onyomi": "ゆう",
    "kunyomi": "あそ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "旗": {
    "level": 30,
    "character": "旗",
    "meaning": "flag",
    "onyomi": "き",
    "kunyomi": "はた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "照": {
    "level": 30,
    "character": "照",
    "meaning": "illuminate",
    "onyomi": "しょう",
    "kunyomi": "て",
    "important_reading": "onyomi",
    "nanori": null
  },
  "快": {
    "level": 30,
    "character": "快",
    "meaning": "pleasant",
    "onyomi": "かい",
    "kunyomi": "こころよ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "版": {
    "level": 30,
    "character": "版",
    "meaning": "edition",
    "onyomi": "はん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "貧": {
    "level": 30,
    "character": "貧",
    "meaning": "poor",
    "onyomi": "びん, ひん",
    "kunyomi": "まず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "乏": {
    "level": 30,
    "character": "乏",
    "meaning": "scarce",
    "onyomi": "ぼう",
    "kunyomi": "とぼ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "適": {
    "level": 30,
    "character": "適",
    "meaning": "suitable",
    "onyomi": "てき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "預": {
    "level": 30,
    "character": "預",
    "meaning": "deposit",
    "onyomi": "よ",
    "kunyomi": "あず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "延": {
    "level": 30,
    "character": "延",
    "meaning": "prolong",
    "onyomi": "えん",
    "kunyomi": "のば, の",
    "important_reading": "onyomi",
    "nanori": null
  },
  "翌": {
    "level": 30,
    "character": "翌",
    "meaning": "the following, following, next",
    "onyomi": "よく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "覧": {
    "level": 30,
    "character": "覧",
    "meaning": "look at",
    "onyomi": "らん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "懐": {
    "level": 30,
    "character": "懐",
    "meaning": "nostalgia",
    "onyomi": "かい",
    "kunyomi": "なつ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "押": {
    "level": 30,
    "character": "押",
    "meaning": "push",
    "onyomi": "おう",
    "kunyomi": "お",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "更": {
    "level": 30,
    "character": "更",
    "meaning": "again",
    "onyomi": "こう",
    "kunyomi": "さら, ふ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "枕": {
    "level": 30,
    "character": "枕",
    "meaning": "pillow",
    "onyomi": "しん",
    "kunyomi": "まくら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "浮": {
    "level": 30,
    "character": "浮",
    "meaning": "float",
    "onyomi": "ふ",
    "kunyomi": "う, うわ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "漏": {
    "level": 30,
    "character": "漏",
    "meaning": "leak",
    "onyomi": "ろう",
    "kunyomi": "も",
    "important_reading": "onyomi",
    "nanori": null
  },
  "符": {
    "level": 30,
    "character": "符",
    "meaning": "token",
    "onyomi": "ふ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "購": {
    "level": 30,
    "character": "購",
    "meaning": "subscription",
    "onyomi": "こう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "越": {
    "level": 30,
    "character": "越",
    "meaning": "go beyond",
    "onyomi": "えつ",
    "kunyomi": "こ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "飾": {
    "level": 30,
    "character": "飾",
    "meaning": "decorate",
    "onyomi": "しょく",
    "kunyomi": "かざ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "騒": {
    "level": 30,
    "character": "騒",
    "meaning": "boisterous",
    "onyomi": "そう",
    "kunyomi": "さわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "背": {
    "level": 30,
    "character": "背",
    "meaning": "back, height",
    "onyomi": "はい",
    "kunyomi": "せ, そむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "撮": {
    "level": 30,
    "character": "撮",
    "meaning": "photograph, photo",
    "onyomi": "さつ",
    "kunyomi": "と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "盗": {
    "level": 30,
    "character": "盗",
    "meaning": "steal",
    "onyomi": "とう",
    "kunyomi": "ぬす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "孫": {
    "level": 31,
    "character": "孫",
    "meaning": "grandchild",
    "onyomi": "そん",
    "kunyomi": "まご",
    "important_reading": "onyomi",
    "nanori": null
  },
  "富": {
    "level": 31,
    "character": "富",
    "meaning": "rich",
    "onyomi": "ふ",
    "kunyomi": "と, とみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "融": {
    "level": 31,
    "character": "融",
    "meaning": "dissolve",
    "onyomi": "ゆう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "離": {
    "level": 31,
    "character": "離",
    "meaning": "detach",
    "onyomi": "り",
    "kunyomi": "はな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "編": {
    "level": 31,
    "character": "編",
    "meaning": "knit",
    "onyomi": "へん",
    "kunyomi": "あ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "華": {
    "level": 31,
    "character": "華",
    "meaning": "showy",
    "onyomi": "か",
    "kunyomi": "はな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "既": {
    "level": 31,
    "character": "既",
    "meaning": "previously",
    "onyomi": "き",
    "kunyomi": "すで",
    "important_reading": "onyomi",
    "nanori": null
  },
  "普": {
    "level": 31,
    "character": "普",
    "meaning": "normal",
    "onyomi": "ふ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "豪": {
    "level": 31,
    "character": "豪",
    "meaning": "luxurious",
    "onyomi": "ごう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鑑": {
    "level": 31,
    "character": "鑑",
    "meaning": "model",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "除": {
    "level": 31,
    "character": "除",
    "meaning": "exclude",
    "onyomi": "じょ",
    "kunyomi": "のぞ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "尋": {
    "level": 31,
    "character": "尋",
    "meaning": "inquire",
    "onyomi": "じん",
    "kunyomi": "たず, ひろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "幾": {
    "level": 31,
    "character": "幾",
    "meaning": "how many, how much",
    "onyomi": "き",
    "kunyomi": "いく",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "廊": {
    "level": 31,
    "character": "廊",
    "meaning": "corridor",
    "onyomi": "ろう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "掃": {
    "level": 31,
    "character": "掃",
    "meaning": "sweep",
    "onyomi": "そう",
    "kunyomi": "は",
    "important_reading": "onyomi",
    "nanori": null
  },
  "泥": {
    "level": 31,
    "character": "泥",
    "meaning": "mud",
    "onyomi": "でい",
    "kunyomi": "どろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "棒": {
    "level": 31,
    "character": "棒",
    "meaning": "pole, rod, wooden pole",
    "onyomi": "ぼう",
    "kunyomi": "ぼう",
    "important_reading": "onyomi",
    "nanori": null
  },
  "驚": {
    "level": 31,
    "character": "驚",
    "meaning": "surprised",
    "onyomi": "きょう",
    "kunyomi": "おどろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "嘆": {
    "level": 31,
    "character": "嘆",
    "meaning": "sigh",
    "onyomi": "たん",
    "kunyomi": "なげ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "倉": {
    "level": 31,
    "character": "倉",
    "meaning": "warehouse",
    "onyomi": "そう",
    "kunyomi": "くら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "巣": {
    "level": 31,
    "character": "巣",
    "meaning": "nest",
    "onyomi": "そう",
    "kunyomi": "す",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "帯": {
    "level": 31,
    "character": "帯",
    "meaning": "belt",
    "onyomi": "たい",
    "kunyomi": "おび",
    "important_reading": "onyomi",
    "nanori": null
  },
  "救": {
    "level": 31,
    "character": "救",
    "meaning": "rescue",
    "onyomi": "きゅう",
    "kunyomi": "すく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "径": {
    "level": 31,
    "character": "径",
    "meaning": "diameter",
    "onyomi": "けい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "散": {
    "level": 31,
    "character": "散",
    "meaning": "scatter",
    "onyomi": "さん",
    "kunyomi": "ち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "粉": {
    "level": 31,
    "character": "粉",
    "meaning": "powder",
    "onyomi": "ふん",
    "kunyomi": "こな, こ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "脈": {
    "level": 31,
    "character": "脈",
    "meaning": "vein",
    "onyomi": "みゃく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "菜": {
    "level": 31,
    "character": "菜",
    "meaning": "vegetable",
    "onyomi": "さい",
    "kunyomi": "な",
    "important_reading": "onyomi",
    "nanori": null
  },
  "貨": {
    "level": 31,
    "character": "貨",
    "meaning": "freight",
    "onyomi": "か",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "陸": {
    "level": 31,
    "character": "陸",
    "meaning": "land",
    "onyomi": "りく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "似": {
    "level": 31,
    "character": "似",
    "meaning": "resemble",
    "onyomi": "ね, じ",
    "kunyomi": "に",
    "important_reading": "onyomi",
    "nanori": null
  },
  "均": {
    "level": 31,
    "character": "均",
    "meaning": "equal",
    "onyomi": "きん",
    "kunyomi": "ひと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "墓": {
    "level": 31,
    "character": "墓",
    "meaning": "grave",
    "onyomi": "ぼ",
    "kunyomi": "はか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "徳": {
    "level": 31,
    "character": "徳",
    "meaning": "virtue",
    "onyomi": "とく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "探": {
    "level": 31,
    "character": "探",
    "meaning": "look for, search for",
    "onyomi": "たん",
    "kunyomi": "さが, さぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "偵": {
    "level": 31,
    "character": "偵",
    "meaning": "spy",
    "onyomi": "てい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "卵": {
    "level": 32,
    "character": "卵",
    "meaning": "egg",
    "onyomi": "らん",
    "kunyomi": "たまご",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "込": {
    "level": 32,
    "character": "込",
    "meaning": "crowded",
    "onyomi": "None",
    "kunyomi": "こ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "序": {
    "level": 32,
    "character": "序",
    "meaning": "preface",
    "onyomi": "じょ",
    "kunyomi": "つい, ついで",
    "important_reading": "onyomi",
    "nanori": null
  },
  "迎": {
    "level": 32,
    "character": "迎",
    "meaning": "welcome",
    "onyomi": "げい",
    "kunyomi": "むか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "志": {
    "level": 32,
    "character": "志",
    "meaning": "intention",
    "onyomi": "し",
    "kunyomi": "こころざし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "恩": {
    "level": 32,
    "character": "恩",
    "meaning": "kindness",
    "onyomi": "おん",
    "kunyomi": "おん",
    "important_reading": "onyomi",
    "nanori": null
  },
  "採": {
    "level": 32,
    "character": "採",
    "meaning": "gather",
    "onyomi": "さい",
    "kunyomi": "と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "桜": {
    "level": 32,
    "character": "桜",
    "meaning": "sakura, cherry tree",
    "onyomi": "おう, よう",
    "kunyomi": "さくら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "永": {
    "level": 32,
    "character": "永",
    "meaning": "eternity",
    "onyomi": "えい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "液": {
    "level": 32,
    "character": "液",
    "meaning": "fluid, liquid",
    "onyomi": "えき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "眼": {
    "level": 32,
    "character": "眼",
    "meaning": "eyeball",
    "onyomi": "がん",
    "kunyomi": "め",
    "important_reading": "onyomi",
    "nanori": null
  },
  "祖": {
    "level": 32,
    "character": "祖",
    "meaning": "ancestor",
    "onyomi": "そ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "績": {
    "level": 32,
    "character": "績",
    "meaning": "exploits",
    "onyomi": "せき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "興": {
    "level": 32,
    "character": "興",
    "meaning": "interest",
    "onyomi": "きょう, こう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "衛": {
    "level": 32,
    "character": "衛",
    "meaning": "defense",
    "onyomi": "えい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "複": {
    "level": 32,
    "character": "複",
    "meaning": "duplicate",
    "onyomi": "ふく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "雑": {
    "level": 32,
    "character": "雑",
    "meaning": "random, miscellaneous",
    "onyomi": "ざつ, ぞう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "賛": {
    "level": 32,
    "character": "賛",
    "meaning": "agree",
    "onyomi": "さん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "酸": {
    "level": 32,
    "character": "酸",
    "meaning": "acid",
    "onyomi": "さん",
    "kunyomi": "す",
    "important_reading": "onyomi",
    "nanori": null
  },
  "銭": {
    "level": 32,
    "character": "銭",
    "meaning": "coin",
    "onyomi": "せん",
    "kunyomi": "ぜに",
    "important_reading": "onyomi",
    "nanori": null
  },
  "飼": {
    "level": 32,
    "character": "飼",
    "meaning": "domesticate",
    "onyomi": "し",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "傷": {
    "level": 32,
    "character": "傷",
    "meaning": "wound",
    "onyomi": "しょう",
    "kunyomi": "きず, いた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "党": {
    "level": 32,
    "character": "党",
    "meaning": "group",
    "onyomi": "とう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "厳": {
    "level": 32,
    "character": "厳",
    "meaning": "strict",
    "onyomi": "げん, ごん",
    "kunyomi": "きび, おごそ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "捨": {
    "level": 32,
    "character": "捨",
    "meaning": "throw away",
    "onyomi": "しゃ",
    "kunyomi": "す",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "密": {
    "level": 32,
    "character": "密",
    "meaning": "secrecy",
    "onyomi": "みつ",
    "kunyomi": "ひそ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "汚": {
    "level": 32,
    "character": "汚",
    "meaning": "dirty",
    "onyomi": "お",
    "kunyomi": "よご, きたな, けが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "欲": {
    "level": 32,
    "character": "欲",
    "meaning": "want",
    "onyomi": "よく",
    "kunyomi": "ほ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "暖": {
    "level": 32,
    "character": "暖",
    "meaning": "warm",
    "onyomi": "だん",
    "kunyomi": "あたた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "机": {
    "level": 32,
    "character": "机",
    "meaning": "desk",
    "onyomi": "き",
    "kunyomi": "つくえ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "秘": {
    "level": 32,
    "character": "秘",
    "meaning": "secret",
    "onyomi": "ひ",
    "kunyomi": "ひ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "訳": {
    "level": 32,
    "character": "訳",
    "meaning": "translation, reason",
    "onyomi": "やく",
    "kunyomi": "わけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "染": {
    "level": 32,
    "character": "染",
    "meaning": "dye",
    "onyomi": "せん",
    "kunyomi": "しみ, そ, し",
    "important_reading": "onyomi",
    "nanori": null
  },
  "蔵": {
    "level": 33,
    "character": "蔵",
    "meaning": "storehouse",
    "onyomi": "ぞう",
    "kunyomi": "くら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "簡": {
    "level": 33,
    "character": "簡",
    "meaning": "simplicity",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "閉": {
    "level": 33,
    "character": "閉",
    "meaning": "closed, close, closure",
    "onyomi": "へい",
    "kunyomi": "し, と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "誌": {
    "level": 33,
    "character": "誌",
    "meaning": "magazine",
    "onyomi": "し",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "窓": {
    "level": 33,
    "character": "窓",
    "meaning": "window",
    "onyomi": "そう",
    "kunyomi": "まど",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "否": {
    "level": 33,
    "character": "否",
    "meaning": "no",
    "onyomi": "ひ",
    "kunyomi": "いな, いや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "筋": {
    "level": 33,
    "character": "筋",
    "meaning": "muscle, tendon",
    "onyomi": "きん",
    "kunyomi": "すじ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "垂": {
    "level": 33,
    "character": "垂",
    "meaning": "dangle, drip",
    "onyomi": "すい",
    "kunyomi": "た",
    "important_reading": "onyomi",
    "nanori": null
  },
  "宝": {
    "level": 33,
    "character": "宝",
    "meaning": "treasure",
    "onyomi": "ほう",
    "kunyomi": "たから",
    "important_reading": "onyomi",
    "nanori": null
  },
  "宣": {
    "level": 33,
    "character": "宣",
    "meaning": "proclaim",
    "onyomi": "せん",
    "kunyomi": "のたま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "尊": {
    "level": 33,
    "character": "尊",
    "meaning": "revered",
    "onyomi": "そん",
    "kunyomi": "とうと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "忠": {
    "level": 33,
    "character": "忠",
    "meaning": "loyalty",
    "onyomi": "ちゅう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "拡": {
    "level": 33,
    "character": "拡",
    "meaning": "extend",
    "onyomi": "かく",
    "kunyomi": "ひろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "操": {
    "level": 33,
    "character": "操",
    "meaning": "manipulate, chastity",
    "onyomi": "そう",
    "kunyomi": "あやつ, みさお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "敬": {
    "level": 33,
    "character": "敬",
    "meaning": "respect",
    "onyomi": "けい",
    "kunyomi": "うやま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "灰": {
    "level": 33,
    "character": "灰",
    "meaning": "ashes",
    "onyomi": "かい",
    "kunyomi": "はい",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "熟": {
    "level": 33,
    "character": "熟",
    "meaning": "ripen",
    "onyomi": "じゅく",
    "kunyomi": "う",
    "important_reading": "onyomi",
    "nanori": null
  },
  "異": {
    "level": 33,
    "character": "異",
    "meaning": "differ",
    "onyomi": "い",
    "kunyomi": "こと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "皇": {
    "level": 33,
    "character": "皇",
    "meaning": "emperor",
    "onyomi": "こう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "盛": {
    "level": 33,
    "character": "盛",
    "meaning": "pile, heaps",
    "onyomi": "せい, じょう",
    "kunyomi": "も, さか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "砂": {
    "level": 33,
    "character": "砂",
    "meaning": "sand",
    "onyomi": "さ",
    "kunyomi": "すな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "漠": {
    "level": 33,
    "character": "漠",
    "meaning": "desert, vague",
    "onyomi": "ばく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "糖": {
    "level": 33,
    "character": "糖",
    "meaning": "sugar",
    "onyomi": "とう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "納": {
    "level": 33,
    "character": "納",
    "meaning": "supply",
    "onyomi": "のう",
    "kunyomi": "おさ, なっ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "肺": {
    "level": 33,
    "character": "肺",
    "meaning": "lung",
    "onyomi": "はい",
    "kunyomi": "はい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "著": {
    "level": 33,
    "character": "著",
    "meaning": "author",
    "onyomi": "ちょ",
    "kunyomi": "いちじる, あらわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "蒸": {
    "level": 33,
    "character": "蒸",
    "meaning": "steam",
    "onyomi": "じょう",
    "kunyomi": "む",
    "important_reading": "onyomi",
    "nanori": null
  },
  "装": {
    "level": 33,
    "character": "装",
    "meaning": "attire",
    "onyomi": "そう, しょう",
    "kunyomi": "よそお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "裏": {
    "level": 33,
    "character": "裏",
    "meaning": "backside",
    "onyomi": "り",
    "kunyomi": "うら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "諸": {
    "level": 33,
    "character": "諸",
    "meaning": "various",
    "onyomi": "しょ",
    "kunyomi": "もろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "賃": {
    "level": 33,
    "character": "賃",
    "meaning": "rent",
    "onyomi": "ちん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "暮": {
    "level": 33,
    "character": "暮",
    "meaning": "livelihood",
    "onyomi": "ぼ",
    "kunyomi": "く",
    "important_reading": "onyomi",
    "nanori": null
  },
  "爪": {
    "level": 34,
    "character": "爪",
    "meaning": "claw",
    "onyomi": "そう",
    "kunyomi": "つま, つめ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "拝": {
    "level": 34,
    "character": "拝",
    "meaning": "worship",
    "onyomi": "はい",
    "kunyomi": "おが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "奴": {
    "level": 34,
    "character": "奴",
    "meaning": "dude",
    "onyomi": "ど",
    "kunyomi": "やつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "豆": {
    "level": 34,
    "character": "豆",
    "meaning": "beans",
    "onyomi": "とう",
    "kunyomi": "まめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "誤": {
    "level": 34,
    "character": "誤",
    "meaning": "mistake",
    "onyomi": "ご",
    "kunyomi": "あやま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "臓": {
    "level": 34,
    "character": "臓",
    "meaning": "internal organs",
    "onyomi": "ぞう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "貴": {
    "level": 34,
    "character": "貴",
    "meaning": "valuable",
    "onyomi": "き",
    "kunyomi": "とうと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "降": {
    "level": 34,
    "character": "降",
    "meaning": "descend",
    "onyomi": "こう",
    "kunyomi": "お, ふ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "丼": {
    "level": 34,
    "character": "丼",
    "meaning": "rice bowl",
    "onyomi": "どん",
    "kunyomi": "どんぶり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "吐": {
    "level": 34,
    "character": "吐",
    "meaning": "throw up, spit",
    "onyomi": "と",
    "kunyomi": "は",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "隷": {
    "level": 34,
    "character": "隷",
    "meaning": "slave",
    "onyomi": "れい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "芋": {
    "level": 34,
    "character": "芋",
    "meaning": "potato",
    "onyomi": "None",
    "kunyomi": "いも",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "縮": {
    "level": 34,
    "character": "縮",
    "meaning": "shrink",
    "onyomi": "しゅく",
    "kunyomi": "ちぢ, ちじ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "純": {
    "level": 34,
    "character": "純",
    "meaning": "pure",
    "onyomi": "じゅん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "縦": {
    "level": 34,
    "character": "縦",
    "meaning": "vertical",
    "onyomi": "じゅう",
    "kunyomi": "たて",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "粋": {
    "level": 34,
    "character": "粋",
    "meaning": "stylish",
    "onyomi": "すい",
    "kunyomi": "いき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "磁": {
    "level": 34,
    "character": "磁",
    "meaning": "magnet",
    "onyomi": "じ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "紅": {
    "level": 34,
    "character": "紅",
    "meaning": "deep red, crimson",
    "onyomi": "こう",
    "kunyomi": "べに, くれない",
    "important_reading": "onyomi",
    "nanori": null
  },
  "射": {
    "level": 34,
    "character": "射",
    "meaning": "shoot",
    "onyomi": "しゃ",
    "kunyomi": "い, さ, う",
    "important_reading": "onyomi",
    "nanori": null
  },
  "幕": {
    "level": 34,
    "character": "幕",
    "meaning": "curtain",
    "onyomi": "まく, ばく",
    "kunyomi": "とばり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "薦": {
    "level": 34,
    "character": "薦",
    "meaning": "recommend",
    "onyomi": "せん",
    "kunyomi": "すす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "推": {
    "level": 34,
    "character": "推",
    "meaning": "infer",
    "onyomi": "すい",
    "kunyomi": "お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "揮": {
    "level": 34,
    "character": "揮",
    "meaning": "brandish",
    "onyomi": "き",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "沿": {
    "level": 34,
    "character": "沿",
    "meaning": "run alongside",
    "onyomi": "えん",
    "kunyomi": "そ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "源": {
    "level": 34,
    "character": "源",
    "meaning": "origin",
    "onyomi": "げん",
    "kunyomi": "みなもと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "劇": {
    "level": 34,
    "character": "劇",
    "meaning": "drama",
    "onyomi": "げき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "勤": {
    "level": 34,
    "character": "勤",
    "meaning": "work",
    "onyomi": "きん",
    "kunyomi": "つと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "歓": {
    "level": 34,
    "character": "歓",
    "meaning": "delight",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "承": {
    "level": 34,
    "character": "承",
    "meaning": "consent",
    "onyomi": "しょう",
    "kunyomi": "うけたまわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "損": {
    "level": 34,
    "character": "損",
    "meaning": "loss",
    "onyomi": "そん",
    "kunyomi": "そこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "枝": {
    "level": 34,
    "character": "枝",
    "meaning": "branch",
    "onyomi": "し",
    "kunyomi": "えだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "刻": {
    "level": 34,
    "character": "刻",
    "meaning": "carve",
    "onyomi": "こく",
    "kunyomi": "きざ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "腐": {
    "level": 34,
    "character": "腐",
    "meaning": "rot",
    "onyomi": "ふ",
    "kunyomi": "くさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "聖": {
    "level": 34,
    "character": "聖",
    "meaning": "holy",
    "onyomi": "せい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "炎": {
    "level": 35,
    "character": "炎",
    "meaning": "flame, big fire",
    "onyomi": "えん",
    "kunyomi": "ほのお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "破": {
    "level": 35,
    "character": "破",
    "meaning": "tear",
    "onyomi": "は",
    "kunyomi": "やぶ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "杉": {
    "level": 35,
    "character": "杉",
    "meaning": "cedar",
    "onyomi": "None",
    "kunyomi": "すぎ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "熊": {
    "level": 35,
    "character": "熊",
    "meaning": "bear",
    "onyomi": "None",
    "kunyomi": "くま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "酢": {
    "level": 35,
    "character": "酢",
    "meaning": "vinegar",
    "onyomi": "さく",
    "kunyomi": "す",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "獄": {
    "level": 35,
    "character": "獄",
    "meaning": "prison",
    "onyomi": "ごく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "銅": {
    "level": 35,
    "character": "銅",
    "meaning": "copper",
    "onyomi": "どう",
    "kunyomi": "あかがね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "遅": {
    "level": 35,
    "character": "遅",
    "meaning": "slow",
    "onyomi": "ち",
    "kunyomi": "おそ, おく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "彫": {
    "level": 35,
    "character": "彫",
    "meaning": "carve",
    "onyomi": "ちょう",
    "kunyomi": "ほ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "測": {
    "level": 35,
    "character": "測",
    "meaning": "measure",
    "onyomi": "そく",
    "kunyomi": "はか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "舎": {
    "level": 35,
    "character": "舎",
    "meaning": "cottage",
    "onyomi": "しゃ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "講": {
    "level": 35,
    "character": "講",
    "meaning": "lecture",
    "onyomi": "こう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "滞": {
    "level": 35,
    "character": "滞",
    "meaning": "stagnate",
    "onyomi": "たい",
    "kunyomi": "とどこお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "紹": {
    "level": 35,
    "character": "紹",
    "meaning": "introduce",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "介": {
    "level": 35,
    "character": "介",
    "meaning": "jammed in",
    "onyomi": "かい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": "すけ"
  },
  "己": {
    "level": 35,
    "character": "己",
    "meaning": "oneself",
    "onyomi": "こ, き",
    "kunyomi": "おのれ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "厄": {
    "level": 35,
    "character": "厄",
    "meaning": "unlucky",
    "onyomi": "やく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "亀": {
    "level": 35,
    "character": "亀",
    "meaning": "turtle",
    "onyomi": "None",
    "kunyomi": "かめ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "互": {
    "level": 35,
    "character": "互",
    "meaning": "mutual",
    "onyomi": "ご",
    "kunyomi": "たが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "剣": {
    "level": 35,
    "character": "剣",
    "meaning": "sword",
    "onyomi": "けん",
    "kunyomi": "つるぎ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "寿": {
    "level": 35,
    "character": "寿",
    "meaning": "lifespan",
    "onyomi": "じゅ, す",
    "kunyomi": "ことぶき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "彼": {
    "level": 35,
    "character": "彼",
    "meaning": "he",
    "onyomi": "ひ",
    "kunyomi": "かれ, かの",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "恥": {
    "level": 35,
    "character": "恥",
    "meaning": "shame",
    "onyomi": "ち",
    "kunyomi": "は, はじ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "汁": {
    "level": 35,
    "character": "汁",
    "meaning": "soup",
    "onyomi": "じゅう",
    "kunyomi": "しる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "噌": {
    "level": 35,
    "character": "噌",
    "meaning": "boisterous",
    "onyomi": "そ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "為": {
    "level": 35,
    "character": "為",
    "meaning": "sake",
    "onyomi": "い",
    "kunyomi": "ため, な, す",
    "important_reading": "onyomi",
    "nanori": null
  },
  "酔": {
    "level": 35,
    "character": "酔",
    "meaning": "drunk",
    "onyomi": "すい",
    "kunyomi": "よ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鍋": {
    "level": 35,
    "character": "鍋",
    "meaning": "pot",
    "onyomi": "か",
    "kunyomi": "なべ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "湖": {
    "level": 35,
    "character": "湖",
    "meaning": "lake",
    "onyomi": "こ",
    "kunyomi": "みずうみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "払": {
    "level": 35,
    "character": "払",
    "meaning": "pay",
    "onyomi": "None",
    "kunyomi": "はら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "油": {
    "level": 35,
    "character": "油",
    "meaning": "oil",
    "onyomi": "ゆ",
    "kunyomi": "あぶら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "醤": {
    "level": 35,
    "character": "醤",
    "meaning": "soy sauce",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "甘": {
    "level": 36,
    "character": "甘",
    "meaning": "sweet",
    "onyomi": "かん",
    "kunyomi": "あま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "将": {
    "level": 36,
    "character": "将",
    "meaning": "commander",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "旧": {
    "level": 36,
    "character": "旧",
    "meaning": "former",
    "onyomi": "きゅう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "姓": {
    "level": 36,
    "character": "姓",
    "meaning": "surname, family name",
    "onyomi": "せい, しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "貿": {
    "level": 36,
    "character": "貿",
    "meaning": "trade",
    "onyomi": "ぼう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "盟": {
    "level": 36,
    "character": "盟",
    "meaning": "alliance",
    "onyomi": "めい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "遺": {
    "level": 36,
    "character": "遺",
    "meaning": "leave behind",
    "onyomi": "い",
    "kunyomi": "のこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "伸": {
    "level": 36,
    "character": "伸",
    "meaning": "stretch",
    "onyomi": "しん",
    "kunyomi": "の",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "債": {
    "level": 36,
    "character": "債",
    "meaning": "debt",
    "onyomi": "さい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "及": {
    "level": 36,
    "character": "及",
    "meaning": "reach",
    "onyomi": "きゅう",
    "kunyomi": "およ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "奈": {
    "level": 36,
    "character": "奈",
    "meaning": "nara",
    "onyomi": "な",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "幅": {
    "level": 36,
    "character": "幅",
    "meaning": "width",
    "onyomi": "ふく",
    "kunyomi": "はば",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "廃": {
    "level": 36,
    "character": "廃",
    "meaning": "obsolete",
    "onyomi": "はい",
    "kunyomi": "すた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "換": {
    "level": 36,
    "character": "換",
    "meaning": "exchange",
    "onyomi": "かん",
    "kunyomi": "か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "摘": {
    "level": 36,
    "character": "摘",
    "meaning": "pluck",
    "onyomi": "てき",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "核": {
    "level": 36,
    "character": "核",
    "meaning": "nucleus",
    "onyomi": "かく",
    "kunyomi": "かく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "沖": {
    "level": 36,
    "character": "沖",
    "meaning": "open sea",
    "onyomi": "ちゅう",
    "kunyomi": "おき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "縄": {
    "level": 36,
    "character": "縄",
    "meaning": "rope",
    "onyomi": "じょう",
    "kunyomi": "なわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "津": {
    "level": 36,
    "character": "津",
    "meaning": "haven",
    "onyomi": "しん",
    "kunyomi": "つ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "献": {
    "level": 36,
    "character": "献",
    "meaning": "offer",
    "onyomi": "けん, こん",
    "kunyomi": "たてまつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "療": {
    "level": 36,
    "character": "療",
    "meaning": "heal",
    "onyomi": "りょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "継": {
    "level": 36,
    "character": "継",
    "meaning": "inherit",
    "onyomi": "けい",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "維": {
    "level": 36,
    "character": "維",
    "meaning": "maintain",
    "onyomi": "い",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "舞": {
    "level": 36,
    "character": "舞",
    "meaning": "dance",
    "onyomi": "ぶ",
    "kunyomi": "まい, ま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "伎": {
    "level": 36,
    "character": "伎",
    "meaning": "deed",
    "onyomi": "き",
    "kunyomi": "わざ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "踏": {
    "level": 36,
    "character": "踏",
    "meaning": "step",
    "onyomi": "とう",
    "kunyomi": "ふ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "般": {
    "level": 36,
    "character": "般",
    "meaning": "generally",
    "onyomi": "はん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "頼": {
    "level": 36,
    "character": "頼",
    "meaning": "trust",
    "onyomi": "らい",
    "kunyomi": "たの, たよ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "依": {
    "level": 36,
    "character": "依",
    "meaning": "reliant, dependant",
    "onyomi": "い",
    "kunyomi": "よ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鹿": {
    "level": 36,
    "character": "鹿",
    "meaning": "deer",
    "onyomi": "ろく",
    "kunyomi": "か, しか",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "諾": {
    "level": 36,
    "character": "諾",
    "meaning": "agreement",
    "onyomi": "だく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "牙": {
    "level": 36,
    "character": "牙",
    "meaning": "fang, tusk",
    "onyomi": "げ",
    "kunyomi": "きば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "超": {
    "level": 36,
    "character": "超",
    "meaning": "ultra, super",
    "onyomi": "ちょう",
    "kunyomi": "こ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "兆": {
    "level": 37,
    "character": "兆",
    "meaning": "omen",
    "onyomi": "ちょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "跡": {
    "level": 37,
    "character": "跡",
    "meaning": "traces",
    "onyomi": "せき",
    "kunyomi": "あと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "戻": {
    "level": 37,
    "character": "戻",
    "meaning": "return",
    "onyomi": "れい",
    "kunyomi": "もど",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "跳": {
    "level": 37,
    "character": "跳",
    "meaning": "hop",
    "onyomi": "ちょう",
    "kunyomi": "と, は",
    "important_reading": "onyomi",
    "nanori": null
  },
  "昭": {
    "level": 37,
    "character": "昭",
    "meaning": "shining",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "漁": {
    "level": 37,
    "character": "漁",
    "meaning": "fishing",
    "onyomi": "ぎょ, りょう",
    "kunyomi": "あさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "償": {
    "level": 37,
    "character": "償",
    "meaning": "reparation",
    "onyomi": "しょう",
    "kunyomi": "つぐな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "刑": {
    "level": 37,
    "character": "刑",
    "meaning": "punish",
    "onyomi": "けい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "募": {
    "level": 37,
    "character": "募",
    "meaning": "recruit",
    "onyomi": "ぼ",
    "kunyomi": "つの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "執": {
    "level": 37,
    "character": "執",
    "meaning": "tenacious",
    "onyomi": "しゅう, しつ",
    "kunyomi": "と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "塁": {
    "level": 37,
    "character": "塁",
    "meaning": "base, baseball base",
    "onyomi": "るい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "崩": {
    "level": 37,
    "character": "崩",
    "meaning": "crumble",
    "onyomi": "ほう",
    "kunyomi": "くず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "患": {
    "level": 37,
    "character": "患",
    "meaning": "afflicted",
    "onyomi": "かん",
    "kunyomi": "わずら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "抗": {
    "level": 37,
    "character": "抗",
    "meaning": "confront",
    "onyomi": "こう",
    "kunyomi": "あらが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "抵": {
    "level": 37,
    "character": "抵",
    "meaning": "resist",
    "onyomi": "てい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "旬": {
    "level": 37,
    "character": "旬",
    "meaning": "in season, time of month, season",
    "onyomi": "しゅん, じゅん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "湾": {
    "level": 37,
    "character": "湾",
    "meaning": "gulf",
    "onyomi": "わん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "爆": {
    "level": 37,
    "character": "爆",
    "meaning": "explode",
    "onyomi": "ばく",
    "kunyomi": "は",
    "important_reading": "onyomi",
    "nanori": null
  },
  "弾": {
    "level": 37,
    "character": "弾",
    "meaning": "bullet",
    "onyomi": "だん",
    "kunyomi": "ひ, はず, たま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "聴": {
    "level": 37,
    "character": "聴",
    "meaning": "listen",
    "onyomi": "ちょう",
    "kunyomi": "き",
    "important_reading": "onyomi",
    "nanori": null
  },
  "遣": {
    "level": 37,
    "character": "遣",
    "meaning": "dispatch",
    "onyomi": "けん",
    "kunyomi": "つか, や",
    "important_reading": "onyomi",
    "nanori": null
  },
  "闘": {
    "level": 37,
    "character": "闘",
    "meaning": "struggle",
    "onyomi": "とう",
    "kunyomi": "たたか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "陣": {
    "level": 37,
    "character": "陣",
    "meaning": "army base",
    "onyomi": "じん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "香": {
    "level": 37,
    "character": "香",
    "meaning": "fragrance",
    "onyomi": "こう, きょう",
    "kunyomi": "かお, か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "臨": {
    "level": 37,
    "character": "臨",
    "meaning": "look to",
    "onyomi": "りん",
    "kunyomi": "のぞ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "削": {
    "level": 37,
    "character": "削",
    "meaning": "whittle down",
    "onyomi": "さく",
    "kunyomi": "けず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "契": {
    "level": 37,
    "character": "契",
    "meaning": "pledge",
    "onyomi": "けい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "抱": {
    "level": 37,
    "character": "抱",
    "meaning": "hug",
    "onyomi": "ほう",
    "kunyomi": "だ, かか, いだ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "掲": {
    "level": 37,
    "character": "掲",
    "meaning": "display",
    "onyomi": "けい",
    "kunyomi": "かか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "狙": {
    "level": 37,
    "character": "狙",
    "meaning": "aim",
    "onyomi": "そ",
    "kunyomi": "ねら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "葬": {
    "level": 37,
    "character": "葬",
    "meaning": "burial",
    "onyomi": "そう",
    "kunyomi": "ほうむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "恵": {
    "level": 37,
    "character": "恵",
    "meaning": "favor",
    "onyomi": "え, けい",
    "kunyomi": "めぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "需": {
    "level": 38,
    "character": "需",
    "meaning": "demand",
    "onyomi": "じゅ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "齢": {
    "level": 38,
    "character": "齢",
    "meaning": "age",
    "onyomi": "れい",
    "kunyomi": "よわい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "宜": {
    "level": 38,
    "character": "宜",
    "meaning": "best regards",
    "onyomi": "ぎ",
    "kunyomi": "よろ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "繰": {
    "level": 38,
    "character": "繰",
    "meaning": "spin",
    "onyomi": "そう",
    "kunyomi": "く",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "避": {
    "level": 38,
    "character": "避",
    "meaning": "dodge, avoid",
    "onyomi": "ひ",
    "kunyomi": "さ, よ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "妊": {
    "level": 38,
    "character": "妊",
    "meaning": "pregnant",
    "onyomi": "にん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "娠": {
    "level": 38,
    "character": "娠",
    "meaning": "pregnant",
    "onyomi": "しん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "致": {
    "level": 38,
    "character": "致",
    "meaning": "do",
    "onyomi": "ち",
    "kunyomi": "いた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "刊": {
    "level": 38,
    "character": "刊",
    "meaning": "edition",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "奏": {
    "level": 38,
    "character": "奏",
    "meaning": "play music",
    "onyomi": "そう",
    "kunyomi": "かな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "伴": {
    "level": 38,
    "character": "伴",
    "meaning": "accompany",
    "onyomi": "はん",
    "kunyomi": "ともな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "併": {
    "level": 38,
    "character": "併",
    "meaning": "join",
    "onyomi": "へい",
    "kunyomi": "あわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "傾": {
    "level": 38,
    "character": "傾",
    "meaning": "lean",
    "onyomi": "けい",
    "kunyomi": "かたむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "却": {
    "level": 38,
    "character": "却",
    "meaning": "contrary",
    "onyomi": "きゃく",
    "kunyomi": "かえって",
    "important_reading": "onyomi",
    "nanori": null
  },
  "奥": {
    "level": 38,
    "character": "奥",
    "meaning": "interior",
    "onyomi": "おう",
    "kunyomi": "おく",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "慮": {
    "level": 38,
    "character": "慮",
    "meaning": "consider",
    "onyomi": "りょ",
    "kunyomi": "おもんぱく, おもんぱか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "懸": {
    "level": 38,
    "character": "懸",
    "meaning": "suspend",
    "onyomi": "けん",
    "kunyomi": "か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "房": {
    "level": 38,
    "character": "房",
    "meaning": "cluster",
    "onyomi": "ぼう",
    "kunyomi": "ふさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "扱": {
    "level": 38,
    "character": "扱",
    "meaning": "handle",
    "onyomi": "きゅう",
    "kunyomi": "あつか",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "抑": {
    "level": 38,
    "character": "抑",
    "meaning": "suppress",
    "onyomi": "よく",
    "kunyomi": "おさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "択": {
    "level": 38,
    "character": "択",
    "meaning": "select",
    "onyomi": "たく",
    "kunyomi": "えら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "描": {
    "level": 38,
    "character": "描",
    "meaning": "draw",
    "onyomi": "びょう",
    "kunyomi": "か, えが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "盤": {
    "level": 38,
    "character": "盤",
    "meaning": "tray",
    "onyomi": "ばん",
    "kunyomi": "ばん",
    "important_reading": "onyomi",
    "nanori": null
  },
  "称": {
    "level": 38,
    "character": "称",
    "meaning": "title",
    "onyomi": "しょう",
    "kunyomi": "とな, たた, ほめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "緒": {
    "level": 38,
    "character": "緒",
    "meaning": "together",
    "onyomi": "しょ",
    "kunyomi": "お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "緩": {
    "level": 38,
    "character": "緩",
    "meaning": "loose",
    "onyomi": "かん",
    "kunyomi": "ゆる",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "託": {
    "level": 38,
    "character": "託",
    "meaning": "consign",
    "onyomi": "たく",
    "kunyomi": "かこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "賄": {
    "level": 38,
    "character": "賄",
    "meaning": "bribe",
    "onyomi": "わい",
    "kunyomi": "まかな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "賂": {
    "level": 38,
    "character": "賂",
    "meaning": "bribe",
    "onyomi": "ろ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "贈": {
    "level": 38,
    "character": "贈",
    "meaning": "presents",
    "onyomi": "ぞう",
    "kunyomi": "おく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "逃": {
    "level": 38,
    "character": "逃",
    "meaning": "escape",
    "onyomi": "とう",
    "kunyomi": "に, のが, の",
    "important_reading": "onyomi",
    "nanori": null
  },
  "還": {
    "level": 38,
    "character": "還",
    "meaning": "send back",
    "onyomi": "かん",
    "kunyomi": "かえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "拒": {
    "level": 39,
    "character": "拒",
    "meaning": "refuse, refusal",
    "onyomi": "きょ",
    "kunyomi": "こば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "邦": {
    "level": 39,
    "character": "邦",
    "meaning": "home country",
    "onyomi": "ほう",
    "kunyomi": "くに",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鈴": {
    "level": 39,
    "character": "鈴",
    "meaning": "buzzer",
    "onyomi": "りん",
    "kunyomi": "すず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "阜": {
    "level": 39,
    "character": "阜",
    "meaning": "mound",
    "onyomi": "ふ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "岐": {
    "level": 39,
    "character": "岐",
    "meaning": "branch off",
    "onyomi": "き, ぎ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "隆": {
    "level": 39,
    "character": "隆",
    "meaning": "prosperity",
    "onyomi": "りゅう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "雇": {
    "level": 39,
    "character": "雇",
    "meaning": "employ",
    "onyomi": "こ",
    "kunyomi": "やと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "控": {
    "level": 39,
    "character": "控",
    "meaning": "abstain",
    "onyomi": "こう",
    "kunyomi": "ひか",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "壁": {
    "level": 39,
    "character": "壁",
    "meaning": "wall",
    "onyomi": "へき",
    "kunyomi": "かべ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "棋": {
    "level": 39,
    "character": "棋",
    "meaning": "chess piece",
    "onyomi": "き",
    "kunyomi": "ご",
    "important_reading": "onyomi",
    "nanori": null
  },
  "渋": {
    "level": 39,
    "character": "渋",
    "meaning": "bitter",
    "onyomi": "じゅう",
    "kunyomi": "しぶ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "片": {
    "level": 39,
    "character": "片",
    "meaning": "one sided",
    "onyomi": "へん",
    "kunyomi": "かた",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "群": {
    "level": 39,
    "character": "群",
    "meaning": "flock",
    "onyomi": "ぐん",
    "kunyomi": "む, むら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "仙": {
    "level": 39,
    "character": "仙",
    "meaning": "hermit",
    "onyomi": "せん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "充": {
    "level": 39,
    "character": "充",
    "meaning": "allocate",
    "onyomi": "じゅう",
    "kunyomi": "あ, み",
    "important_reading": "onyomi",
    "nanori": null
  },
  "免": {
    "level": 39,
    "character": "免",
    "meaning": "excuse",
    "onyomi": "めん",
    "kunyomi": "まぬか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "勧": {
    "level": 39,
    "character": "勧",
    "meaning": "recommend",
    "onyomi": "かん",
    "kunyomi": "すす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "圏": {
    "level": 39,
    "character": "圏",
    "meaning": "range",
    "onyomi": "けん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "埋": {
    "level": 39,
    "character": "埋",
    "meaning": "bury",
    "onyomi": "まい",
    "kunyomi": "う",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "埼": {
    "level": 39,
    "character": "埼",
    "meaning": "cape",
    "onyomi": "き",
    "kunyomi": "さい",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "奪": {
    "level": 39,
    "character": "奪",
    "meaning": "rob",
    "onyomi": "だつ",
    "kunyomi": "うば",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "御": {
    "level": 39,
    "character": "御",
    "meaning": "honorable",
    "onyomi": "ご",
    "kunyomi": "お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "慎": {
    "level": 39,
    "character": "慎",
    "meaning": "humility",
    "onyomi": "しん",
    "kunyomi": "つつし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "枠": {
    "level": 39,
    "character": "枠",
    "meaning": "frame",
    "onyomi": "None",
    "kunyomi": "わく",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "甲": {
    "level": 39,
    "character": "甲",
    "meaning": "turtle shell, a",
    "onyomi": "こう, かん",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "斐": {
    "level": 39,
    "character": "斐",
    "meaning": "patterned",
    "onyomi": "い",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "祉": {
    "level": 39,
    "character": "祉",
    "meaning": "welfare",
    "onyomi": "し",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "稲": {
    "level": 39,
    "character": "稲",
    "meaning": "rice plant",
    "onyomi": "None",
    "kunyomi": "いね, いな",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "譲": {
    "level": 39,
    "character": "譲",
    "meaning": "defer",
    "onyomi": "じょう",
    "kunyomi": "ゆず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "謙": {
    "level": 39,
    "character": "謙",
    "meaning": "modesty",
    "onyomi": "けん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "躍": {
    "level": 39,
    "character": "躍",
    "meaning": "leap",
    "onyomi": "やく",
    "kunyomi": "おど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "銃": {
    "level": 39,
    "character": "銃",
    "meaning": "gun",
    "onyomi": "じゅう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "項": {
    "level": 39,
    "character": "項",
    "meaning": "paragraph",
    "onyomi": "こう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鋼": {
    "level": 39,
    "character": "鋼",
    "meaning": "steel",
    "onyomi": "こう",
    "kunyomi": "はがね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "顧": {
    "level": 40,
    "character": "顧",
    "meaning": "review",
    "onyomi": "こ",
    "kunyomi": "かえり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "駐": {
    "level": 40,
    "character": "駐",
    "meaning": "resident",
    "onyomi": "ちゅう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "駆": {
    "level": 40,
    "character": "駆",
    "meaning": "gallop",
    "onyomi": "く",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "柱": {
    "level": 40,
    "character": "柱",
    "meaning": "pillar",
    "onyomi": "ちゅう",
    "kunyomi": "はしら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "唱": {
    "level": 40,
    "character": "唱",
    "meaning": "chant",
    "onyomi": "しょう",
    "kunyomi": "とな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "孝": {
    "level": 40,
    "character": "孝",
    "meaning": "filial piety",
    "onyomi": "こう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "俊": {
    "level": 40,
    "character": "俊",
    "meaning": "genius",
    "onyomi": "しゅん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "兼": {
    "level": 40,
    "character": "兼",
    "meaning": "concurrently",
    "onyomi": "けん",
    "kunyomi": "か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "剤": {
    "level": 40,
    "character": "剤",
    "meaning": "dose",
    "onyomi": "ざい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "吹": {
    "level": 40,
    "character": "吹",
    "meaning": "blow",
    "onyomi": "すい",
    "kunyomi": "ふ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "堀": {
    "level": 40,
    "character": "堀",
    "meaning": "ditch",
    "onyomi": "くつ",
    "kunyomi": "ほり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "巡": {
    "level": 40,
    "character": "巡",
    "meaning": "patrol",
    "onyomi": "じゅん",
    "kunyomi": "めぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "戒": {
    "level": 40,
    "character": "戒",
    "meaning": "commandment",
    "onyomi": "かい",
    "kunyomi": "いまし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "排": {
    "level": 40,
    "character": "排",
    "meaning": "reject",
    "onyomi": "はい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "携": {
    "level": 40,
    "character": "携",
    "meaning": "portable",
    "onyomi": "けい",
    "kunyomi": "たずさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "敏": {
    "level": 40,
    "character": "敏",
    "meaning": "alert",
    "onyomi": "びん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鋭": {
    "level": 40,
    "character": "鋭",
    "meaning": "sharp",
    "onyomi": "えい",
    "kunyomi": "するど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "敷": {
    "level": 40,
    "character": "敷",
    "meaning": "spread",
    "onyomi": "ふ",
    "kunyomi": "しき, し",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "殿": {
    "level": 40,
    "character": "殿",
    "meaning": "milord, lord",
    "onyomi": "でん",
    "kunyomi": "との, どの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "犠": {
    "level": 40,
    "character": "犠",
    "meaning": "sacrifice",
    "onyomi": "ぎ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "獲": {
    "level": 40,
    "character": "獲",
    "meaning": "seize",
    "onyomi": "かく",
    "kunyomi": "え",
    "important_reading": "onyomi",
    "nanori": null
  },
  "茂": {
    "level": 40,
    "character": "茂",
    "meaning": "luxuriant",
    "onyomi": "も",
    "kunyomi": "しげ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "雅": {
    "level": 40,
    "character": "雅",
    "meaning": "elegant",
    "onyomi": "が",
    "kunyomi": "みや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "繁": {
    "level": 40,
    "character": "繁",
    "meaning": "overgrown",
    "onyomi": "はん",
    "kunyomi": "しげ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "頻": {
    "level": 40,
    "character": "頻",
    "meaning": "frequent",
    "onyomi": "ひん",
    "kunyomi": "しき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "殖": {
    "level": 40,
    "character": "殖",
    "meaning": "multiply",
    "onyomi": "しょく",
    "kunyomi": "ふ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "薄": {
    "level": 40,
    "character": "薄",
    "meaning": "dilute",
    "onyomi": "はく",
    "kunyomi": "うす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "衝": {
    "level": 40,
    "character": "衝",
    "meaning": "collide",
    "onyomi": "しょう",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "誉": {
    "level": 40,
    "character": "誉",
    "meaning": "honor",
    "onyomi": "よ",
    "kunyomi": "ほ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "褒": {
    "level": 40,
    "character": "褒",
    "meaning": "praise",
    "onyomi": "ほう",
    "kunyomi": "ほ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "透": {
    "level": 40,
    "character": "透",
    "meaning": "transparent",
    "onyomi": "とう",
    "kunyomi": "す",
    "important_reading": "onyomi",
    "nanori": null
  },
  "隣": {
    "level": 40,
    "character": "隣",
    "meaning": "neighbor",
    "onyomi": "りん",
    "kunyomi": "となり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "至": {
    "level": 41,
    "character": "至",
    "meaning": "attain",
    "onyomi": "し",
    "kunyomi": "いた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "儀": {
    "level": 41,
    "character": "儀",
    "meaning": "ceremony",
    "onyomi": "ぎ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "虎": {
    "level": 41,
    "character": "虎",
    "meaning": "tiger",
    "onyomi": "こ",
    "kunyomi": "とら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "遜": {
    "level": 41,
    "character": "遜",
    "meaning": "humble",
    "onyomi": "そん",
    "kunyomi": "したが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "伺": {
    "level": 41,
    "character": "伺",
    "meaning": "pay respects",
    "onyomi": "し",
    "kunyomi": "うかが",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "徹": {
    "level": 41,
    "character": "徹",
    "meaning": "penetrate",
    "onyomi": "てつ",
    "kunyomi": "てっ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "瀬": {
    "level": 41,
    "character": "瀬",
    "meaning": "rapids, shallows",
    "onyomi": "らい",
    "kunyomi": "せ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "撤": {
    "level": 41,
    "character": "撤",
    "meaning": "withdrawal",
    "onyomi": "てつ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "措": {
    "level": 41,
    "character": "措",
    "meaning": "set aside",
    "onyomi": "そ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "拠": {
    "level": 41,
    "character": "拠",
    "meaning": "based on",
    "onyomi": "きょ",
    "kunyomi": "よ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "樹": {
    "level": 41,
    "character": "樹",
    "meaning": "wood",
    "onyomi": "じゅ",
    "kunyomi": "き",
    "important_reading": "onyomi",
    "nanori": "いつき"
  },
  "棄": {
    "level": 41,
    "character": "棄",
    "meaning": "abandon",
    "onyomi": "き",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "蛍": {
    "level": 41,
    "character": "蛍",
    "meaning": "firefly",
    "onyomi": "けい",
    "kunyomi": "ほたる",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "蜂": {
    "level": 41,
    "character": "蜂",
    "meaning": "bee",
    "onyomi": "ほう",
    "kunyomi": "はち",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "酎": {
    "level": 41,
    "character": "酎",
    "meaning": "sake",
    "onyomi": "ちゅう, ちゅ",
    "kunyomi": "かも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "蜜": {
    "level": 41,
    "character": "蜜",
    "meaning": "honey",
    "onyomi": "みつ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "墟": {
    "level": 41,
    "character": "墟",
    "meaning": "ruins",
    "onyomi": "きょ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "艦": {
    "level": 41,
    "character": "艦",
    "meaning": "warship",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "潜": {
    "level": 41,
    "character": "潜",
    "meaning": "conceal",
    "onyomi": "せん",
    "kunyomi": "くぐ, ひそ, もぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "拳": {
    "level": 41,
    "character": "拳",
    "meaning": "fist",
    "onyomi": "けん, げん",
    "kunyomi": "こぶし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "炭": {
    "level": 41,
    "character": "炭",
    "meaning": "charcoal",
    "onyomi": "たん",
    "kunyomi": "すみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "畑": {
    "level": 41,
    "character": "畑",
    "meaning": "field",
    "onyomi": null,
    "kunyomi": "はたけ, はた",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "包": {
    "level": 41,
    "character": "包",
    "meaning": "wrap",
    "onyomi": "ほう",
    "kunyomi": "つつ, くる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "衣": {
    "level": 41,
    "character": "衣",
    "meaning": "clothes",
    "onyomi": "い, え",
    "kunyomi": "ころも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "仁": {
    "level": 41,
    "character": "仁",
    "meaning": "humanity",
    "onyomi": "じん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鉱": {
    "level": 41,
    "character": "鉱",
    "meaning": "mineral",
    "onyomi": "こう",
    "kunyomi": "あらがね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "誠": {
    "level": 41,
    "character": "誠",
    "meaning": "sincerity",
    "onyomi": "せい",
    "kunyomi": "まこと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "郷": {
    "level": 41,
    "character": "郷",
    "meaning": "hometown",
    "onyomi": "きょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "侵": {
    "level": 41,
    "character": "侵",
    "meaning": "invade",
    "onyomi": "しん",
    "kunyomi": "おか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "偽": {
    "level": 41,
    "character": "偽",
    "meaning": "fake",
    "onyomi": "ぎ",
    "kunyomi": "にせ, いつわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "握": {
    "level": 42,
    "character": "握",
    "meaning": "grip",
    "onyomi": "あく",
    "kunyomi": "にぎ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "紛": {
    "level": 42,
    "character": "紛",
    "meaning": "distract",
    "onyomi": "ふん",
    "kunyomi": "まぎ, まぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "糾": {
    "level": 42,
    "character": "糾",
    "meaning": "twist",
    "onyomi": "きゅう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "枢": {
    "level": 42,
    "character": "枢",
    "meaning": "hinge",
    "onyomi": "すう",
    "kunyomi": "からくり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "軸": {
    "level": 42,
    "character": "軸",
    "meaning": "axis",
    "onyomi": "じく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "克": {
    "level": 42,
    "character": "克",
    "meaning": "overcome",
    "onyomi": "こく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "到": {
    "level": 42,
    "character": "到",
    "meaning": "arrival",
    "onyomi": "とう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "双": {
    "level": 42,
    "character": "双",
    "meaning": "pair",
    "onyomi": "そう",
    "kunyomi": "ふた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "哲": {
    "level": 42,
    "character": "哲",
    "meaning": "philosophy",
    "onyomi": "てつ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "喪": {
    "level": 42,
    "character": "喪",
    "meaning": "mourning",
    "onyomi": "そう",
    "kunyomi": "も",
    "important_reading": "onyomi",
    "nanori": null
  },
  "堅": {
    "level": 42,
    "character": "堅",
    "meaning": "solid",
    "onyomi": "けん",
    "kunyomi": "かた",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "床": {
    "level": 42,
    "character": "床",
    "meaning": "floor",
    "onyomi": "しょう",
    "kunyomi": "ゆか, とこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "括": {
    "level": 42,
    "character": "括",
    "meaning": "fasten",
    "onyomi": "かつ",
    "kunyomi": "くく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "弧": {
    "level": 42,
    "character": "弧",
    "meaning": "arc",
    "onyomi": "こ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "挑": {
    "level": 42,
    "character": "挑",
    "meaning": "challenge",
    "onyomi": "ちょう",
    "kunyomi": "いど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "掘": {
    "level": 42,
    "character": "掘",
    "meaning": "dig",
    "onyomi": "くつ",
    "kunyomi": "ほ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "揚": {
    "level": 42,
    "character": "揚",
    "meaning": "hoist",
    "onyomi": "よう",
    "kunyomi": "あ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "揺": {
    "level": 42,
    "character": "揺",
    "meaning": "shake",
    "onyomi": "よう",
    "kunyomi": "ゆ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "斎": {
    "level": 42,
    "character": "斎",
    "meaning": "purification",
    "onyomi": "さい",
    "kunyomi": "いつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "暫": {
    "level": 42,
    "character": "暫",
    "meaning": "temporarily",
    "onyomi": "ざん",
    "kunyomi": "しばら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "析": {
    "level": 42,
    "character": "析",
    "meaning": "analysis",
    "onyomi": "せき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "柄": {
    "level": 42,
    "character": "柄",
    "meaning": "pattern",
    "onyomi": "へい",
    "kunyomi": "がら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "泊": {
    "level": 42,
    "character": "泊",
    "meaning": "overnight",
    "onyomi": "はく",
    "kunyomi": "と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "滑": {
    "level": 42,
    "character": "滑",
    "meaning": "slippery",
    "onyomi": "かつ",
    "kunyomi": "すべ, なめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "潟": {
    "level": 42,
    "character": "潟",
    "meaning": "lagoon",
    "onyomi": "せき",
    "kunyomi": "かた",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "焦": {
    "level": 42,
    "character": "焦",
    "meaning": "char",
    "onyomi": "しょう",
    "kunyomi": "こ, あせ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "範": {
    "level": 42,
    "character": "範",
    "meaning": "example",
    "onyomi": "はん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "綱": {
    "level": 42,
    "character": "綱",
    "meaning": "cable",
    "onyomi": "こう",
    "kunyomi": "つな",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "網": {
    "level": 42,
    "character": "網",
    "meaning": "netting",
    "onyomi": "もう",
    "kunyomi": "あみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "肝": {
    "level": 42,
    "character": "肝",
    "meaning": "liver",
    "onyomi": "かん",
    "kunyomi": "きも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "芝": {
    "level": 42,
    "character": "芝",
    "meaning": "lawn",
    "onyomi": "し",
    "kunyomi": "しば",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "荒": {
    "level": 42,
    "character": "荒",
    "meaning": "wild",
    "onyomi": "こう",
    "kunyomi": "あ, あら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "袋": {
    "level": 42,
    "character": "袋",
    "meaning": "sack",
    "onyomi": "たい",
    "kunyomi": "ふくろ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "籍": {
    "level": 43,
    "character": "籍",
    "meaning": "enroll",
    "onyomi": "せき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "柔": {
    "level": 43,
    "character": "柔",
    "meaning": "gentle",
    "onyomi": "じゅう, にゅう",
    "kunyomi": "やわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "沈": {
    "level": 43,
    "character": "沈",
    "meaning": "sink",
    "onyomi": "ちん",
    "kunyomi": "しず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "沼": {
    "level": 43,
    "character": "沼",
    "meaning": "bog",
    "onyomi": "しょう",
    "kunyomi": "ぬま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "誰": {
    "level": 43,
    "character": "誰",
    "meaning": "who",
    "onyomi": "None",
    "kunyomi": "だれ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "裂": {
    "level": 43,
    "character": "裂",
    "meaning": "split, tear",
    "onyomi": "れつ",
    "kunyomi": "さ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "襲": {
    "level": 43,
    "character": "襲",
    "meaning": "attack",
    "onyomi": "しゅう",
    "kunyomi": "おそ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "貢": {
    "level": 43,
    "character": "貢",
    "meaning": "tribute",
    "onyomi": "こう",
    "kunyomi": "みつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "趣": {
    "level": 43,
    "character": "趣",
    "meaning": "gist",
    "onyomi": "しゅ",
    "kunyomi": "おもむき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "距": {
    "level": 43,
    "character": "距",
    "meaning": "distance",
    "onyomi": "きょ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "朗": {
    "level": 43,
    "character": "朗",
    "meaning": "bright",
    "onyomi": "ろう",
    "kunyomi": "ほが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "即": {
    "level": 43,
    "character": "即",
    "meaning": "instant",
    "onyomi": "そく",
    "kunyomi": "すなわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "旨": {
    "level": 43,
    "character": "旨",
    "meaning": "point, delicious",
    "onyomi": "し",
    "kunyomi": "うま, むね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "威": {
    "level": 43,
    "character": "威",
    "meaning": "majesty",
    "onyomi": "い",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "筒": {
    "level": 43,
    "character": "筒",
    "meaning": "cylinder",
    "onyomi": "とう",
    "kunyomi": "つつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "珍": {
    "level": 43,
    "character": "珍",
    "meaning": "rare",
    "onyomi": "ちん",
    "kunyomi": "めずら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "露": {
    "level": 43,
    "character": "露",
    "meaning": "expose, dew",
    "onyomi": "ろ, ろう",
    "kunyomi": "つゆ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "牧": {
    "level": 43,
    "character": "牧",
    "meaning": "pasture",
    "onyomi": "ぼく",
    "kunyomi": "まき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "刷": {
    "level": 43,
    "character": "刷",
    "meaning": "printing",
    "onyomi": "さつ",
    "kunyomi": "す",
    "important_reading": "onyomi",
    "nanori": null
  },
  "潮": {
    "level": 43,
    "character": "潮",
    "meaning": "tide",
    "onyomi": "ちょう",
    "kunyomi": "しお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "垣": {
    "level": 43,
    "character": "垣",
    "meaning": "hedge, fence",
    "onyomi": "None",
    "kunyomi": "かき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "封": {
    "level": 43,
    "character": "封",
    "meaning": "seal, seal in, closing",
    "onyomi": "ふう, ほう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "岳": {
    "level": 43,
    "character": "岳",
    "meaning": "peak",
    "onyomi": "がく",
    "kunyomi": "たけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "慰": {
    "level": 43,
    "character": "慰",
    "meaning": "consolation",
    "onyomi": "い",
    "kunyomi": "なぐさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "懇": {
    "level": 43,
    "character": "懇",
    "meaning": "courteous",
    "onyomi": "こん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "懲": {
    "level": 43,
    "character": "懲",
    "meaning": "chastise",
    "onyomi": "ちょう",
    "kunyomi": "こ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "摩": {
    "level": 43,
    "character": "摩",
    "meaning": "chafe",
    "onyomi": "ま",
    "kunyomi": "さす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "擦": {
    "level": 43,
    "character": "擦",
    "meaning": "grate",
    "onyomi": "さつ",
    "kunyomi": "こす, す",
    "important_reading": "onyomi",
    "nanori": null
  },
  "撲": {
    "level": 43,
    "character": "撲",
    "meaning": "slap",
    "onyomi": "ぼく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "斉": {
    "level": 43,
    "character": "斉",
    "meaning": "simultaneous",
    "onyomi": "せい, さい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "泰": {
    "level": 43,
    "character": "泰",
    "meaning": "peace",
    "onyomi": "たい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "滅": {
    "level": 43,
    "character": "滅",
    "meaning": "destroy",
    "onyomi": "めつ",
    "kunyomi": "ほろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "滋": {
    "level": 43,
    "character": "滋",
    "meaning": "nourishing",
    "onyomi": "じ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "炉": {
    "level": 43,
    "character": "炉",
    "meaning": "furnace",
    "onyomi": "ろ",
    "kunyomi": "いろり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "琴": {
    "level": 43,
    "character": "琴",
    "meaning": "harp",
    "onyomi": "None",
    "kunyomi": "こと",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "辛": {
    "level": 44,
    "character": "辛",
    "meaning": "spicy",
    "onyomi": "しん",
    "kunyomi": "から, つら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "謎": {
    "level": 44,
    "character": "謎",
    "meaning": "riddle",
    "onyomi": "None",
    "kunyomi": "なぞ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "娯": {
    "level": 44,
    "character": "娯",
    "meaning": "recreation",
    "onyomi": "ご",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "粒": {
    "level": 44,
    "character": "粒",
    "meaning": "grains",
    "onyomi": "りゅう",
    "kunyomi": "つぶ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "斗": {
    "level": 44,
    "character": "斗",
    "meaning": "ladle, big dipper",
    "onyomi": "と",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "朱": {
    "level": 44,
    "character": "朱",
    "meaning": "vermillion",
    "onyomi": "しゅ",
    "kunyomi": "あけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "丘": {
    "level": 44,
    "character": "丘",
    "meaning": "hill",
    "onyomi": "きゅう",
    "kunyomi": "おか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "雷": {
    "level": 44,
    "character": "雷",
    "meaning": "thunder",
    "onyomi": "らい",
    "kunyomi": "かみなり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "塔": {
    "level": 44,
    "character": "塔",
    "meaning": "tower",
    "onyomi": "とう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "髪": {
    "level": 44,
    "character": "髪",
    "meaning": "hair",
    "onyomi": "はつ",
    "kunyomi": "かみ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "砲": {
    "level": 44,
    "character": "砲",
    "meaning": "cannon",
    "onyomi": "ほう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "寸": {
    "level": 44,
    "character": "寸",
    "meaning": "measurement",
    "onyomi": "すん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "竜": {
    "level": 44,
    "character": "竜",
    "meaning": "dragon",
    "onyomi": "りゅう",
    "kunyomi": "たつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "縁": {
    "level": 44,
    "character": "縁",
    "meaning": "edge",
    "onyomi": "えん, ねん",
    "kunyomi": "ふち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "翼": {
    "level": 44,
    "character": "翼",
    "meaning": "wing",
    "onyomi": "よく",
    "kunyomi": "つばさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "吉": {
    "level": 44,
    "character": "吉",
    "meaning": "good luck",
    "onyomi": "きつ, きち",
    "kunyomi": "よし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "刃": {
    "level": 44,
    "character": "刃",
    "meaning": "blade",
    "onyomi": "じん, にん",
    "kunyomi": "は",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "忍": {
    "level": 44,
    "character": "忍",
    "meaning": "endure",
    "onyomi": "にん",
    "kunyomi": "しの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "桃": {
    "level": 44,
    "character": "桃",
    "meaning": "peach",
    "onyomi": "とう",
    "kunyomi": "もも",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "侍": {
    "level": 44,
    "character": "侍",
    "meaning": "samurai",
    "onyomi": "None",
    "kunyomi": "さむらい",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "俺": {
    "level": 44,
    "character": "俺",
    "meaning": "i, me",
    "onyomi": "None",
    "kunyomi": "おれ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "叱": {
    "level": 44,
    "character": "叱",
    "meaning": "scold",
    "onyomi": "None",
    "kunyomi": "しか",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "梨": {
    "level": 44,
    "character": "梨",
    "meaning": "pear",
    "onyomi": "None",
    "kunyomi": "なし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "僕": {
    "level": 44,
    "character": "僕",
    "meaning": "i, me",
    "onyomi": "ぼく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "匹": {
    "level": 44,
    "character": "匹",
    "meaning": "small animal, small animal counter",
    "onyomi": null,
    "kunyomi": "ひき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "叫": {
    "level": 44,
    "character": "叫",
    "meaning": "shout",
    "onyomi": "きょう",
    "kunyomi": "さけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "釣": {
    "level": 44,
    "character": "釣",
    "meaning": "fishing",
    "onyomi": "ちょう",
    "kunyomi": "つ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "嵐": {
    "level": 44,
    "character": "嵐",
    "meaning": "storm",
    "onyomi": "None",
    "kunyomi": "あらし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "笠": {
    "level": 44,
    "character": "笠",
    "meaning": "conical hat",
    "onyomi": "None",
    "kunyomi": "かさ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "涙": {
    "level": 44,
    "character": "涙",
    "meaning": "teardrop",
    "onyomi": "るい",
    "kunyomi": "なみだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "缶": {
    "level": 44,
    "character": "缶",
    "meaning": "tin can, can",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "棚": {
    "level": 44,
    "character": "棚",
    "meaning": "shelf",
    "onyomi": "ほう",
    "kunyomi": "たな",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "姫": {
    "level": 44,
    "character": "姫",
    "meaning": "princess",
    "onyomi": "None",
    "kunyomi": "ひめ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "芽": {
    "level": 44,
    "character": "芽",
    "meaning": "sprout",
    "onyomi": "が",
    "kunyomi": "め",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "曇": {
    "level": 45,
    "character": "曇",
    "meaning": "cloudy",
    "onyomi": "None",
    "kunyomi": "くも",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "硬": {
    "level": 45,
    "character": "硬",
    "meaning": "stiff",
    "onyomi": "こう",
    "kunyomi": "かた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "澄": {
    "level": 45,
    "character": "澄",
    "meaning": "lucidity",
    "onyomi": "ちょう",
    "kunyomi": "す",
    "important_reading": "onyomi",
    "nanori": null
  },
  "矛": {
    "level": 45,
    "character": "矛",
    "meaning": "halberd",
    "onyomi": "む",
    "kunyomi": "ほこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "肌": {
    "level": 45,
    "character": "肌",
    "meaning": "skin",
    "onyomi": "き",
    "kunyomi": "はだ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "舟": {
    "level": 45,
    "character": "舟",
    "meaning": "boat",
    "onyomi": "しゅう",
    "kunyomi": "ふね, ふな",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "狩": {
    "level": 45,
    "character": "狩",
    "meaning": "hunt",
    "onyomi": "しゅ",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "鐘": {
    "level": 45,
    "character": "鐘",
    "meaning": "bell",
    "onyomi": "しょう",
    "kunyomi": "かね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "凶": {
    "level": 45,
    "character": "凶",
    "meaning": "villain",
    "onyomi": "きょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "塊": {
    "level": 45,
    "character": "塊",
    "meaning": "lump",
    "onyomi": "かい",
    "kunyomi": "かたまり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "頃": {
    "level": 45,
    "character": "頃",
    "meaning": "approximate",
    "onyomi": "None",
    "kunyomi": "ころ, ごろ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "魂": {
    "level": 45,
    "character": "魂",
    "meaning": "soul, spirit",
    "onyomi": "こん",
    "kunyomi": "たましい",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "脚": {
    "level": 45,
    "character": "脚",
    "meaning": "leg, foot",
    "onyomi": "きゃく",
    "kunyomi": "あし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "也": {
    "level": 45,
    "character": "也",
    "meaning": "considerably",
    "onyomi": "や",
    "kunyomi": "なり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "井": {
    "level": 45,
    "character": "井",
    "meaning": "well",
    "onyomi": "しょう",
    "kunyomi": "い",
    "important_reading": "onyomi",
    "nanori": null
  },
  "呪": {
    "level": 45,
    "character": "呪",
    "meaning": "curse",
    "onyomi": "None",
    "kunyomi": "のろ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "嬢": {
    "level": 45,
    "character": "嬢",
    "meaning": "miss",
    "onyomi": "じょう",
    "kunyomi": "むすめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "暦": {
    "level": 45,
    "character": "暦",
    "meaning": "calendar",
    "onyomi": "れき",
    "kunyomi": "こよみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "眺": {
    "level": 45,
    "character": "眺",
    "meaning": "stare",
    "onyomi": "ちょう",
    "kunyomi": "なが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "裸": {
    "level": 45,
    "character": "裸",
    "meaning": "naked",
    "onyomi": "ら",
    "kunyomi": "はだか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "賭": {
    "level": 45,
    "character": "賭",
    "meaning": "gamble",
    "onyomi": "None",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "疲": {
    "level": 45,
    "character": "疲",
    "meaning": "exhausted",
    "onyomi": "ひ",
    "kunyomi": "つか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "塾": {
    "level": 45,
    "character": "塾",
    "meaning": "cram school",
    "onyomi": "じゅく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "卓": {
    "level": 45,
    "character": "卓",
    "meaning": "table",
    "onyomi": "たく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "磨": {
    "level": 45,
    "character": "磨",
    "meaning": "polish",
    "onyomi": "ま",
    "kunyomi": "みが",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "菌": {
    "level": 45,
    "character": "菌",
    "meaning": "bacteria",
    "onyomi": "きん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "陰": {
    "level": 45,
    "character": "陰",
    "meaning": "shade",
    "onyomi": "いん",
    "kunyomi": "かげ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "霊": {
    "level": 45,
    "character": "霊",
    "meaning": "ghost",
    "onyomi": "れい, りょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "湿": {
    "level": 45,
    "character": "湿",
    "meaning": "damp",
    "onyomi": "しつ",
    "kunyomi": "しめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "稼": {
    "level": 45,
    "character": "稼",
    "meaning": "earnings",
    "onyomi": "か",
    "kunyomi": "かせ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "嫁": {
    "level": 45,
    "character": "嫁",
    "meaning": "bride",
    "onyomi": "か",
    "kunyomi": "よめ, とつ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "溝": {
    "level": 45,
    "character": "溝",
    "meaning": "gutter",
    "onyomi": "こう",
    "kunyomi": "みぞ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "滝": {
    "level": 45,
    "character": "滝",
    "meaning": "waterfall",
    "onyomi": "None",
    "kunyomi": "たき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "狂": {
    "level": 45,
    "character": "狂",
    "meaning": "lunatic, crazy",
    "onyomi": "きょう",
    "kunyomi": "くる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "翔": {
    "level": 45,
    "character": "翔",
    "meaning": "fly",
    "onyomi": "しょう",
    "kunyomi": "かけ, と",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "墨": {
    "level": 46,
    "character": "墨",
    "meaning": "black ink, ink",
    "onyomi": "None",
    "kunyomi": "すみ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "鳩": {
    "level": 46,
    "character": "鳩",
    "meaning": "dove, pigeon",
    "onyomi": "く",
    "kunyomi": "はと",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "穏": {
    "level": 46,
    "character": "穏",
    "meaning": "calm",
    "onyomi": "おん",
    "kunyomi": "おだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鈍": {
    "level": 46,
    "character": "鈍",
    "meaning": "dull",
    "onyomi": "どん",
    "kunyomi": "にぶ, のろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "魔": {
    "level": 46,
    "character": "魔",
    "meaning": "devil",
    "onyomi": "ま",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "寮": {
    "level": 46,
    "character": "寮",
    "meaning": "dormitory",
    "onyomi": "りょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "盆": {
    "level": 46,
    "character": "盆",
    "meaning": "lantern festival",
    "onyomi": "ぼん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "棟": {
    "level": 46,
    "character": "棟",
    "meaning": "pillar",
    "onyomi": "とう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "吾": {
    "level": 46,
    "character": "吾",
    "meaning": "i, me",
    "onyomi": "ご",
    "kunyomi": "わが",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "斬": {
    "level": 46,
    "character": "斬",
    "meaning": "slice",
    "onyomi": "ざん",
    "kunyomi": "き",
    "important_reading": "onyomi",
    "nanori": null
  },
  "寧": {
    "level": 46,
    "character": "寧",
    "meaning": "rather",
    "onyomi": "ねい",
    "kunyomi": "むし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "椅": {
    "level": 46,
    "character": "椅",
    "meaning": "chair",
    "onyomi": "い",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "歳": {
    "level": 46,
    "character": "歳",
    "meaning": "years old",
    "onyomi": "さい, せい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "涼": {
    "level": 46,
    "character": "涼",
    "meaning": "cool",
    "onyomi": "りょう",
    "kunyomi": "すず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "猿": {
    "level": 46,
    "character": "猿",
    "meaning": "monkey",
    "onyomi": "えん",
    "kunyomi": "さる",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "瞳": {
    "level": 46,
    "character": "瞳",
    "meaning": "pupil",
    "onyomi": "とう, どう",
    "kunyomi": "ひとみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鍵": {
    "level": 46,
    "character": "鍵",
    "meaning": "key",
    "onyomi": "けん",
    "kunyomi": "かぎ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "零": {
    "level": 46,
    "character": "零",
    "meaning": "zero, spill",
    "onyomi": "れい",
    "kunyomi": "こぼ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "碁": {
    "level": 46,
    "character": "碁",
    "meaning": "go",
    "onyomi": "ご",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "租": {
    "level": 46,
    "character": "租",
    "meaning": "tariff",
    "onyomi": "そ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "幽": {
    "level": 46,
    "character": "幽",
    "meaning": "secluded",
    "onyomi": "ゆう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "泡": {
    "level": 46,
    "character": "泡",
    "meaning": "bubbles",
    "onyomi": "ほう",
    "kunyomi": "あわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "癖": {
    "level": 46,
    "character": "癖",
    "meaning": "habit",
    "onyomi": "へき",
    "kunyomi": "くせ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "鍛": {
    "level": 46,
    "character": "鍛",
    "meaning": "forge",
    "onyomi": "たん",
    "kunyomi": "きた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "錬": {
    "level": 46,
    "character": "錬",
    "meaning": "tempering",
    "onyomi": "れん",
    "kunyomi": "ね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "穂": {
    "level": 46,
    "character": "穂",
    "meaning": "head of plant, ear of plant",
    "onyomi": "すい",
    "kunyomi": "ほ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "帝": {
    "level": 46,
    "character": "帝",
    "meaning": "sovereign",
    "onyomi": "てい",
    "kunyomi": "みかど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "瞬": {
    "level": 46,
    "character": "瞬",
    "meaning": "blink",
    "onyomi": "しゅん",
    "kunyomi": "またた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "菊": {
    "level": 46,
    "character": "菊",
    "meaning": "chrysanthemum",
    "onyomi": "きく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "誇": {
    "level": 46,
    "character": "誇",
    "meaning": "pride",
    "onyomi": "こ",
    "kunyomi": "ほこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "庄": {
    "level": 46,
    "character": "庄",
    "meaning": "manor",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "阻": {
    "level": 46,
    "character": "阻",
    "meaning": "thwart",
    "onyomi": "そ",
    "kunyomi": "はば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "黙": {
    "level": 46,
    "character": "黙",
    "meaning": "shut up",
    "onyomi": "もく",
    "kunyomi": "だま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "俵": {
    "level": 46,
    "character": "俵",
    "meaning": "sack",
    "onyomi": "ひょう",
    "kunyomi": "たわら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "綿": {
    "level": 46,
    "character": "綿",
    "meaning": "cotton",
    "onyomi": "めん",
    "kunyomi": "わた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "架": {
    "level": 46,
    "character": "架",
    "meaning": "shelf",
    "onyomi": "か",
    "kunyomi": "か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "孔": {
    "level": 46,
    "character": "孔",
    "meaning": "cavity, hole",
    "onyomi": "こう",
    "kunyomi": "あな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "砕": {
    "level": 47,
    "character": "砕",
    "meaning": "smash",
    "onyomi": "さい",
    "kunyomi": "くだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "粘": {
    "level": 47,
    "character": "粘",
    "meaning": "sticky",
    "onyomi": "ねん",
    "kunyomi": "ねば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "粧": {
    "level": 47,
    "character": "粧",
    "meaning": "cosmetics",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "欺": {
    "level": 47,
    "character": "欺",
    "meaning": "deceit",
    "onyomi": "ぎ",
    "kunyomi": "あざむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "詐": {
    "level": 47,
    "character": "詐",
    "meaning": "lie",
    "onyomi": "さ",
    "kunyomi": "いつわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "霧": {
    "level": 47,
    "character": "霧",
    "meaning": "fog",
    "onyomi": "む",
    "kunyomi": "きり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "柳": {
    "level": 47,
    "character": "柳",
    "meaning": "willow",
    "onyomi": "りゅう",
    "kunyomi": "やなぎ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "伊": {
    "level": 47,
    "character": "伊",
    "meaning": "italy",
    "onyomi": "い",
    "kunyomi": "だ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "佐": {
    "level": 47,
    "character": "佐",
    "meaning": "help",
    "onyomi": "さ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "瞭": {
    "level": 47,
    "character": "瞭",
    "meaning": "clear",
    "onyomi": "りょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "尺": {
    "level": 47,
    "character": "尺",
    "meaning": "shaku, japanese foot",
    "onyomi": "しゃく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "哀": {
    "level": 47,
    "character": "哀",
    "meaning": "pathetic",
    "onyomi": "あい",
    "kunyomi": "あわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "唇": {
    "level": 47,
    "character": "唇",
    "meaning": "lips",
    "onyomi": "しん",
    "kunyomi": "くちびる",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "塀": {
    "level": 47,
    "character": "塀",
    "meaning": "fence",
    "onyomi": "へい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "墜": {
    "level": 47,
    "character": "墜",
    "meaning": "crash",
    "onyomi": "つい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "如": {
    "level": 47,
    "character": "如",
    "meaning": "likeness",
    "onyomi": "じょ",
    "kunyomi": "ごと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "婆": {
    "level": 47,
    "character": "婆",
    "meaning": "old woman",
    "onyomi": "ば",
    "kunyomi": "ばあ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "崖": {
    "level": 47,
    "character": "崖",
    "meaning": "cliff",
    "onyomi": "がい",
    "kunyomi": "がけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "帽": {
    "level": 47,
    "character": "帽",
    "meaning": "hat",
    "onyomi": "ぼう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "幣": {
    "level": 47,
    "character": "幣",
    "meaning": "cash",
    "onyomi": "へい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "恨": {
    "level": 47,
    "character": "恨",
    "meaning": "grudge",
    "onyomi": "こん",
    "kunyomi": "うら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "憎": {
    "level": 47,
    "character": "憎",
    "meaning": "hate",
    "onyomi": "ぞう",
    "kunyomi": "にく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "憩": {
    "level": 47,
    "character": "憩",
    "meaning": "rest",
    "onyomi": "けい",
    "kunyomi": "いこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "扇": {
    "level": 47,
    "character": "扇",
    "meaning": "folding fan",
    "onyomi": "せん",
    "kunyomi": "おうぎ, あお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "扉": {
    "level": 47,
    "character": "扉",
    "meaning": "front door",
    "onyomi": "ひ",
    "kunyomi": "とびら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "挿": {
    "level": 47,
    "character": "挿",
    "meaning": "insert",
    "onyomi": "そう",
    "kunyomi": "さ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "掌": {
    "level": 47,
    "character": "掌",
    "meaning": "manipulate",
    "onyomi": "しょう",
    "kunyomi": "てのひら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "滴": {
    "level": 47,
    "character": "滴",
    "meaning": "drip",
    "onyomi": "てき",
    "kunyomi": "したた, しずく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "炊": {
    "level": 47,
    "character": "炊",
    "meaning": "cook",
    "onyomi": "すい",
    "kunyomi": "た",
    "important_reading": "onyomi",
    "nanori": null
  },
  "爽": {
    "level": 47,
    "character": "爽",
    "meaning": "refreshing",
    "onyomi": "そう",
    "kunyomi": "さわ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "畳": {
    "level": 47,
    "character": "畳",
    "meaning": "tatami mat",
    "onyomi": "じょう",
    "kunyomi": "たたみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "箸": {
    "level": 47,
    "character": "箸",
    "meaning": "chopsticks",
    "onyomi": "ちゃく",
    "kunyomi": "はし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "胴": {
    "level": 47,
    "character": "胴",
    "meaning": "torso",
    "onyomi": "どう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "芯": {
    "level": 47,
    "character": "芯",
    "meaning": "wick",
    "onyomi": "しん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "虹": {
    "level": 47,
    "character": "虹",
    "meaning": "rainbow",
    "onyomi": "こう",
    "kunyomi": "にじ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "巾": {
    "level": 47,
    "character": "巾",
    "meaning": "towel",
    "onyomi": "きん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "霜": {
    "level": 48,
    "character": "霜",
    "meaning": "frost",
    "onyomi": "None",
    "kunyomi": "しも",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "蚊": {
    "level": 48,
    "character": "蚊",
    "meaning": "mosquito",
    "onyomi": "None",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "騎": {
    "level": 48,
    "character": "騎",
    "meaning": "horse",
    "onyomi": "き",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "帳": {
    "level": 48,
    "character": "帳",
    "meaning": "notebook",
    "onyomi": "ちょう",
    "kunyomi": "とばり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "蛇": {
    "level": 48,
    "character": "蛇",
    "meaning": "snake",
    "onyomi": "じゃ",
    "kunyomi": "へび",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "貼": {
    "level": 48,
    "character": "貼",
    "meaning": "paste",
    "onyomi": "ちょう",
    "kunyomi": "は",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "辱": {
    "level": 48,
    "character": "辱",
    "meaning": "humiliate",
    "onyomi": "じょく",
    "kunyomi": "はずかし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鉢": {
    "level": 48,
    "character": "鉢",
    "meaning": "bowl",
    "onyomi": "はち",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "闇": {
    "level": 48,
    "character": "闇",
    "meaning": "darkness",
    "onyomi": "あん, おん",
    "kunyomi": "やみ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "隙": {
    "level": 48,
    "character": "隙",
    "meaning": "crevice",
    "onyomi": "げき",
    "kunyomi": "すき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "飢": {
    "level": 48,
    "character": "飢",
    "meaning": "starve",
    "onyomi": "き",
    "kunyomi": "う",
    "important_reading": "onyomi",
    "nanori": null
  },
  "餓": {
    "level": 48,
    "character": "餓",
    "meaning": "starve",
    "onyomi": "が",
    "kunyomi": "う",
    "important_reading": "onyomi",
    "nanori": null
  },
  "畜": {
    "level": 48,
    "character": "畜",
    "meaning": "livestock",
    "onyomi": "ちく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "迅": {
    "level": 48,
    "character": "迅",
    "meaning": "swift",
    "onyomi": "じん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "蓄": {
    "level": 48,
    "character": "蓄",
    "meaning": "amass",
    "onyomi": "ちく",
    "kunyomi": "たくわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "尽": {
    "level": 48,
    "character": "尽",
    "meaning": "exhaust",
    "onyomi": "じん",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "彩": {
    "level": 48,
    "character": "彩",
    "meaning": "coloring, colouring",
    "onyomi": "さい",
    "kunyomi": "いろど",
    "important_reading": "onyomi",
    "nanori": "あや"
  },
  "憶": {
    "level": 48,
    "character": "憶",
    "meaning": "recollection",
    "onyomi": "おく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "溶": {
    "level": 48,
    "character": "溶",
    "meaning": "melt",
    "onyomi": "よう",
    "kunyomi": "と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "耐": {
    "level": 48,
    "character": "耐",
    "meaning": "resistant",
    "onyomi": "たい",
    "kunyomi": "た",
    "important_reading": "onyomi",
    "nanori": null
  },
  "踊": {
    "level": 48,
    "character": "踊",
    "meaning": "dance",
    "onyomi": "よう",
    "kunyomi": "おど",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "賢": {
    "level": 48,
    "character": "賢",
    "meaning": "clever",
    "onyomi": "けん",
    "kunyomi": "かしこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "輝": {
    "level": 48,
    "character": "輝",
    "meaning": "radiance",
    "onyomi": "き",
    "kunyomi": "かがやき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "灯": {
    "level": 48,
    "character": "灯",
    "meaning": "lamp",
    "onyomi": "とう",
    "kunyomi": "あかり, とも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "脅": {
    "level": 48,
    "character": "脅",
    "meaning": "threaten",
    "onyomi": "きょう",
    "kunyomi": "おど, おびや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "麻": {
    "level": 48,
    "character": "麻",
    "meaning": "hemp",
    "onyomi": "ま",
    "kunyomi": "あさ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "咲": {
    "level": 48,
    "character": "咲",
    "meaning": "blossom",
    "onyomi": "しょう",
    "kunyomi": "さ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "培": {
    "level": 48,
    "character": "培",
    "meaning": "cultivate",
    "onyomi": "ばい",
    "kunyomi": "つちか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "悔": {
    "level": 48,
    "character": "悔",
    "meaning": "regret",
    "onyomi": "かい",
    "kunyomi": "くや, く",
    "important_reading": "onyomi",
    "nanori": null
  },
  "脇": {
    "level": 48,
    "character": "脇",
    "meaning": "armpit",
    "onyomi": "きょう",
    "kunyomi": "わき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "遂": {
    "level": 48,
    "character": "遂",
    "meaning": "accomplish",
    "onyomi": "すい",
    "kunyomi": "と, つい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "班": {
    "level": 48,
    "character": "班",
    "meaning": "squad",
    "onyomi": "はん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "塗": {
    "level": 48,
    "character": "塗",
    "meaning": "paint",
    "onyomi": "と",
    "kunyomi": "ぬ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "斜": {
    "level": 48,
    "character": "斜",
    "meaning": "diagonal",
    "onyomi": "しゃ",
    "kunyomi": "なな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "殴": {
    "level": 48,
    "character": "殴",
    "meaning": "assault",
    "onyomi": "おう",
    "kunyomi": "なぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "盾": {
    "level": 48,
    "character": "盾",
    "meaning": "shield",
    "onyomi": "じゅん",
    "kunyomi": "たて",
    "important_reading": "onyomi",
    "nanori": null
  },
  "穫": {
    "level": 48,
    "character": "穫",
    "meaning": "harvest",
    "onyomi": "かく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鶴": {
    "level": 49,
    "character": "鶴",
    "meaning": "crane",
    "onyomi": "かく",
    "kunyomi": "つる",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "淡": {
    "level": 49,
    "character": "淡",
    "meaning": "faint",
    "onyomi": "たん",
    "kunyomi": "あわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "駒": {
    "level": 49,
    "character": "駒",
    "meaning": "chess piece",
    "onyomi": "く",
    "kunyomi": "こま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "紫": {
    "level": 49,
    "character": "紫",
    "meaning": "purple",
    "onyomi": "し",
    "kunyomi": "むらさき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "抽": {
    "level": 49,
    "character": "抽",
    "meaning": "pluck",
    "onyomi": "ちゅう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "誓": {
    "level": 49,
    "character": "誓",
    "meaning": "vow",
    "onyomi": "せい",
    "kunyomi": "ちか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "悟": {
    "level": 49,
    "character": "悟",
    "meaning": "comprehension",
    "onyomi": "ご",
    "kunyomi": "さと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "拓": {
    "level": 49,
    "character": "拓",
    "meaning": "cultivation",
    "onyomi": "たく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "拘": {
    "level": 49,
    "character": "拘",
    "meaning": "arrest",
    "onyomi": "こう",
    "kunyomi": "かか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "礎": {
    "level": 49,
    "character": "礎",
    "meaning": "foundation",
    "onyomi": "そ",
    "kunyomi": "いしずえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "刈": {
    "level": 49,
    "character": "刈",
    "meaning": "prune",
    "onyomi": "None",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "剛": {
    "level": 49,
    "character": "剛",
    "meaning": "sturdy",
    "onyomi": "ごう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "唯": {
    "level": 49,
    "character": "唯",
    "meaning": "solely",
    "onyomi": "ゆい",
    "kunyomi": "ただ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "壇": {
    "level": 49,
    "character": "壇",
    "meaning": "podium",
    "onyomi": "だん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "尼": {
    "level": 49,
    "character": "尼",
    "meaning": "nun",
    "onyomi": "に",
    "kunyomi": "あま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "概": {
    "level": 49,
    "character": "概",
    "meaning": "approximation",
    "onyomi": "がい",
    "kunyomi": "おおむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "浸": {
    "level": 49,
    "character": "浸",
    "meaning": "immersed",
    "onyomi": "しん",
    "kunyomi": "ひた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "煮": {
    "level": 49,
    "character": "煮",
    "meaning": "boil",
    "onyomi": "しゃ",
    "kunyomi": "に",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "覆": {
    "level": 49,
    "character": "覆",
    "meaning": "capsize, cover",
    "onyomi": "ふく",
    "kunyomi": "おお, くつがえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "謀": {
    "level": 49,
    "character": "謀",
    "meaning": "conspire",
    "onyomi": "ぼう",
    "kunyomi": "はか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "陶": {
    "level": 49,
    "character": "陶",
    "meaning": "pottery",
    "onyomi": "とう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "隔": {
    "level": 49,
    "character": "隔",
    "meaning": "isolate",
    "onyomi": "かく",
    "kunyomi": "へだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "征": {
    "level": 49,
    "character": "征",
    "meaning": "subjugate",
    "onyomi": "せい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "俗": {
    "level": 49,
    "character": "俗",
    "meaning": "vulgar",
    "onyomi": "ぞく",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "陛": {
    "level": 49,
    "character": "陛",
    "meaning": "highness",
    "onyomi": "へい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "桑": {
    "level": 49,
    "character": "桑",
    "meaning": "mulberry",
    "onyomi": "そう",
    "kunyomi": "くわ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "潤": {
    "level": 49,
    "character": "潤",
    "meaning": "watered",
    "onyomi": "じゅん",
    "kunyomi": "うるお, うる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "珠": {
    "level": 49,
    "character": "珠",
    "meaning": "pearl",
    "onyomi": "しゅ",
    "kunyomi": "たま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "衰": {
    "level": 49,
    "character": "衰",
    "meaning": "decline",
    "onyomi": "すい",
    "kunyomi": "おとろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "奨": {
    "level": 49,
    "character": "奨",
    "meaning": "encourage",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "劣": {
    "level": 49,
    "character": "劣",
    "meaning": "inferiority",
    "onyomi": "れつ",
    "kunyomi": "おと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "勘": {
    "level": 49,
    "character": "勘",
    "meaning": "intuition",
    "onyomi": "かん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "妃": {
    "level": 49,
    "character": "妃",
    "meaning": "princess, queen",
    "onyomi": "ひ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "邪": {
    "level": 50,
    "character": "邪",
    "meaning": "wicked",
    "onyomi": "じゃ",
    "kunyomi": "よこし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "駄": {
    "level": 50,
    "character": "駄",
    "meaning": "burdensome",
    "onyomi": "だ, た",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "廷": {
    "level": 50,
    "character": "廷",
    "meaning": "courts",
    "onyomi": "てい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "墳": {
    "level": 50,
    "character": "墳",
    "meaning": "tomb",
    "onyomi": "ふん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "訂": {
    "level": 50,
    "character": "訂",
    "meaning": "revise",
    "onyomi": "てい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "壮": {
    "level": 50,
    "character": "壮",
    "meaning": "robust",
    "onyomi": "そう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "搬": {
    "level": 50,
    "character": "搬",
    "meaning": "transport",
    "onyomi": "はん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "漂": {
    "level": 50,
    "character": "漂",
    "meaning": "drift",
    "onyomi": "ひょう",
    "kunyomi": "ただよ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鰐": {
    "level": 50,
    "character": "鰐",
    "meaning": "alligator",
    "onyomi": "None",
    "kunyomi": "わに",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "蟹": {
    "level": 50,
    "character": "蟹",
    "meaning": "crab",
    "onyomi": "None",
    "kunyomi": "かに",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "簿": {
    "level": 50,
    "character": "簿",
    "meaning": "record book",
    "onyomi": "ぼ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "晶": {
    "level": 50,
    "character": "晶",
    "meaning": "crystal",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "軌": {
    "level": 50,
    "character": "軌",
    "meaning": "rut",
    "onyomi": "き",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "涯": {
    "level": 50,
    "character": "涯",
    "meaning": "horizon",
    "onyomi": "がい",
    "kunyomi": "はて",
    "important_reading": "onyomi",
    "nanori": null
  },
  "峰": {
    "level": 50,
    "character": "峰",
    "meaning": "summit",
    "onyomi": "ほう",
    "kunyomi": "みね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "巧": {
    "level": 50,
    "character": "巧",
    "meaning": "adept",
    "onyomi": "こう",
    "kunyomi": "うま, たく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "唐": {
    "level": 50,
    "character": "唐",
    "meaning": "china, sudden",
    "onyomi": "とう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鬱": {
    "level": 50,
    "character": "鬱",
    "meaning": "gloom",
    "onyomi": "うつ",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "彰": {
    "level": 50,
    "character": "彰",
    "meaning": "patent",
    "onyomi": "しょう",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "漫": {
    "level": 50,
    "character": "漫",
    "meaning": "manga",
    "onyomi": "まん",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "諮": {
    "level": 50,
    "character": "諮",
    "meaning": "consult",
    "onyomi": "し",
    "kunyomi": "はか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "銘": {
    "level": 50,
    "character": "銘",
    "meaning": "inscription",
    "onyomi": "めい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "堰": {
    "level": 50,
    "character": "堰",
    "meaning": "dam",
    "onyomi": "せき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "堤": {
    "level": 50,
    "character": "堤",
    "meaning": "embankment",
    "onyomi": "てい",
    "kunyomi": "つつみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "翻": {
    "level": 50,
    "character": "翻",
    "meaning": "flip",
    "onyomi": "ほん",
    "kunyomi": "ひるがえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "后": {
    "level": 50,
    "character": "后",
    "meaning": "empress",
    "onyomi": "こう, ご",
    "kunyomi": "きさき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "奮": {
    "level": 50,
    "character": "奮",
    "meaning": "stirred up",
    "onyomi": "ふん",
    "kunyomi": "ふる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "亭": {
    "level": 50,
    "character": "亭",
    "meaning": "restaurant",
    "onyomi": "てい",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "仰": {
    "level": 50,
    "character": "仰",
    "meaning": "look up to",
    "onyomi": "ぎょう, こう",
    "kunyomi": "あお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "伯": {
    "level": 50,
    "character": "伯",
    "meaning": "chief",
    "onyomi": "はく, お",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "偶": {
    "level": 50,
    "character": "偶",
    "meaning": "accidentally",
    "onyomi": "ぐう",
    "kunyomi": "たま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "淀": {
    "level": 50,
    "character": "淀",
    "meaning": "eddy",
    "onyomi": "None",
    "kunyomi": "よど",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "把": {
    "level": 50,
    "character": "把",
    "meaning": "bundle, grasp",
    "onyomi": "わ, は",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "洞": {
    "level": 50,
    "character": "洞",
    "meaning": "cave",
    "onyomi": "どう",
    "kunyomi": "ほら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "疫": {
    "level": 50,
    "character": "疫",
    "meaning": "epidemic",
    "onyomi": "えき",
    "kunyomi": "None",
    "important_reading": "onyomi",
    "nanori": null
  },
  "軒": {
    "level": 51,
    "character": "軒",
    "meaning": "house counter",
    "onyomi": "けん",
    "kunyomi": "のき        ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "媛": {
    "level": 51,
    "character": "媛",
    "meaning": "princess, beautiful woman",
    "onyomi": "えん",
    "kunyomi": "ひめ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "玄": {
    "level": 51,
    "character": "玄",
    "meaning": "mysterious",
    "onyomi": "げん",
    "kunyomi": "くろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "偉": {
    "level": 51,
    "character": "偉",
    "meaning": "greatness",
    "onyomi": "い",
    "kunyomi": "えら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "頂": {
    "level": 51,
    "character": "頂",
    "meaning": "summit, humbly",
    "onyomi": "ちょう",
    "kunyomi": "いただき, いただ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "召": {
    "level": 51,
    "character": "召",
    "meaning": "call, eat",
    "onyomi": "しょう",
    "kunyomi": "め",
    "important_reading": "onyomi",
    "nanori": null
  },
  "挟": {
    "level": 51,
    "character": "挟",
    "meaning": "between",
    "onyomi": "きょう, しょう",
    "kunyomi": "はさ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "枯": {
    "level": 51,
    "character": "枯",
    "meaning": "wither",
    "onyomi": "こ",
    "kunyomi": "か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "沸": {
    "level": 51,
    "character": "沸",
    "meaning": "boil",
    "onyomi": "ふつ",
    "kunyomi": "わ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "濯": {
    "level": 51,
    "character": "濯",
    "meaning": "wash",
    "onyomi": "たく",
    "kunyomi": "すす, ゆす, そそぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "燥": {
    "level": 51,
    "character": "燥",
    "meaning": "dry up",
    "onyomi": "そう",
    "kunyomi": "はしゃ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "瓶": {
    "level": 51,
    "character": "瓶",
    "meaning": "bottle",
    "onyomi": "びん",
    "kunyomi": "かめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "耕": {
    "level": 51,
    "character": "耕",
    "meaning": "plow",
    "onyomi": "こう",
    "kunyomi": "たがや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "肯": {
    "level": 51,
    "character": "肯",
    "meaning": "agreement, consent",
    "onyomi": "こう",
    "kunyomi": "がえんじ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "脂": {
    "level": 51,
    "character": "脂",
    "meaning": "fat",
    "onyomi": "し",
    "kunyomi": "あぶら        ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "膚": {
    "level": 51,
    "character": "膚",
    "meaning": "skin",
    "onyomi": "ふ",
    "kunyomi": "はだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "軟": {
    "level": 51,
    "character": "軟",
    "meaning": "soft",
    "onyomi": "なん",
    "kunyomi": "やわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "郊": {
    "level": 51,
    "character": "郊",
    "meaning": "suburbs",
    "onyomi": "こう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "隅": {
    "level": 51,
    "character": "隅",
    "meaning": "corner",
    "onyomi": "ぐう",
    "kunyomi": "すみ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "隻": {
    "level": 51,
    "character": "隻",
    "meaning": "ship counter",
    "onyomi": "せき",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "邸": {
    "level": 51,
    "character": "邸",
    "meaning": "residence",
    "onyomi": "てい",
    "kunyomi": "やしき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "郡": {
    "level": 51,
    "character": "郡",
    "meaning": "county, district",
    "onyomi": "ぐん",
    "kunyomi": "こおり        ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "渦": {
    "level": 51,
    "character": "渦",
    "meaning": "whirlpool",
    "onyomi": "か",
    "kunyomi": "うず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "釈": {
    "level": 51,
    "character": "釈",
    "meaning": "explanation",
    "onyomi": "しゃく, せき",
    "kunyomi": "す, とく, ゆる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "肪": {
    "level": 51,
    "character": "肪",
    "meaning": "obese, fat",
    "onyomi": "ぼう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "喚": {
    "level": 51,
    "character": "喚",
    "meaning": "scream, yell",
    "onyomi": "かん",
    "kunyomi": "わめ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "貞": {
    "level": 51,
    "character": "貞",
    "meaning": "chastity",
    "onyomi": "てい",
    "kunyomi": "さだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "苗": {
    "level": 51,
    "character": "苗",
    "meaning": "seedling, sapling",
    "onyomi": "みょう, びょう",
    "kunyomi": "なえ, なわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "慈": {
    "level": 51,
    "character": "慈",
    "meaning": "mercy",
    "onyomi": "じ",
    "kunyomi": "いつく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "襟": {
    "level": 51,
    "character": "襟",
    "meaning": "collar",
    "onyomi": "きん",
    "kunyomi": "えり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "蓮": {
    "level": 51,
    "character": "蓮",
    "meaning": "lotus",
    "onyomi": "れん",
    "kunyomi": "はす, はちす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "亮": {
    "level": 51,
    "character": "亮",
    "meaning": "clear",
    "onyomi": "りょう",
    "kunyomi": "あきらか        ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "聡": {
    "level": 51,
    "character": "聡",
    "meaning": "wise",
    "onyomi": "そう",
    "kunyomi": "さと, みみざと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "浦": {
    "level": 51,
    "character": "浦",
    "meaning": "bay",
    "onyomi": "ほ",
    "kunyomi": "うら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "塚": {
    "level": 51,
    "character": "塚",
    "meaning": "mound",
    "onyomi": "ちょう",
    "kunyomi": "つか",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "遇": {
    "level": 52,
    "character": "遇",
    "meaning": "treatment",
    "onyomi": "ぐう",
    "kunyomi": "あ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "陥": {
    "level": 52,
    "character": "陥",
    "meaning": "cave in",
    "onyomi": "かん",
    "kunyomi": "おちい, おとしい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "貫": {
    "level": 52,
    "character": "貫",
    "meaning": "pierce, sushi counter",
    "onyomi": "かん",
    "kunyomi": "つらぬ, ぬき, ぬ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "覇": {
    "level": 52,
    "character": "覇",
    "meaning": "leadership",
    "onyomi": "は, はく",
    "kunyomi": "はたがしら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "呂": {
    "level": 52,
    "character": "呂",
    "meaning": "bath",
    "onyomi": "ろ, りょ",
    "kunyomi": "せぼね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "茨": {
    "level": 52,
    "character": "茨",
    "meaning": "briar, thorn",
    "onyomi": "し, じ",
    "kunyomi": "いばら",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "擁": {
    "level": 52,
    "character": "擁",
    "meaning": "embrace",
    "onyomi": "よう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "孤": {
    "level": 52,
    "character": "孤",
    "meaning": "orphan, alone",
    "onyomi": "こ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "賠": {
    "level": 52,
    "character": "賠",
    "meaning": "compensation, compensate",
    "onyomi": "ばい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "鎖": {
    "level": 52,
    "character": "鎖",
    "meaning": "chain",
    "onyomi": "さ",
    "kunyomi": "くさり, とざ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "噴": {
    "level": 52,
    "character": "噴",
    "meaning": "erupt",
    "onyomi": "ふん",
    "kunyomi": "ふ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "祥": {
    "level": 52,
    "character": "祥",
    "meaning": "auspicious",
    "onyomi": "しょう",
    "kunyomi": "きざ, さいわ, つまび, よ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "牲": {
    "level": 52,
    "character": "牲",
    "meaning": "offering",
    "onyomi": "せい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "秩": {
    "level": 52,
    "character": "秩",
    "meaning": "order, regularity",
    "onyomi": "ちつ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "唆": {
    "level": 52,
    "character": "唆",
    "meaning": "instigate",
    "onyomi": "さ",
    "kunyomi": "そそのか, そそ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "膨": {
    "level": 52,
    "character": "膨",
    "meaning": "swell",
    "onyomi": "ぼう",
    "kunyomi": "ふく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "芳": {
    "level": 52,
    "character": "芳",
    "meaning": "perfume",
    "onyomi": "ほう",
    "kunyomi": "かんば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "恒": {
    "level": 52,
    "character": "恒",
    "meaning": "constant, always",
    "onyomi": "こう",
    "kunyomi": "つね, つねに",
    "important_reading": "onyomi",
    "nanori": null
  },
  "倫": {
    "level": 52,
    "character": "倫",
    "meaning": "ethics",
    "onyomi": "りん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "陳": {
    "level": 52,
    "character": "陳",
    "meaning": "exhibit",
    "onyomi": "ちん",
    "kunyomi": "ひ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "須": {
    "level": 52,
    "character": "須",
    "meaning": "necessary",
    "onyomi": "す, しゅ",
    "kunyomi": "すべから, すべし, ひげ, まつ, もち, もと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "偏": {
    "level": 52,
    "character": "偏",
    "meaning": "biased",
    "onyomi": "へん",
    "kunyomi": "かたよ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "糧": {
    "level": 52,
    "character": "糧",
    "meaning": "provisions",
    "onyomi": "りょう, ろう",
    "kunyomi": "かて",
    "important_reading": "onyomi",
    "nanori": null
  },
  "殊": {
    "level": 52,
    "character": "殊",
    "meaning": "especially",
    "onyomi": "しゅ",
    "kunyomi": "こと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "慢": {
    "level": 52,
    "character": "慢",
    "meaning": "ridicule, laziness",
    "onyomi": "まん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "没": {
    "level": 52,
    "character": "没",
    "meaning": "die",
    "onyomi": "ぼつ, もつ",
    "kunyomi": "おぼ, しず, ない",
    "important_reading": "onyomi",
    "nanori": null
  },
  "怠": {
    "level": 52,
    "character": "怠",
    "meaning": "lazy, neglect",
    "onyomi": "たい",
    "kunyomi": "おこた, なま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "遭": {
    "level": 52,
    "character": "遭",
    "meaning": "encounter, meet",
    "onyomi": "そう",
    "kunyomi": "あ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "惰": {
    "level": 52,
    "character": "惰",
    "meaning": "lazy",
    "onyomi": "だ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "猟": {
    "level": 52,
    "character": "猟",
    "meaning": "hunting",
    "onyomi": "りょう, れふ",
    "kunyomi": "かり, か",
    "important_reading": "onyomi",
    "nanori": null
  },
  "乃": {
    "level": 52,
    "character": "乃",
    "meaning": "from",
    "onyomi": "ない",
    "kunyomi": "すなわ, なんじ, の",
    "important_reading": "onyomi",
    "nanori": null
  },
  "綾": {
    "level": 52,
    "character": "綾",
    "meaning": "design",
    "onyomi": "りん",
    "kunyomi": "あや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "颯": {
    "level": 52,
    "character": "颯",
    "meaning": "quick, sudden",
    "onyomi": "さつ, そう",
    "kunyomi": "さっ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "隼": {
    "level": 52,
    "character": "隼",
    "meaning": "falcon",
    "onyomi": "しゅん, じゅん",
    "kunyomi": "はやぶさ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "輔": {
    "level": 52,
    "character": "輔",
    "meaning": "help",
    "onyomi": "ふ, ほ",
    "kunyomi": "たす",
    "important_reading": "nanori",
    "nanori": "すけ"
  },
  "准": {
    "level": 53,
    "character": "准",
    "meaning": "semi",
    "onyomi": "じゅん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "寛": {
    "level": 53,
    "character": "寛",
    "meaning": "tolerance",
    "onyomi": "かん",
    "kunyomi": "くつろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "胞": {
    "level": 53,
    "character": "胞",
    "meaning": "cell, placenta",
    "onyomi": "ほう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "浄": {
    "level": 53,
    "character": "浄",
    "meaning": "cleanse, purify",
    "onyomi": "じょう, せい",
    "kunyomi": "きよ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "随": {
    "level": 53,
    "character": "随",
    "meaning": "all",
    "onyomi": "ずい",
    "kunyomi": "したが, まにま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "稿": {
    "level": 53,
    "character": "稿",
    "meaning": "draft",
    "onyomi": "こう",
    "kunyomi": "したがき, わら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "丹": {
    "level": 53,
    "character": "丹",
    "meaning": "rust colored, red",
    "onyomi": "たん",
    "kunyomi": "に",
    "important_reading": "onyomi",
    "nanori": null
  },
  "壌": {
    "level": 53,
    "character": "壌",
    "meaning": "soil, earth",
    "onyomi": "じょう",
    "kunyomi": "つち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "舗": {
    "level": 53,
    "character": "舗",
    "meaning": "shop, store",
    "onyomi": "ほ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "騰": {
    "level": 53,
    "character": "騰",
    "meaning": "inflation",
    "onyomi": "とう",
    "kunyomi": "あが, のぼ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "緯": {
    "level": 53,
    "character": "緯",
    "meaning": "latitude",
    "onyomi": "い",
    "kunyomi": "ぬき, よこいと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "艇": {
    "level": 53,
    "character": "艇",
    "meaning": "rowboat",
    "onyomi": "てい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "披": {
    "level": 53,
    "character": "披",
    "meaning": "expose",
    "onyomi": "ひ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "錦": {
    "level": 53,
    "character": "錦",
    "meaning": "brocade",
    "onyomi": "きん",
    "kunyomi": "にしき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "剰": {
    "level": 53,
    "character": "剰",
    "meaning": "surplus",
    "onyomi": "じょう",
    "kunyomi": "あまつさえ, あま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "繊": {
    "level": 53,
    "character": "繊",
    "meaning": "fiber, slender",
    "onyomi": "せん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "諭": {
    "level": 53,
    "character": "諭",
    "meaning": "admonish",
    "onyomi": "ゆ",
    "kunyomi": "さと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "惨": {
    "level": 53,
    "character": "惨",
    "meaning": "disaster",
    "onyomi": "さん, ざん",
    "kunyomi": "みじ, いた, むご",
    "important_reading": "onyomi",
    "nanori": null
  },
  "虐": {
    "level": 53,
    "character": "虐",
    "meaning": "oppress",
    "onyomi": "ぎゃく",
    "kunyomi": "しいた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "据": {
    "level": 53,
    "character": "据",
    "meaning": "install",
    "onyomi": "きょ",
    "kunyomi": "す",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "徐": {
    "level": 53,
    "character": "徐",
    "meaning": "gently, gentle",
    "onyomi": "じょ",
    "kunyomi": "おもむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "搭": {
    "level": 53,
    "character": "搭",
    "meaning": "board, embark",
    "onyomi": "とう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "蒙": {
    "level": 53,
    "character": "蒙",
    "meaning": "darkness",
    "onyomi": "もう, ぼう",
    "kunyomi": "おお, くら, こうむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "瓜": {
    "level": 53,
    "character": "瓜",
    "meaning": "melon",
    "onyomi": "か, け",
    "kunyomi": "うり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鯉": {
    "level": 53,
    "character": "鯉",
    "meaning": "carp, koi",
    "onyomi": "り",
    "kunyomi": "こい",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "戴": {
    "level": 53,
    "character": "戴",
    "meaning": "receive",
    "onyomi": "たい",
    "kunyomi": "いただ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "緋": {
    "level": 53,
    "character": "緋",
    "meaning": "scarlet",
    "onyomi": "ひ",
    "kunyomi": "あか, あけ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "曙": {
    "level": 53,
    "character": "曙",
    "meaning": "dawn",
    "onyomi": "しょ",
    "kunyomi": "あけぼの",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "胡": {
    "level": 53,
    "character": "胡",
    "meaning": "barbarian",
    "onyomi": "こ, う, ご",
    "kunyomi": "なんぞ",
    "important_reading": "onyomi",
    "nanori": "きゅう"
  },
  "帥": {
    "level": 53,
    "character": "帥",
    "meaning": "commander",
    "onyomi": "すい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "啓": {
    "level": 53,
    "character": "啓",
    "meaning": "enlighten",
    "onyomi": "けい",
    "kunyomi": "さと, ひら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "葵": {
    "level": 53,
    "character": "葵",
    "meaning": "hollyhock",
    "onyomi": "き",
    "kunyomi": "あおい",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "駿": {
    "level": 53,
    "character": "駿",
    "meaning": "speed",
    "onyomi": "しゅん, すん",
    "kunyomi": "すぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "諒": {
    "level": 53,
    "character": "諒",
    "meaning": "comprehend, reality",
    "onyomi": "りょう",
    "kunyomi": "あきら, まことに",
    "important_reading": "onyomi",
    "nanori": null
  },
  "莉": {
    "level": 53,
    "character": "莉",
    "meaning": "jasmine",
    "onyomi": "り, れい, らい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "庶": {
    "level": 54,
    "character": "庶",
    "meaning": "all, bastard",
    "onyomi": "しょ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "鯨": {
    "level": 54,
    "character": "鯨",
    "meaning": "whale",
    "onyomi": "げい",
    "kunyomi": "くじら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "荘": {
    "level": 54,
    "character": "荘",
    "meaning": "villa",
    "onyomi": "そう, しょう, ちゃん",
    "kunyomi": "あごそ, ほうき",
    "important_reading": "onyomi",
    "nanori": null
  },
  "栽": {
    "level": 54,
    "character": "栽",
    "meaning": "planting",
    "onyomi": "さい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "拐": {
    "level": 54,
    "character": "拐",
    "meaning": "kidnap",
    "onyomi": "かい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "冠": {
    "level": 54,
    "character": "冠",
    "meaning": "crown, cap",
    "onyomi": "かん",
    "kunyomi": "かんむり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "勲": {
    "level": 54,
    "character": "勲",
    "meaning": "merit",
    "onyomi": "くん",
    "kunyomi": "いさお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "酬": {
    "level": 54,
    "character": "酬",
    "meaning": "repay",
    "onyomi": "しゅう, しゅ, とう",
    "kunyomi": "むく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "紋": {
    "level": 54,
    "character": "紋",
    "meaning": "family crest",
    "onyomi": "もん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "欄": {
    "level": 54,
    "character": "欄",
    "meaning": "column, space",
    "onyomi": "らん",
    "kunyomi": "てすり        ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "卸": {
    "level": 54,
    "character": "卸",
    "meaning": "wholesale",
    "onyomi": "しゃ",
    "kunyomi": "おろし, おろ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "逸": {
    "level": 54,
    "character": "逸",
    "meaning": "deviate, elude",
    "onyomi": "いつ",
    "kunyomi": "そ, はぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "尚": {
    "level": 54,
    "character": "尚",
    "meaning": "furthermore, esteem",
    "onyomi": "しょう",
    "kunyomi": "なお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "顕": {
    "level": 54,
    "character": "顕",
    "meaning": "appear, existing",
    "onyomi": "けん",
    "kunyomi": "あきらか, あらわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "粛": {
    "level": 54,
    "character": "粛",
    "meaning": "solemn",
    "onyomi": "しゅく, すく",
    "kunyomi": "つつし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "愚": {
    "level": 54,
    "character": "愚",
    "meaning": "foolish",
    "onyomi": "ぐ",
    "kunyomi": "おろ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "践": {
    "level": 54,
    "character": "践",
    "meaning": "practice, trample",
    "onyomi": "せん",
    "kunyomi": "ふ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "呈": {
    "level": 54,
    "character": "呈",
    "meaning": "present, display",
    "onyomi": "てい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "疎": {
    "level": 54,
    "character": "疎",
    "meaning": "neglect, sparse",
    "onyomi": "そ, しょ",
    "kunyomi": "うと, まば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "疾": {
    "level": 54,
    "character": "疾",
    "meaning": "rapid",
    "onyomi": "しつ",
    "kunyomi": "はや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "謡": {
    "level": 54,
    "character": "謡",
    "meaning": "noh chanting, noh chant",
    "onyomi": "よう",
    "kunyomi": "うた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鎌": {
    "level": 54,
    "character": "鎌",
    "meaning": "sickle, scythe",
    "onyomi": "けん, れん",
    "kunyomi": "かま",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "酷": {
    "level": 54,
    "character": "酷",
    "meaning": "cruel, unjust",
    "onyomi": "こく",
    "kunyomi": "ひど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "叙": {
    "level": 54,
    "character": "叙",
    "meaning": "describe",
    "onyomi": "じょ",
    "kunyomi": "つい, ついで",
    "important_reading": "onyomi",
    "nanori": null
  },
  "且": {
    "level": 54,
    "character": "且",
    "meaning": "also",
    "onyomi": "しょ, しょう, そ",
    "kunyomi": "か",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "痴": {
    "level": 54,
    "character": "痴",
    "meaning": "stupid",
    "onyomi": "ち",
    "kunyomi": "おろか, し",
    "important_reading": "onyomi",
    "nanori": null
  },
  "呆": {
    "level": 54,
    "character": "呆",
    "meaning": "shock",
    "onyomi": "ほう",
    "kunyomi": "あき, おろか, ほけ, ぼ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "哺": {
    "level": 54,
    "character": "哺",
    "meaning": "nurse, suckle",
    "onyomi": "ほ",
    "kunyomi": "ほぐく, ふく",
    "important_reading": "onyomi",
    "nanori": null
  },
  "傲": {
    "level": 54,
    "character": "傲",
    "meaning": "proud",
    "onyomi": "ごう",
    "kunyomi": "あなど, おご",
    "important_reading": "onyomi",
    "nanori": null
  },
  "悠": {
    "level": 54,
    "character": "悠",
    "meaning": "leisure",
    "onyomi": "ゆう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "茎": {
    "level": 54,
    "character": "茎",
    "meaning": "stem",
    "onyomi": "きょう, けい",
    "kunyomi": "くき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "阿": {
    "level": 54,
    "character": "阿",
    "meaning": "flatter",
    "onyomi": "あ, お",
    "kunyomi": "おもね, くま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "杏": {
    "level": 54,
    "character": "杏",
    "meaning": "apricot",
    "onyomi": "あん, きょう, こう",
    "kunyomi": "あんず",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "茜": {
    "level": 54,
    "character": "茜",
    "meaning": "red dye",
    "onyomi": "せん",
    "kunyomi": "あかね",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "栞": {
    "level": 54,
    "character": "栞",
    "meaning": "bookmark",
    "onyomi": "かん",
    "kunyomi": "しおり",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "伏": {
    "level": 55,
    "character": "伏",
    "meaning": "bow, lay",
    "onyomi": "ふく",
    "kunyomi": "ふ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鎮": {
    "level": 55,
    "character": "鎮",
    "meaning": "tranquilize",
    "onyomi": "ちん",
    "kunyomi": "おさえ, しず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "奉": {
    "level": 55,
    "character": "奉",
    "meaning": "dedicate",
    "onyomi": "ほう, ぶ",
    "kunyomi": "たてまつ, ほう, まつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "憂": {
    "level": 55,
    "character": "憂",
    "meaning": "grief",
    "onyomi": "ゆう",
    "kunyomi": "う, うれ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "朴": {
    "level": 55,
    "character": "朴",
    "meaning": "simple, crude",
    "onyomi": "ぼく",
    "kunyomi": "えのき, ほう, ほお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "栃": {
    "level": 55,
    "character": "栃",
    "meaning": "horse chestnut",
    "onyomi": null,
    "kunyomi": "とち",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "惜": {
    "level": 55,
    "character": "惜",
    "meaning": "frugal",
    "onyomi": "せき",
    "kunyomi": "お",
    "important_reading": "onyomi",
    "nanori": null
  },
  "累": {
    "level": 55,
    "character": "累",
    "meaning": "accumulate",
    "onyomi": "るい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "佳": {
    "level": 55,
    "character": "佳",
    "meaning": "excellent, skilled",
    "onyomi": "か",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "悼": {
    "level": 55,
    "character": "悼",
    "meaning": "grieve, mourn",
    "onyomi": "とう",
    "kunyomi": "いた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "該": {
    "level": 55,
    "character": "該",
    "meaning": "the above, that specifically",
    "onyomi": "がい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "赴": {
    "level": 55,
    "character": "赴",
    "meaning": "proceed, move on",
    "onyomi": "ふ",
    "kunyomi": "おもむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "髄": {
    "level": 55,
    "character": "髄",
    "meaning": "marrow, bone marrow",
    "onyomi": "ずい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "傍": {
    "level": 55,
    "character": "傍",
    "meaning": "nearby, side",
    "onyomi": "ぼう",
    "kunyomi": "かたわ, わき, おか, はた, そば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "癒": {
    "level": 55,
    "character": "癒",
    "meaning": "healing, cure",
    "onyomi": "ゆ",
    "kunyomi": "い, いや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "郭": {
    "level": 55,
    "character": "郭",
    "meaning": "enclosure",
    "onyomi": "かく",
    "kunyomi": "くるわ        ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "尿": {
    "level": 55,
    "character": "尿",
    "meaning": "urine, pee",
    "onyomi": "にょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "賓": {
    "level": 55,
    "character": "賓",
    "meaning": "vip, guest",
    "onyomi": "ひん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "虜": {
    "level": 55,
    "character": "虜",
    "meaning": "captive",
    "onyomi": "りょ, ろ",
    "kunyomi": "とりく, とりこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "憾": {
    "level": 55,
    "character": "憾",
    "meaning": "remorse, regret",
    "onyomi": "かん",
    "kunyomi": "うら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "弥": {
    "level": 55,
    "character": "弥",
    "meaning": "increasing",
    "onyomi": "び, み",
    "kunyomi": "や",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "粗": {
    "level": 55,
    "character": "粗",
    "meaning": "coarse, rough",
    "onyomi": "そ",
    "kunyomi": "あら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "循": {
    "level": 55,
    "character": "循",
    "meaning": "circulation, sequential",
    "onyomi": "じゅん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "凝": {
    "level": 55,
    "character": "凝",
    "meaning": "congeal, freeze, absorbed in",
    "onyomi": "ぎょう",
    "kunyomi": "こ, こご",
    "important_reading": "onyomi",
    "nanori": null
  },
  "脊": {
    "level": 55,
    "character": "脊",
    "meaning": "stature, height",
    "onyomi": "せき",
    "kunyomi": "せ, せい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "昌": {
    "level": 55,
    "character": "昌",
    "meaning": "prosperous, prosperity",
    "onyomi": "しょう",
    "kunyomi": "さかん",
    "important_reading": "onyomi",
    "nanori": null
  },
  "旦": {
    "level": 55,
    "character": "旦",
    "meaning": "dawn",
    "onyomi": "たん, だん",
    "kunyomi": "あきら, あき, あさ, あした, ただし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "愉": {
    "level": 55,
    "character": "愉",
    "meaning": "pleasant",
    "onyomi": "ゆ",
    "kunyomi": "たの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "抹": {
    "level": 55,
    "character": "抹",
    "meaning": "erase",
    "onyomi": "まつ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "栓": {
    "level": 55,
    "character": "栓",
    "meaning": "cork, plug",
    "onyomi": "せん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "之": {
    "level": 55,
    "character": "之",
    "meaning": "this",
    "onyomi": "し",
    "kunyomi": "これ, の",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "龍": {
    "level": 55,
    "character": "龍",
    "meaning": "imperial, dragon",
    "onyomi": "りゅう, りょう, ろう",
    "kunyomi": "たつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "遼": {
    "level": 55,
    "character": "遼",
    "meaning": "distant",
    "onyomi": "りょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "瑛": {
    "level": 55,
    "character": "瑛",
    "meaning": "crystal",
    "onyomi": "えい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "那": {
    "level": 55,
    "character": "那",
    "meaning": "what",
    "onyomi": "な, だ",
    "kunyomi": "いかん, なに, なんぞ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "庸": {
    "level": 56,
    "character": "庸",
    "meaning": "common",
    "onyomi": "よう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "拍": {
    "level": 56,
    "character": "拍",
    "meaning": "beat",
    "onyomi": "はく, ひょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "猶": {
    "level": 56,
    "character": "猶",
    "meaning": "still",
    "onyomi": "ゆう, ゆ",
    "kunyomi": "なお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "宰": {
    "level": 56,
    "character": "宰",
    "meaning": "manager",
    "onyomi": "さい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "寂": {
    "level": 56,
    "character": "寂",
    "meaning": "lonely",
    "onyomi": "じゃく, せき",
    "kunyomi": "さび, さみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "縫": {
    "level": 56,
    "character": "縫",
    "meaning": "sew",
    "onyomi": "ほう",
    "kunyomi": "ぬ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "呉": {
    "level": 56,
    "character": "呉",
    "meaning": "give, do for",
    "onyomi": "ご",
    "kunyomi": "くれ, く",
    "important_reading": "onyomi",
    "nanori": null
  },
  "凡": {
    "level": 56,
    "character": "凡",
    "meaning": "mediocre",
    "onyomi": "ぼん, はん",
    "kunyomi": "おうよ, およ, すべ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "恭": {
    "level": 56,
    "character": "恭",
    "meaning": "respect",
    "onyomi": "きょう",
    "kunyomi": "うやうや",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "錯": {
    "level": 56,
    "character": "錯",
    "meaning": "confused, mixed",
    "onyomi": "さく, しゃく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "穀": {
    "level": 56,
    "character": "穀",
    "meaning": "grain",
    "onyomi": "こく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "陵": {
    "level": 56,
    "character": "陵",
    "meaning": "mausoleum, tomb",
    "onyomi": "りょう",
    "kunyomi": "みささぎ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "弊": {
    "level": 56,
    "character": "弊",
    "meaning": "evil",
    "onyomi": "へい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "舶": {
    "level": 56,
    "character": "舶",
    "meaning": "ship",
    "onyomi": "はく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "窮": {
    "level": 56,
    "character": "窮",
    "meaning": "destitute",
    "onyomi": "きゅう, きょう",
    "kunyomi": "きわ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "悦": {
    "level": 56,
    "character": "悦",
    "meaning": "delight, joy",
    "onyomi": "えつ",
    "kunyomi": "よろこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "縛": {
    "level": 56,
    "character": "縛",
    "meaning": "bind, restrain",
    "onyomi": "ばく",
    "kunyomi": "しば",
    "important_reading": "onyomi",
    "nanori": null
  },
  "轄": {
    "level": 56,
    "character": "轄",
    "meaning": "control",
    "onyomi": "かつ",
    "kunyomi": "くさび",
    "important_reading": "onyomi",
    "nanori": null
  },
  "弦": {
    "level": 56,
    "character": "弦",
    "meaning": "chord, bowstring",
    "onyomi": "げん",
    "kunyomi": "つる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "窒": {
    "level": 56,
    "character": "窒",
    "meaning": "suffocate",
    "onyomi": "ちつ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "洪": {
    "level": 56,
    "character": "洪",
    "meaning": "flood",
    "onyomi": "こう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "摂": {
    "level": 56,
    "character": "摂",
    "meaning": "in addition",
    "onyomi": "せつ, しょう",
    "kunyomi": "おさ, かね, と",
    "important_reading": "onyomi",
    "nanori": null
  },
  "飽": {
    "level": 56,
    "character": "飽",
    "meaning": "bored, sated",
    "onyomi": "ほう",
    "kunyomi": "あ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "紳": {
    "level": 56,
    "character": "紳",
    "meaning": "gentleman",
    "onyomi": "しん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "靖": {
    "level": 56,
    "character": "靖",
    "meaning": "peaceful",
    "onyomi": "じょう, せい",
    "kunyomi": "やす",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "嘉": {
    "level": 56,
    "character": "嘉",
    "meaning": "esteem, praise",
    "onyomi": "か",
    "kunyomi": "よい, よみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "搾": {
    "level": 56,
    "character": "搾",
    "meaning": "squeeze",
    "onyomi": "さく",
    "kunyomi": "しぼ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "蝶": {
    "level": 56,
    "character": "蝶",
    "meaning": "butterfly",
    "onyomi": "ちょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "碑": {
    "level": 56,
    "character": "碑",
    "meaning": "tombstone",
    "onyomi": "ひ",
    "kunyomi": "いしぶみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "尉": {
    "level": 56,
    "character": "尉",
    "meaning": "military officer, military rank",
    "onyomi": "い, じょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "凛": {
    "level": 56,
    "character": "凛",
    "meaning": "cold",
    "onyomi": "りん",
    "kunyomi": "きびし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "匠": {
    "level": 56,
    "character": "匠",
    "meaning": "artisan",
    "onyomi": "しょう",
    "kunyomi": "たくみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "遥": {
    "level": 56,
    "character": "遥",
    "meaning": "far off, far away",
    "onyomi": "よう",
    "kunyomi": "はる",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "智": {
    "level": 56,
    "character": "智",
    "meaning": "wisdom",
    "onyomi": "ち",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": "とも"
  },
  "柴": {
    "level": 56,
    "character": "柴",
    "meaning": "brushwood, firewood",
    "onyomi": "さい, し",
    "kunyomi": "しば",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "瑠": {
    "level": 57,
    "character": "瑠",
    "meaning": "lapis lazuli",
    "onyomi": "る, りゅう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "敢": {
    "level": 57,
    "character": "敢",
    "meaning": "daring",
    "onyomi": "かん",
    "kunyomi": "あ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "楓": {
    "level": 57,
    "character": "楓",
    "meaning": "maple",
    "onyomi": "ふう",
    "kunyomi": "かえで",
    "important_reading": "onyomi",
    "nanori": null
  },
  "凹": {
    "level": 57,
    "character": "凹",
    "meaning": "concave, hollow",
    "onyomi": "おう",
    "kunyomi": "くぼ, へこ, ぼこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "凸": {
    "level": 57,
    "character": "凸",
    "meaning": "convex, uneven",
    "onyomi": "とつ",
    "kunyomi": "でこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "萌": {
    "level": 57,
    "character": "萌",
    "meaning": "sprout",
    "onyomi": "ほう",
    "kunyomi": "きざ, めばえ, も",
    "important_reading": "onyomi",
    "nanori": null
  },
  "烏": {
    "level": 57,
    "character": "烏",
    "meaning": "crow",
    "onyomi": "うお",
    "kunyomi": "からす",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "賊": {
    "level": 57,
    "character": "賊",
    "meaning": "robber",
    "onyomi": "ぞく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "鼓": {
    "level": 57,
    "character": "鼓",
    "meaning": "beat",
    "onyomi": "こ",
    "kunyomi": "つづみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "旋": {
    "level": 57,
    "character": "旋",
    "meaning": "rotation, revolution",
    "onyomi": "せん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "腸": {
    "level": 57,
    "character": "腸",
    "meaning": "intestines, guts",
    "onyomi": "ちょう",
    "kunyomi": "はらわた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "槽": {
    "level": 57,
    "character": "槽",
    "meaning": "tank, vat",
    "onyomi": "そう",
    "kunyomi": "ふね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "伐": {
    "level": 57,
    "character": "伐",
    "meaning": "fell, attack",
    "onyomi": "ばつ",
    "kunyomi": "う, き, そむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "堕": {
    "level": 57,
    "character": "堕",
    "meaning": "degenerate",
    "onyomi": "だ",
    "kunyomi": "お, くず",
    "important_reading": "onyomi",
    "nanori": null
  },
  "漬": {
    "level": 57,
    "character": "漬",
    "meaning": "pickle, soak",
    "onyomi": "し",
    "kunyomi": "つ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "坪": {
    "level": 57,
    "character": "坪",
    "meaning": "two mat area",
    "onyomi": "へい",
    "kunyomi": "つぼ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "紺": {
    "level": 57,
    "character": "紺",
    "meaning": "navy, dark blue",
    "onyomi": "こん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "羅": {
    "level": 57,
    "character": "羅",
    "meaning": "spread out, arrange",
    "onyomi": "ら",
    "kunyomi": "うすもの        ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "峡": {
    "level": 57,
    "character": "峡",
    "meaning": "ravine",
    "onyomi": "きょう, こう",
    "kunyomi": "はざま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "俸": {
    "level": 57,
    "character": "俸",
    "meaning": "salary",
    "onyomi": "ほう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "醸": {
    "level": 57,
    "character": "醸",
    "meaning": "brew",
    "onyomi": "じょう",
    "kunyomi": "かも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "弔": {
    "level": 57,
    "character": "弔",
    "meaning": "condolence, condolences",
    "onyomi": "ちょう",
    "kunyomi": "とぶら, とむら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "乙": {
    "level": 57,
    "character": "乙",
    "meaning": "latter, b",
    "onyomi": "おつ, いつ",
    "kunyomi": "おと, きのと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "遍": {
    "level": 57,
    "character": "遍",
    "meaning": "universal",
    "onyomi": "へん",
    "kunyomi": "あまね",
    "important_reading": "onyomi",
    "nanori": null
  },
  "衡": {
    "level": 57,
    "character": "衡",
    "meaning": "equilibrium",
    "onyomi": "こう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "款": {
    "level": 57,
    "character": "款",
    "meaning": "article",
    "onyomi": "かん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "閲": {
    "level": 57,
    "character": "閲",
    "meaning": "inspection",
    "onyomi": "えつ",
    "kunyomi": "けみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "喝": {
    "level": 57,
    "character": "喝",
    "meaning": "scold",
    "onyomi": "かつ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "膜": {
    "level": 57,
    "character": "膜",
    "meaning": "membrane",
    "onyomi": "まく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "盲": {
    "level": 57,
    "character": "盲",
    "meaning": "blind",
    "onyomi": "もう",
    "kunyomi": "めくら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "胎": {
    "level": 57,
    "character": "胎",
    "meaning": "womb, uterus",
    "onyomi": "たい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "酵": {
    "level": 57,
    "character": "酵",
    "meaning": "ferment",
    "onyomi": "こう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "遮": {
    "level": 57,
    "character": "遮",
    "meaning": "intercept",
    "onyomi": "しゃ",
    "kunyomi": "さえぎ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "哉": {
    "level": 57,
    "character": "哉",
    "meaning": "question mark, ?",
    "onyomi": "さい",
    "kunyomi": "や, かな",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "蒼": {
    "level": 57,
    "character": "蒼",
    "meaning": "pale, blue",
    "onyomi": "そう",
    "kunyomi": "あお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "硫": {
    "level": 58,
    "character": "硫",
    "meaning": "sulfur, sulpher",
    "onyomi": "りゅう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "赦": {
    "level": 58,
    "character": "赦",
    "meaning": "pardon",
    "onyomi": "しゃ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "窃": {
    "level": 58,
    "character": "窃",
    "meaning": "steal",
    "onyomi": "せつ",
    "kunyomi": "ぬす, ひそ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "慨": {
    "level": 58,
    "character": "慨",
    "meaning": "sigh",
    "onyomi": "がい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "扶": {
    "level": 58,
    "character": "扶",
    "meaning": "aid",
    "onyomi": "ふ",
    "kunyomi": "たす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "戯": {
    "level": 58,
    "character": "戯",
    "meaning": "play",
    "onyomi": "ぎ, げ",
    "kunyomi": "ざ, じゃ, たわむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "忌": {
    "level": 58,
    "character": "忌",
    "meaning": "mourning",
    "onyomi": "き",
    "kunyomi": "い",
    "important_reading": "onyomi",
    "nanori": null
  },
  "濁": {
    "level": 58,
    "character": "濁",
    "meaning": "muddy, impure",
    "onyomi": "だく, じょく",
    "kunyomi": "にご",
    "important_reading": "onyomi",
    "nanori": null
  },
  "奔": {
    "level": 58,
    "character": "奔",
    "meaning": "run, bustle",
    "onyomi": "ほん",
    "kunyomi": "はし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "肖": {
    "level": 58,
    "character": "肖",
    "meaning": "resemblance",
    "onyomi": "しょう",
    "kunyomi": "あやか",
    "important_reading": "onyomi",
    "nanori": null
  },
  "朽": {
    "level": 58,
    "character": "朽",
    "meaning": "rot, decay",
    "onyomi": "きゅう",
    "kunyomi": "く",
    "important_reading": "onyomi",
    "nanori": null
  },
  "殻": {
    "level": 58,
    "character": "殻",
    "meaning": "husk, shell",
    "onyomi": "かく, こく, ばい",
    "kunyomi": "から, がら",
    "important_reading": "onyomi",
    "nanori": null
  },
  "享": {
    "level": 58,
    "character": "享",
    "meaning": "receive",
    "onyomi": "きょう, こう",
    "kunyomi": "う",
    "important_reading": "onyomi",
    "nanori": null
  },
  "藩": {
    "level": 58,
    "character": "藩",
    "meaning": "fiefdom",
    "onyomi": "はん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "媒": {
    "level": 58,
    "character": "媒",
    "meaning": "mediator",
    "onyomi": "ばい",
    "kunyomi": "なこうど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鶏": {
    "level": 58,
    "character": "鶏",
    "meaning": "chicken",
    "onyomi": "けい",
    "kunyomi": "とり, にわとり",
    "important_reading": "onyomi",
    "nanori": null
  },
  "嘱": {
    "level": 58,
    "character": "嘱",
    "meaning": "request, entrust",
    "onyomi": "しょく",
    "kunyomi": "しょく, たの",
    "important_reading": "onyomi",
    "nanori": null
  },
  "迭": {
    "level": 58,
    "character": "迭",
    "meaning": "alternate",
    "onyomi": "てつ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "椎": {
    "level": 58,
    "character": "椎",
    "meaning": "oak, oak tree",
    "onyomi": "つい, すい",
    "kunyomi": "う, つち",
    "important_reading": "onyomi",
    "nanori": null
  },
  "絹": {
    "level": 58,
    "character": "絹",
    "meaning": "silk",
    "onyomi": "けん",
    "kunyomi": "きぬ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "陪": {
    "level": 58,
    "character": "陪",
    "meaning": "accompany",
    "onyomi": "ばい",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "剖": {
    "level": 58,
    "character": "剖",
    "meaning": "divide",
    "onyomi": "ぼう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "譜": {
    "level": 58,
    "character": "譜",
    "meaning": "genealogy, score",
    "onyomi": "ふ",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "淑": {
    "level": 58,
    "character": "淑",
    "meaning": "graceful",
    "onyomi": "しゅく",
    "kunyomi": "しと",
    "important_reading": "onyomi",
    "nanori": null
  },
  "帆": {
    "level": 58,
    "character": "帆",
    "meaning": "sail",
    "onyomi": "はん",
    "kunyomi": "ほ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "憤": {
    "level": 58,
    "character": "憤",
    "meaning": "resent",
    "onyomi": "ふん",
    "kunyomi": "いきどお",
    "important_reading": "onyomi",
    "nanori": null
  },
  "酌": {
    "level": 58,
    "character": "酌",
    "meaning": "serve",
    "onyomi": "しゃく",
    "kunyomi": "く",
    "important_reading": "onyomi",
    "nanori": null
  },
  "暁": {
    "level": 58,
    "character": "暁",
    "meaning": "dawn",
    "onyomi": "きょう, ぎょう",
    "kunyomi": "あかつき, さと",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "傑": {
    "level": 58,
    "character": "傑",
    "meaning": "greatness, excellence",
    "onyomi": "けつ",
    "kunyomi": "すぐ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "錠": {
    "level": 58,
    "character": "錠",
    "meaning": "lock",
    "onyomi": "じょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "凌": {
    "level": 58,
    "character": "凌",
    "meaning": "endure",
    "onyomi": "りょう",
    "kunyomi": "しの",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "瑞": {
    "level": 58,
    "character": "瑞",
    "meaning": "congratulations",
    "onyomi": "すい, ずい",
    "kunyomi": "みず, しるし",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "菅": {
    "level": 58,
    "character": "菅",
    "meaning": "sedge",
    "onyomi": "かん, けん",
    "kunyomi": "すげ",
    "important_reading": "nanori",
    "nanori": "すが"
  },
  "漣": {
    "level": 58,
    "character": "漣",
    "meaning": "ripples",
    "onyomi": "れん, らん",
    "kunyomi": "さざなみ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "璃": {
    "level": 58,
    "character": "璃",
    "meaning": "glassy",
    "onyomi": "り",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "吟": {
    "level": 59,
    "character": "吟",
    "meaning": "recital",
    "onyomi": "ぎん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "侮": {
    "level": 59,
    "character": "侮",
    "meaning": "despise",
    "onyomi": "ぶ",
    "kunyomi": "あなず, あなど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "鋳": {
    "level": 59,
    "character": "鋳",
    "meaning": "cast, casting",
    "onyomi": "ちゅう",
    "kunyomi": "い",
    "important_reading": "onyomi",
    "nanori": null
  },
  "蔑": {
    "level": 59,
    "character": "蔑",
    "meaning": "scorn, neglect",
    "onyomi": "べつ",
    "kunyomi": "さげす",
    "important_reading": "onyomi",
    "nanori": null
  },
  "胆": {
    "level": 59,
    "character": "胆",
    "meaning": "guts",
    "onyomi": "たん",
    "kunyomi": "きも",
    "important_reading": "onyomi",
    "nanori": null
  },
  "浪": {
    "level": 59,
    "character": "浪",
    "meaning": "wander",
    "onyomi": "ろう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "禍": {
    "level": 59,
    "character": "禍",
    "meaning": "evil, misfortune",
    "onyomi": "か",
    "kunyomi": "わざわい",
    "important_reading": "onyomi",
    "nanori": null
  },
  "酪": {
    "level": 59,
    "character": "酪",
    "meaning": "dairy",
    "onyomi": "らく",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "憧": {
    "level": 59,
    "character": "憧",
    "meaning": "long for, yearn",
    "onyomi": "しょう, とう, どう",
    "kunyomi": "あこが",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "慶": {
    "level": 59,
    "character": "慶",
    "meaning": "congratulate",
    "onyomi": "けい",
    "kunyomi": "よろこ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "亜": {
    "level": 59,
    "character": "亜",
    "meaning": "asia",
    "onyomi": "あ",
    "kunyomi": "つ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "汰": {
    "level": 59,
    "character": "汰",
    "meaning": "select",
    "onyomi": "た, たい",
    "kunyomi": "おご, にご, よな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "梓": {
    "level": 59,
    "character": "梓",
    "meaning": "wood block",
    "onyomi": "し",
    "kunyomi": "あずさ        ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "沙": {
    "level": 59,
    "character": "沙",
    "meaning": "sand",
    "onyomi": "さ, しゃ",
    "kunyomi": "すな, よなげる",
    "important_reading": "onyomi",
    "nanori": null
  },
  "遷": {
    "level": 59,
    "character": "遷",
    "meaning": "transition",
    "onyomi": "せん",
    "kunyomi": "うつ, みやこがえ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "拙": {
    "level": 59,
    "character": "拙",
    "meaning": "clumsy, unskillful",
    "onyomi": "せつ",
    "kunyomi": "つたな",
    "important_reading": "onyomi",
    "nanori": null
  },
  "峠": {
    "level": 59,
    "character": "峠",
    "meaning": "ridge",
    "onyomi": null,
    "kunyomi": "とうげ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "篤": {
    "level": 59,
    "character": "篤",
    "meaning": "deliberate",
    "onyomi": "とく",
    "kunyomi": "あつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "叔": {
    "level": 59,
    "character": "叔",
    "meaning": "uncle, aunt",
    "onyomi": "しゅく",
    "kunyomi": null,
    "important_reading": "nanori",
    "nanori": "お"
  },
  "雌": {
    "level": 59,
    "character": "雌",
    "meaning": "female",
    "onyomi": "し",
    "kunyomi": "めす, め, めん",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "堪": {
    "level": 59,
    "character": "堪",
    "meaning": "endure",
    "onyomi": "かん, たん",
    "kunyomi": "た, こた, こ",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "甚": {
    "level": 59,
    "character": "甚",
    "meaning": "very, great",
    "onyomi": "じん",
    "kunyomi": "はなは",
    "important_reading": "onyomi",
    "nanori": null
  },
  "崇": {
    "level": 59,
    "character": "崇",
    "meaning": "worship, revere",
    "onyomi": "すう",
    "kunyomi": "あが",
    "important_reading": "onyomi",
    "nanori": null
  },
  "漆": {
    "level": 59,
    "character": "漆",
    "meaning": "lacquer, varnish",
    "onyomi": "しつ",
    "kunyomi": "うるし",
    "important_reading": "onyomi",
    "nanori": null
  },
  "岬": {
    "level": 59,
    "character": "岬",
    "meaning": "cape",
    "onyomi": "こう",
    "kunyomi": "みさき",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "紡": {
    "level": 59,
    "character": "紡",
    "meaning": "spinning, spin",
    "onyomi": "ぼう",
    "kunyomi": "つむ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "礁": {
    "level": 59,
    "character": "礁",
    "meaning": "reef",
    "onyomi": "しょう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "屯": {
    "level": 59,
    "character": "屯",
    "meaning": "barracks",
    "onyomi": "とん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "姻": {
    "level": 59,
    "character": "姻",
    "meaning": "marry, matrimony",
    "onyomi": "いん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "擬": {
    "level": 59,
    "character": "擬",
    "meaning": "imitate",
    "onyomi": "ぎ",
    "kunyomi": "まが, もど",
    "important_reading": "onyomi",
    "nanori": null
  },
  "睦": {
    "level": 59,
    "character": "睦",
    "meaning": "friendly",
    "onyomi": "ぼく, もく",
    "kunyomi": "むつ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "閑": {
    "level": 59,
    "character": "閑",
    "meaning": "leisure",
    "onyomi": "かん",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "曹": {
    "level": 59,
    "character": "曹",
    "meaning": "official",
    "onyomi": "そう, ぞう",
    "kunyomi": "つかさ, ともがら, へや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "詠": {
    "level": 59,
    "character": "詠",
    "meaning": "compose, recite",
    "onyomi": "えい",
    "kunyomi": "よ, うた",
    "important_reading": "onyomi",
    "nanori": null
  },
  "卑": {
    "level": 59,
    "character": "卑",
    "meaning": "lowly, base",
    "onyomi": "ひ",
    "kunyomi": "いや",
    "important_reading": "onyomi",
    "nanori": null
  },
  "漸": {
    "level": 60,
    "character": "漸",
    "meaning": "gradually, steadily",
    "onyomi": "ぜん",
    "kunyomi": "ようや, やや",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "藻": {
    "level": 60,
    "character": "藻",
    "meaning": "seaweed",
    "onyomi": "そう",
    "kunyomi": "も",
    "important_reading": "onyomi",
    "nanori": null
  },
  "妄": {
    "level": 60,
    "character": "妄",
    "meaning": "reckless",
    "onyomi": "もう, ぼう",
    "kunyomi": "みだ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "倹": {
    "level": 60,
    "character": "倹",
    "meaning": "thrifty, frugal, thrift",
    "onyomi": "けん",
    "kunyomi": "つづまやか, つま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "狐": {
    "level": 60,
    "character": "狐",
    "meaning": "fox",
    "onyomi": "こ",
    "kunyomi": "きつね",
    "important_reading": "kunyomi",
    "nanori": null
  },
  "逝": {
    "level": 60,
    "character": "逝",
    "meaning": "die",
    "onyomi": "せい",
    "kunyomi": "い, ゆ",
    "important_reading": "onyomi",
    "nanori": null
  },
  "匿": {
    "level": 60,
    "character": "匿",
    "meaning": "hide",
    "onyomi": "とく",
    "kunyomi": "かくま",
    "important_reading": "onyomi",
    "nanori": null
  },
  "寡": {
    "level": 60,
    "character": "寡",
    "meaning": "widow, minority",
    "onyomi": "か",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "痢": {
    "level": 60,
    "character": "痢",
    "meaning": "diarrhea, diarrhoea",
    "onyomi": "り",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  },
  "坑": {
    "level": 60,
    "character": "坑",
    "meaning": "pit, hole",
    "onyomi": "こう",
    "kunyomi": null,
    "important_reading": "onyomi",
    "nanori": null
  }
}
`);
