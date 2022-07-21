import { configureStore } from "@reduxjs/toolkit";

import CustomerSlice from "./CustomerSlice";
import ReservetionSlice from "./ReservetionSlice";

const store = configureStore({
    reducer: {
        reservation: ReservetionSlice,
        customers: CustomerSlice,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;