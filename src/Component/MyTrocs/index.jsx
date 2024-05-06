import React from 'react'
import { GoArrowSwitch } from "react-icons/go";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import i1 from '../../images/echange.png'
const MyTrocs = () => {
  return (
    <div className='md:w-[80%] bg-white h-[max-content] mx-auto w-full p-4'>
        <div className='flex gap-1 text-lg font-bold py-2 text-[#1c5c89]'>
        <GoArrowSwitch />  <h5>Vos trocs</h5>
        </div>
        <div className='flex md:flex-row md:w-[90%] w-full md:mx-auto md:justify-between flex-wrap gap-1 md:px-5 mt-2'>
               <button className='md:w-[20%]  w-[calc(50%-4px)] p-3 border-1 border-[#1c5c89]  bg-[#1c5c89] text-white flex flex-col justify-center items-center gap-2'><IoMdArrowDropdownCircle  className='font-bold text-2xl'/><span>Troc reçus</span></button>
               <button className='md:w-[20%] w-[calc(50%-4px)] p-3 border-1 border-[#1c5c89] text-[#1c5c89] bg-white flex flex-col justify-center items-center gap-2'><IoMdArrowDropupCircle  className='font-bold text-2xl'/><span>Troc envoyés</span></button>
               <button className='md:w-[20%] w-[calc(50%-4px)] p-3 border-1 border-[#1c5c89] text-[#1c5c89]  bg-white flex flex-col justify-center items-center gap-2'><BiLike  className='font-bold text-2xl'/><span>Troc terminés</span></button>
               <button className='md:w-[20%] w-[calc(50%-4px)] p-3 border-1 border-[#1c5c89] text-[#1c5c89] bg-white flex flex-col justify-center items-center gap-2'><MdDeleteForever  className='font-bold text-2xl'/><span>Troc annulés</span></button>
             
        </div>
      <div className='md:w-[90%] w-full mx-auto md:px-5 mt-3'>    <span className='mt-2'>1 Troc reçu</span> 
      <h6 className='mt-3 '>Le 06/05/2024,<span className='text-sm font-bold'> gharbouch</span> vous propose</h6>
    <div className='flex md:flex-row  mt-2 md:justify-between flex-col gap-2 '>
    <div className='h-[160px] md:w-[40%] w-full p-3 z-40 relative flex justify-center rounded-lg gap-3  bg-[#fff2ef]'>
    <p className='text-lg font-light'>Sélectionnez une/des annonces dans votre magasin. <span  className='underline font-medium'>Cliquez ici</span></p>
    
  </div>
 <div className='md:flex   md:items-center w-[40px]  block mx-auto md:justify-center'>
 <img className='w-[30px] h-[30px]' src={i1} />
 </div>
  <div className='h-[160px]  md:w-[40%] w-full p-3 z-40 relative flex justify-center rounded-lg gap-3 l bg-[#f2f5fe]'>
    <p className='text-lg font-light'>Sélectionnez une/des annonces dans votre magasin. <span   className='underline font-medium'>Cliquez ici</span></p>
    
  </div>
  <div className='md:w-[9%] w-full flex flex-col gap-1 justify-center'>
    <button className='border-1 bg-green-200 border-[-green-500] p-2 text-green-700 text-xs'>Accepté</button>
    <button className='border-1 bg-red-200 border-[red-400] p-2  text-red-700 text-xs'>Refusé</button>
    <button className='border-1 bg-blue-200 border-[-blue-600] p-2  text-blue-600 text-xs'>En discuté</button>
    <span className='text-center'>Troc Non lu</span>
  </div>
    </div>
       </div>
    </div> 
  )
}

export default MyTrocs