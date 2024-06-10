import React from 'react'
import {motion} from 'framer-motion'
import { Email, Mobile, Address} from '@/recoilState'
import { useRecoilState } from 'recoil';
import { fetchCount } from '@/recoilState';
import { useEffect } from 'react';

interface MyComponentProps {
  Address_?: string;
  Mobile_?: string;
  Email_?: string;
}
const Contact : React.FC<MyComponentProps> = ({Address_, Mobile_, Email_}) => {
  const [email, setemail] = useRecoilState(Email);
  const [mobile, setmobile] = useRecoilState(Mobile);
  const [address, setaddress] = useRecoilState(Address);
  const [Count, setCount] = useRecoilState(fetchCount);
  
  useEffect(() => {
    //console.log("faetchcount", Count)
    if(Count<1){
      if(Address_ || Mobile_ || Email_){
        if(Address_) setaddress(Address_);
        if(Mobile_) setmobile(Mobile_);
        if(Email_) setemail(Email_);
        
      }
    }
    

  }, [Address_, Mobile_, Email_]);
  return (
    <div className=' border-nautral-900 pb-20'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y: -100}} transition={{duration:1.5}} className='my-10 text-center text-4xl'>Contact</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='my-4 w-full text-purple-400'>Address:<input value={address} onChange={(e)=>{setaddress(e.target.value)}} type="text" className='mr-2 pl-1 h-8 ml-2 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='xyz street'/></motion.p>
            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1.5}} className='my-4 w-full text-purple-400'>Email @:<input value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" className='mr-2 pl-1 h-8 ml-2 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='xyz@abc.com'/></motion.p>
            <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:2}} className='my-4 w-full text-purple-400'>Contact:<input value={mobile} onChange={(e)=>{setmobile(e.target.value)}} type="text" className='mr-2 pl-1 h-8 ml-2 outline outline-blue-500 outline-1 rounded-lg text-neutral-400 bg-transparent' placeholder='+91XXXXXXXXXX'/></motion.p>
        </div>
    </div>
  )
}

export default Contact