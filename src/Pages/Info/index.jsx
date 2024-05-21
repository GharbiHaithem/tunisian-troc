import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';
import { PiUploadThin } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup'
import{useFormik} from 'formik'
import { calcAgeUser, updatesimpleuser } from '../../features/AuthSlices';
import { upload } from '../../features/uploadSlice';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
const Info = () => {
  const[hovered,setHovered] =useState(false)
  const [images, setImages] = useState([]);
  const{user} = useSelector(state=>state?.auth)
  const customer = JSON.parse(localStorage.getItem('customer'));

  let  infoUserSchema = yup.object().shape({
    pseudo:yup.string().required('pseudo is required'),
    email:yup.string().email('format invalid email').required('email is required'),
    
    
    
  }) 
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      pseudo: user?.pseudo || "",
      email:user?.email || '',
  picture:user?.picture[0]?.url || [{}],
      description:user?.description || "",
      code:user?.code || "",
      anniverssaire: user?.anniverssaire ? (user?.anniverssaire) : null,
     
    },
    validationSchema: infoUserSchema,
    enableReinitialize:true,
    onSubmit: (values) => {
     
      console.log("Form submitted with values:", values);
      dispatch(updatesimpleuser(values))
   
    
       
       
    }
  })

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setImages(selectedFiles);
  
  
  };
  console.log(images)
  useEffect(()=>{
    if(images ){
      dispatch(upload(images))
   
    }
  },[images,dispatch])

  const uploadstate = useSelector(state=>state?.upload)
  useEffect(()=>{
    if(images){
     formik.values.picture=uploadstate.images[0]
   
    
    }
   },[images, formik.values,uploadstate])
   const [age, setAge] = useState(null);

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
 
   useEffect(() => {
     if (formik.values.anniverssaire) {
       setAge(calculateAge(formik.values.anniverssaire));
     }
   }, [formik.values.anniverssaire]);
  
   console.log(age)
   
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
           
            <h6 className=' text-[#1c5c89]'>Mon pseudo :<span className='text-[#ef591e] font-semibold'>{user?.pseudo}</span></h6>
            <Link  onClick={()=>dispatch(calcAgeUser(age))}  to={'/member/fiche'} className='text-blue-600 font-semibold underline'>Voir Ma Fiche</Link>
          </div>
                <div className='w-full bg-white  rounded-lg flex  items-center justify-center shadow-xl h-[200px]'>
                    <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} className='  flex relative overflow-hidden w-[120px] h-[120px] rounded-full  items-center justify-center border-5 text-4xl text-slate-500 font-extrabold border-slate-500'>
                    <img className='w-full h-full object-cover' src={images.length > 0 ? URL.createObjectURL(images[0]) : user?.picture[0]?.url} />

                  {hovered && <label className="custom-file-uploads absolute inset-0 flex items-center justify-center">
    <input type="file"  onChange={handleFileChange} placeholder="Année de fabrication" />
    <PiUploadThin className='font-extrabold text-4xl' />
  </label>}
                    </div>
                   
                </div>
           </div>
          </div>
          <div className='md:w-[65%] w-full mx-auto'>
          <form className='w-full' onSubmit={formik.handleSubmit} >
          
          <div className="form-group  mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Mot de passe</label>
                <input className="form-control bg-slate-100 rounded-lg text-xs p-3" type="password"  placeholder="***********"/>
              </div>
          <div className="form-group mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Confirmation Mot de passe</label>
                <input className="form-control rounded-lg  bg-slate-100 text-xs p-3" type="password" required="" placeholder="***********"/>
              </div>
       
              <div className="form-group mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Email</label>
                <input className="form-control rounded-lg  bg-slate-100 text-xs p-3" name='email' value={formik.values.email}  onChange={formik.handleChange('email')} type="email" required="" placeholder="Test@gmail.com"/>
              </div>
              <div className="form-group mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Code postale</label>
                <input className="form-control rounded-lg  bg-slate-100 text-xs p-3"  name='code' onChange={formik.handleChange('code')} value={formik.values.code}       type="number" required="" placeholder="Ex : 5010"/>
              </div>
              <div className="form-group mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Ville</label>
                <input className="form-control rounded-lg text-xs p-3" type="text" value={user?.address} disabled required="" placeholder="Ville ..."/>
              </div>
            <div className='mt-2'>
            {new Date(user?.anniverssaire).toLocaleDateString()}
            </div>
            <div className="form-group mt-1 mb-1">
                <label className="col-form-label font-bold  text-xs">Ma description</label>
                <textarea name='description' onChange={formik.handleChange('description')} value={formik.values.description}   className='w-full outline-none bg-slate-200 border-b border-slate-200 p-2 text-sm h-[100px]' />
             </div>
              <button className='bg-[#ff6600] p-2 w-full   md:w-1/3 mt-3  text-white rounded-lg'>Enregistrez</button>
             </form>
          </div>
       </div>
    
    </div>
  )
}

export default Info