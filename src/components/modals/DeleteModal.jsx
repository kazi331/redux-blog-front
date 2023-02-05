import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from '../../redux/thunk/managePost';

const DeleteModal = ({ id, setShowModal }) => {
    const dispatch = useDispatch();

    return (
        <div className='flex w-full min-h-screen backdrop-blur-sm fixed top-0 left-0 items-center justify-center'>
            {/* Modal Body  */}
            <div className='w-full max-w-lg flex items-center justify-center text-gray-800 bg-gray-200  p-4 rounded-lg'>
                {/* Modal Content  */}
                <div className='w-full text-center flex gap-2 flex-col'>
                    <h2 className='font-bold text-xl'> Are you sure to do this action? </h2>
                    <p> You cannot undo this action </p>
                    <div className='flex gap-2 ml-auto'>
                        <button onClick={() => {
                            dispatch(deletePost(id))
                            setShowModal(false)
                        }} className="flex text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded">Confirm</button>
                        <button onClick={() => setShowModal(false)} className="flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal