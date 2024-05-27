"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import { unstable_update } from "@/auth";
import { getUserByUserId } from "@/data/user";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { FormPasswordSchema } from "@/schemas";

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
