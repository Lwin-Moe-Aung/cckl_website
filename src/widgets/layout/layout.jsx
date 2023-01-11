import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
// import { Footer } from "@/widgets/layout";

export function Layout(){
  return (
    <>
        <div className="container px-4 mx-auto flex items-center py-0">
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