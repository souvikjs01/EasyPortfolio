import React from 'react'
interface MyComponentProps {
  Address?: string;
  Mobile?: string;
  Email?: string;
}
const Contact : React.FC<MyComponentProps> = ({Address, Mobile, Email}) => {
  return (
    <div className=' pb-20'>
        <h1 className='my-10 text-center text-4xl'>Contact</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{Address}</p>
            <p className='my-4'>{Mobile}</p>
            <a href="#" className='border-b'>{Email}</a>
        </div>
    </div>
  )
}

export default Contact