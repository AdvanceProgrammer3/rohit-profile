import React from "react";

export default function Banner() {
  return (
    <div className="p-10  bg-[#1F2937] mt-10 md:flex-row flex flex-col text-white gap-6 mx-2 md:mx-auto rounded-md">
      <div className="flex-1 md:text-2xl font-semibold">
        The Best React JS Project for Web Devoloper
      </div>
      <div className="flex-1 md:text-xl font-thin">
        Explore 50+ Beginner-Friendly Projects Built with HTML, CSS, and Vanilla
        JavaScript to Boost Your Web Development Skills
      </div>
    </div>
  );
}
