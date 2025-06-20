import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const subscription = pgTable('subscription', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

