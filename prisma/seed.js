import { PrismaClient } from "@prisma/client";
import {  events} from "../src/lib/data.js";

const prisma = new PrismaClient();


async function main() {
    // 1. OPTIONAL: Clear existing data if you want a fresh start
    //    (Make sure to clear in the correct order to avoid foreign key constraints)

    
    await prisma.event.deleteMany({});
    await prisma.eventRegistration.deleteMany({});

    const staffUser = await prisma.user.create({
      data: {
        userName: "staffUser",
        name: "John Doe",
        bio: "Event manager",
        email: "staff@example.com",
        isStaff: true,
      },
    });

    const regularUser = await prisma.user.create({
      data: {
        userName: "regularUser",
        name: "Jane Smith",
        bio: "Love attending events!",
        email: "user@example.com",
        isStaff: false,
      },
    });

    const event1 = await prisma.event.create({
      data: {
        title: "Tech Conference",
        userId: staffUser.id, // Linking event to staff user
        staffId: staffUser.id, // Assigning staff
        image: "tech_event.jpg",
        description: "A conference about the latest in tech.",
        eventDate: new Date(),
        price: 100,
        location: "New York",
        category: "TECH",
        capacity: 500,
      },
    });

    const event2 = await prisma.event.create({
      data: {
        title: "Music Festival",
        userId: staffUser.id,
        staffId: staffUser.id,
        image: "music_fest.jpg",
        description: "A fun outdoor music festival.",
        eventDate: new Date(),
        price: 50,
        location: "Los Angeles",
        category: "MUSIC",
        capacity: 1000,
      },
    });

    await prisma.eventRegistration.createMany({
      data: [
        {
          eventId: event1.id,
          userId: regularUser.id,
          status: "PENDING",
        },
        {
          eventId: event2.id,
          userId: regularUser.id,
          status: "CONFIRMED",
        },
      ],
    });


      console.log("Database has been seeded. 🌱");
    }
    main()
    .catch((err) => {
      console.error("Error seeding DB:", err);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
