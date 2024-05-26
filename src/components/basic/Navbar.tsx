import React from 'react'
import { useRecoilValue } from 'recoil'
import { ThemeState } from '@/recoilState'
import DarkNavbar from '../Navbars/DarkNavbar'
import LightNavbar from '../Navbars/LightNavbar'
import PinkNavbar from '../Navbars/PinkNavbar'

export default function Navbar() {
    const theme = useRecoilValue(ThemeState);
    console.log('theme is ', theme);
  return (
    <div>
        {theme === 'dark' && <DarkNavbar/>}
        {theme === 'light' && <LightNavbar/>}
        {theme === 'pink' && <PinkNavbar/>}
    </div>
  )
}
