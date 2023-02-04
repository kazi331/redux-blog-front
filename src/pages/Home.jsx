import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BlogCard from '../components/BlogCard'
import Filterbar from '../components/Filterbar'

const Home = () => {
  const { posts } = useSelector(state => state.post);
  const { sort, filter } = useSelector(state => state.filter);

  let content = posts.map(post => <BlogCard key={post._id} post={post} />);
  content = posts
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sort === 'new' ? (dateB - dateA) : (dateA - dateB)
    })
    .filter(post => {
      if (filter.length) {
        return filter.filter(item => post.tags.includes(item))
      }
      return post;
    })
    .map(post => <BlogCard key={post._id} post={post} />);

  return (
    <div className="">
      <Filterbar />
      <div className="flex flex-wrap -m-2">
        {content}
      </div>
    </div>
  )
}

export default Home


const arrowDown = <svg viewBox="0 0 24 24" className="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <polyline points="6 9 12 15 18 9"></polyline>
</svg>