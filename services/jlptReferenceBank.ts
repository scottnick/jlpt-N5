
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
          analysis: "本題考查漢字「山」的讀音。在日檢 N5 中，這是最基礎的自然地理單字。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「山」讀作「やま」。" },
            { label: "2", whyWrongOrRight: "錯誤，「かわ」寫作「川」。" },
            { label: "3", whyWrongOrRight: "錯誤，「うみ」寫作「海」。" },
            { label: "4", whyWrongOrRight: "錯誤，「そら」寫作「空」。" }
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
          analysis: "考查方位詞「下」的讀音。對應情境是貓在桌子下方。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，「上（うえ）」表示上面。" },
            { label: "2", whyWrongOrRight: "錯誤，「中（なか）」表示裡面。" },
            { label: "3", whyWrongOrRight: "正確，「下」讀作「した」。" },
            { label: "4", whyWrongOrRight: "錯誤，「外（そと）」表示外面。" }
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
          analysis: "考查假名「くるま」對應的漢字。這是交通工具類的必備單字。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「車」讀作「くるま」。" },
            { label: "2", whyWrongOrRight: "錯誤，「東」讀作「ひがし」。" },
            { label: "3", whyWrongOrRight: "錯誤，「電」通常讀作「でん」。" },
            { label: "4", whyWrongOrRight: "錯誤，「校」通常讀作「こう」。" }
          ]
        }
      },
      {
        id: "n5_v_ot_02",
        level: "N5",
        category: "vocabulary",
        itemType: "orthography",
        question: "あの方はわたしの [[u]]せんせい[[/u]] です。",
        choices: ["先生", "学生", "先週", "洗濯"],
        answerIndex: 0,
        explanation: {
          correct: "1. 先生",
          analysis: "考查常用詞彙「先生」的正確漢字寫法，並區分形近或音近詞彙。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「先生」對應「せんせい」。" },
            { label: "2", whyWrongOrRight: "錯誤，「学生（がくせい）」指學生。" },
            { label: "3", whyWrongOrRight: "錯誤，「先週（せんしゅう）」指上週。" },
            { label: "4", whyWrongOrRight: "錯誤，「洗濯（せんたく）」指洗衣服。" }
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
          analysis: "根據前半句「很暗（くらい）」，後段要求打開電器設備最為自然。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「つける」指打開電子設備（電燈）。" },
            { label: "2", whyWrongOrRight: "錯誤，「けす」指關掉電源。" },
            { label: "3", whyWrongOrRight: "錯誤，「開（あ）ける」指打開窗或門。" },
            { label: "4", whyWrongOrRight: "錯誤，「閉（し）める」指關閉。" }
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
          analysis: "「肚子餓了（おなかがすきました）」對應的動作是吃東西（たべる）。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，「茶」是用來喝的。" },
            { label: "2", whyWrongOrRight: "正確，「ごはん」指飯或食物。" },
            { label: "3", whyWrongOrRight: "錯誤，「水」是用來喝的。" },
            { label: "4", whyWrongOrRight: "錯誤，「音樂」是用來聽的。" }
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
          analysis: "「おやすみ（休息）」的意思是不用上班或上學。選項 3 最符合休息的語義。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，「閒暇」不等於休息日。" },
            { label: "2", whyWrongOrRight: "錯誤，「生病」不是休息的同義詞。" },
            { label: "3", whyWrongOrRight: "正確，休息日代表沒去學校。" },
            { label: "4", whyWrongOrRight: "錯誤，「工作很多」與休息相反。" }
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
          analysis: "「だいたい」表示「大約、大體上」，對應「大部分都懂了」。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，「完全不」是反義詞。" },
            { label: "2", whyWrongOrRight: "錯誤，「一點點」程度不符。" },
            { label: "3", whyWrongOrRight: "正確，指雖然不是全部但大部分。" },
            { label: "4", whyWrongOrRight: "錯誤，「非常」是強調語氣。" }
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
          analysis: "考查助詞「と」表示共同行動的對象（和某人一起）。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，「を」標示受詞。" },
            { label: "2", whyWrongOrRight: "錯誤，「に」標示目的地或時間。" },
            { label: "3", whyWrongOrRight: "正確，「と」表示「和朋友」。" },
            { label: "4", whyWrongOrRight: "錯誤，「が」標示主詞。" }
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
          analysis: "考查過去式判定。「きのう（昨天）」需搭配名詞的過去式「でした」。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，「だ」是現在肯定。" },
            { label: "2", whyWrongOrRight: "正確，「でした」是過去肯定。" },
            { label: "3", whyWrongOrRight: "錯誤，接續不自然。" },
            { label: "4", whyWrongOrRight: "錯誤，形容動詞才用「な」。" }
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
          analysis: "正確順序為「昨日 新しい 買った 本」。星星位置是「買った」。",
          options: [
            { label: "1", whyWrongOrRight: "本放在最後作為受詞。" },
            { label: "2", whyWrongOrRight: "形容詞放在名詞前。" },
            { label: "3", whyWrongOrRight: "時間副詞放在句首或修飾。" },
            { label: "4", whyWrongOrRight: "正確順序：昨日(3) 新しい(2) 買った(4) 本(1)。" }
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
          analysis: "正確順序為「駅 まで 行く バス」。",
          options: [
            { label: "1", whyWrongOrRight: "目的地在最前。" },
            { label: "2", whyWrongOrRight: "修飾語放在名詞前。" },
            { label: "3", whyWrongOrRight: "正確順序：駅(1) まで(3) 行く(2) バス(4)。" },
            { label: "4", whyWrongOrRight: "主語在最後。" }
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
          analysis: "根據短文提到「4時に駅で会いましょう」，田中應該在 4 點去車站。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，文中說是 4 點。" },
            { label: "2", whyWrongOrRight: "正確，對應文中約定時間地點。" },
            { label: "3", whyWrongOrRight: "錯誤，地點時間皆錯。" },
            { label: "4", whyWrongOrRight: "錯誤，地點錯誤。" }
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
          analysis: "查看表格中木曜日（週四）的欄位，午後標示為「／」代表休息。",
          options: [
            { label: "1", whyWrongOrRight: "正確，符合時刻表標示。" },
            { label: "2", whyWrongOrRight: "錯誤，標示顯示休息。" },
            { label: "3", whyWrongOrRight: "錯誤，朝（早晨）有時間。" },
            { label: "4", whyWrongOrRight: "錯誤，表格無此資訊。" }
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
          analysis: "「相談」是 N4 核心單字，讀音為「そうだん」。注意長音與濁音。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，首字不帶長音。" },
            { label: "2", whyWrongOrRight: "正確，「相談」讀作「そうだん」。" },
            { label: "3", whyWrongOrRight: "錯誤，「心配（しんぱい）」是擔心。" },
            { label: "4", whyWrongOrRight: "錯誤，「尊敬（そんけい）」是尊敬。" }
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
          analysis: "「習慣」讀作「しゅうかん」。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「習慣」讀作「しゅうかん」。" },
            { label: "2", whyWrongOrRight: "錯誤，濁音錯誤。" },
            { label: "3", whyWrongOrRight: "錯誤，「規則（きそく）」字義不同。" },
            { label: "4", whyWrongOrRight: "錯誤，「經驗（けいけん）」字義不同。" }
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
          analysis: "考查「危險」的漢字。N4 常考形容詞漢字。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「危ない」即「あぶない」。" },
            { label: "2", whyWrongOrRight: "錯誤，「恐（こわ）い」是可怕。" },
            { label: "3", whyWrongOrRight: "錯誤，「暗（くら）い」是黑暗。" },
            { label: "4", whyWrongOrRight: "錯誤，「苦（にが）い」是苦澀。" }
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
          analysis: "考查「計畫（けいかく）」的正確日文漢字寫法。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「計画」對應「けいかく」。" },
            { label: "2", whyWrongOrRight: "錯誤，漢字字形錯誤。" },
            { label: "3", whyWrongOrRight: "錯誤，使用了錯誤的組合。" },
            { label: "4", whyWrongOrRight: "錯誤，音近但形錯。" }
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
          analysis: "日文中，吃藥固定搭配動詞「飲む（のむ）」。",
          options: [
            { label: "1", whyWrongOrRight: "正確，藥物的搭配動詞是「のむ」。" },
            { label: "2", whyWrongOrRight: "錯誤，不可直接用「たべる」。" },
            { label: "3", whyWrongOrRight: "錯誤，「かむ」是咀嚼。" },
            { label: "4", whyWrongOrRight: "錯誤，「ふく」是擦拭。" }
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
          analysis: "「がっかり」表示失望、沮喪。最接近的語義是感到遺憾或可惜。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，「驚訝」不代表失望。" },
            { label: "2", whyWrongOrRight: "錯誤，「安心」是反義。" },
            { label: "3", whyWrongOrRight: "正確，失望即是感到遺憾。" },
            { label: "4", whyWrongOrRight: "錯誤，「喜悅」是反義。" }
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
          analysis: "考查「準備」在具體場景中的應用。指為了特定目的預先做出的動作。",
          options: [
            { label: "1", whyWrongOrRight: "正確，旅行前的整理屬於準備。" },
            { label: "2", whyWrongOrRight: "錯誤，餐點應用「食事」。" },
            { label: "3", whyWrongOrRight: "錯誤，不符合語境。" },
            { label: "4", whyWrongOrRight: "錯誤，跑步快應用「足」或「スピード」。" }
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
        question: "日本語が上手に話せる （　） 毎日練習しています。",
        choices: ["ように", "ために", "ことに", "までに"],
        answerIndex: 0,
        explanation: {
          correct: "1. ように",
          analysis: "考查「ように」表示目的。搭配非意志動詞（可能動詞），表示希望達到某種狀態。",
          options: [
            { label: "1", whyWrongOrRight: "正確，搭配可能動詞表目的。" },
            { label: "2", whyWrongOrRight: "錯誤，「ために」通常搭配意志動詞。" },
            { label: "3", whyWrongOrRight: "錯誤，語法不通。" },
            { label: "4", whyWrongOrRight: "錯誤，表示期限。" }
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
          analysis: "正確順序為「私は 母に(1) 誕生日に(2) 時計を(3★) 買っ(4)て くれました」。考查授予關係句型。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，對象助詞需緊跟對象。" },
            { label: "2", whyWrongOrRight: "錯誤，時間狀語位置。" },
            { label: "3", whyWrongOrRight: "正確，星星位置應填入受詞「時計を」。" },
            { label: "4", whyWrongOrRight: "錯誤，動詞連用形接續。" }
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
          analysis: "根據文章前後文轉折語氣判斷。前文講優點，後文提缺點，故選「然而（しかし）」。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，表示接續動作。" },
            { label: "2", whyWrongOrRight: "正確，表示轉折。" },
            { label: "3", whyWrongOrRight: "錯誤，表示因果。" },
            { label: "4", whyWrongOrRight: "錯誤，表示舉例。" }
          ]
        },
        passage: {
          text: "最近はインターネットで買い物をする人が増えています。とても便利です。（ 1 ）、直接商品を見ることができないという問題もあります。"
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
          analysis: "郵件主旨在於「19時から20時に変更させてください」，即修改時間。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤，那是前提不是重點。" },
            { label: "2", whyWrongOrRight: "正確，文中明確提出請求。" },
            { label: "3", whyWrongOrRight: "錯誤，地點已告知。" },
            { label: "4", whyWrongOrRight: "錯誤，文中未提到。" }
          ]
        },
        passage: {
          text: "木村さん、お疲れ様です。明日の親睦会ですが、仕事が終わらないため、開始時間を19時から20時に変更させてください。急ですみませんが、よろしくお願いします。"
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
          analysis: "從時刻表對比，8:15 的急行車最早到達。",
          options: [
            { label: "1", whyWrongOrRight: "正確，時間最前。" },
            { label: "2", whyWrongOrRight: "錯誤，比 8:15 晚。" },
            { label: "3", whyWrongOrRight: "錯誤，屬於下一班次。" },
            { label: "4", whyWrongOrRight: "錯誤，最晚。" }
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
          analysis: "這是一道主旨題。文章開頭提到「最近、冷蔵庫の使い方が良くないです」，接著列舉了「放太久過期」和「不寫名字」等問題，最後要求「ルールを守ってください」，因此目的是為了提醒大家注意使用規則。",
          options: [
            { label: "1", whyWrongOrRight: "錯誤。文中沒提到買新冰箱。" },
            { label: "2", whyWrongOrRight: "錯誤。雖然提到冰箱髒，但重點是要求大家遵守規則，而非請求打掃。" },
            { label: "3", whyWrongOrRight: "錯誤。文中提到的是抱怨別人的食物過期，而不是要分享自己的食物。" },
            { label: "4", whyWrongOrRight: "正確。全文重點在於冰箱使用規則的宣導與提醒。" }
          ],
          extra: "這類題目通常在開頭或結尾會出現『～てください』或『～ないでください』來表達發信人的真正意圖。"
        },
        passage: {
          id: "n4_reading_mid_01",
          text: "寮のみなさんへ\n\n最近、みんなで使っている冷蔵庫の使い方が良くないです。昨日、冷蔵庫をチェックしたら、一ヶ月以上前の野菜や、いつ買ったかわからない古い肉がたくさん入っていました。また、名前が書いていない飲み物も多いです。誰のものかわからないと、掃除をする時に困ります。\n\n今日から、冷蔵庫に入れるものには必ず名前と日付を書いてください。一週間を過ぎたものは捨てます。みんなが気持ちよく使えるように、ルールを守ってください。\n\n管理人　佐藤"
        }
      }
    ]
  }
};
