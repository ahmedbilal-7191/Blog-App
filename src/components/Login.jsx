import React from 'react'
import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import authservice from '../appwrite/auth'
import { login as storeLogin } from '../store/authSlice'
import Button from './Button'
import Input from './Input'
import Select from './Select'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import Logo from './Logo'


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    //in handle submit method we give login as argument 
    //data ich rehna naam
    const login = async (data) => {
        setError("")
        try {
            const session = await authservice.login(data)
            if (session) {
                const userData = await authservice.getCUrrentUser()
                if (userData) {
                    dispatch(storeLogin(userData))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }

    }
    return (
        <div
            className='flex items-center justify-center w-full mt-5'
        >
            <div className={`mx-auto w-full max-w-lg mb-5 bg-purple-50 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                {/* handle submit ek method hai i.e keyword so input field ke wahan jo register use karte automatically wahaan ke values ka 
                state manage karne ki zaroorat nahi hai wahaan se apne aap values pick karega aur handle submit hote time sare values lelega */}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        {/* {...register("email",{required:true})} matlab idhar handlesubmit ke andhar inhe login method dera toh data parameter hai uske andhar 
                        apne ku ...spread karke emai aur password automatically dera unhe*/}
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            // final jab object ata data mein spread hoke ata hai
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >Sign in</Button>
                        {/* finally best is input mein joh aya woh register ke through data mein save hua then handle submit mein login method data manga raha woh dedeta */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
