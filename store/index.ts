import { configureStore } from '@reduxjs/toolkit';
import projectReducer from "./project";
import userReducer from "./user";
import taskReducer from "./task";
import clientReducer from "./client";

import { useDispatch } from 'react-redux';


const store = configureStore({
    reducer: {
        projectSlice: projectReducer,
        userSlice: userReducer,
        taskSlice: taskReducer,
        cientSlice: clientReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;