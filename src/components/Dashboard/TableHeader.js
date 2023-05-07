import React, { useEffect } from "react";

const TableHeader = ({ columns, setDifficultyIndex }) => {
  useEffect(() => {
    columns.forEach((val, index) => {
      if (val === "Keyword Difficulty") {
        setDifficultyIndex(index);
      }
    });
  }, []);
  return (
    <thead
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columns?.length},1fr)`,
      }}
    >
      {columns.map((column, index) => {
        return (
          <th key={index} className="text-sm">
            {column}
          </th>
        );
      })}
    </thead>
  );
};

export default TableHeader;
