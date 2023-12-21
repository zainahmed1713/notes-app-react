import { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-full bg-[#F5F5F5] p-2 rounded-xl mt-4">
      {/* {error && <div className="error">{error}</div>} */}
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
