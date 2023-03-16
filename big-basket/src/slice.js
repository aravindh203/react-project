import { createSlice } from "@reduxjs/toolkit";
import { smartBasket } from "./AllData/smartBasket";

const slice=createSlice({
    name:'products',
    initialState:{
        products:smartBasket
    },
    reducers:{
        updatePrice:(state,action)=>{
            var index=state.products.findIndex(value=>value.id=action.payload.id);

            state.products[index].weight=state.products[index].weightPakages[action.payload.indexNo]
            state.products[index].price=state.products[index].rate[action.payload.indexNo]
            state.products[index].discountedPrice=state.products[index].dicountedRate[action.payload.indexNo]
        },
    }

})

export const { updatePrice,hello }=slice.actions;
export default slice.reducer;