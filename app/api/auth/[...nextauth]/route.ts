import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { compare } from 'bcrypt';
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await prisma.user.findFirst({ where: { email } });
        if (!user) {
          const client = await prisma.client.findFirst({ where: { email } })
          if (!client) {
            throw new Error("User not founded.");
          } else {
            const checkPassword = await compare(password, client?.password as string)
            if (!checkPassword) throw new Error("Password Incorrect")
            return client
          }
        }

        const checkPassword = await compare(password, user?.password as string)
        if (!checkPassword) throw new Error("Password Incorrect")

        return user;
      },
      credentials: {}
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      token.id = user?.id || token.sub;
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
