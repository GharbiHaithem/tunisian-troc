import React from 'react'
import { GoArrowSwitch } from "react-icons/go";
const MyTrocs = () => {
  return (
    <div className='md:w-[80%] bg-white h-[max-content] mx-auto w-full p-2'>
        <div className='flex gap-1 text-lg font-bold py-2 text-[#1c5c89]'>
        <GoArrowSwitch />  <h5>Vos trocs</h5>
        </div>
    </div>
  )
}

export default MyTrocs