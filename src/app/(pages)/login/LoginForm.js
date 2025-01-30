"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
   await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/home",
    });

   
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 rounded bg-white p-6 shadow"
    >
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border border-gray-300 px-3 py-2 placeholder-gray-400
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded border border-gray-300 px-3 py-2 placeholder-gray-400
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white
                   hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400
                   focus:ring-offset-2"
      >
        Sign In
      </button>

      <div className="relative flex items-center py-2">
        <div className="grow border-t border-gray-300"></div>
        <span className="mx-2 text-sm text-gray-400">or</span>
        <div className="grow border-t border-gray-300"></div>
      </div>

      {/* Example Social/OAuth Sign-In */}
      <button
        type="button"
        onClick={() => signIn("google")}
        className="w-full rounded bg-red-500 px-4 py-2 font-semibold text-white
                   hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400
                   focus:ring-offset-2"
      >
        Sign in with Google
      </button>
    </form>
  );
}
