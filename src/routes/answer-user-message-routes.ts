import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { AnswerUserMessage } from "../functions/answer-user-massage";

export const answerUserMessage: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/message",
    {
      schema: {
        summary: "Send message to the IA chat",
        tags: ["AI - Artificial Intelligence"],
        body: z.object({
          message: z.string(),
        }),
        response: {
          200: z.object({
            response: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { message } = request.body;

      const { response } = await AnswerUserMessage({ message });

      return { response };
    }
  );
};
    
 

  
