// src/types/next-auth.d.ts
import { AuthUser } from './auth';

import NextAuth from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User extends AuthUser {
    token: string;
  }

  interface Session {
    accessToken: string;
    user: {
      id: string;
      name: string;
      email: string;
      
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    accessToken: string;
  }
}
