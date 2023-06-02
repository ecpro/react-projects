import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
});

export default store;


/**
 * Create Store
 *  configureStore() - RTK
 *
 * Provide the store to app using Provider component
 *  <Provider store = store{store} - react-redux
 *
 * Slice
 *  - createSlice({
 *      name: "",
 *      initialState: {},
 *      reducers: {
 *          reducerFunction: (state, action) => {}
 *      }
 *  }) - RTK
 */
