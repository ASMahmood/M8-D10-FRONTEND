import React from "react";
import { favsColProps } from "../types/interfaces";

function Favourite(props: favsColProps) {
  return (
    <div className="my-3" style={{ overflowY: "scroll", height: "20vh" }}></div>
  );
}

export default Favourite;
