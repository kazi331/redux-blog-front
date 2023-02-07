import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../components/BlogCard'


const Bookmark = () => {

  const { bookmark } = useSelector(state => state.post);
  return (
    <div className="min-h-[calc(100vh-113px)]">
      <h1 className="text-3xl font-bold text-center">Your Bookmarks</h1>
      {!bookmark.length && <h1 className="text-3xl font-bold text-center text-orange-400">No Bookmark Found</h1>}

      <div className="flex flex-wrap -m-2 mb-2">
        {
          bookmark.map(post => <BlogCard key={post._id} post={post} />)
        }
      </div>
    </div>
  )
}

export default Bookmark
