import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'
import { useNavigate } from 'react-router-dom'
import landimg from '../components/blog-side.png'
// import left1 from '../components/landingimage/left1.png'
// import leftt1 from '../components/landingimage/leftt1.png'
// import maining from '../components/landingimage/main.png'
// import right1 from '../components/landingimage/right1.png'
// import right2 from '../components/landingimage/right2.png'
// import right3 from '../components/landingimage/right3.png'

const Home = () => {
    const [posts, setPosts] = useState([])
    // const navigate = useNavigate()

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 my-12  text-center">
                <Container>
                    <div className="flex flex-wrap ">
                     
                        <div className='w-full my-10 flex flex-col '>
                            <h1 className=' text-6xl mx-auto my-2'>Publish your passions, your way</h1>
                            <p className=' text-3xl mx-auto my-2'>Create a unique and beautiful blog easily.</p>
                            {/* onClick={()=>navigate("/login")} */}
                            <button  className='bg-indigo-500 mx-auto my-2 p-3 rounded hover:bg-white'>Create your blog</button>
                        </div>
                        {/* <div className='flex w-full border-4 border-indigo-600'>
                            <img className='w-50' src={left1} width={30} height={40} alt='xyz' />
                            <img src={leftt1} width={100}  alt='xyz' />
                            <img src={maining}  width={800} alt='xyz' />
                            <img src={right1} width={100}  alt='xyz' />
                            <img src={right2} width={100}  alt='xyz' />
                            <img src={right3} width={100}  alt='xyz' />
                        </div> */}

                

                        <div className="p-2 w-6/5   mx-auto sm:w-1/2  ">

                            <h1 className='text-5xl  font-bold text-left'>
                                Create a blog.
                            </h1>
                            <p className='my-2 text-left '>
                                Share your story with the world.
                                Stand out with a professionally-designed
                                blog website that can be customized to fit your brand.
                                Build, manage, and promote your blog with Squarespace’s
                                built-in suite of design and marketing tools.
                            </p>
                            {/* onClick={() => navigate("/login")} */}
                            <h1 className="text-2xl font-bold hover:text-gray-500 sm:text-left" >
                                Login to read posts
                            </h1>
                        </div>

                        <div className='sm:w-1/2 '>
                            <img width={700} height={300} src={landimg} alt='landimg'/>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
