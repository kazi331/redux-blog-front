import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFilter, toggleSort, clearFilter } from '../redux/actions/actionCreators'


const Filterbar = () => {
  const { filter, sort } = useSelector(state => state.filter)
  const activeClass = "bg-indigo-500 text-white dark:bg-indigo-500"
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

          <select className='flex gap-4 shadow mx-1 py-1 focus:outline-none border-none rounded text-sm dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-0' onChange={(e) => dispatch(toggleSort(e.target.value))} >
            <option value="new">New first</option>
            <option value="old">Old first</option>
          </select>

        <div className="flex">
          {filter.length ? <button onClick={() => dispatch(clearFilter())} className="shadow px-2 mx-1 py-1 border dark:border-transparent  bg-red-500 text-white hover:border-red-500 rounded text-sm">Clear Filter</button> : null}
          {
            tags.map(tag => <button key={tag.id} onClick={() => dispatch(toggleFilter(tag.id))} className={`shadow px-2 mx-1 py-1 border dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 dark:bg-gray-700 rounded text-sm ${filter.includes(tag.id) ? activeClass : 'bg-white'}`}>{tag.name}</button>)
          }
        </div>
      </div>
    </div>
  )
}

export default Filterbar
