"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import prisma from "@/lib/prisma";
import { unstable_update } from "@/auth";
import { FormPasswordSchema } from "@/schemas";
import { getUserByEmail, getUserByUserId } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const changePassword = async (
  values: z.infer<typeof FormPasswordSchema>
) => {
  const user = await currentUser();
  if (!user) return { error: "Unauthorized" };

  const dbUser = await getUserByUserId(user.id as string);
  if (!dbUser) return { error: "Unauthorized" };

  // using  OAuth user
  //   if (user.isOAuth) {
  //     values.password = undefined;
  //     values.newPassword = undefined;
  //   }

  // put password
  if (values.password && values.newPassword && dbUser.password) {
    const passwordMatch = await bcrypt.compare(
      values.password,
      dbUser.password
    );

    if (!passwordMatch) {
      return { error: "Incorrect password" };
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: dbUser.id,
    },
    data: {
      ...values,
    },
  });

  await unstable_update({
    user: {
      email: updatedUser.email,
    },
  });

  return { success: "Change password success" };
};
