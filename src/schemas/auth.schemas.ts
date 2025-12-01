import * as z from "zod";

import { passwordRegexp, emailRegexp} from "../constants/auth.constants.js";

export const registerSchema = z.object({
    email: z.string().min(1).regex(emailRegexp, "Email must contain @ and not contain spaces"),
    password: z.string().min(8, "Password must have at least 8 symbols").regex(passwordRegexp, "Password must have at least 1 letter and 1 number"),
});

export type RegisterPayload = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    email: z.string().min(1).regex(emailRegexp, "Email must contain @ and not contain spaces"),
    password: z.string().min(8, "Password must have at least 8 symbols").regex(passwordRegexp, "Password must have at least 1 letter and 1 number"),
});

export type LoginPayload = z.infer<typeof loginSchema>;