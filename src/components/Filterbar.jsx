import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFilter, toggleSort, clearFilter } from '../redux/actions/actionCreators'


const Filterbar = () => {
  const { filter, sort } = useSelector(state => state.filter)
  const activeClass = "bg-indigo-500 text-white"
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
      <div className="flex justify-between items-center w-full">
        <div className="flex">
          <select className='flex gap-4 w-full shadow mx-1 py-1 border focus:outline-none hover:border-indigo-500 rounded text-sm' onChange={(e) => dispatch(toggleSort(e.target.value))} >
            <option value="">Sort by</option>
            <option value="new">New first</option>
            <option value="old">Old first</option>
          </select>
        </div>
        <div className="flex">
          {filter.length ? <button onClick={() => dispatch(clearFilter())} className="shadow px-2 mx-1 py-1 border bg-red-500 text-white hover:border-red-500 rounded text-sm">Clear Filter</button> : null}
          {
            tags.map(tag => <button key={tag.id} onClick={() => dispatch(toggleFilter(tag.id))} className={`shadow px-2 mx-1 py-1 border hover:border-indigo-500 rounded text-sm ${filter.includes(tag.id) && activeClass}`}>{tag.name}</button>)
          }
        </div>
      </div>
    </div>
  )
}

export default Filterbar