import React,{ useState, useEffect } from "react";
import axios from "@/api/axios";
import { Link } from "react-router-dom";
import { fDate } from '@/utils/formatTime';

export const RandomPosts = () => {
    const [posts, setPosts] = useState(null);
    const url = "/admin/posts/random";
    const catUrl = "/blog/watch?b=";

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getPosts = async () => {
          try {
              const posts = await axios.get(url, { params: { limit: 3 }}, {
                  signal: controller.signal
              });
              if(isMounted) setPosts(posts.data);
          } catch (error) {
             console.log(error);
          }
        }
        getPosts();
        return () => {
          isMounted = false;
          controller.abort();
        }
  
    }, []) 
    console.log(posts);
    return (
        <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Random Posts</h3>
            <div className="space-y-4">
                {posts?.map((post, index) => (
                    <Link key={index} to={`${catUrl}${post?.slug}`} className="flex group">
                        <div className="flex-shrink-0">
                            <img src={post.cover_image} className="h-14 w-20 rounded object-cover"/>
                        </div>
                        <div className="flex-grow pl-3">
                            <h5
                                className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                {post.title.substring(0,40)}
                            </h5>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-1 text-xs"><i className="far fa-clock"></i></span>
                                {fDate(post?.createdAt)}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
