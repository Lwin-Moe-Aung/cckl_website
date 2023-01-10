import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
// import { Footer } from "@/widgets/layout";

export function Layout(){
  return (
    <>
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
            <Navbar/>
        </div>
        <div>
            <Outlet />
        </div>
        {/* <div className="bg-blue-gray-50/50">
            <Footer />
        </div> */}
    </>
  )
}

export default Layout;