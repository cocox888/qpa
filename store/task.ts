import { TypeTask } from "@/lib/types";
import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TaskState } from "./type";

const { createSlice } = require("@reduxjs/toolkit");

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await fetch('/api/task');

    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    return response.json();
})

export const taskSlice = createSlice({
    name: 'projectSlice',
    initialState: {
        tasks: [], // Array to store projects
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,    // Error message
    },
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<TaskState>) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Array<TypeTask>>) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });

    }
})

// export const { setProject } = taskSlice.actions;
export default taskSlice.reducer;
