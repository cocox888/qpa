import { TypeTask, TypeUser } from "@/lib/types";
import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TaskState, UserState } from "./type";

const { createSlice } = require("@reduxjs/toolkit");

export const fetchUsers = createAsyncThunk('users/fetchUers', async () => {
    const response = await fetch('/api/user');

    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    return response.json();
})

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [], // Array to store projects
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,    // Error message
    },
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<TypeUser>>) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });

    }
})

// export const { setProject } = taskSlice.actions;
export default userSlice.reducer;
