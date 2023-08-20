import { INCREMENT,DECREMENT, SELECTED } from "./Types";

export interface IncrementAction{
    type: typeof INCREMENT
}

export interface DecrementAction{
    type: typeof DECREMENT
}

export interface SelectAction{
    type: typeof SELECTED
}

export type ActionTypes=IncrementAction|DecrementAction|SelectAction;