import React from 'react'

const Members = () => {
  return (
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
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
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
  )
}

export default Members