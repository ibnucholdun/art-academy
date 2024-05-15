"use server";

import * as z from "zod";

import prisma from "@/lib/prisma";
import { unstable_update } from "@/auth";
import { getUserByUserId } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { FormProfileSchema } from "@/schemas";
import { UTApi } from "uploadthing/server";

export const editProfile = async (
  values: z.infer<typeof FormProfileSchema>
) => {
  const utapi = new UTApi();
  const user = await currentUser();
  if (!user) return { error: "Unauthorized" };

  const dbUser = await getUserByUserId(user.id as string);
  if (!dbUser) return { error: "Unauthorized" };

  if (user?.image) {
    const parts = user.image.split("/");
    const fileName = parts.pop();
    await utapi.deleteFiles(fileName!);
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
      name: updatedUser.name,
      image: updatedUser.image,
      aboutMe: updatedUser.aboutMe!,
    },
  });

  return { success: "Profile updated!" };
};
