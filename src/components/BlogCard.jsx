import React from 'react';
import { Link } from 'react-router-dom';
import { bookmarkOn, commentIcon, dateIcon } from './Icons';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark, toggleFilter } from '../redux/actions/actionCreators';




const BlogCard = ({ post }) => {

  const { title, body, tags, _id, date } = post;
  const bookmark = useSelector(state => state.post.bookmark);
  const dispatch = useDispatch();
  // check if bookmarked
  const isBookmarked = bookmark.find(item => item._id === _id);

  return (
    <div className='p-2 lg:w-1/3 md:w-1/2 w-full '>
      <div className="relative flex flex-col items-start p-4 mt-3 bg-white dark:bg-gray-800 shadow rounded-lg bg-opacity-90 group hover:bg-opacity-100">
        <div className='flex flex-wrap gap-1 ml-auto'>
          {tags?.map(tag => <button key={tag} onClick={() => dispatch(toggleFilter(tag))} className="hover:shadow flex items-center h-6 px-3 text-xs font-semibold text-indigo-500 bg-indigo-100 dark:bg-indigo-500 dark:text-white rounded-sm">{tag}</button>)}
        </div>
        <Link to={`/post/${_id}`} className='my-1 font-medium hover:text-indigo-600 dark:hover:text-indigo-400'>{title}</Link>
        <h4 className="text-sm font-medium">{body?.slice(0, 100)}</h4>
        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
          <div className="flex items-center">
            {dateIcon}
            <span className="ml-1 leading-none">{moment(date).format("MMM Do YY")}</span>
          </div>
          <div className="relative flex items-center ml-4">
            {commentIcon}
            <span className="ml-1 leading-none">4</span>
          </div>
          <button onClick={() => dispatch(toggleBookmark(post))} className={`ml-auto p-1 scale-125  hover:bg-indigo-100 dark:hover:bg-gray-600 rounded-full ${isBookmarked ? "text-indigo-500 dark:text-indigo-500" : "dark:text-gray-500"}`}>{bookmarkOn}</button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;
