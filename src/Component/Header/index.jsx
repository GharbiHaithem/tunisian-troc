import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Menu } from '../Menu';
import PropType from 'prop-types'
const Header = ({ setOpenMenu ,openMenu,isMediumScreen}) => {
  return (
   <div className=''>
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

<div className='flex items-center mr-3 md:mr-0 gap-1'>
   <button className='bg-[#df8844] md:hidden rounded-sm p-2'><IoSearch  className='fs-3' style={{color:'white'}} /></button>
   <Link to={'/member'} className='bg-[#df8844] md:hidden rounded-sm p-2 '><FaUserAlt className='fs-3' style={{color:'white'}} /></Link>
   <Link to={'/member'} className='bg-[#df8844] hidden  mr-3 rounded-sm  md:flex items-center gap-2 p-3'><FaUserAlt className='fs-3' style={{color:'white'}} /><span className='text-white text-lg font-semibold'>Mon Compte</span></Link>

</div>
</div>
<Menu/>
   </div>
  )
}
Header.prototype={
    setOpenMenu:PropType.func.isRequired,
    openMenu:PropType.bool.isRequired,
    isMediumScreen:PropType.bool.isRequired,
}
export default Header