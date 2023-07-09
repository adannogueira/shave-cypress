import { pool } from '../../../utils/databasePool'

export const removeUser = (email: string) => {
  return new Promise((resolve, reject) => {

    pool.query(
      'DELETE FROM users u WHERE email = $1;',
      [email],
      (error, result) => { error ? reject(error) : resolve(result) }
    )
  })
}