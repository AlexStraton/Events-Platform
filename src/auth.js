import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials"

const prisma = new PrismaClient();


export const { handlers} = NextAuth({
  adapter: PrismaAdapter(prisma, {
  }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null

        // logic to salt and hash password
        const pwHash = saltAndHashPassword(credentials.password)

        // logic to verify if the user exists
        user = await getUserFromDb(credentials.email, pwHash)

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }

        // return user object with their profile data
        return user
      },
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      const email = profile.email;
      let user = await prisma.user.findUnique({
        where: { email },
      });

      if (user) {
        const existingAccount = await prisma.account.findFirst({
          where: {
            userId: user.id,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
        });
        if (!existingAccount) {
          await prisma.account.create({
            data: {
              userId: user.id,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              access_token: account.access_token,
              refresh_token: account.refresh_token,
              type: 'oauth',
            },
          });
        }
        return true;
      }
      user = await prisma.user.create({
        data: {
          email,
          userName: profile.email.split('@')[0],
          avatar_image: profile.picture,
          createdAt: new Date(),
        },
      });

      return true;  // Proceed with sign-in
    },
  },

  // callbacks: {
  //   async signIn({ account, profile }) {
  //       const userData = {
  //         email: profile.email,                   // Use the email from Google profile
  //         userName: profile.email.split('@')[0],   // Generate userName from email
  //         avatar_image: profile.picture,          // Use the avatar image from Google profile
  //         createdAt: new Date(),
  //       };
  //       try {
  //         // Check if the user already exists
  //         let user = await prisma.user.findUnique({
  //           where: { email: userData.email },
  //         });

  //         if (!user) {
  //           // If user doesn't exist, create new user
  //           user = await prisma.user.create({
  //             data: userData,
  //           });
  //         }
  //         return true;  // Allow sign-in if user is found or created
  //       } catch (error) {
  //         console.error("Error creating user:", error);
  //         return false; // Reject sign-in on error
  //       }

  //     },
  //   },
})
