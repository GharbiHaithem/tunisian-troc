import axios from 'axios'

const VITE_PUBLIC_URL   ="https://tunisie-annonces-backend.onrender.com/api"
// https://messenger-server-t9po.onrender.com
const API = axios.create({baseURL:VITE_PUBLIC_URL});
API.interceptors.request.use((req)=>{
   if(localStorage.getItem('customer')){
    req.headers.authorization =`Bearer ${
        JSON.parse(localStorage.getItem("customer")).token
    }`
   }
   return req;
})

const createannonce = async(data) =>{
    const response = await API.post(`${ VITE_PUBLIC_URL}/create-annonce`,data)
    console.log(response);
    return response.data
    }
 
const deletecategry = async(id) =>{
    const response = await API.delete(`${ VITE_PUBLIC_URL}/delete-cat-product/${id}`)
    console.log(response);
    return response.data
    }   

 const getMyAllAnnonces = async()=>{
    const response = await API.get(`${ VITE_PUBLIC_URL}/getMyAnnonce`)
    console.log(response);
    return response.data
 }   
 const getAnnoncesByUser = async(userid)=>{
   console.log(userid);
   const response = await axios.get(`${ VITE_PUBLIC_URL}/getAnnonceByUser/${userid}`)
   console.log(response);
   return response.data
}  
 const getAnnonceById = async(id)=>{
   console.log(id)
   const response = await axios.get(`${VITE_PUBLIC_URL}/getAnnonce/${id}`)
   console.log(response.data);
   return response.data
} 
const getAnnonces = async(limit)=>{
   console.log(limit)
   const response = await API.get(`${VITE_PUBLIC_URL}/getAnnonces?limit=${limit}`)
   console.log(response.data);
   return response.data
} 
const updateAnnonces = async(data)=>{
    console.log(data.id)
    const response = await API.put(`${VITE_PUBLIC_URL}/edit-annonce/${data.id}` , data.xdata)
    console.log(response.data);
    return response.data
 } 

 const delImgAnnonce = async(data)=>{
    console.log(data);
    const response = await API.delete(`${VITE_PUBLIC_URL}/${data.annonceId}/images/${data.public_id}` )
    console.log(response.data);
    return response.data
 } 
const CategoryProductsService = {
    createannonce,deletecategry,getMyAllAnnonces,getAnnonceById,updateAnnonces,delImgAnnonce,getAnnoncesByUser,getAnnonces
}
export default CategoryProductsService
