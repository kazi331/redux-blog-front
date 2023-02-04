import React from 'react';
import { Link } from 'react-router-dom';
import { bookmarkOn, commentIcon, dateIcon } from './Icons';
import moment from 'moment'

const BlogCard = ({ post }) => {
  const { title, body, tags, _id, date } = post;
  return (
    <div className='p-2 lg:w-1/3 md:w-1/2 w-full '>
      <div className="relative flex flex-col items-start p-4 mt-3 bg-white shadow rounded-lg bg-opacity-90 group hover:bg-opacity-100">
        
          <div className='flex flex-wrap gap-1 ml-auto'>
            {tags.map(tag => <button key={tag} className="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded">{tag}</button>)}
          </div>
       
        <Link to={`/post/${_id}`} className='my-1 font-medium hover:text-indigo-600'>{title}</Link>
        <h4 className="text-sm font-medium">{body.slice(0, 100)}</h4>
        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
          <div className="flex items-center">
            {dateIcon}
            <span className="ml-1 leading-none">{moment(date).format("MMM Do YY")}</span>
          </div>
          <div className="relative flex items-center ml-4">
            {commentIcon}
            <span className="ml-1 leading-none">4</span>
          </div>
          <button className='ml-auto p-1 scale-125 text-indigo-500 hover:bg-indigo-100 rounded-full '>{bookmarkOn}</button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;
