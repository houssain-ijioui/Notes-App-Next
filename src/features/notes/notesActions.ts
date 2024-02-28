import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Assuming Note.find() returns a Promise<Array<Note>>
export const getNotes = createAsyncThunk("notes/getNotes", async () => {
  const data = await axios.get('http://localhost:3000/api/notes')
  return data;
});
