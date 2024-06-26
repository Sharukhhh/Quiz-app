import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    quizUser: {
        info: null,
        score: 0
    }
}

const quizUserSlice =  createSlice({
    initialState,

    name: 'quiz',

    reducers: {

        saveUser: (state , action) => {
            state.quizUser.info = action.payload;
        },
    }
});

const {saveUser} = quizUserSlice.actions;
export default quizUserSlice.reducer;