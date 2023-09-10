import {createSlice} from '@reduxjs/toolkit'

type Init={
    page:string,
    id:string
}

const initialState:Init={
    page:'main',
    id:''
}

const pageSlice=createSlice({
    name:"pageHandler",
    initialState,
    reducers:{
        goToMain:(state)=>{
            state.page="main"
        },
        goToPosts:(state,actions)=>{
            state.page="posts",
            state.id=actions.payload;
        },
        goToPosting:(state,actions)=>{
            state.page="posting"
            state.id=actions.payload
        },
        viewPost:(state,actions)=>{
            state.page="viewPost"
            state.id=actions.payload
        }
    }
})

export const {goToMain, goToPosting, goToPosts}=pageSlice.actions;
export default pageSlice;

