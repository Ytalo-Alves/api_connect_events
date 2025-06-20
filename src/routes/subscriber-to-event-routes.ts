import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import z from 'zod';
import { subscriberToEvent } from '../functions/subscriber-to-event';

export const subscriberToEventRoutes: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Subscribe someone to the event',
        tags: ['subscription'],
        operationId: 'subscriberToEvent',
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().nullish()
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
          409: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body;

      const {subscriberId} = await subscriberToEvent({ name, email, referrerId: referrer});

      return reply.status(201).send({
        subscriberId
      });
    }
  );
};
