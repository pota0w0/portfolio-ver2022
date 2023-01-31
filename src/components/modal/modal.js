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
            right:"2%",
            zIndex:"20",
            backgroundColor: "#000",
            width: "clamp(140px, 13.0208vw, 280px)",
            height:"clamp(60px, 5.2083vw, 100px)",
            color: "#fff",
            fontSize:"clamp(24px, 2.5vw, 48px)",
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