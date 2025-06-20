import { tool } from "ai"
import z from "zod"
import { pg } from "../../drizzle/client"
import { redis } from "../../redis/client"

export const redisTool = tool({
  description:`
  Realiza um comando no Redis para buscar informações sobre o sistema de indicações como numero de cliques no link, numero de indicações (convites) realizados e ranking de indicações.

  Só pode ser utilizado para buscar dados do Redis, não pode executar nenhum comando de escrita.

  Você pode buscar dados de:

  - Um hash chamado "referral:access-count" que guarda o numero de cliques/acessos no link de convite/indicações de cada usuario no formato {"SUBSCRIBER_ID": NUMERO_DE_CLIQUES} onde o SUBSCRIBER_ID vem do Postgres.
  - Um zest chamado "referral:ranking" que guarda o total de convites/indicações feitos por cada usuario onde o score é a quantidade de convites e o conteúdo é o SUBSCRIBER_ID que vem do Postgres.
  `.trim(),
  parameters: z.object({
    command: z.string().describe('O comando a ser executado pelo redis como GET, HGET, ZREVRANGE.'),
    args: z.array(z.string()).describe('Argumentos que vem logo após o comando do Redis.')
  }),
  execute: async ({command, args}) => {
    console.log({command, args})
    const result = await redis.call(command, args)

    return JSON.stringify(result)
  }
})