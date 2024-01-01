import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCUrrentUser().then((userdata) => {
      if (userdata) {
        dispatch(login(userdata))
      }
      else dispatch(logout())//it will write tou are logout only it will run the func
    }).finally(() => setLoading(false))
  }, [])

  return (
    <>
      {!loading ? (<div className='min-h-screen w-full   bg-gradient-to-r from-violet-500 to-fuchsia-500" '>

        <div className='w-full'>

          <Header />
          <main>

            <Outlet />
          </main>
          <Footer />

        </div>

      </div>) : null}

    </>
  )
}

export default App
