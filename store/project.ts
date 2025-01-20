import { TypeProject } from "@/lib/types";
import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProjectState } from "./type";
const { createSlice } = require("@reduxjs/toolkit");

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await fetch('/api/project');
    console.log("projectslice")
    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    return response.json();
})

export const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: {
        projects: [], // Array to store projects
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,    // Error message
    },
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<ProjectState>) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Array<TypeProject>>) => {
                state.status = 'succeeded';
                state.projects = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });

    }
})

// export const { setProject } = projectSlice.actions;
export default projectSlice.reducer;
