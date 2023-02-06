import React from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/thunk/managePost';

const AddBlog = () => {
  const dispatch = useDispatch();
  const handleSubmit = async e => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.content.value;
    const author = e.target.author.value;
    // create an array of tags from the checked checkboxes
    const tags = Array.from(e.target.elements).filter(el => el.checked).map(el => el.name)
    const post = { title, author, body, tags }

    // send the post to the server
    const data = await dispatch(createPost(post))
    if (data.success) {
      // clear the form
      e.target.reset();
    }

  }
  return (
    <section className="text-gray-200 body-font relative ">
      <div className="container py-24">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className='text-xl mb-2 text-gray-400'>Add New Post</h1>
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-wrap -m-2 flex-col xl:flex-row">
            {/* title  */}
            <div className="p-2 w-full xl:w-1/2">
              <div className="relative">
                <label htmlFor="title" className="leading-7 text-sm text-gray-600">Post Title</label>
                <input type="text" id="title" name="title" className="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-800 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            {/* Author  */}
            <div className="p-2 w-full xl:w-1/2">
              <div className="relative">
                <label htmlFor="author" className="leading-7 text-sm text-gray-600">Author</label>
                <input type="text" id="author" name="author" className="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-800 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            {/* tags  */}
            <div className="p-2 w-full xl:w-1/2">
              <label htmlFor="tags" className="leading-7 text-sm text-gray-600">Tags</label>
              <div className="flex flex-wrap items-center gap-3 bg-gray-700 bg-opacity-50 rounded border-2 border-gray-600 py-2 px-3 text-gray-300 text-sm ">
                <label htmlFor="javascript">
                  <input type="checkbox" className='bg-gray-200 rounded-sm border-none text-indigo-500 mr-2' name="javascript" id="javascript" />
                  JavaScript
                </label>
                <label htmlFor="react">
                  <input type="checkbox" className='bg-gray-200 rounded-sm border-none text-indigo-500 mr-2' name="react" id="react" />
                  ReactJS
                </label>
                <label htmlFor="redux">
                  <input type="checkbox" className='bg-gray-200 rounded-sm border-none text-indigo-500 mr-2' name="redux" id="redux" />
                  Redux
                </label>
                <label htmlFor="next">
                  <input type="checkbox" className='bg-gray-200 rounded-sm border-none text-indigo-500 mr-2' name="next" id="next" />
                  NextJS
                </label>
                <label htmlFor="node">
                  <input type="checkbox" className='bg-gray-200 rounded-sm border-none text-indigo-500 mr-2' name="node" id="node" />
                  NodeJS
                </label>
              </div>
            </div>
            {/* post content  */}
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="content" className="leading-7 text-sm text-gray-600">Post Content</label>
                <textarea id="content" name="content" className="w-full bg-gray-700 bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-700 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Publish Post</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddBlog;

// make a checkbox button component with tailwindcss
