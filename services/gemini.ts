
import { GoogleGenAI, Type } from "@google/genai";
import { ExamLevel, Category, QuizSession, Question } from "../types";
import { JLPT_REFERENCE_BANK } from "./jlptReferenceBank";

export const generateQuiz = async (
  level: ExamLevel, 
  category: Category, 
  count: number,
  selectedItemTypes: string[]
): Promise<QuizSession> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Distribution Logic
  const k = selectedItemTypes.length;
  const base = Math.floor(count / k);
  const remainder = count % k;
  
  const distribution: Record<string, number> = {};
  selectedItemTypes.forEach(t => distribution[t] = base);
  
  // Distribute remainder randomly
  const shuffled = [...selectedItemTypes].sort(() => Math.random() - 0.5);
  for (let i = 0; i < remainder; i++) {
    distribution[shuffled[i]]++;
  }

  const distributionStr = Object.entries(distribution)
    .map(([type, n]) => `- ${type}: ${n}題`)
    .join("\n");

  const prompt = `
  TASK: Generate a ${level} level Japanese ${category} quiz.
  
  DISTRIBUTION PLAN (STRICTLY FOLLOW):
  ${distributionStr}

  REFERENCE SAMPLES (FEW-SHOT):
  ${JSON.stringify(level === 'N4' ? JLPT_REFERENCE_BANK.N4 : JLPT_REFERENCE_BANK.N5)}

  OUTPUT FORMAT REQUIREMENTS:
  1. Return ONLY valid JSON.
  2. Choices MUST be exactly 4 strings.
  3. answerIndex MUST be 0, 1, 2, or 3.
  4. explanations MUST follow the structure: { correct: "label. text", analysis: "...", options: [...], extra: "..." }
  5. Use Traditional Chinese (zh-TW) for all explanations.
  6. Ensure difficulty is accurate for ${level}.

  JSON SCHEMA:
  {
    "examLevel": "${level}",
    "category": "${category}",
    "questions": [
      {
        "id": "uuid",
        "level": "${level}",
        "category": "${category}",
        "itemType": "string",
        "stem": "string (the sentence with parenthesized kanji or blank ___ )",
        "instruction": "string",
        "choices": ["string", "string", "string", "string"],
        "answerIndex": number,
        "explanation": {
          "correct": "number. correct_text",
          "analysis": "detailed analysis (2-3 sentences)",
          "options": [
            {"label": "1", "whyWrongOrRight": "string"},
            {"label": "2", "whyWrongOrRight": "string"},
            {"label": "3", "whyWrongOrRight": "string"},
            {"label": "4", "whyWrongOrRight": "string"}
          ],
          "extra": "example sentence or mnemonic"
        }
      }
    ]
  }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const jsonStr = response.text;
    if (!jsonStr) throw new Error("Empty response");
    
    const parsed = JSON.parse(jsonStr.trim());
    return {
      version: "2.0",
      examLevel: level,
      category: category,
      subtypesIncluded: selectedItemTypes,
      generatedAt: new Date().toISOString(),
      questions: parsed.questions
    } as QuizSession;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("無法生成題目，請檢查網路或稍後再試。");
  }
};
