import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFilter, toggleSort, clearFilter, searchPost } from '../redux/actions/actionCreators'


const Filterbar = () => {
  const { filter, sort } = useSelector(state => state.filter)

  const dispatch = useDispatch();
  const tags = [
    { id: "javascript", name: "Javascript" },
    { id: "react", name: "ReactJS" },
    { id: "node", name: "NodeJS" },
    { id: "redux", name: "Redux" },
    { id: "next", name: "NextJS" },
  ]
  return (
    <div className='container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center'>
      <div className="flex justify-between items-center w-full flex-wrap gap-y-2">
        <div className='flex'>
          <select className='flex gap-4 shadow mx-1 py-1 focus:outline-none border-none rounded text-sm dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-0' onChange={(e) => dispatch(toggleSort(e.target.value))} >
            <option value="new">New first</option>
            <option value="old">Old first</option>
          </select>
          <input onChange={(e) => dispatch(searchPost(e.target.value)) } className="flex items-center px-4 ml-10 text-sm border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-transparent rounded-full focus:outline-none focus:ring focus:ring-indigo-300 dark:focus:ring-0" type="search" placeholder="Search for blog" />
        </div>
        <div className="flex">
          {filter.length ? <button onClick={() => dispatch(clearFilter())} className="shadow px-2 mx-1 py-1 border dark:border-transparent  bg-red-500 text-white hover:border-red-500 rounded text-sm">Clear Filter</button> : null}
          {
            tags.map(tag => <button key={tag.id} onClick={() => dispatch(toggleFilter(tag.id))} className={`shadow px-2 mx-1 py-1 border dark:border-transparent hover:border-indigo-500   rounded text-sm  ${filter.includes(tag.id) ? "bg-indigo-500 text-white" : 'bg-white dark:bg-gray-700'}`}>{tag.name}</button>)
          }
        </div>
      </div>
    </div>
  )
}

export default Filterbar
