import type * as Party from "partykit/server";

export type User = {
  id: string;
  username: string;
  joinedAt: string;
  leftAt?: string;
  present: boolean;
  image?: string;
};
