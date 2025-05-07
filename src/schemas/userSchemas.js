import {z} from "zod" 

export const createUserSchemas = z.object({
    name: z.string().min(4, "o nome deve ter pelo menos 4 chars"),
    email: z.string().email("email invalido! "),
    password: z.string()
    .min(5, "A senha deve tr pelo menos 6 chars /")
    .regex(/[A-Z]/, "A senha deve ter pelo menos ua letra maiuscula")
})

export const updateUserSchema = z.object({
    name: z.string().min(4, "o nome deve ter pelo menos 4 chars").optional(),
    email: z.string().email("email invalido! "),
    password: z.string()
    .min(5, "A senha deve tr pelo menos 6 chars /")
    .regex(/[A-Z]/, "A senha deve ter pelo menos uma letra maiuscula").optional()
})