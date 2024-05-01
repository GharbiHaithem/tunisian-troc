import React from 'react'
import PropType from 'prop-types'
export const Menu = ({openMenu}) => {
    return (
        <div className={`w-[80%]  h-10 ${openMenu ? 'block' : 'hidden'} md:block items-center mx-auto p-2`}>
            
        <ul className={`flex  ${openMenu ? 'flex-col gap-3 mt-4': 'space-x-10 items-center'} `}>
        <li>
          <a href="#" className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}>Accueil</a>
       {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
        <li>
          <a href="#" className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}>Produits</a>
          {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
        <li>
          <a href="#" className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}>Services</a>
          {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
        <li>
          <a href="#" className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}>Contact</a>
          {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
        <li>
          <a href="#" className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}>Contact</a>
          {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
        <li>
          <a href="#" className={` ${openMenu ? 'text-black  text-lg font-bold' : 'text-white hover:text-blue-700'} `}>Contact</a>
          {openMenu &&<hr className='mt-2 bg-slate-200' />}
        </li>
      </ul>
        </div>
      
    )
}
Menu.prototype={
  
    openMenu:PropType.bool.isRequired
  }