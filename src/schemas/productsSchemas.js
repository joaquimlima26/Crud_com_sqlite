import { z } from "zod"

export const createproductsSchemas = z.object({
    name: z.string().min( 3, "o nome deve ter pelo menos 4 chars"),
    price: z.number().gt(0),
    stock: z.number().nonnegative()

})

export const updateproductsSchemas = z.object({
    name: z.string().min( 3, "o nome deve ter pelo menos 4 chars"),
    price: z.number().gt(0),
    stock: z.number().nonnegative()

})