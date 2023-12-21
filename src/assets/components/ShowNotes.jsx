// import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ShowNotes = ({ note }) => {
  return (
    <div className="notes-container flex flex-col items-center w-screen">
      <div className="note bg-[#F5F5F5] p-3 w-[250px] rounded-xl mb-3">
        <div className="top flex justify-between">
          <h4 className="title font-montserrat font-semibold text-[#203562]">
            {/* {note.title} */}
            Test Note #1
          </h4>
          <div className="icons">
            <span className="material-symbols-outlined text-[#203562] hover:opacity-80 cursor-pointer">
              edit
            </span>
            <span
              // onClick={handleClick}
              className="material-symbols-outlined text-[#203562] hover:opacity-80 cursor-pointer"
            >
              delete
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="text-content mb-2">
            <p className="font-montserrat text-xs text-[#303030] tracking-wider">
              {/* {note.description} */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
              excepturi neque? Tenetur ea natus laborum earum eligendi neque,
              quos aliquid velit porro enim exercitationem, accusantium cumque
              voluptates? Aperiam, reiciendis repellat! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Veritatis explicabo natus nam
              sapiente quasi ratione nobis deleniti qui, vel eius reprehenderit?
              Exercitationem nostrum vero consequatur non id dicta, dignissimos
              temporibus. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Voluptatibus omnis sit possimus dolores hic id itaque,
              quisquam alias! Porro facere doloribus nihil atque fuga aspernatur
              corrupti sapiente quae architecto voluptatum?
            </p>
          </div>
          <div className="time">
            <p className="font-montserrat text-xs opacity-90">
              {/* {formatDistanceToNow(new Date(note.createdAt), {
                addSuffix: true,
              })} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowNotes;
