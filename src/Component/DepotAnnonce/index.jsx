import React, { useEffect, useState } from 'react'
import { MdCategory } from "react-icons/md";
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCat } from '../../features/categorySlice';
import * as yup from 'yup'
import{useFormik} from 'formik'
import { createannonce, deleteImageAnnonce, getannoncesbyid, updateAnnonce } from '../../features/annonceSlice';
import { deleteImg, resetState, upload } from '../../features/uploadSlice';
import { RiDeleteBin6Line } from "react-icons/ri";
import i1 from '../../images/giphy.gif'
import { useParams } from 'react-router';
import { CgBmw } from "react-icons/cg";
import { BiSolidColor } from "react-icons/bi";
import { SiVitess } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";
import { PiInfoBold } from "react-icons/pi";
import { SiYamahamotorcorporation } from "react-icons/si";

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
        rubrique: "",
        title: '',
        description: "",
        telephone: "",
        prix: "",
        annee_fabrication: '',
        image_annonce: [{}],
        rubriques_fav: [],
        proposition: "étudier toute proposition\n",
        caracteristique_details:{
          constructeur:"",
          model:"",
          kilometrage:"",
          carburant:"",
          couleur:"",
          boitevitesse:"",
          cylindre:"",
          type:"",
          nbProprietairePrecedent:"",
       
        }
      },
      enableReinitialize: true,
      validationSchema: annonceSchema,
      onSubmit: (values) => {
        if(id !==undefined){
          const data={
            id:id,
            xdata:values
          }
          dispatch(updateAnnonce(data))
       
          setTimeout(() => { dispatch(resetState()) }, 8000);
          setImages([]);
        
        }else{
          dispatch(createannonce(values));
          formik.resetForm();
          setTimeout(() => { dispatch(resetState()) }, 8000);
          setImages([]);
        } 
        }
    
    });
  
    useEffect(() => {
      if (id && annonces.length > 0) {
        const annonce = annonces[0];
        formik.setValues({
          rubrique: annonce.rubrique?._id || "",
          title: annonce.title || '',
          description: annonce.description || "",
          telephone: annonce.telephone || "",
          prix: annonce.prix || "",
          annee_fabrication: annonce.annee_fabrication || '',
          image_annonce: annonce.image_annonce || [{}],
          rubriques_fav: annonce.rubriques_fav || [],
          proposition: annonce.proposition || "étudier toute proposition\n",
          caracteristique_details:{
            constructeur:annonce.caracteristique_details&&annonce.caracteristique_details.constructeur || "",
            model:annonce.caracteristique_details&&annonce.caracteristique_details.model || "",
            kilometrage:annonce.caracteristique_details&&annonce.caracteristique_details.kilometrage ||"",
            carburant:annonce.caracteristique_details&&annonce.caracteristique_details.carburant ||"",
            couleur:annonce.caracteristique_details&&annonce.caracteristique_details.couleur || "",
            boitevitesse:annonce.caracteristique_details&&annonce.caracteristique_details.boitevitesse || "",
            cylindre:annonce.caracteristique_details&&annonce.caracteristique_details.cylindre ||"",
            type:annonce.caracteristique_details&&annonce.caracteristique_details.type || "",
            nbProprietairePrecedent:annonce.caracteristique_details&&annonce.caracteristique_details.nbProprietairePrecedent || "",
         
          }
        });
      }
    }, [id, annonces]);
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

const[catState,setCatState] = useState(null)
useEffect(()=>{
if(formik.values.rubrique){
  categories&& categories?.filter((cat)=>{
    if(cat?.title==="VEHICULES"){
      cat?.children?.map((child)=>child?._id ===formik.values.rubrique  && setCatState(child.title))
    }
  }) 
}
},[categories,formik.values.rubrique])


 
console.log(catState)
const[data,setData] =useState({})
console.log(data)
useEffect(()=>{
  if(Object.keys(data).length>0){
    dispatch(deleteImageAnnonce(data))
  }
},[dispatch,data])
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
           {catState&& catState==="Voitures" || catState==="Motos"  &&  <div  className="py-4 border-slate-500 border-t-2 mt-4">
              <h6 className='text-[#1c5c89] font-semibold'>Les caractéristiques détaillées</h6>
             <div className="form-group mt-1">
                <label className="col-form-label font-bold text-xs md:text-lg">Constructeur</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11 bg-slate-200" type="text" name='constructeur' value={formik.values.caracteristique_details.constructeur} onChange={formik.handleChange('caracteristique_details.constructeur')} placeholder="constructeur ... ex: FIAT , PEUGEOT , BMW"/>
              </div>
           {catState && catState==="Voitures" && <div className="form-group mt-1">
                <label className="col-form-label font-bold text-xs md:text-lg">Model</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11 bg-slate-200" type="text" name='model' value={formik.values.caracteristique_details.model} onChange={formik.handleChange('caracteristique_details.model')} placeholder="Model"/>
              </div>} 
              <div className="form-group mt-1">
                <label className="col-form-label font-bold text-xs md:text-lg">Kilométrage</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11 bg-slate-200" type="number" name='kilometrage' value={formik.values.caracteristique_details.kilometrage} onChange={formik.handleChange('caracteristique_details.kilometrage')} placeholder="kilometrage"/>
                <label className="col-form-label font-light text-xs md:text-sm"><span className='text-[#1c5c89] text-lg font-bold'>km</span> Pas de virgules, ni de lettres</label>
              </div>
              <div className="input-group  mt-3  w-full ">
                      <label className="input-group-text bg-[#1c5c89] " htmlFor="inputGroupSelect01">
                          <SlEnergy  className='text-white font-bold text-xl' />
                      </label>
                      <select  onChange={formik.handleChange('caracteristique_details.carburant')} name='carburant' value={formik.values.caracteristique_details.carburant} className="form-select p-1 bg-slate-200" id="inputGroupSelect01">
                        <option disabled >Carburrant</option>
                        <option   value=''>-------------------------------</option>
           
    <option   value='Essence'>Essence</option>      
   <option   value='Diesel'>Diesel</option>
     <option   value='BIO-Ethanol'>BIO-Ethanol</option>      
   <option   value='Hybride'>Hybride</option>
     <option   value='GPL'>GPL</option>      
   <option   value='Electrique'>Electrique</option>
     <option   value='Autre'>Autre</option>      
    


                      </select>
                    </div>
              <div className="input-group  mt-3  w-full ">
                      <label className="input-group-text bg-[#1c5c89] " htmlFor="inputGroupSelect01">
                          <BiSolidColor  className='text-white font-bold text-xl' />
                      </label>
                      <select  onChange={formik.handleChange('caracteristique_details.couleur')} name='couleur' value={formik.values.caracteristique_details.couleur} className="form-select p-1 bg-slate-200" id="inputGroupSelect01">
                        <option disabled >Couleur</option>
                        <option   value=''>-------------------------------</option>
           

    
 
  <option   value='Beige'>Beige</option>
  <option   value='Argent'>Argent</option>
  
  <option   value='Argent'>Blanche</option>
  <option   value='Argent'>Gris Claire</option> 
   <option   value='Argent'>Bordeaux</option>      

  <option   value='Argent'>Bleue</option> 
   <option   value='Argent'>Doréé</option>      

  <option   value='Argent'>Jaune</option> 
   <option   value='Argent'>Gris foncée</option>      
   <option   value='Argent'>Violette</option>  <option   value='Argent'>Noir</option>      
   <option   value='Argent'>Marron</option>  <option   value='Argent'>Rouge</option>      
   <option   value='Argent'>Orange</option>  <option   value='Argent'>Argent</option>      
   <option   value='Argent'>Turquoise</option>  <option   value='Argent'>Verte</option>      
  <option   value='Argent'>Autre</option>        




                        
           
                       
                     
                      </select>
                    </div>
                    {catState&& catState==="Voitures" &&    <div className="input-group  mt-3  w-full ">
                      <label className="input-group-text bg-[#1c5c89] " htmlFor="inputGroupSelect01">
                          <SiVitess  className='text-white font-bold text-xl' />
                      </label>
                      <select  onChange={formik.handleChange('caracteristique_details.boitevitesse')} name='boitevitesse' value={formik.values.caracteristique_details.boitevitesse} className="form-select p-1 bg-slate-200" id="inputGroupSelect01">
                        <option disabled >Boite vitesse</option>
                        <option   value=''>-------------------------------</option>
           
    <option   value='Essence'>Manuelle</option>      
   <option   value='Diesel'>Automatique</option>
     <option   value='BIO-Ethanol'>semi-Automatique</option>      
  
    


                      </select>
                    </div>}
                 {catState&& catState==="Motos" &&  <div className="form-group mt-1">
                <label className="col-form-label font-bold text-xs md:text-lg">Cylindrée</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11 bg-slate-200" type="number" name='kilometrage' value={formik.values.caracteristique_details.cylindre} onChange={formik.handleChange('caracteristique_details.cylindre')} placeholder="cylindre"/>
                <label className="col-form-label font-light text-xs md:text-sm"> Pas de virgules, ni de lettres</label>
              </div>}
             {catState&& catState==="Motos" &&  <div className="input-group  mt-3  w-full ">
                      <label className="input-group-text bg-[#1c5c89] " htmlFor="inputGroupSelect01">
                          <SiYamahamotorcorporation  className='text-white font-bold text-xl' />
                      </label>
                      <select  onChange={formik.handleChange('caracteristique_details.type')} name='type' value={formik.values.caracteristique_details.type} className="form-select p-1 bg-slate-200" id="inputGroupSelect01">
                        <option disabled >Type</option>
                        <option   value=''>-------------------------------</option>
           
    <option   value='cours'>Cours</option>      
   <option   value='custom/cruiser'>Custom/cruiser</option>
     <option   value='enduro/cross'>Enduro/Cross</option>      
   <option   value='grand/tourisme'>Grand tourisme</option>
     <option   value='Mobyllette'>Mobyllette</option>      
   <option   value='quads/ATV'>Quads/ATV</option>
     <option   value='roadster'>Roadster</option>      
    
     <option   value='routiere'>Routiére</option>      
     <option   value='scooteur'>Scooteur</option>      
     <option   value='sport'>Sport</option>      
     <option   value='sport-GT'>Sport GT</option>      
     <option   value='TRIAL'>TRIAL</option>      
    
                      </select>
                    </div>}
                  {catState&& catState==="Motos" &&  <div className="input-group  mt-3  w-full ">
                      <label className="input-group-text bg-[#1c5c89] " htmlFor="inputGroupSelect01">
                          <PiInfoBold  className='text-white font-bold text-xl' />
                      </label>
                      <select  onChange={formik.handleChange('caracteristique_details.nbProprietairePrecedent')} name='nbProprietairePrecedent' value={formik.values.caracteristique_details.nbProprietairePrecedent} className="form-select p-1 bg-slate-200" id="inputGroupSelect01">
                        <option disabled >Nombre de propriétaires précédents :</option>
                        <option   value=''>-------------------------------</option>
           
    <option   value='2'>Deusiéme main</option>      
   <option   value='1'>Premiére main</option>
     <option   value='3'>plus de 2</option>      
       
    


                      </select>
                    </div>} 
             </div>}
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
             
             id!==undefined ?  setData({public_id:image?.public_id,annonceId:id})  : dispatch(deleteImg(image.public_id));
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
<button type='submit' disabled={isLoading ? true : false} className={` ${isLoading ? ' bg-slate-400' : 'bg-[#ed4300]'}  p-2 text-white mt-4 rounded-lg`}>{id!==undefined ? 'Modifier Annonce' : 'Enregistrer mon annonce'}</button>
        </form>
     
    </div>
  )
}

export default DepotAnnonce