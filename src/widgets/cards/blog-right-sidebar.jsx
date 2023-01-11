import React from 'react'
import { PopularPosts } from './popular-posts'
import { TagCategories, SocialPlugin} from '.'
export const BlogRightSideBar = () => {
  return (
      <div className="lg:w-3/12 w-full mt-8 lg:mt-0">
        {/* social Plugin */}
        <SocialPlugin/>

        {/* popular posts */}
        <PopularPosts/>

        {/* categories */}
        <TagCategories/>
      </div>
  )
}
