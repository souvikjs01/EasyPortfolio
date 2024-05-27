import React from 'react'
// import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
// import { FaArrowRight } from "react-icons/fa6";

export default function EasyPortfolioNavbar() {
  return (
    <div>
      <nav className="fixed w-full p-5 top-0 flex items-center justify-between shadow-md z-10">
        <div className="flex flex-shrink-0 items-center">
          <p className='text-pink-500 text-3xl'>EasyPortfolios</p>
        </div>
        <div className="m-4 flex items-center justify-center gap-4 text-2xl">
          <FaGithub />
          <FaInstagram />
        </div>
      </nav>
    </div>
  )
}
