import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
//import {FaLinkedIn} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <p className='text-pink-500 text-3xl'>Portfolio.</p>
        </div>
        <div className="m-4 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar;