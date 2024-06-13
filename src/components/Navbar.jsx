import React, { useState } from "react";
import Logo from "./Logo";
import { RiMenu3Line } from "react-icons/ri";
import MobileLogo from "./MobileLogo";
import { IoClose } from "react-icons/io5";
import { TbBrandSpeedtest } from "react-icons/tb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faVials } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons/faNewspaper";
import { LuLogIn } from "react-icons/lu";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const navLinks = [
    {
      name: "Test",
      icon: faVials,
    },
    {
      name: "Courses",
      icon: faBookOpen,
    },
    {
      name: "Communities",
      icon: faPeopleGroup,
    },
    {
      name: "Articles",
      icon: faNewspaper,
    },
  ];

  return (
    <>
      <nav className="sm:py-6 md:py-6 lg:py-8 flex flex-row justify-between items-center">
        <div className="flex items-center sm:gap-4 md:gap-6 xl:gap-8 cursor-pointer">
          <div>
            <Logo />
          </div>

          <div className="hidden sm:flex flex-row items-center gap-4 md:gap-6 2xl:gap-12">
            {navLinks.map((link, i) => (
              <ul
                className="list-none flex flex-col justify-center items-center"
                key={i}
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className="hidden md:block md:w-5 md:h-5"
                />
                <li className="text-gray-700 font-semibold sm:text-sm md:text-[16px] 2xl:text-3xl">
                  {link.name}
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="hidden sm:flex flex-row items-center gap-4 md:gap-6 2xl:gap-8 cursor-pointer">
          <div className="flex flex-row gap-2 items-center">
            <LuLogIn className="hidden md:block md:w-8 md:h-8" />
            <button className="text-gray-700 font-semibold text-sm md:text-[16px] 2xl:text-3xl">
              Login
            </button>
          </div>

          <button
            className="rounded-xl bg-black text-white text-center md:px-5 md:py-2 2xl:px-7 2xl:py-4 text-sm md:text-[16px] 2xl:text-3xl
        sm:text-sm sm:px-3 sm:py-2"
          >
            Join Now
          </button>
        </div>
      </nav>

      <nav className="relative z-10 sm:hidden">
        <div className="flex justify-between items-center p-6">
          <div>
            <MobileLogo toggle={toggle} />
          </div>
          <div>
            <RiMenu3Line
              className="h-10 w-10 text-black"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>

        {toggle && (
          <div className="absolute top-0 right-0 flex flex-col gap-4 bg-white w-1/2 h-screen">
            <div className="absolute top-5 right-6">
              <IoClose
                className="h-12 w-12 text-black"
                onClick={() => setToggle(false)}
              />
            </div>

            <div className="mt-32">
              {navLinks.map((link, i) => (
                <ul
                  key={i}
                  className="p-2 flex flex-col gap-4 justify-center items-center"
                >
                  <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon icon={link.icon} className="w-7 h-7" />
                    <li className="text-black text-2xl font-semibold">
                      {link.name}
                    </li>
                  </div>
                </ul>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 justify-center items-center">
              <div className="flex flex-row gap-4 items-center">
                <LuLogIn className="w-4 h-4" />
                <button className="text-gray-700 font-semibold text-2xl">
                  Login
                </button>
              </div>

              <button className="rounded-xl bg-black text-white text-center text-2xl w-max px-5 py-3">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
