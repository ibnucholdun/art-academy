import prisma from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserByUserId = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserAll = async () => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return users;
  } catch (error) {
    return null;
  }
};
