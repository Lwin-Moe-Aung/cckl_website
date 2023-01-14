import React,{ useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import axios from '@/api/axios';
import { BlogPostCard } from '@/widgets/cards';
import "../utils/pagination.css";
export const Blog = () => {

  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  let limit = 4;
  const getPostUrl = "/admin/posts/all?page=";

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${getPostUrl}0&size=${limit}`);
      setPosts(res.data.data);
      setPageCount(Math.ceil(res.data.total / limit));
    };
    getPosts();

  }, [limit]);

  const fetchPosts = async (currentPage) => {
    const res = await axios.get(`${getPostUrl}${currentPage}&size=${limit}`);
    return res.data.data;
  }

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected;

    const dataFromServer = await fetchPosts(currentPage);

    setPosts(dataFromServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };

  return (
    <>
      <div className="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">

        <div className="flex bg-white px-3 py-2 justify-between items-center rounded-sm mb-5">
            <h5 className="text-base uppercase font-semibold font-roboto">BUSINESS</h5>
            <a href="#"
                className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                see more
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

          {posts?.map((post, index) => (
            <BlogPostCard key={index} post={post}/>
          ))}

        </div>

        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </>
  )
}
