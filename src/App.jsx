import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import routes from './components/routes';
import { loadAllPost } from './redux/thunk/managePost';



const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadAllPost())
  }, [])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
