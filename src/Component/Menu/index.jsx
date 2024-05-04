import React from 'react'
import PropType from 'prop-types'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
export const Menu = ({openMenu,showmenu,setShowmenu,isMediumScreen,setOpenMenu}) => {
    
    return (
        <div className={`w-[80%]  h-10 ${openMenu ? 'block' : 'hidden'} md:block items-center mx-auto p-2`}>
            
        <ul className={`flex  ${openMenu ? 'flex-col gap-3 mt-4': 'space-x-10 items-center'} `}>
        <li>
          <a href="#" className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}  onMouseEnter={()=>setShowmenu(false)}>Accueil</a>
       {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
        <li>
          <a href="#" className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}  onMouseEnter={()=>setShowmenu(false)}>Déposer  une annonce</a>
          {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
        <li>
          <Link to="/offres" onClick={()=>setOpenMenu(false)}  className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}   onMouseEnter={()=>{setShowmenu(true) }}  >Les offres</Link>
          {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
        <li>
          <Link className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}  onMouseEnter={()=>setShowmenu(false)}>Les troqeurs</Link>
          {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
        <li>
          <a href="#" className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}  onMouseEnter={()=>setShowmenu(false)}> Mon compte</a>
          {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
        <li>
          <a href="#" className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}  onMouseEnter={()=>setShowmenu(false)}>Aide</a>
          {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
      </ul>
        </div>
      
    )
}
Menu.prototype={
  
    openMenu:PropType.bool.isRequired,
    showmenu:PropType.bool.isRequired,
    setShowmenu :PropType.bool.isRequired,
    isMediumScreen:PropType.bool.isRequired,
    setOpenMenu :PropType.func.isRequired,
  }