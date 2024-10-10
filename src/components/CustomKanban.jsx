import React from "react";

// importing board
import Board from "./Board";

const CustomKanban = () => {
  return (
    <>
      <div className="h-screen w-full bg-neutral-900 text-neutral-50">
        <Board />
      </div>
    </>
  );
};

export default CustomKanban;
