import React from 'react'
import './style.css'
import ReactStars from "react-rating-stars-component";
import { BsEnvelopeFill } from "react-icons/bs";
import i1 from '../../images/2011_Alfa_Romeo_Giulietta_Veloce_JTDm-2_2.0_Front.jpg'
import i2 from '../../images/alfa-romeo-Giulia.jpg'

const Fiche = () => {
  return (
    <div className='h-[max-content]  md:w-[80%] w-[100%] mx-auto'>
  <div className='bg-white h-[max-content] w-[100%] p-4 '>
  <div className=' flex md:flex-row flex-col gap-10  mt-5 '>
       <div className='flex flex-col gap-3 w-full md:w-[40%]'>
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
            <div className='flex flex-col w-full gap-4'>
               <div className='mt-3 p-3'>
               <h6 className='text-lg font-semibold text-[#1c5c89]'>son message :</h6>
               <div className='w-[80%] mt-2 mx-auto relative h-[max-content] rounded-lg p-2 bg-slate-200'>
                  <div className='triangle absolute top-2 z-0 left-[-10px]'></div>
                  <p className='text-xs p-2 z-10'>Le Lorem Ipsum est simplement du faux texte employé dans la composition  </p>
               </div>
               </div>
<div className='flex flex-col gap-1'>
    <h5  className='text-lg font-semibold text-[#1c5c89]'>ses notes:</h5>
    <span className='bg-slate-200  h-[50px] rounded-lg p-3 w-full'>
    n'a pas encore été évalué.
    </span>
</div>
<div className='flex gap-2'>
    <button className='w-full bg-[#1c5c89] p-2 text-white text-xs md:text-lg'>Il a Une Annonce</button>
    <button className='w-full bg-[#1c5c89] p-2 text-white  text-xs md:text-lg'>Il veut</button>
    
</div>
<div className='shadow-lg relative w-full gap-2  flex  '>
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
</div>
            </div>
        </div>
  </div>
    </div>
  )
}

export default Fiche