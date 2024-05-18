import React, { useEffect } from 'react'
import { PiCameraPlusLight } from "react-icons/pi";
import i1  from '../../images/V1.jpg'
import { PiEyeThin } from "react-icons/pi";
import { MdEditSquare } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { IoIosSwitch } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAllAnnonces } from '../../features/annonceSlice';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
const Mag = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getMyAllAnnonces())
  },[dispatch])
  const {annonces} = useSelector(state=>state?.annonce)
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
const navigate = useNavigate()
  return (
    <div className='md:w-[80%] bg-white p-4 w-[97%]   h-[max-content]  mx-auto mt-6'>
      <div className='flex md:flex-row md:justify-between flex-col gap-2 w-full '>
    <div className='flex justify-between md:w-[50%] w-[100%]'>
    <div className='flex flex-col gap-1'>
    <h5 className='text-[#236693] text-lg font-semibold'>Mon magasin (1 annonces)</h5>
    <div className='flex gap-1 w-full'>
    <select className="form-select form-select-sm mb-3 w-full" aria-label=".form-select-lg example">
  <option selected>tous les categorie</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<select className="form-select form-select-sm mb-3  w-1/2" aria-label=".form-select-lg example">
  <option selected>trier par ...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    </div>
    <div>

    </div>
    </div>
    <div className='md:w-1/3 w-full'>
        <Link to={'/depotannonce'} className='bg-[#df8844] p-2 justify-center text-lg font-semibold w-full text-white rounded-lg hover:bg-[#ef591e] flex gap-1 items-center'><PiCameraPlusLight  className='text-2xl font-bold' />Déposer une annonce</Link>
    </div>
    </div>  
    {annonces?.length>0 && annonces?.map((ann)=>(
      <>
      
    <div className='shadow-md rounded-lg h-[max-content] mt-1 w-full flex  md:flex-row flex-col  relative gap-2 bg-slate-200'>
      <div className=' w-full md:h-[300px] md:w-[45%] '>
      <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwipe flex items-center justify-center h-full object-contain"
      >
        {ann?.image_annonce?.map((img)=>(
<>
<SwiperSlide><img className='object-contain w-full h-full'  src={img?.url}  /></SwiperSlide>
</>
        ))}
      
      
      </Swiper>
    </>
     
      </div>
      <div className='mt-5 md:w-1/2 w-[75%] md:text-center  text-start'>
      <h5 className='text-[#236693] text-lg font-semibold'>{ann?.title}</h5>
       <h3 className='mt-3  justify-start text-slate-400 text-xs  font-medium'>{ann?.rubrique?.parentID?.title} &nbsp; / &nbsp; {ann?.rubrique?.title}</h3>
       <p className='mt-3 text-xs '>Contre : <span className='text-[#236693] text-md font-bold'>Etudie toutes proposition</span>s</p>
       <div className='flex gap-2 text-[#ef591e]  text-xs mt-2'>
       <PiEyeThin /><span> Annonce en cours de validation</span>
       </div>
       <span className='text-[#236693] font-bold text-2xl'>14300 TND</span>
      </div>
     
     
    </div>
 
    <div className='mt-2  mb-4 w-full flex flex-wrap gap-3'>
        <span className='md:w-[calc(25%-12px)] w-[calc(50%-12px)] p-2 border-1 cursor-pointer hover:bg-slate-300 flex items-center justify-center  border-[#236693]'>
            <span  onClick={()=>navigate(`/edit-annonce/${ann?._id}`)} className='flex flex-col gap-1 text-[#236693]'><MdEditSquare className='block mx-auto font-bold text-2xl' />Modifier</span>
        </span>
        <span className='md:w-[calc(25%-12px)]  w-[calc(50%-12px)] p-2 border-1 hover:bg-slate-300 cursor-pointer flex items-center justify-center  border-[#236693]'>
            <span className='flex flex-col gap-1 text-[#236693]'><ImStatsDots  className='block mx-auto font-bold text-2xl' />Statistique</span>
        </span>
        <span className='md:w-[calc(25%-12px)]  w-[calc(50%-12px)] p-2 border-1 hover:bg-slate-300 cursor-pointer flex items-center justify-center  border-[#236693]'>
            <span className='flex flex-col gap-1 text-[#236693]'><IoIosSwitch className='block mx-auto font-bold text-2xl' />Echanger</span>
        </span>
        <span className='md:w-[calc(25%-12px)]  w-[calc(50%-12px)] p-2 border-1 hover:bg-slate-300 cursor-pointer flex items-center justify-center  border-[#236693]'>
            <span className='flex flex-col gap-1 text-[#236693]'><RiDeleteBinLine  className='block mx-auto font-bold text-2xl' />Supprimer</span>
        </span>
        
    </div>
      </>
    ))}
    </div>
  )
}

export default Mag