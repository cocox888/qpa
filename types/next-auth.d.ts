import NextAuth from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: number;
    email: string;
    password: string | null;
  }
}

declare module "next-auth/providers" {
  interface CredentialsConfig {
    credentials: Record<"email" | "password", { label: string; type: string; placeholder?: string }>;
  }
}
