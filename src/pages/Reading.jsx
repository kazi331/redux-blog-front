import React from 'react'
import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard'

const Reading = ({post}) => {
  const {posts} = useSelector(state => state.post);
  return (
    <div className="">
      <div className="flex flex-wrap -m-2">
        {
          posts.map(post => <BlogCard key={post._id} post={post} />)
        }
      </div>
    </div>
  )
}

export default Reading