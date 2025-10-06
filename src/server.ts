import cors from '@fastify/cors'
import Fastify from 'fastify'
import { planRoutes } from './routes/plan'

const app = Fastify()

await app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST']
})

app.get('/test', (_req, res) => {
  res.send('Hello World')
})

app.register(planRoutes)

app.listen({ port: Number(process.env.PORT) || 3333 }).then(() => {
  console.log('HTTP server running!')
})
