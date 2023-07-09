import { Database } from '../Interfaces/Database'
import { Hasher } from '../Interfaces/Hasher'
import { User } from '../Interfaces/User'

export const createUser = async (database: Database, hasher: Hasher, user: User) => {
  const { name, email, password, isShaver } = user
  const hashedPassword = hasher.hash(password)
  const [createdUser] = await database.query(`
    INSERT INTO users (name, email, password, is_shaver)
    VALUES ($1, $2, $3, $4) RETURNING id;`,
    [name, email, hashedPassword, isShaver]
  )
  return createdUser?.id
}