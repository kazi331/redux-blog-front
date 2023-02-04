import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

const PostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState({})
  useEffect(() => {
    fetch('http://localhost:5000/post/' + id)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.log(err))
  }, [])

  console.log(post)
  const { title, body, tags, author, _id, date } = post;
  return (
    <div>


      <h2 className='text-xl'>{title}</h2>
      <p className='text-sm mt-2'>{author}</p>
      <p className='text-xs mb-3'>{moment(date).format('MM dd YY')}</p>
      <p>{body}</p>

      <div className='mt-3 flex flex-wrap gap-1 ml-auto'>
        Relivant to: {tags?.map(tag => <button key={tag} className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded">{tag}</button>)}
      </div>

    </div>
  )
}

export default PostView