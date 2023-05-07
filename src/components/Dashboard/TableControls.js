import React from "react";

const TableControls = ({ setCurrentFilter, currentFilter }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="rounded-xl  flex bg-gray-300 text-gray-700">
        <button
          className={`border-r border-gray-500 py-1 px-2 ${
            currentFilter === "raw_broadmatch_data" ? "bg-blue-300" : ""
          } rounded-l-xl`}
          onClick={() => {
            setCurrentFilter("raw_broadmatch_data");
          }}
        >
          Broad Match
        </button>
        <button
          className={`border-r border-gray-500 py-1 px-2 ${
            currentFilter === "raw_related_data" ? "bg-blue-300" : ""
          }`}
          onClick={() => {
            setCurrentFilter("raw_related_data");
          }}
        >
          Related
        </button>
        <button
          className={`px-2 py-1 rounded-r-xl ${
            currentFilter === "raw_question_data" ? "bg-blue-300" : ""
          }`}
          onClick={() => {
            setCurrentFilter("raw_question_data");
          }}
        >
          Questions
        </button>
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
