"use client"
import DarkFooter from '@/components/Footers/DarkFooter'
import React from 'react'
import ThemeSelectButton from '@/components/basic/ThemeSelectButton'
import { RecoilRoot } from 'recoil'
import DescriptionSection from '@/components/basic/DescriptionSection'
import Navbar from '@/components/basic/Navbar'

const page = () => {
  

  return (
    
    <div>
      
      <RecoilRoot>
      <Navbar/>
      
      <ThemeSelectButton/>
      <p>The editor</p>
      <DescriptionSection/>
      {/* <p>{description!}</p> */}
      {/* <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/> <button>Add Description</button> */}
      <DarkFooter/>
      </RecoilRoot>
    </div>
    
  )
}

export default page
