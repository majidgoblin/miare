import { configureStore } from "@reduxjs/toolkit";
import TransactionSlice from "./TransactionSlice";

const store=configureStore({
    reducer:{
        Transaction:TransactionSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

store.subscribe(()=>{

  })

export default store