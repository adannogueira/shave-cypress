import { Database } from '../Interfaces/Database'

export const deleteUser = async (database: Database, email: string) => {
  await database.query('DELETE FROM users u WHERE email = $1;', [email])
}