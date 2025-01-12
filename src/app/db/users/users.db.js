'use server'
import prisma from "../../../../prisma/prisma"

export const getUsers = async ( ) => {
    try {
        const users = await prisma.users.findMany();
        console.log( users );
        return users;
    } catch (error) {
        throw error
    }
  }

  export const createUser = async ({ userName, email, bio, avatar_image }) => {
    try {
      const newUser = await prisma.users.create({
        data: {
          userName,
          email,
          bio,
          avatar_image
        }
      });
      console.log(newUser)
      return newUser;
    } catch (error) {
      throw error;
    }
  }

