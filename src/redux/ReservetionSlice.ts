import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
    value: string[];
}

const initialState: ReservationState = {
    value: []
};

const ReservetionsSlice = createSlice({
    name: "reservas",
    initialState,
    reducers: {
        addReservetion: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload);
        },
        removeReservetion: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        }
    }
});

export default ReservetionsSlice.reducer;
export const { addReservetion, removeReservetion } = ReservetionsSlice.actions;