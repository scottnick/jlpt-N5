
import { GoogleGenAI, Type } from "@google/genai";
import { ExamLevel, Category, QuizSession, Question, QuestionBank } from "../types";
import { JLPT_REFERENCE_BANK } from "./jlptReferenceBank";

export const generateQuiz = async (
  level: ExamLevel, 
  category: Category, 
  count: number,
  selectedItemTypes: string[]
): Promise<QuizSession> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const k = selectedItemTypes.length;
  const base = Math.floor(count / k);
  const remainder = count % k;
  
  const distribution: Record<string, number> = {};
  selectedItemTypes.forEach(t => distribution[t] = base);
  
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

  REFERENCE SAMPLES:
  ${JSON.stringify(level === 'N4' ? JLPT_REFERENCE_BANK.N4 : JLPT_REFERENCE_BANK.N5)}

  OUTPUT FORMAT REQUIREMENTS:
  1. Return ONLY valid JSON.
  2. Choices MUST be exactly 4 strings.
  3. Use Traditional Chinese (zh-TW) for all explanations.
  4. Use [[u]]text[[/u]] for underlined parts in the stem.

  JSON SCHEMA:
  {
    "questions": [
      {
        "id": "uuid",
        "level": "${level}",
        "category": "${category}",
        "itemType": "string",
        "stem": "string",
        "instruction": "string",
        "choices": ["string", "string", "string", "string"],
        "answerIndex": number,
        "explanation": {
          "correct": "string",
          "analysis": "string",
          "options": [{"label": "1", "whyWrongOrRight": "string"}],
          "extra": "string"
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

export const generateBankBatch = async (
  level: ExamLevel,
  category: Category,
  count: number,
  itemTypes: string[]
): Promise<Question[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
  TASK: Generate a BATCH of ${count} high-quality ${level} ${category} questions for a permanent Question Bank.
  Ensure diversity in content and item types: ${itemTypes.join(', ')}.
  
  FEW-SHOT REFERENCE:
  ${JSON.stringify(level === 'N4' ? JLPT_REFERENCE_BANK.N4[category as keyof typeof JLPT_REFERENCE_BANK.N4] : JLPT_REFERENCE_BANK.N5[category as keyof typeof JLPT_REFERENCE_BANK.N5])}

  RULES:
  1. Traditional Chinese (zh-TW) explanations.
  2. STRICT JSON output.
  3. Include [[u]]underlines[[/u]] in stems where appropriate.
  4. Questions must be challenging and follow official JLPT patterns.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const parsed = JSON.parse(response.text.trim());
    return (parsed.questions || parsed) as Question[];
  } catch (error) {
    console.error("Batch Gen Error:", error);
    throw new Error("生成題庫失敗");
  }
};
