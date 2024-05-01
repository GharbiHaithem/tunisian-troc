import { data } from '../../data';
import React, { useEffect, useState } from 'react'
import { PiGenderTransgenderThin } from "react-icons/pi";

const Register = () => {
   
  const[adress,setAdress] = useState()
     const[codepostal,setCodePostal] = useState('')
     const [region, setRegion] = useState('');
     const [poste, setPoste] = useState('');
     const intNumber = parseInt(codepostal);
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
     
  return (
    <div className=' w-[100%] md:w-[80%] mx-auto bg-white p-5 mt-4 md:rounded-t-lg  '>
       
          <form className='w-full'>
          <h6 className='md:text-lg md:my-2 mb-2 font-semibold md:font-extrabold text-[#1c5c89]'>Bienvenue sur Tunisie-Echange</h6>
          <h5>Pas encore troqueur ? Rejoignez-nous !</h5>
          <h4 className='text-[#ef591e]  font-bold text-lg mt-3'>C'est 100% Gratuit !</h4>
             <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs">Choisissez un pseudo</label>
                <input className="form-control rounded-lg text-xs p-3" type="email" required="" placeholder="Jhon_Doe... "/>
              </div>
              <div className="form-group mt-3 mb-3">
                <label className="col-form-label font-bold  text-xs">Mot de passe</label>
                <input className="form-control rounded-lg text-xs p-3" type="password" required="" placeholder="***********"/>
              </div>
              <div className="form-group mt-3 mb-3">
                <label className="col-form-label font-bold  text-xs">Email</label>
                <input className="form-control rounded-lg text-xs p-3" type="email" required="" placeholder="Test@gmail.com"/>
              </div>
              <div className="input-group">
                      <label className="input-group-text bg-[#ef591e] " htmlFor="inputGroupSelect01">
                      <PiGenderTransgenderThin className='text-white font-bold text-4xl' />
                      </label>
                      <select className="form-select p-3" id="inputGroupSelect01">
                        <option selected="">Select Your sexe</option>
                        <option value="1">Homme</option>
                        <option value="2">Femme</option>
                     
                      </select>
                    </div>
                    <div className="form-group mt-3 mb-3">
                <label className="col-form-label font-bold  text-xs">code postal</label>
                <input onChange={(e)=>setCodePostal(e.target.value)} value={codepostal} className="form-control rounded-lg text-xs p-3" type="text" required="" placeholder="code postal"/>
              </div>
              <p>{region ? <span  className='p-3 mb-3 '>{ region + " "+poste} </span> : codepostal?.length>0 && region.length===0 ? <span className=' bg-red-700   p-1 mb-3 opacity-50 text-white'>*&nbsp;verifier le code postal</span>: null}</p>
              <button className='bg-[#ff6600] p-2 w-full  md:w-1/4 mt-3  text-white rounded-lg'>Valider Votre Inscription</button>
             </form>
    </div>
  )
}

export default Register