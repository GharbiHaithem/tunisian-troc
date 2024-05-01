import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import PropType from 'prop-types'
const Footer = ({ setOpenMenu ,openMenu,isMediumScreen}) => {
  return (
    <div className={`md:w-[80%] mx-auto w-screen ${openMenu && !isMediumScreen ? 'translate-x-[250px]'  : ''}  flex md:flex-row p-3 mt-3 flex-col justify-between h-[max-content]  bg-transparent `}>
        <div className='flex flex-col gap-1'>
       <h5 className='text-[rgb(28,92,137)] text-lg font-bold'>Tunisie Echange</h5>
       <span className='text-slate-500'>Accueil</span>
       <span className='text-slate-500'>Mon compte / Inscription</span>
       <span className='text-slate-500'>Déposer une annonce</span>
       <span className='text-slate-500'>Les annonces</span>
       <span className='text-slate-500'> Les troqueurs</span>
       <span className='text-slate-500'>Les trocs terminés</span>
        </div>
        <div className='flex flex-col gap-1'>
       <h5 className='text-[#1c5c89] text-lg font-bold'>Tunisie Echange</h5>
       <span className='text-slate-500'>Faq</span>
       <span className='text-slate-500'>Comment troquer ?</span>
       <span className='text-slate-500'>Attention aux arnaques</span>
       <span className='text-slate-500'>Troquer un véhicule</span>
       <span className='text-slate-500'>Nous contacter</span>
       
        </div>
        <div className='flex flex-col gap-1'>
       <h5 className='text-[#1c5c89] text-lg font-bold'>Tunisie Echange</h5>
       <span className='text-slate-500'>Mentions Légales</span>
       <span className='text-slate-500'>Avis / témoignages</span>
       <span className='text-slate-500'>Affiliation</span>
      
        </div>
        <div className='flex flex-col gap-1'>
       <h5 className='text-[#1c5c89] text-lg font-bold'>Suivez nous</h5>
     <div className='flex gap-1 items-center justify-center'>  <span className='text-white bg-[#1c5c89] p-3 rounded-lg'><FaFacebookF /></span>
     <span className='text-white bg-[#1c5c89] p-3  items-center justify-center rounded-lg'><RiTwitterXFill /></span>
     <span className='text-white bg-[#1c5c89] p-3  items-center justify-center rounded-lg'><SlSocialInstagram /></span>
     </div>
       <span className='text-slate-500'>Affiliation</span>
      
        </div>
        
    </div>
  )
}
Footer.prototype={
    setOpenMenu:PropType.func.isRequired,
    openMenu:PropType.bool.isRequired,
    isMediumScreen:PropType.bool.isRequired,
  }
export default Footer