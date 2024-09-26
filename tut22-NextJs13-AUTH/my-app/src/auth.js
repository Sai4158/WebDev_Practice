import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID, // Replace with your GITHUB_CLIENT_ID from .env
      clientSecret: process.env.GITHUB_CLIENT_SECRET, // Replace with your GITHUB_CLIENT_SECRET from .env
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Replace with your GOOGLE_CLIENT_ID from .env
      clientSecret: process.env.GOOGLE_SECRET_KEY, // Replace with your GOOGLE_SECRET_KEY from .env
    }),
  ],
  secret: process.env.AUTH_SECRET, // Replace with your AUTH_SECRET from .env
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
