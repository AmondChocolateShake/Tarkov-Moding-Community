import { configureStore } from "@reduxjs/toolkit";
import pageSlice from './pageSlicer'

const store=configureStore({
    reducer:{
        page:pageSlice.reducer,
    },
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export default store;
