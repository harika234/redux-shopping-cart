 import {createSlice} from '@reduxjs/toolkit'

 const initialState = [];
const cartSlice = createSlice({
    
    name:'cart',
    initialState,
    reducers: {
        addToCart(state,action) {
            // console.log(action);
            // console.log(state);
            
            
            state.push(action.payload)
        },
        removeFromCart(state,action) {
            // console.log(action);
            // console.log(state);
            
            
           return state.filter(item => item.id!== action.payload)
        }
    },
})

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;