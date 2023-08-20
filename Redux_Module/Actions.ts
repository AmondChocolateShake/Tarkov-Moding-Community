import { INCREMENT,DECREMENT, SELECTED, TAGSELECTED, ADDITEM } from "./Types";

export interface IncrementAction{
    type: typeof INCREMENT
}

export interface DecrementAction{
    type: typeof DECREMENT
}

export interface SelectAction{
    type: typeof SELECTED
}

export interface TagSelected{
    type:typeof TAGSELECTED
}

export interface AddItem{
    type:typeof ADDITEM
}

//메인 컨트롤러 (태그 선택,이전/다음 페이지)
export type MainActionTypes=IncrementAction|DecrementAction|TagSelected;

export type WeaponAction=SelectAction;

