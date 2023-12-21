import CreateNote from "../components/CreateNote";
import ShowNotes from "../components/ShowNotes";

const Home = () => {
  return (
    <div className="main-container bg-[#E3E8F8] w-screen h-full">
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
          Recently viewed
        </p>
        {/* {notes &&
          notes.map((note, index) => { */}
        {/* return  */}
        <ShowNotes />;
        <ShowNotes />;
        <ShowNotes />;
        <ShowNotes />;{/* })} */}
      </div>
    </div>
  );
};
export default Home;
