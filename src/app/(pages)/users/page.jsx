'use server'
import { getUsers } from "./actions"

export default async function Users () {

    let users = await getUsers();
    console.log( users )

    return (
        <div>
        <h1> Users </h1>
        </div>
    )
}
