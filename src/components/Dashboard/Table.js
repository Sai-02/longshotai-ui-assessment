import React, { useState } from "react";
import TableControls from "./TableControls";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const Table = ({ data }) => {
  const [currentFilter, setCurrentFilter] = useState("raw_broadmatch_data");
  const [difficultyIndex, setDifficultyIndex] = useState(-1);
  const columns = data["columnNames"] || [];
  const raw_related_data = data["raw_related_data"] || [];
  return (
    <div className="mt-3 ">
      <TableControls
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
      />

      <table className="mt-4 w-full ">
        <TableHeader
          columns={columns}
          setDifficultyIndex={setDifficultyIndex}
        />
        {data[currentFilter]?.map((row, index) => {
          return (
            <TableRow row={row} key={index} difficultyIndex={difficultyIndex} />
          );
        })}
      </table>
    </div>
  );
};

export default Table;
