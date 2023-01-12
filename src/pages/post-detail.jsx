import React,{ useState, useEffect } from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";
import { useSearchParams, useLocation } from "react-router-dom";
import {
    ClockIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
    TagIcon
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import axios from "@/api/axios";
import { fDate } from '@/utils/formatTime';
import { PostView, Comment, SimilerPost, Alert } from "@/widgets/cards";

export function PostDetail() {
    const [post, setPost] = useState(null);
    const [errMsg, setErrMsg] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const slug = searchParams.get('b');
    const url = "/admin/posts";

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getPost = async () => {
          try {
              const post = await axios.get(`${url}/${slug}`,{
                  signal: controller.signal
              });
              if(isMounted) setPost(post.data);
          } catch (error) {
              if(error.response.status === 400) {
                  setErrMsg(error.response.data.message)
              }else{
                  setErrMsg("Something Wrong!");
              }
          }
        }
        getPost();
        return () => {
          isMounted = false;
          controller.abort();
        }

    }, [slug])

    console.log(post);
    return (
        <>
          <section className="relative block h-[50vh]">
              <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
              <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
          </section>
          {errMsg && 
            <Alert errMsg={errMsg}/>
          }
          <div className="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">
            {/*  post view  */}

            {post !== null ? <PostView post={post}/> : null}
           

            {/*  title  */}
            <div className="flex bg-white px-3 py-2 justify-between items-center rounded-sm mt-8">
                <h5 className="text-base uppercase font-semibold font-roboto">Related post</h5>
                <a href="#"
                    className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                    see more
                </a>
            </div>

            {/*  similer post  */}
            <SimilerPost/>

            {/*  comment  */}
            <Comment/>
          </div>
        </>
    );
}

export default PostDetail;
