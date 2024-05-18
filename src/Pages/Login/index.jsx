import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PropType from 'prop-types'
import * as yup from 'yup'
import{useFormik} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../features/AuthSlices'
const Login = ({openMenu,setOpenMenu,isMediumScreen}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const{isLogin} = useSelector(state=>state?.auth)
  let loginSchema = yup.object().shape({
   
  
     email:yup.string().email('format invalid email').required('email is required'),

    password:yup.string().required('password is required').min(4).max(20),
  
    
    
  }) 

  const formik = useFormik({
    initialValues: {
    
      email: '',
 
      password: "",
    
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      dispatch(loginUser(values));
      formik.resetForm();
    }
  });
  useEffect(()=>{
    if(isLogin){
      navigate('/')
    }
  },[isLogin,navigate])
  return (
 
   
  
     <div className={`flex flex-col md:w-[80%] ${openMenu && !isMediumScreen  ? 'translate-x-[255px]'  : ''} mx-auto border-1 border-slate-200 rounded-lg p-5 bg-white md:flex-row md:justify-center md:mt-[50px] w-screen gap-4 h-[max-content]`}>
    <div className='h-[max-content] w-[90%] mx-auto bg-white rounded-lg mt-4 p-3 shadow-xl'>
     <h6 className='text-xs font-extrabold text-[#1c5c89]  md:text-xl'>Connexion à votre profil France-Troc</h6>
   
             <form  onSubmit={formik.handleSubmit}>
             <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Votre Pseudo ou Email :</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11" type="email"  name='email' value={formik.values.email}  onChange={formik.handleChange('email')} placeholder="Test@gmail.com"/>
                {formik.touched.email && formik.errors.email && <span className="mt-2 p-[10px] inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{formik.errors.email}</span>}
              </div>
              <div className="form-group mt-3 mb-3">
                <label className="col-form-label font-bold  text-xs  md:text-lg">Votre mot de passe  :</label>
                <input className="form-control rounded-lg text-xs p-2  md:h-11" type="password"  name='password' value={formik.values.password}  onChange={formik.handleChange('password')} placeholder="***********"/>
                {formik.touched.password && formik.errors.password && <span className="mt-2 p-[10px] inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{formik.errors.password}</span>}
              </div>
              <span className='text-[#1c5c89] text-xs mt-5 md:text-lg'>Vous avez oublié votre mot de passe ?</span>
              <button className='bg-[#ff6600] p-2 w-full mt-3 text-white rounded-lg'>Se connecter</button>
             </form>
    </div>
    <div className='bg-[#f7f7f7] h-[max-content]  md:my-6 w-[90%] shadow-xl rounded-lg mx-auto px-3 py-3'>
        <h6  className='text-xs font-extrabold text-[#1c5c89] md:text-xl md:mb-8'>Nouvel utilisateur ?</h6>
        <p className='mt-2 leading-5 mb-3 text-xs font-normal text-slate-600 md:text-xl md:mb-8'>Si vous ne possédez pas encore de compte France-Troc , créez-le en quelques clics et commencez à troquer !</p>
      <Link to={'/register'} className='bg-[#1c5c89] p-2 text-white mt-3 rounded-lg w-full md:p-4'>Devenir Troqueur</Link>
    </div>
</div>



  )
}
Login.prototype={
  setOpenMenu:PropType.func.isRequired,
  openMenu:PropType.bool.isRequired,
  isMediumScreen:PropType.bool.isRequired,
}
export default Login