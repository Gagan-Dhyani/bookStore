import React from 'react'
import axios from "axios"
import Cards from './Cards'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { getbook } from '../../../Backend/controller/book.controller'

const Course = () => {
  const [book, setbook] = useState([])
  useEffect(() => {
    const getBook=async()=>{
      try {
        const res = await axios.get("http://localhost:3000/book")
        console.log(res.data);
        setbook(res.data)
      } catch (error) {
        console.log("ERR:",error);
      }
    }
    getBook()
  }, [])
  
  return (
  <>
  <div className='`max-w-screen-2xl container mx-auto md:px-20 px-4'>
  <div className='mt-20 items-center justify-center text-center'>
    <h1 className='text-2xl font-normal md:text-4xl'>We're Delighted to have <span className='text-pink-600'>you here!</span></h1>
    <p className='mt-10 font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, accusamus blanditiis. Eos id porro labore, explicabo, natus aliquid at cumque placeat quia corporis numquam corrupti laudantium non animi. Alias, ad.</p>
    
    <Link to="/">
    <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-8'>Back</button>
    </Link>
  </div>
  <div className='mt-10 grid grid-cols-1 md:grid-cols-3'>
    {
      book.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))
    }
  </div>
  </div>
  </>
  )
}

export default Course
