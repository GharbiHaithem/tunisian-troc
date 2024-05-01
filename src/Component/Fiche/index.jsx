import React from 'react'
import './style.css'
import ReactStars from "react-rating-stars-component";
import { BsEnvelopeFill } from "react-icons/bs";
const Fiche = () => {
  return (
    <div className='h-[100vh] md:w-[80%] w-[90%] mx-auto'>
        <div className=' flex mt-5 '>
       <div className='flex flex-col gap-3 w-full md:w-[30%]'>
       <div className='bg-slate-300 h-[max-content] rounded-lg p-3'>
            <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
                    <h4 className='text-[#ff66009a] font-bold text-lg'>Gharbouch</h4>
                    <ReactStars
    count={3}
   edit={false}
    size={24}
    activeColor="#ffd700"
    value={1}
  />
                </div>
                <div className='flex justify-center items-center'><span className='flex justify-center mt-3 w-[120px] items-center h-[120px] shadow-zinc-500 rounded-full shadow-lg font-semibold text-4xl text-[#1c5c89]'>GH</span></div>
               <div className='flex justify-between'> <span className='mt-2 text-sm'>Inscrit le :</span><span>25/04/2024</span></div>
               <div className='flex justify-between'> <span className='mt-2 text-sm'>Statut :</span><span className='text-green-500'>En ligne</span></div>
               <div className='flex justify-between'> <span className='mt-2 text-sm'>Sexe:</span><span className=''>une femme </span></div>
               <div className='flex justify-between'> <span className='mt-2 text-sm'>Age:</span><span className=''>35</span></div>  
               <div className='flex justify-between'> <span className='mt-2 text-sm'>Il habite a:</span><span className=''>Nabeul (8000)</span></div>
                
            </div>
            </div>
            <button className='bg-[#1c5c89] flex items-center gap-1 text-white p-2 rounded-md justify-center'><BsEnvelopeFill className='mx-2' />contacter gharbouch</button>
       </div>
            <div>B</div>
        </div>
    </div>
  )
}

export default Fiche