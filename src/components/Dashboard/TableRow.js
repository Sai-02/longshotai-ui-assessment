import React from "react";
import TableColumn from "./TableColumn";
const TableRow = ({ row, difficultyIndex }) => {
  return (
    <tr
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${row.length},1fr)`,
      }}
    >
      {row.map((column, index) => {
        return (
          <TableColumn
            column={column}
            index={index}
            difficultyIndex={difficultyIndex}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
