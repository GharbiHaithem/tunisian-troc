import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/AuthSlices'
import categoryReducer from '../features/categorySlice'
 import annonceReducer from '../features/annonceSlice'
// import messageReducer from '../features/messageSlice'
 import uploadReducer from '../features/uploadSlice'
export const store = configureStore({
  reducer: {
  
    auth:authReducer,
    cat :categoryReducer,
   annonce :annonceReducer,
  
   upload:uploadReducer
  }
})
