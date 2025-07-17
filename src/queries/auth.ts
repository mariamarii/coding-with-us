// queries/auth.ts

import { LoginData, LoginResponse, DecodedJWT } from "@/types/auth";
import { jwtDecode } from "jwt-decode";
import { api } from "@/config/api";

if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

export async function login(credentials: LoginData) {
  if (!credentials?.email || !credentials?.password) {
    throw new Error("Email and password are required");
  }

  const res = await fetch(api.login(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const text = await res.text();
  let data: LoginResponse;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Invalid response from server");
  }

  if (!res.ok) throw new Error("Invalid email or password");
  if (!data.accessToken) throw new Error("No access token received");

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
}
