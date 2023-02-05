import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/img/logo.png";
import NavLinks from "./NavLinks";
import {useTranslation} from 'react-i18next'
import useAuth from "@/hooks/useAuth";
import { Categories, ProfileDropDown, LanguageDropDown } from "../../widgets/cards";

const Navbar = () => {
  const {t} = useTranslation()
  const { auth ,logout } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link
            to="/home"
            className="flex items-center font-semibold text-sm  transition hover:text-blue-500"
          >
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/home" className="py-7 px-3 inline-block">
              {t('nav.home')}
            </Link>
          </li>
          <li>
            <Link to="/blog" className="py-7 px-3 inline-block">
              {t('nav.blog')}
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          {auth ? (
              <ProfileDropDown />
            ) :
            (<>
                <Link
                  to="/sign-in"
                  className="py-7 px-3 inline-block"
                >
                  <span className="mr-2">
                    <i className="far fa-user"></i>
                  </span>
                  {t('nav.login')}
                </Link>
                <Link
                  to="/sign-up"
                  className="py-7 px-3 inline-block"
                >
                  <span className="mr-2">
                  <i className="far fa-user"></i>
                  </span>
                  {t('nav.register')}
                </Link>
            </>)
          }
          
          <LanguageDropDown />
          
        </div>
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"} z-10
          `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <button style={{ "background":"red" }} className="bg-primary text-white  px-6 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
