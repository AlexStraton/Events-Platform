'use client'
import { signIn , signOut , useSession } from "next-auth/react"

// token that persisted in the browser using a cookie.
// that sits in local storage. whenever a new request is made
//  to the server, the cookie is sent along with the request in the header.
// there is a cookie id

export default function Header() {
    const {data: session} = useSession()

    console.log(session);

    return (
        <header className="flex items-center justify-between bg-white p-4 shadow-md">
            <h1 className="text-2xl font-bold text-gray-800">Events</h1>

            <div className="flex items-center space-x-4">
                { session ? (
                    <>
                        <div className="text-sm text-gray-600">
  <p>Signed in as</p>
  <p className="font-semibold text-gray-800">{session.user.email}</p>
</div>

                        <button className="rounded bg-red-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-red-600" onClick={() => signOut()}>Sign Out</button>
                    </>

                ) : (
                    <button
                    className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
                    onClick={() => signIn("google")}> sign in </button>
                 )}


            </div>
        </header>
    )
}
