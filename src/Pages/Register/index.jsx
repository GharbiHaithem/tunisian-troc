import { data } from '../../data';
import React, { useEffect, useState } from 'react'
import { PiGenderTransgenderThin } from "react-icons/pi";
import * as yup from 'yup'
import{useFormik} from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { registreUser } from '../../features/AuthSlices';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
const Register = () => {
   
  const[adress,setAdress] = useState()
     const[codepostal,setCodePostal] = useState('')
     const [region, setRegion] = useState('');
     const [poste, setPoste] = useState('');
     const intNumber = parseInt(codepostal);
     const dispatch = useDispatch()
     console.log(intNumber)
     useEffect(()=>{
      const selectedData = data.find((item) => item.code === parseInt(codepostal));
      if (selectedData) {
        setRegion(selectedData.region);
        setPoste(selectedData.poste);
      } else {
        // Réinitialiser region et poste si aucune correspondance trouvée
        setRegion('');
        setPoste('');
      }
    }
      ,[codepostal,intNumber])
   
      console.log(region,poste)
      let signupSchema = yup.object().shape({
        pseudo:yup.string().required('pseudo is required'),
      
         email:yup.string().email('format invalid email').required('email is required'),
    
        password:yup.string().required('password is required').min(4).max(20),
        anniverssaire:yup.date().required('date anniverssaire et required')
        
        
      }) 
   
      const formik = useFormik({
        initialValues: {
          pseudo: "",
          email: '',
     
          password: "",
          address: "",
          sex: "",
          code:"",
          anniverssaire:""
        },
        validationSchema: signupSchema,
        onSubmit: (values) => {
          console.log("Form submitted with values:", values);
          dispatch(registreUser(values));
          formik.resetForm();
        }
      });
      useEffect(()=>{
        if(region && poste){
          formik.values.address = region + " "+poste 
          formik.values.code = codepostal
        }
       },[region,poste, formik.values])
       const {message,isError,isSuccess} = useSelector(state=>state?.auth)
       const navigate = useNavigate() 
  //  useEffect(()=>{
  //   if(isSuccess){
  // navigate('/login')
  //   }
  //  },[isSuccess,navigate])
  return (
    <div className=' w-[100%] md:w-[80%] mx-auto bg-white p-5 mt-4 md:rounded-t-lg  '>
       
          <form className='w-full'   onSubmit={formik.handleSubmit}>
          <h6 className='md:text-lg md:my-2 mb-2 font-semibold md:font-extrabold text-[#1c5c89]'>Bienvenue sur Tunisie-Echange</h6>
          <h5>Pas encore troqueur ? Rejoignez-nous !</h5>
          <h4 className='text-[#ef591e]  font-bold text-lg mt-3'>C'est 100% Gratuit !</h4>
             <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs">Choisissez un pseudo</label>
                <input className="form-control rounded-lg text-xs p-3" type="text"  name='pseudo' value={formik.values.pseudo}  onChange={formik.handleChange('pseudo')}  placeholder="Jhon_Doe... "/>
                {formik.touched.pseudo && formik.errors.pseudo && <span className="mt-2 p-[10px] inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{formik.errors.pseudo}</span>}
              </div>
              <div className="form-group mt-3 mb-3">
                <label className="col-form-label font-bold  text-xs">Mot de passe</label>
                <input className="form-control rounded-lg text-xs p-3" type="password" name='password' value={formik.values.password}  onChange={formik.handleChange('password')}   placeholder="***********"/>
                {formik.touched.password && formik.errors.password && <span className="mt-2 p-[10px] inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{formik.errors.password}</span>}
              </div>
              <div className="form-group mt-3 mb-3">
                <label className="col-form-label font-bold  text-xs">Email</label>
                <input className="form-control rounded-lg text-xs p-3" type="email" name='email' value={formik.values.email}  onChange={formik.handleChange('email')} placeholder="Test@gmail.com"/>
                {formik.touched.email && formik.errors.email && <span className="mt-2 p-[10px] inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{formik.errors.email}</span>}
              </div>
              <div className="input-group">
                      <label className="input-group-text bg-[#ef591e] " htmlFor="inputGroupSelect01">
                      <PiGenderTransgenderThin className='text-white font-bold text-4xl' />
                      </label>
                      <select onChange={formik.handleChange} name='sex' value={formik.values.sex} className="form-select p-3" id="inputGroupSelect01">
                        <option disabled selected="">Select Your sexe</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                     
                      </select>
                      {formik.touched.sex && formik.errors.sex && <span className="mt-2 p-[10px] inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{formik.errors.sex}</span>}
                    </div>
                    <div className="form-group mt-3 mb-3">
                <label className="col-form-label font-bold  text-xs">code postal</label>
                <input onChange={(e)=>setCodePostal(e.target.value)} value={codepostal} className="form-control rounded-lg text-xs p-3" type="text" required="" placeholder="code postal"/>
              </div>
              <p>{region ? <span  className='p-3 mb-3 '>{ region + " "+poste} </span> : codepostal?.length>0 && region.length===0 ? <span className=' bg-red-700   p-1 mb-3 opacity-50 text-white'>*&nbsp;verifier le code postal</span>: null}</p>
              <div>
             
              <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    value={formik.values.anniverssaire ? (formik.values.anniverssaire) : null}
    onChange={(newValue) => formik.setFieldValue('anniverssaire', newValue)}
    name='anniverssaire'
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
            </div>
              <button type='submit' className='bg-[#ff6600] p-2 w-full  md:w-1/4 mt-3  text-white rounded-lg'>Valider Votre Inscription</button>
             </form>
    </div>
  )
}

export default Register