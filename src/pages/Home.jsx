import React from 'react'
import { useSelector } from 'react-redux'
import BlogCard from '../components/BlogCard'
import Filterbar from '../components/Filterbar'

const Home = () => {



  const { posts } = useSelector(state => state.post);
  const { sort, filter } = useSelector(state => state.filter);

  // SORT AND FILTER POSTS ACCORDING TO FILTER AND SORT STATE FROM REDUX STORE
  let content = posts.map(post => <BlogCard key={post._id} post={post} />);
  content = posts

    // sort with post.date and if sort is === "" then sort posts reverse
    .sort((a, b) => {
      if (sort === "old") return new Date(b.date) - new Date(a.date);
      if (sort === "new") return new Date(a.date) - new Date(b.date);
    })
    // filter post with their tags according to the tags inside of filter array
    .filter(post => {
      if (filter.length === 0) return true; // copilot
      return filter.some(tag => post.tags.includes(tag));
    })

    .reverse()
    .map(post => <BlogCard key={post._id} post={post} />);
  // .filter(post => post.tags.some(tag => filter.includes(tag))) // tabnine


  return (
    <div className="min-h-[calc(100vh-113px)]">
      <Filterbar />
      {/* Placeholder for loading state */}
      {content.length === 0 && <div className="text-center text-2xl">Loading...</div>}
      <div className="flex flex-wrap -m-2">
        {content}
      </div>
    </div>
  )
}

export default Home
