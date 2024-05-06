import React, { useEffect, useRef, useState } from 'react'
import BreadCrumb from '../BreadCrum'
import i1 from '../../images/r46soelp0b (1).jpg'
import i2 from '../../images/g-power-m550d-f10-d-tronik5-v1-04.jpg'
import i3 from '../../images/alfa-romeo-Giulia.jpg'
import i4 from '../../images/2011_Alfa_Romeo_Giulietta_Veloce_JTDm-2_2.0_Front.jpg'
import { BiLike } from "react-icons/bi";
import PropType from 'prop-types'
import i5 from '../../images/r46soelp0b (1).jpg'
import i6 from '../../images/g-power-m550d-f10-d-tronik5-v1-04.jpg'
import i7 from '../../images/f8b8835d7813e76c61717881770aa990.jpg'
import i71 from '../../images/V1.jpg'
import i72 from '../../images/V2.jpg'
import i73 from '../../images/V3.jpg'
import i74 from '../../images/V5.jpg'
import './style.css'
import arr from '../../images/echange.png'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { useNavigate } from 'react-router'

const DetailsTroc = ({isMediumScreen}) => {
    const[showTroc , setShowTroc] = useState(false)
    const[trocSender , setTrocSender] = useState(false)
    const[trocReceiver , setTrocReceiver] = useState(true)
    const topRef = useRef(null);
    const navigate = useNavigate()
    useEffect(() => {
        // Faites défiler la page vers le haut lorsque la composante est montée
        window.scrollTo({
          top: topRef.current.offsetTop,
          behavior: 'smooth', // Ajoute un effet de défilement fluide
        });
      }, []);
  return (
    <div ref={topRef} className='md:w-[80%] w-screen mx-auto bg-slate-200 p-3 h-[max-content]'>
    <div className='flex justify-between items-center'>
  <span className='text-[#236693] font-bold'>  M550D Très bon état</span>
<span className='text-slate-400 text-xs font-medium'>Publiée le 01/05/2024</span>
    </div>
  <div>
      <div className='flex md:flex-row flex-col gap-3 mt-1'>
         <div className='md:w-[75%] w-full flex flex-col gap-1'>
            <img width={'100%'}  className='rounded-lg object-cover h-[450px]' src={i1} alt=''  />
            <div className='flex gap-1 w-[100%]'>
            <img className='w-[calc(25%-4px)] rounded-lg' height={'155px'} src={i2} alt=''  />
            <img className='w-[calc(25%-4px)] rounded-lg' height={'155px'} src={i3} alt=''  />
            <img className='w-[calc(25%-4px)] rounded-lg' height={'155px'} src={i1} alt=''  />
            <img className='w-[25%]' height={'155px'} src={i1} alt=''  />
            
            </div>
         </div>
         {!isMediumScreen ? (<div className='w-full '>
         <h3 className='text-[#236693] font-bold'>Année : <span className='text-[#ff4400e9]'>1999</span></h3>
 
<p className='flex gap-2 items-center justify-between'><span className='font-medium text-sm text-slate-400'>Constructeur :</span><span className='text-xs '> Suzuki</span></p>
<p className='flex gap-2 items-center justify-between'><span className='font-medium text-sm text-slate-400'>Kilométrage  :</span><span className='text-xs '>  41000 km</span></p>
<p className='flex gap-2 items-center justify-between'><span className='font-medium text-sm text-slate-400'>Cylindrée :</span><span className='text-xs '> 1300 centimètres cubes</span></p>
<p className='flex gap-2 items-center justify-between'><span className='font-medium text-sm text-slate-400'>Nombre de propriétaires précédents : </span><span className='text-xs '> Plus de 2</span></p>
<p className='flex gap-2 items-center justify-between'><span className='font-medium text-sm text-slate-400'>Couleur : </span><span className='text-xs '>  Blanche</span></p>
<p className='flex gap-2 items-center justify-between'><span className='font-medium text-sm text-slate-400'>Type : </span><span className='text-xs '>   Sport GT</span></p>

<p className='flex gap-2 flex-col'><span className='text-[#236693]  font-semibold'>Description:</span><span className='text-xs '>  An 1999 40000km revision faite vidange moteur liquide refroidissement pneu av et ar filtre a huile etc.... faire offre</span></p>






         </div>) : ( <>
            <div  className='md:w-[35%] w-full flex flex-col gap-2'>
            <button  onClick={()=>navigate('/troc/1')} className='bg-[#ff6600] text-white p-2 w-full rounded-lg text-lg font-light'>Proposer une Echange</button>
            <button className='bg-[#236693] text-white p-2 w-full rounded-lg text-lg font-light'>Contacter par Email</button>
            <button className='bg-white border-1 border-slate-600 text-[#236693] p-2 w-full justify-center flex items-center rounded-lg text-lg font-light'><BiLike />J'aime cet Objet</button>
            <div className='bg-white w-full text-[#236693] p-2 mt-3'>
                <h4>par Gharbouch</h4>
                <p className='mt-1 text-black text-sm'>Habite a Nabeul Nabeul 8000</p>
                <button className='bg-[#236693] text-white p-2 block mx-auto rounded-lg mt-3'>Voi sa fiche et ces annonces</button>
            </div>
         </div>
        
         </>)}
  
    </div>
  </div>
    {isMediumScreen && (<>
        <div className='md:w-[67%]'>
         <h3 className='text-[#236693] font-bold mb-3 mt-2'>Année : <span className='text-[#ff4400e9]'>1999</span></h3>
 
<p className='flex gap-2  mb-1 items-center justify-between'><span className='font-medium text-sm text-slate-400'>Constructeur :</span><span className='text-xs '> Suzuki</span></p><hr/>
<p className='flex gap-2 mb-1  items-center justify-between'><span className='font-medium text-sm text-slate-400'>Kilométrage  :</span><span className='text-xs '>  41000 km</span></p><hr/>
<p className='flex gap-2  mb-1 items-center justify-between'><span className='font-medium text-sm text-slate-400'>Cylindrée :</span><span className='text-xs '> 1300 centimètres cubes</span></p><hr/>
<p className='flex gap-2  mb-1 items-center justify-between'><span className='font-medium text-sm text-slate-400'>Nombre de propriétaires précédents : </span><span className='text-xs '> Plus de 2</span></p><hr/>
<p className='flex gap-2 mb-1  items-center justify-between'><span className='font-medium text-sm text-slate-400'>Couleur : </span><span className='text-xs '>  Blanche</span></p><hr/>
<p className='flex gap-2 mb-1  items-center justify-between'><span className='font-medium text-sm text-slate-400'>Type : </span><span className='text-xs '>   Sport GT</span></p><hr/>

<p className='flex flex-col gap-2'><span className='text-[#236693] font-bold'>Description : </span><span className='text-xs '>  An 1999 40000km revision faite vidange moteur liquide refroidissement pneu av et ar filtre a huile etc.... faire offre</span></p>






         </div>
           
    </>
        ) 
       } 
   <div className='mt-3'>
 <h6 className='text-[#236693] font-bold'>  Nico4740 souhaite en échange :</h6> 
<div className='flex'>
 <img   alt='' src={arr}/>   
<span> M2 m3 m4 m5 m6 rs4 rs5 rs7</span> 
</div>
   </div>
        { (!isMediumScreen && <>
            <div  className=' mt-3 w-full flex flex-col gap-2'>
            <button className='bg-[#ff6600] text-white p-2  w-full rounded-lg md:text-lg text-xs md: font-light'>Proposer une Echange</button>
            <button className='bg-[#236693] text-white p-2  w-full rounded-lg md:text-lg text-xs md:font-light'>Contacter par Email</button>
            <button className='bg-white border-1 border-slate-600 text-[#236693] p-2  w-full md:text-lg text-xs justify-center flex items-center rounded-lg  font-light'><BiLike />J'aime cet Objet</button>
         </div>
         <div className='bg-white w-full text-[#236693] p-2 mt-3'>
                <h4>par Gharbouch</h4>
                <p className='mt-1 text-black text-sm'>Habite a Nabeul Nabeul 8000</p>
                <button className='bg-[#236693] text-white p-2 block mx-auto rounded-lg mt-3'>Voi sa fiche et ces annonces</button>
            </div>
         </>)}
      
         <div className='bg-slate-200 h-[max-content]  mt-3  p-3'>
       <h6 className='text-[#236693] font-semibold mt-4'>  Exemples d'annonces qui l'intéressent :</h6>
       <div className='md:w-[100%] flex flex-wrap gap-2 h-[max-content] mt-4'>
      <div className='md:w-[calc(20%-8px)] w-[calc(50%-8px)] a h-[100px] relative md:h-[200px] object-cover  rounded-lg'>  <img className='w-full h-full rounded-lg'   src={i73} />
      <div className='absolute w-full h-[30%] bottom-0 left-0 rounded-b-lg bg-[#0008]  text-center z-1'>
      <h6 className='text-white md:text-sm text-xs font-semibold mt-1'>VESPA ET2</h6>
      </div>
     
      </div>
       <div  className='md:w-[calc(20%-8px)] w-[calc(50%-8px)] a h-[100px] relative md:h-[200px] object-cover rounded-lg'> <img  className='w-full h-full rounded-lg' src={i71} />
       <div className='absolute w-full h-[30%] bottom-0 left-0 rounded-b-lg bg-[#0008]  text-center z-1'>
      <h6 className='text-white md:text-sm text-xs font-semibold mt-1'>VESPA PRIMAVERA 2T 50CC</h6>
      </div>
       </div>
       <div className='md:w-[calc(20%-8px)] a w-[calc(50%-8px)] h-[100px] relative md:h-[200px] object-cover rounded-lg  '> <img  className='w-full h-full rounded-lg'  src={i72} />
       <div className='absolute w-full h-[30%] bottom-0 left-0 rounded-b-lg bg-[#0008]  text-center z-1'>
      <h6 className='text-white md:text-sm text-xsfont-semibold mt-1'>VESPA ET2</h6>
      </div>
       </div>
        <div className='md:w-[calc(20%-8px)] a w-[calc(50%-8px)]  h-[100px] relative  md:h-[200px] object-cover rounded-lg'><img className='w-full h-full rounded-lg'   src={i74} />
        <div className='absolute w-full h-[30%] bottom-0 left-0 rounded-b-lg bg-[#0008]  text-center z-1'>
      <h6 className='text-white md:text-sm text-xs font-semibold mt-1'>VESPA ET2</h6>
      </div>
        </div>
        <div  className='md:w-[calc(20%-8px)] a w-[calc(50%-8px)] h-[100px] relative md:h-[200px] object-cover rounded-lg'><img  className='w-full h-full rounded-lg' src={i74} />
        <div className='absolute w-full h-[30%] bottom-0 left-0 rounded-b-lg bg-[#0008]  text-center z-1'>
      <h6 className='text-white md:text-sm text-xs font-semibold mt-1'>VESPA ET2</h6>
      </div>
        </div>
        <div  className='md:w-[calc(20%-8px)] a w-[calc(50%-8px)] h-[100px] relative md:h-[200px] object-cover rounded-lg'><img  className='w-full h-full rounded-lg' src={i74} />
        <div className='absolute w-full h-[30%] bottom-0 left-0 rounded-b-lg bg-[#0008]  text-center z-1'>
      <h6 className='text-white md:text-sm text-xs font-semibold mt-1'>VESPA ET2</h6>
      </div>
        </div>
       </div>
       
         </div>
    {!showTroc   ?   <div className='flex justify-center gap-2 items-center cursor-pointer'  onClick={()=>setShowTroc(!showTroc)}>
       <SlArrowDown className='text-xl  font-extrabold text-[#236693] ' /> <h6 className='md:text-sm  font-semibold text-[#236693] text-xs'>Afficher les trocs concernant cette annonce</h6>
       </div> :
     <div>
     <div className='flex justify-center gap-2 items-center cursor-pointer'  onClick={()=>setShowTroc(!showTroc)}>
       <SlArrowUp className='text-xl  font-extrabold text-[#236693] ' /> <h6 className='md:text-sm  font-semibold text-[#236693] text-xs '>Masquer les trocs concernant cette annonce</h6>
       </div>
       <div className='flex justify-between mt-3 gap-20'>
        <button onClick={()=>{
            setTrocSender(false)
            setTrocReceiver(true)}} className={` w-[45%] p-1  ${trocReceiver ? 'bg-[#236693] text-white' : 'bg-white text-[#236693]'} text-xs md:text-sm`}>Les trocs reçu</button>
        <button onClick={()=>{
            setTrocSender(true)
            setTrocReceiver(false)}} className={` w-[45%] p-1  ${trocSender ? 'bg-[#236693] text-white' : 'bg-white text-[#236693]'} text-xs md:text-sm`}>Les trocs envoyés :</button>
       </div>
     </div> }
    </div>
  )
}
DetailsTroc.prototype={
  
    isMediumScreen:PropType.bool.isRequired,
  }
export default DetailsTroc