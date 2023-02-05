import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../components/BlogCard'


const Bookmark = () => {

  const { bookmark } = useSelector(state => state.post);
  return (
    <div className="">
      <div className="flex flex-wrap -m-2">
        {
          bookmark.map(post => <BlogCard key={post._id} post={post} />)
        }
      </div>
    </div>
  )
}

export default Bookmark