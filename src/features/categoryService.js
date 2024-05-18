import axios from 'axios'

const VITE_PUBLIC_URL   ="http://localhost:5001/api"
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
const getCategory = async( ) =>{
const response = await axios.get(`${ VITE_PUBLIC_URL}/getAllCategory`)
console.log(response);
return response.data
}

const createcategory = async(data) =>{
    const response = await API.post(`${ VITE_PUBLIC_URL}/create-cat-product`,{title:data.title,parentID:data.parentID})
    console.log(response);
    return response.data
    }
 
const deletecategry = async(id) =>{
    const response = await API.delete(`${ VITE_PUBLIC_URL}/delete-cat-product/${id}`)
    console.log(response);
    return response.data
    }   

 const getaproductcategory = async(id)=>{
    const response = await API.get(`${ VITE_PUBLIC_URL}/getCategory/${id}`)
    console.log(response);
    return response.data
 }   
 const updateacategory = async(data)=>{
    console.log(data)
    const response = await API.put(`${ VITE_PUBLIC_URL}/update-cat-product/${data.id}`,{title:data.catData})
    console.log(response);
    return response.data
 } 
 const productscategory = async()=>{
   
   const response = await axios.get(`${ VITE_PUBLIC_URL}/getAllCategory`)
   console.log(response.data);
   return response.data
} 
const CategoryProductsService = {
getCategory,createcategory,deletecategry,getaproductcategory,updateacategory,productscategory
}
export default CategoryProductsService
