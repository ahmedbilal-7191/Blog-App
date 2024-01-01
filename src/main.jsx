// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

import store from './store/store.js'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import React from 'react'


import AuthLayout from '../src/components/AuthLayout.jsx'
import Login from './components/Login.jsx'

import AddPost from './pages/AddPost.jsx'
import SignupPage from './pages/SignupPage.jsx'
import Editpost from './pages/Editpost.jsx'
import Post from './pages/Post.jsx'
import Allpost from './pages/Allpost.jsx'
import Home from './pages/Home.jsx'





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignupPage />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Allpost />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Editpost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
