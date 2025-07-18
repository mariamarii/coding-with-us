// queries/auth.ts

import { LoginData, LoginResponse, DecodedJWT, UserProfile } from "@/types/auth";
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

  // Log the decoded JWT to see what fields are available
  console.log('Decoded JWT:', decoded);

  // Try to get the name from various possible fields in the JWT
  const userName = decoded.name || decoded.fullName || decoded.firstName || decoded.lastName || 
                   (decoded.firstName && decoded.lastName ? `${decoded.firstName} ${decoded.lastName}` : null) ||
                   decoded.email;

  return {
    id: decoded.sub,
    name: userName,
    email: decoded.email,
    token: data.accessToken,
  };
}

export async function getCurrentUser(accessToken: string): Promise<UserProfile> {
  if (!accessToken) {
    throw new Error("Access token is required");
  }

  const res = await fetch(api.me(), {
    method: "GET",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  const userData: UserProfile = await res.json();
  return userData;
}
