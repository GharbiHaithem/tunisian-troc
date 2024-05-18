import {createSlice,createAsyncThunk, createAction} from '@reduxjs/toolkit' 
import CategoryService from './categoryService'
import { toast } from 'react-toastify'
const initialState = {
    categories:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:''
}
export const getCat = createAsyncThunk('category/getCategory',async(thunkAPI)=>{
    try{
return await CategoryService.getCategory()
    }catch(error){
return  thunkAPI.rejectWithValue(error)
    }
}) 

export const createpCat = createAsyncThunk('category/create',async(data,thunkAPI)=>{
    try{
return await CategoryService.createcategory(data)
    }catch(error){
return  thunkAPI.rejectWithValue(error)
    }
}) 
export const deletecategories = createAsyncThunk('cat/del',async(id,thunkAPI)=>{
    try {
        return await CategoryService.deletecategry(id)
    } catch (error) {
        
return  thunkAPI.rejectWithValue(error)

    }
})
export const getacategory = createAsyncThunk('cat/get',async(id,thunkAPI)=>{
    try {
        return await CategoryService.getaproductcategory(id)
    } catch (error) {
        
return  thunkAPI.rejectWithValue(error)

    }
})
export const updatecategory = createAsyncThunk('cat/updated',async(data,thunkAPI)=>{
    try {
        return await CategoryService.updateacategory(data)
    } catch (error) {
        
return  thunkAPI.rejectWithValue(error)

    }
})
export const categories = createAsyncThunk('cat/categories',async(thunkAPI)=>{
    try {
        return await CategoryService.productscategory()
    } catch (error) {
        
return  thunkAPI.rejectWithValue(error)

    }
})
export const resetStateCat = createAction('resetstate')
export const CategoryProductSlice = createSlice({
    name:'category',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCat.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getCat.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.categories = action.payload
            
        })
        .addCase(getCat.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload.response.data.message
        })
        builder.addCase(createpCat.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createpCat.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.categryPCreated = action.payload
           
      
                const parentCategory = state.categories.find(cat => cat._id === action.payload.parentID);
                
                if (parentCategory) {
                    parentCategory.children.push(action.payload);
                }else{state.categories.push(action.payload)}
                
            
        })
        .addCase(createpCat.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload.response.data.message
        })
        .addCase(deletecategories.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(deletecategories.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.catdeleted = action.payload
        })
        .addCase(deletecategories.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload.response.data.message
            state.catdeleted=null
        })
        .addCase(getacategory.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getacategory.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.titlecategory = action.payload.title
        })
        .addCase(getacategory.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload.response.data.message
            state.catdeleted=null
        })
        .addCase(updatecategory.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(updatecategory.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.categoryupdated = action.payload    
        toast.info(`${state.categoryupdated.title } CATEGORY UPDATED SUCCESSFULY`)
        })
        .addCase(updatecategory.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload.response.data.message
            state.catdeleted=null
        })
        .addCase(resetStateCat,()=>initialState)
        .addCase(categories.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(categories.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.categories = action.payload    
      
        })
        .addCase(categories.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload.response.data.message
            state.catdeleted=null
        })
    }
}) 
export default CategoryProductSlice.reducer;
