import express from 'express'
import { deleteUser } from './usecases/DeleteUser'
import { pgDatabase } from './infra/pgDatabase'
import { createUser } from './usecases/CreateUser'
import { bcryptHasher } from './infra/bcryptHasher'

const app = express()
app.use(express.json())

app.post('/users', async (request, response) => {
  const userId = await createUser(pgDatabase, bcryptHasher, request.body)
  response.status(201).json({ userId })
})
app.delete('/user/:email', async (request, response) => {
  await deleteUser(pgDatabase, request.params.email)
  response.status(204).end()
})

app.listen(5000)
