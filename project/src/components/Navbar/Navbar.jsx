import React, { useRef } from "react";
import { useState } from "react";
import { FaJs } from "react-icons/fa6";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import { LogoDesign, Vite, Women } from "../Icons/Logos";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "docs" },
  { name: "Data", href: "datos" },
  { name: "Contact", href: "contact" },
  { name: "DashBoard", href: "dash" },
  { name: "Create", href:"create"}
];
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const barraNav = useRef()
  return (
    <nav className= "relative w-full z-20 top-0 start-0 bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <LogoDesign  alto={"50px"} ancho={"40px"}></LogoDesign>
        <div className="inline-flex gap-1 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link className="bg-indigo-600 pl-4 pr-4 text-white pt-2 pb-2 rounded-md " to="register">Register</Link>
          <Link className="bg-indigo-600 pl-4 pr-4 text-white pt-2 pb-2 rounded-md " to="login">Login</Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 md:hidden justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden xl:hidden"
            onClick={(e)=>{
              barraNav.current.classList.toggle("hidden")
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
          ref={barraNav}
          
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navigation.map((value,key)=>(
              <li  className="p-2" key={key}>
                <Link to={value.href} className="text-gray-700 font-normal">{value.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
