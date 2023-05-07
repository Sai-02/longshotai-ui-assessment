import React, { useEffect, useState } from "react";
import { keywordDifficulty } from "../../utils/keywordDifficulty";
import Tooltip from "@mui/material/Tooltip";
import { intentFinder } from "../../utils/intentFinder";
const TableColumn = ({ column, index, difficultyIndex, intentIndex }) => {
  const [difficultyObj, setDifficultyObj] = useState({});
  const [intentObj, setIntentObj] = useState({});
  useEffect(() => {
    if (isDifficultyIndex()) {
      let val = keywordDifficulty(parseInt(column));
      setDifficultyObj(val);
    }
  }, [difficultyIndex]);
  useEffect(() => {
    if (isIntentIndex()) {
      let val = intentFinder(parseInt(column));
      setIntentObj(val);
    }
  }, [intentIndex]);

  const isDifficultyIndex = () => index === difficultyIndex;
  const isIntentIndex = () => index === intentIndex;
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
      ) : isIntentIndex() ? (
        <>
          <Tooltip title={intentObj["hover-text"]}>
            <span
              style={{
                color: intentObj?.color?.text,
                background: intentObj?.color?.bg,
              }}
              className="p-1 w-4 h-4 rounded-full"
            >
              {intentObj?.type?.charAt(0)}
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
