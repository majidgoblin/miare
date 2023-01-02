import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment-jalaali"
moment.loadPersian({ dialect: 'persian-modern' });

export const fetchTransaction = createAsyncThunk("person/Transaction", async () => {
    const response = await axios.get(
        "data.json"
    );
    return response.data;
});


const initialState = {
    concurrency_costs: [],
    trip_financials: [],
    misc_expenses: [],
    payments: [],
    dates: [],
    transactionType: 'all',
    driver:''
};
const TransactionSlice = createSlice({
    name: "Transaction",
    initialState,
    reducers: {
        changeTransactionType: (state, action) => {
            state.transactionType = action.payload;
        },
        searchDriver: (state, action) => {
            state.driver = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTransaction.fulfilled, (state, action) => {

            const data = action.payload

            state.trip_financials = action.payload.trip_financials
            state.misc_expenses = action.payload.misc_expenses
            state.payments = action.payload.payments
            state.concurrency_costs = action.payload.concurrency_costs

            //get dates from all data
            var arr: any = []
            data.concurrency_costs.map((row: any) => {
                arr.push(moment(row.created_at).format("jDD jMMMM jYYYY"))
            })
            data.misc_expenses.map((row: any) => {
                arr.push(moment(row.created_at).format("jDD jMMMM jYYYY"))
            })
            data.payments.map((row: any) => {
                arr.push(moment(row.datetime).format("jDD jMMMM jYYYY"))
            })
            data.trip_financials.map((row: any) => {
                arr.push(moment(row.request_datetime).format("jDD jMMMM jYYYY"))
            })

            state.dates = Array.from(new Set(arr))

        });
    },
});

export const { changeTransactionType, searchDriver } = TransactionSlice.actions
export default TransactionSlice.reducer;
