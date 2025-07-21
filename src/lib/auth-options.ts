// lib/auth-options.ts

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/queries/auth";
import { jwtDecode } from "jwt-decode";

interface ExtendedSession {
  user: {
    id: string;
    name: string;
    email: string;
  };
  accessToken: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        socialToken: { label: "Social Token", type: "text" },
      },
      async authorize(credentials) {
        // Handle social login tokens
        if (credentials?.socialToken) {
          try {
            // For social login, we'll use the token directly
            // The token should already be validated by the backend
            const decoded = jwtDecode(credentials.socialToken) as any;
            
            return {
              id: decoded.sub || decoded.id,
              email: decoded.email,
              name: decoded.name || decoded.email,
              token: credentials.socialToken,
            };
          } catch (error) {
            console.error('Social login token decode error:', error);
            return null;
          }
        }

        // Handle regular email/password login
        const user = await login(credentials!);
        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            token: user.token,
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        if ('token' in user && typeof user.token === 'string') {
        token.accessToken = user.token;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.name = token.name;
      session.user.email = token.email;
      (session as ExtendedSession).accessToken = token.accessToken as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
