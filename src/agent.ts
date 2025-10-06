import fs from 'node:fs'
import { GoogleGenAI } from '@google/genai'
import { buildSystemPrompt, buildUserPrompt } from './prompt'
import type { DietPlanRequest } from './types'

const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY as string
})

const model = 'gemini-2.5-flash'

export async function* generateDietPlan(input: DietPlanRequest) {
  const diretrizes = fs.readFileSync('knowledge/diretrizes.md', 'utf-8')

  const prompt = `
    CONTEXTO: 
    ${buildSystemPrompt()}

    PERGUNTA: 
    ${buildUserPrompt(input)}

    DIRETRIZES:
    ${diretrizes}
  `

  const response = await gemini.models.generateContentStream({
    model,
    contents: [
      {
        text: prompt
      }
    ]
  })

  for await (const chunk of response) {
    if (chunk.text) yield chunk.text
  }
}
