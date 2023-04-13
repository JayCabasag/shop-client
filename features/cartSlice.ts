import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct, Product } from "@/utils/types";
import { RootState } from '@/app/store';

export interface CartState {
    items: CartProduct[]
    total: number
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CartState = {
    items: [],
    total: 0,
    status: 'idle'
}

export const addItemAsync = createAsyncThunk(
    'cart/addItem',
    async (product: CartProduct) => {
        // const res = await {}
        // return res.data
    }
)

export const updateItemAsync = createAsyncThunk(
    'cart/updateItems',
    async (product: CartProduct) => {
        // const res = await {}
        // return res.data
    }
)

export const deleteItemAsync = createAsyncThunk(
    'cart/deleteItem',
    async (product: CartProduct) => {
        // const res = await {}
        // return res.data
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        //Add cart items async
        .addCase(addItemAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addItemAsync.fulfilled, (state, action) => {
          state.status = 'idle';
        })
        .addCase(addItemAsync.rejected, (state) => {
          state.status = 'failed';
        })
         //Update cart items async
        .addCase(updateItemAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(updateItemAsync.fulfilled, (state, action) => {
            state.status = 'idle';
        })
        .addCase(updateItemAsync.rejected, (state) => {
            state.status = 'failed';
        })
        //Delete cart items async
        .addCase(deleteItemAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(deleteItemAsync.fulfilled, (state, action) => {
            state.status = 'idle';
        })
        .addCase(deleteItemAsync.rejected, (state) => {
            state.status = 'failed';
        });
    }
})

export const cartState = (state: RootState) => state.cart
export default cartSlice.reducer;