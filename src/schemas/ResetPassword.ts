import { z } from "zod";

export const ResetPasswordFormZodSchema = () => {
  return z.object({
    email_address: z
      .string({ required_error: "Email is required" })
      .min(5, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),
    default_password: z.string({
      required_error: "Please confirm your password",
    }),
    new_password: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Password can not be less than 8 characters" })
      .max(14, { message: "Password can not be more than 14 characters" })
      .refine((password: string) => /[A-Z]/.test(password), {
        message: "Password must contain uppercase characters",
      })
      .refine((password: string) => /[a-z]/.test(password), {
        message: "Password must contain lowercase characters",
      })
      .refine((password: string) => /[0-9]/.test(password), {
        message: "Password must contain number characters",
      })
      .refine((password: string) => /[!@#$%^&*]/.test(password), {
        message: "Password must contain special characters",
      }),
  });
};
