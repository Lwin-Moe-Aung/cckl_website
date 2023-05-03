import React from "react";
import { Link } from "react-router-dom";
import {useState, useEffect } from "react";
import {
  Card,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Alert,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { BlogPostCard, FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import axios from '@/api/axios'
import {useTranslation} from 'react-i18next'
import { useNavData } from "@/context/NavdataContext";
import EmailForm from "@/components/email-form/EmailForm";

export function Home() {
  const [posts, setPosts] = useState();
  const [error, setError] = useState('');
  const {t} = useTranslation();
  const {data} = useNavData();
  // const {loading, error, value: posts } = useAsync(getAllPosts);
  const getAllPostsUrl = "/admin/posts/all?page=0&size=4"

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const posts = await axios.get(getAllPostsUrl);
        setPosts(posts.data.data);
        setError("")
      } catch (err) {
        if(err.response.status === 400) {
          setError(err.response.data.message)
        }else{
          setError("Something Wrong!");
        }
      }
    }
    getAllPosts()
  },[])

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${data?.banner.image})` }}/>
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                { data?.banner.title }
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mt-24 grid grid-cols-1 gap-12 gap-x-10 md:grid-cols-2 xl:grid-cols-4">
              {posts?.map((post, index) => (
                  <BlogPostCard
                    key={index}
                    post={post}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading={data?.heroesText.title} >
              {data?.heroesText.description}
          </PageTitle>
          {error && 
            <Alert
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            >
              {error}
            </Alert>
          }
          
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">

            {data?.heroesPeople.map(({id, image, name, job_title, fb_link }) => (
              <TeamCard
                key={id}
                img={image}
                name={name}
                position={job_title}
                socials={
                  fb_link &&
                  <div className="flex items-center gap-2">
                      <a href={fb_link} target="_blank">
                        <IconButton key={id} color="pink" variant="text">
                          <i className='fa-brands text-lg fa-dribbble' />
                        </IconButton>
                      </a>
                      
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <EmailForm/>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <iframe style={{ width:"100%", height:"400px" }} src="https://maps.google.com/maps?q=yangon%20shwedagon&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed">
          </iframe>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
