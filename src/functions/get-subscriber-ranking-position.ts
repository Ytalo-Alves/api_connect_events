import { redis } from "../redis/client";



interface GetSubscriberGetPositionParams {
  subscriberId: string;
}

export async function GetSubscriberRankingPosition({
  subscriberId
}: GetSubscriberGetPositionParams) {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)

  if (rank === null) {
    return {position: null}
  }
  
  return {position: rank + 1}
}