import React from 'react'
import { useAuth } from '../context/Authprovider'
import { toast } from 'react-hot-toast'

const Logout = () => {
    const [authuser,setauthuser]=useAuth()
    const handleLogout=()=>{
        try {
            setauthuser(
               { ...authuser,
                user:null}
            )
            localStorage.removeItem("Users")
            toast.success("Logged out Successfully")
            setTimeout(() => {
                window.location.reload()
              }, 3000);
        } catch (error) {
            toast.error("Err: "+error.message)
            setTimeout(() => {
                
            }, 3000);
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout