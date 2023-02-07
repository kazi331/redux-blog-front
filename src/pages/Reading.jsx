import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';

const Reading = () => {
  const { reading } = useSelector(state => state.post);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Reading List</h1>
      {!reading.length && <h1 className="text-3xl font-bold text-center text-orange-400">Reading list is empty</h1>}

      <div className="flex flex-wrap -m-2 pb-2">
        {
          reading?.sort((a, b) => b.order - a.order)
            .map(post => <BlogCard key={post._id} post={post} />)
        }
      </div>
    </>
  )
}

export default Reading
