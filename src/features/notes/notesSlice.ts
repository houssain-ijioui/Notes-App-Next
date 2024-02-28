import Note from "@/app/note/[id]/page";
import { createSlice } from "@reduxjs/toolkit";
import { getNotes } from "./notesActions";


interface Note {
    createdAt: string;
    description: string
}

interface AppState {
    notes: Note[]
}


const initialState: AppState = {
    notes: []
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNotes.fulfilled, (state, action) => {
            console.log(state.notes);
            console.log(action);
        })
    }
})


export default notesSlice.reducer;