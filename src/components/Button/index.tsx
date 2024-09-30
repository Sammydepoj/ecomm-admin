"use client";
import React from "react";
// import { Button } from "@nextui-org/button";
import { Button } from "@chakra-ui/button";

type Props = {
  variant: "primary" | "secondary";
  onClick?: () => void;
  text: string;
  type: "button" | "reset" | "submit" | undefined;
  disabled?: boolean;
  isLoading?: boolean;
};
const CustomButton = ({
  onClick,
  text,
  variant,
  type,
  disabled,
  isLoading,
}: Props) => {
  return (
    <span>
      <Button
        onClick={onClick}
        className={`${variant === "secondary" && "bg-[#EBEDEE] text-black"} ${
          variant === "primary" &&
          "bg-[#C96E2C] text-white disabled:bg-[#c96d2cba]"
        } py-[10px] px-4 rounded-xl text-base whitespace-nowrap w-full disabled:cursor-not-allowed`}
        type={type}
        isDisabled={disabled}
        isLoading={isLoading}
      >
        {text}
      </Button>
    </span>
  );
};

export default CustomButton;
