import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { rightArrow } from './Icons'

const Navbar = () => {
  const bookmark = useSelector(state => state.post.bookmark);
  return (
    <header className="bg-white body-font text-gray-900 dark:bg-gray-900 dark:text-gray-300  shadow-xl sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex font-bold text-xl items-center text-indigo-500 dark:text-gray-100  mb-4 md:mb-0">My Blog</Link>
        {/* <input className="flex items-center h-10 px-4 ml-10 text-sm border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-transparent rounded-full focus:outline-none focus:ring focus:ring-indigo-300 dark:focus:ring-0" type="search" placeholder="Search for anything…" /> */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/readings" className="mr-5 hover:text-indigo-500">Reading List</NavLink>
          <NavLink to="/bookmark" className="mr-5 hover:text-indigo-500 relative">Bookmark <div className={`${!bookmark.length && "hidden"} w-2 h-2 bg-indigo-500 rounded-full absolute top-0 -right-1`}></div> </NavLink>
        </nav>
        <Link to="/dashboard  " className="inline-flex items-center bg-gray-200 dark:bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-base mt-4 md:mt-0">Dashboard {rightArrow}</Link>
      </div>
    </header>
  )
}

export default Navbar
