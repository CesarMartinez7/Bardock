import React from "react";
import { useState } from "react";
import { FaJs } from "react-icons/fa6";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Vite } from "../Icons/Logos";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "docs" },
  { name: "Data", href: "datos" },
  { name: "Contact", href: "contact" },
  { name: "DashBoard", href: "dash" },
];
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav class= "relative w-full z-20 top-0 start-0 bg-transparent">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <FaJs></FaJs>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link className="bg-indigo-600 pl-4 pr-4 text-white pt-2 pb-2 rounded-md " to="registrer" >Login</Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navigation.map((value)=>(
              <li>
                <Link to={value.href} className="text-gray-700 font-normal">{value.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
