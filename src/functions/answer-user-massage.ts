import { generateText } from "ai";
import { openai } from "../ai/openai";
import { postgresTool } from "../ai/tools/postgres-tools";
import { redisTool } from "../ai/tools/redis-tools";

interface AnswerUserMessageParams {
  message: string;
}

export async function AnswerUserMessage({ message }: AnswerUserMessageParams) {

  const answer = await generateText({
    model: openai,
    prompt: message,
    tools: {
      postgresTool,
      redisTool 
    },
    system: `
    Você é um agente de I.A. responsável por responder duvidas sobre um evento de programação.

    Inclua na resposta somente o que o usuario pediu, sem nenhum texto adicional.

    O retorno deve ser sempre com markdown (sem incluir \`\`\` no inicio e no fim).
    `.trim(),

    maxSteps: 5
  })


  return { response: answer.text };
}
