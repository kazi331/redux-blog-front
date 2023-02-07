import React from 'react'
import { Link } from 'react-router-dom'
import { dashboardIcon } from '../components/Icons'

const DashboardSidebar = () => {
  return (
    <>
      <aside id="default-sidebar" className="  bg-gray-800 w-64 transition-transform px-3 py-4 overflow-y-auto" aria-label="Sidebar">
        <ul className="space-y-2">
          <Link to="/dashboard">
            <span className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:text-white tracking-wider hover:bg-gray-700">{dashboardIcon}<span className="ml-3">Dashboard</span></span>
          </Link>
          <Link to="/dashboard/add-blog ">
            <span className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:text-white tracking-wider hover:bg-gray-700">{dashboardIcon}<span className="ml-3">Add Blog</span></span>
          </Link>
        </ul>
      </aside>
    </>

  )
}

export default DashboardSidebar
