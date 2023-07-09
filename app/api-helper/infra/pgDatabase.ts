require('dotenv').config()
import { Pool } from 'pg';
import { Database } from '../Interfaces/Database';

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_NAME,
  port: parseInt(process.env.POSTGRES_PORT!, 10)
})

export const pgDatabase: Database = {
  async query(query: string, replacements: string[]): Promise<any[]> {
    const result = await pool.query(query, replacements)
    return result.rows
  }
}