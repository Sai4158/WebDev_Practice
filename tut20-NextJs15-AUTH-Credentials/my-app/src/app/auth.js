import NextAuth from "next-auth";
import { CredentialProviders } from "next-auth/providers/credentials";

export const {
  auth,
  singIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [],
});
