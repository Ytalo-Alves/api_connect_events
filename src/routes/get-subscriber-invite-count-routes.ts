import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { GetSubscriberInviteCount } from "../functions/get-subscriber-invite-count";

export const getSubscriberInviteCountRoutes: FastifyPluginAsyncZod = async app => {
  app.get('/subscriber/:subscriberId/count', {
    schema: {
      summary: 'Get subscriber ranking invite count',
      operationId: 'getSubscriberInviteCount',
      tags: ['referral'],
      params: z.object({
        subscriberId: z.string(),
      }),
      response: {
        200: z.object({ count: z.number()})
      }
    }
  },
  async request => {
    const {subscriberId} = request.params

    const {count} = await GetSubscriberInviteCount({subscriberId})

    return {count}
  }
)
}