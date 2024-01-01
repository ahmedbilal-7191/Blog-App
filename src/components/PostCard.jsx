import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({$id, title, featuredImage}) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className='bg-purple-100 rounded-xl p-4  border-4 border-blue-600 w-full'>
                <div className='w-full justify-center mb-4'>
                    <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
