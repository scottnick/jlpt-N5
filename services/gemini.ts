
import { GoogleGenAI, Type } from "@google/genai";
import { ExamLevel, Category, QuizSession } from "../types";

/**
 * JLPT Item Type Specification Reference
 * Based on official test standards for N4/N5
 */
const JLPT_ITEM_TYPE_SPEC = `
JLPT ITEM TYPE STANDARDS:
1. Vocabulary (文字語彙):
   - Kanji Reading (漢字読み): Reading kanji in sentences.
   - Orthography (表記): Choosing correct kanji or katakana for hiragana.
   - Contextual Usage (文脈規定): Choosing words based on meaning in context.
   - Paraphrasing (言い換え類義): Finding words with similar meanings.
   - Usage (用法): Identifying the correct way to use a specific word.
2. Grammar (文法):
   - Grammar Forms (文法形式の判断): Selecting the correct functional word or phrase.
   - Sentence Composition (文の組み立て): Ordering parts to form a coherent sentence (The "Star" question).
   - Text Grammar (文章の文法): Selecting appropriate grammar within a passage.
3. Reading (読解):
   - Short/Medium Passages (内容理解): Extracting key information or author's intent.
   - Information Retrieval (情報検索): Finding specific facts (e.g., from a poster).

DIFFICULTY RULES:
- N5: Basic expressions, limited kanji (approx 100), high-frequency daily words.
- N4: Daily topics, slightly more complex grammar (passive, causative), approx 300 kanji.
`;

export const generateQuiz = async (level: ExamLevel, category: Category, count: number): Promise<QuizSession> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
  ${JLPT_ITEM_TYPE_SPEC}
  
  TASK: Generate a ${level} level Japanese ${category} quiz with ${count} questions. 
  Follow the JLPT standards above strictly. 
  Ensure the difficulty is accurate for ${level}. 
  Provide natural Japanese sentences and professional explanations in Traditional Chinese (zh-TW).
  
  Subtype diversity is required. 
  For ${category} specifically, use appropriate JLPT subtypes defined in the spec.
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      version: { type: Type.STRING },
      examLevel: { type: Type.STRING },
      category: { type: Type.STRING },
      subtypesIncluded: { type: Type.ARRAY, items: { type: Type.STRING } },
      generatedAt: { type: Type.STRING },
      questions: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            subtype: { type: Type.STRING },
            stem: { type: Type.STRING },
            instruction: { type: Type.STRING },
            choices: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  label: { type: Type.STRING },
                  text: { type: Type.STRING },
                  word: { type: Type.STRING },
                  reading: { type: Type.STRING },
                  pos: { type: Type.STRING },
                  verbType: { type: Type.STRING },
                  meaningZh: { type: Type.STRING }
                },
                required: ["label", "text"]
              }
            },
            answer: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING }
              },
              required: ["label"]
            },
            explanation: {
              type: Type.OBJECT,
              properties: {
                stemTranslationZh: { type: Type.STRING },
                choiceNotes: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      label: { type: Type.STRING },
                      word: { type: Type.STRING },
                      pos: { type: Type.STRING },
                      verbType: { type: Type.STRING },
                      meaningZh: { type: Type.STRING }
                    }
                  }
                },
                whyCorrect: { type: Type.STRING },
                whyOthersWrong: { type: Type.STRING }
              }
            }
          },
          required: ["id", "subtype", "stem", "instruction", "choices", "answer", "explanation"]
        }
      }
    },
    required: ["version", "examLevel", "category", "questions"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema
      }
    });

    const jsonStr = response.text;
    if (!jsonStr) throw new Error("Empty response");
    
    return JSON.parse(jsonStr.trim()) as QuizSession;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("無法生成題目，請檢查網路連線或稍後再試。");
  }
};
