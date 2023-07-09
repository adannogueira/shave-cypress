import { z } from 'zod';

export const userSchema = z.object({
  name: z.string({
    required_error: 'name is mandatory',
    invalid_type_error: 'name must be a string'
  }),
  email: z.string({ required_error: 'email is mandatory' }).email('Invalid email'),
  password: z.string({
    required_error: 'password is mandatory',
  }).min(6, { message: 'password must be at least 6 characters long' }),
  isShaver: z.boolean({
    required_error: 'isShaver is mandatory',
    invalid_type_error: 'isShaver must be a boolean'
  })
})