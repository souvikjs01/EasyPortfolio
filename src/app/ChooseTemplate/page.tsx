"use client"
import React from 'react'
import { RecoilRoot } from 'recoil'
import HomeMain from './main'
export default function page() {
  return (
    <RecoilRoot>
        <HomeMain />
    </RecoilRoot>
  )
}
