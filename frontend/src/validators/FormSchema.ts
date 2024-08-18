
import { z } from 'zod'

export const createCardFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .max(50, { message: 'Title must be at most 50 characters long' }),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' })
    .max(500, { message: 'Description must be at most 500 characters long' }),
  link: z.string().url({ message: 'Link must be a valid URL' }),
})


export const updateCardFormSchema = createCardFormSchema

export type CreateCardFormValues = z.infer<typeof createCardFormSchema>
export type UpdateCardFormValues = z.infer<typeof updateCardFormSchema>