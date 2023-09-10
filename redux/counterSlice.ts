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
        goToMain:(state)=>{
            state.page="main"
        },
        goToPosts:(state)=>{
            state.page="posts"
        },
        goToPosting:(state)=>{
            state.page="posting"
        },
        viewPost:(state)=>{
            state.page="viewPost"
        }
    }
})


