import React from 'react'
import { fDate } from '@/utils/formatTime';
import { Avatar, Typography } from "@material-tailwind/react";

export const PostView = ({post}) => {
    return (
        <div className="rounded-sm overflow-hidden bg-white shadow-sm">
        <div className="">
            <img src={post?.cover_image} className="w-full h-96 object-cover"/>
        </div>
        <div className="p-4 pb-5">
            <h2 className="block text-2xl font-semibold text-gray-700 font-roboto">
                {post?.title}
            </h2>
            <div className="mt-2 flex space-x-4">
                <div className="flex text-gray-400 text-sm items-center">
                    <span className="mr-2 text-sm">
                        <Avatar src={post?.postUser.photo} alt="avatar" variant="circular" size="xs"/>
                    </span>
                    { post?.postUser.username}
                </div>
                <div className="flex text-gray-400 text-sm items-center">
                    <span className="mr-2 text-xs">
                        <i className="far fa-clock"></i>
                    </span>
                    { fDate(post?.createdAt)}
                </div>
            </div>
           
            <div
                dangerouslySetInnerHTML={{
                    __html:post?.description
                }}
            />

            <div className="flex items-center flex-wrap gap-2 mt-5">
                {post?.postCategories.map((category, index) => (
                    <a href="" key={index}
                        className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">
                            {category.name}
                    </a>
                ))}
               
            </div>

            <div className="mt-5 pt-5 border-t border-gray-200 flex gap-2">
                <a href="#"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    </div>
    )
}
