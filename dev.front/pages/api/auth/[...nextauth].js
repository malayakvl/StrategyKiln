import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/auth`;

export default NextAuth({
  // pages: {
  //     signIn: '/auth/signin',
  //     signOut: '/auth/signout',
  //     error: '/auth/error', // Error code passed in query string as ?error=
  //     verifyRequest: '/auth/verify-request', // (used for check email message)
  //     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  providers: [
    CredentialsProvider({
      id: "credentials_login",
      async authorize(credentials) {
        const res = await fetch(`${baseUrl}/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const resp = await res.json();
        if (res.ok && resp.user) {
          return resp.user;
        }
        // console.log(resp.user);

        throw `/auth/signin?message=${resp.message}`;
        // return null
      },
    }),
    CredentialsProvider({
      id: "credentials_seller_login",
      async authorize(credentials) {
        const res = await fetch(`${baseUrl}/admin-seller`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const resp = await res.json();
        if (res.ok && resp.user) {
          return resp.user;
        }
        throw `/auth/signin?message=${resp.message}`;
        // return null
      },
    }),
  ],
  events: {
    async signIn(message) {
      /* on successful sign in */
      // registration/login via provider
      if (message.account?.provider) {
        const dataUser = message.user;
        dataUser.provider = message.account.provider;
        dataUser.providerId = message.account.id;
        await fetch(`${baseUrl}/provider`, {
          method: "POST",
          body: JSON.stringify(dataUser),
          headers: { "Content-Type": "application/json" },
        });
      }
    },
  },
  debug: true,
});