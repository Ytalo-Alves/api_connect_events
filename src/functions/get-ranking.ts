import { inArray } from "drizzle-orm";
import { db } from "../drizzle/client";
import { schema } from "../drizzle/schema";
import { redis } from "../redis/client";

export async function getRanking() {
  const topThree = await redis.zrevrange('referral:ranking', 0, 2, 'WITHSCORES')
  const ranking: Record<string, number> = {}

  for (let i = 0; i < topThree.length; i += 2) {
    ranking[topThree[i]] = Number.parseInt(topThree[i + 1])
  }

  const subscribersFromRanking = await db.select().from(schema.subscription).where(inArray(schema.subscription.id, Object.keys(ranking)))

  const rankingWithScore = subscribersFromRanking
    .map(subscriber => {
      return {
        id: subscriber.id,
        name: subscriber.name,
        score: ranking[subscriber.id]
      }
    }).sort((a, b) => {
      return b.score - a.score
    })

  return {rankingWithScore}
}