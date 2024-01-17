"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

const submitHandler = (e) =>{
e.preventDefault()
setMainTask([...mainTask, {title, desc}]);
settitle("")
setdesc("")
}

const deleteHandler = (i) =>{
let copytask = [...mainTask]
copytask.splice(i,1)
setMainTask(copytask)
}

let renderTask = <h2>No Task Available</h2>

if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return (
    <li key={i} className='flex items-center justify-between mb-4'>
    <div className='flex items-center justify-between w-1/2'>
      <h5 className='text-xl font-medium'>{t.title}</h5>
      <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-400 text-white px-4 py-2 rounded font-medium'>Delete</button>
    </li>
    );
    })
}

  return (
   <>
   <h1 className='bg-rose-400 text-white text-5xl p-5 font-medium text-center font-sans'>
    GET TO WORK!
    </h1>
    <h1 className='bg-rose-400 text-white text-base pt-0 pb-3 font-medium text-center font-sans'>
    An Animated React List Made With React Hooks
    </h1>
   <hr />
   <h1 className='bg-rose-400 text-white font-semibold pt-3 px-7 text-2xl'>NEW TODO</h1>
   <div className='h-screen bg-rose-400'>
   <form onSubmit={submitHandler}>
    <input type='text' className= 'text-xl border-none px-4 py-2 m-8 font-sans' 
    placeholder='Enter tasks here'
    value={title}
    onChange={(e) =>{
      settitle(e.target.value)
    }}
    />
    <input type='text' className='text-xl border-none px-4 py-2 m-8 font-sans' 
    placeholder='Enter Descripition here'
    value={desc}
    onChange={(e) =>{
      setdesc(e.target.value)
    }}
    />
    <button className='bg-rose-300 text-white px-4 py-2 text-xl font-sans font-semibold border-none rounded m-4'>Add tasks</button>
   </form>
   
   <hr />
  <div className='p-8 bg-rose-300 text-white font-semibold m-4'>
    <ul>
      {renderTask}
    </ul>
  </div>
  </div>
   </>
   
  )
}


export default page
// bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500