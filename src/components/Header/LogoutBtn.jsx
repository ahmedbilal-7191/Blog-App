import React from 'react'
import authservice from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'


const LogoutBtn = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = () => {
    //logout ek promise deta toh we are using .then
    authservice.logout().then(() => dispatch(logout()))
    // navigate("/login") isse error aya apne ku nai aya yaro

  }
  return (
    <div>
      <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default LogoutBtn
