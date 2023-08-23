import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dollarPrice: false,
  userName:""
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInUser:(state,action)=>{
        state.dollarPrice = state.dollarPrice ? true : false  
        state.userName = action.payload

    }
    },

})

// Action creators are generated for each case reducer function
export const {logInUser } =authSlice.actions

export default authSlice.reducer