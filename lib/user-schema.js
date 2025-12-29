
import {z} from "zod";


export const userSchema = z.object({
    name: z.string().min(2, {message:"Name must be at least 2 characters long."}).max(50),
    email:z.string().email({message: "Invalid email"}),
    phone: z.string().min(10).max(15),
    location: z.string().min(2),
    password: z.string().min(6),
    role: z.enum(["admin","student", "staff"])
})


