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
        <header>
            <h1>Header</h1>

            <div>
                { session ? (
                    <>
                        <p> Signed in as {session.user.email} </p>
                        <button onClick={() => signOut()}>Sign Out</button>
                    </>

                ) : (
                    <button onClick={() => signIn("google")}> sign in </button>
                 )}


            </div>
        </header>
    )
}
