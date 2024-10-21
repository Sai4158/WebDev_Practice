// First import the auth and credentials
import auth from "next-auth";
import credentialprovider from "next-auth/providers/credentials";

// Then add the providers
export const {
  auth,
  singin,
  singout,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    credentialprovider({
      name: "credentials",

      async authorize(credentials) {},
    }),
  ],
});
