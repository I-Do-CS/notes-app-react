import { note } from "../../../lib/definitions";

const NotesSelectors = ({ data }: { data: note }) => {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-neutral-200 px-4 py-3 shadow-md">
      <span className="text-lg">{data.title}</span>
      <div className="flex flex-col text-sm text-gray-500">
        <span>Created: {data.creationDate}</span>
        <span>Last Modified: {data.modifiedDate}</span>
      </div>
    </div>
  );
};

export default NotesSelectors;
