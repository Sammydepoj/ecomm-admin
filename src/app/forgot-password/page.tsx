"use client";
import BackArrowIcon from "@/assets/icons/BackArrowicon";
import CustomButton from "@/components/Button";
import { Input } from "@/components/Input";
import Navbar from "@/components/Navbar";
import { ForgotPasswordFormZodSchema } from "@/schemas/ForgotPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
const ForgotPasswordFormSchema = ForgotPasswordFormZodSchema();

type ForgotPasswordFormInputs = z.infer<typeof ForgotPasswordFormSchema>;

const ForgotPassword = () => {
  const form = useForm<ForgotPasswordFormInputs>({
    resolver: zodResolver(ForgotPasswordFormSchema),
    mode: "onBlur",
  });
  return (
    <div className=" h-screen">
      <Navbar />
      <div className=" flex justify-center items-center py-5 flex-col w-full gap-7 h-[80svh] ">
        <h3 className=" font-bold sm:text-3xl pt-10 text-xl text-center ">
          Enter your registered email to reset your password
        </h3>
        <form className="w-full grid gap-5 max-w-[30rem] md:px-10 px-5 ">
          <div className="flex flex-col w-full justify-center items-center  gap-6  ">
            <Input
              type="email"
              name="email"
              id="email"
              label=""
              placeholder="Enter your email address"
              control={form.control}
              className=""
            />
          </div>

          <CustomButton text="Reset Password" variant="primary" type="submit" />
          <Link href={"/sign-in"} className="text-[#0B6A96] flex items-center gap-4 justify-center w-full">
            <BackArrowIcon />
            Go back to sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
