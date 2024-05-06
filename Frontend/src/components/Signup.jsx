import React from 'react'
import { Link, Navigate, json, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from 'react-hot-toast'

const Signup = () => {
  const location=useLocation()
  const from=location.state?.from?.pathname || "/"
  const Navigate=useNavigate()
    const {
        register,
        handleSubmit,   
        formState: { errors },
      } = useForm()
const onSubmit = async(data) => {
  console.log("HEllp",data);
  const userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password

  }
  await axios.post("http://localhost:3000/user/signup",userInfo)
  .then((res)=>{
    console.log("ok",res.data);
    if(res.data){
      toast.success('Signup Successful!, you are now loggged in');
      setTimeout(() => {
        Navigate(from,{replace:true})
        window.location.reload()
      }, 2000);
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user))
  })
  .catch((err)=>{
    if(err.response){
      console.log(err);
      toast.error('ERR:',err.response.data.message);

    }
  })
}
  return (
    <div className='flex justify-center items-center h-screen' >
      <div  className="w-96 ">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">SignUp</h3>
    <div>
        <div className='font-normal mt-2 '>Name</div>
        <input  {...register("fullname", { required: true })} className='w-80 px-4 mt-2 font-normal border border-rounded rounded-md outline-none' type="name" placeholder='Enter your Full Name' />
        {errors.fullname && <div className='text-sm text-red-700'>This field is required</div>}
    </div>
    <div>
        <div className='font-normal mt-2 '>Email</div>
        <input {...register("email", { required: true })} className='w-80 px-4 mt-2 font-normal border border-rounded rounded-md outline-none' type="email" placeholder='Enter your Email' />
        {errors.email && <div className='text-sm text-red-700'>This field is required</div>}
    </div>
    <div>
        <div className='font-normal mt-2 '>Password</div>
        <input {...register("password", { required: true })} className='w-80 px-4 mt-2 font-normal border border-rounded rounded-md outline-none' type="password" placeholder='Enter your password' />
        {errors.password && <div className='text-sm text-red-700'>This field is required</div>}
    </div>

    <div className='flex justify-around mt-6 font-normal'>
        <button className='bg-pink-600 text-white px-3 py-1 rounded-md'>SignUp</button>
        <p>Already a user? <button className='text-blue-600 underline cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login Here</button>
        {" "}<Login/>
        </p>
    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Signup
