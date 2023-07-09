import { hashSync } from 'bcrypt'
import { Hasher } from '../Interfaces/Hasher'

export const bcryptHasher: Hasher = {
  hash(data: string): string {
    const hashedString = hashSync(data, 8)
    return hashedString
  }
}