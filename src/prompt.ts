import type { DietPlanRequest } from './types'

export function buildSystemPrompt() {
  return [
    `Você é Nutri-AI, um agente de nutrição que cria planos semanais de dieta.
    Regras fixas:
    - Sempre responda em texto markdown legível para humanos e em português do Brasil.
    - Use # para títulos e - para items de lista.
    - A dieta deve conter exatamente 7 dias.
    - Cada dia deve ter 4 refeições fixas: café_da_manhã, almoço, lanche e jantar.
    - SEMPRE inclua ingredientes comuns no Brasil.
    - NUNCA inclua calorias e macros de cada refeição, apenas as refeições.
    - Evite alimentos ultraprocessados e industrializados.
    - Não responda em JSON ou outro formato, apenas texto markdown legível para humanos.
    - Não inclua dicas como: bom consultar um nutricionista para um acompanhamento mais personalizado.`
  ].join('\n')
}

export function buildUserPrompt(input: DietPlanRequest) {
  return [
    'Gere um plano alimentar personalizado com base nos dados:',
    `- Nome: ${input.name}`,
    `- Idade: ${input.age} anos`,
    `- Altura: ${input.height} cm`,
    `- Peso: ${input.weight} kg`,
    `- Nível de Atividade: ${input.activityLevel}`,
    `- Gênero: ${input.gender}`,
    `- Objetivo: ${input.objective}`
  ].join('\n')
}

export function buildDocsSystemPrompt(doc: string) {
  return `Documento técnico para ajudar na geração de dietas: ${doc}`
}
