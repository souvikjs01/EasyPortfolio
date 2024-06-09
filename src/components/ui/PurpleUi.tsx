import Link from 'next/link'
import React from 'react'

const PurpleUi = () => {
  return (
    <div className=' min-w-screen flex flex-col bg-gray-950'>
      <div className='flex flex-wrap justify-between py-8 px-20'>
        <div>
          <Link href='#' className='text-white hover:text-gray-500 transition-all duration-300 font-light'>
            Thene
          </Link>
        </div>
        <div>
          <ul className='flex flex-row gap-x-6 text-white'>
            <li>
              <Link href='#' className='hover:text-gray-500 transition-all duration-300'>Fne</Link>
            </li>
            <li>
              <Link href='#' className='hover:text-gray-500 transition-all duration-300'>
                Cod
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:text-gray-500 transition-all duration-300'>
                Oss
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='max-w-md mx-auto'>
        <div className='py-10 px-6 sm:px-0'>
          <h1 className='text-white text-4xl text-center py-2 font-semibold'>
            Theme Options
          </h1>
          <p className='text-gray-500'>
            Lorem ipsum adipisicing elit. Mollitia libero nulla necessitatibus eligendi assumenda quo voluptatum velit eos fugiat totam.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-2'>
        <div className='rounded-lg p-1 m-1 lg:w-1/3 h-80 w-full max-w-80'>
          <div>
            <div className='w-52 h-52 rounded-full bg-green-400 flex justify-center items-center'>
              <img src="https://i.pinimg.com/474x/fa/dd/96/fadd96a65f56a97936bcb5b690086e63.jpg" alt="img" className='h-52 w-52 rounded-full'/>
            </div>
          </div>
          <div className='text-white text-xl pl-2 pr-6 mt-6 opacity-95'>
            <p>
              Energatic Color <br />Elleentic
            </p>
          </div>
          <div className='mt-2 text-sm text-gray-500 w-full'>
            <p>
              Lorem ipsum dolor sit amet, loremn thgrfs yhuaf ghyui consequtive dribe frst consectetur adipisicing elit. Eius sunt voluptatem eveniet iusto impedit repudiandae repellendus voluptatum aliquid quo provident.
            </p>
          </div>
          <div className='mt-4 pl-2'>
            <button className='bg-red-300 px-4 py-2 font-medium text-black rounded hover:bg-red-400 hover:text-gray-800 transition-all duration-200'>Aneows</button>
          </div>
        </div>

        <div className='rounded-lg p-1 lg:w-1/3 h-80 w-full max-w-80'>
          <div>
            <div className='w-52 h-52 rounded-full bg-orange-400 flex justify-center items-center'>
              <img src="https://i.pinimg.com/474x/b6/7f/37/b67f3797e1d94237a2882946d9499df4.jpg" alt="img" className='h-52 w-52 rounded-full' />
            </div>
          </div>
          <div className='text-white text-xl pl-2 pr-6 mt-6 opacity-95'>
            <p>
              Energatic Color <br />Elleentic
            </p>
          </div>
          <div className='mt-2 text-sm text-gray-500 w-full'>
            <p>
              Lorem ipsum dolor sit amet, loremn thgrfs yhuaf ghyui consequtive dribe frst consectetur adipisicing elit. Eius sunt voluptatem eveniet iusto impedit repudiandae repellendus voluptatum aliquid quo provident.
            </p>
          </div>
          <div className='mt-4 pl-2'>
            <button className='bg-orange-300 px-4 py-2 font-medium text-black rounded hover:bg-orange-400 hover:text-gray-800 transition-all duration-200'>Aneows</button>
          </div>
        </div>

        <div className='rounded-lg p-1 lg:w-1/3 h-80 w-full max-w-80'>
          <div>
            <div className='w-52 h-52 rounded-full bg-red-400 flex justify-center items-center'>
              <img src="https://i.pinimg.com/564x/7d/6e/35/7d6e35d62a95ff2b7790df673845576c.jpg" alt="img" className='w-52 h-52 rounded-full' />
            </div>
          </div>
          <div className='text-white text-xl pl-2 pr-6 mt-6 opacity-95'>
            <p>
              Energatic Color <br />Elleentic
            </p>
          </div>
          <div className='mt-2 text-sm text-gray-500 w-full'>
            <p>
              Lorem ipsum dolor sit amet, loremn thgrfs yhuaf ghyui consequtive dribe frst consectetur adipisicing elit. Eius sunt voluptatem eveniet iusto impedit repudiandae repellendus voluptatum aliquid quo provident.
            </p>
          </div>
          <div className='mt-4 pl-2'>
            <button className='bg-blue-300 px-4 py-2 font-medium text-black rounded hover:bg-blue-400 hover:text-gray-800 transition-all duration-200'>Aneows</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurpleUi
