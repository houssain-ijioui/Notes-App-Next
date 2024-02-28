import NoteCard from "@/components/NoteCard";
import { useSelector, useDispatch } from "react-redux";
import { getNotes } from "@/features/notes/notesActions";
import { useEffect } from "react";

export default function Home() {

  const dispatch = useDispatch()
  const notes = useSelector((state: any) => state.notes.notes)

  useEffect(() => {
    dispatch(getNotes())
  })


  return (
    <>
      <div className = "bg-fuchsia-200 h-32 text-center">
          <h3>Todo List</h3>
          <button className="bg-blue-600 text-white p-2 rounded-lg mt-2">Create Task</button>
      </div>
      <div className = "grid grid-cols-3 gap-4  p-4 mt-10 mb-1 bg-white border border-gray-200 rounded-lg shadow">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </>
  );
}

