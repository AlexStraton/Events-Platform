'use client'
import { signIn , signOut , useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Header() {
    const {data: session} = useSession()
    const router = useRouter();
    console.log(session);

    const handleSignIn = async () => {
        await signIn("google");
        router.push("/home"); // Redirect to the home page after sign-in
      };

      // Redirect after sign out
      const handleSignOut = async () => {
        await signOut({ callbackUrl: "/login" }); // Redirect to the login page after sign-out
      };

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

                        <button className="rounded bg-red-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-red-600" onClick={handleSignOut}>Sign Out</button>
                    </>

                ) : (
                    <button
                    className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
                    onClick={handleSignIn}> sign in </button>
                 )}


            </div>
        </header>
    )
}
