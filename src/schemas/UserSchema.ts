import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string(),
    birthday: z.string(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional()
});