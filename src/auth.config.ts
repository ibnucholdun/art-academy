import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await getUserByEmail(email);
          //   check user
          if (!user || !user.password) return null;

          //   check password
          const isValid = await bcrypt.compare(password, user.password);
          if (isValid) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
