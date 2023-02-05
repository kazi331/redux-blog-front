import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './components/routes';
import { LOAD_ALL_POST } from './redux/actions/actionsTypes';



const App = () => {

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