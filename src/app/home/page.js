'use client'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios';

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push('/login');
    } else {
      const events = fetchEvents();

      console.log(events)
    }
  }, [status, session, router]);


  async function fetchEvents() {
    try {
      const response = await axios.get("/api/events");
      setEvents(response.data.result);
       console.log("EVENTS", events)
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }

  return (
    <>
    <div>EVENTS PAGE SUCCESS</div>
    {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul className="space-y-6">
  {events.map((event, i) => (
    <li key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
      <div className="mb-4">
        <img
          src={`/${event.image}`}
          alt={event.title}
          className="w-full h-56 object-cover rounded-lg"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
        <p className="text-sm text-gray-600">{event.description}</p>
        <p className="text-lg font-medium text-gray-800">Capacity: {event.capacity}</p>
        <p className="text-sm text-gray-500">Category: <span className="font-medium text-gray-700">{event.category}</span></p>
        <p className="text-sm text-gray-500">Date: <span className="font-medium text-gray-700">{event.eventDate.toLocaleString()}</span></p>
        <p className="text-lg font-semibold text-gray-800">${event.price}</p>
        <p className="text-sm text-gray-500">Location: {event.location}</p>
      </div>
    </li>
  ))}
</ul>

      )}
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
