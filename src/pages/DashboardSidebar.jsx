import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <>
      <aside id="default-sidebar" className="sticky top-16 left-0 w-64 h-screen transition-transform" aria-label="Sidebar">
        {/* <button className='absolute top-0 right-0'>Open</button> */}
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2">
            <Link to="/dashboard">
              <span href="#" className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:text-white tracking-wider hover:bg-gray-700">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-300 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span className="ml-3">Dashboard</span>
              </span>
            </Link>
            <Link to="/dashboard/add-blog ">
              <span href="#" className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:text-white tracking-wider hover:bg-gray-700">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-300 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span className="ml-3">Add Blog</span>
              </span>
            </Link>
          </ul>
        </div>
      </aside>
    </>

  )
}

export default DashboardSidebar
