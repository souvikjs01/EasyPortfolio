import { Button } from '@/components/ui/moving-border'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <div className=' flex items-center'>
            <h1 className=" font-serif text-2xl sm:text-3xl">Portfolio.</h1>
        </div>
        <ul className="flex items-center">      
        
            <li>
                <Button borderRadius='1.75rem'>
                    Resume
                </Button>
            </li>
        </ul>
    </nav>
   
  )
}

export default Navbar;