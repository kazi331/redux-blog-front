import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { useSelector } from 'react-redux';

const PostView = () => {
  const { id } = useParams();
  const post = useSelector(state => state.post.posts.find(post => post._id === id));

  console.log(post)

  // const { title, body, tags, author, _id, date } = post;
  return (
    <div >
      <h2 className='text-xl'>{post?.title}</h2>
      <p className='text-sm mt-2'>{post?.author}</p>
      <p className='text-xs mb-3'>{moment(post?.date).format('lll')}</p>
      <p>{post?.body}</p>

      <div className='mt-3 flex flex-wrap items-center gap-1 ml-auto'>
        Relivant to: {post?.tags?.map(tag => <button key={tag} className="shadow border hover:border hover:border-green-500 flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded">{tag}</button>)}
      </div>
    </div>
  )
}

export default PostView