import { db } from "../../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ShowNotes = ({ ...notes }) => {
  const deleteNote = async () => {
    const notesDoc = doc(db, "notes", notes.id);
    await deleteDoc(notesDoc);
  };
  return (
    <div className="notes-container flex flex-col items-center w-screen">
      <div className="note bg-[#F5F5F5] p-3 w-[250px] rounded-xl mb-3">
        <div className="top flex justify-between">
          <h4 className="title font-montserrat font-semibold text-[#203562]">
            {notes.title}
          </h4>
          <div className="icons">
            <span className="material-symbols-outlined text-[#203562] hover:opacity-80 cursor-pointer">
              edit
            </span>
            <span
              onClick={deleteNote}
              className="material-symbols-outlined text-[#203562] hover:opacity-80 cursor-pointer"
            >
              delete
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="text-content mb-2">
            <p className="font-montserrat text-xs text-[#303030] tracking-wider">
              {notes.description}
            </p>
          </div>
          <div className="time">
            <p className="font-montserrat text-xs opacity-90">
              {formatDistanceToNow(new Date(notes.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowNotes;
