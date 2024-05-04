import React from 'react'

import { MdOutlineCategory } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoFilter } from "react-icons/go";
import Annonce from '../Annonce';
const Offres = () => {
  return (
   <>
    <div className='bg-gradient-to-l  from-slate-400 md:w-[80%] p-3 w-[98%] mx-auto h-[max-content] to-slate-100'>
         <form>
             <div className="form-group mt-2">
              
                <input className="form-control rounded-lg text-xs p-2 md:h-11" type="text" required="" placeholder="Rechercher"/>
              </div>
             
              <div className="input-group mt-2">
                      <label className="input-group-text bg-[#ef591e] " htmlFor="inputGroupSelect01">
                      <MdOutlineCategory className='text-white font-bold text-xl' />
                      </label>
                      <select className="form-select p-1" id="inputGroupSelect01">
                        <option selected="">Select category</option>
                        <option value="1">Homme</option>
                        <option value="2">Femme</option>
                     
                      </select>
                    </div>
                    <div className="input-group mt-2">
                      <label className="input-group-text bg-[#ef591e] " htmlFor="inputGroupSelect01">
                      <GiModernCity className='text-white font-bold text-xl' />
                      </label>
                      <select className="form-select p-1" id="inputGroupSelect01">
                        <option selected="">Select gouvernement</option>
                        <option value="1">Homme</option>
                        <option value="2">Femme</option>
                     
                      </select>
                    </div>
                    <div className="form-group mt-2">
              
             <div className='flex gap-3'>
             <input className="w-1/2 form-control rounded-lg text-xs p-2 md:h-11" type="text" required="" placeholder="Prix min"/>
             <input className="w-1/2 form-control rounded-lg text-xs p-2 md:h-11" type="text" required="" placeholder="Prix max"/>
             </div>
            </div>
              <button className='bg-[#1c5c89] p-2 w-full mt-3 text-white rounded-lg'> Rechercher</button>
             </form>

             <div className='mt-3 flex gap-2 items-center justify-center text-center  text-[#1c5c89] font-semibold'>
             <MdKeyboardArrowDown /><span>Vos derniers recherches</span>
             </div>
    </div>
    <div className='md:w-[80%] mx-auto w-[98%] flex justify-between p-3 bg-white'>
        <p className=' text-[#1c5c89] font-medium'>1 - 20 de 15756 Annonces</p>
        <div className="input-group w-1/3 ">
                      <label className="input-group-text bg-[#1c5c89] " htmlFor="inputGroupSelect01">
                      <GoFilter  className='text-white font-bold text-xl' />
                      </label>
                      <select className="form-select p-1" id="inputGroupSelect01">
                        <option selected="">Filter</option>
                        <option value="1">Homme</option>
                        <option value="2">Femme</option>
                     
                      </select>
                    </div>
    </div>
    
  <div className='md:w-[80%] p-4 mb-3  flex md:flex-row  flex-col-reverse gap-2 mx-auto w-[97%]  bg-white'>
 <div className='md:w-[80%] w-full'>
 <Annonce/>
    <Annonce/>
    <Annonce/>
    <Annonce/>
    <Annonce/>
 </div>
    <div className='md:w-[20%] mx-auto w-[98%] p-1 bg-white '>
        <h5 className='font-medium text-[#1c5c89]'>Annonces a la lune</h5>
        <div className='w-full  mt-2 border-1 rounded-lg border-red-400  h-[180px] bg-[#fff2ef]'>
        <p className='text-center text-[#ed4300]  text-base font-light mt-1 mb-1'>Scooter UNISCOOT DELTA 80 Cch</p>
          <div className='flex items-center justify-center'>
          <img className='w-[60%] h-[100px] object-contain rounded-lg ' src={"https://www.electrochaabani.com/images/upload/delta-5fe43c7d5bb4d.jpeg?v16"} alt='' />
          </div>
           <span className='text-center block mx-auto  text-[#1c5c89]  text-base font-bold mt-1'>2400 TND</span>
        </div>
        <div className='w-full  mt-2 border-1 rounded-lg border-red-400  h-[180px] bg-[#fff2ef]'>
        <p className='text-center text-[#ed4300]  text-base font-light mt-1 mb-1'>
SCOOTER ELECTRIQUE YADEA - E8S GRIS
</p>
          <div className='flex items-center justify-center'>
          <img className='w-[60%] h-[100px] object-contain rounded-lg ' src={"https://www.electrochaabani.com/images/upload/motoelectriqueyadeae8s1-663237e0f05aa4.06199340.webp?v16"} alt='' />
          </div>
           <span className='text-center block mx-auto  text-[#1c5c89]  text-base font-bold mt-1'>500 TND</span>
        </div>
        <div className='w-full  mt-2 border-1 rounded-lg border-red-400  h-[180px] bg-[#fff2ef]'>
        <p className='text-center text-[#ed4300]  text-base font-light mt-1 mb-1'>Roadster électrique Vmoto Stash</p>
          <div className='flex items-center justify-center'>
          <img className='w-[60%] h-[100px] object-contain rounded-lg ' src={"https://images.caradisiac.com/images/9/8/7/3/199873/S1-actu-moto-et-scooter-de-la-semaine-la-cfmoto-800-nk-la-honda-cb1000r-2024-les-harley-davidson-made-in-china-une-serie-limitee-bmw-et-l-essai-de-la-ktm-890-adventure-739962.jpg"} alt='' />
          </div>
           <span className='text-center block mx-auto  text-[#1c5c89]  text-base font-bold mt-1'>500 TND</span>
        </div>
        <div className='w-full  mt-2 border-1 rounded-lg border-red-400  h-[180px] bg-[#fff2ef]'>
        <p className='text-center text-[#ed4300]  text-base font-light mt-1 mb-1'>Roadster électrique Vmoto Stash</p>
          <div className='flex items-center justify-center'>
          <img className='w-[60%] h-[100px] object-contain rounded-lg ' src={"https://www.electrochaabani.com/images/upload/scooterzimotaveravespa3-632864392c6bb7.77030590.jpg?v16"} alt='' />
          </div>
           <span className='text-center block mx-auto  text-[#1c5c89]  text-base font-bold mt-1'>500 TND</span>
        </div>
    </div>
  </div>
    
   </>
  )
}

export default Offres


