import {createSlice,createAsyncThunk, createAction} from '@reduxjs/toolkit' 
import AnnonceService from './annonceService'
import { toast } from 'react-toastify'
const initialState = {
    annonces:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:''
}

export const createannonce = createAsyncThunk('annonce/create',async(data,thunkAPI)=>{
    try{
return await AnnonceService.createannonce(data)
    }catch(error){
return  thunkAPI.rejectWithValue(error)
    }
}) 



export const getannoncesbyid = createAsyncThunk(`annoncebyid/get`,async(id,thunkAPI)=>{
    try {
        console.log(id)
        return await AnnonceService.getAnnonceById(id)
    } catch (error) {
        
return  thunkAPI.rejectWithValue(error)

    }
})

export const getMyAllAnnonces = createAsyncThunk('myannonce/get',async(thunkAPI)=>{
    try {
        return await AnnonceService.getMyAllAnnonces()
    } catch (error) {
        
return  thunkAPI.rejectWithValue(error)

    }
})
export const updateAnnonce = createAsyncThunk('updateAnnonce',async(id,thunkAPI)=>{
    try {
        return await AnnonceService.updateAnnonces(id)
    } catch (error) {
        
return  thunkAPI.rejectWithValue(error)

    }
})
export const deleteImageAnnonce = createAsyncThunk('delete/image/annonce',async(data,thunkAPI)=>{
    try {
        console.log(data)
        return await AnnonceService.delImgAnnonce(data)
    } catch (error) {
        
return  thunkAPI.rejectWithValue(error)

    }
})

export const AnnonceSlice = createSlice({
    name:'annonce',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      
        builder.addCase(createannonce.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createannonce.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.annonces = [ action.payload]
                
            
        })
        .addCase(createannonce.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload
        })
    
       
      
        .addCase(getMyAllAnnonces.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.annonces = action.payload    
      
        })
        .addCase(getMyAllAnnonces.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload.response.data.message
            state.catdeleted=null
        })
        .addCase(getannoncesbyid.pending,(state)=>{
            state.isLoading=false
           
           
       
        })
      
        .addCase(getannoncesbyid.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.annonces =[ action.payload]    
      
        })
        .addCase(getannoncesbyid.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.error
           
          
        })
        .addCase(updateAnnonce.pending,(state)=>{
            state.isLoading=false
           
           
       
        })
      
        .addCase(updateAnnonce.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
          
                    state.annonces = action.payload;
                    toast.success('annonce modifier avec success')
               
      
        })
        .addCase(updateAnnonce.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.error
           
          
        })
        .addCase(deleteImageAnnonce.pending,(state)=>{
            state.isLoading=false
           
           
       
        })
      
        .addCase(deleteImageAnnonce.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
          
            const index = state.annonces.findIndex(annonce => annonce._id === action.payload._id);
            if (index !== -1) {
              state.annonces[index] = action.payload;
            }
                    toast.success('delet image annonce authMiddlewareavec success')
               
      
        })
        .addCase(deleteImageAnnonce.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.error
           
          
        })
    }
}) 
export default AnnonceSlice.reducer;
