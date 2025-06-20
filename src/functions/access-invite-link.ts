import { redis } from "../redis/client";

interface AccessInviteLinkParams {
  subscriberId: string;
}

export async function AccessInviteLink({
  subscriberId
}: AccessInviteLinkParams) {
  const count = await redis.hincrby('referral:access-count', subscriberId, 1)
}