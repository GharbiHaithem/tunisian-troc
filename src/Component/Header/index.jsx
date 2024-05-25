import React, { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Menu } from '../Menu';
import PropType from 'prop-types'
import { IoCarSport } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { useSelector } from 'react-redux';
const Header = ({ setOpenMenu ,openMenu,isMediumScreen,showmenu,setShowmenu}) => {
   const{user} = useSelector(state=>state?.auth)
   const[activeSearch,setActiveSearch] = useState(false)
   useEffect(()=>{
  if(isMediumScreen){
   setActiveSearch(false)
  }
   },[isMediumScreen])
  return (
   <div className='relative'>
    <button className={`bg-[#0000005a] fixed  z-50 top-3 rounded-lg ${openMenu && !isMediumScreen  ? 'left-[260px] z-50' : ''} text-white md:mx-0 mx-2 md:hidden p-2`}  onClick={()=>setOpenMenu(!openMenu)}><MdOutlineMenu   className='fs-3' style={{color:'#eee'}}  /></button>

    <div className={`h-[60px] md:h-[100px] ${openMenu  && !isMediumScreen? 'translate-x-[250px]' : ''}  w-screen md:w-[80%] md:mx-auto bg-[#1c5c89] flex justify-between items-center`}>
   
  

    { !isMediumScreen&& <div >&nbsp;</div>}
<div className={`flex flex-col mt-2 mx-3 ${openMenu && !isMediumScreen ? 'translate-x-12' : ''}`}>

<span className="text-lg hidden md:block font-bold text-white opacity-50">Tout s'échange, tout se marchande sur</span>

<div className="text-lg font-extrabold md:text-3xl md:font-extrabold ">
<span className="text-white">Tunisie-</span> 
<span className="text-[#ef591e]">Echange</span>
</div>
</div>

<div className='flex  md:flex-col flex-row items-center mr-3 md:mr-0 gap-1'>
   <button className='bg-[#df8844] md:hidden rounded-sm p-2' onClick={()=>setActiveSearch(!activeSearch)}><IoSearch  className='fs-3' style={{color:'white'}} /></button>
   <Link to={'/member'} className='bg-[#df8844] md:hidden rounded-sm p-2 '><FaUserAlt className='fs-3' style={{color:'white'}} /></Link>
 <div className='flex flex-col gap-1'>
 <p className='hidden md:block text-white text-lg font-medium text-start'>Bonjour &nbsp;{user?.pseudo} !</p>
  <Link to={'/member'} className='bg-[#df8844] hidden  mr-3 rounded-sm  md:flex items-center gap-2 p-3'><FaUserAlt className='fs-3' style={{color:'white'}} /><span className='text-white text-lg font-semibold'>Mon Compte</span></Link>
 </div>

</div>
</div>
<div className='relative'>
<Menu  setShowmenu={setShowmenu}   showmenu={showmenu}/>
{(showmenu && isMediumScreen ||( activeSearch && !isMediumScreen))  && <div className={`md:w-[80%] w-full shadow-slate-500 shadow-lg mx-auto ${activeSearch ? 'top-0 left-0  h-[max-content]' : 'top-10  left-[10%]   h-[500px]'}absolute     bg-slate-200  z-20`}  onMouseLeave={()=>setShowmenu(false)}>
   {activeSearch && <div className='flex w-full  py-3 justify-between '>
   <div className="form-group mt-1 px-2 w-[80%]">

                <input className="form-control rounded-lg text-xs p-3 md:h-11" type="text"  name='text' placeholder="Rechercher"/>
              
              </div>
              <button className='rounded-lg bg-[#ff6600] w-[14%] text-white mr-3 p-2'>Ok</button>
    </div>}
    <div className='flex gap-3 w-full flex-wrap text-[#1c5c89]'>
        <div  className={'md:w-[calc(20%-12px)] w-[calc(50%-12px)]  flex flex-col gap-1 p-3'}>
           <div className='flex items-center gap-2 bg-slate-300 p-2'>
           <IoCarSport  className='font-bold text-2xl text-[#1c5c89]' />   <h5 className=' font-normal text-sm text-[#1c5c89]'>VEHICULES</h5>
           </div>
           <span className='text-xs'>voitures</span>
           <span className='text-xs'>motos</span>
           <span className='text-xs'>equipement auto </span>
           <span className='text-xs'>equipement moto</span>
           <span className='text-xs'>quads</span>
        </div>
        <div  className='md:w-[calc(20%-12px)] w-[calc(50%-12px)] flex flex-col gap-1 p-3'>
           <div className='flex items-center gap-2 bg-slate-300 p-2 text-xs'>
           <FaComputer  className='font-bold text-2xl text-[#1c5c89]' />   <h5 className=' font-normal text-sm  text-[#1c5c89]'>MULTIMEDIA</h5>
           </div>
           <span className='text-xs'>voitures</span>
           <span className='text-xs'>motos</span>
           <span className='text-xs'>equipement auto </span>
           <span className='text-xs'>equipement moto</span>
           <span className='text-xs'>quads</span>
        </div>
        <div  className='md:w-[calc(20%-12px)] w-[calc(50%-12px)] flex flex-col gap-1 p-3'>
           <div className='flex items-center gap-2 bg-slate-300 p-2'>
           <FaComputer  className='font-bold text-2xl text-[#1c5c89]' />   <h5 className=' font-normal text-sm  text-[#1c5c89]'>MULTIMEDIA</h5>
           </div>
           <span className='text-xs'>voitures</span>
           <span className='text-xs'>motos</span>
           <span className='text-xs'>equipement auto </span>
           <span className='text-xs'>equipement moto</span>
           <span className='text-xs'>quads</span>
        </div>
        <div  className='md:w-[calc(20%-12px)] w-[calc(50%-12px)] flex flex-col gap-1 p-3'>
           <div className='flex items-center gap-2 bg-slate-300 p-2'>
           <FaComputer  className='font-bold text-2xl text-[#1c5c89]' />   <h5 className=' font-normal text-sm  text-[#1c5c89]'>MULTIMEDIA</h5>
           </div>
           <span className='text-xs'>voitures</span>
           <span className='text-xs'>motos</span>
           <span className='text-xs'>equipement auto </span>
           <span className='text-xs'>equipement moto</span>
           <span className='text-xs'>quads</span>
        </div>
        <div  className='md:w-[calc(20%-12px)] w-[calc(50%-12px)] flex flex-col gap-1 p-3'>
           <div className='flex items-center gap-2 bg-slate-300 p-2'>
           <FaComputer  className='font-bold text-2xl text-[#1c5c89]' />   <h5 className=' font-normal text-sm  text-[#1c5c89]'>MULTIMEDIA</h5>
           </div>
           <span className='text-xs'>voitures</span>
           <span className='text-xs'>motos</span>
           <span className='text-xs'>equipement auto </span>
           <span className='text-xs'>equipement moto</span>
           <span className='text-xs'>quads</span>
        </div>
        
        <div  className='md:w-[calc(20%-12px)] w-[calc(50%-12px)] flex flex-col gap-1 p-3'>
           <div className='flex items-center gap-2 bg-slate-300 p-2'>
           <FaComputer  className='font-bold text-2xl text-[#1c5c89]' />   <h5 className=' font-normal text-sm  text-[#1c5c89]'>MULTIMEDIA</h5>
           </div>
           <span className='text-xs'>voitures</span>
           <span className='text-xs'>motos</span>
           <span className='text-xs'>equipement auto </span>
           <span className='text-xs'>equipement moto</span>
           <span className='text-xs'>quads</span>
        </div>
        <div  className='md:w-[calc(20%-12px)] w-[calc(50%-12px)] flex flex-col gap-1 p-3'>
           <div className='flex items-center gap-2 bg-slate-300 p-2'>
           <FaComputer  className='font-bold text-2xl text-[#1c5c89]' />   <h5 className=' font-normal text-sm  text-[#1c5c89]'>MULTIMEDIA</h5>
           </div>
           <span className='text-xs'>voitures</span>
           <span className='text-xs'>motos</span>
           <span className='text-xs'>equipement auto </span>
           <span className='text-xs'>equipement moto</span>
           <span className='text-xs'>quads</span>
        </div>
    </div>
    </div>}
</div>

   </div>
  )
}
Header.prototype={
    setOpenMenu:PropType.func.isRequired,
    openMenu:PropType.bool.isRequired,
    isMediumScreen:PropType.bool.isRequired,
    setShowmenu:PropType.func.isRequired,
    showmenu:PropType.bool.isRequired,
}

export default Header