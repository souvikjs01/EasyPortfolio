import React from 'react'

export default function Cross() {
  return (
    <div>
        <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer"/>
        <div className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 w-6 h-6  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-4 after:w-4 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0">
        </div>
        </label>
    </div>
  )
}
