import React from "react";
import { dailyStructure, apiStructure, reduxStore } from "../types/interfaces";
import { useSelector } from "react-redux";
import DailyCard from "./DailyCard";

export default function DailyCol() {
  const dailyArray = useSelector((state: reduxStore) => state.forecast.daily);
  const timezoneOffset = useSelector(
    (state: reduxStore) => state.forecast.timezone_offset
  );
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "60vh",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "15px 0px 0px 15px",
      }}
    >
      {dailyArray.length > 0 &&
        dailyArray
          .slice(1)
          .map((day, index) => (
            <DailyCard
              key={index}
              index={index}
              {...day}
              timezone_offset={timezoneOffset}
            />
          ))}
    </div>
  );
}
