import React from 'react'
import { BiMessageSquareDots } from "react-icons/bi";
import { CiFileOn } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdOutlineVpnKey } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom';
const Member = () => {
  return (
    <div className=''>
       <div className='md:w-[80%] w-screen mx-auto h-[max-content] bg-white my-4 p-4'>
       <h5 className='md:text-xl text-sm text-[#1c5c89] font-bold '>Bienvenue dans votre espace gharbouch !
 Mes messages</h5>
 <div className='flex flex-col md:flex-row md:justify-between md:gap-20 mt-4'>
    <div className='flex flex-col mx-auto gap-2 w-[90%]  md:w-[45%]'>
        <button className='bg-[#1c5c89] rounded-sm text-white flex justify-center items-start gap-2 md:p-3  p-2 '><BiMessageSquareDots style={{fontWeight:'900' ,fontSize:'25px'}} /><span  className='text-xs md:text-lg '>Messages</span></button>
        <Link to={'/member/mag'} className='bg-[#1c5c89] rounded-sm text-white md:p-3  p-2 flex justify-center items-center gap-2'><CiFileOn  style={{fontWeight:'900' ,fontSize:'25px'}} /><span className='text-xs md:text-lg '>Mes annonces</span></Link>
        <button className='bg-[#1c5c89] rounded-sm text-white md:p-3 p-2 flex justify-center items-center
         gap-2'><AiOutlineLike style={{fontWeight:'900' ,fontSize:'25px'}}/><span>Favoris</span></button>
        <Link to={'/mytrocs'} className='bg-[#1c5c89] rounded-sm text-white md:p-3 p-2 flex justify-center items-center gap-2'><FaExchangeAlt  style={{fontWeight:'900' ,fontSize:'25px'}}  /><span className='text-xs md:text-lg '>Mes Trocs</span></Link>
        <Link to={'/info'} className='bg-[#1c5c89] rounded-sm text-white md:p-3  p-2 flex justify-center items-center gap-2'><FaUser style={{fontWeight:'900' ,fontSize:'25px'}}/><span className='text-xs md:text-lg '>Mes infos</span></Link>
        <button className='bg-[#ff6600] rounded-sm text-white md:p-3 p-2 flex justify-center items-center gap-2'><MdOutlineVpnKey style={{fontWeight:'900' ,fontSize:'25px'}}/><span className='text-xs md:text-lg '>Mon status</span></button>
        
    </div>
    <div className='flex flex-col gap-3  w-[90%] md:w-[45%] mx-auto'>
        <div className='bg-slate-100 w-full p-4 '>
            <h6 className='text-slate-500'>Vous êtes inscrits depuis le : 25 Avril 2024</h6>
            <button className='p-3 flex items-center w-full justify-center mt-2  border-1 bg-white  border-slate-300'>
           <div className='gap-1 justify-center items-center flex flex-col'>
           <FaPowerOff  style={{fontSize:'30px' , color:'#1c5c89'}} />
            <span className='text-[#1c5c89] font-normal text-xs md:text-base md:font-medium'>Se Me Déconnecter </span>
           </div>
            </button>
        </div>
        <div className='bg-slate-100 flex justify-center items-center w-full p-4'>
                 <button className='w-[80%] flex justify-center items-center gap-2 bg-[#1c5c89] text-white p-2 '><MdDeleteSweep   style={{fontSize:'30px'}} /><span className='font-medium'>Supprimer mon profil</span></button>
        </div>
        </div>    
 </div>
       </div>
    </div>
  )
}

export default Member