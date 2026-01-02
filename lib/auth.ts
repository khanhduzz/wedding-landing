// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
//   providers: [
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (creds) => {
//         const email = process.env.ADMIN_EMAIL;
//         const password = process.env.ADMIN_PASSWORD;
//         if (creds?.email === email && creds?.password === password) {
//           return { id: "admin", name: "Admin", email };
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/admin/login",
//   },
//   session: { strategy: "jwt" },
// });

// src/lib/auth.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === process.env.ADMIN_EMAIL &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          return { id: "admin", name: "Admin", email: process.env.ADMIN_EMAIL };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};