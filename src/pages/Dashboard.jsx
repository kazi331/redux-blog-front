
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DashboardSidebar from './DashboardSidebar'

const Dashboard = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='relative text-gray-400 bg-gray-900 body-font flex gap-x-4'>
        <DashboardSidebar />
        <div className='w-full overflow-auto px-4'>
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
    <div className="sticky top-0 flex flex-wrap gap-y-2 justify-center   w-full py-4 px-10 bg-gray-800  z-10">
      <Link to="/" className=" inline-flex items-center bg-gray-700 text-white shadow border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 rounded text-base md:mt-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 rotate-180 mr-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
        Back to Home
      </Link>
      <input className="flex items-center px-4 ml-2 md:ml-10  border-gray-600 focus:ring-0 text-sm text-gray-300 bg-gray-700 rounded-full" type="search" placeholder="Search for anything…" />
      <div className="ml-2 md:ml-10 text-xm font-semibold text-gray-400 ">
        <a className="mx-2 hover:text-gray-200 " href="#">Projects</a>
        <a className="mx-2 hover:text-gray-200 " href="#">Team</a>
        <a className="mx-2 hover:text-gray-200 " href="#">Activity</a>
      </div>
      <button className="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer">
        <img src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512" alt="" />
      </button>
    </div>)
}
