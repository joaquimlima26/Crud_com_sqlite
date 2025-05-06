import {z} from "zod" 

export const createUserSchemas = z.object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(5).regex(/[A-Z]/)
})