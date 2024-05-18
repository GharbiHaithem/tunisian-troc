import React, { useEffect, useRef, useState } from 'react'
import * as yup from 'yup'
import{useFormik} from 'formik'
import { createpCat, getCat } from '../../features/categorySlice'
import { useDispatch, useSelector } from 'react-redux'

const CreateCategory = () => {
  let schemaCat = yup.object().shape({
    title:yup.string().required('title category is required')
})
const dispatch = useDispatch()
const[catId,setCatId] = useState(null)
const formik = useFormik({
  
initialValues:{
    title:  ''
},
validationSchema:schemaCat,
onSubmit:(values)=>{
  
    const data = {parentID:catId,title:values.title}
    console.log(data)

      dispatch(createpCat(data))
   
   formik.resetForm()
}}) 

useEffect(()=>{
dispatch(getCat())
},[dispatch])

const {categories} = useSelector(state=>state?.cat)
const catRef = useRef(null);

useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event.target)
      if (catRef.current && !catRef.current.contains(event.target) && event.target.tagName !== 'INPUT'  && event.target.tagName !== 'BUTTON') {
            setCatId(null);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);


  return (
<div className='w-[80%] mx-auto h-[100vh]'>
<div className=' flex justify-center'>
     <form className='w-1/2'   onSubmit={formik.handleSubmit}>
    <div className="form-group mt-3">
       <label className="col-form-label font-bold text-xs md:text-lg text-white">Titre categorie:</label>
       <input className="form-control rounded-lg text-xs p-2 md:h-11" onChange={formik.handleChange('title')} value={formik.values.title} type="text"  placeholder="nom category"/>
     </div>
    
    
    
  
     <button type='submit' className='bg-[#ff6600] p-2 w-full mt-3 text-white rounded-lg'>Ajouter</button>
    </form>

 
   </div>
      <div className='mt-4  flex gap-3 flex-wrap' ref={catRef}>
      {categories&& categories?.map((cat,index)=>(
    <>
   
        <div  onClick={()=>setCatId(cat?._id)} className={`cursor-pointer ${cat?._id ===catId ? 'text-blue-700 bg-white' : 'text-white bg-blue-700'} md:w-[calc(25%-12px)] flex items-center justify-center  font-medium text-lg  w-[calc(50%-12px)] border-dotted border-2 border-x-slate-400 p-1`} key={index}>
        <div className='flex flex-col'>
        <span>{cat?.title}</span>
        {cat?.children?.length>0 && cat?.children?.map((child)=>(
<> <div className='flex flex-col mx-4'>{child?.title}</div></>
      ))  }
       
        </div>
          
        </div>
      
     
    </>
      ))}
        </div>
</div>
  )
}

export default CreateCategory