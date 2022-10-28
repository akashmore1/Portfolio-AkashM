// Refer https://blog.devgenius.io/how-to-create-a-custom-cursor-by-using-react-with-no-library-f5f890d82968 for cursor

import React from "react";
import { useContext } from "react"; // used later
import useMousePosition from "./UseMousePosition";
import { MouseContext } from "./MouseContext"; // used from step6
import "./Cursor.css";
const Cursor = () => {
  const { cursorType } = useContext(MouseContext); //used from step6
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        // className={"ring"}
        className={`ring ${cursorType}`} // used from step6
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        // className={"dot"}
        className={`dot ${cursorType}`} // used from step6
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;
