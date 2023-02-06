import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToReading } from '../redux/actions/actionCreators';

const PostView = () => {
  const { id } = useParams();
  const post = useSelector(state => state.post.posts.find(post => post._id === id));

  const dispatch = useDispatch();
  // add to reading list
  useEffect(() => {
    dispatch(addToReading(post))
  }, [])



  // const { title, body, tags, author, _id, date } = post;
  return (
    <div className='w-full max-w-4xl mx-auto' >
      <h2 className='text-xl'>{post?.title}</h2>
      <p className='text-sm mt-2'>{post?.author}</p>
      <p className='text-xs mb-3'>{moment(post?.date).format('lll')}</p>
      <p>{post?.body}</p>

      <div className='mt-3 flex flex-wrap items-center gap-1 ml-auto'>
        Relivant to: {post?.tags?.map(tag => <button key={tag} className="shadow  flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100  dark:bg-indigo-500 dark:text-white rounded">{tag}</button>)}
      </div>
    </div>
  )
}

export default PostView
