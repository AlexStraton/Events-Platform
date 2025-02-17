"use client";
import LoginForm from './LoginForm';
import { useSession } from 'next-auth/react';
import { Suspense, useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function LoginPage() {
  const [events, setEvents] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      try{
        axios.get('/api/events')
           router.push("/home");

      }catch(error) {
        console.error("Error fetching events:", error);
      }
    }
  }, [status, router]);


  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg  p-3 md:h-36">
        </div>
        <Suspense fallback={<p>Loading form...</p>}>
          {status === "loading" ? (

            <p>Loading...</p>
          ) : session ? (

            <p>You are signed in. Redirecting...</p>
          ) : (

            <LoginForm />
          )}
        </Suspense>
      </div>
    </main>
  );
}
