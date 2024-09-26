import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GIT_CLIENT_ID, // Your .env should have this as GIT_CLIENT_ID
      clientSecret: process.env.GIT_SECRET, // Your .env should have this as GIT_SECRET
    }),
  ],
  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
