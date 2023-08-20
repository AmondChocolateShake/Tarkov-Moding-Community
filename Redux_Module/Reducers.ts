import { MainActionTypes, WeaponAction } from "./Actions";
import { INCREMENT,DECREMENT,SELECTED,TAGSELECTED,ADDITEM } from "./Types";

interface weaponId{
    id:string,
}

const initialWeaponIdState:weaponId={
    id:'',
}


// 무기 선택 reducer
function weaponReducer(state=initialWeaponIdState,action:WeaponAction):weaponId{
    switch(action.type){
        case SELECTED:
            return{...state,id:state.id}
        default:
            return state
    }
}

