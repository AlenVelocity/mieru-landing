import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export const db = drizzle(sql);

export const Emails = pgTable(
  'emails',
  {
    id: serial('id').primaryKey(),
    email: text('email').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (entries) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(entries.email),
    };
  },
);

