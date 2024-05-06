import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider'



const App = () => {
  const [authuser,setauthuser]=useAuth()
  console.log(authuser);
  return (
    <>
    <div className='dark:bg-slate-900 text-white'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={authuser?<Courses/>:<Navigate to="/signup"/>}/>
    <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App
