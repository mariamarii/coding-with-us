// lib/getCurrentUser.ts (or wherever you define helpers)
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth-options";
import { AuthOptions } from "next-auth";
import { Session } from "next-auth";


interface CustomSession extends Session {
  token?: string;
  profile?: {
    type?: string;
    [key: string]: any;
  };
}

export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as CustomSession | null;

  return {
    token: session?.token ?? null
  };
}
