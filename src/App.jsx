import { useEffect, useLayoutEffect, useRef, useState } from 'react'

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
import Offres from './Component/Offres'
import DepotAnnonce from './Component/DepotAnnonce'
import Mag from './Component/Mag'
import Home from './Component/Home'
import Members from './Component/Members'
import ProposerTroc from './Component/ProposerTroc'
import MyTrocs from './Component/MyTrocs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CreateCategory from './Pages/CreateCategory'
import{io} from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { allusers } from './features/AuthSlices'
function App() {
  const socket = useRef(io("http://localhost:8900"))
  const {user,users} = useSelector(state=>state?.auth)
  const[userOnline,setUserOnline] = useState([])
const[openMenu,setOpenMenu] = useState(false)
const [isMediumScreen, setIsMediumScreen] = useState(false);
const [showmenu ,setShowmenu]=useState(false);
const dispatch = useDispatch()
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
useEffect(()=>{
  dispatch(allusers())
},[dispatch])
useEffect(() => {
    
  socket?.current?.emit("adduser", user?._id);
  
 
  socket?.current?.on("getuser",user=>{
    console.log(user)
    setUserOnline(user)
  }) 
 }, [socket,user?._id]);



  const filterOnlineUsers = () => {
    return users?.length>0 && users?.filter(_user => userOnline.some(onlineUser => onlineUser.userId === _user._id));
};

console.log(filterOnlineUsers());
  return (
    <div className={`relative body  }  `}>
    {openMenu && <div className='z-[11] absolute top-0 left-[250px] w-full h-[270vh] bg-[#0008]'></div>}
    {/* <CreateCategory/> */}
 <BrowserRouter>
 <Header setShowmenu={setShowmenu} showmenu={showmenu}  setOpenMenu={setOpenMenu} isMediumScreen={isMediumScreen} openMenu={openMenu} />
   <Routes>
   <Route exact path='/' element={<Home/>} />
       <Route   path='/login'  element={<Login isMediumScreen={isMediumScreen}  openMenu={openMenu} setOpenMenu={setOpenMenu}/>}  />
       <Route   path='/register' element={<Register isMediumScreen={isMediumScreen}  openMenu={openMenu} setOpenMenu={setOpenMenu}/>}  />
       <Route   path='/member'  element={<Member  socket={socket} isMediumScreen={isMediumScreen} openMenu={openMenu} setOpenMenu={setOpenMenu}/>}  />
       <Route path='/info' element={<Info/>} />
       <Route path='/troc/:id' element={<DetailsTroc  isMediumScreen={isMediumScreen} />} />
       <Route path='/annonce/:id' element={<DetailsTroc  isMediumScreen={isMediumScreen} />} />
       <Route path='/mytrocs' element={<MyTrocs/>} />
       <Route path='/member/fiche' element={<Fiche/>} />
       <Route path='/member/mag' element={<Mag/>} />
    
     <Route path='/offres' element={<Offres/>} />
     <Route path='/depotannonce' element={<DepotAnnonce/>} />
     <Route path='/members' element={<Members  userConnected={filterOnlineUsers()}/>} />
     <Route path='/:token' element={<Login/>} />
     <Route  path='/edit-annonce/:id'  element={<DepotAnnonce/>} />
     <Route  path='/fiche/:id'  element={<Fiche/>} />
     
   </Routes>
   <Footer isMediumScreen={isMediumScreen} setOpenMenu={setOpenMenu} openMenu={openMenu}/>
   {openMenu && !isMediumScreen && <div className='fixed top-0 left-0 w-[250px] h-[100vh] bg-white'>
    <Menu isMediumScreen={isMediumScreen} openMenu={openMenu} setShowmenu={setShowmenu} setOpenMenu={setOpenMenu} showmenu={showmenu} />
    </div>}  
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
 </BrowserRouter>
  
  
    </div>
  )
}

export default App
