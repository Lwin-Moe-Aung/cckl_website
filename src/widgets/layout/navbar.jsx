import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavConfig from "./navconfig";

export function Navbar({ brandName, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const openSidebar = () => {
    document.querySelector('#sidebar').classList.remove('-left-80')
    document.querySelector('#sidebar').classList.add('left-0')
    document.querySelector('#sidebar_wrapper').classList.remove('opacity-0')
    document.querySelector('#sidebar_wrapper').classList.remove('invisible')
  }
  const sidebarWrapper = () => {
    document.querySelector('#sidebar').classList.add('-left-80')
    document.querySelector('#sidebar').classList.remove('left-0')
    document.querySelector('#sidebar_wrapper').classList.add('opacity-0')
    document.querySelector('#sidebar_wrapper').classList.add('invisible')
  }
  const navList = (
    <ul classNameName="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {NavConfig.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          classNameName="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              classNameName="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  classNameName: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              classNameName="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  classNameName: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
      {/* // <!-- navbar --> */}
      <nav className="shadow-sm">
          <div className="container px-4 mx-auto flex items-center py-3">
              {/* <!-- logo --> */}
              <div className="lg:w-44 w-40">
                  <a href="index.html">
                      <img src="src/images/logo.png" alt="logo" className="w-full"/>
                  </a>
              </div>
              {/* <!-- logo end --> */}

              {/* <!-- navlinks --> */}
              <div className="ml-12 lg:flex space-x-5  hidden">
                  <Link
                    to="/home"
                    className="flex items-center font-semibold text-sm  transition hover:text-blue-500"
                  >
                    <span className="mr-2">
                        <i className="fas fa-home"></i>
                    </span>
                    Home
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center font-semibold text-sm  transition hover:text-blue-500"
                  >
                    <span className="mr-2">
                        <i className="fas fa-user"></i>
                    </span>
                    Profile
                  </Link>
                  <Link
                    to="/blog"
                    className="flex items-center font-semibold text-sm  transition hover:text-blue-500"
                  >
                    <span className="mr-2">
                        <i className="fas fa-blog"></i>
                    </span>
                    Blog
                  </Link>
              </div>
              {/* <!-- navlinks end --> */}

              {/* <!-- searchbar --> */}
              <div className="relative lg:ml-auto hidden lg:block">
                  <span className="absolute left-3 top-2 text-sm text-gray-500">
                      <i className="fas fa-search"></i>
                  </span>
                  <input type="text"
                      className="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                      placeholder="Search"/>
              </div>
              <div className="lg:ml-5 ml-auto">
                  <a href="#"
                      className=" text-sm  font-semibold hover:text-blue-500 transition flex items-center">
                      <span className="mr-2">
                          <i className="far fa-user"></i>
                      </span>
                      Login/Register</a>
              </div>
              <div className="text-xl text-gray-700 cursor-pointer ml-4 lg:hidden block hover:text-blue-500 transition"
                  id="open_sidebar" onClick={openSidebar}>
                  <i className="fas fa-bars"></i>
              </div>
              {/* <!-- searchbar end --> */}

          </div>
      </nav>

      {/* Mobile view */}
      <div className="fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 z-10 opacity-0 invisible transition-all duration-500 lg:hidden"
          id="sidebar_wrapper" onClick={sidebarWrapper}>
          <div className="fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col transition-all duration-500 -left-80"
              id="sidebar">

              {/* <!-- searchbar --> */}
              <div className="relative mx-3 mt-3 shadow-sm">
                  <span className="absolute left-3 top-2 text-sm text-gray-500">
                      <i className="fas fa-search"></i>
                  </span>
                  <input type="text"
                      className="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                      placeholder="Search"/>
              </div>

              {/* <!-- navlink --> */}
              <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-3 pt-3">Menu</h3>
              <div className="">
                  <Link
                    to="/home"
                    className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500"
                  >
                    <span className="mr-2">
                        <i className="fas fa-home"></i>
                    </span>
                    Home
                  </Link>
                  <Link
                    to="/profile"
                    className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500"
                  >
                    <span className="mr-2">
                        <i className="fas fa-user"></i>
                    </span>
                    Profile
                  </Link>
                  <Link
                    to="/blog"
                    className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500"
                  >
                    <span className="mr-2">
                        <i className="fas fa-blog"></i>
                    </span>
                    Blog
                  </Link>
              </div>
              {/* <!-- navlinks end --> */}

              {/* <!-- categories --> */}
              <div className="w-full mt-3 px-4 ">
                  <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
                  <div className="space-y-2">
                      <a href="#"
                          className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                          <span className="mr-2">
                              <i className="far fa-folder-open"></i>
                          </span>
                          <span>Beauti</span>
                          <p className="ml-auto font-normal">(12)</p>
                      </a>
                      <a href="#"
                          className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                          <span className="mr-2">
                              <i className="far fa-folder-open"></i>
                          </span>
                          <span>Business</span>
                          <p className="ml-auto font-normal">(15)</p>
                      </a>
                      <a href="#"
                          className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                          <span className="mr-2">
                              <i className="far fa-folder-open"></i>
                          </span>
                          <span>Fashion</span>
                          <p className="ml-auto font-normal">(5)</p>
                      </a>
                      <a href="#"
                          className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                          <span className="mr-2">
                              <i className="far fa-folder-open"></i>
                          </span>
                          <span>Food</span>
                          <p className="ml-auto font-normal">(10)</p>
                      </a>
                      <a href="#"
                          className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                          <span className="mr-2">
                              <i className="far fa-folder-open"></i>
                          </span>
                          <span>Learn</span>
                          <p className="ml-auto font-normal">(3)</p>
                      </a>
                      <a href="#"
                          className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                          <span className="mr-2">
                              <i className="far fa-folder-open"></i>
                          </span>
                          <span>Music</span>
                          <p className="ml-auto font-normal">(7)</p>
                      </a>
                      <a href="#"
                          className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                          <span className="mr-2">
                              <i className="far fa-folder-open"></i>
                          </span>
                          <span>Nature</span>
                          <p className="ml-auto font-normal">(0)</p>
                      </a>
                      <a href="#"
                          className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                          <span className="mr-2">
                              <i className="far fa-folder-open"></i>
                          </span>
                          <span>People</span>
                          <p className="ml-auto font-normal">(13)</p>
                      </a>
                      <a href="#"
                          className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                          <span className="mr-2">
                              <i className="far fa-folder-open"></i>
                          </span>
                          <span>Sports</span>
                          <p className="ml-auto font-normal">(7)</p>
                      </a>
                      <a href="#"
                          className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                          <span className="mr-2">
                              <i className="far fa-folder-open"></i>
                          </span>
                          <span>Technology</span>
                          <p className="ml-auto font-normal">(17)</p>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </>
  
  );
}

Navbar.defaultProps = {
  brandName: "CCKL Website",
  action: (
    <a
      href="https://play.google.com/store/apps/details?id=com.king.candycrushsaga"
      target="_blank"
    >
      <Button variant="gradient" size="sm" fullWidth>
        Download App
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
