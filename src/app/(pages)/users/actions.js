'use server'
import prisma from "../../../../prisma/prisma";

export const getUsers = async ( ) => {
    try {
        const users = await prisma.user.findMany();
        console.log( users );
        return users;
    } catch (error) {
        throw error
    }
  }

  export const createUser = async ( ) => {
    try {
        const user = await prisma.user.findMany();
        console.log( user );
        return user;
    } catch (error) {
        throw error
    }
  }
// 2.

