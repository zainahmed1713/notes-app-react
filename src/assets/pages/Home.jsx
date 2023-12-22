import { useEffect, useState } from "react";
import CreateNote from "../components/CreateNote";
import ShowNotes from "../components/ShowNotes";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Home = () => {
  const notesCollection = collection(db, "notes");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const data = await getDocs(notesCollection);
        const fetchNotes = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setNotes(fetchNotes);
      } catch (error) {
        console.log(error);
      }
    };
    getNotes();
  });

  return (
    <div className="main-container bg-[#E3E8F8] w-screen h-[100vh]">
      <div className="add-note p-2 w-screen">
        <CreateNote />
      </div>
      <div className="show-notes">
        <div className="my-notes flex items-center h-10">
          <span className="material-symbols-outlined mx-2 text-[#203562]">
            description
          </span>
          <h4 className="font-montserrat text-[#203562] font-semibold">
            My Notes
          </h4>
        </div>
        <p className="font-montserrat text-[#203562] font-semibold text-xs ml-3 mt-1 mb-2">
          Recently added
        </p>
        {notes &&
          notes.map((note) => {
            return <ShowNotes {...note} key={note.id} />;
          })}
      </div>
    </div>
  );
};
export default Home;
