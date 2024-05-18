import React, { useEffect, useState } from 'react'
import { MdCategory } from "react-icons/md";
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCat } from '../../features/categorySlice';
import * as yup from 'yup'
import{useFormik} from 'formik'
import { createannonce, getannoncesbyid } from '../../features/annonceSlice';
import { deleteImg, resetState, upload } from '../../features/uploadSlice';
import { RiDeleteBin6Line } from "react-icons/ri";
import i1 from '../../images/giphy.gif'
import { useParams } from 'react-router';
const DepotAnnonce = () => {
  const dispatch= useDispatch()
  const{ id} =useParams()
  useEffect(()=>{
  
     
      dispatch(getannoncesbyid(id))
     dispatch(getCat())
    
  },[id,dispatch])
  const {isLoading}= useSelector(state=>state?.upload)
  useEffect(()=>{
 
    },[dispatch])
  
    const [images, setImages] = useState([]);
    console.log(images)
    const handleFileChange = (event) => {
      const selectedFiles = Array.from(event.target.files);
      setImages(selectedFiles);
    
    
    };
    useEffect(()=>{
      if(images?.length>0 ){
        dispatch(upload(images))
     
      }
    },[images,dispatch])
    let  annonceSchema = yup.object().shape({
      title:yup.string().required('pseudo is required'),
    
       
    
       prix:yup.number().required('prix is required'),
    
      
      
    }) 
    const{annonces}= useSelector(state=>state?.annonce)
    const formik = useFormik({
      initialValues: {
        rubrique:id!==undefined ? annonces[0]?.rubrique?._id : annonces[0]?.rubrique?._id ||  "",
        title:id!==undefined ? annonces[0]?.title : annonces[0]?.title || '',
    
        description:id!==undefined ? annonces[0]?.description : annonces[0]?.description || "",
        telephone:id!==undefined ? annonces[0]?.telephone : annonces[0]?.telephone || "",
        prix:id!==undefined ? annonces[0]?.prix : annonces[0]?.prix || "",
        annee_fabrication:id!==undefined ? annonces[0]?.annee_fabrication : annonces[0]?.annee_fabrication ||'',
        image_annonce: id!==undefined ? annonces[0]?.image_annonce :  annonces[0]?.image_annonce ||[{}],
        rubriques_fav:id!==undefined ? annonces[0]?.rubriques_fav :  annonces[0]?.rubriques_fav ||[],
        proposition:id!==undefined ? annonces[0]?.proposition :"étudier toute proposition\n" || annonces[0]?.proposition
      },
      enableReinitialize:true,
      validationSchema: annonceSchema,
      onSubmit: (values) => {
       
        console.log("Form submitted with values:", values);
        dispatch(createannonce(values));
        formik.resetForm();
      
         setTimeout(()=>{ dispatch(resetState())},8000)
          setImages([])
         
      }
    });
    const {categories}= useSelector(state=>state?.cat)
    const uploadstate = useSelector(state=>state?.upload)
    useEffect(()=>{
     if(images){
      formik.values.image_annonce=uploadstate.images
     }
    },[images, formik.values,uploadstate])
    console.log(formik.values.image_annonce)
    const [hoveredIndex, setHoveredIndex] = useState();
    console.log(images)
    const handleCheckboxChange = (option) => {
      if (formik.values.rubriques_fav.includes(option)) {
        // Retirer l'option si elle est déjà sélectionnée
        formik.setValues((prevValues) => ({
          ...prevValues,
          rubriques_fav: prevValues.rubriques_fav.filter((opt) => opt !== option),
        }));
      } else {
        // Ajouter l'option si elle n'est pas encore sélectionnée
        formik.setValues((prevValues) => ({
          ...prevValues,
          rubriques_fav: [...prevValues.rubriques_fav, option],
        }));
      }
    };
    const handleChange = (e) => {
      // Concaténer "étudier toute proposition" avec un saut de ligne et la valeur saisie par l'utilisateur
   
      // Mettre à jour la valeur de la state texte
      formik.setValues((prev)=>({
        ...prev , 
        proposition: `${e.target.value}`
      }));
    };

const[stateMapping,setStateMapping]  = useState([])  
useEffect(()=>{
if(id !== undefined){
  setStateMapping(annonces[0]?.image_annonce)
}else{
  setStateMapping(uploadstate?.images )
}
},[id,uploadstate,annonces])
  return (
    
    <div className='md:w-[80%] mx-auto w-full h-[max-content] p-3 bg-white'>
      
  
        <h6 className='text-[#236693] font-medium '>{id===undefined ? 'Déposer une annonce sur tunisie-Echange' : 'Modifier mon annonce' }</h6>
        <h6 className={`text-[#ed4300] font-normal ${id!==undefined ? 'hidden' : 'block'} text-xs mt-1`}>C'est 100% Gratuit !</h6>
      
        <form className='mt-3'  onSubmit={formik.handleSubmit}>
        <div className="input-group  w-full ">
                      <label className="input-group-text bg-[#1c5c89] " htmlFor="inputGroupSelect01">
                      <MdCategory  className='text-white font-bold text-xl' />
                      </label>
                      <select  onChange={formik.handleChange('rubrique')} name='rubrique' value={formik.values.rubrique} className="form-select p-1 bg-slate-200" id="inputGroupSelect01">
                        <option  >Choissisez une categorie</option>
                       
           
{
  categories && categories?.map((c)=>(
    <>
     <option className='text-blue-600 text-sm font-medium'  disabled>-&nbsp;-{c?.title}-&nbsp;-</option>
     {c?.children?.length>0 && c?.children?.map((child)=>(
<>    <option   value={child?._id}>{  child?.title}</option></>
      ))  }              
       </>
  ))
}
                        
           
                       
                     
                      </select>
                    </div>
                    <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Titre du bien ou du service</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11  bg-slate-200" type="text" name='title' value={formik.values.title} onChange={formik.handleChange('title')} placeholder="Titre du bien ou du service"/>
              </div>
              <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Description détaillée</label>
                <textarea className="form-control rounded-lg  bg-slate-200 text-xs p-2 md:h-[max-content]"  type="text" name='description' value={formik.values.description} onChange={formik.handleChange('description')} placeholder="Description détaillée"/>
              </div>
              <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Téléphone</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11 bg-slate-200" type="text" name='telephone' value={formik.values.telephone} onChange={formik.handleChange('telephone')} placeholder="Téléphone"/>
              </div>
              <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Valeur à la vente</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11 bg-slate-200" type="text" name='prix' value={formik.values.prix} onChange={formik.handleChange('prix')} placeholder="Valeur à la vente"/>
              </div>
              <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Année de fabrication</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11 bg-slate-200" type="number" name='annee_fabrication' value={formik.values.annee_fabrication} onChange={formik.handleChange('annee_fabrication')} placeholder="Année de fabrication"/>
              </div>
              <div className="form-group mt-5 relative flex flex-col gap-3">
              <div className='flex flex-wrap w-full gap-2'>
              {isLoading ?  <img className='block mx-auto' src={i1}/> : stateMapping?.length > 0 && 
 
 stateMapping?.map((image, index) => (
    <div
      key={index}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className='overflow-hidden relative md:w-[calc(25%-8px)] w-[calc(50%-8px)]   h-[200px] rounded-lg'
    >
     
      <img
        className='w-full h-full object-cover'
        src={image?.url}
        alt={`Image ${index}`}
      />
      {hoveredIndex === index && (
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <RiDeleteBin6Line
            className='text-white text-2xl font-extrabold cursor-pointer'
            onClick={() => {
              alert(image.public_id);
              dispatch(deleteImg(image.public_id));
              images?.filter((i)=>i?.public_id!=image.public_id)
            }}
          />
        </div>
      )}
    </div>
  )) 

}
      </div>
              <span>Format JPG ou JPEG uniquement</span>
  <label className="custom-file-upload">
    <input type="file" onChange={handleFileChange} multiple placeholder="Année de fabrication" />
    Sélectionner une photo
  </label>
</div>
<div className='mt-3'>
    <p className='text-[#236693] font-medium '>Ce que vous souhaitez en échange :</p>
<div className='flex md:justify-between flex-col'>
<div>
<div className="form-check mt-2">
  <input className="form-check-input" 
   checked={formik.values.rubriques_fav&&formik.values.rubriques_fav.includes("VEHICULES")}
   onChange={() => handleCheckboxChange("VEHICULES")}
  type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="fleCheckDefault">
  VEHICULES
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"
  checked={formik.values.rubriques_fav&&formik.values.rubriques_fav.includes("MAISON")}
  onChange={() => handleCheckboxChange("MAISON")} />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  MAISON
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" 
    checked={formik.values.rubriques_fav&&formik.values.rubriques_fav.includes("EMPLOI_ET_SERVICES")}
    onChange={() => handleCheckboxChange("EMPLOI_ET_SERVICES")}
  value="" id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  EMPLOI ET SERVICES
  </label>
</div>
</div>
<div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox"
   checked={formik.values.rubriques_fav&&formik.values.rubriques_fav.includes("IMMOBILIER")}
   onChange={() => handleCheckboxChange("IMMOBILIER")}
  value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  IMMOBILIER
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox"
     checked={formik.values.rubriques_fav&&formik.values.rubriques_fav.includes("LOISIRS")}
     onChange={() => handleCheckboxChange("LOISIRS")}
  value="" id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  LOISIRS
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value=""
  checked={formik.values.rubriques_fav&&formik.values.rubriques_fav.includes("AUTRE")}
  onChange={() => handleCheckboxChange("AUTRE")}
  id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  AUTRE
  </label>
</div>
</div>
<div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox"
  
  checked={formik.values.rubriques_fav&&formik.values.rubriques_fav.includes("MULTIMEDIA")}
  onChange={() => handleCheckboxChange("MULTIMEDIA")}
  value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  MULTIMEDIA
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value=""
    checked={formik.values.rubriques_fav&&formik.values.rubriques_fav.includes(" MATERIEL_PROFESSIONNEL")}
    onChange={() => handleCheckboxChange(" MATERIEL_PROFESSIONNEL")}
   id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  MATERIEL PROFESSIONNEL
  </label>
</div>

</div>

</div>

</div>
<div>
  <h5>Décrivez ici ce que vous souhaitez en échange:</h5>
  <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Etudie toutes propositions</label>
                <textarea className="form-control rounded-lg  bg-slate-200 text-xs p-2 md:h-[55px]"  name='proposition' value={formik.values.proposition}  onChange={handleChange}  cols={8} type="text"  placeholder="Etudie toutes propositions"/>
              </div>
</div>
<button type='submit' disabled={isLoading ? true : false} className={` ${isLoading ? ' bg-slate-400' : 'bg-[#ed4300]'}  p-2 text-white mt-4 rounded-lg`}>Enregistrer mon annonce</button>
        </form>
     
    </div>
  )
}

export default DepotAnnonce