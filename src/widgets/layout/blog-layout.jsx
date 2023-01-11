import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import { Footer } from "@/widgets/layout";
import { BlogLeftSideBar, BlogRightSideBar } from '../cards';

export function BlogLayout(){
  return (
    <>
        <div className="container px-4 mx-auto flex items-center py-0">
            <Navbar/>
        </div>
        <main className="pt-12 bg-gray-100 pb-12">
            <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
                {/* left sidebar */}
                <BlogLeftSideBar/>

                {/* Man content */}
                <Outlet/>

                {/* right sidebar */}
                <BlogRightSideBar/>

            </div>
        </main>
        <div className="bg-blue-gray-50/50">
            <Footer />
        </div>
       
    </>
  )
}

export default BlogLayout;