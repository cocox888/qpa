import { TypeClient, TypeTask } from "@/lib/types";
import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ClientState, TaskState } from "./type";

const { createSlice } = require("@reduxjs/toolkit");

export const fetchClients = createAsyncThunk('clients/fetchClients', async () => {
    const response = await fetch('/api/client');

    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    return response.json();
})

export const clientSlice = createSlice({
    name: 'clientSlice',
    initialState: {
        clients: [], // Array to store projects
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,    // Error message
    },
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<ClientState>) => {
        builder
            .addCase(fetchClients.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchClients.fulfilled, (state, action: PayloadAction<Array<TypeClient>>) => {
                state.status = 'succeeded';
                state.clients = action.payload;
            })
            .addCase(fetchClients.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });

    }
})

// export const { setProject } = taskSlice.actions;
export default clientSlice.reducer;
