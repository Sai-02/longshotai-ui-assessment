import React from "react";
import TableControls from "./TableControls";

const Table = () => {
  return (
    <div className="mt-3">
      <TableControls />

      <table className="mt-4 w-full">
        <thead className="grid grid-cols-18 ">
          <th className="">
            {" "}
            <input type="checkbox" />{" "}
          </th>
          <th className="col-span-5">Keyword</th>
          <th className="col-span-2">Intent</th>
          <th className="col-span-2">Volume</th>
          <th className="col-span-2">KD%</th>
          <th className="col-span-2">CPC (USD)</th>
          <th className="col-span-2">COM</th>
          <th className="col-span-2">Results</th>
        </thead>
        {[...Array(7)].map((val, index) => {
          return (
            <tr className="grid grid-cols-18 items-center " key={index}>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td className="col-span-5">shopping in barcelona</td>
              <td className="col-span-2 flex items-center justify-center">
                <span className="text-yellow-700 bg-yellow-200 rounded-full p-1">
                  C
                </span>
              </td>
              <td className="col-span-2">Volume</td>
              <td className="col-span-2">KD%</td>
              <td className="col-span-2">CPC (USD)</td>
              <td className="col-span-2">COM</td>
              <td className="col-span-2">Results</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
