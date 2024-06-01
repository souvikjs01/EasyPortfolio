"use client"
import React from 'react'
import Home1 from '@/components/Template1Form/Home1'
import Home2 from '@/components/Template2Form/Home2'
import { RecoilRoot } from 'recoil'
export default function TemplateHomeGlobal({template}:any) {
  return (
    <RecoilRoot>
    <div>
        {template === '1' && <Home1 />}
        {template === '2' && <Home2 />}
    </div>
    </RecoilRoot>
  )
}
