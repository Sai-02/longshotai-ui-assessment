import React, { useEffect, useState } from "react";
import { keywordDifficulty } from "../../utils/keywordDifficulty";
import Tooltip from "@mui/material/Tooltip";
const TableColumn = ({ column, index, difficultyIndex }) => {
  const [difficultyObj, setDifficultyObj] = useState({});
  useEffect(() => {
    if (isDifficultyIndex()) {
      let val = keywordDifficulty(parseInt(column));
      setDifficultyObj(val);
    }
  }, [difficultyIndex]);
  const isDifficultyIndex = () => index === difficultyIndex;
  return (
    <td key={index} className="text-sm overflow-hidden">
      {isDifficultyIndex() ? (
        <>
          <Tooltip title={difficultyObj?.text}>
            <span
              style={{
                color: difficultyObj?.color,
              }}
            >
              {difficultyObj?.rating}
            </span>
          </Tooltip>
        </>
      ) : (
        <>{column}</>
      )}
    </td>
  );
};

export default TableColumn;
