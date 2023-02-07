import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Main = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 min-h-max'>
        <div className='container mx-auto p-4'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Main
