import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { GetSubscriberInviteClick } from "../functions/get-subscriber-invite-click";

export const getSubscriberInviteClickRoutes: FastifyPluginAsyncZod = async app => {
  app.get('/subscribers/:subscriberId/ranking/click', {
    schema: {
      summary: 'Get subscriber ranking invite clicks count',
      operationId: 'getSubscriberInviteClick',
      tags: ['referral'],
      params: z.object({
        subscriberId: z.string(),
      }),
      response: {
        200: z.object({ count: z.number() }),
      }
    }
  },
  async request => {
    const {subscriberId} = request.params

    const {count} = await GetSubscriberInviteClick({subscriberId})

    return {count}
  }
)

}