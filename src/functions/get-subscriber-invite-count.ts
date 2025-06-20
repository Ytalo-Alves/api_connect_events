import { redis } from "../redis/client";

interface GetSubscriberInviteCountParams {
  subscriberId: string;
}

export async function GetSubscriberInviteCount({
  subscriberId
}: GetSubscriberInviteCountParams) {
  
  const count = await redis.zscore('referral:ranking', subscriberId)

  return {count : count ? Number.parseInt(count) : 0}
} 