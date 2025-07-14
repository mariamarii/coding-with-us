import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {jwtDecode} from "jwt-decode";
import { LoginResponse, DecodedJWT } from "@/types/auth";

if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          const res = await fetch("https://localhost:7061/api/V1/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const text = await res.text();
          let data: LoginResponse;

          try {
            data = JSON.parse(text);
          } catch {
            console.error("❌ JSON parsing error:", text);
            throw new Error("Invalid response from server");
          }

          if (!res.ok) {
            throw new Error("Invalid email or password");
          }

          if (!data.accessToken) {
            throw new Error("No access token received");
          }

          const decoded: DecodedJWT = jwtDecode(data.accessToken);

          if (!decoded.sub || !decoded.email) {
            throw new Error("Invalid token payload");
          }

          return {
            id: decoded.sub,
            name: decoded.name || decoded.email,
            email: decoded.email,
            token: data.accessToken,
          };
        } catch (err) {
          console.error("Authorize error:", err);
          throw new Error("Login failed. Please try again.");
        }
      },
    }),
  ],

  session: { strategy: "jwt" },

  pages: { signIn: "/login" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          id: token.id,
          name: token.name,
          email: token.email,
          accessToken: token.accessToken,
        },
      };
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };