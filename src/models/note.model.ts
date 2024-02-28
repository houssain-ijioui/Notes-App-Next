import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Note = model('Note', noteSchema);

export default Note;