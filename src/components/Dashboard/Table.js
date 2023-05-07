import React, { useState } from "react";
import TableControls from "./TableControls";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const Table = ({ data }) => {
  const [currentFilter, setCurrentFilter] = useState("raw_broadmatch_data");
  const [difficultyIndex, setDifficultyIndex] = useState(-1);
  const [intentIndex, setIntentIndex] = useState(-1);
  const columns = data["columnNames"] || [];
  return (
    <div className="mt-3 ">
      <TableControls
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
      />

      <table className="mt-4 w-full max-w-[60rem] ">
        <TableHeader
          columns={columns}
          setDifficultyIndex={setDifficultyIndex}
          setIntentIndex={setIntentIndex}
        />
        {data[currentFilter]?.map((row, index) => {
          return (
            <TableRow
              row={row}
              key={index}
              difficultyIndex={difficultyIndex}
              intentIndex={intentIndex}
            />
          );
        })}
      </table>
    </div>
  );
};

export default Table;
