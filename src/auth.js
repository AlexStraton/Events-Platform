import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
// import PostgresAdapter from "@auth/pg-adapter"
// import { Pool } from "pg"

// const pool = new Pool({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// })

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [ Google],
  // adapter: PostgresAdapter(pool),
  callbacks: {
    async signIn({ account, profile }) {
      console.log(account.provider)
      // if (account.provider === "google") {
      //   return profile.email_verified && profile.email.endsWith("@example.com")
      // }
      return true
    },
  },
})



// import NextAuth from "next-auth"
// import EmailProvider from "next-auth/providers/email";
// import GoogleProvider from "next-auth/providers/google"

// export const handler = NextAuth({
//             providers: [
//                 GoogleProvider({
//                     clientId: process.env.AUTH_GOOGLE_ID,
//                     clientSecret: process.env.AUTH_GOOGLE_SECRET,
//                     authorization: {
//                         params: {
//                           prompt: "consent",
//                           access_type: "offline",
//                           response_type: "code"
//                         }
//                       }
//                 },
//                 EmailProvider({
//                     server: {
//                       host: process.env.EMAIL_SERVER_HOST,
//                       port: process.env.EMAIL_SERVER_PORT,
//                       auth: {
//                         user: process.env.EMAIL_SERVER_USER,
//                         pass: process.env.EMAIL_SERVER_PASSWORD
//                       }
//                     },
//                     from: process.env.EMAIL_FROM
//                   }),
//             )
//             ]

// })


// export {handler as GET, handler as POST}

