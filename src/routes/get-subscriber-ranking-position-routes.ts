import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { GetSubscriberRankingPosition } from "../functions/get-subscriber-ranking-position";

export const getSubscriberRankingPositionRoutes: FastifyPluginAsyncZod = async app => {
  app.get('/subscriber/:subscriberId/ranking/position', {
    schema: {
      summary: 'Get subscriber ranking position',
      operationId: 'getSubscriberRankingPosition',
      tags: ['referral'],
      params: z.object({
        subscriberId: z.string()
      }),
      200: z.object({ position: z.number().nullable() }),
    }
  },
  async request => {
    const {subscriberId} = request.params

    const {position} = await GetSubscriberRankingPosition({subscriberId})

    return { position }
  }
)
}