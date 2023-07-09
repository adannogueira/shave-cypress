require('dotenv').config()
import { Pool } from 'pg';

export const pool = new Pool({
  host: 'localhost',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_NAME,
  port: parseInt(process.env.POSTGRES_PORT, 10)
})
