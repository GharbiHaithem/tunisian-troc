import React from 'react'
import { FaUser } from "react-icons/fa";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <div className='w-screen md:w-[80%] p-4 mx-auto mt-9 bg-white h-[max-content]'>
       <div className='flex items-center gap-2 text-[#1c5c89]'>
       <FaUser   style={{fontSize:'30px'}}/>
       <h5 className='font-semibold  text-lg'>Modification de mes informations personnelles</h5>
       </div>
       <div className='mt-4 flex  flex-col  gap-5 md:flex-row '>
          <div className='md:w-[35%] w-full '>
           <div className='flex flex-col w-full gap-3'>
          <div className='flex  flex-row justify-between'>
           
            <h6 className=' text-[#1c5c89]'>Mon pseudo :<span className='text-[#ef591e] font-semibold'>gharbouch</span></h6>
            <Link to={'/member/fiche'} className='text-blue-600 font-semibold underline'>Voir Ma Fiche</Link>
          </div>
                <div className='w-full bg-white rounded-lg flex items-center justify-center shadow-xl h-[200px]'>
                    <span className='flex  w-[120px] h-[120px] rounded-full  items-center justify-center border-5 text-4xl text-slate-500 font-extrabold border-slate-500'>GH</span>
                </div>
           </div>
          </div>
          <div className='md:w-[65%] w-full mx-auto'>
          <form className='w-full'>
          
          <div className="form-group  mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Mot de passe</label>
                <input className="form-control bg-slate-100 rounded-lg text-xs p-3" type="password" required="" placeholder="***********"/>
              </div>
          <div className="form-group mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Confirmation Mot de passe</label>
                <input className="form-control rounded-lg  bg-slate-100 text-xs p-3" type="password" required="" placeholder="***********"/>
              </div>
       
              <div className="form-group mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Email</label>
                <input className="form-control rounded-lg  bg-slate-100 text-xs p-3" type="email" required="" placeholder="Test@gmail.com"/>
              </div>
              <div className="form-group mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Code postale</label>
                <input className="form-control rounded-lg  bg-slate-100 text-xs p-3" type="password" required="" placeholder="Ex : 5010"/>
              </div>
              <div className="form-group mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Ville</label>
                <input className="form-control rounded-lg text-xs p-3" type="text" disabled required="" placeholder="Ville ..."/>
              </div>
            <div>
            <LocalizationProvider sty dateAdapter={AdapterDayjs}>
      <DatePicker  className='w-full  bg-slate-100' />
    </LocalizationProvider> 
            </div>
            <div className="form-group mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Ma description</label>
                <textarea   className='w-full outline-none bg-slate-200 border-b border-slate-200  h-[100px]' />
             </div>
              <button className='bg-[#ff6600] p-2 w-full   md:w-1/3 mt-3  text-white rounded-lg'>Enregistrez</button>
             </form>
          </div>
       </div>
    </div>
  )
}

export default Info