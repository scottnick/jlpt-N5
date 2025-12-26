
export const JLPT_REFERENCE_BANK = {
  N5: {
    vocabulary: [
      {
        itemType: "kanji_reading",
        question: "あそこに（山）があります。",
        choices: ["やま", "かわ", "うみ", "そら"],
        answerIndex: 0,
        explanation: {
          correct: "1. やま",
          analysis: "「山」的讀音是「やま」。這是一道基礎的漢字讀音題。",
          options: [
            { label: "1", whyWrongOrRight: "正確，「山」讀作「やま」。" },
            { label: "2", whyWrongOrRight: "錯誤，「かわ」是「川」。" },
            { label: "3", whyWrongOrRight: "錯誤，「うみ」是「海」。" },
            { label: "4", whyWrongOrRight: "錯誤，「そら」是「空」。" }
          ]
        }
      }
    ],
    grammar: [
      {
        itemType: "sentence_composition",
        question: "私は昨日、___ ___ _★_ ___ を読みました。",
        choices: ["本", "新しい", "買った", "ばかりの"],
        answerIndex: 2,
        explanation: {
          correct: "3. 買った",
          analysis: "正確順序為「新しい 買った ばかりの 本」。星星位置是「買った」。",
          options: [
            { label: "1", whyWrongOrRight: "本放在最後作為名詞。" },
            { label: "2", whyWrongOrRight: "新しい修飾名詞。" },
            { label: "3", whyWrongOrRight: "正確，動詞過去式接續。" },
            { label: "4", whyWrongOrRight: "ばかりの修飾名詞。" }
          ]
        }
      }
    ]
  },
  N4: {
    vocabulary: [
      {
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
          analysis: "「準備」是指為了某事預先準備。選項1符合情境。",
          options: [
            { label: "1", whyWrongOrRight: "正確，旅行前的準備。" },
            { label: "2", whyWrongOrRight: "錯誤，應該用「朝ごはん」。" },
            { label: "3", whyWrongOrRight: "錯誤，準備不能用好吃形容。" },
            { label: "4", whyWrongOrRight: "錯誤，應該用「足」或「スピード」。" }
          ]
        }
      }
    ]
  }
};
