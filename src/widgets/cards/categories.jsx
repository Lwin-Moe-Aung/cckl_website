import React,{ useState, useEffect } from "react";
import axios from "@/api/axios";
import { Link } from "react-router-dom";
import slugify from 'react-slugify';

export const Categories = () => {
    const [categories, setCategories] = useState(null);
    const url = "/admin/categories/post-count";
    const catUrl = "/blog/category?cat=";
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getCategories = async () => {
          try {
              const categories = await axios.get(url,{
                  signal: controller.signal
              });
              if(isMounted) setCategories(categories.data);
          } catch (error) {
             console.log(error);
          }
        }
        getCategories();
        return () => {
          isMounted = false;
          controller.abort();
        }
  
    }, []) 
    console.log(categories);
    return (
        <div className="w-full bg-white shadow-sm rounded-sm p-4 ">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
            <div className="space-y-2">
                {categories?.map((category, index) => (
                    <Link
                        key={index}
                        to={`${catUrl}${slugify(category.name)}`}
                        className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                    >
                        <span className="mr-2">
                            <i className="far fa-folder-open"></i>
                        </span>
                        <span>{category.name}</span>
                        <p className="ml-auto font-normal">({category.postCount})</p>
                    </Link>
                ))}
                
               
            </div>
        </div>
    )
}
