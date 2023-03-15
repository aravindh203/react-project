import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'products',
    initialState:{
        products:[
            {
                "id": 1,
                "product_name": "Capsicum - Green (Loose)",
                "rate": [118.42,20.61,50.21],
                "offer": 24,
                "imageUrl": "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
                "weight":['1 kg - Rs 57.50','250 g - Rs 14.40','500 g - Rs 29.00']
            }
        ]
    },
    reducer:{
        addToCart:(state,action)=>{

        }

    }

})

export const { addToCart }=slice.actions;
export default slice.reducer;