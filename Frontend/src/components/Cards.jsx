import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-3 ml-8 p-5 my-4'>
    <div className="card w-80 bg-base-200 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline cursor-pointer hover:bg-pink-600 text-white p-3">${item.price}</div> 
      <div className="badge badge-outline cursor-pointer hover:bg-pink-600 text-white p-3">Buy Now</div>
    </div>
  </div>
  </div>
</div>
</>
  )
}

export default Cards
