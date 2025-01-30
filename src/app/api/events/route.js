import { fetchEvents } from "@/app/queries/events";


export async function GET() {
  try {
    const events = await fetchEvents();
    return new Response(JSON.stringify({ result: events }), { status: 200 });

  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}
