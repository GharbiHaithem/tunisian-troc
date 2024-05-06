import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
const ProposerTroc = () => {
    const[myStore,setMyStore]=useState(false)
    const[ourStore,setOurStore]=useState(false)
  return (
    <div className='md:w-[80%] bg-white h-[max-content] mx-auto w-full p-4'>
        <h5>Proposer un troc à mla2</h5>
       <div className='flex  md:flex-row md:justify-between flex-col gap-2'>
      <div className='md:w-1/2'>
      <div className=' flex my-5 flex-col '>
            <h5 className='   text-[#1c5c89]'>Vous voulez :</h5>
            <div className='h-[160px] p-2 z-40 relative flex rounded-lg gap-3 w-full bg-[#f2f5fe]'>
               <div className='w-[160px] h-full]'>
               <img className='rounded-lg w-[90%] h-[90%]' src='https://www.france-troc.com/ImgUsers/annonces/2023/09/1067537/frpxszp08n.jpg' />
               </div>
               <p>Audi Q7 3L V6 TDI Quattro S-line</p>
            </div>
            <div className='w-[80%] mx-auto -z-0  relative -translate-y-1'> 
  <button  onClick={()=>setOurStore(!ourStore)} className='  bg-[#1c5c89] w-full flex gap-1 text-white p-2 rounded-lg  items-center'><MdOutlineArrowDropDown className='font-bold text-2xl'/>Ajouter d'autres annonces</button>
  </div>
{ ourStore&&<div className='w-full h-20 border-1 p-3 border-[#473ee861]'>
   <h6 className='text-[#1c5c89] font-semibold '>son magasin</h6>
  </div>}
        </div>
      </div>
     <div className='md:w-1/2 my-5'>
     <div className=' '>
  <h5 className='text-[#f47800]'>Vous proposez :</h5>
  <div className='h-[160px] p-3 z-40 relative flex justify-center rounded-lg gap-3 w-full bg-[#fff2ef]'>
    <p className='text-lg font-light'>Sélectionnez une/des annonces dans votre magasin. <span onClick={()=>setMyStore(!myStore)}  className='underline font-medium'>Cliquez ici</span></p>
    
  </div>
  <div className='w-[80%] mx-auto -z-0  relative -translate-y-1'> 
  <button onClick={()=>setMyStore(!myStore)} className='  bg-[#f47800] w-full  text-white p-2 rounded-lg flex gap-1 items-center'><MdOutlineArrowDropDown className='font-bold text-2xl'/>Ajouter d'autres annonces</button>
  </div>
</div>
{ myStore&& <div className='w-full h-20 border-1 p-3 border-[#de715e82]'>
   <h6 className='text-[#f47800] font-semibold '>votre magasin</h6>
  </div>}
     </div>


       </div>
       <button className='md:w-[15%] w-[50%] bg-[#1c5c89] p-2 text-white block mx-auto font-semibold'>
        Envoyer</button>
    </div>
  )
}

export default ProposerTroc