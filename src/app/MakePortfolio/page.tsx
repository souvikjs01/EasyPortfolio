"use client"
import DarkFooter from '@/components/Footers/DarkFooter'
import React from 'react'
import ThemeSelectButton from '@/components/basic/ThemeSelectButton'
import { RecoilRoot } from 'recoil'
import DescriptionSection from '@/components/basic/DescriptionSection'
import Navbar from '@/components/basic/Navbar'
import Footer from '@/components/basic/Footer'
const page = () => {
  

  return (
    
    <div>
      
      <RecoilRoot>
      <Navbar/>
      
      
      
      <DescriptionSection/>
      <Footer/>
      
      </RecoilRoot>
    </div>
    
  )
}

export default page
