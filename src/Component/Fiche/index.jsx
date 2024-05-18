import React from 'react'
import './style.css'
import ReactStars from "react-rating-stars-component";
import { BsEnvelopeFill } from "react-icons/bs";
import i1 from '../../images/2011_Alfa_Romeo_Giulietta_Veloce_JTDm-2_2.0_Front.jpg'
import i2 from '../../images/alfa-romeo-Giulia.jpg'
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import Annonce from '../Annonce';
import { useSelector } from 'react-redux';

const Fiche = () => {
  const {user,age}= useSelector(state=>state?.auth)
  return (
    <div className='h-[max-content]  md:w-[80%] w-[100%] mx-auto'>
  <div className='bg-white h-[max-content] w-[100%] p-4 '>
  <div className=' flex md:flex-row flex-col gap-10  mt-5 '>
       <div className='flex flex-col gap-3 w-full md:w-[40%]'>
       <div className='bg-slate-300 h-[max-content] rounded-lg p-3'>
            <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
                    <h4 className='text-[#ff66009a] font-bold text-lg'>{user?.pseudo}</h4>
                    <ReactStars
    count={3}
   edit={false}
    size={24}
    activeColor="#ffd700"
    value={1}
  />
                </div>
                <div className='flex justify-center items-center'><span className='flex justify-center mt-3 w-[120px] items-center h-[120px] shadow-zinc-500 rounded-full shadow-lg font-semibold text-4xl text-[#1c5c89]'>{user?.picture?.length<0 ?  user?.pseudo.slice(0,2).toUpperCase()  : <img className='w-full h-full object-cover rounded-full' src={user?.picture[0]?.url} /> }</span></div>
               <div className='flex justify-between'> <span className='mt-2 text-sm'>Inscrit le :</span><span>{new Date(user?.createdDate ||  user?.createdAt).toLocaleDateString()}</span></div>
               <div className='flex justify-between'> <span className='mt-2 text-sm'>Statut :</span><span className='text-green-500'>En ligne</span></div>
               <div className='flex justify-between'> <span className='mt-2 text-sm'>Sexe:</span><span className=''>une femme </span></div>
               <div className='flex justify-between'> <span className='mt-2 text-sm'>Age:</span><span className=''>{age}</span></div>  
               <div className='flex justify-between'> <span className='mt-2 text-sm'>Il habite a:</span><span className=''>{user?.address} ({user?.code})</span></div>
                
            </div>
            </div>
            <button className='bg-[#1c5c89] flex items-center gap-1 text-white p-2 rounded-md justify-center'><BsEnvelopeFill className='mx-2' />contacter gharbouch</button>
       </div>
            <div className='flex flex-col w-full gap-4'>
               <div className='mt-3 p-3'>
               <h6 className='text-lg font-semibold text-[#1c5c89]'>son message :</h6>
               <div className='w-[80%] mt-2 mx-auto relative h-[max-content] rounded-lg p-2 bg-slate-200'>
                  <div className='triangle absolute top-2 z-0 left-[-10px]'></div>
                  <p className='text-xs p-2 z-10'>{user?.description}</p>
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
<Annonce/>
            </div>
        </div>
  </div>
    </div>
  )
}

export default Fiche