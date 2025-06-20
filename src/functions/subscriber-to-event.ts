import { eq } from "drizzle-orm";
import { db } from "../drizzle/client";
import { schema } from "../drizzle/schema";
import { subscription } from "../drizzle/schema/subscription";
import { redis } from "../redis/client";

interface SubscriberToEventParams {
  name: string;
  email: string;
  referrerId?: string | null
}


export async function subscriberToEvent({
  name,
  email,
  referrerId
}: SubscriberToEventParams) {
  const subscribers = await db
    .select()
    .from(subscription)
    .where(eq(subscription.email, email));

  if (subscribers.length > 0) {
    return {subscriberId: subscribers[0].id};
  }

  const result = await db
    .insert(subscription)
    .values({ name, email })
    .returning();

    if(referrerId) {
      await redis.zincrby('referral:ranking', 1, referrerId)
    }

  const subscriber = result[0]

  return {
    subscriberId: subscriber.id
  };
}
