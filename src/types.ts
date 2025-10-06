import z from 'zod'

export const DietPlanRequestSchema = z.object({
  name: z.string().min(3),
  age: z.number().positive(),
  height: z.number().positive(),
  weight: z.number().positive(),
  activityLevel: z.enum(['sedentary', '2x_week', '4x_week']),
  gender: z.enum(['masculine', 'feminine']),
  objective: z.enum(['lose_weight', 'maintain_weight', 'gain_weight'])
})

export type DietPlanRequest = z.infer<typeof DietPlanRequestSchema>
