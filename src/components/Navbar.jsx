import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-white body-font border-b text-gray-900  shadow-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex font-medium text-lg items-center text-indigo-500 mb-4 md:mb-0">My Blog</Link>
        <input className="flex items-center h-10 px-4 ml-10 text-sm border-gray-300 bg-gray-100 rounded-full focus:outline-none focus:ring focus:ring-indigo-300" type="search" placeholder="Search for anything…" />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/readings" className="mr-5 hover:text-indigo-500">Reading List</Link>
          <Link to="/bookmark" className="mr-5 hover:text-indigo-500">Bookmark</Link>
        </nav>
        <Link to="/dashboard  " className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-base mt-4 md:mt-0">Dashboard
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Navbar