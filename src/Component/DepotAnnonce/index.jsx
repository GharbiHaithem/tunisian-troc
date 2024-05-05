import React from 'react'
import { MdCategory } from "react-icons/md";
import './style.css'
const DepotAnnonce = () => {
  return (
    <div className='md:w-[80%] mx-auto w-full h-[max-content] p-3 bg-white'>
        <h6 className='text-[#236693] font-medium '>Déposer une annonce sur tunisie-Echange</h6>
        <h6 className='text-[#ed4300] font-normal text-xs mt-1'>C'est 100% Gratuit !</h6>
        <form className='mt-3'>
        <div className="input-group md:w-1/3 w-full ">
                      <label className="input-group-text bg-[#1c5c89] " htmlFor="inputGroupSelect01">
                      <MdCategory  className='text-white font-bold text-xl' />
                      </label>
                      <select className="form-select p-1 bg-slate-200" id="inputGroupSelect01">
                        <option selected="">Choissisez une categorie</option>
                        <option value="1">Homme</option>
                        <option value="2">Femme</option>
                     
                      </select>
                    </div>
                    <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Titre du bien ou du service</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11  bg-slate-200" type="text" required="" placeholder="Titre du bien ou du service"/>
              </div>
              <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Description détaillée</label>
                <textarea className="form-control rounded-lg  bg-slate-200 text-xs p-2 md:h-[55px]" cols={8} type="text" required="" placeholder="Description détaillée"/>
              </div>
              <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Téléphone</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11 bg-slate-200" type="text" required="" placeholder="Téléphone"/>
              </div>
              <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Valeur à la vente</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11 bg-slate-200" type="text" required="" placeholder="Valeur à la vente"/>
              </div>
              <div className="form-group mt-3">
                <label className="col-form-label font-bold text-xs md:text-lg">Année de fabrication</label>
                <input className="form-control rounded-lg text-xs p-2 md:h-11 bg-slate-200" type="number" required="" placeholder="Année de fabrication"/>
              </div>
              <div className="form-group mt-5 relative flex flex-col gap-3">
              <span>Format JPG ou JPEG uniquement</span>
  <label className="custom-file-upload">
    <input type="file" required="" placeholder="Année de fabrication" />
    Sélectionner une photo
  </label>
</div>
<div className='mt-3'>
    <p className='text-[#236693] font-medium '>Ce que vous souhaitez en échange :</p>
<div className='flex md:justify-between flex-col'>
<div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  VEHICULES
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  MAISON
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  EMPLOI ET SERVICES
  </label>
</div>
</div>
<div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  IMMOBILIER
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  LOISIRS
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  AUTRE
  </label>
</div>
</div>
<div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
  MULTIMEDIA
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
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
                <textarea className="form-control rounded-lg  bg-slate-200 text-xs p-2 md:h-[55px]" cols={8} type="text" required="" placeholder="Etudie toutes propositions"/>
              </div>
</div>
<button className='bg-[#ed4300] p-2 text-white mt-4 rounded-lg'>Enregistrer mon annonce</button>
        </form>
    </div>
  )
}

export default DepotAnnonce