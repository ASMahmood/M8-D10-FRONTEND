import React from "react";
import { dailyStructure, apiStructure } from "../types/interfaces";
import DailyCard from "./DailyCard";

export default function DailyCol(props: apiStructure) {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "65vh",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "15px 0px 0px 15px",
      }}
    >
      {props.daily !== undefined &&
        props.timezone_offset !== undefined &&
        props.daily
          .slice(1)
          .map((day, index) => (
            <DailyCard
              key={index}
              index={index}
              {...day}
              timezone_offset={
                props.timezone_offset !== undefined
                  ? props.timezone_offset + 1
                  : 0
              }
            />
          ))}
    </div>
  );
}
