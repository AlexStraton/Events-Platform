import {sql} from '@/app/lib/db'

export async function getUsers() {
    try {
      const users = await sql`SELECT * FROM users`;
      return Response.json({ users: users.rows });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
