"use server";

import * as z from "zod";

import prisma from "@/lib/prisma";
import { unstable_update } from "@/auth";
import { EditUserSchema } from "@/schemas";
import { getUserByUserId } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const editUser = async (
  values: z.infer<typeof EditUserSchema>,
  userId: string
) => {
  const user = await currentUser();
  if (!user) return { error: "Unauthorized" };

  const dbUser = await getUserByUserId(userId);
  if (!dbUser) return { error: "Unauthorized" };

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
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
    },
  });

  return { success: "Edit success!" };
};
