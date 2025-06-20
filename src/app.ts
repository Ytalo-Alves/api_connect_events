import fastifyCors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastify from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { accessInviteLink } from './routes/access-invite-link-routes'
import { getRankingRoutes } from './routes/get-ranking-routes'
import { getSubscriberInviteClickRoutes } from './routes/get-subscriber-invite-click-routes'
import { getSubscriberInviteCountRoutes } from './routes/get-subscriber-invite-count-routes'
import { getSubscriberRankingPositionRoutes } from './routes/get-subscriber-ranking-position-routes'
import { subscriberToEventRoutes } from './routes/subscriber-to-event-routes'
import { answerUserMessage } from './routes/answer-user-message-routes'


export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Connecting you to events',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(subscriberToEventRoutes)
app.register(accessInviteLink)
app.register(getSubscriberInviteClickRoutes)
app.register(getSubscriberRankingPositionRoutes)
app.register(getRankingRoutes)
app.register(getSubscriberInviteCountRoutes)
app.register(answerUserMessage)
