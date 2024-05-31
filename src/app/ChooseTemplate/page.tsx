"use client"
import Image from "next/image";
import { RecoilRoot } from "recoil";
import EasyPortfolioNavbar from '@/components/basic/EasyPortfolioNavbar';
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/components/basic/hooks/useIntersectionObserver';

const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay },
    }
});

const Home: React.FC = () => {
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <RecoilRoot>
            <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
                <div className="fixed top-0 -z-10 h-full w-full">
                    <div className="relative h-full w-full bg-slate-950">
                        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                    </div>
                </div>
                <EasyPortfolioNavbar />
                <div className="container mx-auto mt-20 h-screen px-6 w-full flex flex-col gap-6 items-center">
                    <p className="lg:text-xl text-xl">Choose template</p>
                    {/* <button value=s1><home/></button>
                    <button value=s2><home2/></button> */}
                    <a href="/MakePortfolio">Classic Animation Template</a>
                    <a href="/MakePortfolio2">Glint Animation Template</a>
                </div>
            </div>
        </RecoilRoot>
    );
}

export default Home;
