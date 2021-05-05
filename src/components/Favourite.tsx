import React from "react";
import { favsColProps, reduxStore } from "../types/interfaces";
import { useSelector } from "react-redux";

function Favourite() {
  const favsArray = useSelector((state: reduxStore) => state.user.favourites);
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "24vh",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "15px 0px 0px 15px",
        marginBottom: "1vh",
      }}
    >
      {favsArray.length > 0 ? (
        favsArray.map((fav, i) => <h5>{fav.name}</h5>)
      ) : (
        <h3 className="w-100 h-100 text-center py-5 m-0">No Favourites</h3>
      )}
    </div>
  );
}

export default Favourite;
