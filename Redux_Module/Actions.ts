import { INCREMENT,DECREMENT, SELECTED, TAGSELECTED } from "./Types";

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

export type ActionTypes=IncrementAction|DecrementAction|SelectAction|TagSelected;