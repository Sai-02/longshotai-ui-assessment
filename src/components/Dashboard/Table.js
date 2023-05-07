import React, { useState } from "react";
import TableControls from "./TableControls";

const Table = ({ data }) => {
  const [currentFilter, setCurrentFilter] = useState("raw_broadmatch_data");
  const columns = data["columnNames"] || [];
  const raw_related_data = data["raw_related_data"] || [];
  return (
    <div className="mt-3 ">
      <TableControls
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
      />

      <table className="mt-4 w-full ">
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
        {data[currentFilter]?.map((row, index) => {
          return (
            <tr
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${row.length},1fr)`,
              }}
              key={index}
            >
              {row.map((column, index) => {
                return (
                  <td key={index} className="text-sm overflow-hidden">
                    {column}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
