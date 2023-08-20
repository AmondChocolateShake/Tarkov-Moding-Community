import { ActionTypes } from "./Actions";
import { INCREMENT,DECREMENT,SELECTED } from "./Types";

interface Weapon{
    id:string
}

const initialWeaponState:Weapon={
    id:''
}


function weaponIdReducer(state=initialWeaponState,action:ActionTypes):Weapon{
    switch(action.type){
        case SELECTED:
            return {...state,id:state.id};
        default:
            return state
    }
}

