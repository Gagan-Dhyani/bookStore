import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Login = () => {
    const {
        register,
        handleSubmit,   
        formState: { errors },
      } = useForm()
const onSubmit =async (data) => {
  console.log("HEllp",data);
  const userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password

  }
  await axios.post("http://localhost:3000/user/login",userInfo)
  .then((res)=>{
    console.log("ok",res.data);
    if(res.data){
      toast.success('Login Successful!');
      setTimeout(() => {
        document.getElementById("my_modal_3").close();
        window.location.reload()
        localStorage.setItem("Users",JSON.stringify(res.data.User))
      }, 3000);
    }
  })
  .catch((err)=>{
    if(err.response){
      console.log(err);
      toast.error('Invalid credentials!');
      setTimeout(() => {
        
      }, 3000);
    }
  })
}
    
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Login</h3>
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
        <button className='bg-pink-600 text-white px-3 py-1 rounded-md'>Login</button>
        <p>Not registered? <Link to="/signup" className='text-blue-600 underline cursor-pointer'>Signup</Link></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
