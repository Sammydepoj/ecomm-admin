"use client";
import CloseMenuIcon from "@/assets/icons/CloseMenuicon";
import OpenMenuIcon from "@/assets/icons/OpenMenuIcon";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={`bg-[#2B4880] flex justify-between items-center py-5 px-5`}>
      <div className="w-full">
        <Image src={""} alt="" />
      </div>
      <ul
        className={`flex items-center justify-between text-white w-[50%] ${
          open
            ? "flex-col gap-10 absolute top-12 right-0 z-[100] bg-[#2B4880] py-3 rounded-md w-max px-5"
            : "bg-transparent hidden md:flex-row md:flex md:justify-between"
        }`}
      >
        <li>Home</li>
        <li>Categories</li>
        <li>Contact Us</li>
      </ul>

      <button
        onClick={() => {
          setOpen(!open);
        }}
        className=" md:hidden "
      >
        {open ? <CloseMenuIcon /> : <OpenMenuIcon />}
      </button>
    </div>
  );
};

export default Navbar;
