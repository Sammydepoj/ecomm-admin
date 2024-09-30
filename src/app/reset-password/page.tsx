"use client";

import CustomButton from "@/components/Button";
import { Input } from "@/components/Input";
import Navbar from "@/components/Navbar";
import { ResetPasswordFormZodSchema } from "@/schemas/ResetPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ResetPasswordFormSchema = ResetPasswordFormZodSchema();

type ResetPasswordFormInputs = z.infer<typeof ResetPasswordFormSchema>;
const ResetPassword = () => {
  const form = useForm<ResetPasswordFormInputs>({
    resolver: zodResolver(ResetPasswordFormSchema),
    mode: "onBlur",
  });
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center py-5 flex-col w-full gap-7 h-[80svh] ">
        <h3 className=" font-bold sm:text-3xl pt-10 text-xl text-center ">
          Create New Password
        </h3>
        <form className="w-full grid gap-5 max-w-[30rem] md:px-10 px-5 ">
          <div className="flex flex-col w-full justify-center items-center  gap-6  ">
            <Input
              type="email"
              name="email_address"
              id="email_address"
              label="Email Address"
              placeholder="Enter your email address"
              control={form.control}
            />
            <Input
              type="password"
              name="default_password"
              id="default_password"
              label="Default Password"
              placeholder="Enter default password"
              control={form.control}
            />
            <Input
              type="password"
              name="new_password"
              id="new_password"
              label="New Password"
              placeholder="Enter your new password"
              control={form.control}
            />
          </div>

          <CustomButton text="Reset Password" variant="primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
