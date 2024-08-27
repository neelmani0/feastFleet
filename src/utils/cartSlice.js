import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState:{
    items:["bana"],
  },
  reducers:{
    addItem:(state,action)=>{
      state.items.push(action.payload);    
    }, 
    clearCart: (state, action)=>{
      state.items=[];
    },
    removeItem:(state,action)=>{
       state.items.pop();
    },
  },

});
   
export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;