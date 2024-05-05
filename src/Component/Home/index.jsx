import React, { useState } from 'react'

const Home = () => {
    const[hovered,setHovered]= useState(null)
  return (
    <div className='md:w-[80%] w-full bg-gradient-to-r p-3 mx-auto from-slate-300 to-slate-100 h-[max-content]'>
  <form className='flex  w-full gap-3 md:flex-row  md:justify-between md:items-center flex-col'>
             <div className="form-group md:w-[35%] w-full">
               
                <input className="form-control rounded-lg w-full text-xs p-2 md:h-11" type="text" required="" placeholder="Rechercher "/>
              </div>
             
              <select className="form-select p-2 form-select-sm w-full  md:w-[25%]" aria-label=".form-select-lg example">
  <option selected>Toute les catégories</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<select className="form-select form-select-sm p-2 w-full  md:w-[25%]" aria-label=".form-select-lg example">
  <option selected>Toute la tunisie</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
              <button className='bg-[#236693] p-2 md:w-[15%]  w-full  text-white rounded-lg'>Rechercher</button>
             </form>

             <div className='mt-5 w-[100%]'>
                <h6 className='text-[#236693] md:font-semibold  font-normal '>Dernières annonces de troc déposées :</h6>
                <div className='flex flex-wrap gap-2 mt-2'>
                  <div className='md:w-[calc(20%-8px)]  w-[calc(50%-8px)] rounded-lg relative cursor-pointer h-full ' onMouseLeave={()=>setHovered(null)}  onMouseEnter={()=>setHovered('img1')}>
                  <img className=' rounded-lg' src='https://img.freepik.com/photos-gratuite/vue-voiture-3d_23-2150796894.jpg?t=st=1714914331~exp=1714917931~hmac=772c422d5dc65caf601d458e130b8af9daf3172280d5cc70a736138da8266a0b&w=740'  />
                 <span className='absolute bg-[#00000062] bottom-0 text-center left-0 h-10 flex justify-center items-center w-full text-white'>BMW CLS12</span>
                  {hovered === 'img1'  && <div className='absolute bg-[#00000062] top-0 text-center left-0 h-full flex justify-center items-center w-full text-white rounded-lg'></div>}
                   </div>
                  <div className='md:w-[calc(20%-8px)] w-[calc(50%-8px)] relative rounded-lg cursor-pointer' onMouseLeave={()=>setHovered(null)} onMouseEnter={()=>setHovered('img2')}>
                  <img className=' rounded-lg' src='https://img.freepik.com/photos-gratuite/vue-voiture-3d_23-2150796894.jpg?t=st=1714914331~exp=1714917931~hmac=772c422d5dc65caf601d458e130b8af9daf3172280d5cc70a736138da8266a0b&w=740'  />
                  <span className='absolute bg-[#00000062] bottom-0 text-center left-0 h-10 flex justify-center items-center w-full text-white'>DODGE CARBBO</span>
                  {hovered === 'img2'  && <div className='absolute bg-[#00000062] top-0 text-center left-0 h-full flex justify-center items-center w-full text-white rounded-lg'></div>}
                  </div>
                 <div className='md:w-[calc(20%-8px)] w-[calc(50%-8px)] relative rounded-lg  cursor-pointer '  onMouseLeave={()=>setHovered(null)} onMouseEnter={()=>setHovered('img3')} >
                 <img className=' rounded-lg' src='https://img.freepik.com/photos-gratuite/voiture-3d-dans-rue-ville_23-2150796852.jpg?t=st=1714914546~exp=1714918146~hmac=11966236caf68d7b0d14df3ddcf6308a2c404ce84f53b828c98fffef4197731b&w=740'  />
                 <span className='absolute bg-[#00000062] bottom-0 text-center left-0 h-10 flex justify-center items-center w-full text-white'>ALFA ROMEO</span>
                 {hovered === 'img3'  && <div className='absolute bg-[#00000062] top-0 text-center left-0 h-full flex justify-center items-center w-full text-white rounded-lg'></div>}
                 </div>
                 <div className='md:w-[calc(20%-8px)] w-[calc(50%-8px)] relative rounded-lg cursor-pointer'  onMouseLeave={()=>setHovered(null)} onMouseEnter={()=>setHovered('img4')}>
                 <img className=' rounded-lg' src='https://img.freepik.com/photos-gratuite/voiture-3d-fond-simple_23-2150797024.jpg?t=st=1714914570~exp=1714918170~hmac=6635f4844a724e467596083f3cc8e3db78245f1180075174a677432c256cd17d&w=740'  />
                 <span className='absolute bg-[#00000062] bottom-0 text-center left-0 h-10 flex justify-center items-center w-full text-white'>BIGGATTI ITA</span>
                 {hovered === 'img4'  && <div className='absolute bg-[#00000062] top-0 text-center left-0 h-full flex justify-center items-center w-full text-white rounded-lg'></div>}
                 </div>
                  <div className='md:w-[calc(20%-8px)]  w-[calc(50%-8px)]  relative rounded-lg cursor-pointer '  onMouseLeave={()=>setHovered(null)}  onMouseEnter={()=>setHovered('img5')}>
                  <img className=' rounded-lg' src='https://img.freepik.com/photos-gratuite/voiture-3d-dans-rue-ville_23-2150796862.jpg?t=st=1714914625~exp=1714918225~hmac=790f243dcaf0df43ec2fa5df521c49fbca28e41ba985e8a35246926746258a9f&w=740'  />
                  <span className='absolute bg-[#00000062] bottom-0 text-center left-0 h-10 flex justify-center items-center w-full text-white'>FERRARRI 2SK</span>
                  {hovered === 'img5'  && <div className='absolute bg-[#00000062] top-0 text-center left-0 h-full flex justify-center items-center w-full text-white rounded-lg'></div>}
                  </div>
                </div>
             </div>
    </div>
  )
}

export default Home