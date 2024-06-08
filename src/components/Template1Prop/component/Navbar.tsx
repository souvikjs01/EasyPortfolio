import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import Link from 'next/link'
//import {FaLinkedIn} from 'react-icons/fa'
interface NavStruct {
  link?: string;
  name?: string;
  icon?: any;
}
interface HomePageStruct {
  NavGithub_?: NavStruct;
  NavLinkedIn_?: NavStruct;
  NavInsta_?: NavStruct;
}

const Navbar:React.FC <HomePageStruct> = ({NavGithub_, NavLinkedIn_, NavInsta_}) => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <p className='text-pink-500 text-3xl'>Portfolio.</p>
        </div>
        <div className="m-4 flex items-center justify-center gap-4 text-2xl">
            {NavGithub_ &&  NavGithub_.link && <Link href={NavGithub_.link}><FaGithub/></Link>}
            {NavLinkedIn_ && NavLinkedIn_.link && <Link href={NavLinkedIn_.link}><FaLinkedin/></Link>}
            {NavInsta_ && NavInsta_.link && <Link href={NavInsta_.link}><FaInstagram/></Link>}
            
        </div>
    </nav>
  )
}

export default Navbar;