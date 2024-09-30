import { z } from "zod";

export const SigninFormZodSchema = () => {
  return z.object({
    email: z
      .string({ required_error: "Email is required" })
      .min(5, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),

    password: z.string({ required_error: "Password is required" }),
  });
};
