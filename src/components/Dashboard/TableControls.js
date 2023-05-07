import React from "react";

const TableControls = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="rounded-xl px-2 py-1 flex bg-gray-300 text-gray-700">
        <button className="border-r border-gray-500 px-2">Broad Match</button>
        <button className="border-r border-gray-500 px-2">Related</button>
        <button className="px-2">Questions</button>
      </div>
      <div className="grow flex justify-end">
        <button className="bg-purple-600 text-white text-white py-1 px-3 rounded">
          Add to List
        </button>
      </div>
    </div>
  );
};

export default TableControls;
