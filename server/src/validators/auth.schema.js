import * as z from 'zod';

const RegisterUser = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    username: z.string().min(3).max(50),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    bio: z.string().optional(),
    job: z.string().optional()
});

const LoginUser = z.object({
    email: z.string().email(),
    password: z.string()
});

export {
    RegisterUser, LoginUser
}