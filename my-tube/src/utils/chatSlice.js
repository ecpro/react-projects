import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            console.log('addMessage', action.payload);
            state.messages.splice(10, 1);
            state.messages.unshift(action.payload);
        },
        clearMessages: (state) => {
            state.messages = [];
        }
    }
});

export const { addMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
