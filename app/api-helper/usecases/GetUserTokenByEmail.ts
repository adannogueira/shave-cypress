import { Database } from '../Interfaces/Database'

export const getUserTokenByEmail = async (database: Database, email: string) => {
  const [foundToken] = await database.query(`
    SELECT ut.token FROM users u
    INNER JOIN user_tokens ut ON u.id = ut.user_id
    WHERE u.email = $1
    ORDER BY ut.created_at DESC LIMIT 1;`,
    [email]
  )
  return foundToken
}