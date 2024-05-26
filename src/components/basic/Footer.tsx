import React from 'react'
import { useRecoilValue } from 'recoil'
import { ThemeState } from '@/recoilState'
import DarkFooter from '../Footers/DarkFooter'
import LightFooter from '../Footers/LightFooter'
import PinkFooter from '../Footers/PinkFooter'

export default function Navbar() {
    const theme = useRecoilValue(ThemeState);
    console.log('theme is ', theme);
  return (
    <div>
        {theme === 'dark' && <DarkFooter/>}
        {theme === 'light' && <LightFooter/>}
        {theme === 'pink' && <PinkFooter/>}
    </div>
  )
}
