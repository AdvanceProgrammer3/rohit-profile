import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto flex flex-col items-center p-4 bg-gradient-to-tr from-pink-500  to-red-400 text-white md:flex-row justify-between">
      <Link href="/" className="flex items-center">
        <p type="button" className="font-bold ">
          <span className="bg-gradient-to-tr from-violet-900 to-amber-900 p-2 rounded-md">
            Rohit
          </span>
          Portfolio
        </p>
      </Link>
      <div className="pt-4">
        <Link
          href="/"
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/80  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex 
           items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
        >
          Home
        </Link>
        <Link
          href="/projects"
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/80  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex 
          items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
        >
          Projects
        </Link>
        <Link
          href="/about"
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/80  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex 
           items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
