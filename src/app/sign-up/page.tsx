"use client";

import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Input } from "@/components/Input";
import CustomButton from "@/components/Button";
import { SignupFormZodSchema } from "@/schemas/signup";

const SignupFormSchema = SignupFormZodSchema();
type SignupFormInputs = z.infer<typeof SignupFormSchema>;

const SignUp = () => {
  const form = useForm<SignupFormInputs>({
    resolver: zodResolver(SignupFormSchema),
    mode: "onBlur",
  });
  return (
    <div className=" ">
      <Navbar />
      <div className=" flex justify-center items-center py-5 flex-col w-full gap-5 h-[80svh]  ">
        <h3 className=" font-bold sm:text-3xl pt-4 text-xl ">
          Create Account{" "}
        </h3>
        <form className="w-full grid gap-5 max-w-[30rem] md:px-10 px-5 ">
          <div className="flex flex-col w-full justify-center items-center  gap-4  ">
            <Input
              type="text"
              name="fullname"
              id="fullName"
              label="Full Name"
              placeholder="Enter your full name"
              control={form.control}
            />
            <Input
              type="email"
              name="email"
              id="email"
              label="Email Address"
              placeholder="Enter your email address"
              control={form.control}
              className=""
            />
            <Input
              type="password"
              name="password"
              id="password"
              label="Password"
              placeholder="Enter your password"
              control={form.control}
              className=""
            />
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm password"
              control={form.control}
            />
          </div>{" "}
          <CustomButton text="Sign up" variant="primary" type="submit" />
          <div className=" ">
            Already have an account ?{" "}
            <Link href={"/sign-in"} className="text-[#0B6A96]">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
