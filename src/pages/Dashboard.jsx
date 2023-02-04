
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DashboardSidebar from './DashboardSidebar'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className='text-gray-400 bg-gray-900 body-font flex gap-10'>
        <DashboardSidebar />
        <div className='w-full'>
          <h1 className='text-xl py-4'>Admin Dashboard</h1>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

const Navbar = () => {
  return (
    <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
      <Link to="/" className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-base mt-4 md:mt-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 rotate-180 mr-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
        Back to Home
      </Link>
      <input className="flex items-center h-10 px-4 ml-10 border-gray-300 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring-indigo-200" type="search" placeholder="Search for anything…" />
      <div className="ml-10">
        <a className="mx-2 text-sm font-semibold text-indigo-700" href="#">Projects</a>
        <a className="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">Team</a>
        <a className="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">Activity</a>
      </div>
      <button className="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer">
        <img src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512" alt="" />
      </button>
    </div>)
}