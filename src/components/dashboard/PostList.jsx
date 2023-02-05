import moment from 'moment'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost } from '../../redux/thunk/managePost'

const PostList = () => {
  const { posts } = useSelector(state => state.post);
  const dispatch = useDispatch();
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container py-24 ">
        <h1 className="sm:text-4xl text-3xl text-center font-medium title-font mb-2 text-white">Manage Posts</h1>
        <div className="overflow-auto mx-auto ">
          <table className="table-auto w-full mx-auto max-w-3xl mb-4  text-left rounded overflow-hidden bg-gray-800 bg-opacity-30 shadow-lg">
            <thead>
              <tr className='title-font tracking-wider font-medium text-white text-sm bg-gray-800'>
                <td><input type="checkbox" name="" id="" className='m-3 p-1 bg-gray-200 rounded-sm border-none text-indigo-500' /></td>
                <th className='p-2'>Title</th>
                <th className='p-2'>Author</th>
                <th className='p-2'>Date</th>
                <th className='p-2 ml-auto'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                posts?.map(post => {
                  const { title, _id, body, author, date } = post
                  return (
                    <tr key={post._id} className="tracking-wider whitespace-nowrap ">
                      <td> <input type="checkbox" name="" id="" className='m-3 p-1 bg-gray-200 rounded-sm border-none text-indigo-500' /></td>
                      <td className="py-1 px-2">{title.slice(0, 30)}</td>
                      <td className="py-1 px-2">{author}</td>
                      <td className="py-1 px-2"> {moment(date).format("l")} </td>
                      <td className="flex gap-2 py-1 px-2">
                        <Link to={`/dashboard/edit-blog/${_id}`} className="flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded">Edit</Link>
                        <button onClick={() => dispatch(deletePost(_id))} className="flex text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded">Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default PostList