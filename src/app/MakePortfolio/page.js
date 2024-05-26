import React from 'react'
import DarkThemeNavbar from '@/components/Navbars/LightThemeNavbar';
import LightThemeNavbar from '@/components/Navbars/DarkThemeNavbar';
import DarkThemeFooter from '@/components/Footers/DarkThemeFooter';

export default function page() {
  return (
    <div>
        <LightThemeNavbar/>
        
        <DarkThemeFooter/>
    </div>
  )
}
