import React from 'react'
import { useState, useEffect } from 'react'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'
import service from '../appwrite/config'
const Allpost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => { 

    }, [])
    service.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
            // console.log(posts)
        }
    })

    return (
        <div className='w-full py-8 border-4 border-blue-600'>
            <Container>
                <div className='flex flex-wrap border-4 border-red-600'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/2 border-4 border-yellow-600'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Allpost
