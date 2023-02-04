import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddBlog from './components/AddBlog';

import EditBlog from './components/EditBlog';
import Main from './components/Main';
import PostList from './components/PostList';
import Bookmark from './pages/Bookmark';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import PostView from './pages/PostView';
import Reading from './pages/Reading';
import { LOAD_ALL_POST } from './redux/actions/actionsTypes';



const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/", element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: '/readings', element: <Reading /> },
        { path: '/bookmark', element: <Bookmark /> },
        { path: '/post/:id', element: <PostView /> },
      ],
    },
    {
      path: "/dashboard", element: <Dashboard />,
      children: [
        { path: '/dashboard/add-blog', element: <AddBlog /> },
        { path: '/dashboard/edit-blog', element: <EditBlog /> },
        { path: '/dashboard', element: <PostList /> },
      ]
    },
  ]);

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/posts')
      const data = await res.json();
      if (data) {
        dispatch({ type: LOAD_ALL_POST, payload: data })
      }
    }
    fetchData();
  }, [])

  return (
    <RouterProvider router={routes} />
    )
}

export default App