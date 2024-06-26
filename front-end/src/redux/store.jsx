import {configureStore} from '@reduxjs/toolkit'
import { persistStore , persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' 
import quizReducer from './quizSlice'


const quizAuthConfig = {
    storage,
    key: 'quiz'
}

const persistedQuizReducer = persistReducer(quizAuthConfig , quizReducer)

export const store  = configureStore({
    reducer : {
        quiz: persistedQuizReducer
    }
});

export const persistor = persistStore(store)