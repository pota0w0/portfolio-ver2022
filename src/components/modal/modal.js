import React from "react"
import { useState } from "react";

function Accordion({ title, content }) {
  const [isCheck, setCheck] = useState(false);
  return (
    <>
      <div>
        {/* <h1 style={{ fontSize: "30px" }}>{title}</h1> */}
        <button
          onClick={() => {
            setCheck((e) => !e);
          }}
          style={{
            position: "absolute",
            bottom:"2%",
            left:"2%",
            zIndex:"20",
            backgroundColor: "#000",
            width: "clamp(120px, 10.4167vw, 200px)",
            height:"clamp(55px, 4.1667vw, 80px)",
            color: "#fff",
            fontSize:"clamp(24px, 1.8750vw, 36px)",
            fontWeight:"700"
        }}
        >
          {isCheck ? "BACK" : "READ MORE"}
        </button>
      </div>

      {isCheck && (
        <div
          style={{
            position:"absolute",
            zIndex:"10",
            margin: "0",
            backgroundColor: "#fff",
            width:"100%",
            height:"100%"
          }}
        >
          {content}
        </div>
      )}
    </>
  );
}

export default Accordion;