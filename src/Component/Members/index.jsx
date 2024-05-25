import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
const Members = ({userConnected}) => {
  const{users,user} = useSelector(state=>state?.auth)
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
console.log(userConnected)
const [usersMapping,setUsersMapping] = useState([])
useEffect(()=>{
  if(isChecked){
    setUsersMapping(userConnected)
  }else{
    setUsersMapping(users)
  }
},[isChecked,users])

const calculateAge = (dateBirthday) => {
  if (dateBirthday) {
    const today = dayjs();
    const birthday = dayjs(dateBirthday);
    let age = today.year() - birthday.year();
    if (today.month() < birthday.month() || (today.month() === birthday.month() && today.date() < birthday.date())) {
      age--;
    }
    return age;
  }
  return null;
};
  return (
   <>
   
    <div className='bg-gradient-to-br from-slate-400 to-slate-300 md:w-[80%] p-3 w-full h-[max-content] mx-auto'>
    <form className=''>
            <div className='md:flex md:items-center w-full md:gap-1'>
               <div className="form-group md:w-[35%]">
               
                <input className="form-control rounded-lg text-xs p-2 md:h-11" type="text" required="" placeholder="Rechercher un Troqueur"/>
              </div>
           
         <div className='flex md:flex-row gap-2 md:w-1/2  md:mt-2 mt-1'>
         <div className="form-group  w-1/2">
               
               <input className="form-control rounded-lg text-xs p-2 md:h-11" type="text" required="" placeholder="code postal"/>
             </div>
             <select className="form-select w-1/2 p-1" id="inputGroupSelect01">
                        <option selected="">Genre</option>
                        <option value="1">Homme</option>
                        <option value="2">Femme</option>
                     
                      </select>
         </div>
             
        
              <button className='bg-[#1c5c89] p-2 md:1/5 md:w-1/4 w-full md:mt-3 mt-1 text-white rounded-lg'>RECHERCHER</button>
            </div>
                 <div className='mt-3 flex gap-2'>
             <div className="form-check ">
  <input className="form-check-input" type="checkbox" 
    checked={isChecked}
    onChange={handleCheckboxChange}
  id="flexCheckChecked"  />
  <label className="form-check-label text-xs" htmlFor="flexCheckChecked">
  EN LIGNE
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label text-xs" htmlFor="flexCheckChecked">
  AVEC ANNONCE(S)
  </label>
</div>
             </div>
             </form>
    </div>
    <div className='md:w-[80%] p-1  w-[75%] mt-5 h-[max-content] bg-transparent mx-auto'>
      <div className='flex md:flex-row flex-col md:justify-between  gap-2'>
        <div className='flex flex-col mt-1 gap-1 md:w-[70%] w-full'>
       {
        usersMapping?.length>0 && usersMapping?.filter((data) => data._id !== user?._id)
        ?.map((data)=>(
          <>
           <div className='w-[95%] mx-auto bg-white p-4 flex md:flex-row md:justify-between gap-2 flex-col rounded-lg h-[max-content]'>
  <div className='md:w-[25%] h-[100px] flex items-center justify-center flex-col mt-4'>
    <img className='rounded-lg w-[100px] h-[100px]' src={data?.picture[0]?.url} />
    <span className='text-center mt-2'>{ userConnected?.find((x) => x?._id === data?._id) ? <span className='text-green-500 text-xs font-bold '>En ligne</span> : <span className='text-red-500 text-xs font-bold '>Hors ligne</span> }</span>
  </div>
  <div className='md:w-[50%] flex flex-col items-start justify-center  w-full mt-2'>
    <h5 className='text-[#1c5c89] text-lg font-semibold items-start'>{data?.pseudo}</h5>
    <p className='mt-2 text-sm items-start'>Un homme de {calculateAge(data?.dateNaissance)} ans</p>
    <p className='mt-2 text-sm items-start'>{data?.address}</p>
  </div>
  <div className='md:w-[35%] w-full mt-2 flex justify-center items-center'>
    <Link  to={`/fiche/${data?._id}`} className='bg-[#1c5c89] text-white text-xs p-2 rounded-lg' >Voir son mag</Link>
  </div>
</div>
          </>
        ))
       }

            
       
        </div>
        <div className='md:w-[30%] w-full'>
<div className='bg-white w-[90%] mx-auto h-[max-content] mt-4 rounded-lg flex flex-col p-4 items-center gap-1'>
  <h6 className='text-[#ed4300] font-bold'>Joyeux anniversaire !</h6>
  <span className='text-[#1c5c89] font-bold'>Jhonny54</span>
  <img src='https://www.france-troc.com//ImgUsers/avatars/44.gif' />
  <span className='text-[#1c5c89] font-light text-sm'>54 ans</span>
  <span className='text-[#6e6f70ce] font-semibold text-base text-center mt-3'>C'est leur anniv aujourd'hui !</span>
</div>
        </div>
      </div>
     
    </div>
   </>
  )
}
Members.propTypes = {
  // socket: PropTypes.object.isRequired,
  userConnected: PropTypes.func.isRequired,

};

export default Members