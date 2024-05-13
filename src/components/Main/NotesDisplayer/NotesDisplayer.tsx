// import ControlsWidget from "./ControlsWidget";
import { MOCKNOTES } from "../../../lib/mockNotesData";

const NotesDisplayer = () => {
  const data = MOCKNOTES[0];
  return (
    <section className="scrollbar-thin max-h-[86vh] min-h-[100%] min-w-[70%] max-w-[70%] overflow-y-scroll border-2 border-red-500 p-8">
      <div className="">
        <div className="py-4">
          <p className="text-3xl font-semibold">{data.title}</p>
        </div>

        <div className="py-4 text-lg">
          <p>{data.content}</p>
        </div>
      </div>
    </section>
  );
};

export default NotesDisplayer;
