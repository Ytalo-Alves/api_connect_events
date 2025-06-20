import { tool } from "ai"
import z from "zod"
import { pg } from "../../drizzle/client"

export const postgresTool = tool({
  description:
  `Realiza uma Query no Postgres para buscar informações sobre as tabelas do banco de dados.
  
  Só pode realizar operações de busca (SELECT), não é permitido a geração de qualquer operação de escrita.

  tables:
  """
  CREATE TABLE subscription (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at T
  """

  Todas as operações devem retornar no máximo 50 itens.

  `.trim(),
  parameters: z.object({
    query: z.string().describe('A query do PostgreSQL para ser executada'),
    params: z.array(z.string()).describe('Parâmetros da query a ser executada')
  }),
  execute: async ({query, params}) => {
    console.log({query, params})
    const result = await pg.unsafe(query, params)

    return JSON.stringify(result)
  }
})