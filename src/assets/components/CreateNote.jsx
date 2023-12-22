import { useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const notesCollection = collection(db, "notes");
  const date = new Date();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (title === "") setError("Empty title");
      else if (description === "") setError("Empty description");
      else {
        await addDoc(notesCollection, {
          title: title,
          description: description,
          createdAt: date.getTime(),
        });
        setTitle("");
        setDescription("");
        setError(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-full bg-[#F5F5F5] p-2 rounded-xl mt-4">
      {error && (
        <div className="error font-montserrat font-semibold text-xs text-center p-2 my-2  text-red-700">
          {error === "Empty title"
            ? "Title cannot be empty"
            : "Description cannot be empty"}
        </div>
      )}
      <div className="form-heading flex justify-between">
        <h4 className="font-montserrat font-semibold text-lg text-[#203562] mb-2 ml-2">
          Add a Note
        </h4>
        <span
          onClick={handleSubmit}
          className="material-symbols-outlined text-[#203562] hover:opacity-80 cursor-pointer mr-2"
        >
          send
        </span>
      </div>
      <input
        type="text"
        placeholder="Title"
        className="w-full bg-transparent font-montserrat font-semibold text-sm text-[#203562] p-2 mb-2 focus:outline-none"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        placeholder="Take a note..."
        className="w-full bg-transparent font-montserrat font-semibold text-sm text-[#203562] p-2 focus:outline-none"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
    </form>
  );
};
export default CreateNote;
