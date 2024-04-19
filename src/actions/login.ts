"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid email or password!" };

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (existingUser?.email === email && existingUser?.password === null) {
    return { error: "Email already in use with different provider!" };
  }

  if (!existingUser || !existingUser?.email || !existingUser?.password) {
    return { error: "Email does not exist!" };
  }

  if (!existingUser?.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser?.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Verification email sent" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || "/",
    });

    return { success: "Login successful!" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
