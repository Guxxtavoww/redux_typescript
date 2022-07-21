import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Costumer {
    id: String;
    name: String;
    food: string[];
}

interface CostumerState {
    value: Costumer[];
}

interface AddFoodtoCustomerPayload {
    food: string;
    id: any;
}

const initialState: CostumerState = {
    value: []
}

const CustomerSlice = createSlice({
    name: "clientes",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Costumer>) => {
            state.value.push(action.payload);
        },
        addFoodtoCustomer: (state, action: PayloadAction<AddFoodtoCustomerPayload>) => {
            const { payload } = action;
            state.value.forEach(customer => customer.id === payload.id && customer.food.push(payload.food));
        }
    }
});

export default CustomerSlice.reducer;
export const { addCustomer, addFoodtoCustomer } = CustomerSlice.actions;