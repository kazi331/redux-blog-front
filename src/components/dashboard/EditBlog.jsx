import React from 'react'
import { useParams } from 'react-router-dom';

const EditBlog = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div>EditBlog</div>
  )
}

export default EditBlog