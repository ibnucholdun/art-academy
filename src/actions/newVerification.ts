// "use server";

// import prisma from "@/lib/prisma";
// import { getUserByEmail } from "@/data/user";
// import { getVerificationTokenByToken } from "@/data/verificationToken";

// export const newVerification = async (token: string) => {
//   const existingToken = await getVerificationTokenByToken(token);

//   if (!existingToken) {
//     return { error: "Token does not exist" };
//   }

//   const hasExpired = new Date() > new Date(existingToken.expires);

//   if (hasExpired) {
//     return { error: "Token has expired" };
//   }

//   const existingUser = await getUserByEmail(existingToken.email);

//   if (!existingUser) {
//     return { error: "Email does not exist!" };
//   }

//   await prisma.user.update({
//     where: {
//       id: existingUser.id,
//     },
//     data: {
//       emailVerified: new Date(),
//       email: existingToken.email,
//     },
//   });

//   await prisma.verificationToken.delete({
//     where: {
//       id: existingToken.id,
//     },
//   });

//   return { success: "Email verified" };
// };

"use server";

import prisma from "@/lib/prisma";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verificationToken";
import { currentUser } from "@/lib/auth";

export const newVerification = async (token: string) => {
  const user = await currentUser();
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist" };
  }

  const hasExpired = new Date() > new Date(existingToken.expires);

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (existingUser) {
    await prisma.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        emailVerified: new Date(),
        email: existingToken.email,
      },
    });

    await prisma.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });

    return { success: "Email verified" };
  }

  await prisma.user.update({
    where: {
      id: user?.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingToken?.email,
    },
  });

  await prisma.verificationToken.delete({
    where: {
      id: existingToken?.id,
    },
  });

  return { success: "Email verified" };
};
