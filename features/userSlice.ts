import { RootState } from "@/app/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { stat } from "fs"

export interface UserState {
    id: number | null
    firstname: string
    lastname: string
    email: string
    phoneNumber: string
    address: string[]
    deliveryAddress: string
    cartId: number | null
    status: 'idle' | 'loading' | 'failed';
}

export const initialState: UserState = {
    id: null,
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    address: [],
    deliveryAddress: '',
    cartId: null,
    status: 'idle'
}

export const fetchUserAsync = createAsyncThunk(
    'user/data',
    async (id: number | null) => {
        const res = await fetch(`http://localhost:8080/api/v1/user/${id}`)
        const data = await res.json()
        return data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchUserAsync.fulfilled, (state, action) => {
          const response:UserState = action.payload
          state.id = response.id
          state.firstname = response.firstname
          state.lastname = response.lastname
          state.email = response.email
          state.phoneNumber = response.phoneNumber
          state.address = response.address
          state.deliveryAddress = response.deliveryAddress
          state.cartId = response.cartId
          state.status = 'idle'
        })
        .addCase(fetchUserAsync.rejected, (state) => {
          state.status = 'failed';
        });
    }
})

export const userState = (state: RootState) => state.user

export default userSlice.reducer