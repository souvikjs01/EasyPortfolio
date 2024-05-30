import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
const Contact = () => {
  return (
    <div className=' flex justify-center items-center flex-col bg-black opacity-80 pb-10'>
      <div>
        <p className=' text-3xl p-6'>Contact</p>
      </div>
      <div>
        <p className=' text-lg'>New-town, kolkata</p>
      </div>
      <div className=' flex text-white flex-wrap text-2xl gap-4 px-4 py-2'>
        <FaGithub/>
        <FaLinkedin/>
        <FaInstagram/>
      </div>
      <div>
        <p className=' underline'>abcd@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact
