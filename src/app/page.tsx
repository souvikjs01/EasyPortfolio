"use client"
import Image from "next/image";
import { RecoilRoot } from "recoil";
import EasyPortfolioNavbar from '@/components/basic/EasyPortfolioNavbar';
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

export default function Home() {
  return (
    <RecoilRoot>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
        </div>
        
         {/* Added padding to ensure content is below the navbar */}
          <EasyPortfolioNavbar/>
        
        
        <div className="container mx-auto h-screen px-8 lg:w-[820px] w-full flex flex-col gap-6 items-center justify-center">
          <p className="lg:text-6xl text-4xl">Make your <span className="text-pink-500">Portfolio</span> with us...</p>
          <p className="text-neutral-300 max-w-120">Ready to use Portfolio templates for free. Already having lots of projects? Don't have an idea how to showcase them? We got you. <span className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">You don't need to code for hours now...</span></p>
          <div className="flex flex-row flex-wrap">
            <Link href="/ChooseTemplate" passHref>
              <button className="bg-gray-100 text-purple-900 m-3 p-3 rounded text-bolder flex flex-row hover:bg-purple-900 hover:text-white min-w-[170px]"><div>Create Portfolio </div><div className="m-1 hover:text-white"><FaArrowRight /></div></button>
            </Link>
            <button className="bg-gray-900 text-white m-3 p-3 rounded text-bold flex flex-row hover:bg-black hover:text-white min-w-[170px]"><div>Visit Portfolios </div><div className="m-1 hover:text-white"><FaArrowRight /></div></button></div>
        </div>
      </div>
    </RecoilRoot>
  );
}
