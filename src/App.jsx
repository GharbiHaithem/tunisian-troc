import { useLayoutEffect, useState } from 'react'

import './App.css'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Member from './Pages/Member'
import { Menu } from './Component/Menu'
import Info from './Pages/Info'
import Fiche from './Component/Fiche'
import BreadCrumb from './Component/BreadCrum'
import DetailsTroc from './Component/DetailsTroc'
function App() {
const[openMenu,setOpenMenu] = useState(false)
const [isMediumScreen, setIsMediumScreen] = useState(false);
const [showmenu ,setShowmenu]=useState(false);
useLayoutEffect(() => {
  function handleResize() {
    if (window.innerWidth >= 768) { // Taille de l'écran md
      setIsMediumScreen(true);
      setOpenMenu(false)
    } else {
      setIsMediumScreen(false);
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize(); // Appel initial
  return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
    <div className={`relative body  }  `}>
    {openMenu && <div className='z-[11] absolute top-0 left-[250px] w-full h-screen bg-[#0008]'></div>}
 <BrowserRouter>
 <Header setShowmenu={setShowmenu} showmenu={showmenu}  setOpenMenu={setOpenMenu} isMediumScreen={isMediumScreen} openMenu={openMenu} />
   <Routes>
       <Route exact  path='/'  element={<Login isMediumScreen={isMediumScreen}  openMenu={openMenu} setOpenMenu={setOpenMenu}/>}  />
       <Route   path='/register' element={<Register isMediumScreen={isMediumScreen}  openMenu={openMenu} setOpenMenu={setOpenMenu}/>}  />
       <Route   path='/member'  element={<Member isMediumScreen={isMediumScreen} openMenu={openMenu} setOpenMenu={setOpenMenu}/>}  />
       <Route path='/info' element={<Info/>} />
       <Route path='/troc' element={<DetailsTroc  isMediumScreen={isMediumScreen} />} />
       <Route path='/member/fiche' element={<Fiche/>} />
    
   </Routes>
   <Footer isMediumScreen={isMediumScreen} setOpenMenu={setOpenMenu} openMenu={openMenu}/>
 </BrowserRouter>
   {openMenu && !isMediumScreen && <div className='fixed top-0 left-0 w-[250px] h-[100vh] bg-white'>
    <Menu openMenu={openMenu} />
    </div>}  
  
    </div>
  )
}

export default App
