import React from 'react'
import { Link } from 'react-router-dom'
import i1 from '../../images/2011_Alfa_Romeo_Giulietta_Veloce_JTDm-2_2.0_Front.jpg'
import PropTypes from 'prop-types';
const Annonce = ({data}) => {
  return (
    <>
  
       {
     
          <>
           <Link to={`/annonce/${data?._id}`} className='shadow-lg relative w-full gap-2 mb-1  flex  '>
<div className='relative'>
<img src={data?.image_annonce[0]?.url} alt='' className='w-[220px] h-[120px] object-cover'/>
 <span className='absolute top-1 left-1 h-[30px] border-1  border-white w-[30px] flex items-center justify-center bg-[#1c5c89] text-white'>{data?.image_annonce?.length}</span>
</div>
<div className='flex flex-col w-full gap-1'>
<div className='flex flex-col gap-1  md:justify-between w-full '>
<span className='text-[#1c5c89] text-xs md:text-sm font-light mb-0'><span className='text-lg text-[#ff66009a] mb-0 font-bold'>New !</span> &nbsp; {data?.title}</span>
<span className='text-[#ff4400e9] md:hidden  mb-0  font-semibold'>{data?.prix} TND </span>
</div>
<span className='text-xs font-normal text-slate-400'>{data?.rubrique?.title} &nbsp; /&nbsp; {data?.rubrique?.parentID?.title}</span>
<span className='text-xs font-normal text-slate-400'>Annonces de &nbsp;{new Date(data?.createdAt).toLocaleDateString()}</span>
</div>
<span className='text-[#ff4400e9] hidden md:block absolute right-0 top-0  mb-0  font-semibold'>{data?.prix}TND </span>
</Link>
          </>
    
       }
    </>
  )
}
Annonce.propTypes = {
  // socket: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,

};
export default Annonce