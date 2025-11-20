import cors from '@fastify/cors'
import Fastify from 'fastify'
import { dietPlanRoutes } from './routes/diet-plan'
import { trainingPlanRoutes } from './routes/training-plan'

const app = Fastify()

await app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST']
})

app.get('/test', (_req, res) => {
  res.send('Hello World')
})

app.register(dietPlanRoutes)
app.register(trainingPlanRoutes)

app.listen({ port: Number(process.env.PORT) || 3333 }).then(() => {
  console.log('HTTP server running!')
})
