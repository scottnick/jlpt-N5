export const JLPT_REFERENCE_BANK = {
  N5: {
    vocabulary: [
      {
        id: "n5_v_kr_01",
        level: "N5",
        category: "vocabulary",
        itemType: "kanji_reading",
        question: "あそこに大きい [[u]]山[[/u]] があります。",
        choices: ["やま", "かわ", "うみ", "そら"],
        answerIndex: 0,
        explanation: {
          correct: "1. やま",
          analysis: "這裡要考的是漢字「山」的讀音。在 N5 的自然單字中，山（やま）與川（かわ）是最基本的。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「山」的讀音就是「やま」。" },
            { label: "2", whyWrongOrRight: "這是「川」的讀音。" },
            { label: "3", whyWrongOrRight: "這是「海」的讀音。" },
            { label: "4", whyWrongOrRight: "這是「空」的讀音。" }
          ]
        }
      },
      {
        id: "n5_v_kr_02",
        level: "N5",
        category: "vocabulary",
        itemType: "kanji_reading",
        question: "つくえの [[u]]下[[/u]] にねこがいます。",
        choices: ["うえ", "なか", "した", "そと"],
        answerIndex: 2,
        explanation: {
          correct: "3. した",
          analysis: "這題要注意方位詞「下」的唸法。貓咪在桌子下面，所以對應的是「した」。",
          options: [
            { label: "1", whyWrongOrRight: "這是「上」，代表上面。" },
            { label: "2", whyWrongOrRight: "這是「中」，代表裡面。" },
            { label: "3", whyWrongOrRight: "正確，「下」唸作「した」。" },
            { label: "4", whyWrongOrRight: "這是「外」，代表外面。" }
          ]
        }
      },
      {
        id: "n5_v_ot_01",
        level: "N5",
        category: "vocabulary",
        itemType: "orthography",
        question: "わたしの [[u]]くるま[[/u]] はあおいです。",
        choices: ["車", "東", "電", "校"],
        answerIndex: 0,
        explanation: {
          correct: "1. 車",
          analysis: "主要是考「くるま」這個唸法對應的漢字，這是交通工具類的基本單字。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「車」的唸法就是「くるま」。" },
            { label: "2", whyWrongOrRight: "這是「東（ひがし）」。" },
            { label: "3", whyWrongOrRight: "這是「電」，通常用在「電車」等組合詞。" },
            { label: "4", whyWrongOrRight: "這是「校」，通常用在「学校」等組合詞。" }
          ]
        }
      },
      {
        id: "n5_v_ot_02",
        level: "N5",
        category: "vocabulary",
        itemType: "orthography",
        question: "あの方はわたしの [[u]]せんせい[[/u]] です。",
        choices: ["先生", "學生", "先週", "洗濯"],
        answerIndex: 0,
        explanation: {
          correct: "1. 先生",
          analysis: "這題在考常用單字「先生（老師）」的正確漢字。要小心不要跟其他「先」開頭的字搞混。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「先生」對應的假名就是「せんせい」。" },
            { label: "2", whyWrongOrRight: "這是「学生（がくせい）」。" },
            { label: "3", whyWrongOrRight: "這是「先週（せんしゅう）」，代表上週。" },
            { label: "4", whyWrongOrRight: "這是「洗濯（せんたく）」，代表洗衣服。" }
          ]
        }
      },
      {
        id: "n5_v_ce_01",
        level: "N5",
        category: "vocabulary",
        itemType: "context_expression",
        question: "くらいですから、電気を （　） ください。",
        choices: ["つけて", "けして", "あけて", "しめて"],
        answerIndex: 0,
        explanation: {
          correct: "1. つけて",
          analysis: "因為前面說「很暗（くらい）」，所以後面接「請開燈（つけて）」最符合邏輯。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「つける」是用在打開電器（如電燈）開關。" },
            { label: "2", whyWrongOrRight: "這是關掉電源的意思。" },
            { label: "3", whyWrongOrRight: "這是打開窗戶或門的意思。" },
            { label: "4", whyWrongOrRight: "這是關閉的意思。" }
          ]
        }
      },
      {
        id: "n5_v_ce_02",
        level: "N5",
        category: "vocabulary",
        itemType: "context_expression",
        question: "おなかがすきましたから、（　）をたべたいです。",
        choices: ["おちゃ", "ごはん", "みず", "おんがく"],
        answerIndex: 1,
        explanation: {
          correct: "2. ごはん",
          analysis: "肚子餓了（おなかがすきました）之後，當然就是要「吃飯（ごはん）」。",
          options: [
            { label: "1", whyWrongOrRight: "茶是用來「喝」的。" },
            { label: "2", whyWrongOrRight: "正確，「ごはん」代表飯或餐點。" },
            { label: "3", whyWrongOrRight: "水是用來「喝」的。" },
            { label: "4", whyWrongOrRight: "音樂是用來「聽」的。" }
          ]
        }
      },
      {
        id: "n5_v_pp_01",
        level: "N5",
        category: "vocabulary",
        itemType: "paraphrase",
        question: "きのうは （おやすみ） でした。",
        choices: ["ひまでした", "びょうきでした", "がっこうへ行きませんでした", "しごとがたくさんありました"],
        answerIndex: 2,
        explanation: {
          correct: "3. がっこうへ行きませんでした",
          analysis: "「おやすみ」就是休息的意思，對應到「沒去學校」這個選項最合適。",
          options: [
            { label: "1", whyWrongOrRight: "「很閒」跟「休息日」意思不太一樣。" },
            { label: "2", whyWrongOrRight: "生病並不等於單純的休息。" },
            { label: "3", whyWrongOrRight: "正確，休息日代表不用去學校。" },
            { label: "4", whyWrongOrRight: "這是忙碌的意思。" }
          ]
        }
      },
      {
        id: "n5_v_pp_02",
        level: "N5",
        category: "vocabulary",
        itemType: "paraphrase",
        question: "テストは （だいたい） わかりました。",
        choices: ["ぜんぜん", "すこし", "ぜんぶではありませんが、ほとんど", "とても"],
        answerIndex: 2,
        explanation: {
          correct: "3. ぜん部ではありませんが、ほとんど",
          analysis: "「だいたい」是大約、大體上的意思，對應到「雖然不是全部，但大部分都懂了」。",
          options: [
            { label: "1", whyWrongOrRight: "這是「完全不」的意思。" },
            { label: "2", whyWrongOrRight: "這是「一點點」的意思。" },
            { label: "3", whyWrongOrRight: "正確，「大部分」最接近「だいたい」。" },
            { label: "4", whyWrongOrRight: "這是「非常」的意思。" }
          ]
        }
      }
    ],
    grammar: [
      {
        id: "n5_g_sf_01",
        level: "N5",
        category: "grammar",
        itemType: "selecting_grammar_form",
        question: "あした、ともだち （　） 映画を見に行きます。",
        choices: ["を", "に", "と", "が"],
        answerIndex: 2,
        explanation: {
          correct: "3. と",
          analysis: "這裡是用助詞「と」來表示共同行動的對象，也就是「和朋友」一起去。",
          options: [
            { label: "1", whyWrongOrRight: "這是標示受詞用的助詞。" },
            { label: "2", whyWrongOrRight: "這是標示時間點或目的地用的。" },
            { label: "3", whyWrongOrRight: "正確，「と」表示「和某人一起」。" },
            { label: "4", whyWrongOrRight: "這是標示主詞用的助詞。" }
          ]
        }
      },
      {
        id: "n5_g_sf_02",
        level: "N5",
        category: "grammar",
        itemType: "selecting_grammar_form",
        question: "きのうは　あめ （　） ですから、どこへも行きませんでした。",
        choices: ["だ", "でした", "の", "な"],
        answerIndex: 1,
        explanation: {
          correct: "2. でした",
          analysis: "句子開頭是「昨日（昨天）」，代表要描述過去的事，所以名詞後面要用過去式「でした」。",
          options: [
            { label: "1", whyWrongOrRight: "這是現在式的用法。" },
            { label: "2", whyWrongOrRight: "正確，「あめでした」表示昨天是雨天。" },
            { label: "3", whyWrongOrRight: "這裡不需要加「の」。" },
            { label: "4", whyWrongOrRight: "通常接在形容動詞後面。" }
          ]
        }
      },
      {
        id: "n5_g_sc_01",
        level: "N5",
        category: "grammar",
        itemType: "sentence_composition",
        question: "わたしは ___ ___ _★_ ___ を読みました。",
        choices: ["本", "新しい", "昨日", "買った"],
        answerIndex: 3,
        explanation: {
          correct: "4. 買った",
          analysis: "組起來的順序是「昨日(3) 新しい(2) 買った(4★) 本(1)」，意思是「讀了昨天買的新書」。",
          options: [
            { label: "1", whyWrongOrRight: "「本」要放在受詞位置。" },
            { label: "2", whyWrongOrRight: "形容詞要放在名詞前面。" },
            { label: "3", whyWrongOrRight: "時間副詞放在句首或動詞前。" },
            { label: "4", whyWrongOrRight: "正確順序中星星位置要填「買った」。" }
          ]
        }
      },
      {
        id: "n5_g_sc_02",
        level: "N5",
        category: "grammar",
        itemType: "sentence_composition",
        question: "すみません、___ ___ _★_ ___ はどこですか。",
        choices: ["駅", "行く", "まで", "バス"],
        answerIndex: 2,
        explanation: {
          correct: "3. まで",
          analysis: "正確順序是「駅(1) まで(3★) 行く(2) バス(4)」，指的是「去車站的公車」。",
          options: [
            { label: "1", whyWrongOrRight: "目的地放在最前面。" },
            { label: "2", whyWrongOrRight: "動詞修飾後面的名詞。" },
            { label: "3", whyWrongOrRight: "正確順序中星星位置應填「まで」。" },
            { label: "4", whyWrongOrRight: "主語「バス」放在最後面。" }
          ]
        }
      }
    ],
    reading: [
      {
        id: "n5_r_sp_01",
        level: "N5",
        category: "reading",
        itemType: "reading_short_passage",
        question: "田中さんは何時にどこへ行きますか。",
        choices: ["3時に駅に行きます", "4時に駅に行きます", "3時にデパートに行きます", "4時にデパートに行きます"],
        answerIndex: 1,
        explanation: {
          correct: "2. 4時に駅に行きます",
          analysis: "短文裡明確提到「4時に駅で会いましょう」，所以田中先生會在這個時間出現在車站。",
          options: [
            { label: "1", whyWrongOrRight: "時間不對，文中說 4 點。" },
            { label: "2", whyWrongOrRight: "正確，對應文中約定的時間地點。" },
            { label: "3", whyWrongOrRight: "時間跟地點都錯了。" },
            { label: "4", whyWrongOrRight: "地點不對。" }
          ]
        },
        passage: {
          text: "リーさん、こんにちは。今日の午後はデパートへ買い物に行きます。之後，4時に駅で田中さんと会いましょう。よろしくお願いします。"
        }
      },
      {
        id: "n5_r_ir_01",
        level: "N5",
        category: "reading",
        itemType: "reading_info_retrieval",
        question: "木曜日の午後は休みですか。",
        choices: ["はい、休みです", "いいえ、午後もやっています", "朝だけ休みです", "夜だけやっています"],
        answerIndex: 0,
        explanation: {
          correct: "1. はい、休みです",
          analysis: "對照表中的木曜日（週四）那一欄，午後標示為「／」，代表休息沒看診。",
          options: [
            { label: "1", whyWrongOrRight: "正確，符合表格中的標示。" },
            { label: "2", whyWrongOrRight: "不對，表格顯示是休息。" },
            { label: "3", whyWrongOrRight: "早上（上午）是有看診的。" },
            { label: "4", whyWrongOrRight: "表格裡沒有夜診的資訊。" }
          ]
        },
        passage: {
          table: {
            title: "さくら病院の診療時間",
            headers: ["曜日", "月", "火", "水", "木", "金"],
            rows: [
              ["午前 (9:00-12:00)", "○", "○", "○", "○", "○"],
              ["午後 (14:00-17:00)", "○", "○", "／", "／", "○"]
            ],
            notes: "「／」は休みです。"
          }
        }
      }
    ]
  },
  N4: {
    vocabulary: [
      {
        id: "n4_v_kr_01",
        level: "N4",
        category: "vocabulary",
        itemType: "kanji_reading",
        question: "大切なことは友達に [[u]]相談[[/u]] します。",
        choices: ["しょうだん", "そうだん", "しんぱい", "そんけい"],
        answerIndex: 1,
        explanation: {
          correct: "2. そうだん",
          analysis: "「相談（商量）」是 N4 的重點單字。唸的時候要特別注意長音和濁音的部分喔。",
          options: [
            { label: "1", whyWrongOrRight: "前面的音唸錯了。" },
            { label: "2", whyWrongOrRight: "正確，「相談」的讀法就是「そうだん」。" },
            { label: "3", whyWrongOrRight: "這是「心配」的唸法。" },
            { label: "4", whyWrongOrRight: "這是「尊敬」的唸法。" }
          ]
        }
      },
      {
        id: "n4_v_kr_02",
        level: "N4",
        category: "vocabulary",
        itemType: "kanji_reading",
        question: "日本の生活の [[u]]習慣[[/u]] になれました。",
        choices: ["しゅうかん", "じゅうかん", "きそく", "けいけん"],
        answerIndex: 0,
        explanation: {
          correct: "1. しゅうかん",
          analysis: "這題要注意「習慣」的讀音是「しゅうかん」，長音的部分要唸清楚。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「習慣」讀作「しゅうかん」。" },
            { label: "2", whyWrongOrRight: "濁音的位置錯了。" },
            { label: "3", whyWrongOrRight: "這是「規則」的意思。" },
            { label: "4", whyWrongOrRight: "這是「經驗」的意思。" }
          ]
        }
      },
      {
        id: "n4_v_ot_01",
        level: "N4",
        category: "vocabulary",
        itemType: "orthography",
        question: "この道は車が多くて [[u]]危ない[[/u]] です。",
        choices: ["危ない", "恐い", "暗い", "苦い"],
        answerIndex: 0,
        explanation: {
          correct: "1. 危ない",
          analysis: "這裡要找出「危險（あぶない）」對應的漢字。N4 很常考這類形容詞的寫法。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「危ない」就是「あぶない」。" },
            { label: "2", whyWrongOrRight: "這是「恐（こわ）い」，代表可怕。" },
            { label: "3", whyWrongOrRight: "這是「暗（くら）い」，代表黑暗。" },
            { label: "4", whyWrongOrRight: "這是「苦（にが）い」，代表苦澀。" }
          ]
        }
      },
      {
        id: "n4_v_ot_02",
        level: "N4",
        category: "vocabulary",
        itemType: "orthography",
        question: "将来の [[u]]けいかく[[/u]] を立てます。",
        choices: ["計画", "計面", "結画", "形画"],
        answerIndex: 0,
        explanation: {
          correct: "1. 計画",
          analysis: "這裡要注意「計畫」的日文漢字正確寫法，右邊的部分跟中文稍有不同。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「計画」就是「けいかく」。" },
            { label: "2", whyWrongOrRight: "字形寫錯了。" },
            { label: "3", whyWrongOrRight: "左邊的漢字用錯了。" },
            { label: "4", whyWrongOrRight: "唸法雖然有點像，但漢字是錯的。" }
          ]
        }
      },
      {
        id: "n4_v_ce_01",
        level: "N4",
        category: "vocabulary",
        itemType: "context_expression",
        question: "かぜをひいたので、くすりを （　） ねました。",
        choices: ["のんで", "たべて", "かんで", "ふいて"],
        answerIndex: 0,
        explanation: {
          correct: "1. のんで",
          analysis: "在日文中，「吃藥」習慣上要用動詞「飲む（喝）」，這點跟中文用「吃」不太一樣，要特別注意。",
          options: [
            { label: "1", whyWrongOrRight: "正確，藥物的搭配動詞一定要用「のむ」。" },
            { label: "2", whyWrongOrRight: "日文不會說「藥物をたべる」。" },
            { label: "3", whyWrongOrRight: "這是「嚼」的意思。" },
            { label: "4", whyWrongOrRight: "這是「擦」的意思。" }
          ]
        }
      },
      {
        id: "n4_v_pp_01",
        level: "N4",
        category: "vocabulary",
        itemType: "paraphrase",
        question: "試験の結果を見て （がっかり） しました。",
        choices: ["おどろきました", "あんしんしました", "ざんねんに思いました", "よろこびました"],
        answerIndex: 2,
        explanation: {
          correct: "3. ざんねんに思いました",
          analysis: "「がっかり」形容的是失望、沮喪的心情。選項中「感到遺憾、可惜」的意思最接近。",
          options: [
            { label: "1", whyWrongOrRight: "這是驚訝的意思。" },
            { label: "2", whyWrongOrRight: "這是放心的意思。" },
            { label: "3", whyWrongOrRight: "正確，感到遺憾與失望語意最契合。" },
            { label: "4", whyWrongOrRight: "這是高興的意思。" }
          ]
        }
      },
      {
        id: "n4_v_us_01",
        level: "N4",
        category: "vocabulary",
        itemType: "usage",
        question: "（準備）の使い方として最も適切なものを選びなさい。",
        choices: [
          "明日旅行に行くので、荷物の準備をします。",
          "毎日準備を食べてから学校へ行きます。",
          "この準備はとても美味しいです。",
          "彼は準備が速いので100メートル10秒で走れます。"
        ],
        answerIndex: 0,
        explanation: {
          correct: "1. 明日旅行に行くので、荷物の準備をします。",
          analysis: "這題要找出「準備」最自然的用法。它是指為了接下來要做的事先做好預備動作。",
          options: [
            { label: "1", whyWrongOrRight: "正確，旅行前整理行李就是一種準備。" },
            { label: "2", whyWrongOrRight: "這裡應該用「食事（吃飯）」。" },
            { label: "3", whyWrongOrRight: "準備不能用「好吃」來形容。" },
            { label: "4", whyWrongOrRight: "這應該是指跑步的速度（スピード）。" }
          ]
        }
      }
    ],
    grammar: [
      {
        id: "n4_g_sf_01",
        level: "N4",
        category: "grammar",
        itemType: "selecting_grammar_form",
        question: "日本語が上手に話せる （　） 每天練習しています。",
        choices: ["ように", "ために", "ことに", "までに"],
        answerIndex: 0,
        explanation: {
          correct: "1. ように",
          analysis: "這裡用「ように」來表示目的。前面接可能動詞，代表希望能達成「會說日文」的狀態。",
          options: [
            { label: "1", whyWrongOrRight: "正確，前面接可能動詞時用來表示努力的目標。" },
            { label: "2", whyWrongOrRight: "這通常接在意志動詞後表示目的。" },
            { label: "3", whyWrongOrRight: "文法上不通順。" },
            { label: "4", whyWrongOrRight: "這是表示期限的意思。" }
          ]
        }
      },
      {
        id: "n4_g_sc_01",
        level: "N4",
        category: "grammar",
        itemType: "sentence_composition",
        question: "私は母 ___ ___ _★_ ___ くれました。",
        choices: ["に", "誕生日に", "時計を", "買って"],
        answerIndex: 2,
        explanation: {
          correct: "3. 時計を",
          analysis: "這是在考授予關係（買給我）的句型。排起來的意思是「我媽在我生日時買了手錶給我」。",
          options: [
            { label: "1", whyWrongOrRight: "標示給予對象的助詞。" },
            { label: "2", whyWrongOrRight: "標示時間點。" },
            { label: "3", whyWrongOrRight: "正確，星星位置剛好要填受詞「時計を」。" },
            { label: "4", whyWrongOrRight: "動詞的て形用來連結後面的補助動詞。" }
          ]
        }
      },
      {
        id: "n4_g_tg_01",
        level: "N4",
        category: "grammar",
        itemType: "text_grammar",
        question: "文章の（ 1 ）に入る最も適切なものを選びなさい。",
        choices: ["それから", "しかし", "だから", "たとえば"],
        answerIndex: 1,
        explanation: {
          correct: "2. しかし",
          analysis: "要根據前後文的關係來選。前面說網購很方便，後面提缺點，中間就要用轉折詞「但是（しかし）」。",
          options: [
            { label: "1", whyWrongOrRight: "這是「在那之後」的意思。" },
            { label: "2", whyWrongOrRight: "正確，用來表示前後語意的轉折。" },
            { label: "3", whyWrongOrRight: "這是「所以」的意思。" },
            { label: "4", whyWrongOrRight: "這是「例如」的意思。" }
          ]
        }
      }
    ],
    reading: [
      {
        id: "n4_r_sp_01",
        level: "N4",
        category: "reading",
        itemType: "reading_short_passage",
        question: "このメールで一番伝えたいことは何ですか。",
        choices: ["パーティーに来てほしいこと", "時間を変更したいこと", "場所を教えてほしいこと", "飲み物を持ってきてほしいこと"],
        answerIndex: 1,
        explanation: {
          correct: "2. 時間を変更したいこと",
          analysis: "信的主旨在於後面那句「希望能把開始時間從 19 點改到 20 點」。",
          options: [
            { label: "1", whyWrongOrRight: "這只是信件的前提，不是發信主旨。" },
            { label: "2", whyWrongOrRight: "正確，發信人明確提出了修改時間的請求。" },
            { label: "3", whyWrongOrRight: "地點文中已經交代過了。" },
            { label: "4", whyWrongOrRight: "文中完全沒有提到這件事。" }
          ]
        },
        passage: {
          text: "木村さん、お疲れ様です。明日の親睦會ですが、仕事が終わらないため、開始時間を19時から20時に変更させてください。急ですみませんが、よろしくお願いします。"
        }
      },
      {
        id: "n4_r_set_01_q1",
        level: "N4",
        category: "reading",
        itemType: "reading_info_retrieval",
        question: "一番早く着く電車はどれですか。",
        choices: ["急行 8:15", "各停 8:20", "急行 9:10", "各停 9:30"],
        answerIndex: 0,
        explanation: {
          correct: "1. 急行 8:15",
          analysis: "仔細對照表中的到站時間，8:15 出發的那班急行電車是最早到達新宿的。",
          options: [
            { label: "1", whyWrongOrRight: "正確，它的到站時間最早。" },
            { label: "2", whyWrongOrRight: "雖然出發只晚 5 分鐘，但到站時間晚很多。" },
            { label: "3", whyWrongOrRight: "這是下一時段的車次了。" },
            { label: "4", whyWrongOrRight: "這是表格中最晚到的班次。" }
          ]
        },
        passage: {
          table: {
            title: "山川駅 時刻表 (新宿行)",
            headers: ["種類", "發車時間", "到站時間"],
            rows: [
              ["急行", "8:15", "8:45"],
              ["各停", "8:20", "9:05"],
              ["急行", "9:10", "9:40"],
              ["各停", "9:30", "10:15"]
            ]
          }
        }
      },
      {
        id: "n4_r_mp_01",
        level: "N4",
        category: "reading",
        itemType: "reading_mid_passage",
        question: "佐藤さんはどうしてこのメールを送りましたか。",
        choices: [
          "新しい冷蔵庫を買ったことを知らせるため",
          "冷蔵庫の中を掃除してほしいと頼むため",
          "冷蔵庫にある自分の食べ物を食べてほしいと言うため",
          "冷蔵庫の使い方について注意をするため"
        ],
        answerIndex: 3,
        explanation: {
          correct: "4. 冷蔵庫の使い方について注意をするため",
          analysis: "這篇公告主要是管理人要提醒大家遵守冰箱的使用規則，因為最近冰箱裡的東西太亂了。",
          options: [
            { label: "1", whyWrongOrRight: "不對，文中沒說有新冰箱。" },
            { label: "2", whyWrongOrRight: "雖然有抱怨，但重點是要大家遵守規則，不是叫人去打掃。" },
            { label: "3", whyWrongOrRight: "文中是在抱怨別人的過期食物，不是要分享自己的東西。" },
            { label: "4", whyWrongOrRight: "正確，結尾明確要求大家要遵守規則（ルールを守ってください）。" }
          ],
          extra: "這類公告題通常會在結尾出現祈使句，來傳達發文者的真正意圖。"
        },
        passage: {
          id: "n4_reading_mid_01",
          text: "寮のみなさんへ\n\n最近、みんなで使っている冷蔵庫の使い方が良くないです。昨日、冷蔵庫をチェックしたら、一ヶ月以上前の野菜や、いつ買ったかわからない古い肉がたくさん入っていました。また、名前が書いていない飲み物も多いです。誰のものかわからないと、掃除をする時に困ります。\n\n今日から、冷蔵庫に入れるものには必ず名前と日付を書いてください。一週間を過ぎたものは捨てます。みんなが気持ちよく使えるように、ルールを守ってください。\n\n管理人　佐藤"
        }
      }
    ]
  }
};