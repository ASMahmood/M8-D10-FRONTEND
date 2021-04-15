import React from "react";

import { favsColProps } from "../types/interfaces";

function Favourite(props: Array<favsColProps>) {
  return <div style={{ overflowY: "scroll", height: "25vh" }}></div>;
}

export default Favourite;
