import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiHandler } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import prisma from "@/lib/prismadb";
import GitHubProvider from "next-auth/providers/github";

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],

  // A database is optional, but required to persist accounts in a database
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
