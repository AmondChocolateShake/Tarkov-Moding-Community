import { ActionTypes } from "./Actions";
import { INCREMENT,DECREMENT,SELECTED,TAGSELECTED } from "./Types";

interface state{
    id:string,
    tags:string
}

const initialState:state={
    id:'',
    tags:''
}


function Reducer(state=initialState,action:ActionTypes):state{
    switch(action.type){
        // case INCREMENT:

        // case DECREMENT:

        case SELECTED:
            return {...state,id:state.id};

        case TAGSELECTED:
            return{...state,tags:state.tags}

        default:
            return state
    }
}

