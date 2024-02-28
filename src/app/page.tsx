import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import NoteCard from "@/components/NoteCard";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row w-3/3">
        <Sidebar />
        <div className="w-11/12 grid grid-cols-3 gap-4 mt-4 ml-3 w-3/3">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </div>
  );
}

