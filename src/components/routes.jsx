import {createBrowserRouter} from "react-router-dom";
import Bookmark from "../pages/Bookmark";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import PostView from "../pages/PostView";
import Reading from "../pages/Reading";
import AddBlog from "./dashboard/AddBlog";
import EditBlog from "./dashboard/EditBlog";
import Main from "./Main";
import PostList from "./dashboard/PostList";


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
        { path: '/dashboard/edit-blog/:id', element: <EditBlog /> },
        { path: '/dashboard', element: <PostList /> },
      ]
    },
  ]);

  export default routes;