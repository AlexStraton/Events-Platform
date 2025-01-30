'use server'
import prisma from "../../../prisma/prisma";

export async function fetchEvents() {
    return await prisma.event.findMany();
  }
