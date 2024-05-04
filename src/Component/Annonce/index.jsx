import React from 'react'
import { Link } from 'react-router-dom'
import i1 from '../../images/2011_Alfa_Romeo_Giulietta_Veloce_JTDm-2_2.0_Front.jpg'
const Annonce = () => {
  return (
    <>
        <Link to={'/troc'} className='shadow-lg relative w-full gap-2 mb-2  flex  '>
<div className='relative'>
<img src={i1} alt='' className='w-[220px] h-[120px] object-cover'/>
 <span className='absolute top-1 left-1 h-[30px] border-1  border-white w-[30px] flex items-center justify-center bg-[#1c5c89] text-white'>4</span>
</div>
<div className='flex flex-col w-full gap-1'>
<div className='flex flex-col gap-1  md:justify-between w-full '>
<span className='text-[#1c5c89] text-xs md:text-sm font-light mb-0'><span className='text-lg text-[#ff66009a] mb-0 font-bold'>New !</span> &nbsp; Alfa Romeo Trés bonne etat - <span className='font-light text-slate-400 text-sm'>115000Km</span></span>
<span className='text-[#ff4400e9] md:hidden  mb-0  font-semibold'>25&nbsp; 000 TND </span>
</div>
<span className='text-xs font-normal text-slate-400'>VEHICULES &nbsp; /&nbsp; voitures</span>
<span className='text-xs font-normal text-slate-400'>Annonces de &nbsp;05/04/2025</span>
</div>
<span className='text-[#ff4400e9] hidden md:block absolute right-0 top-0  mb-0  font-semibold'>25&nbsp; 000 TND </span>
</Link>
    </>
  )
}

export default Annonce