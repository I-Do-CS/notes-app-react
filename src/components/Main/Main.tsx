import { SidePanel } from "./SidePanel";
import { NotesDisplayer } from "./NotesDisplayer";

const Main = () => {
  return (
    <main>
      <div className="container mx-auto flex flex-row">
        <SidePanel />
        <NotesDisplayer />
      </div>
    </main>
  );
};

export default Main;
