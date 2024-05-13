import NotesSelectors from "./NotesSelectors";
import { MOCKNOTES } from "../../../lib/mockNotesData";

const SidePanel = () => {
  return (
    <aside className="scrollbar-thin flex max-h-[86vh] min-w-[30%] max-w-[30%] flex-col gap-2 overflow-y-scroll border-2 border-green-400">
      {MOCKNOTES.map((value, index) => (
        <NotesSelectors key={index} data={value} />
      ))}
    </aside>
  );
};

export default SidePanel;
