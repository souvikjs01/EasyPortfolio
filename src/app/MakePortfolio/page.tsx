"use client"
import React from 'react'
import { RecoilRoot } from 'recoil'
import DescriptionSection from '@/components/basic/DescriptionSection'
import Navbar from '@/components/basic/Navbar'
import Footer from '@/components/basic/Footer'
import Home from '@/components/Template1/Home'
import Home2 from '@/components/Template2/Home2'
const page = () => {
  return (
    <div>
      {/* <RecoilRoot>
      <Navbar/>
      <DescriptionSection/>
      <Footer/>
      </RecoilRoot> */}
      {/* <Home/> */}
      <Home2/>
    </div>
    
  )
}

export default page
