import type { LoginData, SignupData } from '@/types/auth';


import { signIn } from "next-auth/react";
if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}


export async function handleLoginSubmit({
  email,
  password,
}: LoginData) {
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (!res?.ok) {
    throw new Error(res?.error ?? "Login failed");
  }
}



export const handleSignupSubmit = async (data: SignupData): Promise<void> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/V1/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        phoneNumber: "0000000000", 
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Signup error response:", errorText);
      throw new Error("Signup failed with status: " + res.status);
    }

    console.log("✅ Signup successful");
  } catch (err) {
    console.error("Signup error:", err);
    throw new Error("Signup failed. Please try again.");
  }
};
