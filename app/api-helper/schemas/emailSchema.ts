import { z } from 'zod';

export const emailSchema = z.object({
  email: z.string({ required_error: 'email is mandatory' }).email('Invalid email')
})