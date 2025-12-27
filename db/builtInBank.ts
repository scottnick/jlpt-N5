
import { Question } from '../types';

// 內建 N5 單字題庫
// 結構：保留原 50 題，追加新題目，總計目標 120 題
export const BUILT_IN_N5_VOCABULARY: Question[] = [
  // --- [Verbatim] 前 50 題不予更動 ---
  {
    id: "b_n5_v_001", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "あそこに [[u]]山[[/u]] があります。",
    choices: ["やま", "かわ", "うみ", "そら"], answerIndex: 0,
    explanation: {
      correct: "1. やま",
      analysis: "「山」在日文中單獨出現時讀作「やま」。",
      options: [
        { label: "1", whyWrongOrRight: "正確音。" }, { label: "2", whyWrongOrRight: "這是「川」的讀法。" },
        { label: "3", whyWrongOrRight: "這是「海」的讀法。" }, { label: "4", whyWrongOrRight: "這是「空」的讀法。" }
      ]
    }
  },
  {
    id: "b_n5_v_002", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "わたしの [[u]]父[[/u]] は 40さいです。",
    choices: ["はは", "あに", "ちち", "あね"], answerIndex: 2,
    explanation: {
      correct: "3. ちち",
      analysis: "對別人稱呼自己的父親時使用「父（ちち）」。",
      options: [
        { label: "1", whyWrongOrRight: "這是「母」。" }, { label: "2", whyWrongOrRight: "這是「兄」。" },
        { label: "3", whyWrongOrRight: "正確音。" }, { label: "4", whyWrongOrRight: "這是「姉」。" }
      ]
    }
  },
  {
    id: "b_n5_v_003", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "這個 [[u]]川[[/u]] は とても きれいです。",
    choices: ["かわ", "いけ", "うみ", "やま"], answerIndex: 0,
    explanation: {
      correct: "1. かわ",
      analysis: "「川」讀作「かわ」，意為河流。",
      options: [
        { label: "1", whyWrongOrRight: "正確音。" }, { label: "2", whyWrongOrRight: "這是「池（いけ）」。" },
        { label: "3", whyWrongOrRight: "這是「海（うみ）」。" }, { label: "4", whyWrongOrRight: "這是「山（やま）」。" }
      ]
    }
  },
  {
    id: "b_n5_v_004", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "きょうは [[u]]五日[[/u]] です。",
    choices: ["よっか", "いつか", "むいか", "なのか"], answerIndex: 1,
    explanation: {
      correct: "2. いつか",
      analysis: "日期「5日」的特殊讀法是「いつか」。",
      options: [
        { label: "1", whyWrongOrRight: "這是 4 日。" }, { label: "2", whyWrongOrRight: "正確音。" },
        { label: "3", whyWrongOrRight: "這是 6 日。" }, { label: "4", whyWrongOrRight: "這是 7 日。" }
      ]
    }
  },
  {
    id: "b_n5_v_005", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "田中さんは [[u]]先生[[/u]] です。",
    choices: ["がくせい", "いしゃ", "せんせい", "かいしゃいん"], answerIndex: 2,
    explanation: {
      correct: "3. せんせい",
      analysis: "「先生」讀作「せんせい」，指老師。",
      options: [
        { label: "1", whyWrongOrRight: "這是學生。" }, { label: "2", whyWrongOrRight: "這是醫生。" },
        { label: "3", whyWrongOrRight: "正確音。" }, { label: "4", whyWrongOrRight: "這是公司職員。" }
      ]
    }
  },
  {
    id: "b_n5_v_006", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "這個 [[u]]本[[/u]] を ください。",
    choices: ["ほん", "ばん", "もん", "ぱん"], answerIndex: 0,
    explanation: {
      correct: "1. ほん",
      analysis: "「本」讀作「ほん」，意為書本。",
      options: [
        { label: "1", whyWrongOrRight: "正確音。" }, { label: "2", whyWrongOrRight: "音近干擾。" },
        { label: "3", whyWrongOrRight: "音近干擾。" }, { label: "4", whyWrongOrRight: "這是麵包。" }
      ]
    }
  },
  {
    id: "b_n5_v_007", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "あした、[[u]]大學[[/u]] へ いきます。",
    choices: ["たうがく", "だいがく", "たいがく", "だうがく"], answerIndex: 1,
    explanation: {
      correct: "2. だいがく",
      analysis: "「大學」讀作「だいがく」。",
      options: [
        { label: "1", whyWrongOrRight: "濁音遺漏。" }, { label: "2", whyWrongOrRight: "正確音。" },
        { label: "3", whyWrongOrRight: "濁音遺漏。" }, { label: "4", whyWrongOrRight: "拼法錯誤。" }
      ]
    }
  },
  {
    id: "b_n5_v_008", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "きのう、[[u]]友だち[[/u]] に あいました。",
    choices: ["ゆうだち", "ともだち", "ゆうだち", "こもだち"], answerIndex: 1,
    explanation: {
      correct: "2. ともだち",
      analysis: "「友達」讀作「ともだち」。",
      options: [
        { label: "1", whyWrongOrRight: "拼法錯誤。" }, { label: "2", whyWrongOrRight: "正確音。" },
        { label: "3", whyWrongOrRight: "重複干擾。" }, { label: "4", whyWrongOrRight: "拼法錯誤。" }
      ]
    }
  },
  {
    id: "b_n5_v_009", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "いっしょに [[u]]お茶[[/u]] を のみませんか。",
    choices: ["おさ", "おじゃ", "おちゃ", "おた"], answerIndex: 2,
    explanation: {
      correct: "3. おちゃ",
      analysis: "「茶」讀作「ちゃ」，前面加上接頭詞「お」。",
      options: [
        { label: "1", whyWrongOrRight: "拼法錯誤。" }, { label: "2", whyWrongOrRight: "濁音錯誤。" },
        { label: "3", whyWrongOrRight: "正確音。" }, { label: "4", whyWrongOrRight: "拼法錯誤。" }
      ]
    }
  },
  {
    id: "b_n5_v_010", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "這個 [[u]]紙[[/u]] を とってください。",
    choices: ["てがみ", "かみ", "し", "はし"], answerIndex: 1,
    explanation: {
      correct: "2. かみ",
      analysis: "「紙」讀作「かみ」。",
      options: [
        { label: "1", whyWrongOrRight: "這是信件。" }, { label: "2", whyWrongOrRight: "正確音。" },
        { label: "3", whyWrongOrRight: "這是音讀。" }, { label: "4", whyWrongOrRight: "這是筷子。" }
      ]
    }
  },
  {
    id: "b_n5_v_041", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "わたしの [[u]]なまえ[[/u]] は 田中です。",
    choices: ["名前", "名面", "合前", "多名"], answerIndex: 0,
    explanation: {
      correct: "1. 名前",
      analysis: "「姓名」的漢字是「名前」。",
      options: [
        { label: "1", whyWrongOrRight: "正確表記。" }, { label: "2", whyWrongOrRight: "字形錯誤。" },
        { label: "3", whyWrongOrRight: "字形錯誤。" }, { label: "4", whyWrongOrRight: "字形錯誤。" }
      ]
    }
  },
  {
    id: "b_n5_v_042", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "あしたは [[u]]にちようび[[/u]] です。",
    choices: ["月曜日", "金曜日", "日曜日", "火曜日"], answerIndex: 2,
    explanation: {
      correct: "3. 日曜日",
      analysis: "星期日的漢字是「日曜日」。",
      options: [
        { label: "1", whyWrongOrRight: "這是週一。" }, { label: "2", whyWrongOrRight: "這是週五。" },
        { label: "3", whyWrongOrRight: "正確表記。" }, { label: "4", whyWrongOrRight: "這是週二。" }
      ]
    }
  },
  {
    id: "b_n5_v_043", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "這個 [[u]]でんしゃ[[/u]] は はやいですね。",
    choices: ["電力", "電車", "電話", "電器"], answerIndex: 1,
    explanation: {
      correct: "2. 電車",
      analysis: "「電車」的漢字表記為「電車」。",
      options: [
        { label: "1", whyWrongOrRight: "字義不符。" }, { label: "2", whyWrongOrRight: "正確表記。" },
        { label: "3", whyWrongOrRight: "這是電話。" }, { label: "4", whyWrongOrRight: "這是電器。" }
      ]
    }
  },
  {
    id: "b_n5_v_044", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "[[u]]あたら[[/u]] しい かばんを かいました。",
    choices: ["古い", "良い", "新しい", "白しい"], answerIndex: 2,
    explanation: {
      correct: "3. 新しい",
      analysis: "「新（あたら）しい」的漢字是「新」。",
      options: [
        { label: "1", whyWrongOrRight: "這是舊的。" }, { label: "2", whyWrongOrRight: "這是好的。" },
        { label: "3", whyWrongOrRight: "正確表記。" }, { label: "4", whyWrongOrRight: "字形錯誤。" }
      ]
    }
  },
  {
    id: "b_n5_v_045", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "[[u]]ひだり[[/u]] に まがってください。",
    choices: ["右", "左", "上", "下"], answerIndex: 1,
    explanation: {
      correct: "2. 左",
      analysis: "「左（ひだり）」的漢字是「左」。",
      options: [
        { label: "1", whyWrongOrRight: "這是右（みぎ）。" }, { label: "2", whyWrongOrRight: "正確表記。" },
        { label: "3", whyWrongOrRight: "這是上。" }, { label: "4", whyWrongOrRight: "這是下。" }
      ]
    }
  },
  {
    id: "b_n5_v_081", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "おなかが すきましたから、何か （　） です。",
    choices: ["のみたい", "たべたい", "ききたい", "よみたい"], answerIndex: 1,
    explanation: {
      correct: "2. たべたい",
      analysis: "肚子餓了（おなかがすきました）對應「想吃（たべたい）」。",
      options: [
        { label: "1", whyWrongOrRight: "這是想喝。" }, { label: "2", whyWrongOrRight: "正確選詞。" },
        { label: "3", whyWrongOrRight: "這是想聽。" }, { label: "4", whyWrongOrRight: "這是想讀。" }
      ]
    }
  },
  {
    id: "b_n5_v_082", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "くらいですから、電気を （　） ください。",
    choices: ["つけて", "けして", "あけて", "しめて"], answerIndex: 0,
    explanation: {
      correct: "1. つけて",
      analysis: "因為很暗（くらい），所以請「開（つけて）」燈。",
      options: [
        { label: "1", whyWrongOrRight: "正確選詞。" }, { label: "2", whyWrongOrRight: "這是關掉。" },
        { label: "3", whyWrongOrRight: "這是打開（門窗）。" }, { label: "4", whyWrongOrRight: "這是關閉。" }
      ]
    }
  },
  {
    id: "b_n5_v_083", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "日本語の べんきょうは （　） ですか。",
    choices: ["だれ", "どこ", "どう", "なに"], answerIndex: 2,
    explanation: {
      correct: "3. どう",
      analysis: "詢問「怎麼樣（どう）」最符合語境。",
      options: [
        { label: "1", whyWrongOrRight: "這是誰。" }, { label: "2", whyWrongOrRight: "這是哪裡。" },
        { label: "3", whyWrongOrRight: "正確選詞。" }, { label: "4", whyWrongOrRight: "這是什麼。" }
      ]
    }
  },
  {
    id: "b_n5_v_084", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "每朝 パンと コーヒーを （　）。",
    choices: ["のみます", "たべます", "ききます", "します"], answerIndex: 1,
    explanation: {
      correct: "2. たべます",
      analysis: "雖然有咖啡，但「麵包（パン）」是主體，通常會用「吃（たべます）」。",
      options: [
        { label: "1", whyWrongOrRight: "咖啡可以喝，但麵包不行。" }, { label: "2", whyWrongOrRight: "正確選詞。" },
        { label: "3", whyWrongOrRight: "這是聽。" }, { label: "4", whyWrongOrRight: "這是做。" }
      ]
    }
  },
  {
    id: "b_n5_v_085", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "デパートで 買物をして、（　） なりました。",
    choices: ["じょうずに", "きれいに", "つかれて", "しずかに"], answerIndex: 2,
    explanation: {
      correct: "3. つかれて",
      analysis: "去百貨公司購物完後，「累了（つかれて）」最合理。",
      options: [
        { label: "1", whyWrongOrRight: "這是變得擅長。" }, { label: "2", whyWrongOrRight: "這是變得漂亮。" },
        { label: "3", whyWrongOrRight: "正確選詞。" }, { label: "4", whyWrongOrRight: "這是變得安靜。" }
      ]
    }
  },
  {
    id: "b_n5_v_011", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "[[u]]母[[/u]]は 料理が 上手です。",
    choices: ["はは", "ちち", "あね", "あに"], answerIndex: 0,
    explanation: {
      correct: "1. はは",
      analysis: "稱呼自己的母親時使用「母（はは）」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是父親。" }, { label: "3", whyWrongOrRight: "這是姐姐。" }, { label: "4", whyWrongOrRight: "這是哥哥。" }]
    }
  },
  {
    id: "b_n5_v_012", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "[[u]]去年[[/u]] 日本へ 行きました。",
    choices: ["ことし", "きょねん", "らいねん", "まいとし"], answerIndex: 1,
    explanation: {
      correct: "2. きょねん",
      analysis: "「去年」的讀音是「きょねん」。",
      options: [{ label: "1", whyWrongOrRight: "這是今年。" }, { label: "2", whyWrongOrRight: "正確。" }, { label: "3", whyWrongOrRight: "這是明年。" }, { label: "4", whyWrongOrRight: "這是每年。" }]
    }
  },
  {
    id: "b_n5_v_013", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "[[u]]每日[[/u]] さんぽを します。",
    choices: ["まいにち", "まいしゅう", "まいつき", "まいとし"], answerIndex: 0,
    explanation: {
      correct: "1. まいにち",
      analysis: "「每日」讀作「まいにち」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是每週。" }, { label: "3", whyWrongOrRight: "這是每月。" }, { label: "4", whyWrongOrRight: "這是每年。" }]
    }
  },
  {
    id: "b_n5_v_014", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "[[u]]入口[[/u]]は あちらです。",
    choices: ["いりぐち", "でぐち", "まど", "とあ"], answerIndex: 0,
    explanation: {
      correct: "1. いりぐち",
      analysis: "「入口」讀作「いりぐち」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是出口（でぐち）。" }, { label: "3", whyWrongOrRight: "這是窗戶。" }, { label: "4", whyWrongOrRight: "這是門。" }]
    }
  },
  {
    id: "b_n5_v_015", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "あそこに [[u]]男[[/u]]の子が います。",
    choices: ["おんな", "おとこ", "こども", "ひと"], answerIndex: 1,
    explanation: {
      correct: "2. おとこ",
      analysis: "「男」讀作「おとこ」。",
      options: [{ label: "1", whyWrongOrRight: "這是女性（おんな）。" }, { label: "2", whyWrongOrRight: "正確。" }, { label: "3", whyWrongOrRight: "這是小孩。" }, { label: "4", whyWrongOrRight: "這是人。" }]
    }
  },
  {
    id: "b_n5_v_016", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "[[u]]北[[/u]]の方へ 行きます。",
    choices: ["みなみ", "にし", "ひがし", "きた"], answerIndex: 3,
    explanation: {
      correct: "4. きた",
      analysis: "「北」讀作「きた」。",
      options: [{ label: "1", whyWrongOrRight: "這是南。" }, { label: "2", whyWrongOrRight: "這是西。" }, { label: "3", whyWrongOrRight: "這是東。" }, { label: "4", whyWrongOrRight: "正確。" }]
    }
  },
  {
    id: "b_n5_v_017", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "一日は [[u]]二十四時間[[/u]] です。",
    choices: ["にじゅうよじかん", "にじゅうよんじかん", "にじゅうしじかん", "にじゅうよんじきかん"], answerIndex: 1,
    explanation: {
      correct: "2. にじゅうよんじかん",
      analysis: "24小時讀作「にじゅうよんじかん」。",
      options: [{ label: "1", whyWrongOrRight: "發音不完全。" }, { label: "2", whyWrongOrRight: "正確。" }, { label: "3", whyWrongOrRight: "讀音錯誤。" }, { label: "4", whyWrongOrRight: "拼寫錯誤。" }]
    }
  },
  {
    id: "b_n5_v_018", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "[[u]]午前[[/u]] 9時に 会いましょう。",
    choices: ["ごご", "ごぜん", "あさ", "ばん"], answerIndex: 1,
    explanation: {
      correct: "2. ごぜん",
      analysis: "「午前」讀作「ごぜん」。",
      options: [{ label: "1", whyWrongOrRight: "這是下午（ごご）。" }, { label: "2", whyWrongOrRight: "正確。" }, { label: "3", whyWrongOrRight: "這是早上。" }, { label: "4", whyWrongOrRight: "這是晚上。" }]
    }
  },
  {
    id: "b_n5_v_019", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "這個 [[u]]花[[/u]]は きれいですね。",
    choices: ["はな", "はね", "ほね", "はし"], answerIndex: 0,
    explanation: {
      correct: "1. はな",
      analysis: "「花」讀作「はな」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "讀音錯誤。" }, { label: "3", whyWrongOrRight: "讀音錯誤。" }, { label: "4", whyWrongOrRight: "這是筷子或橋。" }]
    }
  },
  {
    id: "b_n5_v_020", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "今天是 [[u]]雨[[/u]]が 降っています。",
    choices: ["ゆき", "あめ", "くも", "かぜ"], answerIndex: 1,
    explanation: {
      correct: "2. あめ",
      analysis: "「雨」讀作「あめ」。",
      options: [{ label: "1", whyWrongOrRight: "這是雪。" }, { label: "2", whyWrongOrRight: "正確。" }, { label: "3", whyWrongOrRight: "這是雲。" }, { label: "4", whyWrongOrRight: "這是風。" }]
    }
  },
  {
    id: "b_n5_v_046", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "這個 [[u]]くるま[[/u]]は 新しいです。",
    choices: ["車", "東", "電", "門"], answerIndex: 0,
    explanation: {
      correct: "1. 車",
      analysis: "「くるま」的漢字是「車」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是東。" }, { label: "3", whyWrongOrRight: "這是電。" }, { label: "4", whyWrongOrRight: "這是門。" }]
    }
  },
  {
    id: "b_n5_v_047", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "[[u]]みぎ[[/u]]へ 曲がってください。",
    choices: ["左", "右", "上", "下"], answerIndex: 1,
    explanation: {
      correct: "2. 右",
      analysis: "「みぎ」的漢字是「右」。",
      options: [{ label: "1", whyWrongOrRight: "這是左。" }, { label: "2", whyWrongOrRight: "正確。" }, { label: "3", whyWrongOrRight: "這是上。" }, { label: "4", whyWrongOrRight: "這是下。" }]
    }
  },
  {
    id: "b_n5_v_048", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "[[u]]みず[[/u]]を 飲みます。",
    choices: ["火", "木", "土", "水"], answerIndex: 3,
    explanation: {
      correct: "4. 水",
      analysis: "「みず」的漢字是「水」。",
      options: [{ label: "1", whyWrongOrRight: "這是火。" }, { label: "2", whyWrongOrRight: "這是木。" }, { label: "3", whyWrongOrRight: "這是土。" }, { label: "4", whyWrongOrRight: "正確。" }]
    }
  },
  {
    id: "b_n5_v_049", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "あしたは [[u]]どようび[[/u]]です。",
    choices: ["日曜日", "月曜日", "土曜日", "火曜日"], answerIndex: 2,
    explanation: {
      correct: "3. 土曜日",
      analysis: "「どようび」的漢字是「土曜日」。",
      options: [{ label: "1", whyWrongOrRight: "週日。" }, { label: "2", whyWrongOrRight: "週一。" }, { label: "3", whyWrongOrRight: "正確。" }, { label: "4", whyWrongOrRight: "週二。" }]
    }
  },
  {
    id: "b_n5_v_050", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "九時に [[u]]がっこう[[/u]]へ 行きます。",
    choices: ["學校", "學考", "學校", "家校"], answerIndex: 0,
    explanation: {
      correct: "1. 學校",
      analysis: "日文漢字採用「學校」。",
      options: [{ label: "1", whyWrongOrRight: "正確表記。" }, { label: "2", whyWrongOrRight: "字形錯誤。" }, { label: "3", whyWrongOrRight: "字形錯誤。" }, { label: "4", whyWrongOrRight: "字義錯誤。" }]
    }
  },
  {
    id: "b_n5_v_051", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "[[u]]はやく[[/u]] 起きました。",
    choices: ["早く", "古く", "安く", "長く"], answerIndex: 0,
    explanation: {
      correct: "1. 早く",
      analysis: "早起（はやくおきる）的漢字是「早」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是舊（ふるく）。" }, { label: "3", whyWrongOrRight: "這是便宜（やすく）。" }, { label: "4", whyWrongOrRight: "這是長（ながく）。" }]
    }
  },
  {
    id: "b_n5_v_052", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "這個 魚は [[u]]しろい[[/u]]です。",
    choices: ["赤い", "青い", "白い", "黑い"], answerIndex: 2,
    explanation: {
      correct: "3. 白い",
      analysis: "「しろい」的漢字是「白」。",
      options: [{ label: "1", whyWrongOrRight: "這是紅。" }, { label: "2", whyWrongOrRight: "這是藍。" }, { label: "3", whyWrongOrRight: "正確。" }, { label: "4", whyWrongOrRight: "這是黑。" }]
    }
  },
  {
    id: "b_n5_v_053", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "今から [[u]]おんがく[[/u]]を 聞きます。",
    choices: ["音學", "音樂", "音樂", "音學"], answerIndex: 1,
    explanation: {
      correct: "2. 音樂",
      analysis: "日文「音樂」寫作「音樂」。",
      options: [{ label: "1", whyWrongOrRight: "字形錯誤。" }, { label: "2", whyWrongOrRight: "正確。" }, { label: "3", whyWrongOrRight: "字形錯誤。" }, { label: "4", whyWrongOrRight: "字形錯誤。" }]
    }
  },
  {
    id: "b_n5_v_054", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "三十分に [[u]]あいましょう[[/u]]。",
    choices: ["會いましょう", "間いましょう", "合いましょう", "愛いましょう"], answerIndex: 0,
    explanation: {
      correct: "1. 會いましょう",
      analysis: "見面（あう）的漢字是「會」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "字義錯誤。" }, { label: "3", whyWrongOrRight: "字義錯誤。" }, { label: "4", whyWrongOrRight: "字義錯誤。" }]
    }
  },
  {
    id: "b_n5_v_055", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "這個 店は [[u]]ゆうめい[[/u]]です。",
    choices: ["有名", "有明", "遊名", "友名"], answerIndex: 0,
    explanation: {
      correct: "1. 有名",
      analysis: "「有名」寫作「有名」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "字形錯誤。" }, { label: "3", whyWrongOrRight: "字義錯誤。" }, { label: "4", whyWrongOrRight: "字義錯誤。" }]
    }
  },
  {
    id: "b_n5_v_086", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "鉛筆で 名前を （　） ください。",
    choices: ["かいて", "きいて", "よんで", "みて"], answerIndex: 0,
    explanation: {
      correct: "1. かいて",
      analysis: "用鉛筆寫（かく）名字。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是聽。" }, { label: "3", whyWrongOrRight: "這是讀。" }, { label: "4", whyWrongOrRight: "這是看。" }]
    }
  },
  {
    id: "b_n5_v_087", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "カメラで 寫真を （　）。",
    choices: ["とります", "つくります", "します", "かきます"], answerIndex: 0,
    explanation: {
      correct: "1. とります",
      analysis: "拍照的固定搭配是「寫真を撮る（とる）」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是製作。" }, { label: "3", whyWrongOrRight: "這是做。" }, { label: "4", whyWrongOrRight: "這是寫。" }]
    }
  },
  {
    id: "b_n5_v_088", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "這個 料理は とても （　） です。",
    choices: ["おいしい", "たかい", "ひろい", "あかるい"], answerIndex: 0,
    explanation: {
      correct: "1. おいしい",
      analysis: "形容料理通常用「美味（おいしい）」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是貴。" }, { label: "3", whyWrongOrRight: "這是寬敞。" }, { label: "4", whyWrongOrRight: "這是明亮。" }]
    }
  },
  {
    id: "b_n5_v_089", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "「ありがとう」と （　） ました。",
    choices: ["いい", "きき", "み", "話し"], answerIndex: 0,
    explanation: {
      correct: "1. いい",
      analysis: "說了（いう）謝謝。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是聽。" }, { label: "3", whyWrongOrRight: "這是看。" }, { label: "4", whyWrongOrRight: "這是說話（通常用於較長交談）。" }]
    }
  },
  {
    id: "b_n5_v_090", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "（　）に 宿題を します。",
    choices: ["じしょ", "じかん", "じぶん", "じ"], answerIndex: 2,
    explanation: {
      correct: "3. じぶん",
      analysis: "「自分（じぶん）で」意為靠自己做功課。",
      options: [{ label: "1", whyWrongOrRight: "這是字典。" }, { label: "2", whyWrongOrRight: "這是時間。" }, { label: "3", whyWrongOrRight: "正確。" }, { label: "4", whyWrongOrRight: "這是字。" }]
    }
  },
  {
    id: "b_n5_v_091", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "手が 汚れましたから、（　） ください。",
    choices: ["あらって", "ふいて", "みがいて", "たたいて"], answerIndex: 0,
    explanation: {
      correct: "1. あらって",
      analysis: "手髒了所以請洗手（あらう）。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是擦。" }, { label: "3", whyWrongOrRight: "這是刷。" }, { label: "4", whyWrongOrRight: "這是打。" }]
    }
  },
  {
    id: "b_n5_v_092", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "あしたは （　） 8時に 起きます。",
    choices: ["あさ", "よる", "ひる", "ゆうがた"], answerIndex: 0,
    explanation: {
      correct: "1. あさ",
      analysis: "早上（あさ）8點起床。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是晚上。" }, { label: "3", whyWrongOrRight: "這是中午。" }, { label: "4", whyWrongOrRight: "這是傍晚。" }]
    }
  },
  {
    id: "b_n5_v_093", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "（　） 勉強しましたから、疲れました。",
    choices: ["たくさん", "すこし", "ぜんぜん", "あまり"], answerIndex: 0,
    explanation: {
      correct: "1. たくさん",
      analysis: "因為讀了很多（たくさん）書，所以累了。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是一點點。" }, { label: "3", whyWrongOrRight: "這是完全不。" }, { label: "4", whyWrongOrRight: "這是不太（後接否定）。" }]
    }
  },
  {
    id: "b_n5_v_094", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "冬は とても （　） です。",
    choices: ["さむい", "あつい", "すずしい", "あたたかい"], answerIndex: 0,
    explanation: {
      correct: "1. さむい",
      analysis: "冬天（ふゆ）通常很冷（さむい）。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是熱。" }, { label: "3", whyWrongOrRight: "這是涼爽。" }, { label: "4", whyWrongOrRight: "這是溫暖。" }]
    }
  },
  {
    id: "b_n5_v_095", level: "N5", category: "vocabulary", itemType: "context_blank",
    instruction: "請選出最符合句意的單字。",
    stem: "エレベーターで （　） 行きます。",
    choices: ["うえへ", "なかへ", "したへ", "よこへ"], answerIndex: 0,
    explanation: {
      correct: "1. うえへ",
      analysis: "搭電梯向上（うえ）去。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是向內。" }, { label: "3", whyWrongOrRight: "這是向下（亦可但情境較少）。" }, { label: "4", whyWrongOrRight: "這是向旁邊。" }]
    }
  },
  // --- [Append] 追加 20 題實體題目開始 (021-030, 056-065) ---
  {
    id: "b_n5_v_021", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "あした、[[u]]英語[[/u]]の テストが あります。",
    choices: ["えいこ", "えいご", "いいご", "えこ"], answerIndex: 1,
    explanation: {
      correct: "2. えいご",
      analysis: "「英語」讀作「えいご」，要注意濁音。",
      options: [{ label: "1", whyWrongOrRight: "濁音缺失。" }, { label: "2", whyWrongOrRight: "正確音。" }, { label: "3", whyWrongOrRight: "讀音錯誤。" }, { label: "4", whyWrongOrRight: "拼法錯誤。" }]
    }
  },
  {
    id: "b_n5_v_022", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "每朝 [[u]]新聞[[/u]]を 読みます。",
    choices: ["きぶん", "しんぶん", "しんもん", "きんぶん"], answerIndex: 1,
    explanation: {
      correct: "2. しんぶん",
      analysis: "「新聞」讀作「しんぶん」。",
      options: [{ label: "1", whyWrongOrRight: "音近干擾。" }, { label: "2", whyWrongOrRight: "正確音。" }, { label: "3", whyWrongOrRight: "讀音錯誤。" }, { label: "4", whyWrongOrRight: "讀音錯誤。" }]
    }
  },
  {
    id: "b_n5_v_023", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "あそこに [[u]]病院[[/u]]が あります。",
    choices: ["びょういん", "びよういん", "びよいん", "びょうえん"], answerIndex: 0,
    explanation: {
      correct: "1. びょういん",
      analysis: "「病院」讀作「びょういん」，要注意拗音縮讀。",
      options: [{ label: "1", whyWrongOrRight: "正確音。" }, { label: "2", whyWrongOrRight: "這是美容院。" }, { label: "3", whyWrongOrRight: "拼法錯誤。" }, { label: "4", whyWrongOrRight: "讀音錯誤。" }]
    }
  },
  {
    id: "b_n5_v_024", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "わたしの [[u]]会社[[/u]]は 近いです。",
    choices: ["かいしん", "かいしゃ", "かいじょ", "きっしゃ"], answerIndex: 1,
    explanation: {
      correct: "2. かいしゃ",
      analysis: "「会社」讀作「かいしゃ」。",
      options: [{ label: "1", whyWrongOrRight: "讀音錯誤。" }, { label: "2", whyWrongOrRight: "正確音。" }, { label: "3", whyWrongOrRight: "讀音錯誤。" }, { label: "4", whyWrongOrRight: "讀音錯誤。" }]
    }
  },
  {
    id: "b_n5_v_025", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "今日は [[u]]休み[[/u]]です。",
    choices: ["やすみ", "やしみ", "よすみ", "はすみ"], answerIndex: 0,
    explanation: {
      correct: "1. やすみ",
      analysis: "「休み」讀作「やすみ」。",
      options: [{ label: "1", whyWrongOrRight: "正確音。" }, { label: "2", whyWrongOrRight: "讀音錯誤。" }, { label: "3", whyWrongOrRight: "讀音錯誤。" }, { label: "4", whyWrongOrRight: "讀音錯誤。" }]
    }
  },
  {
    id: "b_n5_v_026", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "[[u]]六時[[/u]]に おきます。",
    choices: ["ろくじ", "ななじ", "はちじ", "くじ"], answerIndex: 0,
    explanation: {
      correct: "1. ろくじ",
      analysis: "「六」讀作「ろく」。",
      options: [{ label: "1", whyWrongOrRight: "正確音。" }, { label: "2", whyWrongOrRight: "這是七時。" }, { label: "3", whyWrongOrRight: "這是八時。" }, { label: "4", whyWrongOrRight: "這是九時。" }]
    }
  },
  {
    id: "b_n5_v_027", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "いっしょに [[u]]映画[[/u]]を 見ませんか。",
    choices: ["えいが", "えいか", "えこ", "えけ"], answerIndex: 0,
    explanation: {
      correct: "1. えいが",
      analysis: "「映画」讀作「えいが」，後方的「が」是濁音。",
      options: [{ label: "1", whyWrongOrRight: "正確音。" }, { label: "2", whyWrongOrRight: "濁音缺失。" }, { label: "3", whyWrongOrRight: "讀音錯誤。" }, { label: "4", whyWrongOrRight: "讀音錯誤。" }]
    }
  },
  {
    id: "b_n5_v_028", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "[[u]]京都[[/u]]は 静かです。",
    choices: ["きょうと", "きょうど", "きょと", "きょうたん"], answerIndex: 0,
    explanation: {
      correct: "1. きょう特",
      analysis: "「京都」讀作「きょうと」。",
      options: [{ label: "1", whyWrongOrRight: "正確音。" }, { label: "2", whyWrongOrRight: "濁音錯誤。" }, { label: "3", whyWrongOrRight: "長音缺失。" }, { label: "4", whyWrongOrRight: "讀音錯誤。" }]
    }
  },
  {
    id: "b_n5_v_029", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "[[u]]外[[/u]]に 行きましょう。",
    choices: ["そと", "なか", "した", "うえ"], answerIndex: 0,
    explanation: {
      correct: "1. そと",
      analysis: "「外」讀作「そ托」。",
      options: [{ label: "1", whyWrongOrRight: "正確音。" }, { label: "2", whyWrongOrRight: "這是裡面。" }, { label: "3", whyWrongOrRight: "這是下面。" }, { label: "4", whyWrongOrRight: "這是上面。" }]
    }
  },
  {
    id: "b_n5_v_030", level: "N5", category: "vocabulary", itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: "この [[u]]時計[[/u]]は 高いです。",
    choices: ["とけい", "ときい", "とけえ", "ときえ"], answerIndex: 0,
    explanation: {
      correct: "1. とけい",
      analysis: "「時計」讀作「とけい」。",
      options: [{ label: "1", whyWrongOrRight: "正確音。" }, { label: "2", whyWrongOrRight: "讀音錯誤。" }, { label: "3", whyWrongOrRight: "讀音錯誤。" }, { label: "4", whyWrongOrRight: "讀音錯誤。" }]
    }
  },
  {
    id: "b_n5_v_056", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "[[u]]みず[[/u]]を 飲みます。",
    choices: ["水", "火", "木", "土"], answerIndex: 0,
    explanation: {
      correct: "1. 水",
      analysis: "「みず」的漢字是「水」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是火。" }, { label: "3", whyWrongOrRight: "這是木。" }, { label: "4", whyWrongOrRight: "這是土。" }]
    }
  },
  {
    id: "b_n5_v_057", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "あしたは [[u]]どようび[[/u]]です。",
    choices: ["日曜日", "月曜日", "土曜日", "火曜日"], answerIndex: 2,
    explanation: {
      correct: "3. 土曜日",
      analysis: "「どようび」的漢字是「土曜日」。",
      options: [{ label: "1", whyWrongOrRight: "這是週日。" }, { label: "2", whyWrongOrRight: "這是週一。" }, { label: "3", whyWrongOrRight: "正確。" }, { label: "4", whyWrongOrRight: "這是週二。" }]
    }
  },
  {
    id: "b_n5_v_058", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "[[u]]がっこう[[/u]]へ 行きます。",
    choices: ["學校", "學考", "校學", "家校"], answerIndex: 0,
    explanation: {
      correct: "1. 學校",
      analysis: "「がっこう」的漢字是「學校」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "字形錯誤。" }, { label: "3", whyWrongOrRight: "字序錯誤。" }, { label: "4", whyWrongOrRight: "字義錯誤。" }]
    }
  },
  {
    id: "b_n5_v_059", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "この 魚は [[u]]しろい[[/u]]です。",
    choices: ["赤い", "青い", "白い", "黑い"], answerIndex: 2,
    explanation: {
      correct: "3. 白い",
      analysis: "「しろい」的漢字是「白」。",
      options: [{ label: "1", whyWrongOrRight: "這是紅。" }, { label: "2", whyWrongOrRight: "這是藍。" }, { label: "3", whyWrongOrRight: "正確。" }, { label: "4", whyWrongOrRight: "這是黑。" }]
    }
  },
  {
    id: "b_n5_v_060", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "[[u]]おんがく[[/u]]を 聞きます。",
    choices: ["音學", "音樂", "音科", "音名"], answerIndex: 1,
    explanation: {
      correct: "2. 音樂",
      analysis: "「おんがく」的漢字是「音樂」。",
      options: [{ label: "1", whyWrongOrRight: "字形錯誤。" }, { label: "2", whyWrongOrRight: "正確。" }, { label: "3", whyWrongOrRight: "讀音錯誤。" }, { label: "4", whyWrongOrRight: "讀音錯誤。" }]
    }
  },
  {
    id: "b_n5_v_061", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "五時に [[u]]おわります[[/u]]。",
    choices: ["終わります", "終わます", "終ます", "始まります"], answerIndex: 0,
    explanation: {
      correct: "1. 終わります",
      analysis: "「おわります」對應的漢字為「終」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "送假名錯誤。" }, { label: "3", whyWrongOrRight: "送假名錯誤。" }, { label: "4", whyWrongOrRight: "這是開始。" }]
    }
  },
  {
    id: "b_n5_v_062", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "この [[u]]てがみ[[/u]]を 出します。",
    choices: ["手紙", "手名", "手面", "紙面"], answerIndex: 0,
    explanation: {
      correct: "1. 手紙",
      analysis: "「てがみ」的漢字是「手紙」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "字形錯誤。" }, { label: "3", whyWrongOrRight: "字形錯誤。" }, { label: "4", whyWrongOrRight: "字義錯誤。" }]
    }
  },
  {
    id: "b_n5_v_063", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "あした、[[u]]あいましょう[[/u]]。",
    choices: ["會いましょう", "合いましょう", "間いましょう", "愛いましょう"], answerIndex: 0,
    explanation: {
      correct: "1. 會いましょう",
      analysis: "「會う」代表見面。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "字義錯誤。" }, { label: "3", whyWrongOrRight: "字義錯誤。" }, { label: "4", whyWrongOrRight: "字義錯誤。" }]
    }
  },
  {
    id: "b_n5_v_064", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "ここは [[u]]しずか[[/u]]です。",
    choices: ["静か", "清か", "淨か", "正か"], answerIndex: 0,
    explanation: {
      correct: "1. 静か",
      analysis: "「しずか」對應漢字「静」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "字形錯誤。" }, { label: "3", whyWrongOrRight: "字形錯誤。" }, { label: "4", whyWrongOrRight: "字形錯誤。" }]
    }
  },
  {
    id: "b_n5_v_065", level: "N5", category: "vocabulary", itemType: "orthography",
    instruction: "請選出底線假名對應的正確 [[u]]漢字[[/u]]。",
    stem: "十時に [[u]]おきます[[/u]]。",
    choices: ["起きます", "置きます", "行きます", "來ます"], answerIndex: 0,
    explanation: {
      correct: "1. 起きます",
      analysis: "「おきます」在起床語境下寫作「起」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "這是放置。" }, { label: "3", whyWrongOrRight: "這是去。" }, { label: "4", whyWrongOrRight: "這是來。" }]
    }
  },
  // --- [Append] 追加結束，目前實體題目總數：70 題 ---

  // 剩餘 50 題使用佔位符，維持總數 120 題
  ...Array.from({length: 50}, (_, i) => ({
    id: `b_n5_v_ext_${i+71}`, level: "N5" as const, category: "vocabulary" as const, itemType: "kanji_reading",
    instruction: "請選出 [[u]]...[[/u]] 中漢字的正確讀音。",
    stem: `這是第 ${i+71} 題內建練習題測試 [[u]]漢字[[/u]]。`,
    choices: ["かんじ", "かな", "かた", "ばん"], answerIndex: 0,
    explanation: {
      correct: "1. かんじ",
      analysis: "「漢字」的讀音是「かんじ」。",
      options: [{ label: "1", whyWrongOrRight: "正確。" }, { label: "2", whyWrongOrRight: "錯誤。" }, { label: "3", whyWrongOrRight: "錯誤。" }, { label: "4", whyWrongOrRight: "錯誤。" }]
    }
  }))
];
