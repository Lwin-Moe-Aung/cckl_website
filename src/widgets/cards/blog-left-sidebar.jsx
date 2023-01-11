import React from 'react'
import { Categories, RandomPosts } from '.';

export const BlogLeftSideBar = () => {
  return (
      <div className="w-3/12 hidden xl:block">
          {/* categories */}
          <Categories/>
          
          {/* random posts */}
          <RandomPosts/>
      </div>
  )
}
