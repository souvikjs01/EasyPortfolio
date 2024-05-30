import React from 'react'

function Contact() {
  return (
    <div className=' border-nautral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Contact</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4 w-full text-purple-400'>Address:<input type="text" className='mr-2 pl-1 h-8 ml-2 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='xyz street'/></p>
            <p className='my-4 w-full text-purple-400'>Email @:<input type="text" className='mr-2 pl-1 h-8 ml-2 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='xyz@abc.com'/></p>
            <p className='my-4 w-full text-purple-400'>Contact:<input type="text" className='mr-2 pl-1 h-8 ml-2 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='+91XXXXXXXXXX'/></p>
        </div>
    </div>
  )
}

export default Contact