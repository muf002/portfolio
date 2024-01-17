"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <nav className="bg-white py-6 fixed z-10 top-0 w-full">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div>
            <a href="/#" className="font-bold ml-10 font-sans">
              USMAN FAROOQ
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-wrap">
            <ul className="font-bold font-mono flex flex-row mr-7">
              <li className="hover:text-purple-500">
                <a href="/#about" className="block pl-5 pr-5">
                  ABOUT
                </a>
              </li>
              <li className="hover:text-purple-500">
                <a href="/#projects" className="block pl-5 pr-5">
                  PROJECTS 
                </a>
              </li>
              <li className="hover:text-purple-500">
                <a href="/#contact" className="block pl-5 pr-5">
                  CONTACT
                </a>
              </li>
              <li className="hover:text-purple-500">
                <Link href="/contact" className="block pl-5 pr-5">
                  RESUME 
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:hidden">
            {isMenuOpen ? (
              <RxCross2
                size={25}
                className="mr-5 sm:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            ) : (
              <RxHamburgerMenu
                size={25}
                className="mr-5 sm:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
          </div>
          <div
            className={`bg-white absolute w-full top-full transition-all duration-300 px-5 shadow-md sm:hidden ${isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
          >
            <ul className="font-semibold font-mono flex flex-col items-end justify-end">
              <li className="border-b border-solid w-full text-right">
                <Link
                  href="/#about"
                  className="block py-5 px-5"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  ABOUT
                </Link>
              </li>
              <li className="border-b border-solid w-full text-right">
                <Link 
                  href="/#projects" 
                  className="block py-5 px-5" 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  PROJECTS
                </Link>
              </li>
              <li className="border-b border-solid w-full text-right">
                <Link 
                  href="/#contact" 
                  className="block py-5 px-5" 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    CONTACT
                </Link>
              </li>
              <li className="border-b border-solid w-full text-right">
                <Link href="/contact" className="block py-5 px-5">
                  REUSME
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
