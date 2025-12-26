
import { GoogleGenAI, Type } from "@google/genai";
import { ExamLevel, Category, QuizSession } from "../types";

// Service to generate JLPT-style quiz questions using Gemini 3 series model
export const generateQuiz = async (level: ExamLevel, category: Category, count: number): Promise<QuizSession> => {
  // Always initialize a fresh client instance to ensure current environment configuration is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Generate a ${level} level Japanese ${category} quiz with ${count} questions. 
  Focus on the following subtypes: ${category === 'vocabulary' ? '漢字讀法, 漢字書寫, 前後關係, 近義替換' : '句子語法1, 句子語法2, 文章語法'}.
  Follow the strict JLPT style. Ensure diversity in question difficulty.`;

  // Define the JSON response schema for structured output as recommended.
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

    // Access text property directly (it's a getter, not a method)
    const jsonStr = response.text;
    if (!jsonStr) {
      throw new Error("Received empty response from Gemini API");
    }
    
    return JSON.parse(jsonStr.trim()) as QuizSession;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("無法生成題目，請檢查網路連線或稍後再試。");
  }
};
