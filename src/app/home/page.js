'use client'
//import prisma from "../../../prisma/prisma.js";
//import { authOptions } from "../api/auth/[...nextauth]/route";
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EventsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait until session is loaded

    if (!session) {
      router.push('/login'); // Redirect to login if no session
    } 
  }, [status, session, router]);

  return (
    <>

    <div>EVENTS PAGE SUCCESS</div>
    {/* <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Events</h1>
      {session ? (
  events.length === 0 ? (
    <p>No events found.</p>
  ) : (
    <ul className="space-y-4">
      {events.map((event) => (
        <li key={event.id} className="border p-4">
          <h2 className="font-semibold text-lg">{event.title}</h2>
          <p>{event.description}</p>
          <p>Hosted by user: {event.userId}</p>
          <p>Managed by staff: {event.staffId}</p>
          <p>Category: {event.category}</p>
          <p>Date: {event.eventDate.toUTCString()}</p>
          <p>Price: ${event.price}</p>
          <img
            src={event.image}
            alt={event.title}
            className="mt-2 w-48 h-auto object-cover"
          />
        </li>
      ))}
    </ul>
  )
) : (
  <p>Please sign in</p>
)} */}


    {/* </main> */}
    </>
  );
}
