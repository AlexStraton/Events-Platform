import NextAuth from "next-auth"
import Google from "next-auth/providers/google"


export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [ Google],
  
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
