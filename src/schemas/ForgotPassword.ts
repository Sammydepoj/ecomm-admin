import { z } from "zod";

export const ForgotPasswordFormZodSchema = () => {
  return z
    .object({
      email: z
        .string({ required_error: "Email is required" })
        .min(5, { message: "Email is required" })
        .email({ message: "Please enter a valid email address" })
    })
    
};
