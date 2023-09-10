import {createSlice} from '@reduxjs/toolkit'

type Init={
    page:string
}

const initialState:Init={
    page:'main'
}

const pageSlice=createSlice({
    name:"pageHandler",
    initialState,
    reducers:{
        
    }
})


